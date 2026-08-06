"use client";

import { useReducedMotion } from "framer-motion";
import { Children } from "react";

/**
 * Marquee — infinite horizontal scroll, used for the Trust Section's logo
 * row. Pure CSS animation (translateX loop via a keyframe defined in
 * globals.css), not Framer Motion — a continuous marquee is exactly the
 * kind of animation CSS already handles natively and efficiently
 * (GPU-accelerated transform, no JS driving every frame), so reaching for
 * Framer Motion here would be the wrong tool, not the safer default.
 *
 * Content is duplicated once so the loop is seamless (when the first copy
 * has scrolled fully out of view, the second copy is in the exact
 * position the first started in). Pauses on hover — a visitor curious
 * enough to look closely shouldn't have to chase a moving target.
 *
 * Reduced motion: renders as a static, wrapped row instead of a moving
 * one — a marquee is motion by definition, so there's no meaningful
 * "reduced" version of it; the honest accessible fallback is to stop it
 * entirely.
 */
export function Marquee({ children, ariaLabel }: { children: React.ReactNode; ariaLabel: string }) {
  const reduceMotion = useReducedMotion();
  const items = Children.toArray(children);

  if (reduceMotion) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-8" role="group" aria-label={ariaLabel}>
        {items}
      </div>
    );
  }

  return (
    <div
      className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      role="group"
      aria-label={ariaLabel}
    >
      <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]">
        <div className="flex items-center gap-16" aria-hidden="false">
          {items}
        </div>
        <div className="flex items-center gap-16" aria-hidden="true">
          {items}
        </div>
      </div>
    </div>
  );
}
