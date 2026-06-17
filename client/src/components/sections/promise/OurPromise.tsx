import Image from "next/image";
import { Container } from "@/components/ui/Container";

// 👉 Icons
import icon1 from "@/assets/icons/Vector-1.png";
import icon2 from "@/assets/icons/Vector-2.png";
import icon3 from "@/assets/icons/Vector-3.png";
import icon4 from "@/assets/icons/Vector-4.png";
import icon5 from "@/assets/icons/Vector-5.png";

const PROMISES = [
  { img: icon1, label: "Certified Diamonds" },
  { img: icon2, label: "Personalized Service" },
  { img: icon3, label: "Craftsmanship" },
  { img: icon4, label: "Better Quality" },
  { img: icon5, label: "Better Price" },
];

export default function OurPromise() {
  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, rgba(242, 214, 180, 0.3) 0%, rgba(239, 188, 124, 0.3) 100%)",
      }}
      className="py-6 sm:py-10"
    >
      <Container>
        <div className="flex w-full mx-auto flex-col items-center gap-8">

          {/* Heading */}
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-900 text-center font-inria font-bold leading-tight">
            Our Promise
          </h2>

          {/* Icons Grid */}
          <div className="
            w-full
           grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-5
            gap-6 sm:gap-8 lg:gap-10
            place-items-center
          ">

            {PROMISES.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-6 text-center"
              >

                {/* Icon (Responsive Square) */}
                <div className="relative w-full max-w-[80px] aspect-square">
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Label */}
                <p className="text-base-400 text-xs sm:text-sm md:text-md lg:text-xl font-inter leading-tight font-bold">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}