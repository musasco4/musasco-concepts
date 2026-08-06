import { Star } from "lucide-react";
import { LogoCarousel } from "@/components/ui/LogoCarousel";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Marquee } from "@/components/ui/Marquee";
import { LogoMark } from "@/components/ui/LogoMark";
import { Carousel } from "@/components/ui/Carousel";
import { trustSection, type TestimonialSlot } from "@/lib/content/homepage";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < count ? "size-4 text-emerald-600" : "size-4 text-charcoal-200"}
          fill={i < count ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: TestimonialSlot }) {
  return (
    <Card variant="raised" className="p-8 text-center h-full flex flex-col items-center justify-center gap-4">
      <Stars count={item.stars} />
      <p className="text-charcoal-600 italic">&ldquo;{item.quote}&rdquo;</p>
    </Card>
  );
}

/**
 * TrustSection — redesigned this round: placeholder logo boxes replaced
 * with an infinite marquee of abstract logo marks (see `LogoMark.tsx` for
 * why these are abstract, not fake company names); the single testimonial
 * slot is now a proper stars-plus-quote-only card (no name, no company,
 * no headline, exactly as specified), ready to become a carousel the
 * moment more than one real testimonial exists.
 *
 * Statistics (the third sub-part of the "redesign the Trust section"
 * brief) live in `ResultsStrip`, not here — that's a deliberate mapping
 * decision, not an oversight: this project's stats section already
 * existed as its own homepage section before this round, and duplicating
 * the same four numbers in two places would work against "every section
 * should feel different," not for it.
 */
export function TrustSection() {
  return (
    <Section background="subtle" ariaLabel="Trusted by businesses" className="py-12 md:py-16">
      <Container>
        <RevealOnScroll className="text-center">
          <p className="text-sm text-charcoal-600">{trustSection.intro}</p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <Stars count={5} />
            <span className="text-xs font-medium text-charcoal-400">{trustSection.reviewScore.label}</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-charcoal-400">
            {trustSection.logosLabel}
          </p>
          <div className="mt-6">
            <LogoCarousel />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} className="mt-12 max-w-md mx-auto">
          {trustSection.testimonials.length > 1 ? (
            <Carousel ariaLabel="Client testimonials">
              {trustSection.testimonials.map((t, i) => (
                <TestimonialCard key={i} item={t} />
              ))}
            </Carousel>
          ) : (
            <TestimonialCard item={trustSection.testimonials[0]} />
          )}
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
