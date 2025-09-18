'use client';

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolio } from "@/data/portfolio";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  const categoriesRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const scrollToCategories = () => {
    categoriesRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-2xl text-white min-h-[400px]">
        <HeroCarousel />
        {/* 半透明遮罩确保文字可读性 */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative px-8 py-24 sm:px-12 sm:py-28 lg:px-16 lg:py-32">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
            {t('home.title')}
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-blue-50">
            {t('home.description')}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/portfolio" className="inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              {t('home.browsePortfolio')}
            </Link>
            <Link href="/background" className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/20">
              {t('home.researchBackground')}
            </Link>
          </div>
          
          {/* 下拉箭头按钮 */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={scrollToCategories}
              className="inline-flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Scroll to categories"
            >
              <svg 
                className="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section ref={categoriesRef} className="grid gap-6 sm:grid-cols-3">
        <Link href="/portfolio?category=research" className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:bg-slate-50 hover:shadow-md transition-all">
          <div className="relative h-48 w-full">
            <Image
              src={portfolio.find(p => p.slug === "research-report-employment-challenges")?.thumbnail || "/thumbnails/research-report-cover.png"}
              alt="Research Report Cover"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-slate-800">{t('home.categories.research')}</h3>
            <p className="mt-2 text-sm text-slate-600">{t('home.subcategories.independentResearch')}</p>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              {portfolio.find(p => p.slug === "research-report-employment-challenges")?.summary}
            </p>
          </div>
        </Link>
        <Link href="/portfolio/handbook-visual-guide" className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:bg-slate-50 hover:shadow-md transition-all">
          <div className="relative h-48 w-full">
            <Image
              src={portfolio.find(p => p.slug === "handbook-visual-guide")?.thumbnail || "/images/handbook-cover.png"}
              alt="Handbook Cover"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-slate-800">{t('home.categories.visual')}</h3>
            <p className="mt-2 text-sm text-slate-600">{t('home.subcategories.handbook')}</p>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              {portfolio.find(p => p.slug === "handbook-visual-guide")?.summary}
            </p>
          </div>
        </Link>
        <Link href="/portfolio/mun-proposal" className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:bg-slate-50 hover:shadow-md transition-all">
          <div className="relative h-48 w-full">
            <Image
              src={portfolio.find(p => p.slug === "mun-proposal")?.thumbnail || "/thumbnails/mun.svg"}
              alt="MUN Proposal Cover"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-slate-800">{t('home.categories.multimedia')}</h3>
            <p className="mt-2 text-sm text-slate-600">{t('home.subcategories.munProposal')}</p>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              {portfolio.find(p => p.slug === "mun-proposal")?.summary}
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}
