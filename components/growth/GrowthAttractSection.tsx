import { GrowthEngineDetail } from "@/components/growth/GrowthEngineDetail";
import { growthEngines } from "@/lib/content/growthSystem";

export function GrowthAttractSection() {
  return (
    <div id="attract" className="scroll-mt-20">
      <GrowthEngineDetail data={growthEngines.attract} background="primary" />
    </div>
  );
}