# 留言管理指南

## 概述

现在您的网站已经具备了完整的留言管理功能，包括：
- 用户留言提交
- 管理员审核系统
- 邮件通知功能
- 回复功能

## 访问管理面板

1. 访问您的网站：https://refugee-portfolio.vercel.app/feedback
2. 在页面底部找到"管理员入口"部分
3. 点击"进入管理面板"按钮
4. 输入管理员密码：`admin123`

## 管理功能

### 1. 审核留言
- **待审核**：查看所有新提交的留言
- **已通过**：查看已审核通过的留言
- **已拒绝**：查看被拒绝的留言

### 2. 操作选项
- **通过**：将留言状态改为"已通过"，留言将显示在公共页面上
- **拒绝**：将留言状态改为"已拒绝"，留言不会显示在公共页面上
- **回复**：为留言添加官方回复

### 3. 邮件通知
当您执行以下操作时，系统会自动发送邮件通知：
- 通过留言审核
- 回复用户留言

## 配置邮件服务

目前邮件功能是模拟的（只会在控制台输出）。要启用真实的邮件发送，您需要：

### 选项1：使用 SendGrid（推荐）

1. 注册 SendGrid 账户
2. 获取 API 密钥
3. 在 Vercel 环境变量中添加：
   ```
   EMAIL_API_KEY=your_sendgrid_api_key
   FROM_EMAIL=noreply@yourdomain.com
   NEXT_PUBLIC_SITE_URL=https://refugee-portfolio.vercel.app
   ```

### 选项2：使用 Gmail + Nodemailer

1. 启用 Gmail 两步验证
2. 生成应用密码
3. 在 Vercel 环境变量中添加：
   ```
   GMAIL_USER=your_gmail@gmail.com
   GMAIL_PASS=your_app_password
   NEXT_PUBLIC_SITE_URL=https://refugee-portfolio.vercel.app
   ```

### 选项3：使用 AWS SES

1. 设置 AWS SES
2. 在 Vercel 环境变量中添加：
   ```
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=us-east-1
   NEXT_PUBLIC_SITE_URL=https://refugee-portfolio.vercel.app
   ```

## 安全建议

1. **更改默认密码**：将 `admin123` 改为更安全的密码
2. **使用环境变量**：将敏感信息存储在环境变量中
3. **定期备份**：由于使用的是内存存储，重启后会丢失数据。建议在生产环境中使用数据库
4. **访问限制**：考虑添加 IP 限制或更复杂的身份验证

## 数据存储

目前留言数据存储在内存中，这意味着：
- 重启服务器后数据会丢失
- 不适合生产环境长期使用

建议在生产环境中集成数据库，如：
- PostgreSQL
- MongoDB
- Supabase
- PlanetScale

## 故障排除

### 常见问题

1. **无法访问管理面板**
   - 检查 URL 是否正确：`/admin/feedback`
   - 确认密码是否正确

2. **邮件没有发送**
   - 检查环境变量配置
   - 查看控制台日志
   - 确认邮件服务配置正确

3. **留言没有显示**
   - 确认留言状态为"已通过"
   - 刷新页面
   - 检查 API 是否正常工作

## 下一步

1. 配置真实的邮件服务
2. 集成数据库存储
3. 添加更安全的身份验证
4. 考虑添加留言分类和搜索功能
5. 添加数据导出功能

## 联系支持

如果您在使用过程中遇到问题，请检查：
1. 控制台错误日志
2. Vercel 部署日志
3. API 响应状态

---

*最后更新：2025年1月*
