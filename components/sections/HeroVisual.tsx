"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  HeartPulse,
  Layers3,
  Users,
  Target,
  Radio,
} from "lucide-react";

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full min-w-0"
      aria-hidden="true"
    >
      {/* =========================================================
          BACKGROUND NETWORK / GRID
      ========================================================= */}

      <div className="pointer-events-none absolute -inset-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="absolute left-[10%] top-[35%] size-40 rounded-full bg-emerald-500/10 blur-[80px]" />
        <div className="absolute right-[5%] top-[20%] size-48 rounded-full bg-emerald-500/10 blur-[100px]" />

        {/* Decorative connection lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-40"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0 300 C120 300 120 240 220 240 S350 330 450 280 S620 210 800 250"
            fill="none"
            stroke="rgba(18,131,95,0.45)"
            strokeWidth="1"
          />

          <path
            d="M40 430 C160 430 170 350 270 350 S420 420 520 360 S680 310 800 350"
            fill="none"
            stroke="rgba(18,131,95,0.3)"
            strokeWidth="1"
          />

          <circle cx="220" cy="240" r="3" fill="#1ca377" />
          <circle cx="450" cy="280" r="3" fill="#1ca377" />
          <circle cx="620" cy="210" r="3" fill="#1ca377" />
          <circle cx="270" cy="350" r="3" fill="#1ca377" />
          <circle cx="520" cy="360" r="3" fill="#1ca377" />
        </svg>
      </div>

      {/* =========================================================
          MAIN DASHBOARD
      ========================================================= */}

      <div className="relative z-10 w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#101314]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5 sm:py-4">
          <div className="flex min-w-0 items-center gap-2">
            <span
              className={[
                "size-2 shrink-0 rounded-full bg-emerald-400",
                !reduceMotion ? "animate-pulse" : "",
              ].join(" ")}
            />

            <span className="truncate text-[10px] font-bold tracking-[0.14em] text-white sm:text-xs">
              MUSASCO GROWTH INTELLIGENCE
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 text-[9px] text-charcoal-400 sm:text-[10px]">
            <span>Live</span>
            <span className="size-1.5 rounded-full bg-emerald-400" />
            <span className="hidden sm:inline">System Active</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="space-y-3 p-3 sm:space-y-4 sm:p-4">
          {/* =====================================================
              TOP ROW
          ===================================================== */}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <DashboardCard
              title="Growth Score"
              icon={<Activity className="size-4" />}
            >
              <div className="flex items-end justify-between gap-2">
                <div>
                  <span className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    82
                  </span>
                  <span className="ml-1 text-xs text-charcoal-500">
                    /100
                  </span>
                </div>

                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
                  <ArrowUpRight className="size-3" />
                  12%
                </span>
              </div>

              <MiniLineChart />
            </DashboardCard>

            <DashboardCard
              title="Pipeline Health"
              icon={<HeartPulse className="size-4" />}
            >
              <div className="mt-1 flex items-center justify-between">
                <span className="text-xl font-semibold text-white sm:text-2xl">
                  Healthy
                </span>

                <HeartPulse className="size-5 text-emerald-400" />
              </div>

              <div className="mt-4 grid grid-cols-5 gap-1.5">
                {[1, 1, 1, 1, 0].map((active, index) => (
                  <span
                    key={index}
                    className={[
                      "h-2 rounded-full",
                      active
                        ? "bg-emerald-400"
                        : "bg-charcoal-700",
                    ].join(" ")}
                  />
                ))}
              </div>
            </DashboardCard>

            <DashboardCard
              title="Opportunity Score"
              icon={<Target className="size-4" />}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-white sm:text-2xl">
                  High
                </span>

                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wide text-emerald-400">
                  Prioritised
                </span>
              </div>

              <p className="mt-3 text-[10px] leading-relaxed text-charcoal-400">
                Clear next growth lever identified
              </p>
            </DashboardCard>
          </div>

          {/* =====================================================
              MIDDLE ROW
          ===================================================== */}

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Customer Journey */}
            <DashboardCard title="Customer Journey">
              <p className="text-[10px] text-charcoal-400">
                Conversion flow connected
              </p>

              <div className="mt-6 flex items-center justify-between gap-2">
                <JourneyNode label="Visit" />
                <JourneyLine />
                <JourneyNode label="Enquire" />
                <JourneyLine />
                <JourneyNode label="Customer" active />
              </div>
            </DashboardCard>

            {/* Revenue Trend */}
            <DashboardCard title="Revenue Trend">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-charcoal-400">
                    This month
                  </p>

                  <p className="mt-1 text-2xl font-semibold text-white">
                    ₦24.8M
                  </p>
                </div>

                <span className="text-[10px] font-semibold text-emerald-400">
                  ↗ 18%
                </span>
              </div>

              <RevenueChart reduceMotion={reduceMotion} />
            </DashboardCard>
          </div>

          {/* =====================================================
              BOTTOM ROW
          ===================================================== */}

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {/* Campaign Health */}
            <DashboardCard title="Campaign Health">
              <div className="flex items-center gap-2">
                <span
                  className={[
                    "size-2 rounded-full bg-emerald-400",
                    !reduceMotion ? "animate-pulse" : "",
                  ].join(" ")}
                />

                <span className="text-xs font-medium text-white">
                  Optimising
                </span>
              </div>

              <div className="mt-4">
                <p className="text-[9px] text-charcoal-500">
                  ROAS
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  3.6x
                </p>
              </div>

              <div className="mt-3 h-1 rounded-full bg-charcoal-700">
                <div className="h-full w-[78%] rounded-full bg-emerald-400" />
              </div>
            </DashboardCard>

            {/* Tracking */}
            <DashboardCard title="Tracking">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-white">
                  Connected
                </span>
              </div>

              <p className="mt-3 text-[9px] leading-relaxed text-charcoal-400">
                All systems tracking
              </p>

              <Layers3 className="mt-4 size-5 text-charcoal-400" />
            </DashboardCard>

            {/* CRM */}
            <DashboardCard title="CRM">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400" />

                <span className="text-xs font-medium text-white">
                  Active
                </span>
              </div>

              <p className="mt-3 text-[9px] text-charcoal-400">
                2,489 contacts
              </p>

              <Users className="mt-4 size-5 text-charcoal-400" />
            </DashboardCard>

            {/* Traffic Sources */}
            <DashboardCard title="Traffic Sources">
              <div className="flex items-center gap-3">
                <TrafficDonut />

                <div className="min-w-0 space-y-1">
                  <TrafficRow label="Google" value="42%" />
                  <TrafficRow label="Meta" value="32%" />
                  <TrafficRow label="Organic" value="16%" />
                  <TrafficRow label="Referral" value="10%" />
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ===============================================================
   DASHBOARD CARD
