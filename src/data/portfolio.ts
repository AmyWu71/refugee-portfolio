export type PortfolioCategory = "research" | "visual" | "multimedia" | "interview";

export interface PortfolioItem {
  slug: string;
  title: string;
  category: PortfolioCategory;
  summary: string;
  background: string;
  thumbnail: string;
  images?: string[];
  physicalImages?: string[];
  pdf?: string;
  pdfs?: string[];
  video?: string;
  reflection?: string;
  interviewContent?: {
    introduction: string;
    story1: {
      title: string;
      content: string;
    };
    story2: {
      title: string;
      content: string;
    };
    conclusion: string;
  };
}

export const portfolio: PortfolioItem[] = [
  {
    slug: "rohingya-refugee-case-study",
    title: "Background Research: A Case Study on Rohingya Refugee",
    category: "research",
    summary: "A comprehensive case study examining the Rohingya refugee crisis, focusing on their displacement, challenges, and the broader context of Myanmar refugee issues.",
    background: "Background research on Rohingya refugees, a persecuted ethnic group from Myanmar, exploring their unique circumstances within the broader Myanmar refugee context.",
    thumbnail: "/thumbnails/rohingya-research-cover.png",
    pdf: "/HIR-Xuanjing, Wu.pdf",
    reflection: "通过深入研究罗兴亚难民的个案，揭示了种族迫害与难民危机的复杂关系。",
  },
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
    physicalImages: [
      "/handbook-physical-1.png",
      "/handbook-physical-2.jpg",
      "/handbook-physical-3.jpg"
    ],
    reflection: "通过视觉化设计让复杂的法律条文和就业信息变得易于理解和操作。",
  },
  {
    slug: "mun-proposal",
    title: "MUN Proposal: Rohingya Crisis Proposal",
    category: "multimedia",
    summary: "A comprehensive MUN proposal addressing the Rohingya refugee crisis, focusing on international cooperation and sustainable solutions for refugee protection and resettlement.",
    background: "Based on MUN simulation and NGO case study interviews, this proposal examines the Rohingya crisis and proposes collaborative frameworks for international response.",
    thumbnail: "/mun-cover.png",
    pdf: "/Rohingya Crisis Proposal.pdf",
    video: "/25c0ca27fd47e1846bca438434e9caf5.mp4",
    reflection: "跨主体协作的可操作性与监督机制是推进的关键。",
  },
  {
    slug: "living-between-borders-interview",
    title: "Living Between Borders: Voices of NGO Leaders and Myanmar Refugees in Thailand",
    category: "interview",
    summary: "An in-depth interview series featuring conversations with NGO leaders and Myanmar refugees in Thailand, exploring their experiences, challenges, and perspectives on living between borders.",
    background: "This interview project captures the authentic voices of those directly involved in the Myanmar refugee situation in Thailand, providing insights into the daily realities and systemic challenges faced by both service providers and refugees.",
    thumbnail: "/thumbnails/interview-cover.png",
    reflection: "通过深度访谈，我们听到了最真实的声音，这些故事比任何统计数据都更能反映难民生活的复杂性。",
    interviewContent: {
      introduction: "As part of the research project on Myanmar refugees in Thailand, two interviews focusing on the lives of Myanmar refugees were conducted. Thailand has been a major destination for refugees. However, numerous challenges and difficulties persist after they arrive in this new land, including legal uncertainty, language barriers, and limited access to education and employment opportunities. These problems remain unsolved, bringing a significant impact on the daily life of refugees. In the first interview, I spoke with Moe, a young refugee student in Mae Sot. She shared her lived experiences of displacement, legal challenges, and educational limitations. Her life stands as a reflection of the harsh reality for most refugees, while some may suffer from even a severe situation. Later, I invited Professor Hong for the second interview. Hong is a researcher and NGO practitioner who has studied refugee communities across Thailand and offered a broader socio-economic analysis of their situation. His speech offers a new perspective to the problem, showcasing not only the challenge refugees faced, but also the inefficiency of current NGOs and raise a possible solution. Together, these perspectives highlight both the micro-level experiences of refugees and the structural barriers they face in host societies. It also offers a valuable insight that may lead to a potential solution.",
      story1: {
        title: "Interview Story 1: Life as a Refugee Student in Thailand",
        content: "Moe and her family fled to Thailand in 2009 and have lived in refugee camps in Thailand for more than fifteen years. Currently, she is preparing for the GED exam in Mae Sot. For her, education is her primary pathway to opportunity. However, legal challenges stand as the biggest problem in her way. Without Thai national IDs, refugees are unable to travel freely, access higher education, or obtain formal employment. \"Every time I want to leave the camp, I need permission from the refugee camp's officials,\" she explained, reflecting the restrictive nature of refugee life. Basic services are also limited. Healthcare, with an increasing burden, seems to be insufficient under the subsidy of the UN. Education opportunities are limited to informal areas, which only focus on English and life skills. And such education is also proven to be not professional enough, which is taught by foreign volunteers instead of experienced scholars. In the interview, Moe specifically mentioned language as a persistent barrier: \"I can understand some Thai, but speaking is hard… It's difficult when applying to schools or jobs.\" Despite these restrictions, Moe has developed practical skills through vocational courses, such as cooking, and completed an internship in a local restaurant. She also interned at an NGO supporting migrant education. She plans to return as staff in the future. While this reveals her isolated camp life, which she mentions, \"Here, I don't have many friends\", she remains passionate and positive. Her determination to pursue education and change her community is clear: \"If I can get a scholarship, I want to study politics at the university. That would give me a chance to build a better life for my community.\" She further mentions that \" If I become a leader, I will create new education to get children to a better education level.\""
      },
      story2: {
        title: "Interview Story 2: Researching the Lives of Myanmar Refugees in Thailand",
        content: "Complementing Moe's narratives, Hong provided a structural overview of the refugee situation in Thailand. As an important scholar in this field, he has conducted fieldwork in Bangkok and Mae Sot, observing firsthand the challenges refugees face in education, employment, and integration. While Hong admitted that most refugees migrate for economic survival due to the political instability and conflict in Myanmar, Thailand does not provide permanent settlement or full legal protection to refugees. Stuck between, refugees are left in a state of protracted temporality. According to Hong, language and legal status are the most significant barriers for refugees. Without documentation, they face risks of arrest, deportation, or police extortion. Even with UN registration, they are excluded from formal employment. As a result, most refugees are restricted to low-skilled jobs, such as agriculture, construction, or seafood processing, earning as little as 200 baht per day. Children earn even less. The severe poverty status results in widespread child labor and the exacerbation of early dropout rates. While education has been thought of as an important pathway, the opportunities remain limited. Hong observed that many children marry and form families by age 14 or 15, which stop them from learning but instead working. Meanwhile, informal \"learning centers\" lack official recognition, leaving refugees nothing but a useless certificate. Although GED preparation programs appear to be a potential pathway to higher education abroad, these remain rare due to limited resources and the high academic demands. Hong also mentions the harsh employment situation of refugees. While NGOs offer training in handicrafts, sewing, or cooking, market access appears to be weak and limited. Social enterprises like The Borderline provide outlets for refugee-made goods, but the scale of the enterprises remains limited. Access to banking services or microloans is often banned due to the lack of credit. Just like what Hong summarized: \"Everything comes back to money—education, healthcare, entrepreneurship—it all requires funding. And refugees have none.\" Indeed harsh, but real. Finally, Hong emphasized that few refugees consider Thailand a permanent home. \"Every refugee I've met says the same thing,\" he explained. \"Even those who have lived here for ten years or more—they all want to go back to Myanmar.\" This finding underscores the uncertain character of refugee settlement in Thailand. With both legal exclusion and enduring cultural ties to Myanmar, the future of Myanmar refugees remains uncertain."
      },
      conclusion: "While Moe's story reveals the difficult situation of individuals and their dignity, Hong, as a scholar, provides important insight from the perspective of an NGO leader and scholar. Together, their words underscore the urgent need for multi-level interventions: recognition of refugee status, improved access to education, and sustainable livelihood opportunities. Although systemic change remains difficult with the unchanged policy, targeted assistance—such as GED programs, microfinance, and vocational training—can provide meaningful support to light the future of refugees. As one of the most vulnerable populations in Southeast Asia, the Myanmar refugee community in Thailand still needs more attention from the world. Their stories, both personal and collective, stand as an essential and critical factor in the resolution of the crisis."
    }
  },
];


