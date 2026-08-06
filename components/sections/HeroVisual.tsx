"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { TrendingUp, Target, BarChart3 } from "lucide-react";
import { heroMetricCards, heroWorkspace, type HeroMetricCard } from "@/lib/content/homepage";

const METRIC_ICONS: Record<HeroMetricCard["icon"], typeof TrendingUp> = {
  "trending-up": TrendingUp,
  target: Target,
  "bar-chart": BarChart3,
};

/**
 * HeroVisual — the "Growth Workspace" composition, animated per the
 * Homepage Polish brief ("make it feel like a live growth dashboard...
 * dashboard container slides/fades in, floating metric cards appear
 * individually").
 *
 * Split into its own Client Component deliberately, rather than adding
 * "use client" to all of Hero.tsx: the H1/subhead/CTA text is the part of
 * the Hero that matters most for LCP and for a visitor with JS disabled,
 * so that stays a Server Component with the original CSS-only load
 * animation. Only this decorative visual — which needs Framer Motion's
 * whileInView/stagger — pays the client-JS cost.
 *
 * Runs on page load, not scroll-trigger (animate, not whileInView) —
 * the Hero is always in the initial viewport, so a viewport-trigger would
 * never fire correctly, same reasoning as the original CSS approach it
 * replaces.
 */
export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      };

  const cardVariants: Variants = reduceMotion
    ? { hidden: { opacity: 1, scale: 1 }, visible: { opacity: 1, scale: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.92, y: 12 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
      };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto"
      aria-hidden="true"
    >
      {/* Website preview — flat browser chrome, no 3D perspective, per Design System §14 mockup style */}
      <div className="rounded-2xl bg-charcoal-800 shadow-2xl overflow-hidden border border-white/10">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-charcoal-900 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="ml-3 rounded bg-white/5 px-3 py-1 text-[11px] text-charcoal-400">
            {heroWorkspace.browserLabel}
          </span>
        </div>
        <div className="p-6 space-y-3">
          <div className="h-3 w-2/3 rounded-full bg-white/15" />
          <div className="h-3 w-1/2 rounded-full bg-white/10" />
          {/* Subtle "live" pulse on the chart placeholder — a single slow,
              low-amplitude opacity breathe, not a bounce or spin, to read
              as "this is live data," not as decoration. Disabled under
              reduced motion like everything else here. */}
          <motion.div
            className="mt-4 h-24 rounded-lg bg-emerald-400/10 border border-emerald-400/20"
            animate={reduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
            transition={reduceMotion ? undefined : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="h-8 w-32 rounded-md bg-emerald-600" />
        </div>
      </div>

      {/* Floating growth-indicator cards — staggered entrance, each
          appearing individually rather than all at once. Qualitative
          trend direction, not a specific number, per "no fake claims or
          fabricated numbers." */}
      <motion.div
        className="absolute -left-4 -top-6 sm:-left-8 rounded-xl bg-white text-charcoal-900 px-4 py-3 shadow-lg max-w-[80%] sm:max-w-none"
        variants={cardVariants}
        transition={{ delay: 0.5 }}
      >
        <MetricCardContent card={heroMetricCards[0]} />
      </motion.div>
      <motion.div
        className="absolute -right-3 top-1/3 sm:-right-8 rounded-xl bg-white text-charcoal-900 px-4 py-3 shadow-lg max-w-[75%] sm:max-w-none"
        variants={cardVariants}
        transition={{ delay: 0.65 }}
      >
        <MetricCardContent card={heroMetricCards[1]} />
      </motion.div>
      <motion.div
        className="absolute -bottom-6 left-6 sm:left-12 rounded-xl bg-white text-charcoal-900 px-4 py-3 shadow-lg max-w-[75%] sm:max-w-none"
        variants={cardVariants}
        transition={{ delay: 0.8 }}
      >
        <MetricCardContent card={heroMetricCards[2]} />
      </motion.div>
    </motion.div>
  );
}

function MetricCardContent({ card }: { card: HeroMetricCard }) {
  const Icon = METRIC_ICONS[card.icon];
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs font-medium text-charcoal-500">{card.label}</span>
        <span className="block text-sm font-bold text-emerald-600">{card.indicator}</span>
      </span>
    </div>
  );
}
