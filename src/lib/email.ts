// 邮件服务配置
// 在生产环境中，您需要集成真实的邮件服务，如 SendGrid, Nodemailer, AWS SES 等

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export class EmailService {
  private apiKey?: string;
  private fromEmail: string;

  constructor() {
    // 从环境变量获取配置
    this.apiKey = process.env.EMAIL_API_KEY;
    this.fromEmail = process.env.FROM_EMAIL || 'noreply@refugee-portfolio.com';
  }

  async sendEmail(options: EmailOptions): Promise<boolean> {
    try {
      // 这里应该集成真实的邮件服务
      // 示例：使用 SendGrid
      /*
      if (!this.apiKey) {
        throw new Error('Email API key not configured');
      }

      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(this.apiKey);

      const msg = {
        to: options.to,
        from: this.fromEmail,
        subject: options.subject,
        html: options.html,
        text: options.text || this.stripHtml(options.html),
      };

      await sgMail.send(msg);
      */

      // 目前只是记录到控制台
      console.log('📧 Email would be sent:');
      console.log('To:', options.to);
      console.log('Subject:', options.subject);
      console.log('HTML:', options.html);

      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }

  private stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  }

  // 生成邮件模板
  generateApprovalEmail(message: {
    name: string;
    email: string;
    subject: string;
    message: string;
    isAnonymous: boolean;
  }): EmailOptions {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #28a745; margin-bottom: 16px;">✅ 留言审核通过</h2>
          <p>您好 ${message.isAnonymous ? '匿名用户' : message.name}，</p>
          <p>您的留言已通过审核并发布在我们的网站上。</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #495057; margin-bottom: 12px;">您的留言内容：</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
            <strong style="color: #495057;">主题：</strong> ${message.subject}<br><br>
            <strong style="color: #495057;">内容：</strong><br>
            <div style="white-space: pre-wrap; color: #6c757d;">${message.message}</div>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; background-color: #e3f2fd; border-radius: 8px;">
          <p style="margin: 0; color: #1976d2;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://refugee-portfolio.vercel.app'}/feedback" 
               style="color: #1976d2; text-decoration: none; font-weight: bold;">
              查看留言页面
            </a>
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 14px;">
          <p>感谢您的参与！</p>
          <p><strong>A Name, A Chance</strong> 团队</p>
        </div>
      </div>
    `;

    return {
      to: message.email,
      subject: `留言审核通过 - ${message.subject}`,
      html
    };
  }

  generateReplyEmail(message: {
    name: string;
    email: string;
    subject: string;
    message: string;
    isAnonymous: boolean;
  }, replyText: string): EmailOptions {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #007bff; margin-bottom: 16px;">💬 收到回复</h2>
          <p>您好 ${message.isAnonymous ? '匿名用户' : message.name}，</p>
          <p>您的留言收到了官方回复：</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #495057; margin-bottom: 12px;">您的留言：</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #6c757d; border-radius: 4px;">
            <strong style="color: #495057;">主题：</strong> ${message.subject}<br><br>
            <div style="white-space: pre-wrap; color: #6c757d;">${message.message}</div>
          </div>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #495057; margin-bottom: 12px;">官方回复：</h3>
          <div style="background-color: #e8f5e8; padding: 15px; border-left: 4px solid #28a745; border-radius: 4px;">
            <div style="white-space: pre-wrap; color: #155724;">${replyText}</div>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; background-color: #e3f2fd; border-radius: 8px;">
          <p style="margin: 0; color: #1976d2;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://refugee-portfolio.vercel.app'}/feedback" 
               style="color: #1976d2; text-decoration: none; font-weight: bold;">
              查看留言页面
            </a>
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 14px;">
          <p>感谢您的关注！</p>
          <p><strong>A Name, A Chance</strong> 团队</p>
        </div>
      </div>
    `;

    return {
      to: message.email,
      subject: `收到回复 - ${message.subject}`,
      html
    };
  }
}

// 导出单例实例
export const emailService = new EmailService();
