import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { RESULTS_STATS, resultsStrip } from "@/lib/content/homepage";

/**
 * ResultsStrip — Homepage Spec v2 §5 "04", content updated per the
 * Homepage Refinement Review ("Statistics" section): now displays
 * company-standing facts (years in business, projects completed,
 * industries served) rather than case-study-sourced growth percentages.
 * See the CONTENT NOTE on RESULTS_STATS in lib/content/homepage.ts for
 * why this is a different, lower-risk claim type than the original
 * PRD §3.7 governance was written to prevent — that governance logic
 * (render nothing rather than fabricated numbers) is preserved below;
 * only the content itself has changed.
 *
 * The per-stat "source" link is only rendered when a stat actually has
 * one — these company-facts stats don't point to a specific case study,
 * unlike the original growth-metric stats this section was designed for.
 */
export function ResultsStrip() {
  if (RESULTS_STATS.length === 0) return null;

  return (
    <Section background="primary" ariaLabel="Why businesses choose us">
      <Container>
        <RevealOnScroll className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {resultsStrip.headline}
          </h2>
          <p className="mt-3 text-charcoal-600">{resultsStrip.subheadline}</p>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {RESULTS_STATS.map((stat, i) => (
            <RevealOnScroll key={stat.id} delay={i * 0.08}>
              <Card variant="flat" hover className="p-6 text-center h-full flex flex-col items-center">
                <span className="flex size-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600" aria-hidden="true">
                  <TrendingUp className="size-4" />
                </span>
                <p className="mt-4 text-3xl text-emerald-600 sm:text-4xl">
                  <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-charcoal-600">{stat.label}</p>
                {stat.sourceHref ? (
                  <Link
                    href={stat.sourceHref}
                    className="mt-3 text-xs text-charcoal-400 hover:text-emerald-600 hover:underline underline-offset-4"
                  >
                    {stat.sourceLabel} →
                  </Link>
                ) : null}
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
