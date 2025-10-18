"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  id: string;
  name: string;
  subject: string;
  message: string;
  timestamp: string;
  isAnonymous: boolean;
  replies?: Reply[];
}

interface Reply {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  isOfficial: boolean;
}

export default function MessageBoard() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  // 在实际应用中，这些数据会从API获取
  useEffect(() => {
    // 模拟API调用延迟
    setTimeout(() => {
      setMessages([]);
      setLoading(false);
    }, 1000);
  }, []);

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

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">{t('feedback.recentMessages')}</h3>
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">{t('feedback.recentMessages')}</h3>
      
      {messages.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>{t('feedback.noMessages')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{message.subject}</h4>
                  <p className="text-sm text-gray-600">
                    {message.isAnonymous ? t('feedback.anonymous') : message.name} • {formatDate(message.timestamp)}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 whitespace-pre-wrap">{message.message}</p>
              
              {/* Replies */}
              {message.replies && message.replies.length > 0 && (
                <div className="ml-4 pl-4 border-l-2 border-blue-200">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">{t('feedback.replies')}</h5>
                  {message.replies.map((reply) => (
                    <div key={reply.id} className="mb-3 p-3 bg-gray-50 rounded">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {reply.author}
                          {reply.isOfficial && (
                            <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                              {t('feedback.official')}
                            </span>
                          )}
                        </span>
                        <span className="text-xs text-gray-500">{formatDate(reply.timestamp)}</span>
                      </div>
                      <p className="text-sm text-gray-700">{reply.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
