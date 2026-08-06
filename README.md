# MUSASCO Concepts — Website

## Project Purpose
The marketing website for MUSASCO Concepts, a Lagos-based business growth
company. This repository currently contains the Homepage only — every other
page in the site architecture (see `ROADMAP.md`) is planned, not built.

## Business Summary
MUSASCO Concepts is **not** a design, creative, or web agency — it is a
business growth company positioned around the **MUSASCO Growth System™**,
built on three engines:

- **Attract** — Meta and Google advertising
- **Convert** — landing pages, website experience, conversion optimization
- **Scale** — ongoing growth strategy and optimization

Core message: *"Growth, Engineered."* — MUSASCO helps growing businesses
attract more customers, convert more of them, and scale what works, through
one system rather than scattered vendors. Full positioning rationale lives
in `CLAUDE.md`.

## Tech Stack
| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 15 (App Router) | Pinned to `^15.5.22` — do not upgrade to Next 16 without team sign-off (see `CONTRIBUTING.md`) |
| UI | React 19 | |
| Language | TypeScript | Strict mode via `tsconfig.json` |
| Styling | Tailwind CSS v4 | CSS-first config (`@theme` in `app/globals.css`), not a `tailwind.config.js` |
| Animation | Framer Motion | Client components only — see `DESIGN_SYSTEM.md` Motion Principles |
| Icons | Lucide React | No brand icons (Instagram/LinkedIn/WhatsApp are custom SVGs — see `COMPONENT_LIBRARY.md`) |
| Variant styling | class-variance-authority (cva) | Used in `Button.tsx`, `Card.tsx` |
| Class merging | clsx + tailwind-merge | Via `lib/utils.ts`'s `cn()` helper |

## Folder Structure
```
musasco-web/
├── app/
│   ├── layout.tsx        # Root layout: fonts, metadata, Organization/WebSite schema
│   ├── page.tsx           # Homepage — composes every section in order
│   ├── globals.css        # Design tokens (Tailwind v4 @theme), resets, keyframes
│   ├── robots.ts           # Metadata-route robots.txt
│   └── sitemap.ts          # Metadata-route sitemap.xml
├── components/
│   ├── ui/                 # Generic, content-agnostic primitives (Button, Card, etc.)
│   ├── layout/              # Sitewide chrome (Header, Footer, StickyMobileCta)
│   └── sections/             # Homepage-specific sections (Hero, TrustSection, etc.)
├── lib/
│   ├── content/homepage.ts   # ALL homepage copy — see CONTRIBUTING.md before editing
│   └── utils.ts               # cn() className helper
└── public/                    # Static assets (currently just favicon.ico)
```

## How to Run Locally
```bash
npm install
npm run dev
```
Opens at `http://localhost:3000`.

## How to Build
```bash
npm run build
```
Produces a fully static export for the homepage route (confirmed via
`○ (Static) prerendered as static content` in build output). Current
production build size: **~69 kB route / ~171 kB First Load JS**.

**Known sandbox-only limitation, not a code issue:** builds in network-
restricted environments (e.g. this project's own development sandbox) may
fail at the `next/font/google` fetch step if `fonts.googleapis.com` isn't
reachable. This is not a bug — Vercel and any normal-network environment
fetch these fonts successfully at build time.

## Deployment Process
Deployed to Vercel. Repository state and the live deployment have drifted
out of sync at least once already during this project (see `CLAUDE.md`
Known Technical Debt) — **always confirm the deployed commit matches the
repository's `main` branch before debugging a "why is production different
from what I built" issue.** Push the full repository, not a partial file
merge — a stale-file-vs-updated-content-file mismatch has already caused
one production build failure.

## Coding Conventions
See `CONTRIBUTING.md` for the full rule set. Summary: Server Components by
default, `"use client"` only where genuinely needed (interactivity,
Framer Motion), all copy sourced from `lib/content/`, all styling via
Tailwind utility classes plus the `cn()` helper — no inline `style` props,
no CSS Modules.

## Environment Variables
**None currently required.** The project has no API integrations, forms,
or CMS connections yet. When any of the following are added, document them
here immediately: analytics IDs (GA4, Meta Pixel), a CRM/lead-capture
endpoint, a booking/scheduling widget key, or a CMS/asset-host token (see
`next.config.ts`'s `remotePatterns` comment for the planned image-host
slot).

## Branch Strategy
Not yet formalized — the project has been developed as direct commits to
`main` to date. **Recommendation for the multi-engineer phase this
documentation set exists to support:** feature branches per page/section,
PR review before merging to `main`, and `main` always deployable (matches
the "confirm deployed commit matches `main`" rule above). Formalize this
in practice, not just in this doc, before a second engineer starts pushing.

## Commands Used in Development
```bash
npm run dev              # local dev server
npm run build             # production build
npx tsc --noEmit           # type-check without emitting files
npx eslint .                # lint the whole project
```
Every change in this project's history has been verified with all three
of `tsc --noEmit`, `eslint`, and a full `next build` before being
considered complete — see `CONTRIBUTING.md` for why this is a hard rule,
not a suggestion.
