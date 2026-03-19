import Image from "next/image";

export function CoachesSection() {
  return (
    <section id="coaches" className="relative w-full py-24 md:py-32 bg-background overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col items-center">
        
        {/* Section Badge */}
        <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-primary text-primary font-bold tracking-widest text-sm bg-background uppercase">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
          Meet Your Guides
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-16 tracking-tight text-foreground text-center">
          Meet the Coaches
        </h2>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 w-full max-w-5xl">
          
          {/* Coach 1: Anya */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="relative w-64 h-64 md:w-full md:h-96 lg:h-[400px] mb-8 rounded-3xl overflow-hidden border-4 border-primary/10 shadow-2xl transition-all duration-500 group-hover:border-primary/30 group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-primary/20 animate-pulse z-0"></div>
              <Image 
                src="/assets/coaches/anya.jpg" 
                alt="Anya Vasquez"
                fill
                className="object-cover object-top relative z-10"
              />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-2">
              Anya Vasquez
            </h3>
            <p className="text-primary font-bold text-lg md:text-xl tracking-wide uppercase mb-6">
              Energy Coach
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/80">
              An acclaimed Energy Coach with 10+ years of experience guiding spiritual growth and manifestation. Rooted in spiritual numerology, her unique approach combines deep insights with practical strategies to help you understand your energy blockages and unlock your full potential in love, health, and wealth.
            </p>
          </div>

          {/* Coach 2: Lena */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="relative w-64 h-64 md:w-full md:h-96 lg:h-[400px] mb-8 rounded-3xl overflow-hidden border-4 border-primary/10 shadow-2xl transition-all duration-500 group-hover:border-primary/30 group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-primary/20 animate-pulse z-0"></div>
              <Image 
                src="/assets/coaches/lena.webp" 
                alt="Lena U. Novak"
                fill
                className="object-cover object-top relative z-10"
              />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-2">
              Lena U. Novak
            </h3>
            <p className="text-primary font-bold text-lg md:text-xl tracking-wide uppercase mb-6">
              Energy Mentor
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/80">
              A highly sought-after Energy Mentor known for her powerful intuitive gifts and 10+ years of guiding individuals into deep alignment. Lena empowers clients to break lifelong patterns, shift out of survival mode, and step into heart-led, soul-aligned living to create the "Wow Life."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
