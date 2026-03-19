import { ArrowRight, Calendar, Clock, ChevronDown } from "lucide-react";

export function FinalCtaSection() {
  const faqs = [
    {
      question: "Is this masterclass live?",
      answer: "Yes! The masterclass happens live on March 21, 2026. You'll have the opportunity to ask questions and get direct feedback during our dedicated Q&A segment at the end.",
    },
    {
      question: "Will there be a recording if I can't make it?",
      answer: "Absolutely. When you register, you secure lifetime access to the full recording, plus any accompanying workbooks or resources, so you can revisit the framework whenever you need an energetic reset.",
    },
    {
      question: "Who is this framework actually for?",
      answer: "This is for anyone who feels like they are doing 'all the right things' (hustling, using vision boards, repeating affirmations) but still feeling stuck. If you know you're meant for more and want a predictable, structural approach to alignment, this is for you.",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-background overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-6 relative z-20 flex flex-col items-center">
        
        {/* Massive CTA Card */}
        <div className="w-full bg-primary text-primary-foreground rounded-[2.5rem] p-10 md:p-16 lg:p-24 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
          
          {/* Decorative glows inside card */}
          <div className="absolute top-0 right-[-10%] w-[50%] h-[100%] bg-background/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Section Badge */}
          <div className="relative inline-block mb-10 px-5 py-2.5 border-2 border-background text-primary-foreground font-bold tracking-widest text-sm bg-transparent uppercase">
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-background border-2 border-primary z-10"></div>
            The Final Step
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-tight mb-8">
            Your Next Level <br className="hidden md:block" />
            <span className="text-primary-foreground italic">Starts Now</span>
          </h2>

          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-3xl leading-relaxed mb-12">
            You've read this far because you already know you're meant for more. The energetic blocks you've been carrying don't have to dictate your future. It's time to stop hoping for change and start commanding it.
          </p>

          {/* Urgency Box */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-background/10 border border-background/20 px-8 py-4 rounded-2xl backdrop-blur-sm mb-12 w-full max-w-2xl">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-secondary" />
              <span className="font-bold font-sans text-lg md:text-xl">March 21, 2026</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-background/20"></div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-secondary" />
              <span className="font-bold font-sans text-lg md:text-xl">12PM - 1PM EST</span>
            </div>
          </div>

          <p className="text-primary-foreground font-bold text-lg md:text-xl tracking-wide uppercase mb-6 animate-pulse">
            ⚠️ Seats are strictly limited
          </p>

          <button className="group relative inline-flex items-center justify-center px-10 py-6 font-bold text-primary bg-white rounded-full shadow-2xl hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95 text-lg md:text-2xl font-sans w-full sm:w-auto">
            Join the Masterclass for Just $27
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
            <div className="absolute inset-0 bg-white/20 rounded-full blur-md -z-10 group-hover:opacity-100 opacity-0 transition-opacity"></div>
          </button>
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-3xl mt-24 md:mt-32">
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-center text-foreground mb-12">
            Frequently Asked Questions
          </h3>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white/50 backdrop-blur-sm border-2 border-primary/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer font-bold font-sans text-lg md:text-xl text-foreground select-none">
                  {faq.question}
                  <ChevronDown className="w-6 h-6 text-primary shrink-0 transition-transform duration-300 group-open:-rotate-180" strokeWidth={2.5} />
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 text-foreground/80 text-lg leading-relaxed pt-0">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
