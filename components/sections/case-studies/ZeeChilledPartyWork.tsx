import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { zeeChilledPartyCaseStudy } from "@/lib/content/caseStudies/zeeChilledParty";

export function ZeeChilledPartyWork() {
  const { work } = zeeChilledPartyCaseStudy;

  return (
    <Section background="subtle" ariaLabel="Work Performed">
      <Container className="max-w-4xl mx-auto">
        <RevealOnScroll className="mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 mb-4">
            {work.title}
          </h2>
          <p className="text-lg text-charcoal-600 leading-relaxed">
            {work.intro}
          </p>
        </RevealOnScroll>

        <div className="space-y-8">
          {work.items.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.05}>
              <div className="flex gap-6 min-w-0">
                <span className="font-stat text-xl font-bold text-emerald-600 shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-bold text-charcoal-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-charcoal-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}