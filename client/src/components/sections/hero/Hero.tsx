import Image from "next/image";
import heroImg from "@/assets/images/image.png";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative w-full bg-brand-dark overflow-hidden">
      <Container>


      {/* ── WRAPPER ── */}
      <div className="flex flex-col sm:flex-row sm:items-stretch w-full py-15">

        {/* ── RIGHT IMAGE (rendered first in DOM so it shows on top on mobile) ── */}
        <div className=" 
          relative 
          order-first sm:order-last
          w-full h-[200px]  lg:top-20
          sm:h-auto sm:flex-1
        ">
          {/* Left-edge gradient — blends image into the dark left panel */}
          <div
            className="absolute inset-y-0 left-0 z-10 w-[40%] pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, var(--color-brand-dark) 0%, rgba(8,9,13,0.88) 35%, rgba(8,9,13,0.45) 65%, transparent 100%)",
            }}
          />
          {/* Top vignette */}
          <div
            className="absolute inset-x-0 top-0 z-10 h-[30%] pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, rgba(8,9,13,0.60) 0%, transparent 100%)",
            }}
          />
          {/* Bottom vignette */}
          <div
            className="absolute inset-x-0 bottom-0 z-10 h-[10%] pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(8,9,13,0.65) 0%, transparent 100%)",
            }}
          />

          <Image
            src={heroImg}
            alt="Diamond ring on dark luxury surface"
            fill
            priority
            className="object-cover object-bottom"
      
          />
        </div>

        {/* ── LEFT TEXT PANEL ── */}
        <div className=" 
          relative z-10 flex flex-col justify-center
          bg-brand-dark 
          order-last sm:order-first
          flex-shrink-0 
          sm:w-[46%] md:w-[44%] lg:w-[42%] xl:w-[40%]
         
          py-7 sm:py-10 md:py-12 lg:py-14 xl:py-16
          text-center sm:text-left
        ">
          {/* ── Heading ── */}
          <h1
            className="
              font-inria font-bold text-white leading-[1.1] tracking-tight
              text-[1.35rem]
              sm:text-[1.25rem]
              md:text-[1.6rem]
              lg:text-[2rem]
              xl:text-[2.7rem]
              2xl:text-[3.7rem]
            "
          >
            Your Trusted Partner in
           
            Diamond &amp; Jewelry
        
            Manufacturing.
          </h1>

          {/* ── Buttons ── */}
          <div className="
            flex flex-row flex-wrap items-center
            justify-center sm:justify-start
            gap-4 sm:gap-4
            mt-8 
          ">

            {/* Filled gold */}
            <button
              className=" cursor-pointer
                flex items-center justify-center gap-1.5 sm:gap-2
                text-white font-inter font-bold tracking-wide
                text-[0.8rem] sm:text-[0.85rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem]
                w-full sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[280px]
                py-2.5 sm:py-3 md:py-3.5 xl:py-4
                hover:bg-brand-gold-hover hover:text-brand-brown-dark active:scale-95
                transition-all duration-300 whitespace-nowrap group
              "
              style={{ backgroundColor: "var(--color-primary-600)" }}
            >
              Discover Fine Jewelry
              <ChevronRight
                size={18}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>

            {/* Outlined gold */}
            <button
              className=" cursor-pointer
                flex items-center justify-center gap-1.5 sm:gap-2
                text-white font-inter font-bold tracking-wide
                text-[0.8rem] sm:text-[0.85rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem]
                w-full sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[280px]
                py-2.5 sm:py-3 md:py-3.5 xl:py-4
                hover:bg-brand-gold-hover hover:text-brand-brown-dark active:scale-95
                transition-all duration-300 whitespace-nowrap group
              "
              style={{ border: "1px solid var(--color-primary-600)" }}
            >
              Discover Diamonds
              <ChevronRight
                size={18}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

      </div>
      </Container>
    </section>
  );
}