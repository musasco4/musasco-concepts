import Link from "next/link";
import { Building2, Briefcase, Home, Stethoscope, Key, Store, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { industriesGrid, type Industry } from "@/lib/content/homepage";

/**
 * Icon assignment per Design System §14 Asset Library. Real/licensed
 * photography is the spec's preferred treatment (§9 Suggested Imagery),
 * but per that same section's explicit fallback rule — "where unavailable,
 * use the icon-only Compact variant rather than an unrelated stock photo" —
 * this is the current, correct implementation until real imagery exists.
 */
const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  SMEs: Building2,
  "Professional Services": Briefcase,
  "Home Services": Home,
  Healthcare: Stethoscope,
  "Real Estate": Key,
  "Local Businesses": Store,
};

function IndustryTile({ industry }: { industry: Industry }) {
  const Icon = ICONS[industry.name];
  return (
    <Link href={industry.href} className="group block h-full">
      <Card variant="flat" hover className="p-6 h-full flex flex-col">
        <Icon className="size-8 text-emerald-600" aria-hidden="true" />
        {/* H3 with visually-hidden type-prefix, same rationale as EngineCard (Finding #9) */}
        <h3 className="mt-4 font-display text-base font-semibold text-charcoal-900">
          <span className="sr-only-prefix">Industry: </span>
          {industry.name}
        </h3>
        <p className="mt-2 text-sm text-charcoal-600 flex-1">{industry.description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
          Learn more <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      </Card>
    </Link>
  );
}

/** IndustriesGrid — Homepage Spec v2 §5 "05 — Industries Grid". */
export function IndustriesGrid() {
  return (
    <Section background="primary" ariaLabel="Industries we help">
      <Container>
        <RevealOnScroll className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {industriesGrid.headline}
          </h2>
          <p className="mt-3 text-charcoal-600">{industriesGrid.subheadline}</p>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {industriesGrid.industries.map((industry, i) => (
            <RevealOnScroll key={industry.name} delay={(i % 3) * 0.08}>
              <IndustryTile industry={industry} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
