# CONTRIBUTING.md

The development rules for this project. If you're a new engineer (human
or AI) joining tomorrow, this is what you need to know before writing
your first line of code.

## Before You Start
Read, in this order: `CLAUDE.md` (why the project is shaped this way),
`DESIGN_SYSTEM.md` (the visual language), `COMPONENT_LIBRARY.md` (what
already exists), then this file (how to actually work in the repo). Do
not start writing a component before reading `COMPONENT_LIBRARY.md` — a
meaningful fraction of the reusable primitives you'd need already exist.

## How to Create a New Page
1. Check `ROADMAP.md` for that page's purpose, primary CTA, and required
   components before writing anything.
2. Create `app/<route>/page.tsx`. Follow the Homepage's pattern exactly:
   a thin composition file that imports section components in order —
   no layout logic, no styling, no content inline in `page.tsx` itself.
3. Every new page needs its own `lib/content/<route>.ts` content file,
   matching `lib/content/homepage.ts`'s pattern (typed exports, one
   export per section, no copy hardcoded in components).
4. Reuse `Header`, `Footer`, and `StickyMobileCta` from
   `components/layout/` — do not rebuild sitewide chrome per page.
5. Every new page needs its own `metadata` export (title, description,
   canonical) following `app/layout.tsx`'s pattern — see SEO Rules below.

## How to Reuse Existing Components
Check `COMPONENT_LIBRARY.md` first, every time, before writing a new
component. The decision tree:
- Need a button, card surface, badge, container, or section wrapper? →
  It exists in `components/ui/`. Use it.
- Need scroll-reveal or count-up animation? → `RevealOnScroll` /
  `AnimatedNumber` exist. Use them — do not hand-write a new Framer
  Motion block for something these already do.
- Need a 3-item mobile carousel? → `Carousel` exists. Use it.
- Building something section-specific for a new page? → Look at the
  closest matching Homepage section in `components/sections/` for the
  *pattern* (Server Component + content file + `ui/` primitives), then
  build your own — don't import a Homepage section into a different
  page's content unless `COMPONENT_LIBRARY.md` explicitly marks it reusable.

## How to Add Animations
1. Default to `RevealOnScroll` for any scroll-triggered fade-up. Don't
   write a new `whileInView` block if this already does what you need.
