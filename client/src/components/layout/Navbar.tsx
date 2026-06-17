"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logos/logo.png";
import { Phone, Mail, Search, Menu, X, ChevronDown, ChevronRight, Plus, Minus } from "lucide-react";

// Customization Image
import customizationImg from "@/assets/images/customization.png";
import labGrownImg from "@/assets/images/lab-grown.png";

const NAV_LINKS = [
    "Rings",
    "Bracelets",
    "Necklace",
    "Pendants",
    "Earrings",
    "Diamonds",
];

const SHAPES = [
    { name: "Round", icon: "/images/vector-r.svg" },
    { name: "Oval", icon: "/images/Vector.svg" },
    { name: "Cushion", icon: "/images/Vector-cu.svg" },
    { name: "Emerald", icon: "/images/Vector-Eme.svg" },
    { name: "Princess", icon: "/images/Vector-pri.svg" },
];

const STYLES = [
    { name: "Solitaire", icon: "/images/Solitarie.svg" },
    { name: "Side Stone", icon: "/images/Side Stone.svg" },
    { name: "Toi Et Moi", icon: "/images/toi-et-moi-ring.svg" },
    { name: "Trilogy", icon: "/images/Triology1.svg" },
    { name: "Halo", icon: "/images/Halo1.svg" },
    { name: "Eternity", icon: "/images/Eternity1.svg" },
];

const METALS = [
    { name: "Platinum", color: "linear-gradient(150deg, #ADACAC 12.89%, #FFFFFF 49.02%, #ADACAC 85.16%)" },
    { name: "Yellow Gold", color: "linear-gradient(150deg, #E4C997 12.89%, #FFF5DF 49.02%, #E4C997 85.16%)" },
    { name: "White Gold", color: "linear-gradient(150deg, #ADACAC 12.89%, #FFFFFF 49.02%, #ADACAC 85.16%)" },
    { name: "Rose Gold", color: "linear-gradient(150deg, #FFC3C3 12.89%, #FEF4F3 49.02%, #FFC3C3 85.16%)" },
    { name: "Silver", color: "linear-gradient(150deg, #ADACAC 12.89%, #FFFFFF 49.02%, #ADACAC 85.16%)" },
];

