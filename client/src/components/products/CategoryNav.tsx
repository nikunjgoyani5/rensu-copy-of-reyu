'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

const categories = [
  { name: 'Solitaire', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { name: 'Toi Et Moi', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { name: 'Side Stone', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { name: 'Eternity', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { name: 'Triology', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { name: 'Halo', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80' },
];

export function CategoryNav() {
  return (
    <div className="w-full solitaire-bg-beige-dark py-5">
      <Container>
        <div className="lg:flex lg:items-baseline items-center gap-2 mb-8">
          <h1 className="solitaire-title-main">Solitaire Rings</h1>
          <span className="text-primary-800 text-lg text-top inria-serif-regular">(29 Designs)</span>
        </div>

        <div className="flex justify-center gap-10 items-center overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center gap-3 cursor-pointer group min-w-[100px]">
              <div className="w-28 h-28 lg:w-32 lg:h-32 xl:w-37 xl:h-37 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary-500 transition-all duration-300 relative">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  priority
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-md solitaire-text-gold inter-font font-normal">{cat.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
