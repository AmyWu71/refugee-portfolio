"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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

export default function AdminFeedbackPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<FeedbackMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [selectedMessage, setSelectedMessage] = useState<FeedbackMessage | null>(null);
  const [replyText, setReplyText] = useState('');
  const [isReplying, setIsReplying] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  // 简单的密码验证
  const ADMIN_PASSWORD = 'admin20080701';

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
      setError('');
    } else {
      setError('密码错误，请重试');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadMessages();
    }
  }, [isAuthenticated]);

  const loadMessages = async () => {
    try {
      const response = await fetch('/api/feedback');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Failed to load messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateMessageStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      const response = await fetch('/api/feedback', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status })
      });

      if (response.ok) {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === id ? { ...msg, status } : msg
          )
        );
        
        // 发送邮件通知
        const message = messages.find(msg => msg.id === id);
        if (message && status === 'approved') {
          await sendEmailNotification(message, 'approved');
        }
        
        alert(`留言已${status === 'approved' ? '通过' : '拒绝'}`);
      }
    } catch (error) {
      console.error('Failed to update message status:', error);
      alert('更新状态失败');
    }
  };

  const sendReply = async () => {
    if (!selectedMessage || !replyText.trim()) return;

    setIsReplying(true);
    try {
      const response = await fetch('/api/feedback', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          id: selectedMessage.id, 
          reply: replyText.trim(),
          replyTimestamp: new Date().toISOString(),
          status: 'approved'
        })
      });

      if (response.ok) {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === selectedMessage.id 
              ? { ...msg, reply: replyText.trim(), replyTimestamp: new Date().toISOString(), status: 'approved' }
              : msg
          )
        );
        setSelectedMessage(null);
        setReplyText('');
        alert('回复已发送');
        
        // 发送回复邮件通知
        await sendEmailNotification(selectedMessage, 'reply', replyText.trim());
      }
    } catch (error) {
      console.error('Failed to send reply:', error);
      alert('发送回复失败');
    } finally {
      setIsReplying(false);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('确定要删除这条留言吗？此操作不可撤销。')) {
      return;
    }

    try {
      const response = await fetch(`/api/feedback?id=${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setMessages(prev => prev.filter(msg => msg.id !== id));
        alert('留言已删除');
      } else {
        const error = await response.json();
        alert(`删除失败: ${error.error}`);
      }
    } catch (error) {
      console.error('Failed to delete message:', error);
      alert('删除失败，请重试');
    }
  };

  const sendEmailNotification = async (message: FeedbackMessage, type: 'approved' | 'reply', replyText?: string) => {
    try {
      await fetch('/api/feedback/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          type,
          replyText
        })
      });
    } catch (error) {
      console.error('Failed to send email notification:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return '待审核';
      case 'approved': return '已通过';
      case 'rejected': return '已拒绝';
      default: return status;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">管理员登录</h1>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="password"
                placeholder="请输入管理员密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              登录
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <button
              onClick={() => router.push('/feedback')}
              className="text-blue-600 hover:text-blue-800 underline text-sm transition-colors"
            >
              返回反馈页面
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  const filteredMessages = messages.filter(msg => msg.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">留言管理</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">总计: {messages.length} 条</span>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-red-600 hover:text-red-800 text-sm underline"
              >
                退出登录
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit mb-6">
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'pending'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            待审核 ({messages.filter(msg => msg.status === 'pending').length})
          </button>
          <button
            onClick={() => setActiveTab('approved')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'approved'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            已通过 ({messages.filter(msg => msg.status === 'approved').length})
          </button>
          <button
            onClick={() => setActiveTab('rejected')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'rejected'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            已拒绝 ({messages.filter(msg => msg.status === 'rejected').length})
          </button>
        </div>

        {/* Messages List */}
        <div className="bg-white rounded-lg shadow-md">
          {filteredMessages.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>暂无{getStatusText(activeTab)}的留言</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredMessages.map((message) => (
                <div key={message.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-medium text-gray-900">{message.subject}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          message.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          message.status === 'approved' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {getStatusText(message.status)}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {message.type === 'messages' ? '留言' : '问题'}
                        </span>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">{message.isAnonymous ? '匿名用户' : message.name}</span>
                        <span className="mx-2">•</span>
                        <span>{message.email}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(message.timestamp)}</span>
                        {message.category && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{message.category}</span>
                          </>
                        )}
                      </div>
                      
                      <div className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-md">
                        {message.message}
                      </div>
                      
                      {message.reply && (
                        <div className="mt-4 bg-blue-50 p-4 rounded-md">
                          <div className="text-sm font-medium text-blue-800 mb-2">官方回复：</div>
                          <p className="text-blue-700">{message.reply}</p>
                          {message.replyTimestamp && (
                            <div className="text-xs text-blue-600 mt-2">
                              回复时间: {formatDate(message.replyTimestamp)}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {message.status === 'pending' && (
                    <div className="flex space-x-3">
                      <button
                        onClick={() => updateMessageStatus(message.id, 'approved')}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        通过
                      </button>
                      <button
                        onClick={() => updateMessageStatus(message.id, 'rejected')}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        拒绝
                      </button>
                      <button
                        onClick={() => setSelectedMessage(message)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        回复
                      </button>
                      <button
                        onClick={() => deleteMessage(message.id)}
                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      >
                        删除
                      </button>
                    </div>
                  )}
                  
                  {message.status === 'approved' && !message.reply && (
                    <div className="flex space-x-3">
                      <button
                        onClick={() => setSelectedMessage(message)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        添加回复
                      </button>
                      <button
                        onClick={() => deleteMessage(message.id)}
                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      >
                        删除
                      </button>
                    </div>
                  )}
                  
                  {message.status === 'approved' && message.reply && (
                    <div className="flex space-x-3">
                      <button
                        onClick={() => deleteMessage(message.id)}
                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      >
                        删除
                      </button>
                    </div>
                  )}
                  
                  {message.status === 'rejected' && (
                    <div className="flex space-x-3">
                      <button
                        onClick={() => deleteMessage(message.id)}
                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      >
                        删除
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Reply Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl mx-4">
            <h3 className="text-lg font-medium mb-4">回复留言</h3>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">来自: {selectedMessage.isAnonymous ? '匿名用户' : selectedMessage.name}</p>
              <p className="text-sm text-gray-600 mb-2">主题: {selectedMessage.subject}</p>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-gray-700">{selectedMessage.message}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">回复内容</label>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入回复内容..."
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setSelectedMessage(null);
                  setReplyText('');
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                取消
              </button>
              <button
                onClick={sendReply}
                disabled={isReplying || !replyText.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isReplying ? '发送中...' : '发送回复'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}