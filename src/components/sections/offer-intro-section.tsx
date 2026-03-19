import { Magnet, TrendingUp, Heart, ShieldCheck } from "lucide-react";

export function OfferIntroSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-background overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-20">
        
        {/* Section Badge */}
        <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-primary text-primary font-bold tracking-widest text-sm bg-background/50 uppercase">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-secondary border-2 border-primary z-10"></div>
          Your Invitation to Transform
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground font-heading leading-tight mb-6 max-w-4xl tracking-tight">
          The <span className="text-primary italic">4-Step Manifestation Framework</span> Masterclass
        </h2>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl font-sans font-bold text-secondary mb-12">
          This is where desire turns into reality.
        </p>

        {/* Context Text */}
        <p className="text-xl md:text-2xl font-medium mb-12 opacity-80 max-w-2xl leading-relaxed">
          Inside this live session, you'll begin shifting your energy in a way that makes you:
        </p>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl justify-center text-left">
          
          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-2xl p-6 md:p-8 flex items-center gap-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 shrink-0 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold shadow-inner group-hover:scale-110 transition-transform">
              <Magnet className="w-7 h-7" />
            </div>
            <p className="text-xl md:text-2xl font-bold font-sans text-foreground/90">
              Magnetic to <span className="text-primary">opportunities</span>
            </p>
          </div>

          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-2xl p-6 md:p-8 flex items-center gap-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 shrink-0 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold shadow-inner group-hover:scale-110 transition-transform">
              <TrendingUp className="w-7 h-7" />
            </div>
            <p className="text-xl md:text-2xl font-bold font-sans text-foreground/90">
              Aligned with <span className="text-primary">higher income</span>
            </p>
          </div>

          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-2xl p-6 md:p-8 flex items-center gap-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 shrink-0 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold shadow-inner group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7" />
            </div>
            <p className="text-xl md:text-2xl font-bold font-sans text-foreground/90">
              Open to <span className="text-primary">deeper love</span>
            </p>
          </div>

          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-2xl p-6 md:p-8 flex items-center gap-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 shrink-0 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold shadow-inner group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <p className="text-xl md:text-2xl font-bold font-sans text-foreground/90">
              Grounded in <span className="text-primary">real confidence</span>
            </p>
          </div>

        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>
    </section>
  );
}
