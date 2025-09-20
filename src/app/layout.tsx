import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'A Name, A Chance — Refugee Portfolio',
  description: '本网站展示了我关于缅甸难民及相关国际议题的研究与创作，旨在通过学术与艺术的结合，引发更多对全球难民问题的关注。',
  openGraph: {
    title: 'A Name, A Chance — Refugee Portfolio',
    description: '聚焦缅甸难民议题的研究与创作：论文、视觉作品与多媒体。',
    url: 'https://example.com',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'A Name, A Chance — Refugee Portfolio',
    description: '聚焦缅甸难民议题的研究与创作：论文、视觉作品与多媒体。',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
