import Image from "next/image";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/section/Section";
import { Mail, Phone, Calendar } from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import logo from "@/assets/logos/logo.png"; // replace with your logo

export default function Footer() {
  return (
    <Section className="bg-brand-footer-bg text-brand-footer-text py-16 md:py-24">

      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">

          {/* 🔥 LEFT - BRAND */}
          <div className="flex flex-col gap-6 lg:max-w-md">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src={logo} 
                alt="Reyu Jewels" 
                className="w-full max-w-[280px] md:max-w-[380px] h-auto object-contain" 
              />
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4 text-sm md:text-base">
              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                <div className="w-6 h-6 rounded-full bg-brand-footer-text flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                  <Mail size={14} className="text-brand-footer-bg" />
                </div>
                <span className="font-medium">info@reyujewels.com</span>
              </div>

              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                <div className="w-6 h-6 rounded-full bg-brand-footer-text flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                  <Phone size={14} className="text-brand-footer-bg" />
                </div>
                <span className="font-medium">+91 9898076868</span>
              </div>

              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                <div className="w-6 h-6 rounded-full bg-brand-footer-text flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                  <Calendar size={14} className="text-brand-footer-bg" />
                </div>
                <span className="font-medium">Connect With Us</span>
              </div>
            </div>
          </div>

          {/* 🔥 RIGHT - LINKS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-20">
            {/* 🔥 COLUMN 1 */}
            <div className="flex flex-col gap-5">
              <h4 className="text-lg lg:text-xl font-bold text-primary-400">
                Our Collection
              </h4>
              <ul className="space-y-3 text-sm md:text-base lg:text-lg font-medium">
                <li className="hover:text-white transition-colors cursor-pointer">Rings</li>
                <li className="hover:text-white transition-colors cursor-pointer">Bracelets</li>
                <li className="hover:text-white transition-colors cursor-pointer">Necklaces & Pendants</li>
                <li className="hover:text-white transition-colors cursor-pointer">Earrings</li>
              </ul>
            </div>

            {/* 🔥 COLUMN 2 */}
            <div className="flex flex-col gap-5">
              <h4 className="text-lg lg:text-xl font-bold text-primary-400">
                Explore By Shape
              </h4>
              <ul className="space-y-3 text-sm md:text-base lg:text-lg font-medium">
                <li className="hover:text-white transition-colors cursor-pointer">Round</li>
                <li className="hover:text-white transition-colors cursor-pointer">Cushion</li>
                <li className="hover:text-white transition-colors cursor-pointer">Marquise</li>
                <li className="hover:text-white transition-colors cursor-pointer">Princess</li>
                <li className="hover:text-white transition-colors cursor-pointer">More...</li>
              </ul>
            </div>

            {/* 🔥 COLUMN 3 */}
            <div className="flex flex-col gap-5">
              <h4 className="text-lg lg:text-xl font-bold text-primary-400">
                Policies
              </h4>
              <ul className="space-y-3 text-sm md:text-base lg:text-lg font-medium">
                <li className="hover:text-white transition-colors cursor-pointer">Payment Policies</li>
                <li className="hover:text-white transition-colors cursor-pointer">Terms & Service</li>
                <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-brand-footer-text/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-brand-footer-text/90">
          <p>© {new Date().getFullYear()} REYU JEWELS. All Rights Reserved.</p>
          <div className="flex gap-6">
            <FaInstagram size={20} className="hover:text-white cursor-pointer transition-colors" />
            <FaFacebook size={20} className="hover:text-white cursor-pointer transition-colors" />
            <FaLinkedin size={20} className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </Container>

    </Section>
  );
}