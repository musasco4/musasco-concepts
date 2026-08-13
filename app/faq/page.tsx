import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "FAQ | MUSASCO Concepts",
  description: "Frequently asked questions about MUSASCO Concepts, the Growth System, Growth Audits, services, pricing, and how we work.",
  alternates: { canonical: "/faq" },
};

const FAQ_CATEGORIES = [
  {
    title: "About MUSASCO",
    items: [
      { question: "Who is MUSASCO?", answer: "MUSASCO Concepts is a business growth company based in Lagos, Nigeria. We help businesses attract customers, convert attention into revenue, and scale what works — through one connected growth system rather than scattered marketing services." },
      { question: "What does MUSASCO do?", answer: "We build growth systems for businesses. This includes paid advertising (Meta and Google Ads), landing pages, website experience, conversion optimisation, tracking and analytics, marketing automation, and growth strategy — all connected as one system." },
      { question: "What types of businesses do you work with?", answer: "We work with SMEs, professional services firms, home services businesses, healthcare providers, real estate companies, and local businesses that are already operating and looking to grow." },
      { question: "Where do you operate?", answer: "We are based in Lagos, Nigeria and serve clients across Nigeria, the UK, and Europe remotely." },
    ],
  },
  {
    title: "The Growth System",
    items: [
      { question: "What is the MUSASCO Growth System?", answer: "The Growth System™ is our framework for connecting three core engines — Attract, Convert, and Scale — into one coherent growth infrastructure. Instead of treating marketing as disconnected tasks, we build systems where each part feeds the next." },
      { question: "What are Attract, Convert, and Scale?", answer: "Attract creates demand and brings the right people to your business through paid advertising and demand generation. Convert turns that attention into paying customers through landing pages, website experience, and conversion optimisation. Scale makes what works measurable and repeatable through tracking, analytics, and continuous optimisation." },
      { question: "Why a system rather than isolated services?", answer: "Because disconnected marketing activities rarely produce connected results. A freelancer running ads, a different agency on the website, and someone else handling branding means nobody owns whether the whole thing produces customers. We take responsibility for the entire system." },
      { question: "How do I know which engine my business needs?", answer: "That's exactly what the Growth Audit is designed to determine. We assess your current setup and identify which engine represents the biggest bottleneck to your growth right now." },
    ],
  },
  {
    title: "Growth Audit",
    items: [
      { question: "What is the Growth Audit?", answer: "The Growth Audit is an assessment of your current customer journey, digital presence, and growth infrastructure. It identifies where your business is leaking value and provides a clear, prioritised roadmap for fixing it." },
      { question: "Is the Growth Audit free?", answer: "Yes. The initial Growth Audit request and discovery conversation are free and carry no obligation." },
      { question: "What happens during the audit?", answer: "We review your current digital presence, customer journey, tracking setup, and competitive landscape. We then identify the biggest bottlenecks and opportunities specific to your business." },
      { question: "What do I receive after the audit?", answer: "You receive a Growth Blueprint — a clear, specific roadmap identifying which engine to fix first, why, and what the recommended next steps are." },
      { question: "Am I required to hire MUSASCO afterwards?", answer: "No. There is no obligation to continue after the audit. The Blueprint is yours regardless of whether you decide to work with us." },
    ],
  },
  {
    title: "Services",
    items: [
      { question: "Do you run Meta Ads?", answer: "Yes. Meta Ads management is included in our Growth Accelerator and Growth Partner packages." },
      { question: "Do you run Google Ads?", answer: "Yes. Google Ads management is included in our Growth Accelerator and Growth Partner packages." },
      { question: "Do you build landing pages?", answer: "Yes. Landing page design and conversion optimisation are core parts of the Convert engine." },
      { question: "Do you build websites?", answer: "Website design and development is included in our Growth Partner package. For other packages, we focus on landing pages and conversion optimisation within your existing site." },
      { question: "Do you provide branding?", answer: "Brand strategy, positioning, visual identity, and logo development are included in our Growth Partner package." },
      { question: "Do you provide analytics and tracking?", answer: "Yes. Google Analytics, Google Search Console, Meta Pixel, and conversion tracking setup are included in Growth Foundation and above." },
      { question: "Do you provide automation?", answer: "Yes. Marketing automation and CRM setup are included in our Growth Partner package." },
      { question: "Can services be combined?", answer: "Yes. Our packages are designed to stack. You can start with a Growth Audit, move to Foundation for tracking and systems, then upgrade to Accelerator for paid acquisition or Partner for full-service growth support." },
    ],
  },
  {
    title: "Pricing",
    items: [
      { question: "How does pricing work?", answer: "We offer four tiers: Growth Audit ($150), Growth Foundation ($300+), Growth Accelerator ($500+), and Growth Partner (custom pricing). Each builds on the previous tier." },
      { question: "What does the Growth Audit cost?", answer: "The Growth Audit starts at $150 and includes a full business growth audit, digital presence review, competitor analysis, customer journey review, and a growth roadmap." },
      { question: "What is Growth Foundation?", answer: "Growth Foundation ($300+) includes everything in the Audit plus tracking setup (Google Analytics, Search Console, Meta Pixel, conversion tracking) and digital presence improvements. It does not include ads management or website development." },
      { question: "What is Growth Accelerator?", answer: "Growth Accelerator ($500+) includes everything in Foundation plus Meta Ads and Google Ads management, campaign strategy, audience research, performance reporting, and creative direction." },
      { question: "What is Growth Partner?", answer: "Growth Partner is our full-service engagement with custom pricing. It includes everything in Accelerator plus brand strategy, visual identity, website design and development, sales funnels, automation systems, CRM setup, and ongoing growth strategy sessions." },
      { question: "Is advertising spend included?", answer: "No. Clients pay Meta and Google directly. Our fees cover strategy, setup, management, optimisation, and reporting." },
      { question: "What minimum advertising budget is recommended?", answer: "We recommend starting from $250/month so campaigns can gather enough data for meaningful optimisation." },
      { question: "Can I start small and scale?", answer: "Yes. Many businesses start with the Growth Audit or Growth Foundation before moving into Accelerator or Partner as they see results." },
    ],
  },
  {
    title: "Process",
    items: [
      { question: "What happens after I contact MUSASCO?", answer: "A member of our growth team will review your inquiry and reach out within 24 hours to schedule a brief discovery call or answer your questions directly." },
      { question: "How does onboarding work?", answer: "After agreeing to work together, we begin with a Discovery phase to understand your business, customers, and goals. From there we move into Strategy, then Execution, then ongoing Growth optimisation." },
      { question: "How long does a project take?", answer: "Timelines vary depending on scope. A Growth Audit typically takes a few days. Foundation and Accelerator engagements typically begin delivering within the first few weeks. Contact us for a timeline specific to your situation." },
      { question: "How do you measure results?", answer: "We set up tracking from day one and measure against business outcomes — leads, customers, revenue — not vanity metrics. Performance reporting is included in all packages from Foundation upward." },
    ],
  },
  {
    title: "Contact",
    items: [
      { question: "How can I contact MUSASCO?", answer: "You can reach us through our contact form, by email at musasco4wealth@gmail.com, by phone at +234 905 693 5204, or via WhatsApp." },
      { question: "Can I contact you through WhatsApp?", answer: "Yes. Chat with us on WhatsApp at +234 905 693 5204." },
      { question: "Can I book a call?", answer: "Yes. You can schedule a 30-minute Growth Call directly through our booking widget on the Contact page, or request one through the contact form." },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="w-full min-w-0">

        {/* Hero */}
        <section id="faq-hero" className="relative w-full bg-charcoal-900 text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-grid-faint opacity-[0.03] pointer-events-none" aria-hidden="true" />
          <Container className="relative z-10 max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">FAQ</p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-balance">
                Common Questions
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="mt-6 text-lg text-charcoal-300 leading-relaxed">
                Everything you need to know about MUSASCO, the Growth System, and how we work.
              </p>
            </RevealOnScroll>
          </Container>
        </section>

        {/* FAQ Categories */}
        <Section background="primary" ariaLabel="Frequently asked questions">
          <Container className="max-w-3xl mx-auto">
            {FAQ_CATEGORIES.map((category, catIndex) => (
              <div key={category.title} className={catIndex > 0 ? "mt-16" : ""}>
                <RevealOnScroll>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-charcoal-900 mb-6">
                    {category.title}
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll delay={0.05}>
                  <Accordion items={category.items} />
                </RevealOnScroll>
              </div>
            ))}
          </Container>
        </Section>

        {/* Still have questions CTA */}
        <section className="bg-charcoal-900 text-white py-16 lg:py-24">
          <Container className="text-center max-w-2xl mx-auto">
            <RevealOnScroll>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Still Have Questions?</h2>
              <p className="mt-4 text-charcoal-300 text-lg">We&apos;re happy to answer them directly.</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-700 transition-colors">
                  Contact Us
                </a>
                <a href="https://wa.me/2349056935204" className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
            </RevealOnScroll>
          </Container>
        </section>

      </main>
      <Footer />
      <StickyMobileCta heroId="faq-hero" />
    </>
  );
}