'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh' | 'es' | 'my' | 'th';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.background': 'Background',
    'nav.contact': 'Contact',
    'home.title': 'A Name, A Chance: Exploring Myanmar Refugee\nIssues Through Research and Stories',
    'home.description': 'This website showcases my research and creative work on Myanmar refugees and related international issues, aiming to raise awareness about global refugee challenges through the integration of academic and artistic approaches.',
    'home.browsePortfolio': 'Browse Portfolio',
    'home.researchBackground': 'Research Background',
    'home.categories.research': 'Research Papers',
    'home.categories.visual': 'Visual Works',
    'home.categories.multimedia': 'Multimedia',
    'home.subcategories.independentResearch': 'Independent Research',
    'home.subcategories.handbook': 'Handbook',
    'home.subcategories.munProposal': 'MUN Proposal',
    'footer.copyright': '© 2025 A Name, A Chance',
    'footer.contact': 'Contact',
    'footer.unhcr': 'UNHCR Official Website'
  },
  zh: {
    'nav.home': '首页',
    'nav.portfolio': '作品集',
    'nav.about': '关于',
    'nav.background': '背景',
    'nav.contact': '联系',
    'home.title': '一个名字，一个机会：通过研究和故事\n探索缅甸难民问题',
    'home.description': '本网站展示了我关于缅甸难民及相关国际议题的研究与创作，旨在通过学术与艺术的结合，引发更多对全球难民问题的关注。',
    'home.browsePortfolio': '浏览作品集',
    'home.researchBackground': '研究背景',
    'home.categories.research': '研究论文',
    'home.categories.visual': '视觉作品',
    'home.categories.multimedia': '多媒体',
    'home.subcategories.independentResearch': '独立研究',
    'home.subcategories.handbook': '手册',
    'home.subcategories.munProposal': '模联提案',
    'footer.copyright': '© 2025 一个名字，一个机会',
    'footer.contact': '联系方式',
    'footer.unhcr': '联合国难民署官网'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.portfolio': 'Portafolio',
    'nav.about': 'Acerca de',
    'nav.background': 'Antecedentes',
    'nav.contact': 'Contacto',
    'home.title': 'Un Nombre, Una Oportunidad: Explorando los Problemas\nde los Refugiados de Myanmar a través de la Investigación y las Historias',
    'home.description': 'Este sitio web muestra mi trabajo de investigación y creativo sobre los refugiados de Myanmar y temas internacionales relacionados, con el objetivo de crear conciencia sobre los desafíos globales de los refugiados a través de la integración de enfoques académicos y artísticos.',
    'home.browsePortfolio': 'Explorar Portafolio',
    'home.researchBackground': 'Antecedentes de Investigación',
    'home.categories.research': 'Documentos de Investigación',
    'home.categories.visual': 'Trabajos Visuales',
    'home.categories.multimedia': 'Multimedia',
    'home.subcategories.independentResearch': 'Investigación Independiente',
    'home.subcategories.handbook': 'Manual',
    'home.subcategories.munProposal': 'Propuesta MUN',
    'footer.copyright': '© 2025 Un Nombre, Una Oportunidad',
    'footer.contact': 'Contacto',
    'footer.unhcr': 'Sitio Web Oficial de ACNUR'
  },
  my: {
    'nav.home': 'ပင်မ',
    'nav.portfolio': 'လက်ရာများ',
    'nav.about': 'အကြောင်း',
    'nav.background': 'နောက်ခံ',
    'nav.contact': 'ဆက်သွယ်ရန်',
    'home.title': 'အမည်တစ်ခု၊ အခွင့်အလမ်းတစ်ခု - သုတေသနနှင့် ပုံပြင်များမှတစ်ဆင့်\nမြန်မာဒုက္ခသည်များ၏ ပြဿနာများကို လေ့လာခြင်း',
    'home.description': 'ဤဝဘ်ဆိုက်သည် မြန်မာဒုက္ခသည်များနှင့် ဆက်စပ်သော နိုင်ငံတကာ ကိစ္စရပ်များအပေါ် ကျွန်ုပ်၏ သုတေသနနှင့် ဖန်တီးမှုလက်ရာများကိုြသပါသည်။ ပညာရပ်နှင့် အနုပညာချဉ်းကပ်မှုများ ပေါင်းစပ်ခြင်းမှတစ်ဆင့် ကမ္ဘာ့ဒုက္ခသည်များ၏ စိန်ခေါ်မှုများအပေါ် အသိပညာမြှင့်တင်ရန် ရည်ရွယ်ပါသည်။',
    'home.browsePortfolio': 'လက်ရာများ လေ့လာရန်',
    'home.researchBackground': 'သုတေသန နောက်ခံ',
    'home.categories.research': 'သုတေသန စာတမ်းများ',
    'home.categories.visual': 'ပုံများနှင့် လက်ရာများ',
    'home.categories.multimedia': 'မျက်နှာပြင်များ',
    'home.subcategories.independentResearch': 'လွတ်လပ်သော သုတေသန',
    'home.subcategories.handbook': 'လက်စွဲစာအုပ်',
    'home.subcategories.munProposal': 'MUN အဆိုပြုချက်',
    'footer.copyright': '© ၂၀၂၅ အမည်တစ်ခု၊ အခွင့်အလမ်းတစ်ခု',
    'footer.contact': 'ဆက်သွယ်ရန်',
    'footer.unhcr': 'UNHCR တရားဝင် ဝဘ်ဆိုက်'
  },
  th: {
    'nav.home': 'หน้าแรก',
    'nav.portfolio': 'ผลงาน',
    'nav.about': 'เกี่ยวกับ',
    'nav.background': 'ภูมิหลัง',
    'nav.contact': 'ติดต่อ',
    'home.title': 'ชื่อหนึ่ง ชื่อโอกาส: สำรวจปัญหาผู้ลี้ภัยชาวเมียนมาร์\nผ่านการวิจัยและเรื่องเล่า',
    'home.description': 'เว็บไซต์นี้แสดงงานวิจัยและงานสร้างสรรค์ของฉันเกี่ยวกับผู้ลี้ภัยชาวเมียนมาร์และประเด็นระหว่างประเทศที่เกี่ยวข้อง โดยมีเป้าหมายเพื่อสร้างความตระหนักเกี่ยวกับความท้าทายของผู้ลี้ภัยทั่วโลกผ่านการผสมผสานแนวทางทางวิชาการและศิลปะ',
    'home.browsePortfolio': 'เรียกดูผลงาน',
    'home.researchBackground': 'ภูมิหลังการวิจัย',
    'home.categories.research': 'เอกสารวิจัย',
    'home.categories.visual': 'งานภาพ',
    'home.categories.multimedia': 'มัลติมีเดีย',
    'home.subcategories.independentResearch': 'การวิจัยอิสระ',
    'home.subcategories.handbook': 'คู่มือ',
    'home.subcategories.munProposal': 'ข้อเสนอ MUN',
    'footer.copyright': '© 2025 ชื่อหนึ่ง ชื่อโอกาส',
    'footer.contact': 'ติดต่อ',
    'footer.unhcr': 'เว็บไซต์อย่างเป็นทางการของ UNHCR'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
