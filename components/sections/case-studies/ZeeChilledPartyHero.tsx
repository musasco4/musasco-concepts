import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { zeeChilledPartyCaseStudy } from "@/lib/content/caseStudies/zeeChilledParty";

export function ZeeChilledPartyHero() {
  const { hero } = zeeChilledPartyCaseStudy;

  return (
    <section id="zee-chilled-party-hero" className="relative w-full bg-charcoal-900 text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-faint opacity-[0.03] pointer-events-none" aria-hidden="true" />
      
      {/* Emerald Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10 max-w-4xl mx-auto">
        <RevealOnScroll>
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">
            {hero.eyebrow} • {hero.category}
          </p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
            {hero.title}
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="mt-6 text-lg text-charcoal-300 leading-relaxed max-w-2xl">
            {hero.subtitle}
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}