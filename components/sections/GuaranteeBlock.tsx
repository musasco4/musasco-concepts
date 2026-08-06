import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { guarantee } from "@/lib/content/homepage";

/**
 * GuaranteeBlock — Homepage Spec v2 §5 "07 — Guarantee Block".
 * Headline reads "Start Without Risk" (v2 revision, Finding #6) — matches
 * exactly what the body commits to (the Blueprint gets reworked until it's
 * right), not a broader "every engagement" claim the body doesn't support.
 * No CTA here by design — this block states a promise, it doesn't need its
 * own action (Button Hierarchy, Spec v2 §7).
 */
export function GuaranteeBlock() {
  return (
    <Section background="accentTint" ariaLabel="Our guarantee" className="py-12 md:py-16">
      <Container narrow className="text-center">
        <RevealOnScroll className="flex flex-col items-center">
          <CheckCircle2 className="size-10 text-emerald-600" aria-hidden="true" />
          <h3 className="mt-4 font-display text-xl font-bold text-charcoal-900 sm:text-2xl">
            {guarantee.headline}
          </h3>
          <p className="mt-3 text-charcoal-700 max-w-xl">{guarantee.body}</p>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
