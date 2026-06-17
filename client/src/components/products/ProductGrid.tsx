'use client';

import React from 'react';
import { ProductCard, ProductProps } from './ProductCard';

const mockProducts: ProductProps[] = [
  {
    id: '1',
    name: 'Oval Hidden Pave Ring',
    price: 449,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200',
    carats: ['1.0 CT', '2.0 CT', '3.0 CT']
  },
  {
    id: '2',
    name: 'Ashoka Solitaire',
    price: 749,
    image: 'https://images.unsplash.com/photo-1601821765780-754fa98637c1?q=80&w=1200',
    carats: ['1.0 CT', '2.0 CT', '3.0 CT']
  },
  {
    id: '3',
    name: 'Marquise Solitaire Ring',
    price: 749,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1200',
    carats: ['1.0 CT', '2.0 CT', '3.0 CT']
  },
  {
    id: '4',
    name: 'Pear Solitaire Ring',
    price: 849,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200',
    carats: ['1.0 CT', '2.0 CT', '3.0 CT']
  },
  {
    id: '5',
    name: 'Pear Pink Halo',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1200',
    carats: ['1.0 CT', '2.0 CT', '3.0 CT']
  },
  {
    id: '6',
    name: 'Heart Pink Halo',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1200',
    carats: ['1.0 CT', '2.0 CT', '3.0 CT']
  },
  {
    id: '7',
    name: 'Radiant Baguette Halo',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200',
    carats: ['1.0 CT', '2.0 CT', '3.0 CT']
  },
  {
    id: '8',
    name: 'PEAR EMERALD TOI ET MOI',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1200',
    carats: ['1.0 CT', '2.0 CT', '3.0 CT']
  },
  {
    id: '9',
    name: 'PEAR EMERALD TOI ET MOI',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1200',
    carats: ['1.0 CT', '2.0 CT', '3.0 CT']
  },
  {
    id: '10',
    name: 'PEAR EMERALD TOI ET MOI',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1200',
    carats: ['1.0 CT', '2.0 CT', '3.0 CT']
  },
  {
    id: '11',
    name: 'PEAR EMERALD TOI ET MOI',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1200',
    carats: ['1.0 CT', '2.0 CT', '3.0 CT']
  },
  {
    id: '12',
    name: 'PEAR EMERALD TOI ET MOI',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1200',
    carats: ['1.0 CT', '2.0 CT', '3.0 CT']
  }
];

export function ProductGrid() {
  return (
    <div className="flex-1 pt-6 ">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-6">

        <div className="flex flex-wrap sm:flex-nowrap w-full gap-2">
          {['Platinum', 'Solitaire'].map(tag => (
            <div
              key={tag}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 border border-primary-200 rounded-full text-xs sm:text-sm solitaire-text-gold font-inter font-normal"
            >
              <span>{tag}</span>

              <button className="solitaire-text-gold hover:text-primary-800">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 1L9 9M9 1L1 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="w-full sm:w-fit flex items-center justify-center gap-2 px-4 py-2 min-w-[170px] border border-primary-200 rounded-full cursor-pointer text-xs sm:text-sm transition-colors solitaire-text-gold font-inter font-normal">
          <span>Most Relevant</span>

          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-17">
        <button className="px-6 py-3 solitaire-button">
          Show More
        </button>
      </div>
    </div>
  );
}
