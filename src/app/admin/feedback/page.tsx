"use client";

import { useState, useEffect } from "react";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  category?: string;
  timestamp: string;
  isAnonymous: boolean;
  type: 'messages' | 'questions';
  status: 'pending' | 'approved' | 'rejected';
  reply?: string;
  replyTimestamp?: string;
}

export default function AdminFeedbackPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [filter, setFilter] = useState<'all' | 'messages' | 'questions' | 'pending' | 'approved' | 'rejected'>('all');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyText, setReplyText] = useState('');
  const [isReplying, setIsReplying] = useState(false);

  // 模拟从localStorage加载数据
  useEffect(() => {
    const savedMessages = localStorage.getItem('feedback-messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const filteredMessages = messages.filter(msg => {
    if (filter === 'all') return true;
    if (filter === 'messages') return msg.type === 'messages';
    if (filter === 'questions') return msg.type === 'questions';
    return msg.status === filter;
  });

  const handleStatusChange = (messageId: string, status: 'approved' | 'rejected') => {
    const updatedMessages = messages.map(msg => 
      msg.id === messageId ? { ...msg, status } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem('feedback-messages', JSON.stringify(updatedMessages));
  };

  const handleReply = async () => {
    if (!selectedMessage || !replyText.trim()) return;
    
    setIsReplying(true);
    
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const updatedMessages = messages.map(msg => 
      msg.id === selectedMessage.id 
        ? { 
            ...msg, 
            reply: replyText,
            replyTimestamp: new Date().toISOString(),
            status: 'approved' as const
          } 
        : msg
    );
    
    setMessages(updatedMessages);
    localStorage.setItem('feedback-messages', JSON.stringify(updatedMessages));
    
    setReplyText('');
    setSelectedMessage(null);
    setIsReplying(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">留言管理</h1>
          <p className="mt-2 text-gray-600">管理和回复用户留言</p>
        </div>

        {/* 筛选器 */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            {[
              { key: 'all', label: '全部' },
              { key: 'messages', label: '留言' },
              { key: 'questions', label: '提问' },
              { key: 'pending', label: '待审核' },
              { key: 'approved', label: '已通过' },
              { key: 'rejected', label: '已拒绝' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key as 'all' | 'messages' | 'questions' | 'pending' | 'approved' | 'rejected')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === key
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 留言列表 */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              留言列表 ({filteredMessages.length})
            </h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {filteredMessages.map((message) => (
              <div key={message.id} className="p-6 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-medium text-gray-900">
                        {message.subject}
                      </h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(message.status)}`}>
                        {message.status === 'pending' ? '待审核' : 
                         message.status === 'approved' ? '已通过' : '已拒绝'}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {message.type === 'messages' ? '留言' : '提问'}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">
                        {message.isAnonymous ? '匿名用户' : message.name}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(message.timestamp)}</span>
                      {message.category && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{message.category}</span>
                        </>
                      )}
                    </div>
                    
                    <p className="text-gray-700 mb-3">{message.message}</p>
                    
                    {message.reply && (
                      <div className="bg-blue-50 p-3 rounded-md">
                        <div className="text-sm font-medium text-blue-800 mb-1">官方回复：</div>
                        <p className="text-blue-700">{message.reply}</p>
                        <div className="text-xs text-blue-600 mt-1">
                          {formatDate(message.replyTimestamp!)}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    {message.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleStatusChange(message.id, 'approved')}
                          className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded hover:bg-green-200"
                        >
                          通过
                        </button>
                        <button
                          onClick={() => handleStatusChange(message.id, 'rejected')}
                          className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200"
                        >
                          拒绝
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => setSelectedMessage(message)}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
                    >
                      {message.reply ? '编辑回复' : '回复'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredMessages.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              暂无留言
            </div>
          )}
        </div>

        {/* 回复模态框 */}
        {selectedMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  回复留言：{selectedMessage.subject}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    回复内容
                  </label>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请输入回复内容..."
                  />
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setSelectedMessage(null);
                      setReplyText('');
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    取消
                  </button>
                  <button
                    onClick={handleReply}
                    disabled={isReplying || !replyText.trim()}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isReplying ? '发送中...' : '发送回复'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
