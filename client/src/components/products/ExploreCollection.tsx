import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

const collections = [
  { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
  { name: 'Necklaces & Pendants', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200' },
  { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80' },
  { name: 'Diamonds', image: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1200' },
];

export function ExploreCollection() {
  return (
    <div className="w-full solitaire-bg-beige-dark solitaire-section">
      <Container>
        <h2 className="solitaire-title-section text-center mb-12">
          Explore Our Stunning Jewelry and Diamond Collection
        </h2>
        
        <div className="max-w-[1273px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="relative aspect-[3/4] max-w-[295px] max-h-[376px] w-full overflow-hidden bg-black mb-4">
                <Image 
                  src={collection.image} 
                  alt={collection.name} 
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                />
              </div>
              <h3 className="solitaire-title-card text-center">{collection.name}</h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
