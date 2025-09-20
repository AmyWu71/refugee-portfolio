"use client";

import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BackgroundPage() {
  const { t } = useLanguage();
  const backgroundImages = [
    "/hero-bg-1.png",
    "/hero-bg-2.png", 
    "/hero-bg-3.png",
    "/hero-bg-4.png",
    "/hero-bg-5.png"
  ];

  return (
    <>
      <PageHero 
        title={t('background.title')} 
        subtitle={t('background.subtitle')}
        images={backgroundImages}
        alt="Background research"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Starting Point */}
          <section className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border-l-4 border-slate-600">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 text-slate-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
{t('background.startingPoint')}
            </h2>
            <div className="space-y-4 text-base text-gray-700">
              <p>{t('background.startingPointText1')}</p>
              <p>{t('background.startingPointText2')}</p>
              <p>{t('background.startingPointText3')}</p>
            </div>
          </section>

          {/* Research Questions */}
          <section className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border-l-4 border-slate-500">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
{t('background.researchQuestions')}
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed">{t('background.researchQuestion1')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed">{t('background.researchQuestion2')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed">{t('background.researchQuestion3')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed">{t('background.researchQuestion4')}</p>
              </div>
            </div>
          </section>

          {/* Research Methods */}
          <section className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border-l-4 border-slate-600">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 text-slate-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
{t('background.researchMethods')}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-800 mb-1">{t('background.literatureReview')}</h3>
                <p className="text-sm text-gray-600">{t('background.literatureReviewDesc')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-800 mb-1">{t('background.caseStudy')}</h3>
                <p className="text-sm text-gray-600">{t('background.caseStudyDesc')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-800 mb-1">{t('background.munSimulation')}</h3>
                <p className="text-sm text-gray-600">{t('background.munSimulationDesc')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-800 mb-1">{t('background.interviewsFieldInsights')}</h3>
                <p className="text-sm text-gray-600">{t('background.interviewsFieldInsightsDesc')}</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-800 mb-1">{t('background.comparativeAnalysis')}</h3>
                <p className="text-sm text-gray-600">{t('background.comparativeAnalysisDesc')}</p>
              </div>
            </div>
          </section>

          {/* Objectives */}
          <section className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border-l-4 border-slate-500">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
{t('background.objectives')}
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed">{t('background.objective1')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed">{t('background.objective2')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed">{t('background.objective3')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed">{t('background.objective4')}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}


