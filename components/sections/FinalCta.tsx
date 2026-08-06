import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { finalCta } from "@/lib/content/homepage";

/**
 * FinalCta — Homepage Spec v2 §5 "09 — Final CTA".
 * Mirrors the Hero's dark background and repeats its exact CTA pair
 * deliberately (see UX Rationale) — this is the close, not a new offer.
 * Secondary action is a Secondary button here too (v2 Finding #10 applies
 * to both Hero and Final CTA, not just Hero).
 */
export function FinalCta() {
  return (
    <section aria-label="Get started" className="bg-charcoal-900 text-white">
      <Container className="py-16 lg:py-24 flex flex-col items-center text-center">
        <RevealOnScroll className="flex flex-col items-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {finalCta.headline}
          </h2>
          <p className="mt-3 text-charcoal-300">{finalCta.subheadline}</p>
          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              Book a Growth Consultation
            </Button>
            <Button href="/audit" variant="ghostOnDark" size="lg" className="w-full sm:w-auto">
              Start a Free Audit
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
