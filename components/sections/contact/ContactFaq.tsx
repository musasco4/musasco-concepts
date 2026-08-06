import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Accordion } from "@/components/ui/Accordion";
import { contactFaq } from "@/lib/content/contact";

export function ContactFaq() {
  return (
    <Section background="primary" ariaLabel="Contact FAQ" className="py-16 md:py-24">
      <Container narrow>
        <RevealOnScroll className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {contactFaq.headline}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="mx-auto max-w-3xl">
            <Accordion items={contactFaq.items} />
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}