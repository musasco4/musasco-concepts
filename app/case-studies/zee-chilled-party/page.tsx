import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ZeeChilledPartyHero } from "@/components/sections/case-studies/ZeeChilledPartyHero";
import { ZeeChilledPartyContext } from "@/components/sections/case-studies/ZeeChilledPartyContext";
import { ZeeChilledPartyWork } from "@/components/sections/case-studies/ZeeChilledPartyWork";
import { ZeeChilledPartyVisuals } from "@/components/sections/case-studies/ZeeChilledPartyVisuals";
import { ZeeChilledPartyTransformation } from "@/components/sections/case-studies/ZeeChilledPartyTransformation";
import { ZeeChilledPartyResults } from "@/components/sections/case-studies/ZeeChilledPartyResults";
import { ZeeChilledPartyLesson } from "@/components/sections/case-studies/ZeeChilledPartyLesson";

export const metadata: Metadata = {
  title: "Zee Chilled Party Case Study | MUSASCO Concepts",
  description:
    "See how MUSASCO helped Zee Chilled Party improve visibility, generate more orders and achieve 40%+ revenue growth.",
  alternates: {
    canonical: "/case-studies/zee-chilled-party",
  },
};

export default function ZeeChilledPartyCaseStudyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="w-full min-w-0">
        <ZeeChilledPartyHero />
        <ZeeChilledPartyContext />
        <ZeeChilledPartyWork />
        <ZeeChilledPartyVisuals />
        <ZeeChilledPartyTransformation />
        <ZeeChilledPartyResults />
        <ZeeChilledPartyLesson />
      </main>
      <Footer />
    </>
  );
}