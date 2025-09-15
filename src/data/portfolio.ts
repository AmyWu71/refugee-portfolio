export type PortfolioCategory = "research" | "visual" | "multimedia";

export interface PortfolioItem {
  slug: string;
  title: string;
  category: PortfolioCategory;
  summary: string;
  background: string;
  thumbnail: string;
  images?: string[];
  pdf?: string;
  video?: string;
  reflection?: string;
}

export const portfolio: PortfolioItem[] = [
  {
    slug: "research-report-employment-challenges",
    title: "Research Report: Challenges and Reasons for Myanmar Refugees in Thailand in Employment",
    category: "research",
    summary: "In-depth analysis of employment challenges faced by 3.33 million Myanmar refugees in Thailand, exploring informal employment, systematic exploitation, and identity restrictions.",
    background: "Based on International Organization for Migration (IOM) 2025 data, focusing on the most persistent refugee crisis in the Thai-Myanmar border region.",
    thumbnail: "/thumbnails/research-report-cover.png",
    pdf: "/pdfs/research-report-employment-challenges.pdf",
    reflection: "通过实地调研与数据分析，揭示了语言壁垒、教育断层与身份枷锁如何共同构成难民就业障碍。",
  },
  {
    slug: "poster-migration",
    title: "Visual Poster: 迁徙之路",
    category: "visual",
    summary: "Using border roads as imagery to present uncertainty and hope during migration.",
    background: "艺术化表达难民日常与人道关怀。",
    thumbnail: "/thumbnails/poster.svg",
    images: ["/images/poster-1.jpg", "/images/poster-2.jpg"],
    reflection: "视觉传达中的留白让观者产生自我投射与思考。",
  },
  {
    slug: "handbook-visual-guide",
    title: "Handbook: Refugee Employment, Education and Medication Guide",
    category: "visual",
    summary: "Comprehensive visual guide for refugee employment assistance, covering legal rights, job search strategies, and community resources.",
    background: "Based on field research and expert interviews, providing practical guidance for Myanmar refugees' employment in Thailand.",
    thumbnail: "/images/handbook-cover.png",
    pdf: "/handbook.pdf",
    images: [
      "/images/handbook/截屏2025-09-15 19.59.37.png",
      "/images/handbook/截屏2025-09-15 19.59.52.png",
      "/images/handbook/截屏2025-09-15 20.00.03.png",
      "/images/handbook/截屏2025-09-15 20.00.28.png",
      "/images/handbook/截屏2025-09-15 20.01.27.png",
      "/images/handbook/截屏2025-09-15 20.01.55.png",
      "/images/handbook/截屏2025-09-15 20.02.49.png",
      "/images/handbook/截屏2025-09-15 20.03.15.png",
      "/images/handbook/截屏2025-09-15 20.03.28.png",
      "/images/handbook/截屏2025-09-15 20.03.39.png",
      "/images/handbook/截屏2025-09-15 20.03.47.png",
      "/images/handbook/截屏2025-09-15 20.03.59.png",
      "/images/handbook/截屏2025-09-15 20.04.10.png",
      "/images/handbook/截屏2025-09-15 20.04.20.png",
      "/images/handbook/截屏2025-09-15 20.04.26.png"
    ],
    reflection: "通过视觉化设计让复杂的法律条文和就业信息变得易于理解和操作。",
  },
  {
    slug: "mun-proposal",
    title: "MUN Proposal: 边境医疗与教育协作机制",
    category: "research",
    summary: "Proposal and presentation on cross-border medical and educational resource sharing.",
    background: "源自 MUN 模拟与 NGO 个案访谈材料。",
    thumbnail: "/thumbnails/mun.svg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    reflection: "跨主体协作的可操作性与监督机制是推进的关键。",
  },
];


