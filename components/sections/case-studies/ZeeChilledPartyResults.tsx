import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { zeeChilledPartyCaseStudy } from "@/lib/content/caseStudies/zeeChilledParty";
import { CheckCircle2 } from "lucide-react";

export function ZeeChilledPartyResults() {
  const { results } = zeeChilledPartyCaseStudy;

  return (
    <Section background="primary" ariaLabel="Results">
      <Container className="max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-6">
            {results.title}
          </h2>
          
          {/* Large Central Metric */}
          <div className="mb-8">
            <p className="font-stat text-6xl sm:text-7xl lg:text-8xl font-bold text-charcoal-900 tracking-tight">
              40%+
            </p>
            <p className="mt-2 text-xl font-bold text-charcoal-700 uppercase tracking-wide">
              Revenue Growth
            </p>
          </div>

          <p className="text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto mb-12">
            {results.description}
          </p>
        </RevealOnScroll>

        {/* Outcome Highlights */}
        <RevealOnScroll delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {results.highlights.map((highlight) => (
              <div 
                key={highlight} 
                className="flex items-center gap-3 rounded-xl border border-charcoal-200 bg-white p-4 shadow-sm text-left min-w-0"
              >
                <CheckCircle2 className="size-5 text-emerald-600 shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-charcoal-900">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}