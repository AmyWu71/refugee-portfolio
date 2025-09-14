import Link from "next/link";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";


export default function PortfolioPage({ searchParams }: { searchParams: { category?: string } }) {
  const category = searchParams?.category;
  const items = category ? portfolio.filter((p) => p.category === category) : portfolio;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Portfolio</h1>
        <div className="flex gap-2 text-sm">
          <Link href="/portfolio" className={`px-3 py-1 rounded-md border transition-colors ${!category ? "bg-blue-500 text-white border-blue-500" : "bg-white/10 text-gray-700 border-gray-300 hover:bg-gray-100"}`}>All</Link>
          <Link href="/portfolio?category=research" className={`px-3 py-1 rounded-md border transition-colors ${category === "research" ? "bg-blue-500 text-white border-blue-500" : "bg-white/10 text-gray-700 border-gray-300 hover:bg-gray-100"}`}>Research</Link>
          <Link href="/portfolio?category=visual" className={`px-3 py-1 rounded-md border transition-colors ${category === "visual" ? "bg-blue-500 text-white border-blue-500" : "bg-white/10 text-gray-700 border-gray-300 hover:bg-gray-100"}`}>Visual</Link>
          <Link href="/portfolio?category=multimedia" className={`px-3 py-1 rounded-md border transition-colors ${category === "multimedia" ? "bg-blue-500 text-white border-blue-500" : "bg-white/10 text-gray-700 border-gray-300 hover:bg-gray-100"}`}>Multimedia</Link>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link key={item.slug} href={`/portfolio/${item.slug}`} className="group rounded-xl overflow-hidden border hover:border-white/30 transition">
            <div className="relative h-48 bg-black/20">
              <Image src={item.thumbnail} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-400 line-clamp-2">{item.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