2. If you genuinely need new Framer Motion behavior (like `HeroVisual`'s
   staggered cards), it **must**:
   - Be its own `"use client"` component, imported into a Server
     Component parent — never add `"use client"` to an entire section
     just for one animated element.
   - Call `useReducedMotion()` and branch every variant accordingly. This
     is not optional — see `DESIGN_SYSTEM.md` Framer Motion Rules for why.
   - Use the project's standard timing (0.6s, `cubic-bezier(0.16, 1, 0.3,
     1)`) unless there's a specific, documented reason to deviate —
     document that reason in a code comment if you do.
3. Never add animation "for polish" without checking whether it changes
   perceived performance — an animated LCP element is a real tradeoff,
   not a free upgrade (see how `Hero.tsx`/`HeroVisual.tsx` split handles
   this).

## Folder Structure Rules
- `components/ui/` — generic, content-agnostic, reusable anywhere. If a
  component takes hardcoded copy instead of props/children, it does not
  belong here.
- `components/layout/` — sitewide chrome only.
- `components/sections/` — page-specific compositions. Name them for
  what they render (`GrowthSystemTeaser`, not `Section3`).
- `lib/content/<page>.ts` — one file per page, all copy for that page.
- Never put a component inside `app/` — `app/` is routes and layouts only.

## Naming Conventions
- Components: `PascalCase.tsx`, filename matches the exported component
  name exactly (`Button.tsx` exports `Button`).
- Content files: `camelCase.ts` matching the page/section
  (`homepage.ts`).
- Content exports: `camelCase` for single objects (`hero`, `guarantee`),
  `SCREAMING_SNAKE_CASE` for arrays that carry a governance note
  (`RESULTS_STATS`, `PORTFOLIO_SHOWCASE`) — this isn't just a style
  choice, it's a visual flag in the code that "this data has a rule
  attached, read the comment above it before editing."
- Types: `PascalCase`, colocated in the content file that uses them
  (see `Stat`, `Engine`, `PortfolioItem` in `lib/content/homepage.ts`).

## Import Conventions
Use the `@/` path alias for everything outside the current file's
immediate directory (`@/components/ui/Button`, `@/lib/content/homepage`).
Relative imports (`./`, `../`) are fine only within the same feature
folder (e.g. `Hero.tsx` importing `HeroVisual.tsx` from the same
`sections/` directory).

## TypeScript Rules
- No `any`. If a type is genuinely unknown, use `unknown` and narrow it.
- Every component's props get an explicit type or inline type annotation
  — no implicit `any` props.
- Run `npx tsc --noEmit` before considering any change complete. This
  project has zero tolerance for type errors reaching a commit.
- Prefer `type` for props/data shapes, matching the existing pattern in
  `lib/content/homepage.ts` and every component in this repo.

## Tailwind Conventions
- Use the `cn()` helper (`lib/utils.ts`) whenever a component accepts a
  `className` prop that needs to merge with internal classes — never
  string-concatenate class names manually.
- No inline `style` props. No CSS Modules. Tailwind utility classes only,
  plus the CSS custom properties already defined in `globals.css` for
  values Tailwind doesn't have a utility for (shadows, easing curves).
- Don't introduce a new color, spacing value, or radius outside what's
  already in `app/globals.css`'s `@theme` block. If a genuinely new value
  is needed, add it as a token there first — never hardcode a raw hex
  code or pixel value in a component's `className`.

## Accessibility Rules
- Every interactive element needs a visible focus state — this is
  already handled globally in `globals.css` (`:focus-visible`), don't
  override it away.
- Every image needs meaningful `alt` text, or `alt=""` if genuinely
  decorative (see how `Hero`/`HeroVisual` mark their composition
  `aria-hidden="true"` since it's decorative relative to the text
  content next to it).
- Card-as-link patterns (Industry tiles, Portfolio cards) must resolve to
  exactly one focusable element per card — verify this if you build a new
  card-as-link component.
- Every custom interactive component (the mega-menu, the mobile nav, the
  Carousel) must be keyboard-operable — Escape closes overlays, arrow
  keys navigate carousels/menus. Check `Header.tsx` and `Carousel.tsx`
  for the reference pattern.
- Motion must respect `prefers-reduced-motion` — see Framer Motion Rules
  above.

## SEO Rules
- Every page needs its own `metadata` export — title, description,
  canonical URL at minimum. Follow `app/layout.tsx`'s existing pattern.
- One `<h1>` per page. Non-skipping heading hierarchy (H1 → H2 → H3,
  never H1 → H3).
- Descriptive anchor text always — never "click here" or "read more"
  with no other context.
- `app/robots.ts` and `app/sitemap.ts` must be updated the same week a
  new page ships — not batched for later. A page that exists but isn't
  in the sitemap is an easy, avoidable gap.

## Performance Rules
- Server Components by default. Add `"use client"` only when the
  component is genuinely interactive, uses hooks, or needs Framer Motion
  — and even then, keep the client boundary as small as possible (split
  out just the interactive part, as `Hero`/`HeroVisual` demonstrate).
- Images: always use `next/image`, never a raw `<img>`, and add the
  remote host to `next.config.ts`'s `remotePatterns` if it's not already
  there.
- Before considering any change complete, run `npm run build` and check
  the output — confirm the page is still statically prerendered
  (`○ Static`) and note the First Load JS delta. A change that silently
  makes the Homepage server-rendered-on-demand or meaningfully grows the
  JS bundle needs a reason, not just a shrug.

## Things Contributors Must Never Change Without Explicit Approval
Everything listed in `CLAUDE.md`'s "Things That Should Never Be Changed"
section applies here too — most importantly: the Homepage section order,
the color palette and typography, the Growth System™ three-engine
framing, the "no fabricated numbers" rule, and the one-Primary-CTA-per-
viewport rule. If a task seems to require breaking one of these, stop and
flag it explicitly rather than making the call unilaterally — this
project's history has several examples of exactly that conversation
happening productively, and none of silently deciding alone working out
well.

## The Non-Negotiable Verification Step
Every change, no exceptions, gets verified with all three of:
```bash
npx tsc --noEmit
npx eslint .
npm run build
```
before being considered done. This project's history includes real bugs
caught by exactly this sequence (a `setState`-in-`useEffect` anti-pattern,
a reduced-motion gap, a missing skip-link) — treat this as load-bearing
process, not bureaucracy.
