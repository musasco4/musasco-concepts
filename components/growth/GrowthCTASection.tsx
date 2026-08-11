import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { growthCta } from "@/lib/content/growthSystem";

export function GrowthCTASection() {
  return (
    <section className="bg-charcoal-900 py-16 lg:py-24 text-white">
      <Container className="text-center max-w-3xl mx-auto">
        <RevealOnScroll>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {growthCta.headline}
          </h2>
          <p className="mt-4 text-lg text-charcoal-200">
            {growthCta.subheadline}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={growthCta.ctaHref} size="lg" variant="primary">
              {growthCta.ctaLabel}
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}