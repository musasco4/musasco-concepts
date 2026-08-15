"use client";

import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock3,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const CAL_15_MIN = "https://cal.com/musasco-rgnwjo/15min";
const CAL_30_MIN = "https://cal.com/musasco-rgnwjo/30min";

export function CalBookingWidget() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      {/* LEFT — Explanation */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
          LET&apos;S TALK GROWTH
        </p>

        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
          Ready to talk about growth?
        </h2>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-600">
          Tell us where you&apos;re trying to go, what&apos;s currently
          holding your business back, and we&apos;ll help you identify
          the most practical next step.
        </p>

        <div className="mt-8">
          <p className="mb-4 text-sm font-semibold text-charcoal-900">
            What happens on the call
          </p>

          <div className="space-y-4">
            {[
              "Understand your current business and growth situation",
              "Identify the biggest opportunity or bottleneck",
              "Discuss practical next steps for your business",
              "Recommend the right MUSASCO solution if we're a good fit",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />

                <span className="text-sm leading-relaxed text-charcoal-600">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-5 border-t border-charcoal-100 pt-6">
          <div className="flex items-center gap-2 text-sm text-charcoal-500">
            <Clock3 className="size-4 text-emerald-600" />
            15–30 minutes
          </div>

          <div className="flex items-center gap-2 text-sm text-charcoal-500">
            <Video className="size-4 text-emerald-600" />
            Video call
          </div>

          <div className="flex items-center gap-2 text-sm text-charcoal-500">
            <Calendar className="size-4 text-emerald-600" />
            Choose a time
          </div>
        </div>
      </div>

      {/* RIGHT — Meeting Selection */}
      <div className="rounded-2xl border border-charcoal-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-7">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            BOOK A TIME
          </p>

          <h3 className="mt-2 font-display text-2xl font-bold text-charcoal-900">
            Choose your conversation
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
            Pick the option that best matches what you need right now.
          </p>
        </div>

        <div className="space-y-4">
          {/* 15 MINUTE CALL */}
          <a
            href={CAL_15_MIN}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full rounded-xl border border-charcoal-200 bg-white p-5 text-left transition-all duration-200 hover:border-emerald-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                <Clock3
                  className="size-5 text-emerald-600"
                  aria-hidden="true"
                />
              </div>

              <ArrowRight
                className="mt-2 size-5 shrink-0 text-charcoal-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-emerald-600"
                aria-hidden="true"
              />
            </div>

            <h4 className="mt-5 font-display text-lg font-bold text-charcoal-900">
              15 min Growth Call
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
              A quick conversation to understand your situation, answer
              initial questions, and determine the best next step.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Quick conversation
              </span>

              <span className="text-sm font-semibold text-emerald-700">
                Book 15 min →
              </span>
            </div>
          </a>

          {/* 30 MINUTE CALL */}
          <a
            href={CAL_30_MIN}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full rounded-xl border-2 border-emerald-600 bg-emerald-50/40 p-5 text-left transition-all duration-200 hover:bg-emerald-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <div className="absolute -top-3 right-5 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Recommended
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white">
                <Calendar
                  className="size-5 text-emerald-600"
                  aria-hidden="true"
                />
              </div>

              <ArrowRight
                className="mt-2 size-5 shrink-0 text-emerald-500 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>

            <h4 className="mt-5 font-display text-lg font-bold text-charcoal-900">
              30 min Growth Strategy Call
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
              A deeper conversation about your business, current growth
              challenges, and the opportunities worth prioritising.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Deeper discussion
              </span>

              <span className="text-sm font-semibold text-emerald-700">
                Book 30 min →
              </span>
            </div>
          </a>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-charcoal-400">
          No pressure. No obligation. Just a conversation about where
          your business can go next.
        </p>
      </div>
    </div>
  );
}