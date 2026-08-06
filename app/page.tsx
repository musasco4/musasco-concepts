import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/trust/TrustSection";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { GrowthSystemTeaser } from "@/components/sections/GrowthSystemTeaser";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ResultsStrip } from "@/components/sections/ResultsStrip";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { CaseStudyPreviews } from "@/components/sections/CaseStudyPreviews";
import { GuaranteeBlock } from "@/components/sections/GuaranteeBlock";
import { GrowthBlueprintCallout } from "@/components/sections/GrowthBlueprintCallout";
import { FinalCta } from "@/components/sections/FinalCta";

/**
 * Homepage — section order per Homepage Refinement Review, Round 2
 * (approved). Two additions since the original locked spec: TrustSection
 * (replaces the one-line TrustStrip, positioned right after Hero per
 * "strengthen credibility before introducing solutions") and
 * ProcessSection (after How We Help, answering "what happens if I hire
 * them"). Everything else keeps its original position — this was an
 * explicit "do not change the architecture" constraint, and these two
 * were the only approved exceptions to it.
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustSection />
        <ProblemStatement />
        <GrowthSystemTeaser />
        <ProcessSection />
        <ResultsStrip />
        <IndustriesGrid />
        <CaseStudyPreviews />
        <GuaranteeBlock />
        <GrowthBlueprintCallout />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta heroId="hero" />
    </>
  );
}
