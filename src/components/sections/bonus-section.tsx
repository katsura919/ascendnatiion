import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function BonusSection() {
  const bonuses = [
    {
      title: "30-Minute Breakthrough Call",
      value: "$279",
      image: "/assets/bonus/30-minute-manifestation.webp",
      delay: "0",
    },
    {
      title: "5 Organs of Abundance Guidebook",
      value: "$50",
      image: "/assets/bonus/organs-of-abundance.webp",
      delay: "75",
    },
    {
      title: "Fast-Action Workbook",
      value: "$47",
      image: "/assets/bonus/fast-action-workbook.webp",
      delay: "150",
    },
    {
      title: "Spiritual Integration Toolkit",
      value: "$50",
      image: "/assets/bonus/practical-spirituality.webp",
      delay: "200",
    },
  ];

  return (
    <section id="bonus" className="relative w-full py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden z-10">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-background/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-20 flex flex-col items-center">
        
        {/* Section Badge */}
        <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-background text-primary-foreground font-bold tracking-widest text-sm bg-transparent uppercase text-center">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
          Free Masterclass Bonuses
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading tracking-tight leading-tight text-center mb-16">
          When You Join Today, <br className="hidden md:block" />
          <span className="text-secondary italic">You Also Get:</span>
        </h2>

        {/* Bonus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full mb-20">
          {bonuses.map((bonus, idx) => (
            <div 
              key={idx} 
              className={`group flex flex-col bg-background border border-primary-foreground/10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-black/20`}
            >
              <div className="relative w-full aspect-video bg-primary-foreground/5 overflow-hidden">
                <Image 
                  src={bonus.image}
                  alt={bonus.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Value Pill overlay */}
                <div className="absolute top-4 right-4 bg-background text-primary font-bold font-sans px-4 py-1.5 rounded-full text-sm md:text-base shadow-lg z-10 flex items-center gap-2">
                  <span>Value:</span>
                  <span className="line-through opacity-70">{bonus.value}</span>
                  <span className="text-primary uppercase tracking-wider text-xs ml-1">Included</span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-secondary shrink-0 mt-1" strokeWidth={2.5} />
                <h3 className="text-2xl md:text-3xl font-bold font-sans text-primary">
                  {bonus.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value & CTA Summary */}
        <div className="w-full max-w-4xl bg-background text-foreground rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/10">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-lg md:text-xl font-medium text-foreground/60 uppercase tracking-widest mb-2">
              Combined Value
            </p>
            <p className="text-4xl md:text-5xl font-extrabold font-heading text-foreground line-through decoration-primary/30 decoration-4">
              $426+
            </p>
          </div>

          <div className="hidden md:block w-px h-24 bg-foreground/10"></div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-lg md:text-xl font-medium text-secondary uppercase tracking-widest mb-2">
              Your Investment Today
            </p>
            <p className="text-5xl md:text-6xl font-extrabold font-sans text-primary flex items-center gap-4">
              <span className="text-3xl md:text-4xl text-foreground font-medium">Only</span> $27
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
