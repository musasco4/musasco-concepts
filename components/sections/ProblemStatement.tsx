import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { problemStatement } from "@/lib/content/homepage";

/**
 * ProblemStatement — Homepage Spec v2 §5 "02 — Problem Statement".
 *
 * The two-weight headline (full-strength Charcoal-900 line, then a muted
 * Charcoal-500 line) is the "Named Pattern: Tension Headline" documented in
 * Spec v2 §8, Finding #8 — used exactly once on this page, deliberately not
 * generalized into a reusable heading component, since reusing it anywhere
 * else would dilute the one moment it's meant to mark.
 */
export function ProblemStatement() {
  return (
    <Section background="subtle" ariaLabel="The problem">
      <Container narrow className="text-center">
        <RevealOnScroll>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            <span className="block text-charcoal-900">{problemStatement.headlineStrong}</span>
            <span className="block text-charcoal-500">{problemStatement.headlineMuted}</span>
          </h2>
          <p className="mt-6 text-base text-charcoal-700 sm:text-lg">{problemStatement.body}</p>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