const FANCY_COLORS = [
    { name: "Blue", color: "linear-gradient(150deg, #2D55B9 12.52%, #A8D1FF 52.29%, #2D55B9 92.05%)" },
    { name: "Pink", color: "linear-gradient(150deg, #EA29C0 16.91%, #F7B4FA 51.78%, #EA29C0 86.65%)" },
    { name: "Yellow", color: "linear-gradient(150deg, #FAAB18 14.72%, #FFE489 52.06%, #FAA818 89.41%)" },
    { name: "Green", color: "linear-gradient(150deg, #23A213 12.89%, #C4FFA8 49.02%, #23A213 85.16%)" },
    { name: "Purple", color: "linear-gradient(150deg, #6122B4 12.89%, #C599FF 49.02%, #6122B4 85.16%)" },
    { name: "Orange", color: "linear-gradient(150deg, #C55C00 12.89%, #FFB879 49.02%, #C55C00 85.16%)" },
    { name: "Red", color: "linear-gradient(150deg, #A21713 12.89%, #FFA8A8 49.02%, #A21713 85.16%)" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [expandedMobileLink, setExpandedMobileLink] = useState<string | null>(null);

    // 🔒 Lock scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    const toggleMobileLink = (link: string) => {
        setExpandedMobileLink(expandedMobileLink === link ? null : link);
    };

    return (
        <header className="w-full relative z-50">

            {/* 🔝 Top Contact Bar - Desktop Only */}
            <div className="bg-base-700 text-primary-500 hidden lg:block py-4">
                <Container className="flex items-center justify-between py-4">

                    {/* Left: Contact info */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                                <Phone size={14} className="text-black" />
                            </div>
                            <span className="text-base font-bold">+91 9898076868</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                                <Mail size={14} className="text-black" />
                            </div>
                            <span className="text-base font-bold">info@reyujewels.com</span>
                        </div>
                    </div>

                    {/* Center: Logo */}
                    <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                        <Image
                            src={logo}
                            alt="Reyu Jewels"
                            width={320}
                            height={80}
                            priority
                            className="object-contain"
                        />
                    </Link>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-6">
                        <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                            <Search size={22} />
                        </div>
                        <span className="cursor-pointer text-base font-medium hover:text-white transition-colors">
                            Connect With Us
                        </span>
                        <div className="flex items-center gap-1 cursor-pointer text-base font-medium hover:text-white transition-colors">
                            USD <ChevronDown size={14} />
                        </div>
                    </div>

                </Container>
            </div>

            {/* 📱 Mobile Header */}
            <div className="lg:hidden bg-base-700 text-primary-500 border-b border-primary-500/10 sticky top-0 z-50">
                <Container className="flex items-center justify-between py-3">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 -ml-2 text-primary-500"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Reyu Jewels"
                            width={160}
                            height={40}
                            priority
                            className="object-contain"
                        />
                    </Link>

                    <button className="p-2 -mr-2 text-primary-500">
                        <Search size={24} />
                    </button>
                </Container>
            </div>

            {/* 📌 Navigation Links - Desktop Only */}
            <div 
                className="hidden lg:block bg-primary-100 border-b border-primary-200 relative"
                onMouseLeave={() => setActiveDropdown(null)}
            >
                <Container className="flex items-center justify-center py-2">
                    <nav className="flex items-center gap-10">
                        {NAV_LINKS.map((item) => (
                            <div 
                                key={item} 
                                className="relative flex flex-col items-center"
                                onMouseEnter={() => setActiveDropdown(item)}
                            >
                                <Link
                                    href="#"
                                    className={`
                                        font-inria text-2xl font-bold transition-colors tracking-wide py-4
                                        ${activeDropdown === item ? "text-primary-600" : "text-black hover:text-primary-600"}
                                    `}
                                >
                                    {item}
                                </Link>
                                {/* ✨ GOLD UNDERLINE ✨ */}
                                <div className={`
                                    absolute bottom-0 h-1.5 bg-primary-600 transition-all duration-300 ease-out
                                    ${activeDropdown === item ? "w-full" : "w-0"}
                                `} />
                            </div>
                        ))}
                    </nav>
                </Container>

                {/* 🌈 Mega Menu Dropdown */}
                <div className={`
                    absolute top-full left-0 w-full bg-primary-100 border-b border-primary-200 shadow-xl overflow-hidden transition-all duration-500 ease-in-out
                    ${activeDropdown ? "max-h-[700px] opacity-100 py-12" : "max-h-0 opacity-0 py-0"}
                `}>
                    <Container>
                        {activeDropdown === "Diamonds" ? (
                            /* 💎 DIAMOND SPECIFIC DROPDOWN (Compact Version) */
                            <div className="flex justify-center min-h-[400px] max-h-[400px] ">
                                <div className="grid grid-cols-12 gap-10 w-full">
                                    <div className="col-start-4 col-span-6 flex flex-col gap-6">
                                        <h3 className="font-inria font-bold text-xl text-brand-text-muted tracking-wider uppercase border-b border-brand-text-muted/10 pb-2">Customizations</h3>
                                        <div className="flex gap-6">
                                            <div className="flex flex-col gap-4 flex-1">
                                                <div className="relative w-full aspect-square rounded-md overflow-hidden shadow-md border border-white h-70 w-70">
                                                    <Image src={customizationImg} alt="Customization 1" fill className="object-cover" />
                                                </div>
                                                <p className="text-xs text-brand-text-muted leading-relaxed font-medium">
                                                    Have custom designs? We can make them real.
                                                </p>
                                                <button className="flex items-center justify-between bg-primary-600 text-white px-3 py-2 rounded-sm text-xs font-bold hover:bg-primary-700 transition-colors w-fit gap-2">
                                                    Learn More <ChevronRight size={14} />
                                                </button>
                                            </div>
                                            <div className="relative flex-1 aspect-square rounded-md overflow-hidden shadow-md border border-white h-70 w-70">
                                                <Image src={labGrownImg} alt="Customization 2" fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* 💍 STANDARD COLLECTIONS DROPDOWN */
                            <div className="grid grid-cols-12 gap-10 min-h-[400px] max-h-[400px]">
                                
                                <div className="col-span-2 flex flex-col gap-6">
                                    <h3 className="font-inria font-bold text-xl text-brand-text-muted tracking-wider uppercase border-b border-brand-text-muted/10 pb-2">Shape</h3>
                                    <div className="flex flex-col gap-4">
                                        {SHAPES.map(s => (
                                            <div key={s.name} className="flex items-center gap-3 group cursor-pointer">
                                                <div className="w-10 h-10 relative group-hover:scale-110 transition-transform duration-300">
                                                    <Image src={s.icon} alt={s.name} fill className="object-contain" />
                                                </div>
                                                <span className="text-base text-brand-text-dark font-medium group-hover:text-black transition-colors">{s.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-span-2 flex flex-col ">
                                    <h3 className="font-inria font-bold text-xl text-brand-text-muted tracking-wider uppercase border-b border-brand-text-muted/10 pb-2">Style</h3>
                                    <div className="flex flex-col gap-2 ">
                                        {STYLES.map(s => (
                                            <div key={s.name} className="flex items-center gap-3 group cursor-pointer">
                                                <div className="w-13 h-13 relative group-hover:scale-110 transition-transform duration-300">
                                                    <Image src={s.icon} alt={s.name} fill className="object-contain" />
                                                </div>
                                                <span className="text-base text-brand-text-dark font-medium group-hover:text-black transition-colors">{s.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-span-2 flex flex-col gap-6">
                                    <h3 className="font-inria font-bold text-xl text-brand-text-muted tracking-wider uppercase border-b border-brand-text-muted/10 pb-2">Metal</h3>
                                    <div className="flex flex-col gap-4">
                                        {METALS.map(m => (
                                            <div key={m.name} className="flex items-center gap-3 group cursor-pointer">
                                                <div className="w-7 h-7 rounded-full shadow-inner" style={{ background: m.color }} />
                                                <span className="text-base text-brand-text-dark font-medium group-hover:text-black">{m.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-span-2 flex flex-col gap-6">
                                    <h3 className="font-inria font-bold text-xl text-brand-text-muted tracking-wider uppercase border-b border-brand-text-muted/10 pb-2">Fancy Color</h3>
                                    <div className="flex flex-col gap-4">
                                        {FANCY_COLORS.map(c => (
                                            <div key={c.name} className="flex items-center gap-3 group cursor-pointer">
                                                <div className="w-7 h-7 rounded-full shadow-inner" style={{ background: c.color }} />
                                                <span className="text-base text-brand-text-dark font-medium group-hover:text-black">{c.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-span-4 flex flex-col gap-6">
                                    <h3 className="font-inria font-bold text-xl text-brand-text-muted tracking-wider uppercase border-b border-brand-text-muted/10 pb-2">Customizations</h3>
                                    <div className="flex gap-6">
                                        <div className="flex flex-col gap-4 flex-1">
                                            <div className="relative w-full aspect-square rounded-md overflow-hidden shadow-md border border-white">
                                                <Image src={customizationImg} alt="Customization 1" fill className="object-cover" />
                                            </div>
                                            <p className="text-xs text-brand-text-muted leading-relaxed font-medium">
                                                Have custom designs? We can make them real.
                                            </p>
                                            <button className="flex items-center justify-between bg-primary-600 text-white px-3 py-2 rounded-sm text-xs font-bold hover:bg-primary-700 transition-colors w-fit gap-2">
                                                Learn More <ChevronRight size={14} />
                                            </button>
                                        </div>
                                        <div className="relative flex-1 aspect-square rounded-md overflow-hidden shadow-md border border-white">
                                            <Image src={labGrownImg} alt="Customization 2" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                    </Container>
                </div>
            </div>

            {/* 📱 Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-[64px] bg-black/98 z-50 flex flex-col overflow-y-auto pb-20">
                    <nav className="flex flex-col">
                        {NAV_LINKS.map((item) => (
                            <div key={item} className="border-b border-primary-500/10">
                                <button 
                                    onClick={() => toggleMobileLink(item)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-xl text-primary-500 font-inria font-bold active:bg-primary-500/10 transition-colors"
                                >
                                    {item}
                                    {expandedMobileLink === item ? <Minus size={20} /> : <Plus size={20} />}
                                </button>

                                {/* 📱 Expanded Mobile Content */}
                                <div className={`
                                    bg-white/5 overflow-hidden transition-all duration-300 ease-in-out
                                    ${expandedMobileLink === item ? "max-h-[2000px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"}
                                `}>
                                    <div className="px-6 flex flex-col gap-10">
                                        {item === "Diamonds" ? (
                                            /* Mobile Customizations Only */
                                            <div className="flex flex-col gap-6">
                                                <h4 className="text-primary-500/60 uppercase tracking-widest text-sm font-bold">Customizations</h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="relative aspect-square rounded-md overflow-hidden border border-primary-500/20">
                                                        <Image src={customizationImg} alt="Custom" fill className="object-cover" />
                                                    </div>
                                                    <div className="relative aspect-square rounded-md overflow-hidden border border-primary-500/20">
                                                        <Image src={labGrownImg} alt="Custom 2" fill className="object-cover" />
                                                    </div>
                                                </div>
                                                <p className="text-primary-500/80 text-sm italic text-center">Have custom designs? We can make them real.</p>
                                                <Link href="#" className="bg-primary-500 text-black text-center py-3 font-bold rounded-sm">Learn More</Link>
                                            </div>
                                        ) : (
                                            /* Mobile Multi-Section (Shape, Style, etc.) */
                                            <>
                                                {/* Shape Grid */}
                                                <div className="flex flex-col gap-4">
                                                    <h4 className="text-primary-500/60 uppercase tracking-widest text-sm font-bold">Shape</h4>
                                                    <div className="grid grid-cols-3 gap-6">
                                                        {SHAPES.map(s => (
                                                            <div key={s.name} className="flex flex-col items-center gap-2">
                                                                <div className="w-12 h-12 relative">
                                                                    <Image src={s.icon} alt={s.name} fill className="object-contain " />
                                                                </div>
                                                                <span className="text-[10px] text-primary-500 font-medium uppercase tracking-tighter">{s.name}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Style Grid */}
                                                <div className="flex flex-col gap-4">
                                                    <h4 className="text-primary-500/60 uppercase tracking-widest text-sm font-bold">Style</h4>
                                                    <div className="grid grid-cols-3 gap-6">
                                                        {STYLES.map(s => (
                                                            <div key={s.name} className="flex flex-col items-center gap-2">
                                                                <div className="w-12 h-12 relative">
                                                                    <Image src={s.icon} alt={s.name} fill className="object-contain " />
                                                                </div>
                                                                <span className="text-[10px] text-primary-500 font-medium uppercase tracking-tighter">{s.name}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Metal Swatches */}
                                                <div className="flex flex-col gap-4">
                                                    <h4 className="text-primary-500/60 uppercase tracking-widest text-sm font-bold">Metal</h4>
                                                    <div className="flex flex-wrap gap-4">
                                                        {METALS.map(m => (
                                                            <div key={m.name} className="flex items-center gap-2 bg-white/5 rounded-full pl-1 pr-3 py-1 border border-white/10">
                                                                <div className="w-6 h-6 rounded-full" style={{ background: m.color }} />
                                                                <span className="text-xs text-primary-500 font-medium">{m.name}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Color Swatches */}
                                                <div className="flex flex-col gap-4">
                                                    <h4 className="text-primary-500/60 uppercase tracking-widest text-sm font-bold">Fancy Colors</h4>
                                                    <div className="flex flex-wrap gap-4">
                                                        {FANCY_COLORS.map(c => (
                                                            <div key={c.name} className="flex items-center gap-2 bg-white/5 rounded-full pl-1 pr-3 py-1 border border-white/10">
                                                                <div className="w-6 h-6 rounded-full" style={{ background: c.color }} />
                                                                <span className="text-xs text-primary-500 font-medium">{c.name}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-6 p-6 mt-6 border-t border-primary-500/10">
                        <div className="flex items-center gap-4 text-primary-500">
                            <Phone size={22} className="text-primary-500/60" />
                            <span className="text-lg font-bold">+91 9898076868</span>
                        </div>
                        <div className="flex items-center gap-4 text-primary-500">
                            <Mail size={22} className="text-primary-500/60" />
                            <span className="text-lg font-bold">info@reyujewels.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-primary-500 mt-2">
                            <span className="text-lg font-medium">Connect With Us</span>
                        </div>
                        <div className="flex items-center gap-3 text-primary-500 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
                            <span className="text-base font-medium">Currency: USD</span>
                            <ChevronDown size={14} />
                        </div>
                    </div>
                </div>
            )}

        </header>
    );
}