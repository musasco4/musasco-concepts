"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

/**
 * AnimatedNumber — the count-up animation specified in Homepage Spec v2 §11
 * (Results Strip: 0 → final value, 1200ms, easing-standard, fires once on
 * viewport entry). Respects prefers-reduced-motion by rendering the final
 * value immediately with no animation, per Design System §8/§11 — this is
 * the shared, reusable implementation so no section re-implements the logic.
 */
export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduceMotion]);

  // Reduced-motion (or not-yet-in-view) visitors see the final value directly —
  // rendered, not set via state, so no synchronous setState-in-effect is needed.
  const shown = reduceMotion ? value : inView ? display : 0;

  return (
    <span ref={ref} className="font-stat font-medium">
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
