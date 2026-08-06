import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Carousel } from "@/components/ui/Carousel";
import { PORTFOLIO_SHOWCASE, caseStudyPreviews, type PortfolioItem } from "@/lib/content/homepage";

/**
 * PortfolioCard — Industry / Challenge / Solution / Outcome structure,
 * approved this round. Every field currently renders a bracketed
 * placeholder string (e.g. "[Industry — added at case study launch]")
 * rather than an invented-but-plausible-looking claim — the distinction
 * matters: a placeholder that reads as a placeholder can't be mistaken
 * for a real case study; a well-written fake one could.
 */
function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Card variant="raised" hover className="h-full flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          loading="lazy"
          sizes="(min-width: 768px) 33vw, 85vw"
          className="object-cover"
        />
      </div>
      <dl className="p-6 flex flex-col gap-3 flex-1">
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-400">Industry</dt>
          <dd className="mt-0.5 text-sm text-charcoal-500 italic">{item.industry}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-400">Challenge</dt>
          <dd className="mt-0.5 text-sm text-charcoal-500 italic">{item.challenge}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-400">Solution</dt>
          <dd className="mt-0.5 text-sm text-charcoal-500 italic">{item.solution}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-400">Outcome</dt>
          <dd className="mt-0.5 text-sm text-charcoal-500 italic">{item.outcome}</dd>
        </div>
      </dl>
    </Card>
  );
}

/**
 * CaseStudyPreviews — "Portfolio" per this round's approved structure.
 * Renders PORTFOLIO_SHOWCASE, which today is 100% placeholder content by
 * design ("prepare the structure... do not invent results"). No
 * conditional null-rendering here, unlike the Results Strip governance
 * pattern — a card whose every field visibly reads "[added at case study
 * launch]" makes no claim at all, so there's nothing to gate: it's
 * structurally impossible for this component to accidentally ship a
 * fabricated result.
 */
export function CaseStudyPreviews() {
  return (
    <Section background="subtle" ariaLabel="Portfolio" id="work">
      <Container>
        <RevealOnScroll className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {caseStudyPreviews.headline}
          </h2>
          <p className="mt-3 text-charcoal-600">{caseStudyPreviews.subheadline}</p>
        </RevealOnScroll>

        <div className="mt-10 hidden md:grid md:grid-cols-3 md:gap-6">
          {PORTFOLIO_SHOWCASE.map((item, i) => (
            <RevealOnScroll key={item.src} delay={i * 0.1}>
              <PortfolioCard item={item} />
            </RevealOnScroll>
          ))}
        </div>
        <div className="mt-8 md:hidden">
          <Carousel ariaLabel="Portfolio">
            {PORTFOLIO_SHOWCASE.map((item) => (
              <PortfolioCard key={item.src} item={item} />
            ))}
          </Carousel>
        </div>
      </Container>
    </Section>
  );
}
