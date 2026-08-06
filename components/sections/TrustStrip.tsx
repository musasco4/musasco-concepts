import { Container } from "@/components/ui/Container";
import { trustStrip } from "@/lib/content/homepage";

/**
 * TrustStrip — Homepage Spec v2 §5 "01b — Trust Strip" (NEW in v2, Finding #3).
 *
 * Deliberately the plainest component on the page: no card, no icon, no
 * animation. Per Spec v2's rationale, its entire job is to be a quiet,
 * always-true credibility line that doesn't depend on the Results/Case
 * Study data that's currently placeholder — adding visual weight here would
 * overstate what a single sentence is supposed to do.
 *
 * Shares the Hero's bg-charcoal-900 background with no visual seam between
 * them, per Spec v2 §8's revised background table.
 */
export function TrustStrip() {
  return (
    <div className="bg-charcoal-900 pb-10 lg:pb-14">
      <Container>
        <p className="text-center text-sm text-charcoal-400">{trustStrip.text}</p>
      </Container>
    </div>
  );
}
