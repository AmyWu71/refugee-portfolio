"use client";

import { Suspense } from 'react';
import PortfolioFilter from "@/components/PortfolioFilter";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PortfolioPage() {
  const { t } = useLanguage();
  const portfolioImages = [
    "/hero-bg-1.png",
    "/hero-bg-2.png", 
    "/hero-bg-3.png",
    "/hero-bg-4.png",
    "/hero-bg-5.png"
  ];

  return (
    <>
      <PageHero 
        title={t('portfolio.title')} 
        subtitle={t('portfolio.subtitle')}
        images={portfolioImages}
        alt="Portfolio background"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <PortfolioFilter />
        </Suspense>
      </div>
    </>
  );
}


