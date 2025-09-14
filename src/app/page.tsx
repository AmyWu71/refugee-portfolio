import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-2xl text-white min-h-[600px]">
        <div className="absolute inset-0">
          <Image

src="/user-map.png"
            alt="Myanmar-Thailand border humanitarian aid map"
            fill
            className="object-cover blur-[1.5px]"
            priority
          />
        </div>
        {/* 半透明遮罩确保文字可读性 */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative px-8 py-24 sm:px-12 sm:py-28 lg:px-16 lg:py-32">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
            A Name, A Chance: Exploring Refugee Issues Through Research and Stories
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-blue-50">
            本网站展示了我关于缅甸难民及相关国际议题的研究与创作，旨在通过学术与艺术的结合，引发更多对全球难民问题的关注。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/portfolio" className="inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              浏览作品集
            </Link>
            <Link href="/background" className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/20">
              研究背景
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        <Link href="/portfolio?category=research" className="rounded-xl border border-slate-200 bg-white p-6 hover:bg-slate-50 hover:shadow-md transition-all">
          <h3 className="text-lg font-medium text-slate-800">研究论文/学术文章</h3>
          <p className="mt-2 text-sm text-slate-600">AP Seminar、独立研究、相关写作</p>
        </Link>
        <Link href="/portfolio?category=visual" className="rounded-xl border border-slate-200 bg-white p-6 hover:bg-slate-50 hover:shadow-md transition-all">
          <h3 className="text-lg font-medium text-slate-800">视觉作品</h3>
          <p className="mt-2 text-sm text-slate-600">海报、手绘、信息图</p>
        </Link>
        <Link href="/portfolio?category=multimedia" className="rounded-xl border border-slate-200 bg-white p-6 hover:bg-slate-50 hover:shadow-md transition-all">
          <h3 className="text-lg font-medium text-slate-800">多媒体</h3>
          <p className="mt-2 text-sm text-slate-600">视频、演讲稿、MUN 提案</p>
        </Link>
      </section>
    </div>
  );
}
