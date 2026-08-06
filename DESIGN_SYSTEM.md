# DESIGN_SYSTEM.md

The visual language implemented in this codebase. Every value below is
taken directly from `app/globals.css` (`@theme` block) — if this document
and the code ever disagree, the code is correct and this document is
stale; fix the document, not the other way around.

## Colors
Two color families. No separate gray scale — Charcoal covers every
neutral need from near-black to near-white.

**Charcoal** (`--color-charcoal-{50-950}`): `950 #0e0e0e` · `900 #1c1c1c`
(primary text/dark backgrounds) · `800 #2b2b2b` · `700 #3d3d3d` ·
`600 #545454` · `500 #6e6e6e` · `400 #8c8c8c` · `300 #adadad` ·
`200 #d0d0d0` · `100 #e8e8e8` · `50 #f5f5f5`.

**Emerald** (`--color-emerald-{50-900}`): `900 #073b29` · `800 #0a4f37` ·
`700 #0c5c40` (small-text-safe accent — see contrast note below) ·
`600 #0e6b4e` (primary brand accent) · `500 #12835f` · `400 #1ca377` ·
`300 #4fc098` · `200 #94dcc0` · `100 #d2f0e4` · `50 #eefaf5`.

**Semantic:** Success reuses Emerald-600/50 (growth = success is
thematically the same idea). Warning `#b7791f` / `#fcf3e4`. Error
`#c0392b` / `#fbeae8`. Info `#2563eb` / `#eaf1fe`.

**Contrast note:** Emerald-600 on white is borderline AA for small text.
Use Emerald-700 wherever text is small (this is why `Badge.tsx`'s solid
variant uses `emerald-700`, not `emerald-600` — deliberate, not a typo).

