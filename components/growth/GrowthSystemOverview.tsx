import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { growthOverview } from "@/lib/content/growthSystem";

export function GrowthSystemOverview() {
  return (
    <Section background="subtle" ariaLabel="Growth System Overview">
      <Container>
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
            {growthOverview.headline}
          </h2>
          <p className="mt-4 text-lg text-charcoal-600">
            {growthOverview.subheadline}
          </p>
        </RevealOnScroll>

        <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
          {/* Desktop Connector Line */}
          <div className="absolute left-0 top-12 hidden h-0.5 w-full bg-charcoal-200 md:block" aria-hidden="true" />

          {growthOverview.stages.map((stage, i) => (
            <RevealOnScroll key={stage.id} delay={i * 0.1}>
              <div className="relative flex h-full flex-col items-center rounded-2xl border border-charcoal-200 bg-white p-8 text-center shadow-sm">
                <div className="relative z-10 flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-lg mb-4 ring-4 ring-white">
                  {i + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal-900">{stage.label}</h3>
                <p className="mt-3 text-sm text-charcoal-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}