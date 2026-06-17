import Image from "next/image";
import diamondImg from "@/assets/images/lab-grown.png";
import { ChevronRight } from "lucide-react";

export default function LabGrown() {
  return (
    <section className="bg-[var(--color-base-800)] text-white overflow-hidden py-12 md:py-16 xl:py-0 ">
      {/* Container: Stacked on mobile, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[610px]">

        {/* LEFT — Image column */}
        <div className="relative w-full lg:w-[50%] h-[350px] sm:h-[450px] lg:h-auto shrink-0">
          <Image
            src={diamondImg}
            alt="Lab Grown Diamonds"
            fill
            className="object-cover object-center"
            priority
          />

          {/* ── CINEMATIC RADIAL SPOTLIGHT OVERLAY ── */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(
                ellipse 70% 65% at 45% 50%,
                transparent 0%,
                transparent 25%,
                rgba(0, 0, 0, 0.15) 40%,
                rgba(0, 0, 0, 0.50) 60%,
                rgba(0, 0, 0, 0.80) 78%,
                rgba(0, 0, 0, 0.95) 92%,
                rgb(0, 0, 0) 100%
              )`,
            }}
          />

          {/* Layer 2: Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.55) 0%,
                transparent 30%,
                transparent 70%,
                rgba(0, 0, 0, 0.55) 100%
              )`,
            }}
          />

          {/* Layer 3: Edge fade — Transitions to bottom on mobile, right on desktop */}
          
          {/* Mobile/Tablet Fade (Bottom) */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 lg:hidden"
            style={{
              background: `linear-gradient(
                to bottom,
                transparent 0%,
                rgba(0,0,0,0.4) 50%,
                var(--color-base-800) 100%
              )`,
            }}
          />

          {/* Desktop Fade (Right) */}
          <div
            className="absolute inset-y-0 right-0 w-48 hidden lg:block"
            style={{
              background: `linear-gradient(
                to right,
                transparent 0%,
                rgba(0,0,0,0.4) 50%,
                var(--color-base-800) 100%
              )`,
            }}
          />
        </div>

        {/* RIGHT — Dark content panel */}
        <div className="flex-1 bg-[var(--color-base-800)] flex items-center ">
          <div className="flex flex-col gap-8  p-2 max-w-[795px] text-center lg:text-left mx-auto lg:mx-0">

            {/* TEXT BLOCK */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <h2 className="font-inria text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary-100 ">
                Explore High-Quality Lab-Grown Diamonds
              </h2>
              <p className="font-inter text-base md:text-lg font-medium text-primary-400 leading-relaxed mx-auto lg:mx-0">
                Access a wide range of expertly produced lab-grown diamonds tailored to your
                needs. With scalable supply, dependable quality, and seamless service, we make
                it easy for you to source with confidence and grow your business.
              </p>
            </div>

            {/* BUTTON */}
            <div className="flex justify-center lg:justify-start">
              <button className="inline-flex items-center justify-between bg-primary-600 px-6 py-2 sm:py-3 h-12 sm:h-14 w-fit sm:w-64 text-sm sm:text-base text-primary-100 font-semibold hover:opacity-90 transition-opacity shrink-0 gap-4 sm:gap-0">
                Visit Reyu Diamonds
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
