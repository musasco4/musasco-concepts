import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { PricingHero } from "@/components/sections/pricing/PricingHero";
import { PricingGrid } from "@/components/sections/pricing/PricingGrid";
import { PricingComparison } from "@/components/sections/pricing/PricingComparison";
import { PricingFaq } from "@/components/sections/pricing/PricingFaq";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Pricing | MUSASCO Concepts",
  description:
    "Transparent pricing for Growth Audits, Foundation Systems, Customer Acquisition, and Growth Partnerships.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="w-full min-w-0">
        <PricingHero />
        <PricingGrid />
        <PricingComparison />
        <PricingFaq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta heroId="pricing-hero" />
    </>
  );
}