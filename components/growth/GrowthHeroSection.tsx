import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { growthHero } from "@/lib/content/growthSystem";
import { GrowthHeroVisual } from "@/components/growth/visuals/GrowthHeroVisual";

export function GrowthHeroSection() {
  return (
    <section id="growth-hero" className="relative overflow-hidden bg-charcoal-900 text-white pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Subtle Technical Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      {/* Emerald Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy Column */}
          <div className="max-w-2xl">
            <RevealOnScroll>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {growthHero.headline}
              </h1>
              <p className="mt-6 text-lg text-charcoal-300 sm:text-xl">
                {growthHero.subheadline}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button href={growthHero.ctaHref} size="lg" variant="primary">
                  {growthHero.ctaLabel}
                </Button>
              </div>
            </RevealOnScroll>
          </div>

          {/* Visual Column */}
          <RevealOnScroll delay={0.2}>
            <GrowthHeroVisual />
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}