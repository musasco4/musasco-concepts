import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { pricingHero } from "@/lib/content/pricing";

export function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal-900 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-charcoal-900 to-charcoal-900" />
      
      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {pricingHero.headline}
        </h1>
        <p className="mt-6 text-lg text-charcoal-200 sm:text-xl max-w-2xl mx-auto">
          {pricingHero.subheadline}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg" className="w-full sm:w-auto">
            {pricingHero.ctaPrimaryLabel}
          </Button>
          <Button href="/contact" variant="ghostOnDark" size="lg" className="w-full sm:w-auto">
            {pricingHero.ctaSecondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}