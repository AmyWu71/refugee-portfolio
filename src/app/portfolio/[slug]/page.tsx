import { notFound } from "next/navigation";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";

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
        {item.slug === "mun-proposal" && (
          <h2 className="mt-2 text-lg text-gray-600">边境医疗与教育协作机制</h2>
        )}
        <p className="mt-2 text-sm text-gray-400">{item.background}</p>
      </header>

      {item.images?.length ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {item.images.map((src) => (
            <div key={src} className="relative aspect-[4/3] bg-black/20 rounded-lg overflow-hidden">
              <Image src={src} alt={item.title} fill className="object-cover" />
            </div>
          ))}
        </div>
      ) : null}

      {item.pdf ? (
        <div className="space-y-4">
          <div className="flex gap-4">
            <a 
              href={item.pdf} 
              download
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Download PDF
            </a>
            <a 
              href={item.pdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Open in New Window
            </a>
          </div>
          
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
                <li>Over one-third of refugees earn monthly incomes far below Thailand's legal minimum wage standards</li>
                <li>Language barriers, educational gaps, and identity restrictions constitute major employment obstacles</li>
                <li>NGOs provide support through educational programs and rights advocacy</li>
              </ul>
              <p className="mt-4 text-gray-600">
                For the complete report, please view the PDF document below.
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
          
          {/* PDF 查看器 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-2 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Full Research Report</h3>
            </div>
            <div className="h-[80vh] w-full">
              <iframe 
                src={`${item.pdf}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full border-0"
                title="Research Report PDF"
              />
            </div>
          </div>
        </div>
      ) : null}

      {item.video ? (
        <div className="aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            src={item.video}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null}

    </article>
  );
}


