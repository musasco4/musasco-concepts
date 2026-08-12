import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { resultsHero } from "@/lib/content/results";
import { ArrowRight } from "lucide-react";

export function ResultsHero() {
  return (
    <section id="results-hero" className="relative w-full bg-charcoal-900 text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-faint opacity-[0.03] pointer-events-none" aria-hidden="true" />
      
      {/* Emerald Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10 text-center max-w-3xl mx-auto">
        <RevealOnScroll>
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">
            {resultsHero.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            {resultsHero.headline}
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="mt-6 text-lg text-charcoal-300 leading-relaxed">
            {resultsHero.subheadline}
          </p>
        </RevealOnScroll>
        
        {/* System Indicator */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-400">
            <span className="text-emerald-500">Visibility</span>
            <ArrowRight className="size-3" />
            <span className="text-emerald-500">Demand</span>
            <ArrowRight className="size-3" />
            <span className="text-emerald-500">Growth</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <p className="mt-8 text-sm text-charcoal-500 font-medium">
            {resultsHero.supportingStatement}
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}