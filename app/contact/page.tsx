import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
// UPDATED IMPORT PATH
import { TrustSection } from "@/components/sections/trust/TrustSection";

import { GuaranteeBlock } from "@/components/sections/GuaranteeBlock";
import { FinalCta } from "@/components/sections/FinalCta";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactOptions } from "@/components/sections/contact/ContactOptions";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { CalBookingWidget } from "@/components/sections/contact/CalBookingWidget";
import { ContactFaq } from "@/components/sections/contact/ContactFaq";

export const metadata: Metadata = {
  title: "Contact Us | MUSASCO Concepts",
  description:
    "Get in touch with MUSASCO Concepts. Build Your Growth System, send us a message, or schedule a call to discuss your business growth goals.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContactHero />
        {/* Pass variant="contact" to use contact-specific copy */}
        <TrustSection variant="contact" />
         
        <ContactOptions />
        
        {/* Primary Conversion Section: Two Column Layout */}
        <Section background="subtle" ariaLabel="Build Your Growth System or send a message" className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">
              
              {/* Left Column: Form */}
              <RevealOnScroll>
                <ContactForm />
              </RevealOnScroll>

              {/* Right Column: Booking Widget */}
              <RevealOnScroll delay={0.1} className="h-full">
                <div className="sticky top-24">
                  <CalBookingWidget />
                </div>
              </RevealOnScroll>

            </div>
          </Container>
        </Section>
       
        <GuaranteeBlock />
        <ContactFaq />
        <FinalCta />
        
      </main>
      <Footer />
      <StickyMobileCta heroId="contact-hero" />
    </>
  );
}