/**
 * Homepage content — single source of truth for every section's copy.
 * As of this round: reconciled back to the Growth System™ framing that's
 * actually live in production (musasco-concepts.vercel.app), per Round 2
 * of the Homepage Refinement Review — not the branding-agency direction
 * from the round before that, which is superseded here, not layered on
 * top of.
 */

export const hero = {
  eyebrow: "THE MUSASCO GROWTH SYSTEM™",
  headline: "Growth, Engineered.",
  subheadline:
    "MUSASCO Concepts helps growing businesses attract more customers, convert more of them, and scale what works — through one system, not scattered vendors.",
  ctaPrimaryLabel: "Build Your Growth System",
  ctaSecondaryLabel: "Start a Free Audit",
};

export type HeroMetricCard = { icon: "trending-up" | "target" | "bar-chart"; label: string; indicator: string };

/**
 * Hero Visual — "Growth Workspace" concept, approved this round.
 * Explicitly NOT branding/mockup imagery (no business cards, no brand
 * guidelines, no packaging) — a website preview plus qualitative growth
 * indicators. Per the explicit "no fake claims or fabricated numbers"
 * instruction, these are deliberately qualitative (trend direction, not
 * a specific percentage) rather than the "+38% Qualified Leads"-style
 * numeric example given in the brief — a made-up percentage is a
 * fabricated number regardless of how it's styled, and the instruction
 * that immediately followed those examples said not to use one.
 */
export const heroMetricCards: HeroMetricCard[] = [
  { icon: "trending-up", label: "Lead Volume", indicator: "Trending Up" },
  { icon: "target", label: "Conversion Rate", indicator: "Improving" },
  { icon: "bar-chart", label: "Campaign Performance", indicator: "On Track" },
];

export const heroWorkspace = {
  browserLabel: "yourbusiness.com",
};

/**
 * trustStrip — re-added per explicit request to fix a stale Vercel
 * deployment error (TrustStrip.tsx importing this export after it was
 * removed from this file). Follows the same Stat[] shape already used by
 * RESULTS_STATS below (type declared further down this file — TypeScript
 * type aliases are accessible file-wide regardless of declaration order,
 * so this isn't a forward-reference problem), since that's the existing
 * pattern in this file for a labeled-number data set, and the four
 * values requested are the same approved figures already used there.
 */
export const trustStrip: Stat[] = [
  { id: "years", value: 7, suffix: "+", label: "Years Experience", sourceHref: "", sourceLabel: "" },
  { id: "projects", value: 50, suffix: "+", label: "Projects Completed", sourceHref: "", sourceLabel: "" },
  { id: "industries", value: 10, suffix: "+", label: "Industries Served", sourceHref: "", sourceLabel: "" },
  { id: "commitment", value: 100, suffix: "%", label: "Commitment to Client Success", sourceHref: "", sourceLabel: "" },
];

/**
 * TrustSection — positioned directly after the Hero per the explicit
 * instruction to "strengthen credibility before introducing solutions."
 * Every value below is a clearly-marked placeholder — no invented company
 * names, no fabricated review count, no fabricated testimonial quotes,
 * per that same standing instruction ("do NOT invent fake companies").
 *
 * CONTENT GAP, flagged directly rather than worked around: the brief that
 * requested this section's redesign said to "use only the rewritten
 * testimonial copy," implying real testimonial copy exists somewhere —
 * it wasn't provided. `testimonials` below is an honest "coming soon"
 * state in the exact requested display format (stars + text only, no
 * name/company/headline), not a filled-in-sounding fake quote. Swap in
 * real copy the moment it exists; no component change needed.
 */
export type TestimonialSlot = { stars: number; quote: string };

export const trustSection = {
  intro: "Built in Lagos — serving growth-focused businesses across Nigeria, the UK, and Europe.",
  logosLabel: "Trusted by businesses across multiple industries",
  logoMarkCount: 6,
  reviewScore: { value: "—", label: "Client reviews coming soon" },
  testimonials: [
    { stars: 0, quote: "Client testimonials will appear here once the first engagements are complete." },
  ] satisfies TestimonialSlot[],
};

export const problemStatement = {
  headlineStrong: "Most Businesses Don't Have a Growth Problem.",
  headlineMuted: "They Have a Fragmented One.",
  body:
    "A freelancer runs your ads. A different agency built your website. Somebody else handles your brand. None of them are responsible for whether any of it turns into paying customers — because none of them can see the whole system. That's not a marketing problem. It's a systems problem.",
};

export type Engine = {
  id: "attract" | "convert" | "scale";
  name: string;
  description: string;
  linkLabel: string;
  href: string;
};

export const growthSystem = {
  eyebrow: "THE MUSASCO GROWTH SYSTEM™",
  headline: "One System. Three Engines.",
  subheadline:
    "Everything we do exists to move one of three numbers: how many people notice you, how many of them become customers, and how much bigger that number gets over time.",
  ctaLabel: "See the Full Growth System",
  ctaHref: "/growth-system",
  engines: [
    {
      id: "attract",
      name: "Attract",
      description:
        "Get the right people to notice you — through Meta and Google advertising built around who actually buys, not just who clicks.",
      linkLabel: "View Attract capabilities",
      href: "/services#attract",
    },
    {
      id: "convert",
      name: "Convert",
      description:
        "Turn attention into paying customers — landing pages, website experience, and conversion optimization engineered around one job: closing.",
      linkLabel: "View Convert capabilities",
      href: "/services#convert",
    },
    {
      id: "scale",
      name: "Scale",
      description:
        "Turn what's working into what's repeatable — ongoing strategy and optimization that compounds instead of resetting every quarter.",
      linkLabel: "View Scale capabilities",
      href: "/services#scale",
    },
  ] satisfies Engine[],
};

