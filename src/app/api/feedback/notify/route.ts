import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { message, type, replyText } = await request.json();

    let emailOptions;
    
    if (type === 'approved') {
      emailOptions = emailService.generateApprovalEmail(message);
    } else if (type === 'reply' && replyText) {
      emailOptions = emailService.generateReplyEmail(message, replyText);
    } else {
      return NextResponse.json({ error: 'Invalid email type or missing reply text' }, { status: 400 });
    }

    const success = await emailService.sendEmail(emailOptions);

    if (success) {
      return NextResponse.json({ success: true, message: 'Email notification sent' });
    } else {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return NextResponse.json({ error: 'Failed to send email notification' }, { status: 500 });
  }
}
