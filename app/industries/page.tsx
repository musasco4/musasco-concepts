import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCta } from "@/components/sections/FinalCta";
import { IndustriesHero } from "@/components/sections/industries/IndustriesHero";
import { IndustryShowcase } from "@/components/sections/industries/IndustryShowcase";

export const metadata: Metadata = {
  title: "Industries | MUSASCO Concepts",
  description:
    "Growth systems for SMEs, Professional Services, Home Services, Healthcare, Real Estate, and Local Businesses. We build the infrastructure for predictable growth.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="w-full min-w-0">
        <IndustriesHero />
        <IndustryShowcase />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}