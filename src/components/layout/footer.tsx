"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId === "top") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-secondary text-secondary-foreground py-16 px-6 border-t-[8px] border-primary">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
        
        {/* Brand & Intro */}
        <div className="flex flex-col gap-6 max-w-sm">
          <a href="#" className="flex items-center gap-4 group w-max" onClick={(e) => handleScroll(e, 'top')}>
            <div className="w-20 h-20 relative bg-transparent flex items-center justify-center">
              <Image src="/assets/logo.png" alt="Ascendnatiiona Logo" fill className="object-contain object-left" />
            </div>
            <span className="text-2xl md:text-3xl font-heading font-bold tracking-wide group-hover:text-primary-foreground/90 transition-colors">
              Ascend Natiion
            </span>
          </a>
          <p className="text-secondary-foreground/70 leading-relaxed text-base">
            Helping you break through energetic blocks and manifest the life, love, and wealth you truly deserve through practical and powerful alignment.
          </p>
        </div>

        {/* Links Grid */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 w-full lg:w-auto">
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold font-sans text-xl mb-2 text-primary-foreground">Quick Links</h4>
            <a href="#masterclass" onClick={(e) => handleScroll(e, '#masterclass')} className="text-secondary-foreground/70 hover:text-primary-foreground transition-colors w-max">The Masterclass</a>
            <a href="#coaches" onClick={(e) => handleScroll(e, '#coaches')} className="text-secondary-foreground/70 hover:text-primary-foreground transition-colors w-max">Meet the Coaches</a>
            <a href="#testimonials" onClick={(e) => handleScroll(e, '#testimonials')} className="text-secondary-foreground/70 hover:text-primary-foreground transition-colors w-max">Success Stories</a>
            <a href="#bonus" onClick={(e) => handleScroll(e, '#bonus')} className="text-secondary-foreground/70 hover:text-primary-foreground transition-colors w-max">Bonuses</a>
          </div>

          {/* Legal & Support */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold font-sans text-xl mb-2 text-primary-foreground">Support & Legal</h4>
            <Link href="#" className="text-secondary-foreground/70 hover:text-primary-foreground transition-colors w-max">Privacy Policy</Link>
            <Link href="#" className="text-secondary-foreground/70 hover:text-primary-foreground transition-colors w-max">Terms of Service</Link>
            <Link href="#" className="text-secondary-foreground/70 hover:text-primary-foreground transition-colors w-max">Contact Support</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-sm text-secondary-foreground/60">
        <p>&copy; {new Date().getFullYear()} Ascendnatiiona. All rights reserved.</p>
      </div>
    </footer>
  );
}
