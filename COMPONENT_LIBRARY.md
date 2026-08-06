# COMPONENT_LIBRARY.md

Audit of every component in this repository, split into two categories:
**`components/ui/`** and **`components/layout/`** are genuinely reusable —
build new pages out of these. **`components/sections/`** are Homepage-
specific compositions — treat them as reference implementations to learn
the patterns from, not as things to import into a different page as-is.

---

## `components/ui/` — Reusable Primitives

### Button
**Purpose:** Every interactive button/link on the site.
**Props:** `variant?: "primary" | "secondary" | "tertiary" | "ghostOnDark"`,
`size?: "lg" | "default" | "sm"`, `loading?: boolean`, `href?: string`
(renders `<Link>` if present, `<button>` otherwise), plus standard
button/anchor HTML attributes.
**Used in:** Header, Hero, FinalCta, GrowthBlueprintCallout, and every
other section with a CTA.
**Example:**
```tsx
<Button href="/contact" size="lg">Book a Growth Consultation</Button>
<Button variant="ghostOnDark" href="/audit">Start a Free Audit</Button>
```
**Reuse guidance:** Always reuse. Never write a bespoke `<button>` or
`<a>` styled to look like a CTA — if a needed variant doesn't exist,
extend this component's `cva` config, don't create a parallel one.

### Card
**Purpose:** Base surface primitive every specific card type composes from.
**Props:** `variant?: "flat" | "raised" | "inverse" | "accent"`,
`hover?: boolean`, plus standard `div` attributes.
**Used in:** GrowthSystemTeaser (engine cards), IndustriesGrid,
CaseStudyPreviews (portfolio cards), ResultsStrip (stat cards),
GrowthBlueprintCallout.
**Reuse guidance:** Always reuse as the outer wrapper for any new card
type. Do not hand-roll padding/radius/shadow on a `div` when this exists.

### Badge
**Purpose:** Status/emphasis indicator.
**Props:** `variant?: "solid" | "outline"`.
**Used in:** GrowthBlueprintCallout ("Recommended First Step").
**Reuse guidance:** Reuse for any future status flag. **Cap at one solid
badge visible per view** — this is a deliberate signal-preservation rule,
not a style suggestion. Do not add a second simultaneous solid badge
anywhere on a page without revisiting this rule first.

### Container
**Purpose:** Max-width + horizontal padding wrapper.
**Props:** `narrow?: boolean` (800px vs 1440px max-width), `as?:
React.ElementType`.
**Used in:** Every section, without exception.
**Reuse guidance:** Always reuse. Every section's outer content wrapper
should be a `Container`, never a raw `div` with manual `max-w-*` classes.

