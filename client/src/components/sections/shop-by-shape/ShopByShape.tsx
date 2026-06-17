"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

// 👉 Replace with your actual images
import princess from "@/assets/images/shapes/princess.png";
import oval from "@/assets/images/shapes/oval.png";
import pear from "@/assets/images/shapes/pear.png";
import marquise from "@/assets/images/shapes/marquise.png";
import emerald from "@/assets/images/shapes/emerald.png";
import asscher from "@/assets/images/shapes/princess2.png";
import cushion from "@/assets/images/shapes/cushion.png";
import elongated from "@/assets/images/shapes/elongated.png";
import heart from "@/assets/images/shapes/heart.png";
import radiant from "@/assets/images/shapes/radiant.png";

const SHAPES = [
  { name: "Princess", img: princess },
  { name: "Oval", img: oval },
  { name: "Pear", img: pear },
  { name: "Marquise", img: marquise },
  { name: "Emerald", img: emerald },
  { name: "Asscher", img: asscher },
  { name: "Cushion", img: cushion },
  { name: "Elongated Cushion", img: elongated },
  { name: "Heart", img: heart },
  { name: "Radiant", img: radiant },
];

export default function ShopByShape() {
  // Duplicate shapes to create a seamless infinite loop
  const displayShapes = [...SHAPES, ...SHAPES, ...SHAPES];

  return (
    <div className="background-secondary pt-8 md:pt-12 lg:pt-16 overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .marquee-container {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          .marquee-container:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Title */}
      <h2 className=" solitaire-title-section text-primary-900 text-center mb-3.5 lg:text-left ">
        Explore Our Collection By Shape
      </h2>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="marquee-container gap-6 md:gap-8">
          {displayShapes.map((shape, index) => (
            <div
              key={`${shape.name}-${index}`}
              className="flex flex-col items-center gap-3 min-w-[120px] md:min-w-[150px] shrink-0 group cursor-pointer"
            >
              {/* Circle */}
              <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full bg-primary-100 flex items-center justify-center p-2 transition-all duration-300 group-hover:bg-primary-200 group-hover:scale-105">
                {/* Image */}
                <div className="relative w-[70px] h-[70px] md:w-[100px] md:h-[100px]">
                  <Image
                    src={shape.img}
                    alt={shape.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Label */}
              <p className="text-sm md:text-lg text-center font-inter font-semibold text-[var(--color-primary-700)] leading-tight">
                {shape.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
