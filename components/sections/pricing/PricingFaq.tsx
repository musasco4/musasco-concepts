import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Accordion } from "@/components/ui/Accordion";
import { pricingFaq } from "@/lib/content/pricing";

export function PricingFaq() {
  return (
    <Section
      background="primary"
      ariaLabel="Pricing FAQ"
      className="py-16 md:py-24"
    >
      <Container narrow>
        <RevealOnScroll className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {pricingFaq.headline}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="mx-auto max-w-3xl">
            <Accordion items={pricingFaq.items} />
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}