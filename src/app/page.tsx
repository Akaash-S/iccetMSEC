import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { ChiefGuestSection } from "@/components/sections/ChiefGuestSection";
import { ImportantDatesSection } from "@/components/sections/ImportantDatesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutSection />
      <HighlightsSection />
      <ChiefGuestSection />
      <ImportantDatesSection />
      {/* Additional sections would be added here */}
    </div>
  );
}
