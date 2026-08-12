import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { zeeChilledPartyCaseStudy } from "@/lib/content/caseStudies/zeeChilledParty";

export function ZeeChilledPartyContext() {
  const { business, challenge } = zeeChilledPartyCaseStudy;

  return (
    <Section background="primary" ariaLabel="Business Context">
      <Container className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: The Business */}
          <RevealOnScroll>
            <div className="min-w-0">
              <h2 className="text-xs font-bold uppercase tracking-widest text-charcoal-400 mb-4">
                {business.title}
              </h2>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                {business.description}
              </p>
            </div>
          </RevealOnScroll>

          {/* Right: The Challenge */}
          <RevealOnScroll delay={0.1}>
            <div className="min-w-0">
              <h2 className="text-xs font-bold uppercase tracking-widest text-charcoal-400 mb-4">
                {challenge.title}
              </h2>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal-900 mb-4 leading-tight">
                {challenge.headline}
              </h3>
              <p className="text-base text-charcoal-600 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </Container>
    </Section>
  );
}