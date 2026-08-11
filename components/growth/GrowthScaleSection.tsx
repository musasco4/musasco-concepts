import { GrowthEngineDetail } from "@/components/growth/GrowthEngineDetail";
import { growthEngines } from "@/lib/content/growthSystem";

export function GrowthScaleSection() {
  return (
    <div id="scale" className="scroll-mt-20">
      <GrowthEngineDetail data={growthEngines.scale} background="primary" />
    </div>
  );
}