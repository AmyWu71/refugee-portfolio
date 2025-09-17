import { Suspense } from 'react';
import PortfolioFilter from "@/components/PortfolioFilter";

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioFilter />
    </Suspense>
  );
}


