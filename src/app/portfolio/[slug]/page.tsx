"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { useState, use } from "react";
import { portfolio } from "@/data/portfolio";
import ImageCarousel from "@/components/ImageCarousel";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const item = portfolio.find((p) => p.slug === slug);
  if (!item) return notFound();
  const { t } = useLanguage();

  // State for interview tab selection
  const [activeTab, setActiveTab] = useState<'summary' | 'transcript'>('summary');

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <article className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold">{t(item.titleKey)}</h1>
        {item.slug === "research-report-employment-challenges" && (
          <h2 className="mt-2 text-lg text-gray-600">{t('portfolio.researchReport.chineseTitle')}</h2>
        )}
        {item.slug === "poster-migration" && (
          <h2 className="mt-2 text-lg text-gray-600">{t('portfolio.poster.chineseTitle')}</h2>
        )}
        {item.slug === "handbook-visual-guide" && (
          <>
            <h2 className="mt-2 text-lg text-gray-600">{t('portfolio.handbook.englishTitle')}</h2>
            <p className="mt-1 text-sm text-gray-500">{t('portfolio.handbook.author')}</p>
          </>
        )}
        {item.slug === "living-between-borders-interview" && (
          <>
            <p className="mt-2 text-sm text-gray-400">{t(item.summaryKey)}</p>
            <p className="mt-1 text-sm text-gray-500">{t('portfolio.interview.author')}</p>
          </>
        )}
        {item.slug !== "living-between-borders-interview" && (
          <p className="mt-2 text-sm text-gray-400">{t(item.backgroundKey)}</p>
        )}
      </header>

      {item.images?.length ? (
        item.slug === "handbook-visual-guide" ? (
          <ImageCarousel images={item.images} alt={t(item.titleKey)} />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {item.images.map((src) => (
              <div key={src} className="relative aspect-[4/3] bg-black/20 rounded-lg overflow-hidden">
                <Image src={src} alt={t(item.titleKey)} fill className="object-cover" />
              </div>
            ))}
          </div>
        )
      ) : null}


      {item.pdf || item.pdfs ? (
        <div className="space-y-4">
          
          {item.slug === "handbook-visual-guide" && (
            <>
              {/* Handbook下载按钮 */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={item.pdf}
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
{t('portfolio.handbook.downloadHandbook')}
                </a>
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
{t('portfolio.common.openInNewWindow')}
                </a>
              </div>
              
              {/* Handbook问卷部分 */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-4 text-blue-800">{t('portfolio.handbook.helpImprove')}</h3>
                <div className="prose max-w-none text-sm text-blue-700">
                  <p className="mb-4">
{t('portfolio.handbook.surveyDescription')}
                  </p>
                  <p className="mb-4 text-sm">
{t('portfolio.handbook.emailInstruction')} <a href="mailto:amy08711@outlook.com" className="text-blue-600 hover:text-blue-800 underline">amy08711@outlook.com</a>
                  </p>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfgpgbjAhCU109DRvIVEVwRm3NT6zIMkWpKOI5vTTCWK2WdAw/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:text-white focus:bg-white focus:text-blue-600 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
{t('portfolio.handbook.onlineSurvey')}
                      </a>

                      <a
                        href="/Survey.pdf"
                        download
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:text-white focus:bg-white focus:text-blue-600 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
{t('portfolio.handbook.downloadEnglish')}
                      </a>

                      <a
                        href="/စစ်တမ်း.pdf"
                        download
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:text-white focus:bg-white focus:text-blue-600 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
{t('portfolio.handbook.downloadMyanmar')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {item.slug === "research-report-employment-challenges" && (
            <>
              {/* 研究报告摘要 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">{t('portfolio.researchReport.summaryTitle')}</h3>
                <div className="prose max-w-none text-sm">
                  <p className="mb-4">
{t('portfolio.researchReport.summaryContent')}
                  </p>
                  <h4 className="font-semibold mb-2">{t('portfolio.researchReport.keyFindings')}</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>{t('portfolio.researchReport.finding1')}</li>
                    <li>{t('portfolio.researchReport.finding2')}</li>
                    <li>{t('portfolio.researchReport.finding3')}</li>
                    <li>{t('portfolio.researchReport.finding4')}</li>
                  </ul>
                  <p className="mt-4 text-gray-600">
{t('portfolio.researchReport.viewComplete')}
                  </p>
                  <p className="mt-3">
                    <a 
                      href="https://www.chinadevelopmentbrief.org.cn/news/detail/66147.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
{t('portfolio.researchReport.viewOriginal')}
                    </a>
                  </p>
                </div>
              </div>
              
              {/* 研究报告下载按钮 */}
              <div className="flex flex-wrap gap-4 mb-6">
                {(item.pdfs || [item.pdf]).map((pdf, index) => (
                  <div key={index} className="flex gap-2">
                    <a
                      href={pdf}
                      download
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
{t('portfolio.common.downloadPdf')} {item.pdfs && item.pdfs.length > 1 ? index + 1 : ''}
                    </a>
                    <a
                      href={pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
    {t('portfolio.common.openInNewWindow')}
                    </a>
                  </div>
                ))}
              </div>
              
              {/* 研究报告PDF查看器 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">{t('portfolio.researchReport.viewCompleteReport')}</h3>
                </div>
                <div className="h-[80vh]">
                  <iframe
                    src={item.pdf}
                    className="w-full h-full border-0"
                    title="Research Report PDF"
                  />
                </div>
              </div>
            </>
          )}

          {item.slug === "rohingya-refugee-case-study" && (
            <>
              {/* 罗兴亚研究摘要 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">{t('portfolio.rohingya.summaryTitle')}</h3>
                <div className="prose max-w-none text-sm">
                  <p className="mb-4">
{t('portfolio.rohingya.summaryContent')}
                  </p>
                  <h4 className="font-semibold mb-2">{t('portfolio.rohingya.keyFocusAreas')}</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>{t('portfolio.rohingya.focus1')}</li>
                    <li>{t('portfolio.rohingya.focus2')}</li>
                    <li>{t('portfolio.rohingya.focus3')}</li>
                    <li>{t('portfolio.rohingya.focus4')}</li>
                    <li>{t('portfolio.rohingya.focus5')}</li>
                  </ul>
                  <p className="mt-4 text-gray-600">
{t('portfolio.rohingya.viewComplete')}
                  </p>
                </div>
              </div>
              
              {/* 罗兴亚研究下载按钮 */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={item.pdf}
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
{t('portfolio.common.downloadPdf')}
                </a>
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
{t('portfolio.common.openInNewWindow')}
                </a>
              </div>
              
              {/* 罗兴亚研究PDF查看器 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">{t('portfolio.rohingya.viewCompleteResearch')}</h3>
                </div>
                <div className="h-[80vh]">
                  <iframe
                    src={item.pdf}
                    className="w-full h-full border-0"
                    title="Rohingya Refugee Case Study PDF"
                  />
                </div>
              </div>
            </>
          )}

          {item.slug === "mun-proposal" && (
            <>
              {/* MUN提案引入视频 */}
              {item.video && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">{t('portfolio.common.introductionVideo')}</h3>
                  <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
                    <video
                      src={item.video}
                      className="w-full h-full object-contain"
                      controls
                      preload="metadata"
                    >
{t('portfolio.common.videoNotSupported')}
                    </video>
                  </div>
                </div>
              )}
              
              {/* MUN提案摘要 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">{t('portfolio.munProposal.summaryTitle')}</h3>
                <div className="prose max-w-none text-sm">
                  <p className="mb-4">
{t('portfolio.munProposal.summaryContent')}
                  </p>
                  <h4 className="font-semibold mb-2">{t('portfolio.munProposal.keyComponents')}</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>{t('portfolio.munProposal.component1')}</li>
                    <li>{t('portfolio.munProposal.component2')}</li>
                    <li>{t('portfolio.munProposal.component3')}</li>
                    <li>{t('portfolio.munProposal.component4')}</li>
                    <li>{t('portfolio.munProposal.component5')}</li>
                  </ul>
                  <p className="mt-4 text-gray-600">
{t('portfolio.munProposal.viewComplete')}
                  </p>
                </div>
              </div>
              
              {/* MUN提案下载按钮 */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={item.pdf}
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
{t('portfolio.common.downloadPdf')}
                </a>
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
{t('portfolio.common.openInNewWindow')}
                </a>
              </div>
              
              {/* MUN提案PDF查看器 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">{t('portfolio.munProposal.viewCompleteProposal')}</h3>
                </div>
                <div className="h-[80vh]">
                  <iframe
                    src={item.pdf}
                    className="w-full h-full border-0"
                    title="MUN Proposal PDF"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      ) : null}

      {/* 访谈内容 */}
      {item.slug === "living-between-borders-interview" && item.interviewContent && (
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none" style={{fontFamily: 'Times New Roman, serif', fontSize: '14pt', lineHeight: '1.5'}}>
            {/* 访谈PDF下载 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">{t('portfolio.interview.transcriptTitle')}</h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/interview-transcript.pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
{t('portfolio.common.downloadPdf')}
                </a>
                <a
                  href="/interview-transcript.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
{t('portfolio.common.openInNewWindow')}
                </a>
              </div>
            </section>

            {/* 引言 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">{t('portfolio.interview.introductionTitle')}</h2>
              <div className="prose max-w-none">
                {t('portfolio.interview.introduction').split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </section>

            {/* 访谈故事1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">{t(item.interviewContent.story1.titleKey)}</h2>
              
              {/* Tab Selector */}
              <div className="mb-6">
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
                  <button
                    onClick={() => setActiveTab('summary')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'summary'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
{t('portfolio.interview.tabSummary')}
                  </button>
                  <button
                    onClick={() => setActiveTab('transcript')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'transcript'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
{t('portfolio.interview.fullTranscript')}
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 'summary' && (
                <div>
                  <p className="mb-4">{t('portfolio.interview.story1.summary1')}</p>
                  <p className="mb-4">{t('portfolio.interview.story1.summary2')}</p>
                  <p className="mb-4">{t('portfolio.interview.story1.summary3')}</p>
                  <p className="mb-4">{t('portfolio.interview.story1.summary4')}</p>
                  <p className="mb-4">{t('portfolio.interview.story1.summary5')}</p>
                  <p className="mb-6">{t('portfolio.interview.story1.summary6')}</p>
                </div>
              )}

              {activeTab === 'transcript' && item.interviewContent.story1.transcriptKey && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div 
                    className="whitespace-pre-line leading-relaxed"
                    style={{fontSize: '14pt', fontFamily: 'Times New Roman, serif'}}
                    dangerouslySetInnerHTML={{
                      __html: t(item.interviewContent.story1.transcriptKey)
                        .replace(/(Amy:|Moe:)/g, '<strong>$1</strong>')
                    }}
                  />
                </div>
              )}
            </section>

            {/* 访谈故事2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">{t(item.interviewContent.story2.titleKey)}</h2>
              
              {/* Tab Selector for Story 2 */}
              <div className="mb-6">
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
                  <button
                    onClick={() => setActiveTab('summary')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'summary'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
{t('portfolio.interview.tabSummary')}
                  </button>
                  <button
                    onClick={() => setActiveTab('transcript')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'transcript'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
{t('portfolio.interview.fullTranscript')}
                  </button>
                </div>
              </div>

              {/* Tab Content for Story 2 */}
              {activeTab === 'summary' && (
                <div>
                  <p className="mb-4">{t('portfolio.interview.story2.summary1')}</p>
                  <p className="mb-4">{t('portfolio.interview.story2.summary2')}</p>
                  <p className="mb-4">{t('portfolio.interview.story2.summary3')}</p>
                  <p className="mb-4">{t('portfolio.interview.story2.summary4')}</p>
                  <p className="mb-4">{t('portfolio.interview.story2.summary5')}</p>
                  <p className="mb-4">{t('portfolio.interview.story2.summary6')}</p>
                  <p className="mb-4">{t('portfolio.interview.story2.summary7')}</p>
                  <p className="mb-6">{t('portfolio.interview.story2.summary8')}</p>
                </div>
              )}

              {activeTab === 'transcript' && item.interviewContent.story2.transcriptKey && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div 
                    className="whitespace-pre-line leading-relaxed"
                    style={{fontSize: '14pt', fontFamily: 'Times New Roman, serif'}}
                    dangerouslySetInnerHTML={{
                      __html: t(item.interviewContent.story2.transcriptKey)
                        .replace(/(Amy:|Hong:)/g, '<strong>$1</strong>')
                    }}
                  />
                </div>
              )}
            </section>

            {/* 结论 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">{t('portfolio.interview.conclusionTitle')}</h2>
              <p className="leading-relaxed" style={{fontSize: '14pt', fontFamily: 'Times New Roman, serif'}}>
                {t(item.interviewContent.conclusionKey)}
              </p>
            </section>
          </article>
        </div>
      )}

      {/* 实物展示 - 放在页面最后 */}
      {item.slug === "handbook-visual-guide" && item.physicalImages?.length && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Physical Handbook Display</h3>
          <ImageCarousel images={item.physicalImages} alt="Physical Handbook" />
        </div>
      )}

    </article>
    </div>
  );
}


