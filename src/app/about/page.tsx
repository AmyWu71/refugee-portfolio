"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const aboutImages = [
    "/hero-bg-1.png",
    "/hero-bg-2.png", 
    "/hero-bg-3.png",
    "/hero-bg-4.png",
    "/hero-bg-5.png"
  ];

  return (
    <>
      <PageHero 
        title={t('about.title')} 
        subtitle={t('about.subtitle')}
        images={aboutImages}
        alt="About background"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 lg:grid-cols-[400px_1fr] items-start">
          {/* Left Column - Profile Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            {/* Profile Photo */}
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-md border-2 border-gray-100">
                <Image src="/profile-photo.jpg" alt="Author photo" width={192} height={192} className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Name and Tagline */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{t('about.name')}</h1>
              <p className="text-sm text-blue-600 font-medium">{t('about.tagline')}</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{t('about.school')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span>{t('about.status')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>{t('about.researchAreas')}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Leadership Experience */}
            <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
{t('about.leadershipExperience')}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-1">{t('about.munPresident')}</h3>
                  <p className="text-sm text-gray-600">{t('about.munDescription')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-1">{t('about.econVp')}</h3>
                  <p className="text-sm text-gray-600">{t('about.econDescription')}</p>
                </div>
              </div>
            </div>

            {/* Independent Projects */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
{t('about.independentProjects')}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-1">{t('about.munConference')}</h3>
                  <p className="text-sm text-gray-600">{t('about.munConferenceDesc')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-1">{t('about.myanmarResearch')}</h3>
                  <p className="text-sm text-gray-600">{t('about.myanmarResearchDesc')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-1">{t('about.handbookDev')}</h3>
                  <p className="text-sm text-gray-600">{t('about.handbookDevDesc')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-1">{t('about.europeanStudies')}</h3>
                  <p className="text-sm text-gray-600">{t('about.europeanStudiesDesc')}</p>
                </div>
              </div>
            </div>

            {/* Personal Statement */}
            <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
              <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">{t('about.personalStatement')}</h2>
              <div className="text-center space-y-4">
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  &ldquo;{t('about.personalStatement1')}&rdquo;
                </blockquote>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  &ldquo;{t('about.personalStatement2')}&rdquo;
                </blockquote>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  &ldquo;{t('about.personalStatement3')}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-blue-200">
                  <p className="text-xl font-bold text-blue-800">
                    &ldquo;{t('about.personalStatement4')}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


