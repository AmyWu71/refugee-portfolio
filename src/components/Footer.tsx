import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} A Name, A Chance</p>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hover:underline underline-offset-4 hover:text-slate-800 transition-colors">
            联系方式
          </Link>
          <a href="https://www.unhcr.org/" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4 hover:text-slate-800 transition-colors">
            UNHCR 官网
          </a>
        </div>
      </div>
    </footer>
  );
}