=============================================================== */

function DashboardCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-white/[0.08] bg-[#15191a] p-3.5 sm:p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-charcoal-400">
          {title}
        </span>

        {icon && (
          <span className="shrink-0 text-emerald-400">
            {icon}
          </span>
        )}
      </div>

      <div className="mt-3">{children}</div>
    </div>
  );
}

/* ===============================================================
   MINI LINE CHART
=============================================================== */

function MiniLineChart() {
  return (
    <div className="relative mt-3 h-8 overflow-hidden">
      <svg
        viewBox="0 0 240 40"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="growthChartFill"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#12835f"
              stopOpacity="0.35"
            />
            <stop
              offset="100%"
              stopColor="#12835f"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <path
          d="M0 34 C20 28 28 32 42 29 S60 34 74 27 S92 31 108 23 S126 28 142 20 S162 26 178 15 S196 22 210 10 S226 13 240 4 V40 H0 Z"
          fill="url(#growthChartFill)"
        />

        <path
          d="M0 34 C20 28 28 32 42 29 S60 34 74 27 S92 31 108 23 S126 28 142 20 S162 26 178 15 S196 22 210 10 S226 13 240 4"
          fill="none"
          stroke="#1ca377"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

/* ===============================================================
   REVENUE CHART
=============================================================== */

function RevenueChart({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  return (
    <div className="relative mt-3 h-24 overflow-hidden">
      <svg
        viewBox="0 0 500 130"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="revenueFill"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#12835f"
              stopOpacity="0.3"
            />
            <stop
              offset="100%"
              stopColor="#12835f"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <path
          d="M0 110 C20 96 35 104 52 94 S78 105 96 87 S118 98 137 82 S160 92 179 74 S205 90 225 67 S246 79 266 61 S286 76 305 53 S326 67 345 48 S365 60 386 39 S407 51 428 31 S452 39 475 15 S490 24 500 8 V130 H0 Z"
          fill="url(#revenueFill)"
        />

        <path
          d="M0 110 C20 96 35 104 52 94 S78 105 96 87 S118 98 137 82 S160 92 179 74 S205 90 225 67 S246 79 266 61 S286 76 305 53 S326 67 345 48 S365 60 386 39 S407 51 428 31 S452 39 475 15 S490 24 500 8"
          fill="none"
          stroke="#1ca377"
          strokeWidth="3"
        />

        <line
          x1="0"
          y1="120"
          x2="500"
          y2="120"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />

        <circle
          cx="490"
          cy="24"
          r="5"
          fill="#1ca377"
          className={!reduceMotion ? "animate-pulse" : ""}
        />
      </svg>
    </div>
  );
}

/* ===============================================================
   CUSTOMER JOURNEY
=============================================================== */

function JourneyNode({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={[
        "flex min-w-0 flex-1 items-center justify-center rounded-lg border px-2 py-2",
        active
          ? "border-emerald-500/40 bg-emerald-500/10"
          : "border-white/[0.06] bg-white/[0.02]",
      ].join(" ")}
    >
      <span
        className={[
          "truncate text-[9px] font-medium sm:text-[10px]",
          active ? "text-emerald-300" : "text-charcoal-300",
        ].join(" ")}
      >
        {label}
      </span>
    </div>
  );
}

function JourneyLine() {
  return (
    <div className="relative h-px w-4 shrink-0 bg-charcoal-600 sm:w-8">
      <span className="absolute right-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-emerald-400" />
    </div>
  );
}

/* ===============================================================
   TRAFFIC DONUT
=============================================================== */

function TrafficDonut() {
  return (
    <div className="relative size-16 shrink-0 sm:size-20">
      <svg
        viewBox="0 0 100 100"
        className="size-full -rotate-90"
      >
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="#2b2b2b"
          strokeWidth="12"
        />

        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="#1ca377"
          strokeWidth="12"
          strokeDasharray="90 214"
          strokeLinecap="round"
        />

        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="#22a6a6"
          strokeWidth="12"
          strokeDasharray="68 214"
          strokeDashoffset="-94"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <Radio className="size-4 text-charcoal-400" />
      </div>
    </div>
  );
}

/* ===============================================================
   TRAFFIC ROW
=============================================================== */

function TrafficRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-2 text-[8px] sm:text-[9px]">
      <div className="flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-emerald-400" />
        <span className="text-charcoal-400">{label}</span>
      </div>

      <span className="font-medium text-charcoal-300">
        {value}
      </span>
    </div>
  );
}