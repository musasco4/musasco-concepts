# CLAUDE.md — Project Knowledge Base

This file exists so any AI engineer (or human) picking up this project has
the full context that shaped every decision in the codebase — not just
what the code does, but why it's structured this way.

## Business Positioning
MUSASCO Concepts is a **business growth company**, explicitly *not* a
graphic design agency, creative agency, printing company, or web design
agency. Those are tools MUSASCO uses; they are never the thing being sold.
Businesses hire MUSASCO to look more professional, build credibility,
generate more enquiries, convert more customers, and grow sustainably.

The company's owned methodology is the **MUSASCO Growth System™**, built
on three engines:
- **Attract** — get the right people to notice you (Meta/Google advertising)
- **Convert** — turn attention into paying customers (landing pages,
  website, conversion optimization)
- **Scale** — turn what's working into what's repeatable (ongoing growth
  strategy)

Website Redesign, Creative Design, Video Advertising, and every other
tactical capability are sold *as levers inside these engines*, never as
standalone, top-level services — this was a deliberate positioning fix
early in the project (see Known History below) to resolve a direct
contradiction between "we don't sell websites" and a service list that
included website redesign as a headline offer.

## Mission
Help businesses grow through measurable customer acquisition systems.

## Vision
Become Africa's most trusted business growth partner.

## Target Audience
SMEs, Professional Services, Home Services, Healthcare, Real Estate, and
Local Businesses — specifically businesses already generating revenue that
want faster, more predictable growth, and are frustrated by (or skeptical
of) fragmented vendor relationships (a freelancer for ads, a different
agency for the website, nobody accountable for whether any of it converts).

Geography: Lagos-based, serving businesses across Nigeria, the UK, and
Europe.

## Brand Voice
Confident, precise, understated. Leads with outcomes, not deliverables or
adjectives. A running discipline throughout this project: **describe the
transformation, not the service list.** "We build brands, websites and
marketing assets" is agency framing; "fewer objections, more enquiries" is
outcome framing — the second is always preferred.

**Words to avoid in body copy** (flagged explicitly during a copy-audit
round): innovation, cutting-edge, solutions (as marketing copy — it's fine
as a nav/footer label), world-class, creative excellence, transforming
brands, digital excellence. "Write like Apple" was the explicit standard
set for one refinement round and never rescinded.

## Design Philosophy
Premium, confident, quiet. Direction explicitly inspired by Stripe,
Linear, Clay, Apple, Vercel, Brevo, and HubSpot — explicitly *not* copied
from any of them, and explicitly not meant to read as "creative agency
portfolio." Full token-level detail lives in `DESIGN_SYSTEM.md`; the
philosophy behind those tokens:
- Restraint as a signal of confidence — a small, well-executed component
  set beats visual variety.
- Evidence over adjectives — numbers, case studies, and specifics are
  treated as first-class content, not decoration.
- One primary action per screen, always (see CTA Strategy below).
- Consistency compounds trust — the same button, same shadow, same
  spacing rhythm everywhere is what makes the site read as careful and
  reliable rather than assembled.

## Homepage Strategy
Section order (fixed — see Things That Should Never Be Changed):
`Header → Hero → Trust Section → Problem Statement → Growth System
Teaser (How We Help) → Process Section → Results Strip (Stats) →
Industries Grid → Portfolio (Case Study Previews) → Guarantee Block →
Growth Blueprint Callout → Final CTA → Footer`

The narrative arc this order is built to create: orientation (Hero) →
credibility (Trust) → tension (Problem) → mechanism (Growth System) →
process reassurance → proof cluster (Results/Industries/Portfolio) → risk
reversal (Guarantee) → low-commitment next step (Blueprint) → close
(Final CTA). This arc is the reason the section order is locked — moving
a section breaks the argument the page is making, not just the layout.

