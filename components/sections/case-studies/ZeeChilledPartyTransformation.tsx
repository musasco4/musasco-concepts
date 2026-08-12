import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { zeeChilledPartyCaseStudy } from "@/lib/content/caseStudies/zeeChilledParty";
import { ArrowRight, ArrowDown } from "lucide-react";

export function ZeeChilledPartyTransformation() {
  const { transformation } = zeeChilledPartyCaseStudy;

  return (
    <section className="w-full bg-charcoal-900 text-white py-16 lg:py-24 overflow-hidden">
      <Container className="max-w-5xl mx-auto">
        <RevealOnScroll className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white mb-4">
            {transformation.title}
          </h2>
          <p className="text-charcoal-400 leading-relaxed">
            {transformation.intro}
          </p>
        </RevealOnScroll>

        {/* Desktop: Horizontal Flow */}
        <RevealOnScroll delay={0.1}>
          <div className="hidden lg:flex items-center justify-between gap-2">
            {transformation.flow.map((step, i) => (
              <div key={step} className="flex items-center gap-2 min-w-0">
                <div className="flex-1 min-w-0">
                  <div className="rounded-lg border border-charcoal-700 bg-charcoal-800 px-4 py-3 text-center">
                    <span className="text-sm font-bold text-white whitespace-nowrap">
                      {step}
                    </span>
                  </div>
                </div>
                {i < transformation.flow.length - 1 && (
                  <ArrowRight className="size-5 text-emerald-500 shrink-0" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Mobile: Vertical Flow */}
        <RevealOnScroll delay={0.1}>
          <div className="lg:hidden flex flex-col items-center gap-3">
            {transformation.flow.map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-3 w-full max-w-xs">
                <div className="w-full rounded-lg border border-charcoal-700 bg-charcoal-800 px-4 py-3 text-center">
                  <span className="text-sm font-bold text-white">
                    {step}
                  </span>
                </div>
                {i < transformation.flow.length - 1 && (
                  <ArrowDown className="size-5 text-emerald-500 shrink-0" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}