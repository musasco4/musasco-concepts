import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { EngineStage } from "@/lib/content/growthSystem";
import { cn } from "@/lib/utils";
import { AttractSystemVisual } from "@/components/growth/visuals/AttractSystemVisual";
import { ConvertSystemVisual } from "@/components/growth/visuals/ConvertSystemVisual";
import { ScaleSystemVisual } from "@/components/growth/visuals/ScaleSystemVisual";

type GrowthEngineDetailProps = {
  data: EngineStage;
  reverse?: boolean;
  background?: "primary" | "subtle";
};

function getVisualComponent(id: string) {
  switch (id) {
    case "attract": return <AttractSystemVisual />;
    case "convert": return <ConvertSystemVisual />;
    case "scale": return <ScaleSystemVisual />;
    default: return null;
  }
}

export function GrowthEngineDetail({ data, reverse = false, background = "primary" }: GrowthEngineDetailProps) {
  return (
    <Section background={background} ariaLabel={`${data.name} Engine`}>
      <Container>
        <div className={cn(
          "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16",
          reverse && "lg:[&>*:first-child]:order-2"
        )}>
          {/* Content Column */}
          <RevealOnScroll>
            <div className="space-y-8">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                  {data.name}
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
                  {data.name} Engine
                </h2>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg border-l-4 border-red-200 bg-red-50/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-red-700">Business Problem</p>
                  <p className="mt-1 text-sm text-charcoal-900 font-medium">{data.problem}</p>
                </div>

                <div className="flex items-center justify-center lg:justify-start">
                  <ArrowRight className="size-5 text-charcoal-300 rotate-90 lg:rotate-0" aria-hidden="true" />
                </div>

                <div className="rounded-lg border-l-4 border-emerald-200 bg-emerald-50/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">The System</p>
                  <p className="mt-1 text-sm text-charcoal-900 font-medium">{data.system}</p>
                </div>

                <div className="flex items-center justify-center lg:justify-start">
                  <ArrowRight className="size-5 text-charcoal-300 rotate-90 lg:rotate-0" aria-hidden="true" />
                </div>

                <div className="rounded-lg border-l-4 border-charcoal-200 bg-charcoal-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-700">Outcome</p>
                  <p className="mt-1 text-sm text-charcoal-900 font-bold">{data.outcome}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Visual & Capabilities Column */}
          <RevealOnScroll delay={0.1}>
            <div className="space-y-8">
              {/* Sophisticated System Visual */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-charcoal-100">
                {getVisualComponent(data.id)}
              </div>

              {/* Capabilities List (Secondary) */}
              <div className="rounded-2xl border border-charcoal-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-charcoal-500 mb-4">
                  Core Capabilities
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2 text-xs text-charcoal-600">
                      <div className="size-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </Section>
  );
}