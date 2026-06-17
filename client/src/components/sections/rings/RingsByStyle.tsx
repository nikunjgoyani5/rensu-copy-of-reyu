"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "@/components/ui/section/Section";
import { Container } from "@/components/ui/Container";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type RingProduct = {
  sku: string;
  name: string;
  image: string;
};

type RingStyle = {
  id: string;
  label: string;
  products: RingProduct[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

import ring1 from "@/assets/images/collection/rings.png";
import ring2 from "@/assets/images/collection/rings1.png";
import ring3 from "@/assets/images/collection/rings.png";

const RING_STYLES: RingStyle[] = [
  {
    id: "triology", label: "Triology", products: [
      { sku: "TR-001", name: "Classic Trilogy Engagement Ring", image: ring1.src },
      { sku: "TR-002", name: "Oval Trilogy Diamond Ring", image: ring2.src },
      { sku: "TR-003", name: "Pear Cut Trilogy Ring", image: ring3.src },
    ]
  },
  {
    id: "solitaire", label: "Solitaire", products: [
      { sku: "SL-001", name: "Classic Solitaire Engagement Ring", image: ring1.src },
      { sku: "SL-002", name: "Round Brilliant Solitaire", image: ring2.src },
      { sku: "SL-003", name: "Princess Cut Solitaire", image: ring3.src },
    ]
  },
  {
    id: "halo", label: "Halo", products: [
      { sku: "HL-001", name: "Round Halo Engagement Ring", image: ring1.src },
      { sku: "HL-002", name: "Cushion Cut Halo Ring", image: ring2.src },
      { sku: "HL-003", name: "Double Halo Diamond Ring", image: ring3.src },
    ]
  },
  {
    id: "pave", label: "Pave", products: [
      { sku: "PV-001", name: "Hidden Pave Engagement Ring", image: ring1.src },
      { sku: "PV-002", name: "Triple Row Pave Band", image: ring2.src },
      { sku: "PV-003", name: "French Pave Diamond Ring", image: ring3.src },
    ]
  },
  {
    id: "nature-inspired",
    label: "Nature Inspired",
    products: [
      { sku: "LGRG0862", name: "Yellow Gold Pear Cut Engagement Ring", image: ring1.src },
      { sku: "LGRG1007", name: "Oval Diamond Nature Inspired Engagement Ring", image: ring2.src },
      { sku: "LGRG0637", name: "Nature Inspired Round Diamond Ring", image: ring3.src },
    ],
  },
  {
    id: "vintage", label: "Vintage", products: [
      { sku: "VT-001", name: "Art Deco Vintage Ring", image: ring1.src },
      { sku: "VT-002", name: "Edwardian Style Diamond Ring", image: ring2.src },
      { sku: "VT-003", name: "Victorian Era Inspired Ring", image: ring3.src },
    ]
  },
];

const ACTIVE_DEFAULT = "nature-inspired";

export default function RingsByStyle() {
  const [activeId, setActiveId] = useState<string>(ACTIVE_DEFAULT);

  return (
    <Section className="bg-primary-300">
      {/* Section heading */}
      <div className="mb-12 text-center xl:text-left px-6">
        <h2 className="font-inria text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Explore our Rings by Style
        </h2>
        <p className="text-white/80 font-inter text-lg max-w-2xl xl:mx-0  mx-auto">
          Discover a curated collection of engagement rings designed to capture your unique love story.
        </p>
      </div>

      {/* 🧩 Accordion Container - Horizontal for Laptop and Above (2xl: 1536px+) */}
      <div className="flex flex-col xl:flex-row items-stretch gap-4  w-full px-6 lg:px-10">
        {RING_STYLES.map((style) => (
          <div
            key={style.id}
            onMouseEnter={() => setActiveId(style.id)}
            onClick={() => setActiveId(style.id)}
            className={`
                relative transition-all duration-1000 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] cursor-pointer overflow-hidden rounded-xl border-2 border-white/20
                ${activeId === style.id
                ? "flex-[12] xl:flex-[6] bg-gradient-to-b from-brand-brown-light to-black ring-2 ring-white/40 xl:pb-0 pb-9  shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                : "flex-[1] xl:flex-[0.6] bg-gradient-to-b from-brand-brown-dark to-[#1A150F] hover:from-brand-brown-light min-h-[60px] xl:min-h-0"}
              `}
          >
            {/* ─ CONTENT ─ */}
            <div className="h-full w-full flex flex-col xl:flex-row xl:pt-2 2xl:pt-0">


              {/* LABEL (Vertical on Laptop+, Horizontal otherwise) */}
              <div className={`
                  flex items-center justify-center shrink-0 transition-all duration-700 bg-ccent
                  ${activeId === style.id ? "p-4 " : "p-3"}
                `}>
                <span className={`
                    text-primary-100 font-inria font-bold uppercase tracking-[0.2em] whitespace-nowrap text-lg xl:text-2xl 2xl:text-3xl
                    xl:[writing-mode:vertical-rl] xl:rotate-180 transition-all duration-700 
                    ${activeId === style.id ? "opacity-100 scale-100 " : "opacity-60 scale-95 xl:ml-2"}
                  `}>
                  {style.label}
                </span>
              </div>

              {/* EXPANDED PANEL CONTENT */}
              <div className={`
                  flex-1 transition-all duration-700 delay-300
                  ${activeId === style.id ? "opacity-100 translate-y-0 flex flex-col justify-center gap-6 xl:gap-6 2xl:gap-8" : "opacity-0 translate-y-4 hidden "}
                `}>
                {/* Products Grid */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 xl:gap-6 xl:px-4 2xl:px-0 2xl:gap-10 ">
                  {style.products.map((product, i) => (
                    <div
                      key={product.sku}
                      className={`
                          group/card relative w-full max-w-[190px] xl:max-w-[200px] 2xl:max-w-[230px] aspect-square rounded-lg overflow-hidden border border-white/30 shadow-2xl transition-all duration-700
                          ${activeId === style.id ? "scale-100" : "scale-90"}
                          ${i === 1 ? "xl:translate-y-3" : "xl:-translate-y-3"}
                        `}
                    >
                      {/* SKU Text - Top Right, Hover Only */}
                      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                        <span className="text-white text-[10px] font-bold tracking-wider drop-shadow-md">
                          SKU: {product.sku}
                        </span>
                      </div>

                      {/* Ring Image */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover/card:scale-110 transition-transform duration-1000"
                      />

                      {/* Product Name - Bottom Left, Hover Only */}
                      <div className="absolute bottom-3 left-3 right-3 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                        <p className="text-white text-xs font-bold leading-tight drop-shadow-lg">
                          {product.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Discover More Footer */}
                <div className="flex justify-center xl:justify-end xl:pr-8 2xl:pr-12">
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] border-b border-white/30 group-hover:border-white transition-colors pb-1 whitespace-nowrap">
                      Discover More Designs
                    </span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}