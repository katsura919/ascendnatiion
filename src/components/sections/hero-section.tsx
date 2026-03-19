import Link from "next/link";

export function HeroSection() {
  return (
    <div className="flex-1 flex flex-col w-full pt-32">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>

      {/* Hero Content */}
      <div className="flex-1 relative max-w-7xl mx-auto w-full px-6 pt-16 pb-20 flex flex-col lg:flex-row items-center z-10">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-start xl:pr-12 z-20">
          
          {/* "Hello There!" Box */}
          <div className="relative inline-block mb-8 px-5 py-2.5 border-2 border-secondary text-secondary font-medium tracking-wide text-lg bg-background">
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-primary border-2 border-secondary z-10"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-primary border-2 border-secondary z-10"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-primary border-2 border-secondary z-10"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-primary border-2 border-secondary z-10"></div>
            Hello There!
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-bold text-foreground font-sans leading-[1.1] mb-8 tracking-tighter">
            I'm <span className="text-primary relative inline-block whitespace-nowrap">
              Olivia Smith,
              <svg className="absolute w-full h-4 md:h-6 -bottom-2 md:-bottom-3 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span><br />
            Product Designer<br />
            Based in USA.
          </h1>

          {/* Subtitle */}
          <p className="text-foreground/75 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium">
            I'm an experienced Product Designer with 18+ years in the field, collaborating with various companies and startups.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="flex items-center pl-7 pr-3 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-all font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1">
              <span className="mr-6 text-lg">View My Portfolio</span>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                   <path d="M5 3L19 12L5 21V3Z" />
                </svg>
              </div>
            </Link>
            <Link href="#" className="px-10 py-4 border-2 border-secondary text-secondary rounded-full font-bold text-lg hover:bg-secondary hover:text-secondary-foreground transition-colors">
              Hire Me
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 relative mt-24 lg:mt-0 h-[500px] md:h-[600px] lg:h-[700px] flex justify-center items-end">
          
          {/* Abstract Background Blob - Using a smooth CSS border-radius blob */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-primary rounded-[60%_40%_30%_70%/60%_30%_70%_40%] -z-10 shadow-2xl"></div>
          
          {/* Portrait Image (Using a transparent cutout placeholder from Unsplash) */}
          {/* We use an image of a smiling woman that fits the general vibe. */}
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3" 
            alt="Olivia Smith"
            className="w-full h-[90%] object-cover object-top mask-image-bottom drop-shadow-2xl z-10"
            style={{
              maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
            }}
          />

          {/* Floating badges */}
          {/* Top Right "Hire Me" Stamp */}
          <div className="absolute top-10 right-0 lg:-right-8 w-[140px] h-[140px] bg-secondary rounded-full flex justify-center items-center z-20 shadow-xl shadow-secondary/30">
             <div className="absolute inset-0 animate-spin-slow">
               <svg viewBox="0 0 100 100" className="w-full h-full text-secondary-foreground">
                  <path d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" id="circle-text" fill="none" />
                  <text fontSize="14" fontWeight="bold" letterSpacing="3" fill="currentColor">
                    <textPath href="#circle-text" startOffset="0%">
                      • HIRE ME • HIRE ME
                    </textPath>
                  </text>
               </svg>
             </div>
             {/* Inner Arrow */}
             <div className="w-12 h-12 bg-primary rounded-full flex justify-center items-center text-primary-foreground transform -rotate-45 relative z-10 shadow-inner">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                   <line x1="5" y1="12" x2="19" y2="12"></line>
                   <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
             </div>
          </div>

          {/* UI/UX Designer Pointer */}
          <div className="absolute top-2/3 right-0 lg:-right-4 z-30 translate-y-12">
              <div className="relative bg-primary text-primary-foreground font-semibold px-6 py-4 rounded-xl rounded-tl-none shadow-xl border-2 border-primary-foreground/10 text-lg">
                <div className="absolute -top-7 -left-5 w-10 h-10 text-primary fill-primary drop-shadow-md">
                  <svg viewBox="0 0 24 24" transform="rotate(-15)"><path d="M4 2L20 12L13 14.5L16 22L13 23L9.5 15.5L4 20V2Z" /></svg>
                </div>
                UI/UX Designer
              </div>
          </div>

          {/* Product Designer Pointer */}
          <div className="absolute bottom-20 left-4 lg:-left-8 z-30">
              <div className="relative bg-secondary text-secondary-foreground font-semibold px-6 py-4 rounded-xl rounded-br-none shadow-xl border-2 border-secondary-foreground/10 text-lg">
                <div className="absolute -top-6 -right-6 w-10 h-10 text-secondary fill-secondary drop-shadow-md">
                  <svg viewBox="0 0 24 24" transform="scale(-1, 1) rotate(-15)"><path d="M4 2L20 12L13 14.5L16 22L13 23L9.5 15.5L4 20V2Z" /></svg>
                </div>
                Product Designer
              </div>
          </div>

          {/* Little sparkles/arcs */}
          <svg className="absolute top-1/3 left-4 w-6 h-12 text-secondary z-0 opacity-80" viewBox="0 0 20 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M20 5 C 5 5, 5 35, 20 35" />
          </svg>
        </div>
      </div>

      {/* Slanted Banner Section */}
      <div className="relative mt-auto w-full min-h-[140px] pt-12 overflow-hidden flex items-end">
        {/* The dark background shape at the bottom left */}
        <div className="absolute bottom-0 left-[-5%] w-[110%] h-[180px] bg-secondary skew-y-[-3deg] origin-bottom-left z-0"></div>
        
        {/* The prominent slanted banner */}
        <div className="relative w-[110%] left-[-5%] py-6 bg-primary transform -rotate-2 origin-left shadow-2xl z-10 border-y-4 border-primary-foreground/20">
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="flex min-w-full items-center justify-around animate-marquee text-primary-foreground font-bold text-3xl font-heading tracking-wider">
              <span className="px-8">App Design</span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-80"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" /></svg>
              <span className="px-8">Website Design</span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-80"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" /></svg>
              <span className="px-8">Dashboard</span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-80"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" /></svg>
              <span className="px-8">Wireframe</span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-80"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" /></svg>
            </div>
            {/* Duplicated for seamless loop */}
            <div className="flex min-w-full items-center justify-around animate-marquee text-primary-foreground font-bold text-3xl font-heading tracking-wider aria-hidden='true'">
              <span className="px-8">App Design</span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-80"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" /></svg>
              <span className="px-8">Website Design</span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-80"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" /></svg>
              <span className="px-8">Dashboard</span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-80"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" /></svg>
              <span className="px-8">Wireframe</span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-80"><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}