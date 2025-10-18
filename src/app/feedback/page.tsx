"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FeedbackPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'messages' | 'questions'>('messages');
  const [messages, setMessages] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general',
    anonymous: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const feedbackImages = [
    "/hero-bg-1.png",
    "/hero-bg-2.png", 
    "/hero-bg-3.png",
    "/hero-bg-4.png",
    "/hero-bg-5.png"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 添加到消息列表
    const newMessage = {
      id: Date.now().toString(),
      name: formData.anonymous ? 'Anonymous' : formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      category: formData.category,
      timestamp: new Date().toISOString(),
      isAnonymous: formData.anonymous,
      type: activeTab,
      status: 'pending' as const
    };
    
    setMessages(prev => [newMessage, ...prev]);
    
    // 保存到localStorage供管理页面使用
    const existingMessages = JSON.parse(localStorage.getItem('feedback-messages') || '[]');
    const updatedMessages = [newMessage, ...existingMessages];
    localStorage.setItem('feedback-messages', JSON.stringify(updatedMessages));
    
    // 重置表单
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: 'general',
      anonymous: false
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
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

  return (
    <>
      <PageHero 
        title={t('feedback.title')} 
        subtitle={t('feedback.subtitle')}
        images={feedbackImages}
        alt="Feedback background"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'messages'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('feedback.messageBoard')}
            </button>
            <button
              onClick={() => setActiveTab('questions')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'questions'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('feedback.askQuestion')}
            </button>
          </div>

          {/* Message Board Tab */}
          {activeTab === 'messages' && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-4 text-blue-800">{t('feedback.shareThoughts')}</h3>
                <p className="text-blue-700 text-sm mb-4">
                  {t('feedback.shareDescription')}
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('feedback.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required={!formData.anonymous}
                        disabled={formData.anonymous}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('feedback.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required={!formData.anonymous}
                        disabled={formData.anonymous}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                      />
                    </div>
                  </div>

                  <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('feedback.questionSubject')} *
                      </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('feedback.messageContent')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="anonymous"
                      name="anonymous"
                      checked={formData.anonymous}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
                      {t('feedback.anonymous')}
                    </label>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t('feedback.submitting') : t('feedback.submit')}
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Messages Display */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">{t('feedback.recentMessages')}</h3>
                
                {messages.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>{t('feedback.noMessages')}</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {messages.filter(msg => msg.type === 'messages').map((message) => (
                      <div key={message.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium text-gray-900">{message.subject}</h4>
                            <p className="text-sm text-gray-600">
                              {message.isAnonymous ? 'Anonymous' : message.name} • {formatDate(message.timestamp)}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Questions Tab */}
          {activeTab === 'questions' && (
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold mb-4 text-green-800">{t('feedback.askQuestion')}</h3>
                <p className="text-green-700 text-sm mb-4">
                  {t('feedback.questionDescription')}
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('feedback.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required={!formData.anonymous}
                        disabled={formData.anonymous}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('feedback.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required={!formData.anonymous}
                        disabled={formData.anonymous}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('feedback.category')} *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="general">{t('feedback.categoryGeneral')}</option>
                      <option value="research">{t('feedback.categoryResearch')}</option>
                      <option value="technical">{t('feedback.categoryTechnical')}</option>
                      <option value="collaboration">{t('feedback.categoryCollaboration')}</option>
                      <option value="other">{t('feedback.categoryOther')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Question {t('feedback.messageSubject')} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('feedback.questionDetails')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="anonymous"
                      name="anonymous"
                      checked={formData.anonymous}
                      onChange={handleChange}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
                      {t('feedback.anonymous')}
                    </label>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t('feedback.submitting') : t('feedback.submit')}
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Questions Display */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">{t('feedback.recentMessages')}</h3>
                
                {messages.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>{t('feedback.noMessages')}</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {messages.filter(msg => msg.type === 'questions').map((message) => (
                      <div key={message.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium text-gray-900">{message.subject}</h4>
                            <p className="text-sm text-gray-600">
                              {message.isAnonymous ? 'Anonymous' : message.name} • {formatDate(message.timestamp)}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">{t('feedback.directContact')}</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                {t('feedback.email')}: 
                <a className="text-blue-600 hover:text-blue-800 underline ml-1" href="mailto:amy08711@outlook.com">
                  amy08711@outlook.com
                </a>
              </p>
              <p className="text-sm text-gray-700">
                {t('feedback.phone')}: 
                <a className="text-blue-600 hover:text-blue-800 underline ml-1" href="tel:+8613829900066">
                  +86 13829900066
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
