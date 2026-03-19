import { Target, MapPin, Zap, RefreshCw } from "lucide-react";

export function FrameworkSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden z-10">
      
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary-foreground/5 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-20 flex flex-col items-center">
        
        {/* Section Badge */}
        <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-background text-primary-foreground font-bold tracking-widest text-sm bg-transparent uppercase text-center">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
          The Masterclass Curriculum
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-16 text-center tracking-tight">
          Inside, You'll Learn:
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full">
          
          {/* Step 1 */}
          <div className="group relative bg-background/5 border border-primary-foreground/10 rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row gap-8 hover:bg-background/10 hover:border-primary-foreground/30 transition-all duration-300">
            <div className="w-16 h-16 shrink-0 bg-secondary rounded-2xl flex items-center justify-center text-secondary-foreground font-heading font-black text-3xl shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform">
              1
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold font-sans tracking-wide mb-3 flex items-center gap-3">
                Identify Your Energetic Point A
              </h3>
              <p className="text-lg md:text-xl font-medium opacity-80 leading-relaxed">
                Understand where you are right now and what's silently blocking your next level.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-background/5 border border-primary-foreground/10 rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row gap-8 hover:bg-background/10 hover:border-primary-foreground/30 transition-all duration-300">
            <div className="w-16 h-16 shrink-0 bg-secondary rounded-2xl flex items-center justify-center text-secondary-foreground font-heading font-black text-3xl shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform delay-75">
              2
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold font-sans tracking-wide mb-3 flex items-center gap-3">
                Define Your Energetic Point B
              </h3>
              <p className="text-lg md:text-xl font-medium opacity-80 leading-relaxed">
                Get clear on exactly what you want, with structure and direction.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-background/5 border border-primary-foreground/10 rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row gap-8 hover:bg-background/10 hover:border-primary-foreground/30 transition-all duration-300">
            <div className="w-16 h-16 shrink-0 bg-secondary rounded-2xl flex items-center justify-center text-secondary-foreground font-heading font-black text-3xl shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform delay-100">
              3
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold font-sans tracking-wide mb-3 flex items-center gap-3">
                Regenerate Your Energy
              </h3>
              <p className="text-lg md:text-xl font-medium opacity-80 leading-relaxed">
                Stop operating from burnout and start building sustainable power.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="group relative bg-background/5 border border-primary-foreground/10 rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row gap-8 hover:bg-background/10 hover:border-primary-foreground/30 transition-all duration-300">
            <div className="w-16 h-16 shrink-0 bg-secondary rounded-2xl flex items-center justify-center text-secondary-foreground font-heading font-black text-3xl shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform delay-150">
              4
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold font-sans tracking-wide mb-3 flex items-center gap-3">
                Shift Your Daily Frequency
              </h3>
              <p className="text-lg md:text-xl font-medium opacity-80 leading-relaxed">
                Learn how to stay aligned consistently, not just temporarily.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
