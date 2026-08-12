import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { industries, type IndustryEngine } from "@/lib/content/industries";
import { ArrowRight } from "lucide-react";

// Small pill component for engines
function EnginePill({ engine }: { engine: IndustryEngine }) {
  return (
    <span className="inline-flex items-center rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
      {engine}
    </span>
  );
}

export function IndustryShowcase() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <Container className="mb-16 text-center max-w-2xl mx-auto">
        <RevealOnScroll>
          <h2 className="font-display text-2xl font-bold tracking-tight text-charcoal-900 sm:text-3xl">
            Different Markets. Different Bottlenecks.
          </h2>
          <p className="mt-4 text-charcoal-600">
            MUSASCO adapts the Growth System to the specific realities of your industry.
          </p>
        </RevealOnScroll>
      </Container>

      <Container className="max-w-5xl mx-auto">
        <div className="relative">
          {industries.map((industry, i) => {
            const isLast = i === industries.length - 1;
            
            // Subtle incremental offset to create the "book stack" peek effect.
            // Base 6rem (mobile) / 8rem (desktop) + small step per card.
            // This ensures the previous card remains visible at the top edge.
            const topOffset = i * 1.25; // rem

            return (
              <div
                key={industry.id}
                className={
                  "relative sticky " +
                  (isLast ? "mb-0" : "mb-24 lg:mb-32")
                }
                style={{ 
                  top: `calc(6rem + ${topOffset}rem)`,
                  zIndex: i + 10 
                }}
              >
                {/* Responsive min-height to ensure all cards are equal size */}
                <article className="relative w-full rounded-2xl border border-charcoal-700 bg-charcoal-800 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden min-w-0 flex flex-col min-h-[520px] lg:min-h-[440px]">
                  
                  {/* Progress Indicator / Header */}
                  <div className="flex items-center justify-between mb-6 border-b border-charcoal-700 pb-4 shrink-0">
                    <div className="flex items-center gap-3">
                      <span className="font-stat text-sm font-bold text-emerald-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-charcoal-400">
                        / {String(industries.length).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-bold text-white uppercase tracking-wide ml-2">
                        {industry.name}
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                      {industry.engines.map((engine) => (
                        <EnginePill key={engine} engine={engine} />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 flex-1">
                    
                    {/* Left: Headline & Bottleneck */}
                    <div className="min-w-0 flex flex-col">
                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                        {industry.headline}
                      </h3>
                      
                      <div className="space-y-6 flex-1">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-500 mb-2">
                            The Bottleneck
                          </p>
                          <p className="text-sm text-charcoal-300 leading-relaxed">
                            {industry.challenge}
                          </p>
                        </div>
                        
                        {/* Mobile Engines */}
                        <div className="sm:hidden flex flex-wrap gap-2 pt-2">
                          {industry.engines.map((engine) => (
                            <EnginePill key={engine} engine={engine} />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: System & Result */}
                    <div className="min-w-0 flex flex-col justify-between">
                      <div className="space-y-6">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal-500 mb-2">
                            The System
                          </p>
                          <p className="text-sm text-charcoal-200 leading-relaxed font-medium">
                            {industry.systemSolution}
                          </p>
                        </div>

                        <div className="pt-6 border-t border-charcoal-700">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-2">
                            The Result
                          </p>
                          <p className="text-base text-white font-bold leading-snug">
                            {industry.outcome}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-8 pt-4 border-t border-charcoal-700/50 flex items-center justify-between shrink-0">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal-600">
                          MUSASCO GROWTH SYSTEM™
                        </span>
                        {!isLast && (
                          <div className="flex items-center gap-1 text-xs text-charcoal-500 animate-pulse">
                            <span>Scroll</span>
                            <ArrowRight className="size-3 rotate-90" />
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}