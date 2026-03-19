import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { MechanismSection } from "@/components/sections/mechanism-section";
import { EducationSection } from "@/components/sections/education-section";
import { SolutionIntroSection } from "@/components/sections/solution-intro-section";
import { OfferIntroSection } from "@/components/sections/offer-intro-section";
import { FrameworkSection } from "@/components/sections/framework-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col font-sans overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <MechanismSection />
      <EducationSection />
      <SolutionIntroSection />
      <OfferIntroSection />
      <FrameworkSection />
    </main>
  );
}

