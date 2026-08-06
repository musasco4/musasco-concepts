import { cn } from "@/lib/utils";

/**
 * Badge — Design System §5 "Badges". Status/emphasis indicator, distinct
 * from Tag (category label) and Pill (toggle control) — see Design System
 * §5 for the full rationale on why these three are separate components.
 *
 * Solid variant is intentionally rare: the Design System caps it at one
 * visible Solid badge per view to preserve its signal value. Homepage v2
 * uses it exactly once — the Growth Blueprint Callout's "Recommended First Step".
 *
 * `whitespace-nowrap` is load-bearing, not cosmetic: the Blueprint
 * Callout positions this badge with a `-translate-y-1/2` transform,
 * which is computed against the badge's own rendered height. Without
 * nowrap, "RECOMMENDED FIRST STEP" could wrap to two lines at narrow
 * viewports, changing that height and shifting the vertical centering
 * point — the exact cause of the "badge doesn't sit perfectly above the
 * card on every screen size" bug this fixes.
 */
export function Badge({
  children,
  variant = "solid",
  className,
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-full px-4 h-7 text-xs font-semibold uppercase tracking-wide font-body",
        variant === "solid"
          ? "bg-emerald-700 text-white"
          : "border border-emerald-600 text-emerald-600 bg-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
