export type PortfolioCategory = "research" | "visual" | "multimedia" | "interview";

export interface PortfolioItem {
  slug: string;
  titleKey: string;
  category: PortfolioCategory;
  summaryKey: string;
  backgroundKey: string;
  thumbnail: string;
  images?: string[];
  physicalImages?: string[];
  pdf?: string;
  pdfs?: string[];
  video?: string;
  reflectionKey?: string;
  interviewContent?: {
    introductionKey: string;
    story1: {
      titleKey: string;
      contentKey: string;
      transcriptKey?: string;
    };
    story2: {
      titleKey: string;
      contentKey: string;
      transcriptKey?: string;
    };
    conclusionKey: string;
  };
}

export const portfolio: PortfolioItem[] = [
  {
    slug: "rohingya-refugee-case-study",
    titleKey: "portfolio.rohingya.title",
    category: "research",
    summaryKey: "portfolio.rohingya.summary",
    backgroundKey: "portfolio.rohingya.background",
    thumbnail: "/thumbnails/rohingya-research-cover.png",
    pdf: "/HIR-Xuanjing, Wu.pdf",
    reflectionKey: "portfolio.rohingya.reflection",
  },
  {
    slug: "research-report-employment-challenges",
    titleKey: "portfolio.researchReport.title",
    category: "research",
    summaryKey: "portfolio.researchReport.summary",
    backgroundKey: "portfolio.researchReport.background",
    thumbnail: "/thumbnails/research-report-cover.png",
    pdf: "/pdfs/research-report-employment-challenges.pdf",
    reflectionKey: "portfolio.researchReport.reflection",
  },
  {
    slug: "handbook-visual-guide",
    titleKey: "portfolio.handbook.title",
    category: "visual",
    summaryKey: "portfolio.handbook.summary",
    backgroundKey: "portfolio.handbook.background",
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
    physicalImages: [
      "/handbook-physical-1.png",
      "/handbook-physical-2.jpg",
      "/handbook-physical-3.jpg"
    ],
    reflectionKey: "portfolio.handbook.reflection",
  },
  {
    slug: "mun-proposal",
    titleKey: "portfolio.munProposal.title",
    category: "multimedia",
    summaryKey: "portfolio.munProposal.summary",
    backgroundKey: "portfolio.munProposal.background",
    thumbnail: "/mun-cover.png",
    pdf: "/Rohingya Crisis Proposal.pdf",
    video: "/25c0ca27fd47e1846bca438434e9caf5.mp4",
    reflectionKey: "portfolio.munProposal.reflection",
  },
  {
    slug: "living-between-borders-interview",
    titleKey: "portfolio.interview.title",
    category: "interview",
    summaryKey: "portfolio.interview.summary",
    backgroundKey: "portfolio.interview.background",
    thumbnail: "/thumbnails/interview-cover.png",
    reflectionKey: "portfolio.interview.reflection",
    interviewContent: {
      introductionKey: "portfolio.interview.introduction",
      story1: {
        titleKey: "portfolio.interview.story1.title",
        contentKey: "portfolio.interview.story1.content",
        transcriptKey: "portfolio.interview.story1.transcript",
      },
      story2: {
        titleKey: "portfolio.interview.story2.title",
        contentKey: "portfolio.interview.story2.content",
        transcriptKey: "portfolio.interview.story2.transcript",
      },
      conclusionKey: "portfolio.interview.conclusion",
    }
  },
];


