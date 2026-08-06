import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { process } from "@/lib/content/homepage";

/**
 * ProcessSection — new this round, positioned directly after How We Help
 * (the Growth System™ Teaser). Answers "what happens if I actually hire
 * them" — nothing else on the page addresses this, and its absence was
 * flagged in the Round 2 review as a real gap, not just a nice-to-have.
 *
 * Kept deliberately compact per the brief ("keep it simple... short
 * descriptions only") — this is a strip, not its own deep-dive page.
 */
export function ProcessSection() {
  return (
    <Section background="primary" ariaLabel="Our process">
      <Container>
        <RevealOnScroll className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{process.headline}</h2>
          <p className="mt-3 text-charcoal-600">{process.subheadline}</p>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {process.steps.map((step, i) => (
            <RevealOnScroll key={step.name} delay={i * 0.08} className="relative text-center lg:text-left">
              <span className="font-stat text-sm text-emerald-600" aria-hidden="true">
                0{step.step}
              </span>
              {/* H3 with visually-hidden type-prefix, consistent with the
                  Engine/Industry/Case-Study pattern (Finding #9). */}
              <h3 className="mt-2 font-display text-lg font-semibold text-charcoal-900">
                <span className="sr-only-prefix">Process step: </span>
                {step.name}
              </h3>
              <p className="mt-2 text-sm text-charcoal-600">{step.description}</p>
              {i < process.steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute top-2 right-[-24px] h-px w-6 bg-charcoal-200"
                />
              ) : null}
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
