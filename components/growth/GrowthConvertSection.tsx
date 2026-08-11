import { GrowthEngineDetail } from "@/components/growth/GrowthEngineDetail";
import { growthEngines } from "@/lib/content/growthSystem";

export function GrowthConvertSection() {
  return (
    <div id="convert" className="scroll-mt-20">
      <GrowthEngineDetail data={growthEngines.convert} reverse background="subtle" />
    </div>
  );
}