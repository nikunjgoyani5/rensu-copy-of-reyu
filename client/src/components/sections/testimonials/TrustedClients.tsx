import Image from "next/image";
import Section from "@/components/ui/section/Section";

// 👉 Replace with your real images
import img1 from "@/assets/images/testimonials/testimonial-1.png";
import img2 from "@/assets/images/testimonials/testimonial-2.png";
import img3 from "@/assets/images/testimonials/testimonial-3.png";
import img4 from "@/assets/images/testimonials/testimonial-4.png";
import img5 from "@/assets/images/testimonials/testimonial-5.png";

const TESTIMONIALS = [
  {
    img: img1,
    text: "We’ve been consistently impressed with both the brilliance of the diamonds and the finishing of the jewelry. Professional, dependable, and always aligned with our expectations.",
    name: "Rajiv Sharma",
    location: "Mumbai, India",
  },
  {
    img: img2,
    text: "We source both loose diamonds and finished jewelry from this supplier, and the quality is consistently outstanding. The stones are brilliant, and the craftsmanship in the jewelry is equally impressive.",
    name: "Michael Anderson",
    location: "New York, USA",
  },
  {
    img: img3,
    text: "A trusted partner for our business. Whether it’s certified diamonds or ready-to-sell jewelry pieces, everything arrives exactly as promised and beautifully finished.",
    name: "Aisha Al Mansoori",
    location: "Dubai, UAE",
  },
  {
    img: img4,
    text: "The selection of diamonds is excellent, and their jewelry designs add real value for our customers. It’s rare to find both quality sourcing and fine craftsmanship in one place.",
    name: "Luca Rossi",
    location: "Milan, Italy",
  },
  {
    img: img5,
    text: "From loose stones to elegant diamond jewelry, every product reflects precision and care. Their attention to detail and reliable service make them easy to work with.",
    name: "Sophie Dubois",
    location: "Paris, France",
  },
];

export default function TrustedClients() {
  return (
    // <Section className="background-secondary ">
      <div className="flex flex-col gap-10 md:gap-16 py-12 md:py-16 lg:py-20 overflow-hidden">
          <style>
            {`
              @keyframes marquee-testimonials {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33%); }
              }
              .marquee-testimonials-container {
                display: flex;
                width: max-content;
                animation: marquee-testimonials 60s linear infinite;
              }
              .marquee-testimonials-container:hover {
                animation-play-state: paused;
              }
            `}
          </style>

          {/* Heading */}
          <h2 className="text-center heading-xl text-primary-900 px-4">
            Trusted by Clients Worldwide
          </h2>

          {/* Marquee Wrapper */}
          <div className="relative w-full overflow-hidden">
            <div className="marquee-testimonials-container gap-4 sm:gap-6 px-4">

            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="flex flex-col gap-4 w-full min-w-[260px] sm:min-w-[378px] max-w-[300px] sm:max-w-[378px] min-h-[480px] sm:min-h-[656px] shrink-0 group cursor-pointer"
              >

                {/* Image */}
                <div className="relative w-full aspect-[378/500] rounded-sm overflow-hidden bg-primary-100">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <p className="text-base sm:text-lg lg:text-xl text-primary-800 leading-relaxed line-clamp-3">
                    “{item.text}”
                  </p>

                  <div className="flex flex-col gap-0.5">
                    <p className="font-bold font-inria text-xl sm:text-2xl text-primary-800">
                      {item.name}
                    </p>
                    <p className="font-medium font-inter text-sm sm:text-base lg:text-lg text-primary-800/80">
                      {item.location}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

    //  </Section>
  );
}