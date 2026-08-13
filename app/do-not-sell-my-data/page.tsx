import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Do Not Sell My Data | MUSASCO Concepts",
  description: "MUSASCO Concepts does not sell personal information. Learn about our data practices and how to submit a privacy request.",
  alternates: { canonical: "/do-not-sell-my-data" },
};

export default function DoNotSellMyDataPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="w-full min-w-0">
        <section className="bg-charcoal-900 text-white py-16 lg:py-20">
          <Container className="max-w-3xl mx-auto">
            <RevealOnScroll>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Do Not Sell My Personal Information</h1>
            </RevealOnScroll>
          </Container>
        </section>

        <Section background="primary" ariaLabel="Do Not Sell My Data">
          <Container narrow>
            <div className="prose prose-charcoal max-w-none space-y-8 text-charcoal-700 leading-relaxed">
              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">We Do Not Sell Your Personal Information</h2>
                <p>MUSASCO Concepts does not sell, rent, or trade personal information to third parties for monetary consideration. We collect personal information only as necessary to respond to inquiries, deliver our services, and communicate with clients and prospects.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">How We Use Your Data</h2>
                <p>Personal information collected through this website is used solely to respond to your inquiries, provide requested services, and improve our offerings. We may share information with service providers (such as email delivery and scheduling platforms) only as necessary to deliver our services, and never for their independent marketing purposes.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <h2 className="font-display text-xl font-bold text-charcoal-900">Submit a Privacy Request</h2>
                <p>If you would like to request access to, correction of, or deletion of your personal information, or if you have any concerns about how your data is handled, please contact us:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Email:</strong> musasco4wealth@gmail.com</li>
                  <li><strong>Phone:</strong> +234 905 693 5204</li>
                  <li><strong>WhatsApp:</strong> <a href="https://wa.me/2349056935204" className="text-emerald-600 hover:underline">Chat with us</a></li>
                </ul>
                <p className="mt-4">We will respond to verified requests within a reasonable timeframe.</p>
              </RevealOnScroll>

              <RevealOnScroll>
                <p className="text-sm text-charcoal-500 italic mt-8">This page is provided for informational purposes and does not constitute legal advice. If you believe you have rights under a specific privacy law (such as CCPA, GDPR, or NDPR), please consult a qualified legal professional.</p>
              </RevealOnScroll>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}