export type ProcessStep = { step: number; name: string; description: string };

/**
 * Process — new section this round, positioned after How We Help.
 * Deliberately short per the brief ("keep it simple... short
 * descriptions only") — this answers "what happens if I hire them,"
 * which nothing else on the page currently answers.
 */
export const process = {
  headline: "How We Work",
  subheadline: "Four steps. No surprises.",
  steps: [
    { step: 1, name: "Discovery", description: "We learn your business, your customers, and where growth is actually stalling." },
    { step: 2, name: "Strategy", description: "A clear plan for which engine to fix first, and why — before any spend goes out." },
    { step: 3, name: "Execution", description: "We build and launch — landing pages, campaigns, and the systems behind them." },
    { step: 4, name: "Growth", description: "We measure what's working, cut what isn't, and keep compounding from there." },
  ] satisfies ProcessStep[],
};

export type Stat = {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sourceHref: string;
  sourceLabel: string;
};

/**
 * CONTENT NOTE — approved, real content (company-standing facts, not
 * case-study-derived performance claims). Numbers confirmed this round:
 * 50+ Projects Completed (superseding the previous round's unconfirmed
 * 100+ figure). Still needs founder sign-off before production — this
 * file states what to display, not that it's been independently verified.
 */
export const RESULTS_STATS: Stat[] = [
  { id: "years", value: 7, suffix: "+", label: "Years Experience", sourceHref: "", sourceLabel: "" },
  { id: "projects", value: 50, suffix: "+", label: "Projects Completed", sourceHref: "", sourceLabel: "" },
  { id: "industries", value: 10, suffix: "+", label: "Industries Served", sourceHref: "", sourceLabel: "" },
  { id: "commitment", value: 100, suffix: "%", label: "Commitment to Client Success", sourceHref: "", sourceLabel: "" },
];

export const resultsStrip = {
  headline: "A Track Record You Can Point To",
  subheadline: "Numbers a prospective client can actually verify — not vanity metrics.",
};

export type Industry = { name: string; description: string; href: string };

export const industriesGrid = {
  headline: "Built for Businesses Ready to Grow",
  subheadline: "Different industries. The same underlying growth problem.",
  industries: [
    { name: "SMEs", description: "Growth systems for businesses ready to scale past word-of-mouth.", href: "/industries/smes" },
    { name: "Professional Services", description: "Turn expertise into a predictable pipeline of qualified clients.", href: "/industries/professional-services" },
    { name: "Home Services", description: "Fill the schedule without relying on referrals alone.", href: "/industries/home-services" },
    { name: "Healthcare", description: "Grow patient volume without compromising trust.", href: "/industries/healthcare" },
    { name: "Real Estate", description: "Systematic lead flow in a market that never slows down.", href: "/industries/real-estate" },
    { name: "Local Businesses", description: "Compete with the big budgets using a smarter system, not a bigger one.", href: "/industries/local-businesses" },
  ] satisfies Industry[],
};

export type PortfolioItem = {
  src: string;
  alt: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
};

/**
 * PORTFOLIO_SHOWCASE — approved structure this round: Industry / Challenge
 * / Solution / Outcome per card, "placeholders only, do not invent
 * results" — every field below is explicitly bracketed as a placeholder,
 * not written to read as a real (but fabricated) case study. Swap in real
 * client data field-by-field as engagements complete; no component
 * change required.
 */
export const PORTFOLIO_SHOWCASE: PortfolioItem[] = [
  {
    src: "https://images.unsplash.com/photo-1751257983922-a627088d4c21?w=700&q=70&auto=format&fit=crop",
    alt: "A designer's workspace with a laptop and brand materials",
    industry: "[Industry — added at case study launch]",
    challenge: "[Challenge — added at case study launch]",
    solution: "[Solution — added at case study launch]",
    outcome: "[Outcome — added at case study launch]",
  },
  {
    src: "https://images.unsplash.com/photo-1758518730384-be3d205838e8?w=700&q=70&auto=format&fit=crop",
    alt: "Two professionals shaking hands after a business consultation",
    industry: "[Industry — added at case study launch]",
    challenge: "[Challenge — added at case study launch]",
    solution: "[Solution — added at case study launch]",
    outcome: "[Outcome — added at case study launch]",
  },
  {
    src: "https://images.unsplash.com/photo-1764818958908-d5efcec563d1?w=700&q=70&auto=format&fit=crop",
    alt: "A creative desk flat-lay with brand stationery and planning materials",
    industry: "[Industry — added at case study launch]",
    challenge: "[Challenge — added at case study launch]",
    solution: "[Solution — added at case study launch]",
    outcome: "[Outcome — added at case study launch]",
  },
];

export const caseStudyPreviews = {
  headline: "How We've Helped Businesses Grow",
  subheadline: "Case studies added here as each engagement completes.",
};

export const guarantee = {
  headline: "Start Without Risk.",
  body:
    "Every relationship begins with a free Growth Audit — no obligation, no pressure. If the Growth Blueprint we build for you doesn't give you a clear, specific path to more customers, we'll rework it until it does.",
};

export const blueprintCallout = {
  badge: "RECOMMENDED FIRST STEP",
  headline: "Not Sure Where to Start? Start With Your Growth Blueprint.",
  body:
    "A one-time, custom roadmap that applies the Growth System™ to your specific business — which engine to fix first, and why. No long-term commitment. Just clarity.",
  ctaLabel: "Get My Growth Blueprint",
  ctaHref: "/growth-blueprint",
  skipLabel: "Already know what you need? Start Growing",
  skipHref: "/contact",
};

export const finalCta = {
  headline: "Let's Build Your Growth System.",
  subheadline: "Book a free Growth Call — no pressure, no obligation, just a clear next step.",
};
