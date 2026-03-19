export function ProblemSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-background overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-20">
        
        {/* Section Badge */}
        <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-secondary text-secondary font-bold tracking-widest text-sm bg-background/50 uppercase">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-primary border-2 border-secondary z-10"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-primary border-2 border-secondary z-10"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-primary border-2 border-secondary z-10"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-primary border-2 border-secondary z-10"></div>
          Why You Still Feel Stuck
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-sans leading-tight mb-8 max-w-4xl tracking-tight">
          You've been wanting more from your life, your business, and yourself... <br className="hidden md:block"/>
          <span className="text-primary italic font-heading">But somehow, you keep settling for what's just "fine."</span>
        </h2>

        {/* Points list */}
        <div className="w-full max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
          
          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-2xl p-6 md:p-8 flex items-start gap-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 shrink-0 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-inner group-hover:scale-110 transition-transform">
              1
            </div>
            <p className="text-lg md:text-xl font-medium text-foreground/80 leading-relaxed pt-2">
              You're working toward your next income level... but <span className="text-secondary font-bold">something feels off</span>.
            </p>
          </div>

          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-2xl p-6 md:p-8 flex items-start gap-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 shrink-0 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-inner group-hover:scale-110 transition-transform">
              2
            </div>
            <p className="text-lg md:text-xl font-medium text-foreground/80 leading-relaxed pt-2">
              You keep repeating the same <span className="text-secondary font-bold">emotional patterns in relationships</span>.
            </p>
          </div>

          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-2xl p-6 md:p-8 flex items-start gap-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 shrink-0 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-inner group-hover:scale-110 transition-transform">
              3
            </div>
            <p className="text-lg md:text-xl font-medium text-foreground/80 leading-relaxed pt-2">
              You're chasing peace, freedom, and success—but <span className="text-secondary font-bold">never fully landing in it</span>.
            </p>
          </div>

          <div className="group relative bg-white/50 backdrop-blur-sm border-2 border-foreground/5 rounded-2xl p-6 md:p-8 flex items-start gap-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 shrink-0 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-inner group-hover:scale-110 transition-transform">
              4
            </div>
            <p className="text-lg md:text-xl font-medium text-foreground/80 leading-relaxed pt-2">
              You've tried affirmations, vision boards, and mindset work... but <span className="text-secondary font-bold">nothing sticks</span>.
            </p>
          </div>

        </div>

        {/* Conclusion Statement */}
        <div className="mt-20 relative inline-block">
          <div className="absolute -inset-4 bg-primary/10 -skew-y-2 z-0 rounded-xl"></div>
          <p className="relative z-10 text-2xl md:text-3xl font-bold text-foreground font-heading italic tracking-wide">
            And deep down... you know you're meant for more.
          </p>
        </div>

      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-[10%] w-[40%] h-[50%] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-[10%] w-[30%] h-[40%] bg-secondary/5 rounded-full blur-3xl"></div>
        
        {/* Subtle repeating dots pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
    </section>
  );
}
