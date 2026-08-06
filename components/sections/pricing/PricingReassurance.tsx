import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { reassurance } from "@/lib/content/pricing";

export function PricingReassurance() {
  return (
    <Section background="subtle" ariaLabel="Our Approach">
      <Container>
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-charcoal-900">
            {reassurance.headline}
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reassurance.items.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.1}>
              <div className="h-full p-6 rounded-xl bg-white border border-charcoal-100 shadow-sm flex flex-col">
                <h3 className="font-display text-base font-bold text-charcoal-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}