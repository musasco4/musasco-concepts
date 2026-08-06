import { cn } from "@/lib/utils";

/**
 * LogoMark — abstract, geometric placeholder marks for the Trust Section's
 * logo marquee. Deliberately NOT real company logos or names — no real
 * client has been disclosed for display yet, and the project's standing
 * rule (see CLAUDE.md, "no fabricated companies") applies exactly as much
 * to a logo as it does to a testimonial or a stat.
 *
 * These read as generic brand marks (simple geometric compositions, one
 * per variant) rather than boxes labeled "Client Logo" — a genuine visual
 * upgrade over that — while staying honest that they're placeholders: an
 * abstract mark with no name attached can't be mistaken for a real
 * company's logo the way a plausible fake name could.
 */
const VARIANTS = [
  (p: { className?: string }) => (
    <svg viewBox="0 0 32 32" className={p.className} aria-hidden="true">
      <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  (p: { className?: string }) => (
    <svg viewBox="0 0 32 32" className={p.className} aria-hidden="true">
      <rect x="7" y="7" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  ),
  (p: { className?: string }) => (
    <svg viewBox="0 0 32 32" className={p.className} aria-hidden="true">
      <path d="M16 6 L26 24 L6 24 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  (p: { className?: string }) => (
    <svg viewBox="0 0 32 32" className={p.className} aria-hidden="true">
      <line x1="7" y1="16" x2="25" y2="16" stroke="currentColor" strokeWidth="2" />
      <circle cx="7" cy="16" r="3" fill="currentColor" />
      <circle cx="25" cy="16" r="3" fill="currentColor" />
    </svg>
  ),
  (p: { className?: string }) => (
    <svg viewBox="0 0 32 32" className={p.className} aria-hidden="true">
      <rect x="6" y="13" width="8" height="8" fill="currentColor" />
      <rect x="18" y="13" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  (p: { className?: string }) => (
    <svg viewBox="0 0 32 32" className={p.className} aria-hidden="true">
      <path d="M8 24 L16 8 L24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="8" r="2" fill="currentColor" />
    </svg>
  ),
] as const;

export function LogoMark({ variant, className }: { variant: number; className?: string }) {
  const Mark = VARIANTS[variant % VARIANTS.length];
  return <Mark className={cn("size-8", className)} />;
}