### Section
**Purpose:** Vertical rhythm + background-token wrapper.
**Props:** `background?: "primary" | "subtle" | "inverse" | "accentTint"`,
`id?: string`, `ariaLabel?: string`.
**Used in:** Every homepage section except Hero and FinalCta (which use a
plain `<section>` directly, since their background/padding needs are
distinct enough — dark bookend sections — that forcing them through the
same wrapper wasn't worth the abstraction).
**Reuse guidance:** Reuse for any standard content section. It's fine for
a section to opt out and use a bare `<section>` if it has genuinely
different structural needs, as Hero/FinalCta do — don't force-fit.

### AnimatedNumber
**Purpose:** Count-up number animation (0 → final value on scroll entry).
**Props:** `value: number`, `suffix?: string`, `prefix?: string`.
**Used in:** ResultsStrip.
**Reuse guidance:** Reuse anywhere a numeric stat needs to animate in.
Respects `prefers-reduced-motion` internally — don't wrap it in your own
reduced-motion check, it's already handled.

### RevealOnScroll
**Purpose:** The standard scroll-triggered fade-up-and-in animation.
**Props:** `delay?: number` (seconds, for staggering), `className?: string`.
**Used in:** Every section on the homepage — this is the single most
reused component in the project.
**Reuse guidance:** Always reuse for scroll-reveal animation. Never
hand-write a Framer Motion `whileInView` block inline in a section — if
this component's timing needs to change, it should change in exactly one
place (see `CLAUDE.md` — the 0.35s→0.6s timing change touched the whole
site by editing this one file).

### Carousel
**Purpose:** Mobile-only swipeable carousel with keyboard support and
pagination dots.
**Props:** `ariaLabel: string`, `children: React.ReactNode` (each child
becomes one slide).
**Used in:** GrowthSystemTeaser and CaseStudyPreviews, both specifically
for their 3-item mobile layout.
**Reuse guidance:** Reuse for any future 3–5 item group that should
carousel on mobile rather than stack. Not intended for very long lists
(no virtualization) — for anything beyond ~6 items, a different pattern
(pagination, filtering) is more appropriate.

---

## `components/layout/` — Sitewide Chrome

### Header
**Purpose:** Sticky navigation, mega-menu, mobile overlay.
**Props:** None (self-contained; content is currently hardcoded in the
component, not sourced from `lib/content/` — see `CONTRIBUTING.md` for
why this is a known gap, not the intended pattern).
**Used in:** `app/page.tsx` (will be used in every future page's layout
once more pages exist — currently only rendered once, since only the
Homepage exists).
**Reuse guidance:** This is already sitewide by intent. If a second page
is added before a shared root layout wrapper exists, import `Header`
directly rather than duplicating its markup.

### Footer
**Purpose:** Five-column sitewide footer (Solutions, Company, Resources,
Legal, Connect) plus bottom bar.
**Props:** None (same hardcoded-content caveat as Header).
**Reuse guidance:** Same as Header — sitewide, import directly.

### StickyMobileCta
**Purpose:** Mobile-only floating CTA bar that appears once the Hero
scrolls out of view.
**Props:** `heroId?: string` (defaults to `"hero"` — must match the `id`
on whatever section it should trigger after).
**Reuse guidance:** Reuse on any future page with a Hero-equivalent
section, passing that section's `id`.

---

## `components/sections/` — Homepage-Specific (reference only)

| Component | Renders | Reuse across pages? |
|---|---|---|
| `Hero` + `HeroVisual` | Headline/subhead/CTA + animated Growth Workspace visual | No — Homepage-specific copy and visual. A future page's hero should be its own component, built the same way (Server + split-out Client visual), not this one imported. |
| `TrustSection` | Intro line, review-score placeholder, logo grid, testimonial placeholder | Possibly — this is generic enough to reuse on a future About or Pricing page as-is. |
| `ProblemStatement` | Two-tone tension headline | No — the two-tone treatment is a deliberately single-use pattern (see `DESIGN_SYSTEM.md`/`CLAUDE.md`); don't reuse the visual style elsewhere without revisiting that decision. |
| `GrowthSystemTeaser` | Attract/Convert/Scale engine cards | No — this is the canonical explanation of the System; a future `/growth-system` page should build its own fuller version, not import this teaser. |
| `ProcessSection` | Discovery → Strategy → Execution → Growth | Possibly reusable on a Services or About page. |
| `ResultsStrip` | Stat cards (years/projects/industries/commitment) | Possibly reusable, but see `CLAUDE.md` Known Technical Debt on this data's provenance before reusing elsewhere. |
| `IndustriesGrid` | Six industry tiles | Likely reusable on a future `/industries` page (that page would show these plus more depth). |
| `CaseStudyPreviews` | Portfolio cards (Industry/Challenge/Solution/Outcome) | Likely reusable on a future `/case-studies` page. |
| `GuaranteeBlock` | Risk-reversal statement | Possibly reusable on a Pricing page. |
| `GrowthBlueprintCallout` | Featured offer card | Likely reusable on a Pricing page. |
| `FinalCta` | Closing CTA block | Reusable as a generic page-ending CTA pattern — but check its exact copy is appropriate before reusing verbatim. |

**General rule for this folder:** before adding a new page, check this
table for a component whose *pattern* fits, then decide whether to import
it directly (only where marked "Possibly"/"Likely" above) or build a new,
page-specific version following the same construction pattern (Server
Component + `lib/content/` data + shared `ui/` primitives).
