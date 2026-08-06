import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { blueprintCallout } from "@/lib/content/homepage";
import Link from "next/link";

/**
 * GrowthBlueprintCallout — Homepage Spec v2 §5 "08 — Growth Blueprint Callout".
 * The one Solid Badge on the entire page (Design System §5 rule). Includes
 * the v2 skip link (Finding #1) for visitors who already know they want a
 * conversation, not a roadmap — a Tertiary link, intentionally lower visual
 * weight than the Primary CTA so it doesn't compete with it.
 */
export function GrowthBlueprintCallout() {
  return (
    <Section background="primary" ariaLabel="Growth Blueprint">
      <Container narrow>
        <RevealOnScroll>
          <Card variant="accent" className="relative p-8 sm:p-12 text-center">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <Badge variant="solid">{blueprintCallout.badge}</Badge>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-charcoal-900 sm:text-3xl">
              {blueprintCallout.headline}
            </h2>
            <p className="mt-4 text-charcoal-700">{blueprintCallout.body}</p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <Button href={blueprintCallout.ctaHref} size="lg">
                {blueprintCallout.ctaLabel}
              </Button>
              <Link
                href={blueprintCallout.skipHref}
                className="text-sm font-medium text-emerald-600 hover:underline underline-offset-4"
              >
                {blueprintCallout.skipLabel} →
              </Link>
            </div>
          </Card>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
