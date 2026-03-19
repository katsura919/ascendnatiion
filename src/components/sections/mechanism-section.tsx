import { Banknote, Heart, Rocket } from "lucide-react";

export function MechanismSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden z-10">
      
      {/* Background patterns */}
      {/* <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <svg fill="none" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path fill="currentColor" d="M0 100 C 20 0 50 0 100 100 Z" />
          <path fill="currentColor" d="M0 50 C 50 100 80 0 100 50 Z" className="opacity-50" />
        </svg>
      </div> */}

      <div className="max-w-5xl mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        
        {/* Section Badge */}
                {/* Section Badge */}
        <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-background text-primary-foreground font-bold tracking-widest text-sm bg-transparent uppercase">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-card z-10"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-card z-10"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-card z-10"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-card z-10"></div>
          The Missing Piece No One Talks About
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight mb-8">
          Let's make one thing clear: <br className="hidden md:block"/>
          <span className="italic opacity-90">It's not that manifestation doesn't work...</span>
        </h2>

        {/* The Shift Statement */}
        <div className="bg-background text-foreground px-8 py-8 md:px-12 md:py-10 rounded-3xl shadow-2xl skew-y-1 transform transition-transform hover:skew-y-0 duration-500 max-w-4xl mx-auto mb-16 border-b-8 border-secondary">
          <p className="text-2xl md:text-4xl font-sans font-extrabold tracking-tight">
             You've been doing it from the <span className="text-secondary relative whitespace-nowrap">
              wrong energetic state.
              <svg className="absolute w-full h-3 md:h-4 -bottom-1 left-0 text-secondary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </p>
        </div>

        {/* List of things trying to create */}
        <div className="w-full flex flex-col items-center mb-20">
          <p className="text-xl md:text-2xl font-medium mb-10 opacity-90">
            Right now, you're trying to create:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl justify-center">
            
            <div className="group flex flex-col items-center p-8 border border-primary-foreground/10 rounded-3xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-background/20">
              <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Banknote className="w-8 h-8" />
              </div>
              <span className="text-xl md:text-2xl font-bold font-sans tracking-wide capitalize">More Money</span>
            </div>

            <div className="group flex flex-col items-center p-8 border border-primary-foreground/10 rounded-3xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-background/20">
              <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 delay-75">
                <Heart className="w-8 h-8" />
              </div>
              <span className="text-xl md:text-2xl font-bold font-sans tracking-wide capitalize">Better Relationships</span>
            </div>

            <div className="group flex flex-col items-center p-8 border border-primary-foreground/10 rounded-3xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-background/20">
              <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 delay-150">
                <Rocket className="w-8 h-8" />
              </div>
              <span className="text-xl md:text-2xl font-bold font-sans tracking-wide capitalize">Bigger Opportunities</span>
            </div>

          </div>
        </div>

        {/* The resulting state */}
        <div className="text-center max-w-3xl">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-6 opacity-90">
            ...while operating from the <span className="font-bold border-b-2 border-primary-foreground">same energy</span> that created your current results.
          </p>
          <p className="text-3xl md:text-5xl font-extrabold font-heading text-secondary-foreground bg-secondary px-6 py-4 inline-block transform -rotate-2 rounded-xl shadow-xl mt-4">
            And that's why nothing changes.
          </p>
        </div>

      </div>
    </section>
  );
}
