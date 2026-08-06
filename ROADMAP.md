# ROADMAP.md

Every page in the approved site architecture (from the project's MRD/PRD
phase, predating this codebase). **Only the Homepage is built.** Everything
else below is planned — page purpose, goal, and required components are
already decided; the pages themselves are not.

## Homepage
**Purpose:** Compress the full argument (problem → Growth System™ → proof
→ low-risk next step → guarantee) into one scroll.
**Goal:** Convert visitors into a Growth Audit request or Growth
Consultation booking.
**Primary CTA:** Book a Growth Consultation.
**Components required:** All of `components/sections/` — see
`COMPONENT_LIBRARY.md`.
**Status:** ✅ **Built.** Feature-complete against its approved spec,
through two refinement rounds and an animation pass.

---

## The Growth System™ (`/growth-system`)
**Purpose:** Establish the Growth System™ as owned methodology/IP — the
full explanation the Homepage's Growth System Teaser only previews.
**Goal:** Route qualified visitors to the Growth Audit; establish
authority.
**Primary CTA:** Start with a Free Growth Audit.
**Components required:** A fuller version of the engine-card pattern from
`GrowthSystemTeaser`, plus a system diagram (see original PRD spec — not
yet designed in this codebase).
**Status:** ⬜ Not started.

## Services / How We Help (`/services`)
**Purpose:** Hub page routing to individual capability pages, organized
by engine (Attract/Convert/Scale) — mirrors the Header's mega-menu
structure exactly.
**Goal:** Wayfinding, not conversion — routes to capability pages or the
System page.
**Primary CTA:** Book a Growth Consultation (secondary).
**Components required:** Three-column engine layout (new — no direct
equivalent exists yet in `components/sections/`).
**Status:** ⬜ Not started.

## Industries (`/industries` + 6 spoke pages)
**Purpose:** Vertical relevance and credibility per target industry
(SMEs, Professional Services, Home Services, Healthcare, Real Estate,
Local Businesses).
**Goal:** Self-identification, then route to relevant proof/services.
**Primary CTA:** Book a Growth Consultation.
**Components required:** `IndustriesGrid` already exists and can likely
be reused for the hub page; spoke pages need a new template.
**Status:** ⬜ Not started (hub content exists on the Homepage; standalone
page and 6 spoke pages do not).

## Results (`/results`)
**Purpose:** Fast, aggregate proof — distinct from narrative Case
Studies.
**Goal:** Quick credibility check for skimmers.
**Primary CTA:** Book a Growth Consultation.
**Components required:** `ResultsStrip`'s pattern, likely with real
growth-metric data (see `CLAUDE.md` — the Homepage's version of this data
is company-standing stats, not growth metrics; this page's content is
conceptually different and needs its own governance check before launch).
**Status:** ⬜ Not started.

## Case Studies / Portfolio (`/case-studies` + detail pages)
**Purpose:** Narrative case-study proof, one page per client engagement.
**Goal:** Close the loop — problem, engines used, verified outcome.
**Primary CTA:** Book a Growth Consultation.
**Components required:** `CaseStudyPreviews`'s Industry/Challenge/
Solution/Outcome card pattern already exists for the hub; detail pages
need a new template.
**Status:** ⬜ Not started (hub preview exists on the Homepage with 100%
placeholder content; standalone hub and detail pages do not exist).

## Pricing (`/pricing`)
**Purpose:** Present the offer ladder (Growth Audit → Growth Blueprint →
Growth Sprint → Growth Partnership).
**Goal:** Route each visitor to the appropriately-scaled next step.
**Primary CTA:** Book a Growth Consultation (varies by tier).
**Components required:** A pricing-tier card component (new — not yet
built anywhere in this codebase). `GrowthBlueprintCallout` and
`GuaranteeBlock` patterns are reusable here.
**Status:** ⬜ Not started.

## Growth Blueprint (`/growth-blueprint`)
**Purpose:** Standalone, paid-traffic-ready landing page for the entry
offer.
**Goal:** Convert on the lowest-friction paid offer.
**Primary CTA:** Get My Growth Blueprint (form).
**Components required:** A lead-capture form component (new — no form
component exists in this codebase yet).
**Status:** ⬜ Not started. **Linked from the Homepage already** — the
Growth Blueprint Callout's CTA points to this route, which currently
404s.

## Audit Request (`/audit`)
**Purpose:** The largest lead magnet on the site — minimal-friction form.
**Goal:** Maximize submission rate.
**Primary CTA:** Request My Free Audit (form).
**Components required:** Same new form component as Growth Blueprint,
minimal field set.
**Status:** ⬜ Not started. **Linked from the Homepage already** — Hero,
Final CTA, and the Sticky Header all point here; currently 404s.

## Resources (`/resources`, Blog + Guides)
**Purpose:** SEO/top-of-funnel content, nurtures visitors not yet ready
to convert.
**Goal:** Organic traffic, contextual routing to relevant capability pages.
**Primary CTA:** Contextual per article, plus Book a Growth Consultation.
**Components required:** Article card, pagination — both new.
**Status:** ⬜ Not started.

## About (`/about`)
**Purpose:** Founder/team credibility — flagged repeatedly across this
project's history as a real trust gap for Healthcare/Real Estate
verticals specifically.
**Goal:** Human credibility signal.
**Primary CTA:** Book a Growth Consultation.
**Components required:** Team member card (new).
**Status:** ⬜ Not started.

## FAQ (`/faq`)
**Purpose:** Remove final objections before Audit/Consultation.
**Goal:** Deep-link to the specific page each answer concerns.
**Primary CTA:** Book a Growth Consultation.
**Components required:** Accordion component (new — no accordion exists
in this codebase yet, despite being explicitly listed as a Design System
component in the project's earlier planning phase).
**Status:** ⬜ Not started.

## Contact (`/contact`)
**Purpose:** Funnel terminus — the destination of nearly every CTA on
every other page.
**Goal:** Booked Consultation.
**Primary CTA:** Schedule/Submit (form + booking widget).
**Components required:** Form component, third-party scheduling widget
integration (vendor not yet chosen — see `CLAUDE.md`).
**Status:** ⬜ Not started. **This is the single most-linked-to route in
the current codebase and it doesn't exist yet** — building this should be
a near-term priority given how much of the Homepage already points to it.

## Privacy / Terms (`/privacy`, `/terms`)
**Purpose:** Legal compliance.
**Goal:** N/A.
**Primary CTA:** N/A.
**Components required:** None beyond the `Container`/`Section` primitives
— long-form text content.
**Status:** ⬜ Not started. **Linked from the Footer already.**

---

## Priority Note
Every one of these gaps is already a live 404 on the current Homepage —
`/contact`, `/audit`, and `/growth-blueprint` are the three most-linked
routes on the entire site and none of them exist yet. If prioritizing,
build in that order: **Contact → Audit Request → Growth Blueprint**,
since those three alone would resolve every currently-broken CTA on the
built Homepage.
