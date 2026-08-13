import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCta } from "@/components/sections/FinalCta";
import { ResultsHero } from "@/components/sections/results/ResultsHero";
import { ResultsShowcase } from "@/components/sections/results/ResultsShowcase";
import { ResultsOpportunity } from "@/components/sections/results/ResultsOpportunity";
import { ResultsFeedback } from "@/components/sections/results/ResultsFeedback";

export const metadata: Metadata = {
  title: "Results | MUSASCO Concepts",
  description:
    "See how MUSASCO has helped businesses improve visibility, generate demand and move toward more predictable growth.",
  alternates: {
    canonical: "/results",
  },
};

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="w-full min-w-0">
        <ResultsHero />
        <ResultsShowcase />
        <ResultsOpportunity />
        <ResultsFeedback />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}