## Navigation Philosophy
Header CTA cluster deliberately asymmetric: **one Primary button** ("Book
a Growth Consultation") plus **one lower-weight text link** ("or start
with a free Growth Audit") — never two equal-weight buttons. This was a
direct fix for an earlier version that put two competing high-contrast
CTAs in the header, which forces a decision at exactly the point (a
persistent, repeatedly-seen nav element) where Hick's Law argues hardest
against it.

Mobile: hamburger is **always rendered from first paint**, never
conditionally shown after a scroll threshold — an earlier version had a
scroll-gated hamburger and it was treated as a hard bug, not a style
choice.

## CTA Strategy
A graduated commitment ladder: **Growth Audit (free) → Growth Blueprint
(low-ticket) → Growth Consultation (high-commitment)**. Different sections
of the homepage surface different rungs of this ladder deliberately — the
Hero and Final CTA offer the Consultation-or-Audit choice; the Growth
Blueprint Callout offers the Blueprint *plus* a "skip straight to
Consultation" escape hatch for visitors who are already sold and shouldn't
be forced down a lower-commitment path first.

**One Primary-styled button per viewport, never per page** — several
sections each have their own Primary CTA, which is fine, because a
visitor only ever sees one section's worth of the page at a time while
scrolling.

## Animation Philosophy
Scroll-triggered, not load-triggered (except the Hero, which is always in
the initial viewport, so it uses its own on-load animation instead of a
viewport trigger that would never fire). Current standard timing: **0.6s
duration, 30px vertical offset, `cubic-bezier(0.16, 1, 0.3, 1)` easing** —
this was explicitly increased from an earlier 0.35s/16px baseline to read
as more "mature enterprise SaaS" rather than "quick and subtle."

Every motion-driven component **must** call `useReducedMotion()` itself.
The global CSS `prefers-reduced-motion` override in `globals.css` only
protects plain CSS transitions (Tailwind's `transition-*` utilities) — it
does **not** reach Framer Motion, which animates via the Web Animations
API. This was a real bug caught during development, not a hypothetical —
see Known Technical Debt if a new motion component is added without this
check.

Card groups (engines, industries, process steps, portfolio, trust logos,
stats) use staggered per-item delays, not simultaneous reveal.

## Responsive Philosophy
Mobile-first. Zero tolerance for horizontal scroll or overflow at 320px
and up — this was the subject of an entire dedicated remediation round.
Grids reflow to carousels (not 1-column stacks) specifically for 3-item
groups on mobile (Growth System engines, Portfolio cards) — a carousel
with visible next-card peek and keyboard/pagination-dot support, built as
the shared `Carousel` component.

## Performance Philosophy
Server Components by default. `"use client"` is added only where the
component is genuinely interactive or needs Framer Motion — the Hero is
the clearest example: the text content stays a Server Component for LCP,
and only the decorative visual composition is split into a separate
client component (`HeroVisual.tsx`).

## Current Implementation Status
**Homepage only.** Every other page in the site architecture is planned,
not built — see `ROADMAP.md`. The Homepage itself is feature-complete
against its approved specification and has been through two full
refinement rounds plus an animation/interaction polish pass.

## Planned Future Pages
See `ROADMAP.md` for the full list with per-page purpose, goals, and
required components.

## Known Technical Debt
- **`ResultsStrip` and stats data are company-standing facts (7+ years,
  50+ projects, 10+ industries, 100% commitment), not independently
  verified** — they're approved content from the founder, not data this
  codebase has confirmed against any external source. Treat as
  founder-owned content, not verified metrics, if this logic is ever
  reused elsewhere.
- **Portfolio (`CaseStudyPreviews.tsx`) renders 100% placeholder content**
  (`PORTFOLIO_SHOWCASE` in `lib/content/homepage.ts`) — every
  Industry/Challenge/Solution/Outcome field is a bracketed placeholder
  string by design, not real case-study data. Populating this with real
  data is a pure content change; no component code should need to change.
- **`trustStrip` export in `lib/content/homepage.ts` exists only for
  backward compatibility** with a stale deployed version of
  `TrustStrip.tsx` that no longer exists in this repository (superseded
  by `TrustSection.tsx`). It is unused by any current component. Safe to
  delete once the live deployment is confirmed to be running the current
  codebase.
- **A repository/deployment drift already happened once** — the live
  Vercel deployment ran a snapshot older than the local codebase, causing
  a build error from an import that no longer matched the content file.
  See `README.md` Deployment Process.
- **No environment variables, no CMS, no form backend, no analytics
  integration yet** — every "Book a Growth Consultation" / "Get My Growth
  Blueprint" CTA currently links to a route (`/contact`,
  `/growth-blueprint`) that doesn't exist as a built page yet.
- **Image hosting is Unsplash-hotlinked** (`images.unsplash.com` in
  `next.config.ts`'s `remotePatterns`) — explicitly flagged in-code as not
  a long-term production dependency.

## Things That Should Never Be Changed Without Explicit Approval
- **The homepage section order** — see Homepage Strategy above; it's a
  narrative argument, not an arbitrary layout.
- **The color palette, typography (Manrope/Inter/IBM Plex Mono), and
  spacing scale** — see `DESIGN_SYSTEM.md`. Multiple refinement rounds
  have explicitly reconfirmed "keep the existing colours and typography."
- **The Growth System™ three-engine framing (Attract/Convert/Scale)** —
  reconfirmed as correct and kept as-is across every refinement round.
- **No fabricated numbers, ever** — every stats/metrics section in this
  codebase either displays real, approved content or a visibly-marked
  placeholder. This rule has been enforced consistently enough times
  across this project's history that it should be treated as absolute,
  not case-by-case.
- **One Primary CTA per viewport** — see CTA Strategy above.
