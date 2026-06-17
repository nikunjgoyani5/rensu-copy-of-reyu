'use client';

import React, { useState } from 'react';

const filterCategories = [
  {
    title: 'Metal',
    options: [
      { id: 'platinum', label: 'Platinum', color: 'linear-gradient(150deg, #ADACAC 12.89%, #FFFFFF 49.02%, #ADACAC 85.16%)' },
      { id: 'yellow-gold', label: 'Yellow Gold', color: 'linear-gradient(150deg, #E4C997 12.89%, #FFF5DF 49.02%, #E4C997 85.16%)' },
      { id: 'white-gold', label: 'White Gold', color: 'linear-gradient(150deg, #ADACAC 12.89%, #FFFFFF 49.02%, #ADACAC 85.16%)' },
      { id: 'rose-gold', label: 'Rose Gold', color: 'linear-gradient(150deg, #FFC3C3 12.89%, #FEF4F3 49.02%, #FFC3C3 85.16%)' },
      { id: 'silver', label: 'Silver', color: 'linear-gradient(150deg, #ADACAC 12.89%, #FFFFFF 49.02%, #ADACAC 85.16%)' },
    ]
  },
  {
    title: 'Stone Shape',
    options: [
      { id: 'round', label: 'Round', icon: '/images/round.svg' },
      { id: 'oval', label: 'Oval', icon: '/images/Oval.svg' },
      { id: 'cushion', label: 'Cushion', icon: '/images/Cushion.svg' },
      { id: 'emerald', label: 'Emerald', icon: '/images/Emerald.svg' },
      { id: 'princess', label: 'Princess', icon: '/images/Princess.svg' },
    ]
  },
  {
    title: 'Fancy Color',
    options: [
      { id: 'blue', label: 'Blue', color: 'linear-gradient(150deg, #2D55B9 12.52%, #A8D1FF 52.29%, #2D55B9 92.05%)' },
      { id: 'pink', label: 'Pink', color: 'linear-gradient(150deg, #EA29C0 16.91%, #F7B4FA 51.78%, #EA29C0 86.65%)' },
      { id: 'yellow', label: 'Yellow', color: 'linear-gradient(150deg, #FAAB18 14.72%, #FFE489 52.06%, #FAA818 89.41%)' },
      { id: 'green', label: 'Green', color: 'linear-gradient(150deg, #23A213 12.89%, #C4FFA8 49.02%, #23A213 85.16%)' },
      { id: 'purple', label: 'Purple', color: 'linear-gradient(150deg, #6122B4 12.89%, #C599FF 49.02%, #6122B4 85.16%)' },
      { id: 'orange', label: 'Orange', color: 'linear-gradient(150deg, #C55C00 12.89%, #FFB879 49.02%, #C55C00 85.16%)' },
      { id: 'red', label: 'Red', color: 'linear-gradient(150deg, #A21713 12.89%, #FFA8A8 49.02%, #A21713 85.16%)' },
    ]
  },
  {
    title: 'Price',
    options: [
      { id: 'under-150', label: 'Under $150' },
      { id: '150-250', label: '$150 - $250' },
      { id: '250-350', label: '$250 - $350' },
      { id: '350-550', label: '$350 - $550' },
      { id: '550-1050', label: '$550 - $1050' },
      { id: '1050-1550', label: '$1050 - $1550' },
      { id: 'above-1550', label: 'Above $1550' },
    ]
  }
];

export function FilterSidebar() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, boolean>>({
    'platinum': true,
  });

  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    'Metal': true,
    'Stone Shape': true,
    'Fancy Color': false,
    'Price': false,
  });

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleFilter = (id: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleCategory = (title: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className='max-h-fit solitaire-bg-beige '>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden ">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex justify-between items-center px-4 py-3 solitaire-bg-beige text-primary-800 text-xl inria-serif-bold shadow-sm"
        >
          <span>Filters</span>
          <svg
            width="20" height="20" viewBox="0 0 20 20" fill="none"
            className={`transition-transform duration-300 ${isMobileOpen ? 'rotate-180' : ''}`}
          >
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className={`
        ${isMobileOpen ? 'block' : 'hidden'} 
        lg:block w-full lg:w-[294px] flex-shrink-0 lg:pr-8 mb-8 lg:mb-0 solitaire-bg-beige pt-6 p-4
      `}>
        <div className="flex justify-between items-center mb-6 hidden lg:flex">
          <h2 className="solitaire-title-sidebar">Filters</h2>
          <button className="text-sm border border-primary-600 px-2 py-0.5 rounded-2xl solitaire-text-gold cursor-pointer transition-colors font-inter font-medium">
            Reset All
          </button>
        </div>

        <div className="space-y-4  p-4 lg:p-0 rounded-xl border lg:border-0 border-primary-200">
          {filterCategories.map((category, index) => (
            <div
              key={category.title}
              className={`border-primary-200 ${openCategories[category.title] ? 'pb-4' : ''} ${
                index === filterCategories.length - 1 ? '' : 'border-b'
              }`}
            >
              <div
                className="flex gap-2 items-center my-4 cursor-pointer text-primary-700"
                onClick={() => toggleCategory(category.title)}
              >
                <h3 className="solitaire-heading-bold text-xl">{category.title}</h3>
                <svg
                  width="18" height="18" viewBox="0 0 12 12" fill="none"
                  className={`transition-transform duration-300  ${openCategories[category.title] ? 'rotate-180' : 'mt-2'}`}
                >
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600" />
                </svg>
              </div>

              <div className={`space-y-3 overflow-hidden transition-all duration-300 ${openCategories[category.title] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {category.options.map((option) => (
                  <label key={option.id} className="flex items-end justify-between gap-3 cursor-pointer group px-4 p-1">

                    <div className="flex flex-row gap-2">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={!!selectedFilters[option.id]}
                        onChange={() => toggleFilter(option.id)}
                      />

                      {'icon' in option && option.icon && (
                        <div className="w-7 h-7 relative">
                          <img
                            src={option.icon}
                            alt={option.label}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}

                      {'color' in option && option.color && (
                        <div
                          className="w-5 h-5 rounded-full shadow-sm border border-black/10"
                          style={{ background: option.color }}
                        />
                      )}


                      <span className="text-sm text-primary-700 font-inter font-medium">{option.label}</span>
                    </div>

                    <div className={`w-5 h-5 rounded-sm border flex items-center justify-center transition-colors
                      ${selectedFilters[option.id]
                        ? 'bg-primary-500 border-primary-500'
                        : 'border-primary-500 group-hover:border-primary-600'}`}
                    >
                      {selectedFilters[option.id] && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* Reset button for mobile */}
          <div className="lg:hidden pt-4">
            <button className="w-full py-2 border border-primary-200 rounded solitaire-text-gold inria-serif-regular">
              Reset All Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
