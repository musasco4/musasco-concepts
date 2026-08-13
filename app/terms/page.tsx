import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Service | MUSASCO Concepts",
  description: "Terms of service for MUSASCO Concepts.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="w-full min-w-0">
        <section className="bg-charcoal-900 text-white py-16 lg:py-20">
          <Container className="max-w-3xl mx-auto">
            <RevealOnScroll>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Terms of Service</h1>
              <p className="mt-4 text-charcoal-400">Last updated: August 2025</p>
            </RevealOnScroll>
          </Container>
        </section>

        <Section background="primary" ariaLabel="Terms of Service">
          <Container narrow>
            <div className="prose prose-charcoal max-w-none space-y-8 text-charcoal-700 leading-relaxed">
              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Acceptance of Terms</h2>
                <p>By accessing and using the MUSASCO Concepts website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Services</h2>
                <p>MUSASCO Concepts provides business growth consulting, marketing systems, and related services. Specific terms for any engagement will be outlined in a separate agreement. These website terms do not replace engagement-specific agreements.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Intellectual Property</h2>
                <p>All content on this website, including text, graphics, logos, and design elements, is the property of MUSASCO Concepts and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Limitation of Liability</h2>
                <p>MUSASCO Concepts provides information on this website as-is. We make no warranties, express or implied, regarding the completeness, accuracy, or reliability of website content. Our liability is limited to the maximum extent permitted by applicable law.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Third-Party Links</h2>
                <p>This website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of those sites.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Changes to Terms</h2>
                <p>We reserve the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Contact</h2>
                <p>For questions about these terms, contact us at musasco4wealth@gmail.com or +234 905 693 5204.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <p className="text-sm text-charcoal-500 italic mt-8">These terms of service are provided for informational purposes and do not constitute legal advice. MUSASCO Concepts recommends consulting a qualified legal professional for guidance specific to your jurisdiction and circumstances.</p>
              </RevealOnScroll>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}