import { portfolio } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}
