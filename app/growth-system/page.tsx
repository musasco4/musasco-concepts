import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { GrowthHeroSection } from "@/components/growth/GrowthHeroSection";
import { GrowthSystemOverview } from "@/components/growth/GrowthSystemOverview";
import { GrowthAttractSection } from "@/components/growth/GrowthAttractSection";
import { GrowthConvertSection } from "@/components/growth/GrowthConvertSection";
import { GrowthScaleSection } from "@/components/growth/GrowthScaleSection";
import { GrowthProcessSection } from "@/components/growth/GrowthProcessSection";
import { GrowthCTASection } from "@/components/growth/GrowthCTASection";

export const metadata: Metadata = {
  title: "The Growth System | MUSASCO Concepts",
  description: "MUSASCO connects the systems that attract customers, convert opportunities, and scale what works. Attract, Convert, Scale.",
  alternates: {
    canonical: "/growth-system",
  },
};

export default function GrowthSystemPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <GrowthHeroSection />
        <GrowthSystemOverview />
        <GrowthAttractSection />
        <GrowthConvertSection />
        <GrowthScaleSection />
        <GrowthProcessSection />
        <GrowthCTASection />
      </main>
      <Footer />
      <StickyMobileCta heroId="growth-hero" />
    </>
  );
}