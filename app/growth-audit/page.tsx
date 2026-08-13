import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { CheckCircle2, ArrowRight, Target, TrendingUp, BarChart3 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Growth Audit | MUSASCO Concepts",
  description:
    "Get a free Growth Audit to identify where your business is leaking revenue and discover the specific systems needed to fix it. No obligation.",
  alternates: {
    canonical: "/growth-audit",
  },
};

const AUDIT_STEPS = [
  {
    icon: Target,
    title: "Attract Assessment",
    description:
      "We evaluate how effectively your business attracts the right customers through paid ads, organic search, and brand visibility.",
  },
  {
    icon: TrendingUp,
    title: "Convert Assessment",
    description:
      "We review your landing pages, website experience, and customer journey to identify where attention is lost before becoming revenue.",
  },
  {
    icon: BarChart3,
    title: "Scale Assessment",
    description:
      "We examine your tracking, analytics, and optimization systems to determine whether growth is measurable and repeatable.",
  },
];

const DELIVERABLES = [
  "Identify the biggest bottlenecks in your current customer journey",
  "Discover specific growth opportunities you may be missing",
  "Receive clear, prioritized recommended next steps",
  "Understand which engine (Attract, Convert, or Scale) to fix first",
  "Get a no-obligation Growth Blueprint tailored to your business",
];

const QUALIFIES = [
  "Businesses already operating and generating some revenue",
  "Businesses looking to grow but unsure where to start",
  "Businesses experiencing stalled or unpredictable growth",
  "Businesses tired of scattered vendors and disconnected marketing",
];

export default function GrowthAuditPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="w-full min-w-0">
        
        {/* Hero */}
        <section id="growth-audit-hero" className="relative w-full bg-charcoal-900 text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-grid-faint opacity-[0.03] pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
          
          <Container className="relative z-10 max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">
                FREE • NO OBLIGATION
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
                Find Out Where Your Growth Is Stalling.
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="mt-6 text-lg text-charcoal-300 leading-relaxed max-w-2xl mx-auto">
                A Growth Audit identifies exactly which part of your customer journey is leaking revenue — and gives you a clear, specific plan to fix it. No pressure, no obligation, just clarity.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="#audit-form" size="lg">
                  Start My Free Audit
                </Button>
                <Link 
                  href="/pricing" 
                  className="text-sm font-medium text-charcoal-400 hover:text-white transition-colors"
                >
                  Already know what you need? See Pricing →
                </Link>
              </div>
            </RevealOnScroll>
          </Container>
        </section>

        {/* What We Assess */}
        <Section background="primary" ariaLabel="What we assess">
          <Container className="max-w-5xl mx-auto">
            <RevealOnScroll className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
                What We Look At
              </h2>
              <p className="mt-4 text-charcoal-600 text-lg">
                Every Growth Audit evaluates three core engines of your business.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {AUDIT_STEPS.map((step, i) => (
                <RevealOnScroll key={step.title} delay={i * 0.1}>
                  <Card variant="flat" hover className="p-8 h-full flex flex-col">
                    <div className="size-12 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                      <step.icon className="size-6 text-emerald-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-charcoal-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-charcoal-600 leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </Card>
                </RevealOnScroll>
              ))}
            </div>
          </Container>
        </Section>

        {/* What You Get */}
        <Section background="subtle" ariaLabel="What you get">
          <Container className="max-w-3xl mx-auto">
            <RevealOnScroll className="mb-10">
              <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl text-center">
                What You Get
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="space-y-4">
                {DELIVERABLES.map((item) => (
                  <div key={item} className="flex items-start gap-4 p-4 rounded-lg bg-white border border-charcoal-100">
                    <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-base text-charcoal-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </Container>
        </Section>

        {/* Who It Is For */}
        <Section background="primary" ariaLabel="Who this is for">
          <Container className="max-w-3xl mx-auto">
            <RevealOnScroll className="mb-10">
              <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl text-center">
                Who This Is For
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {QUALIFIES.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4">
                    <ArrowRight className="size-4 text-emerald-600 shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-sm text-charcoal-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </Container>
        </Section>

        {/* Audit Intake Form */}
        <section id="audit-form" className="w-full bg-charcoal-900 text-white py-16 lg:py-24">
          <Container className="max-w-2xl mx-auto">
            <RevealOnScroll className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Start?
              </h2>
              <p className="mt-4 text-charcoal-300 text-lg">
                Tell us a bit about your business and we&apos;ll reach out within 24 hours to schedule your free Growth Audit.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <Card variant="raised" className="p-6 sm:p-8 lg:p-10 bg-white text-charcoal-900">
                <form action="/api/contact" method="POST" className="space-y-5">
                  <input type="hidden" name="businessType" value="Growth Audit Request" />
                  
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="audit-firstName" className="text-sm font-medium text-charcoal-900">First Name *</label>
                      <input id="audit-firstName" name="firstName" required className="w-full rounded-md border border-charcoal-200 px-3 py-2.5 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="audit-lastName" className="text-sm font-medium text-charcoal-900">Last Name *</label>
                      <input id="audit-lastName" name="lastName" required className="w-full rounded-md border border-charcoal-200 px-3 py-2.5 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="audit-email" className="text-sm font-medium text-charcoal-900">Email *</label>
                    <input id="audit-email" name="email" type="email" required className="w-full rounded-md border border-charcoal-200 px-3 py-2.5 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600" placeholder="jane@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="audit-company" className="text-sm font-medium text-charcoal-900">Company / Business Name</label>
                    <input id="audit-company" name="company" className="w-full rounded-md border border-charcoal-200 px-3 py-2.5 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600" placeholder="Your Business Name" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="audit-message" className="text-sm font-medium text-charcoal-900">What&apos;s your biggest growth challenge right now? *</label>
                    <textarea id="audit-message" name="message" required rows={4} className="w-full rounded-md border border-charcoal-200 px-3 py-2.5 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 resize-none" placeholder="Tell us briefly what's holding your growth back..." />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Request My Free Growth Audit
                  </Button>

                  <p className="text-xs text-charcoal-500 text-center mt-4">
                    No obligation. We typically respond within 24 hours on business days.
                  </p>
                </form>
              </Card>
            </RevealOnScroll>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}