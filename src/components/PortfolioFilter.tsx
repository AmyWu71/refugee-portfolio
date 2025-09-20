'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PortfolioFilter() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && ['research', 'visual', 'multimedia', 'interview'].includes(category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);
  
  const categories = [
    { key: null, label: t('portfolio.categories.all') },
    { key: 'research', label: t('portfolio.categories.research') },
    { key: 'visual', label: t('portfolio.categories.visual') },
    { key: 'multimedia', label: t('portfolio.categories.multimedia') },
    { key: 'interview', label: t('portfolio.categories.interview') }
  ];
  
  const filteredItems = selectedCategory 
    ? portfolio.filter((p) => p.category === selectedCategory)
    : portfolio;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end gap-4">
        <div className="flex gap-2 text-sm">
          {categories.map((category) => (
            <button
              key={category.key || 'all'}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-3 py-1 rounded-md border transition-colors ${
                selectedCategory === category.key
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white/10 text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <Link key={item.slug} href={`/portfolio/${item.slug}`} className="group rounded-xl overflow-hidden border hover:border-white/30 transition">
            <div className="relative h-48 bg-black/20">
              <Image src={item.thumbnail} alt={t(item.titleKey)} fill className="object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">{t(item.titleKey)}</h3>
              <p className="mt-1 text-sm text-gray-400 line-clamp-2">{t(item.summaryKey)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
