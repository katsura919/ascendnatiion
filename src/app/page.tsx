import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { MechanismSection } from "@/components/sections/mechanism-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col font-sans overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <MechanismSection />
    </main>
  );
}

