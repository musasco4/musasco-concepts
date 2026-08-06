import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Carousel } from "@/components/ui/Carousel";
import { growthSystem, type Engine } from "@/lib/content/homepage";

const ENGINE_TYPE_PREFIX = "Engine: ";

function EngineCard({ engine, index }: { engine: Engine; index: number }) {
  return (
    <Card variant="flat" hover className="p-8 h-full flex flex-col">
      <div className="size-14 rounded-full bg-emerald-50 flex items-center justify-center">
        <span className="text-emerald-600 text-xs font-semibold" aria-hidden="true">
          {index + 1}
        </span>
      </div>
      {/* H3 with a visually-hidden type-prefix — Spec v2 §2/§13, Finding #9:
          gives screen-reader heading-list navigation the context ("this is
          an Engine") that sighted users get for free from the surrounding
          section layout. */}
      <h3 className="mt-6 font-display text-xl font-semibold text-charcoal-900">
        <span className="sr-only-prefix">{ENGINE_TYPE_PREFIX}</span>
        {engine.name}
      </h3>
      <p className="mt-3 text-sm text-charcoal-600 flex-1">{engine.description}</p>
      <Link
        href={engine.href}
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:underline underline-offset-4"
      >
        {engine.linkLabel}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </Card>
  );
}

/**
 * GrowthSystemTeaser — Homepage Spec v2 §5 "03 — Growth System™ Teaser".
 * The page's core differentiation moment (see chat response §1, UX Rationale).
 *
 * Responsive (Spec v2 §12): desktop shows all three engines side by side;
 * mobile uses the shared Carousel (keyboard + pagination dots, Findings
 * #2/#11) rather than a 1-column stack, matching the spec's explicit choice
 * to treat 3 items as carousel-appropriate rather than a long scroll.
 */
export function GrowthSystemTeaser() {
  return (
    <Section background="primary" ariaLabel="The Growth System">
      <Container>
        <RevealOnScroll className="text-center max-w-2xl mx-auto">
          <p className="font-body text-sm font-bold tracking-wide text-emerald-600">
            {growthSystem.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {growthSystem.headline}
          </h2>
          <p className="mt-4 text-base text-charcoal-600 sm:text-lg">{growthSystem.subheadline}</p>
        </RevealOnScroll>

        {/* Desktop grid */}
        <div className="mt-12 hidden md:grid md:grid-cols-3 md:gap-6">
          {growthSystem.engines.map((engine, i) => (
            <RevealOnScroll key={engine.id} delay={i * 0.1}>
              <EngineCard engine={engine} index={i} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-10 md:hidden">
          <Carousel ariaLabel="Growth System engines">
            {growthSystem.engines.map((engine, i) => (
              <EngineCard key={engine.id} engine={engine} index={i} />
            ))}
          </Carousel>
        </div>

        <RevealOnScroll className="mt-10 text-center">
          <Link
            href={growthSystem.ctaHref}
            className="inline-flex items-center gap-1 text-sm font-semibold text-charcoal-900 hover:text-emerald-600"
          >
            {growthSystem.ctaLabel}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
