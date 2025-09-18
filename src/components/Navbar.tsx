"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { href: "/", label: t('nav.home') },
    { href: "/portfolio", label: t('nav.portfolio') },
    { href: "/about", label: t('nav.about') },
    { href: "/background", label: t('nav.background') },
    { href: "/contact", label: t('nav.contact') },
  ];

  return (
    <header className="bg-slate-800 border-b border-slate-200 shadow-sm">
      <nav className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16 h-16 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide text-slate-100">
          A Name, A Chance
        </Link>
        <div className="flex items-center gap-6 sm:gap-8">
          <ul className="flex items-center gap-6 sm:gap-8 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`hover:underline underline-offset-4 transition-colors ${
                    pathname === item.href ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}