## Typography
Three font families, all loaded via `next/font/google` in `app/layout.tsx`:
- **Manrope** (`--font-manrope`) — headings and display text. Weights 500–800.
- **Inter** (`--font-inter`) — body and UI text. Weights 400–600.
- **IBM Plex Mono** (`--font-plex-mono`) — numeric/stat accent only
  (`AnimatedNumber`'s rendered value). Weight 500 only.

Type scale (desktop / mobile): Display 64/40px · H1 48/32px · H2 36/28px ·
H3 24/20px · H4 20/18px · Body Large 18/17px · Body Base 16px ·
Body Small 14px · Caption 12px. Headings use `-0.02em` to `-0.015em`
letter-spacing; body text uses `0em`; overline/labels use `+0.08em` with
uppercase.

## Spacing System
Strict 4px base unit, expressed as Tailwind's default spacing scale
(which is already 4px-based) — no arbitrary pixel values in component
code. Section-level vertical rhythm: `py-16 md:py-24` typical, `Section.tsx`
owns this so individual sections never hardcode padding.

## Grid & Containers
`Container.tsx` implements two widths: **1440px max** (default, the
standard content container) and **800px max** (`narrow` prop, for
long-form reading content — used by Problem Statement and the Guarantee
Block). Margins: `px-6 md:px-8 lg:px-16`.

## Border Radius
`radius-sm 4px` (Tags) · `radius-md 8px` (Buttons, inputs) · `radius-lg
12px` (Cards, the default in `Card.tsx`) · `radius-xl 16px` (Modals — not
yet built). Applied consistently — no component picks its own one-off
radius.

## Shadow System
`--shadow-card-sm` (card resting state) · `--shadow-card-md` (card hover
state, applied via `Card`'s `hover` prop) · `--shadow-card-lg` (elevated
surfaces — mega-menu panel, future modals).

## Button Variants
Defined in `components/ui/Button.tsx` via `cva`:
- **primary** — solid Emerald-600, white text. The one high-emphasis
  variant; see `CLAUDE.md` CTA Strategy for the "one per viewport" rule.
- **secondary** — outlined, Charcoal-900 border, transparent fill.
- **tertiary** — text-only, Emerald-600, underline on hover. Used for
  every lower-weight CTA (Header/Sticky "start with a free Growth Audit,"
  every "View X" link).
- **ghostOnDark** — outlined white, for buttons placed on `bg-inverse`
  sections (Hero, Final CTA).

Sizes: `lg` (56px, hero-level CTAs) · `default` (48px) · `sm` (44px,
compact contexts). All sizes maintain a 44px+ minimum touch target
regardless of visual size.

## Cards
`components/ui/Card.tsx` is the base primitive every specific card type
(engine, industry, portfolio, stat, testimonial-placeholder) composes
from — variants: `flat` (bordered, no shadow), `raised` (shadow, no
border), `inverse` (for dark sections), `accent` (Emerald-tinted, used
exactly once per view — the Growth Blueprint Callout).

## Badges
`components/ui/Badge.tsx` — `solid` (Emerald-700 background, capped at
one visible instance per view — currently only the "Recommended First
Step" badge) and `outline` variants. Distinct from a Tag or Pill (neither
currently built) — a Badge indicates status/emphasis, never a category or
a toggle.

## Forms
**Not yet built.** No form component exists in this codebase — the
Homepage has no form (Audit Request, Contact, and Growth Blueprint forms
belong to pages not yet built). When building one, match the input
styling already implied by the Button component's radius/height
conventions (48px height, 8px radius) for visual consistency.

## Icons
Lucide React exclusively, 1.5px stroke weight (library default). No brand
icons exist in Lucide — Instagram and LinkedIn are hand-built inline SVGs
in `Footer.tsx` matching Lucide's stroke convention; follow that same
pattern (don't reach for an icon-font or a second icon library) if
another brand glyph is ever needed.

## Colors — Usage Pattern
`bg-primary` (white) is the default. `bg-subtle` (Charcoal-50) is used
sparingly for section separation without a hard border. `bg-inverse`
(Charcoal-900) is reserved for the Hero and Final CTA specifically — its
entire value comes from being rare; do not add a third dark section
without a strong reason. `bg-accent-tint` (Emerald-50) is used exactly
once, on the Guarantee Block, for the same reason.

## Motion Principles
See `CLAUDE.md` Animation Philosophy for the full rationale. Quick
reference: **0.6s duration, 30px y-offset, `cubic-bezier(0.16, 1, 0.3,
1)` easing**, fires once per element on scroll entry
(`viewport={{ once: true }}`), staggered per-item for card groups.

## Framer Motion Rules
- Client Components only (`"use client"` required for anything importing
  `framer-motion`).
- **Every** Framer-Motion-driven component must call `useReducedMotion()`
  itself and branch its variants accordingly — the global CSS
  `prefers-reduced-motion` override does not reach Web-Animations-API-
  driven motion. This is not optional; see `CLAUDE.md` Known Technical
  Debt for why this was flagged as a real, previously-shipped bug.
- Prefer `whileInView` + `viewport={{ once: true }}` for scroll-triggered
  reveals (`RevealOnScroll.tsx`). Use `initial`/`animate` (not
  `whileInView`) only for elements guaranteed to be in the initial
  viewport on load — the Hero visual is the only current example.
- Ambient/looping animation (the Hero chart's opacity "breathe") is
  capped at a slow, low-amplitude cycle (3s) and must also respect
  reduced motion — it is not exempt just because it's subtle.

## Hover Behaviour
Cards: `translateY(-2px)` + shadow increase (`Card`'s `hover` prop),
200ms. Buttons: background/border color shift only, no transform — this
is deliberate, so buttons feel stable/clickable rather than bouncy.
Industry/Portfolio images: `scale(1.03)`, 300ms, `overflow:hidden`
containing it. **Desktop-only** — nothing on this site is hover-dependent
for information access, since touch devices have no hover state.

## Responsive Breakpoints
Tailwind defaults: `sm 640px` · `md 768px` · `lg 1024px` · mobile is
everything below `md`. Grids of 3 items (Growth System engines, Portfolio
cards) convert to the shared `Carousel` component below `md`, not a
1-column stack — see `CLAUDE.md` Responsive Philosophy.

## Component Patterns
- **Server by default, Client by exception** — see `CLAUDE.md`
  Performance Philosophy.
- **Content never hardcoded in components** — every section pulls its
  copy from `lib/content/homepage.ts`. See `CONTRIBUTING.md`.
- **One base primitive, many compositions** — `Card`, `Button`, and
  `Section` are never restyled ad hoc; specific instances compose them.
