import Section from "@/components/ui/section/Section";
import Image from "next/image";

import ringImg from "@/assets/images/collection/rings1.png";
import braceletImg from "@/assets/images/collection/bracelet1.png";
import earringImg from "@/assets/images/collection/earrings1.png";
import necklaceImg from "@/assets/images/collection/necklace1.png";

const COLLECTIONS = [
  { title: "Rings", image: ringImg },
  { title: "Bracelets", image: braceletImg },
  { title: "Earrings", image: earringImg },
  { title: "Necklaces & Pendants", image: necklaceImg },
];

export default function Collections() {
  return (
    <div className="background-secondary ">

      <h2 className="heading-xl text-primary-900 mb-10 md:mb-16 text-center xl:text-left">
        Explore Our Collection
      </h2>

      {/* Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center">

          {COLLECTIONS.map((item) => (
            <div key={item.title} className="flex flex-col gap-4 group cursor-pointer w-full max-w-[376px] max-h-[525px]">

              {/* Card Image */}
              <div className="relative w-full aspect-[395/493] sm:h-80 md:h-96 lg:h-105 rounded-sm overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Label */}
              <p className="text-2xl font-bold font-inria text-center text-black py-2">
                {item.title}
              </p>

            </div>
          ))}

        </div>

    </div>
  );
}