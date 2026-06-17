import React from 'react';
import { CategoryNav } from '@/components/products/CategoryNav';
import { FilterSidebar } from '@/components/products/FilterSidebar';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ExploreCollection } from '@/components/products/ExploreCollection';
import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'Solitaire Rings | Rensu',
  description: 'Explore our stunning collection of solitaire rings.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#FFFAF4] ">

      <Container >
        <CategoryNav />

        <div className="flex flex-col lg:flex-row lg:gap-8 solitaire-section-bottom   ">
          <FilterSidebar />
          <ProductGrid />
        </div>
      </Container>

      <ExploreCollection />
    </div>
  );
}
