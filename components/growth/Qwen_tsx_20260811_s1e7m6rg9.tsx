import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { growthProcess } from "@/lib/content/growthSystem";

export function GrowthProcessSection() {
  return (
    <Section background="subtle" ariaLabel="Growth Process">
      <Container>
        <RevealOnScroll className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
            {growthProcess.headline}
          </h2>
        </RevealOnScroll>

        <div className="relative">
          {/* Connection Line Desktop */}
          <div className="absolute left-0 top-12 hidden h-0.5 w-full bg-charcoal-200 lg:block" aria-hidden="true" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {growthProcess.steps.map((step, i) => (
              <RevealOnScroll key={step.step} delay={i * 0.1}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex size-12 items-center justify-center rounded-full border-4 border-white bg-charcoal-900 text-white font-bold shadow-md mb-6">
                    {step.step}
                  </div>
                  <h3 className="font-display text-lg font-bold text-charcoal-900 mb-2">
                    {step.name}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}