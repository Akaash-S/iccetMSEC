import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { KeynoteSpeakersSection } from "@/components/sections/KeynoteSpeakersSection";
import { AboutCollegeSection } from "@/components/sections/AboutCollegeSection";
import { CommitteeSection } from "@/components/sections/CommitteeSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { CallForPapersSection } from "@/components/sections/CallForPapersSection";
import { PaperSubmissionSection } from "@/components/sections/PaperSubmissionSection";
import { SponsorshipSection } from "@/components/sections/SponsorshipSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { RegistrationSection } from "@/components/sections/RegistrationSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutSection />
      <KeynoteSpeakersSection />
      <AboutCollegeSection />
      <CommitteeSection />
      <PublicationsSection />
      <CallForPapersSection />
      <PaperSubmissionSection />
      <SponsorshipSection />
      <RegistrationSection />
    </div>
  );
}
