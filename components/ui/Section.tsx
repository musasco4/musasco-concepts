import { cn } from "@/lib/utils";

/**
 * Section — the wrapper every homepage section is built on. Owns vertical
 * rhythm (space-24 desktop / space-12 mobile, per Design System §4 spacing
 * scale) and background token so individual sections never hardcode padding
 * or background color inline (Homepage Spec v2 §8 background-token table).
 */
type Background = "primary" | "subtle" | "inverse" | "accentTint";

const backgrounds: Record<Background, string> = {
  primary: "bg-white",
  subtle: "bg-charcoal-50",
  inverse: "bg-charcoal-900 text-white",
  accentTint: "bg-emerald-50",
};

export function Section({
  children,
  background = "primary",
  className,
  id,
  ariaLabel,
}: {
  children: React.ReactNode;
  background?: Background;
  className?: string;
  id?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("py-12 md:py-16 lg:py-24", backgrounds[background], className)}
    >
      {children}
    </section>
  );
}
