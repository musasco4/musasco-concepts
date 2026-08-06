"use client";

import { useEffect, useRef, useState, Children, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

/**
 * Carousel — the shared mobile-only swipeable carousel used by the Growth
 * System™ Teaser and Case Study Previews sections (Homepage Spec v2 §12,
 * Findings #2/#11). Built on native CSS scroll-snap rather than a drag
 * library — smaller bundle, better scroll performance, and touch gestures
 * work for free.
 *
 * Accessibility (Spec v2 §13, Finding #2 — a real WCAG 2.1.1 gap in v1):
 * - The track is keyboard-focusable; ArrowLeft/ArrowRight move between slides.
 * - Each slide is a labeled group ("Slide 2 of 3") for screen readers.
 * - Pagination dots are real buttons with aria-selected, not decorative divs.
 * - An aria-live region announces the current slide on change.
 * - `prefers-reduced-motion` swaps smooth scrolling for an instant jump.
 */
export function Carousel({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const els = track.querySelectorAll<HTMLElement>("[data-carousel-item]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      { root: track, threshold: 0.6 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    const el = track.querySelectorAll<HTMLElement>("[data-carousel-item]")[clamped];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", inline: "start", block: "nearest" });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(active + 1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(active - 1);
    }
  };

  return (
    <div role="group" aria-roledescription="carousel" aria-label={ariaLabel}>
      <div
        ref={trackRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label={`${ariaLabel} — use arrow keys or swipe to browse`}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 px-6 -mx-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, i) => (
          <div
            key={i}
            data-carousel-item
            data-index={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${items.length}`}
            className="snap-start shrink-0 w-[85%] sm:w-[70%]"
          >
            {child}
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label={`${ariaLabel} pagination`}>
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Go to slide ${i + 1} of ${items.length}`}
            onClick={() => scrollToIndex(i)}
            className={cn(
              "size-2 rounded-full transition-colors duration-150",
              i === active ? "bg-emerald-600" : "bg-charcoal-300 hover:bg-charcoal-400"
            )}
          />
        ))}
      </div>

      <p aria-live="polite" className="sr-only">
        Slide {active + 1} of {items.length}
      </p>
    </div>
  );
}
