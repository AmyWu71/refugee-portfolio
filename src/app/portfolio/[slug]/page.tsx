import { notFound } from "next/navigation";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import ImageCarousel from "@/components/ImageCarousel";

export async function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = portfolio.find((p) => p.slug === slug);
  if (!item) return notFound();

  return (
    <article className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold">{item.title}</h1>
        {item.slug === "research-report-employment-challenges" && (
          <h2 className="mt-2 text-lg text-gray-600">《视点｜泰国缅甸难民在就业上面临的挑战和原因》</h2>
        )}
        {item.slug === "poster-migration" && (
          <h2 className="mt-2 text-lg text-gray-600">迁徙之路</h2>
        )}
        {item.slug === "handbook-visual-guide" && (
          <>
            <h2 className="mt-2 text-lg text-gray-600">Refugee Employment, Education and Medication Guide</h2>
            <p className="mt-1 text-sm text-gray-500">By Xuanjing Wu</p>
          </>
        )}
        {item.slug === "living-between-borders-interview" && (
          <>
            <p className="mt-2 text-sm text-gray-400">{item.background}</p>
            <p className="mt-1 text-sm text-gray-500">By Xuanjing Wu</p>
          </>
        )}
        {item.slug !== "living-between-borders-interview" && (
          <p className="mt-2 text-sm text-gray-400">{item.background}</p>
        )}
      </header>

      {item.images?.length ? (
        item.slug === "handbook-visual-guide" ? (
          <ImageCarousel images={item.images} alt={item.title} />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {item.images.map((src) => (
              <div key={src} className="relative aspect-[4/3] bg-black/20 rounded-lg overflow-hidden">
                <Image src={src} alt={item.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        )
      ) : null}

      {/* 实物展示 */}
      {item.slug === "handbook-visual-guide" && item.physicalImages?.length && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Physical Handbook Display</h3>
          <ImageCarousel images={item.physicalImages} alt="Physical Handbook" />
        </div>
      )}

      {item.pdf || item.pdfs ? (
        <div className="space-y-4">
          
          {item.slug === "handbook-visual-guide" && (
            <>
              {/* Handbook下载按钮 */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={item.pdf}
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Handbook PDF
                </a>
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in New Window
                </a>
              </div>
              
              {/* Handbook问卷部分 */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-4 text-blue-800">Help Improve This Handbook</h3>
                <div className="prose max-w-none text-sm text-blue-700">
                  <p className="mb-4">
                    This survey is designed to collect additional information about refugee needs and challenges to better improve this handbook. The survey is anonymous and all data will be kept confidential.
                  </p>
                  <p className="mb-4 text-sm">
                    If you would like to submit a completed PDF survey, please email it to: <a href="mailto:amy08711@outlook.com" className="text-blue-600 hover:text-blue-800 underline">amy08711@outlook.com</a>
                  </p>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfgpgbjAhCU109DRvIVEVwRm3NT6zIMkWpKOI5vTTCWK2WdAw/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:text-white focus:bg-white focus:text-blue-600 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Online Survey
                      </a>

                      <a
                        href="/Survey.pdf"
                        download
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:text-white focus:bg-white focus:text-blue-600 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download (English)
                      </a>

                      <a
                        href="/စစ်တမ်း.pdf"
                        download
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:text-white focus:bg-white focus:text-blue-600 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download (Myanmar)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {item.slug === "research-report-employment-challenges" && (
            <>
              {/* 研究报告摘要 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Research Report Summary</h3>
                <div className="prose max-w-none text-sm">
                  <p className="mb-4">
                    According to statistics from the International Organization for Migration (IOM), as of early 2025, there are over 3.33 million registered Myanmar refugees in Thailand and along the Thai-Myanmar border, reaching a historic high. More than 60% of these refugees have been stranded in Thailand for over five years, making this one of the longest-lasting refugee crises in Southeast Asia.
                  </p>
                  <h4 className="font-semibold mb-2">Key Findings:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Approximately 1.7 million Myanmar refugees are classified as irregular status, unable to obtain documents required for formal employment</li>
                    <li>Over one-third of refugees earn monthly incomes far below Thailand&apos;s legal minimum wage standards</li>
                    <li>Language barriers, educational gaps, and identity restrictions constitute major employment obstacles</li>
                    <li>NGOs provide support through educational programs and rights advocacy</li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    For the complete report, please view the PDF below or download it using the buttons below.
                  </p>
                  <p className="mt-3">
                    <a 
                      href="https://www.chinadevelopmentbrief.org.cn/news/detail/66147.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      View original article on China Development Brief
                    </a>
                  </p>
                </div>
              </div>
              
              {/* 研究报告下载按钮 */}
              <div className="flex flex-wrap gap-4 mb-6">
                {(item.pdfs || [item.pdf]).map((pdf, index) => (
                  <div key={index} className="flex gap-2">
                    <a
                      href={pdf}
                      download
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download PDF {item.pdfs && item.pdfs.length > 1 ? index + 1 : ''}
                    </a>
                    <a
                      href={pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Open in New Window
                    </a>
                  </div>
                ))}
              </div>
              
              {/* 研究报告PDF查看器 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">View Complete Report</h3>
                </div>
                <div className="h-[80vh]">
                  <iframe
                    src={item.pdf}
                    className="w-full h-full border-0"
                    title="Research Report PDF"
                  />
                </div>
              </div>
            </>
          )}

          {item.slug === "rohingya-refugee-case-study" && (
            <>
              {/* 罗兴亚研究摘要 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Background Research Summary</h3>
                <div className="prose max-w-none text-sm">
                  <p className="mb-4">
                    This case study examines the Rohingya refugee crisis, one of the most pressing humanitarian issues in Southeast Asia. The Rohingya are a stateless Muslim minority group from Myanmar&apos;s Rakhine State, who have faced systematic persecution and violence, leading to mass displacement.
                  </p>
                  <h4 className="font-semibold mb-2">Key Focus Areas:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Historical context of Rohingya persecution in Myanmar</li>
                    <li>Displacement patterns and refugee flows to neighboring countries</li>
                    <li>Challenges faced by Rohingya refugees in host countries</li>
                    <li>International response and humanitarian assistance</li>
                    <li>Long-term solutions and resettlement efforts</li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    For the complete background research, please view the PDF below or download it using the buttons below.
                  </p>
                </div>
              </div>
              
              {/* 罗兴亚研究下载按钮 */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={item.pdf}
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in New Window
                </a>
              </div>
              
              {/* 罗兴亚研究PDF查看器 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">View Complete Background Research</h3>
                </div>
                <div className="h-[80vh]">
                  <iframe
                    src={item.pdf}
                    className="w-full h-full border-0"
                    title="Rohingya Refugee Case Study PDF"
                  />
                </div>
              </div>
            </>
          )}

          {item.slug === "mun-proposal" && (
            <>
              {/* MUN提案引入视频 */}
              {item.video && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Introduction Video</h3>
                  <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
                    <video
                      src={item.video}
                      className="w-full h-full object-contain"
                      controls
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
              
              {/* MUN提案摘要 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">MUN Proposal Summary</h3>
                <div className="prose max-w-none text-sm">
                  <p className="mb-4">
                    This MUN proposal addresses the refugee disputes and resettlement collaboration mechanism, focusing on cross-border cooperation for refugee protection and sustainable solutions. The proposal examines the complex challenges faced by refugees and proposes collaborative frameworks for international response.
                  </p>
                  <h4 className="font-semibold mb-2">Key Components:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Analysis of current refugee protection mechanisms</li>
                    <li>Cross-border collaboration frameworks</li>
                    <li>Resettlement and integration strategies</li>
                    <li>International cooperation protocols</li>
                    <li>Implementation and monitoring mechanisms</li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    For the complete MUN proposal, please view the PDF below or download it using the buttons below.
                  </p>
                </div>
              </div>
              
              {/* MUN提案下载按钮 */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={item.pdf}
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in New Window
                </a>
              </div>
              
              {/* MUN提案PDF查看器 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">View Complete MUN Proposal</h3>
                </div>
                <div className="h-[80vh]">
                  <iframe
                    src={item.pdf}
                    className="w-full h-full border-0"
                    title="MUN Proposal PDF"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      ) : null}

      {/* 访谈内容 */}
      {item.slug === "living-between-borders-interview" && item.interviewContent && (
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none" style={{fontFamily: 'Times New Roman, serif', fontSize: '14pt', lineHeight: '1.5'}}>
            {/* 引言 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">Introduction</h2>
              <p className="mb-4">As part of the research project on Myanmar refugees in Thailand, two interviews focusing on the lives of Myanmar refugees were conducted.</p>
              <p className="mb-4">Thailand has been a major destination for refugees. However, numerous challenges and difficulties persist after they arrive in this new land, including legal uncertainty, language barriers, and limited access to education and employment opportunities. These problems remain unsolved, bringing a significant impact on the daily life of refugees.</p>
              <p className="mb-4">In the first interview, I spoke with Moe, a young refugee student in Mae Sot. She shared the challenges she has faced due to displacement, legal challenges, and educational limitations. Her life stands as a reflection of the harsh reality for most refugees, while some may suffer from even a severe situation.</p>
              <p className="mb-4">Later, I invited Professor Hong for the second interview. Hong is a researcher and NGO practitioner who has studied refugee communities across Thailand and offered a broader socio-economic analysis of their situation. His speech offers a new perspective to the problem, showcasing not only the challenge refugees faced, but also the inefficiency of current NGOs and raise a possible solution.</p>
              <p className="mb-6">Together, these perspectives highlight both the micro-level experiences of refugees and the structural barriers they face in host societies. It also offers a valuable insight that may lead to a potential solution.</p>
            </section>

            {/* 访谈故事1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">{item.interviewContent.story1.title}</h2>
              <p className="mb-4">Moe and her family fled to Thailand in 2009 and have lived in refugee camps in Thailand for more than fifteen years. Currently, she is preparing for the GED exam in Mae Sot. For her, education is her primary pathway to opportunity.</p>
              <p className="mb-4">However, legal challenges stand as the biggest problem in her way. Without Thai national IDs, refugees are unable to travel freely, access higher education, or obtain formal employment. "Every time I want to leave the camp, I need permission from the refugee camp's officials," she explained, reflecting the restrictive nature of refugee life.</p>
              <p className="mb-4">Basic services are also limited. Healthcare, with an increasing burden, seems to be insufficient under the subsidy of the UN. Education opportunities are limited to informal areas, which only focus on English and life skills. And such education is also proven to be not professional enough, which is taught by foreign volunteers instead of experienced scholars.</p>
              <p className="mb-4">In the interview, Moe specifically mentioned language as a persistent barrier: "I can understand some Thai, but speaking is hard… It's difficult when applying to schools or jobs."</p>
              <p className="mb-4">Despite these restrictions, Moe has developed practical skills through vocational courses, such as cooking, and completed an internship in a local restaurant. She also interned at an NGO supporting migrant education. She plans to return as staff in the future.</p>
              <p className="mb-6">While this reveals her isolated camp life, which she mentions, "Here, I don't have many friends", she remains passionate and positive. Her determination to pursue education and change her community is clear: "If I can get a scholarship, I want to study politics at the university. That would give me a chance to build a better life for my community." She further mentions that " If I become a leader, I will create new education to get children to a better education level."</p>
            </section>

            {/* 访谈故事2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">{item.interviewContent.story2.title}</h2>
              <p className="mb-4">Complementing Moe's narratives, Hong provided a structural overview of the refugee situation in Thailand. As an important scholar in this field, he has conducted fieldwork in Bangkok and Mae Sot, observing firsthand the challenges refugees face in education, employment, and integration.</p>
              <p className="mb-4">While Hong admitted that most refugees migrate for economic survival due to the political instability and conflict in Myanmar, Thailand does not provide permanent settlement or full legal protection to refugees. Stuck between, refugees are left in a state of protracted temporality.</p>
              <p className="mb-4">According to Hong, language and legal status are the most significant barriers for refugees. Without documentation, they face risks of arrest, deportation, or police extortion. Even with UN registration, they are excluded from formal employment. As a result, most refugees are restricted to low-skilled jobs, such as agriculture, construction, or seafood processing, earning as little as 200 baht per day. For children who work at a young age, they earn even less. The severe poverty status results in widespread child labor and the exacerbation of early dropout rates.</p>
              <p className="mb-4">While education has been thought of as an important pathway, the opportunities remain limited. Hong observed that many children marry and form families by age 14 or 15, which stop them from learning but instead working. Meanwhile, informal "learning centers" lack official recognition, leaving refugees nothing but a useless certificate. Although GED preparation programs appear to be a potential pathway to higher education abroad, these remain rare due to limited resources and the high academic demands.</p>
              <p className="mb-4">Hong also mentions the harsh employment situation of refugees. While NGOs offer training in handicrafts, sewing, or cooking, market access appears to be weak and limited. Social enterprises like The Borderline provide outlets for refugee-made goods, but the scale of the enterprises remains limited. Access to banking services or microloans is often banned due to the lack of credit. Just like what Hong summarized: "Everything comes back to money—education, healthcare, entrepreneurship—it all requires funding. And refugees have none." Indeed harsh, but real.</p>
              <p className="mb-6">Finally, Hong emphasized that few refugees consider Thailand a permanent home. "Every refugee I've met says the same thing," he explained. "Even those who have lived here for ten years or more—they all want to go back to Myanmar." This finding underscores the uncertain character of refugee settlement in Thailand. With both legal exclusion and enduring cultural ties to Myanmar, the future of Myanmar refugees remains uncertain.</p>
            </section>

            {/* 结论 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">Conclusion</h2>
              <p className="mb-4">While Moe's story reveals the difficult situation of individuals and their dignity, Hong, as a scholar, provides important insight from the perspective of an NGO leader and scholar.</p>
              <p className="mb-4">Together, their words underscore the urgent need for multi-level interventions: recognition of refugee status, improved access to education, and sustainable livelihood opportunities. Although systemic change remains difficult with the unchanged policy, targeted assistance—such as GED programs, microfinance, and vocational training—can provide meaningful support to light the future of refugees.</p>
              <p className="mb-6">As one of the most vulnerable populations in Southeast Asia, the Myanmar refugee community in Thailand still needs more attention from the world. Their stories, both personal and collective, stand as an essential and critical factor in the resolution of the crisis.</p>
            </section>
          </article>
        </div>
      )}

    </article>
  );
}


