import Image from "next/image";
import Section from "@/components/ui/section/Section";

// 👉 Replace with your actual images
import ringImg from "@/assets/images/fancy-color/ring.png";
import earringImg from "@/assets/images/fancy-color/earring.png";
import necklaceImg from "@/assets/images/fancy-color/necklace.png";
import braceletImg from "@/assets/images/fancy-color/bracelet.png";

const COLORS = [
    "linear-gradient(150deg, #2D55B9 12.52%, #A8D1FF 52.29%, #2D55B9 92.05%)",
    "linear-gradient(150deg, #EA29C0 16.91%, #F7B4FA 51.78%, #EA29C0 86.65%)",
    "linear-gradient(150deg, #6122B4 12.89%, #C599FF 49.02%, #6122B4 85.16%)",
    "linear-gradient(150deg, #FAAB18 14.72%, #FFE489 52.06%, #FAA818 89.41%)",
    "linear-gradient(150deg, #23A213 12.89%, #C4FFA8 49.02%, #23A213 85.16%)",
    "linear-gradient(150deg, #C55C00 12.89%, #FFB879 49.02%, #C55C00 85.16%)",
    "linear-gradient(150deg, #A21713 12.89%, #FFA8A8 49.02%, #A21713 85.16%)",
];

const JEWELLERY = [
    { name: "Rings", img: ringImg },
    { name: "Earrings", img: earringImg },
    { name: "Necklaces & Pendants", img: necklaceImg },
    { name: "Bracelets", img: braceletImg },
];

export default function FancyColorSection() {
    return (
        <Section className="background-secondary ">

            <h2 className="heading-xl text-primary-900 text-center lg:text-left mb-10 md:mb-16">
                We also Offer Variety in Fancy Color
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between my-10 md:my-18 gap-6 sm:gap-10 max-w-5xl">
                <div className="text-primary-900 font-bold font-inria text-2xl md:text-3xl lg:text-4xl text-center sm:text-left">
                    By Color
                </div>

                <div className="flex items-center gap-4 sm:gap-7 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 scrollbar-hide">
                    {COLORS.map((color, i) => (
                        <div
                            key={i}
                            className="w-12 h-12 sm:w-15 sm:h-15 rounded-full shrink-0 cursor-pointer transition-transform hover:scale-110"
                            style={{ background: color }}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">

                <span className="text-primary-900 font-bold font-inria text-2xl md:text-4xl text-center sm:text-left">
                    By Jewellery
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

                    {JEWELLERY.map((item) => (
                        <div key={item.name} className="flex flex-col gap-4 group cursor-pointer">

                            {/* Image */}
                            <div className="relative w-full aspect-[410/500] rounded-[4px] overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Label */}
                            <p className="text-center font-inria text-primary-900 text-base sm:text-2xl font-bold">
                                {item.name}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </Section>
    );
}
