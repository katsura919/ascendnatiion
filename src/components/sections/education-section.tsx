import { Activity, Gauge, AlertTriangle, BatteryLow, Layout, Quote, Flame } from "lucide-react";

export function EducationSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-background overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-20">
        
        {/* Section Badge */}
        <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-secondary text-secondary font-bold tracking-widest text-sm bg-background/50 uppercase">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-primary border-2 border-secondary z-10"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-primary border-2 border-secondary z-10"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-primary border-2 border-secondary z-10"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-primary border-2 border-secondary z-10"></div>
          Understanding Your Energy Blueprint
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight mb-8 max-w-4xl tracking-tight">
          Your results are a reflection of your <span className="text-tertiary text-primary italic font-heading">"Energetic Point A."</span>
        </h2>
        
        <p className="text-xl md:text-2xl font-medium mb-12 opacity-80">
          If your daily state is:
        </p>

        {/* Daily State Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl justify-center mb-16">
          <div className="flex flex-col items-center p-6 border-2 border-foreground/5 rounded-2xl bg-white/50 hover:border-primary/30 transition-colors shadow-sm">
            <Activity className="w-10 h-10 mb-4 text-secondary" />
            <span className="text-lg md:text-xl font-bold font-sans capitalize">Stress</span>
          </div>
          <div className="flex flex-col items-center p-6 border-2 border-foreground/5 rounded-2xl bg-white/50 hover:border-primary/30 transition-colors shadow-sm">
            <Gauge className="w-10 h-10 mb-4 text-secondary" />
            <span className="text-lg md:text-xl font-bold font-sans capitalize">Pressure</span>
          </div>
          <div className="flex flex-col items-center p-6 border-2 border-foreground/5 rounded-2xl bg-white/50 hover:border-primary/30 transition-colors shadow-sm">
            <AlertTriangle className="w-10 h-10 mb-4 text-secondary" />
            <span className="text-lg md:text-xl font-bold font-sans capitalize">Fear</span>
          </div>
          <div className="flex flex-col items-center p-6 border-2 border-foreground/5 rounded-2xl bg-white/50 hover:border-primary/30 transition-colors shadow-sm">
            <BatteryLow className="w-10 h-10 mb-4 text-secondary" />
            <span className="text-lg md:text-xl font-bold font-sans capitalize">Exhaustion</span>
          </div>
        </div>

        {/* Result Statement */}
        <div className="w-full max-w-4xl mx-auto bg-secondary text-secondary-foreground p-8 md:p-10 rounded-3xl shadow-xl mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <p className="text-2xl md:text-3xl font-sans font-bold leading-relaxed relative z-10">
            Then that becomes the signal you broadcast—and the <span className="underline decoration-4 decoration-primary underline-offset-4">reality you keep repeating.</span>
          </p>
        </div>

        {/* That's why list */}
        <p className="text-2xl md:text-3xl font-bold text-foreground font-heading mb-12">
          That's why:
        </p>

        <div className="w-full max-w-3xl mx-auto grid gap-6 text-left mb-20">
          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-2xl p-6 md:p-8 flex items-center gap-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Layout className="w-6 h-6" />
            </div>
            <p className="text-lg md:text-xl font-bold text-foreground/80">
              Vision boards feel exciting... <span className="text-secondary opacity-80 italic">but fade &nbsp;</span>
            </p>
          </div>

          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-2xl p-6 md:p-8 flex items-center gap-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Quote className="w-6 h-6" />
            </div>
            <p className="text-lg md:text-xl font-bold text-foreground/80">
              Affirmations work... <span className="text-secondary opacity-80 italic">temporarily &nbsp;</span>
            </p>
          </div>

          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-2xl p-6 md:p-8 flex items-center gap-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <p className="text-lg md:text-xl font-bold text-foreground/80">
              Motivation... <span className="text-secondary opacity-80 italic">doesn't last &nbsp;</span>
            </p>
          </div>
        </div>

        {/* Conclusion Statement */}
        <div className="mt-8 relative inline-block">
          <div className="absolute -inset-4 bg-primary/10 -skew-y-2 z-0 rounded-xl"></div>
          <p className="relative z-10 text-2xl md:text-4xl font-extrabold text-foreground font-heading tracking-wide">
            Because your energy never truly shifted.
          </p>
        </div>

      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -right-[10%] w-[40%] h-[50%] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-[10%] w-[30%] h-[40%] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
