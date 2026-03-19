import { Sparkles } from "lucide-react";

export function SolutionIntroSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-secondary text-secondary-foreground overflow-hidden z-10">
      
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-[-10%] w-[50%] h-[100%] bg-background/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        
        {/* Sparkle Icon */}
        <div className="mb-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-2xl mt-4">
          <Sparkles className="w-8 h-8" />
        </div>

        {/* Lead in */}
        <h2 className="text-3xl md:text-4xl font-sans font-medium mb-6 opacity-90">
          There's a different way.
        </h2>

        {/* The Solution Name */}
        <div className="relative inline-block mb-16">
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-heading tracking-tight leading-tight">
            It's called <br className="hidden md:block"/>
            <span className="text-primary relative whitespace-nowrap">
              Strategic Manifestation.
              <svg className="absolute w-full h-4 md:h-6 -bottom-3 left-0 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h3>
        </div>

        {/* The contrast */}
        <div className="w-full flex flex-col items-center bg-background text-foreground rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-background/20 mb-12 transform hover:scale-[1.02] transition-transform duration-500">
          <p className="text-xl md:text-2xl font-medium opacity-80 mb-4 line-through decoration-primary decoration-2">
            Instead of hoping for change...
          </p>
          <p className="text-2xl md:text-4xl font-bold font-sans tracking-tight leading-snug">
            You become the version of yourself that <span className="text-secondary underline decoration-primary underline-offset-4 decoration-4">naturally attracts it.</span>
          </p>
        </div>

        {/* Conclusion / Masterclass intro */}
        <div className="mt-8">
          <p className="text-2xl md:text-3xl font-heading font-medium italic opacity-90">
            And that's exactly what you'll learn inside this masterclass.
          </p>
        </div>

      </div>
    </section>
  );
}
