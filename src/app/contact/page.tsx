"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (sectionKey: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const contactImages = [
    "/hero-bg-1.png",
    "/hero-bg-2.png", 
    "/hero-bg-3.png",
    "/hero-bg-4.png",
    "/hero-bg-5.png"
  ];

  return (
    <>
      <PageHero 
        title={t('contact.title')} 
        subtitle={t('contact.subtitle')}
        images={contactImages}
        alt="Contact background"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
      {/* Contact */}
      <section className="bg-slate-50 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium mb-4">{t('contact.contact')}</h2>
        <div className="space-y-2">
          <p className="text-sm text-gray-700">{t('contact.email')}: <a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="mailto:amy08711@outlook.com">amy08711@outlook.com</a></p>
          <p className="text-sm text-gray-700">{t('contact.phone')}: <a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="tel:+8613829900066">+86 13829900066</a></p>
        </div>
      </section>
      <section className="bg-slate-50 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium mb-2">{t('contact.downloadResources')}</h2>
        <p className="text-sm text-gray-500 mb-4">{t('contact.downloadInstruction')}</p>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="/HIR-Xuanjing, Wu.pdf" download>{t('contact.backgroundResearch')}</a></li>
          <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="/pdfs/research-report-employment-challenges.pdf" download>{t('contact.researchReport')}</a></li>
          <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="/handbook.pdf" download>{t('contact.handbook')}</a></li>
          <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="/Rohingya Crisis Proposal.pdf" download>{t('contact.munProposal')}</a></li>
          <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="/interview-transcript.pdf" download>{t('contact.interviewTranscript')}</a></li>
        </ul>
      </section>
      <section className="space-y-6">
        <h2 className="text-lg font-medium">{t('contact.relatedLinks')}</h2>
        
        {/* Handicraft Sales & NGOs - Accordion */}
        <div className="bg-slate-50 rounded-lg shadow-md">
          <button
            onClick={() => toggleSection('handicraft')}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
          >
            <h3 className="text-md font-medium text-gray-800">{t('contact.handicraftSales')}</h3>
            <svg 
              className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.handicraft ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedSections.handicraft && (
            <div className="px-6 pb-6 pt-2 bg-blue-50">
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://borderlinecollective.org/" target="_blank" rel="noreferrer">Borderline Collective</a></li>
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://www.weavefairtrade.com/pages/contact-us-1" target="_blank" rel="noreferrer">WEAVE Fair Trade</a> - +66 053 357 695, handicraft@weave-women.org</li>
              </ul>
            </div>
          )}
        </div>

        {/* Education - Accordion */}
        <div className="bg-slate-50 rounded-lg shadow-md">
          <button
            onClick={() => toggleSection('education')}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
          >
            <h3 className="text-md font-medium text-gray-800">Education</h3>
            <svg 
              className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections.education ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedSections.education && (
            <div className="px-6 pb-6 pt-2 bg-blue-50">
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://jrs.net/en/country/thailand/" target="_blank" rel="noreferrer">JRS (UEP)</a> - 0643248478</li>
                <li>Bangkok Refugee Centre (BRC) - 091-196-4064</li>
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://beamedu.org/" target="_blank" rel="noreferrer">BEAM Education Foundation</a> - +66 (53) 200 024</li>
                <li>Good Shepherd's Language School - 085-908-6560, thegoodshepard@gmail.com</li>
                <li>Creative Life Foundation - creativelifethailand@gmail.com</li>
                <li>Asylum Access Thailand (AAT) - 094-498-2500, thailand@asylumaccess.org</li>
              </ul>
            </div>
          )}
        </div>

        {/* Healthcare Training Program - Accordion */}
        <div className="bg-slate-50 rounded-lg shadow-md">
          <button
            onClick={() => toggleSection('healthcare-education')}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
          >
            <h3 className="text-md font-medium text-gray-800">Healthcare Training Program</h3>
            <svg 
              className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections['healthcare-education'] ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedSections['healthcare-education'] && (
            <div className="px-6 pb-6 pt-2 bg-blue-50">
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://www.acted.org/en/countries/thailand/" target="_blank" rel="noreferrer">ACTED Thailand</a> (Vocational Skills / TVET Programs)</li>
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://www.adrathailand.org" target="_blank" rel="noreferrer">ADRA Thailand</a> (Vocational Training Programs)</li>
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://jrs.net/en/resources/?fwp_programme=education" target="_blank" rel="noreferrer">JRS Thailand</a> (Education & Career Guidance)</li>
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://thailand.worlded.org" target="_blank" rel="noreferrer">World Education Thailand</a> (Refugee TVET & Education Center)</li>
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="http://bnsclc.org/" target="_blank" rel="noreferrer">Ban Nai Soi Community Learning Center</a> (Myanmar-Thailand Border Community Learning Center)</li>
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://krceeuk.wordpress.com/" target="_blank" rel="noreferrer">Karen Refugee Committee Education Entity (KRCEE)</a></li>
              </ul>
            </div>
          )}
        </div>

        {/* Healthcare Services - Accordion */}
        <div className="bg-slate-50 rounded-lg shadow-md">
          <button
            onClick={() => toggleSection('healthcare-services')}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
          >
            <h3 className="text-md font-medium text-gray-800">Healthcare Services</h3>
            <svg 
              className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections['healthcare-services'] ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedSections['healthcare-services'] && (
            <div className="px-6 pb-6 pt-2 bg-blue-50">
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://www.maetaoclinic.org" target="_blank" rel="noreferrer">Mae Tao Clinic</a> (Myanmar-Thailand Border Refugee Medical Center)</li>
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://www.shoklo-unit.com" target="_blank" rel="noreferrer">Shoklo Malaria Research Unit (SMRU)</a> (Myanmar-Thailand Border Malaria Research/Medical Assistance)</li>
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://www.rescue.org/country/thailand" target="_blank" rel="noreferrer">IRC Thailand</a> (Health & Mental Health Programs)</li>
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://jrs.net/en/country/thailand/" target="_blank" rel="noreferrer">Jesuit Refugee Service</a> (Psychosocial Support / MHPSS)</li>
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://www.coerr.org" target="_blank" rel="noreferrer">COERR / Bangkok Refugee Center</a> (Medical + Social Services)</li>
              </ul>
            </div>
          )}
        </div>

        {/* UNHCR & Partnerships - Accordion */}
        <div className="bg-slate-50 rounded-lg shadow-md">
          <button
            onClick={() => toggleSection('unhcr-partnerships')}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
          >
            <h3 className="text-md font-medium text-gray-800">UNHCR & Partnerships</h3>
            <svg 
              className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections['unhcr-partnerships'] ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedSections['unhcr-partnerships'] && (
            <div className="px-6 pb-6 pt-2 bg-blue-50">
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://www.unhcr.org/" target="_blank" rel="noreferrer">UNHCR Official Website</a></li>
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://www.unhcr.org/th" target="_blank" rel="noreferrer">UNHCR Thailand</a> (Health & Support Partners Page)</li>
                <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://help.unhcr.org/thailand/our-partners/" target="_blank" rel="noreferrer">UNHCR Partnerships</a></li>
              </ul>
            </div>
          )}
        </div>

        {/* GED Information - Accordion */}
        <div className="bg-slate-50 rounded-lg shadow-md">
          <button
            onClick={() => toggleSection('ged-info')}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
          >
            <h3 className="text-md font-medium text-gray-800">GED (General Equivalency Diploma) Information</h3>
            <svg 
              className={`w-5 h-5 text-gray-500 transition-transform ${expandedSections['ged-info'] ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedSections['ged-info'] && (
            <div className="px-6 pb-6 pt-2 bg-blue-50">
              <div className="text-sm text-gray-700 space-y-2 pl-5">
                <p>The General Equivalency Diploma Test is a United States testing system, in which participants can earn High School Diploma. It is recognized internationally, acknowledged by lots of employers.</p>
                <p>The test includes four subjects: Language Arts, Mathematical Reasoning, Science, and Social Studies.</p>
                <p>By taking the test, refugees will be able to enter international universities in Thailand, US and other countries.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://ged.com" target="_blank" rel="noreferrer">GED Official Website</a></li>
                  <li><a className="text-slate-800 hover:text-blue-500 hover:underline transition-colors" href="https://beamedu.org/ged-online-program/" target="_blank" rel="noreferrer">GED Online Program (BEAM Education)</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
        </div>
      </div>
    </>
  );
}


