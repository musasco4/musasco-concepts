import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { resultsOpportunity } from "@/lib/content/results";

export function ResultsOpportunity() {
  return (
    <Section background="subtle" ariaLabel="Work With Us">
      <Container className="max-w-3xl mx-auto text-center">
        <RevealOnScroll>
          <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
            {resultsOpportunity.headline}
          </h2>
          <p className="mt-6 text-lg text-charcoal-600 leading-relaxed">
            {resultsOpportunity.subheadline}
          </p>
          <p className="mt-4 text-lg text-charcoal-900 font-medium leading-relaxed">
            {resultsOpportunity.closingStatement}
          </p>
          
          <div className="mt-10 flex justify-center">
            <Button href={resultsOpportunity.ctaHref} size="lg">
              {resultsOpportunity.ctaLabel}
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}