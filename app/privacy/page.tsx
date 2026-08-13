import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | MUSASCO Concepts",
  description: "Privacy policy for MUSASCO Concepts.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="w-full min-w-0">
        <section className="bg-charcoal-900 text-white py-16 lg:py-20">
          <Container className="max-w-3xl mx-auto">
            <RevealOnScroll>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
              <p className="mt-4 text-charcoal-400">Last updated: August 2025</p>
            </RevealOnScroll>
          </Container>
        </section>

        <Section background="primary" ariaLabel="Privacy Policy">
          <Container narrow>
            <div className="prose prose-charcoal max-w-none space-y-8 text-charcoal-700 leading-relaxed">
              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Information We Collect</h2>
                <p>When you contact us through our website, we may collect your name, email address, phone number, company name, website URL, and any message you provide. We may also collect basic usage data through standard web analytics.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">How We Use Your Information</h2>
                <p>We use the information you provide to respond to your inquiries, schedule consultations, deliver our services, and communicate with you about your engagement. We do not sell your personal information to third parties.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Third-Party Services</h2>
                <p>We use Brevo for email delivery when you submit a contact form. We may use Cal.com for scheduling. These services have their own privacy policies. We do not share your information beyond what is necessary to deliver our services.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Data Security</h2>
                <p>We take reasonable measures to protect your personal information. However, no method of transmission over the internet is completely secure. We encourage you to use caution when sharing sensitive information online.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Your Rights</h2>
                <p>You may request access to, correction of, or deletion of your personal information by contacting us at musasco4wealth@gmail.com. We will respond to verified requests within a reasonable timeframe.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Changes to This Policy</h2>
                <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Contact</h2>
                <p>If you have questions about this privacy policy, please contact us at musasco4wealth@gmail.com or +234 905 693 5204.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <p className="text-sm text-charcoal-500 italic mt-8">This privacy policy is provided for informational purposes and does not constitute legal advice. MUSASCO Concepts recommends consulting a qualified legal professional for guidance specific to your jurisdiction and circumstances.</p>
              </RevealOnScroll>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}