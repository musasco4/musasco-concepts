import { Star } from "lucide-react";
import { LogoCarousel } from "@/components/ui/LogoCarousel";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
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
      {item.stars > 0 && <Stars count={item.stars} />}
      <p className="text-charcoal-700 text-lg leading-relaxed max-w-lg">
        &ldquo;{item.quote}&rdquo;
      </p>
      {item.author && (
        <p className="text-sm font-semibold text-charcoal-900">
          {item.author}
          {item.role && <span className="text-charcoal-500 font-normal"> — {item.role}</span>}
        </p>
      )}
    </Card>
  );
}

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
            <Carousel ariaLabel="Client perspectives">
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