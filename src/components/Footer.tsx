'use client';

import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-12 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>{t('footer.copyright')}</p>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hover:underline underline-offset-4 hover:text-slate-800 transition-colors">
            {t('footer.contact')}
          </Link>
          <a href="https://www.unhcr.org/" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4 hover:text-slate-800 transition-colors">
            {t('footer.unhcr')}
          </a>
        </div>
      </div>
    </footer>
  );
}


