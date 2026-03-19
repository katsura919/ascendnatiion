"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 pt-6 pb-2  pointer-events-none">
      <nav className="mx-auto w-[95%] max-w-7xl bg-secondary text-secondary-foreground rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-between shadow-lg pointer-events-auto">
        <Link href="/#" className="flex items-center gap-3 group">
          <div className="w-24 h-10 md:w-32 md:h-14 relative bg-transparent flex items-center justify-center">
            <Image src="/assets/logo.png" alt="Ascendnatiiona Logo" fill className="object-contain object-left" />
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-10 text-base font-bold font-sans">
          <a href="#masterclass" onClick={(e) => handleScroll(e, '#masterclass')} className="opacity-80 hover:opacity-100 transition-opacity">The Masterclass</a>
          <a href="#coaches" onClick={(e) => handleScroll(e, '#coaches')} className="opacity-80 hover:opacity-100 transition-opacity">Coaches</a>
          <a href="#testimonials" onClick={(e) => handleScroll(e, '#testimonials')} className="opacity-80 hover:opacity-100 transition-opacity">Success Stories</a>
          <a href="#bonus" onClick={(e) => handleScroll(e, '#bonus')} className="opacity-80 hover:opacity-100 transition-opacity">Bonuses</a>
        </div>

        <Link href="/join" className="bg-background text-foreground px-4 py-2 sm:px-6 md:px-8 md:py-3 rounded-full flex items-center justify-center gap-1.5 shrink-0 text-xs md:text-sm font-bold hover:bg-background/90 hover:scale-105 transition-all">
          Join Now
          <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[3]" />
        </Link>
      </nav>
    </div>
  );
}