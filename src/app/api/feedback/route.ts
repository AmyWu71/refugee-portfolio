import { NextRequest, NextResponse } from 'next/server';

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

// 使用内存存储（在Vercel无服务器环境中）
let feedbackMessages: FeedbackMessage[] = [];

// 初始化一些测试数据
if (feedbackMessages.length === 0) {
  feedbackMessages = [
    {
      id: "1761019400000",
      name: "Anonymous",
      email: "",
      subject: "匿名留言",
      message: "这是一条匿名留言，测试匿名功能。",
      category: "general",
      isAnonymous: true,
      type: "messages",
      timestamp: "2025-10-21T04:20:00.000Z",
      status: "approved"
    },
    {
      id: "1761019500000",
      name: "张三",
      email: "zhangsan@example.com",
      subject: "关于研究的问题",
      message: "您好，我对您关于缅甸难民的研究很感兴趣，希望能了解更多细节。",
      category: "research",
      isAnonymous: false,
      type: "questions",
      timestamp: "2025-10-21T04:30:00.000Z",
      status: "approved",
      reply: "感谢您的关注！我会尽快回复您的问题。",
      replyTimestamp: "2025-10-21T04:35:00.000Z"
    }
  ];
}

export async function GET() {
  return NextResponse.json(feedbackMessages);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newMessage: FeedbackMessage = {
      id: Date.now().toString(),
      ...body,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
    
    feedbackMessages.unshift(newMessage);
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
    
    const messageIndex = feedbackMessages.findIndex(msg => msg.id === id);
    if (messageIndex === -1) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }
    
    feedbackMessages[messageIndex] = { ...feedbackMessages[messageIndex], ...updates };
    return NextResponse.json(feedbackMessages[messageIndex]);
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
    
    const messageIndex = feedbackMessages.findIndex(msg => msg.id === id);
    
    if (messageIndex === -1) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }
    
    const deletedMessage = feedbackMessages[messageIndex];
    feedbackMessages.splice(messageIndex, 1);
    
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