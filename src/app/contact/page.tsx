export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">联系与下载</h1>
      <section className="space-y-2">
        <p className="text-sm text-gray-300">邮箱：your.email@example.com</p>
        <p className="text-sm text-gray-300">LinkedIn：<a className="underline" href="#" target="_blank" rel="noreferrer">你的领英链接</a></p>
        <p className="text-sm text-gray-300">ResearchGate：<a className="underline" href="#" target="_blank" rel="noreferrer">若有请填写</a></p>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-medium">下载资源</h2>
        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
          <li><a className="underline" href="/pdfs/portfolio-collection.pdf" download>PDF 作品集合集</a></li>
          <li><a className="underline" href="/pdfs/ap-seminar-paper.pdf" download>研究论文</a></li>
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-medium">友情链接</h2>
        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
          <li><a className="underline" href="https://www.unhcr.org/" target="_blank" rel="noreferrer">UNHCR 官网</a></li>
          <li><a className="underline" href="https://maetaoclinic.org/" target="_blank" rel="noreferrer">Mae Tao Clinic</a></li>
        </ul>
      </section>
    </div>
  );
}


