import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { PricingHero } from "@/components/sections/pricing/PricingHero";
import { PricingGrid } from "@/components/sections/pricing/PricingGrid";
import { PricingComparison } from "@/components/sections/pricing/PricingComparison";
import { PricingFaq } from "@/components/sections/pricing/PricingFaq";
import { pricingFinalCta } from "@/lib/content/pricing";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "Pricing | MUSASCO Concepts",
  description:
    "Transparent pricing for growth systems. Choose the right starting point for your business stage. Growth Audit, Foundation, Accelerator, and Partner packages available.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PricingHero />
        <PricingGrid />
        <PricingComparison />
        <PricingFaq />
        
        <section className="bg-charcoal-900 text-white py-16 lg:py-24">
          <Container className="text-center max-w-3xl mx-auto">
            <RevealOnScroll>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {pricingFinalCta.headline}
              </h2>
              <div className="mt-8 flex justify-center">
                <Button href="/contact" size="lg">
                  {pricingFinalCta.ctaLabel}
                </Button>
              </div>
            </RevealOnScroll>
          </Container>
        </section>
      </main>
      <Footer />
      <StickyMobileCta heroId="pricing-hero" />
    </>
  );
}