import Image from "next/image";
import diamondImg from "@/assets/images/why-us.jpg";
import { ChevronRight } from "lucide-react";

export default function WhyUsSection() {
  return (
    <section className="relative w-full h-[500px] lg:h-[591px] overflow-hidden">

      {/* 🔥 Background Image */}
      <Image
        src={diamondImg}
        alt="Why Us"
        fill
        className="object-cover"
        priority
      />

      {/* 🔥 LEFT DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r 
        from-black via-black/80 via-40% to-transparent" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        
        <div className="ml-[40px] md:ml-[80px] lg:ml-[160px] max-w-[842px] flex flex-col gap-10">

          {/* TEXT */}
          <div className="flex flex-col gap-4 max-w-[842px]">
            <h2 className="heading-1 text-primary-100">
              Why you should work with Us
            </h2>

            <p className="text-primary-400 font-inter text-base md:text-lg leading-relaxed">
              We go beyond manufacturing to build partnerships you can trust. With consistent quality, scalable pricing, and flexible customization, we align with your business at every step. Backed by transparent communication and global experience, our focus is simple—long-term relationships that grow with you.
            </p>
          </div>

          {/* BUTTON */}
          <button className="inline-flex items-center gap-2 bg-primary-600 px-6 py-3 h-[53px] w-fit text-primary-100 font-semibold hover:opacity-90 transition">
            Connect With Us
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>

        </div>

      </div>

    </section>
  );
}