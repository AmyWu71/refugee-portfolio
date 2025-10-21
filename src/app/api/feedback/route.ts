import { NextRequest, NextResponse } from 'next/server';

// 简单的内存存储（在生产环境中应该使用数据库）
let feedbackMessages: any[] = [];

export async function GET() {
  return NextResponse.json(feedbackMessages);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newMessage = {
      id: Date.now().toString(),
      ...body,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
    
    feedbackMessages.unshift(newMessage);
    return NextResponse.json(newMessage);
  } catch (error) {
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
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update message' }, { status: 500 });
  }
}
