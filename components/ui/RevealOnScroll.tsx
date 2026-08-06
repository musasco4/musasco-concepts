"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * RevealOnScroll — the standard section-reveal animation used sitewide.
 *
 * Updated this round (Homepage Polish & Interaction Improvement brief):
 * fade + 30px translateY, 0.6s duration, fires once per element on
 * viewport entry — explicitly requested values ("0.5s-0.8s," "y: 30 → 0"),
 * superseding the original Design System §8 figures (350ms/16px), which
 * read as slightly quick and subtle for the "mature, enterprise SaaS"
 * feel this round is asking for. Everything else about the component
 * (once-only trigger, reduced-motion handling) is unchanged.
 *
 * Reduced-motion handling is explicit here via useReducedMotion() — Framer
 * Motion animates through the Web Animations API, not CSS transitions, so
 * the blanket `transition-duration` override in globals.css (which protects
 * plain Tailwind `transition-*` hover/focus states) does NOT reach this
 * component on its own. Every motion-driven component must handle
 * prefers-reduced-motion itself; this is that handling, centralized once
 * here so no section re-implements it.
 */
const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const reducedVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

export function RevealOnScroll({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={reduceMotion ? reducedVariants : variants}
      transition={reduceMotion ? undefined : { delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
