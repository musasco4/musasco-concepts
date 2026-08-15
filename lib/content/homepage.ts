/**
 * Homepage content — single source of truth for every section's copy.
 */

export const hero = {
  eyebrow: "THE MUSASCO GROWTH SYSTEM™",
  headline: "Growth, Engineered.",
  subheadline:
    "Musasco helps growing businesses attract more customers, convert more of them, and scale what works — through one system, not scattered vendors.",
  ctaPrimaryLabel: "Build Your Growth System",
  ctaSecondaryLabel: "Start a Free Audit",
};

export type HeroMetricCard = {
  icon: "trending-up" | "target" | "bar-chart";
  label: string;
  indicator: string;
};

/**
 * Hero Visual — "Growth Workspace" concept, approved this round.
 * Explicitly NOT branding/mockup imagery — a website preview plus qualitative
 * growth indicators. These are deliberately qualitative.
 */
export const heroMetricCards: HeroMetricCard[] = [
  {
    icon: "trending-up",
    label: "Lead Volume",
    indicator: "Trending Up",
  },
  {
    icon: "target",
    label: "Conversion Rate",
    indicator: "Improving",
  },
  {
    icon: "bar-chart",
    label: "Campaign Performance",
    indicator: "On Track",
  },
];

export const heroWorkspace = {
  browserLabel: "yourbusiness.com",
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
 * trustStrip — company-standing facts displayed in the Trust strip below the hero.
 */
export const trustStrip: Stat[] = [
  {
    id: "years",
    value: 7,
    suffix: "+",
    label: "Years Experience",
    sourceHref: "",
    sourceLabel: "",
  },
  {
    id: "projects",
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    sourceHref: "",
    sourceLabel: "",
  },
  {
    id: "industries",
    value: 10,
    suffix: "+",
    label: "Industries Served",
    sourceHref: "",
    sourceLabel: "",
  },
  {
    id: "commitment",
    value: 100,
    suffix: "%",
    label: "Commitment to Client Success",
    sourceHref: "",
    sourceLabel: "",
  },
];

export type TestimonialSlot = {
  stars: number;
  quote: string;
  author?: string;
  role?: string;
  company?: string;
  image?: string;
};

/**
 * TrustSection — approved client perspective.
 */
export const trustSection = {
  intro:
    "Built in Lagos — serving growth-focused businesses across Nigeria, the UK, Europe, the USA, and globally.",

  logosLabel: "Trusted by businesses across multiple industries",

  logoMarkCount: 6,

  reviewScore: {
    value: "5",
    label: "Selected client perspective",
  },

  testimonials: [
    {
      stars: 5,
      quote:
        "Musasco did some mad ass magic in branding/growing my business and it is only befitting to match this elegance with mad ass creativeness.",
    },
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
      href: "/growth-system#attract",
    },
    {
      id: "convert",
      name: "Convert",
      description:
        "Turn attention into paying customers — landing pages, website experience, and conversion optimization engineered around one job: closing.",
      linkLabel: "View Convert capabilities",
      href: "/growth-system#convert",
    },
    {
      id: "scale",
      name: "Scale",
      description:
        "Turn what's working into what's repeatable — ongoing strategy and optimization that compounds instead of resetting every quarter.",
      linkLabel: "View Scale capabilities",
      href: "/growth-system#scale",
    },
  ] satisfies Engine[],
};

export type ProcessStep = {
  step: number;
  name: string;
  description: string;
};

export const process = {
  headline: "How We Work",

  subheadline: "Four steps. No surprises.",

  steps: [
    {
      step: 1,
      name: "Discovery",
      description:
        "We learn your business, your customers, and where growth is actually stalling.",
    },
    {
      step: 2,
      name: "Strategy",
      description:
        "A clear plan for which engine to fix first, and why — before any spend goes out.",
    },
    {
      step: 3,
      name: "Execution",
      description:
        "We build and launch — landing pages, campaigns, and the systems behind them.",
    },
    {
      step: 4,
      name: "Growth",
      description:
        "We measure what's working, cut what isn't, and keep compounding from there.",
    },
  ] satisfies ProcessStep[],
};

/**
 * RESULTS_STATS — approved company-standing facts.
 */
