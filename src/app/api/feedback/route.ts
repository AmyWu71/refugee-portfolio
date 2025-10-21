import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// 定义消息类型
interface FeedbackMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  isAnonymous: boolean;
  type: 'messages' | 'questions';
  status: 'pending' | 'approved' | 'rejected';
  reply?: string;
  replyTimestamp?: string;
  category?: string;
}

// 数据文件路径
const DATA_FILE = path.join(process.cwd(), 'src/data/feedback.json');

// 读取数据
function readMessages(): FeedbackMessage[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading feedback data:', error);
  }
  return [];
}

// 写入数据
function writeMessages(messages: FeedbackMessage[]): void {
  try {
    // 确保目录存在
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));
  } catch (error) {
    console.error('Error writing feedback data:', error);
  }
}

export async function GET() {
  const messages = readMessages();
  return NextResponse.json(messages);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const messages = readMessages();
    const newMessage: FeedbackMessage = {
      id: Date.now().toString(),
      ...body,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
    
    messages.unshift(newMessage);
    writeMessages(messages);
    return NextResponse.json(newMessage);
  } catch (err) {
    console.error('Failed to save message:', err);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;
    const messages = readMessages();
    
    const messageIndex = messages.findIndex(msg => msg.id === id);
    if (messageIndex === -1) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }
    
    messages[messageIndex] = { ...messages[messageIndex], ...updates };
    writeMessages(messages);
    return NextResponse.json(messages[messageIndex]);
  } catch (err) {
    console.error('Failed to update message:', err);
    return NextResponse.json({ error: 'Failed to update message' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
    }
    
    const messages = readMessages();
    const messageIndex = messages.findIndex(msg => msg.id === id);
    
    if (messageIndex === -1) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }
    
    const deletedMessage = messages[messageIndex];
    messages.splice(messageIndex, 1);
    writeMessages(messages);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Message deleted successfully',
      deletedMessage 
    });
  } catch (err) {
    console.error('Failed to delete message:', err);
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}
