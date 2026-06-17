import React from 'react';
import Image from 'next/image';

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  carats: string[];
}

export function ProductCard({ product }: { product: ProductProps }) {
  return (
    <div className="flex flex-col solitaire-card gap-3 group cursor-pointer">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-black">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>
      
      <div className="flex justify-between items-start text-primary-800 px-1">
        <h3 className="solitaire-title-card">{product.name}</h3>
        <div className="text-right">
          <span className="  inter-font font-normal block">From</span>
          <span className=" inter-font font-normal">${product.price}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 pb-2 px-1">
        {product.carats.map((carat) => (
          <span 
            key={carat} 
            className="px-2 py-0.5 text-[10px] sm:text-xs solitaire-text-gold border border-primary-400 rounded-full font-inter whitespace-nowrap"
          >
            {carat}
          </span>
        ))}
      </div>
    </div>
  );
}
