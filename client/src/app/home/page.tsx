import Navbar from "@/components/layout/Navbar";
import Collections from "@/components/sections/collections/Collections";
import FancyColors from "@/components/sections/colors/FancyColors";
import Customization from "@/components/sections/customize/Customization";
import Hero from "@/components/sections/hero/Hero";
import LabGrown from "@/components/sections/lab-grown/LabGrown";
import OurPromise from "@/components/sections/promise/OurPromise";
import RingsByStyle from "@/components/sections/rings/RingsByStyle";
import ShopByShape from "@/components/sections/shop-by-shape/ShopByShape";
import WhyLabGrown from "@/components/sections/why-labgrown/WhyLabGrown";
import TrustedClients from "@/components/sections/testimonials/TrustedClients";
import WhyUsSection from "@/components/sections/why-us/WhyUs";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/section/Section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section>
        <Collections />
        <ShopByShape />
      </Section>

      <LabGrown />
      <RingsByStyle />
      <WhyLabGrown />
      <FancyColors />
      <Customization />
      <OurPromise />
      <TrustedClients />
      <WhyUsSection />
      <Footer />
    </>
  );
}