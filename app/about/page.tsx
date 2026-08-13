import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | MUSASCO Concepts",
  description: "MUSASCO Concepts is a business growth company. We help businesses attract customers, convert attention into revenue, and scale what works — through connected systems, not scattered services.",
  alternates: { canonical: "/about" },
};

const BELIEFS = [
  { title: "Growth should be measurable.", body: "If you can't see whether something is working, it probably isn't. Every system we build includes tracking from day one." },
  { title: "Marketing should connect to business outcomes.", body: "Likes and impressions don't pay bills. We tie every activity back to leads, customers, and revenue." },
  { title: "Good creative should have a job.", body: "Design that looks beautiful but doesn't convert is decoration. We build creative that earns its place in the system." },
  { title: "Systems outperform scattered activities.", body: "A freelancer running ads, a different agency on the website, someone else handling branding — none of them own the outcome. We do." },
  { title: "Strategy should come before execution.", body: "Spending money before understanding the bottleneck is expensive guesswork. We diagnose first, then build." },
  { title: "Businesses need clarity, not more noise.", body: "The answer isn't always more channels or more content. Often it's fixing the one thing that's broken in the journey." },
];

const APPROACH_STEPS = [
  { step: "01", title: "Discovery", body: "We learn your business, your customers, and where growth is actually stalling." },
  { step: "02", title: "Strategy", body: "A clear plan for which engine to fix first, and why — before any spend goes out." },
  { step: "03", title: "Execution", body: "We build and launch — landing pages, campaigns, and the systems behind them." },
  { step: "04", title: "Growth", body: "We measure what's working, cut what isn't, and keep compounding from there." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="w-full min-w-0">

        {/* Hero */}
        <section id="about-hero" className="relative w-full bg-charcoal-900 text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-grid-faint opacity-[0.03] pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
          <Container className="relative z-10 max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">ABOUT MUSASCO</p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
                Growth Shouldn&apos;t Be a Guess.
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="mt-6 text-lg text-charcoal-300 leading-relaxed">
                Most businesses don&apos;t have a product problem. They have a systems problem — marketing, presentation, and customer acquisition operating as disconnected activities instead of one connected growth engine. MUSASCO exists to fix that.
              </p>
            </RevealOnScroll>
          </Container>
        </section>

        {/* Our Story */}
        <Section background="primary" ariaLabel="Our story">
          <Container narrow>
            <RevealOnScroll>
              <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl mb-6">Why MUSASCO Exists</h2>
              <div className="space-y-4 text-charcoal-700 leading-relaxed text-lg">
                <p>
                  Businesses often have good products and services. But their marketing is handled by one person, their website by another, their branding by someone else, and their analytics by nobody. Each piece might be competent on its own, but none of them are responsible for whether the whole thing actually produces customers.
                </p>
                <p>
                  MUSASCO was built around solving that specific problem. We look at the business as a system — not as a collection of separate marketing tasks. The goal is to connect attraction, conversion, and scaling into one coherent engine that produces measurable, repeatable growth.
                </p>
              </div>
            </RevealOnScroll>
          </Container>
        </Section>

        {/* What We Believe */}
        <Section background="subtle" ariaLabel="What we believe">
          <Container>
            <RevealOnScroll className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">What We Believe</h2>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BELIEFS.map((belief, i) => (
                <RevealOnScroll key={belief.title} delay={i * 0.05}>
                  <div className="h-full rounded-xl border border-charcoal-200 bg-white p-6">
                    <h3 className="font-display text-lg font-bold text-charcoal-900 mb-3">{belief.title}</h3>
                    <p className="text-sm text-charcoal-600 leading-relaxed">{belief.body}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </Container>
        </Section>

        {/* How We Approach Growth */}
        <Section background="primary" ariaLabel="Our approach">
          <Container>
            <RevealOnScroll className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">How We Approach Growth</h2>
              <p className="mt-4 text-charcoal-600 text-lg">Three engines. One connected system.</p>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { name: "Attract", desc: "Get the right people to notice you through targeted paid acquisition and demand generation.", href: "/growth-system#attract" },
                { name: "Convert", desc: "Turn attention into paying customers through landing pages, website experience, and conversion optimisation.", href: "/growth-system#convert" },
                { name: "Scale", desc: "Make what works measurable and repeatable through tracking, analytics, and continuous optimisation.", href: "/growth-system#scale" },
              ].map((engine, i) => (
                <RevealOnScroll key={engine.name} delay={i * 0.1}>
                  <Link href={engine.href} className="block h-full rounded-xl border border-charcoal-200 bg-white p-6 hover:border-emerald-300 hover:shadow-md transition-all group">
                    <h3 className="font-display text-xl font-bold text-charcoal-900 mb-3 group-hover:text-emerald-600 transition-colors">{engine.name}</h3>
                    <p className="text-sm text-charcoal-600 leading-relaxed">{engine.desc}</p>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
            <RevealOnScroll>
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-charcoal-900 mb-6">Our Process</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                  {APPROACH_STEPS.map((step) => (
                    <div key={step.step}>
                      <span className="font-stat text-sm text-emerald-600">{step.step}</span>
                      <h4 className="font-display text-base font-bold text-charcoal-900 mt-1">{step.title}</h4>
                      <p className="mt-2 text-sm text-charcoal-600 leading-relaxed">{step.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </Container>
        </Section>

        {/* Who We Work With */}
        <Section background="subtle" ariaLabel="Who we work with">
          <Container narrow className="text-center">
            <RevealOnScroll>
              <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl mb-6">Who We Work With</h2>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-8">
                We work with SMEs, professional services firms, home services businesses, healthcare providers, real estate companies, and local businesses that are already operating and ready to grow. If your business has something worth scaling, we can likely help.
              </p>
              <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:underline underline-offset-4">
                See industries we serve <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </RevealOnScroll>
          </Container>
        </Section>

        {/* CTA */}
        <section className="bg-charcoal-900 text-white py-16 lg:py-24">
          <Container className="text-center max-w-2xl mx-auto">
            <RevealOnScroll>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Ready to Build Your Growth System?</h2>
              <p className="mt-4 text-charcoal-300 text-lg">Start with a free Growth Audit or explore our pricing to find the right engagement for your business.</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/pricing" size="lg">Build Your Growth System</Button>
                <Button href="/growth-audit" variant="ghostOnDark" size="lg">Start a Free Audit</Button>
              </div>
            </RevealOnScroll>
          </Container>
        </section>

      </main>
      <Footer />
      <StickyMobileCta heroId="about-hero" />
    </>
  );
}