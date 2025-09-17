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
        <p className="mt-2 text-sm text-gray-400">{item.background}</p>
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
                    This case study examines the Rohingya refugee crisis, one of the most pressing humanitarian issues in Southeast Asia. The Rohingya are a stateless Muslim minority group from Myanmar's Rakhine State, who have faced systematic persecution and violence, leading to mass displacement.
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


    </article>
  );
}


