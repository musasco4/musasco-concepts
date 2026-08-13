import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/lib/content/homepage";
import { HeroVisual } from "@/components/sections/HeroVisual";

export function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="bg-charcoal-900 text-white overflow-hidden">
      <Container className="py-16 lg:py-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="text-center lg:text-left">
          <p className="animate-hero-in font-body text-sm font-bold tracking-wide text-emerald-400 [animation-delay:0ms]">
            {hero.eyebrow}
          </p>
          <h1 className="animate-hero-in mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl [animation-delay:80ms]">
            {hero.headline}
          </h1>
          <p className="animate-hero-in mt-6 max-w-lg text-lg text-charcoal-200 mx-auto lg:mx-0 sm:text-xl [animation-delay:160ms]">
            {hero.subheadline}
          </p>
          <div className="animate-hero-in mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start [animation-delay:240ms]">
            <Button href="/pricing" size="lg">
              {hero.ctaPrimaryLabel}
            </Button>
            <Button href="/growth-audit" variant="ghostOnDark" size="lg">
              {hero.ctaSecondaryLabel}
            </Button>
          </div>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}