export const RESULTS_STATS: Stat[] = [
  {
    id: "years",
    value: 7,
    suffix: "+",
    label: "Years Experience",
    sourceHref: "",
    sourceLabel: "",
  },
  {
    id: "projects",
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    sourceHref: "",
    sourceLabel: "",
  },
  {
    id: "industries",
    value: 10,
    suffix: "+",
    label: "Industries Served",
    sourceHref: "",
    sourceLabel: "",
  },
  {
    id: "commitment",
    value: 100,
    suffix: "%",
    label: "Commitment to Client Success",
    sourceHref: "",
    sourceLabel: "",
  },
];

export const resultsStrip = {
  headline: "A Track Record You Can Point To",

  subheadline:
    "Numbers a prospective client can actually verify — not vanity metrics.",
};

export type Industry = {
  name: string;
  description: string;
  href: string;
};

export const industriesGrid = {
  headline: "Built for Businesses Ready to Grow",

  subheadline:
    "Different industries. The same underlying growth problem.",

  industries: [
    {
      name: "SMEs",
      description:
        "Growth systems for businesses ready to scale past word-of-mouth.",
      href: "/industries",
    },
    {
      name: "Professional Services",
      description:
        "Turn expertise into a predictable pipeline of qualified clients.",
      href: "/industries",
    },
    {
      name: "Home Services",
      description:
        "Fill the schedule without relying on referrals alone.",
      href: "/industries",
    },
    {
      name: "Healthcare",
      description:
        "Grow patient volume without compromising trust.",
      href: "/industries",
    },
    {
      name: "Real Estate",
      description:
        "Systematic lead flow in a market that never slows down.",
      href: "/industries",
    },
    {
      name: "Local Businesses",
      description:
        "Compete with the big budgets using a smarter system, not a bigger one.",
      href: "/industries",
    },
   ] satisfies Industry[],
};

/**
 * Portfolio / Case Study content
 *
 * IMPORTANT:
 * The `id` field is intentionally included because CaseStudyPreviews.tsx
 * uses `item.id` as the React key when rendering these cards.
 */
export type PortfolioItem = {
  id: string;
  src: string;
  alt: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export const PORTFOLIO_SHOWCASE: PortfolioItem[] = [
  {
    id: "zee-chilled-party",

    src:
      "https://images.unsplash.com/photo-1751257983922-a627088d4c21?w=700&q=70&auto=format&fit=crop",

    alt: "Food and catering presentation for Zee Chilled Party",

    industry: "Food, Catering & Events",

    challenge:
      "Zee Chilled Party needed stronger brand presentation and visibility to attract more customers and generate more orders.",

    solution:
      "Musasco improved the brand presentation and customer-facing marketing to create a stronger, more compelling presence for the business.",

    outcome:
      "40%+ revenue growth, increased visibility, and more customer orders.",
  },

  {
    id: "lickrish",

    src:
      "https://images.unsplash.com/photo-1758518730384-be3d205838e8?w=700&q=70&auto=format&fit=crop",

    alt: "Bakery and catering products representing Lickrish",

    industry: "Snacks, Bakery & Catering",

    challenge:
      "Lickrish needed stronger visibility and a better customer-facing presence to help turn attention into actual orders.",

    solution:
      "Musasco strengthened the brand's presentation and marketing presence to make the business more visible to potential customers.",

    outcome:
      "Lickrish gained stronger visibility and began receiving orders.",
  },
];

export const caseStudyPreviews = {
  headline: "How We've Helped Businesses Grow",

  subheadline:
    "Real work, real businesses, and measurable outcomes built to move businesses forward.",
};

export const guarantee = {
  headline: "Start Without Risk.",

  body:
    "Every relationship begins with a free Growth Audit — no obligation, no pressure. If the Growth Blueprint we build for you doesn't give you a clear, specific path to more customers, we'll rework it until it does.",
};

export const blueprintCallout = {
  badge: "RECOMMENDED FIRST STEP",

  headline:
    "Not Sure Where to Start? Start With Your Growth Blueprint.",

  body:
    "A one-time, custom roadmap that applies the Growth System™ to your specific business — which engine to fix first, and why. No long-term commitment. Just clarity.",

  ctaLabel: "Get My Growth Blueprint",

  ctaHref: "/growth-audit",

  skipLabel: "Already know what you need? Start Growing",

  skipHref: "/pricing",
};

export const finalCta = {
  headline: "Let's Build Your Growth System.",

  subheadline:
    "Book a free Growth Call — no pressure, no obligation, just a clear next step.",
};