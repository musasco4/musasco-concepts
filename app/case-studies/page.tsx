import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | MUSASCO Concepts",
  description:
    "See how MUSASCO has helped businesses improve visibility, attract customers and turn better positioning into measurable growth.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="w-full min-w-0">
        
        {/* Hero */}
        <section id="case-studies-hero" className="relative w-full bg-charcoal-900 text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-grid-faint opacity-[0.03] pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
          
          <Container className="relative z-10 text-center max-w-3xl mx-auto">
            <RevealOnScroll>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">
                CASE STUDIES
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
                Work That Moved Businesses Forward.
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="mt-6 text-lg text-charcoal-300 leading-relaxed">
                See how we&apos;ve helped businesses improve visibility, attract customers and turn better positioning into measurable growth.
              </p>
            </RevealOnScroll>
          </Container>
        </section>

        {/* Case Studies Grid */}
        <section className="w-full bg-white py-16 lg:py-24">
          <Container className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Zee Chilled Party Card */}
              <RevealOnScroll>
                <article className="h-full flex flex-col w-full rounded-2xl border border-charcoal-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 min-w-0">
                  <div className="mb-6 pb-6 border-b border-charcoal-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">
                      Food, Catering & Events
                    </p>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal-900 mb-3 leading-tight">
                      Zee Chilled Party
                    </h2>
                    <h3 className="text-base font-semibold text-charcoal-700 mb-3">
                      From Visibility to 40%+ Revenue Growth.
                    </h3>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      A local food and catering business that gained stronger visibility, began receiving more orders and achieved at least 40% revenue growth through the work.
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <Link 
                      href="/case-studies/zee-chilled-party"
                      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors group"
                    >
                      Read Case Study
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </RevealOnScroll>

              {/* Placeholder for Future Case Study */}
              <RevealOnScroll delay={0.1}>
                <div className="h-full flex flex-col items-center justify-center w-full rounded-2xl border border-dashed border-charcoal-300 bg-charcoal-50 p-6 sm:p-8 min-w-0 text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-charcoal-400 mb-2">
                    Coming Soon
                  </p>
                  <p className="text-sm text-charcoal-500">
                    More growth stories are being documented.
                  </p>
                </div>
              </RevealOnScroll>

            </div>
          </Container>
        </section>

      </main>
      <Footer />
      <StickyMobileCta heroId="case-studies-hero" />
    </>
  );
}