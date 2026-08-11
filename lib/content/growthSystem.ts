export const growthHero = {
  headline: "The System Behind Predictable Growth.",
  subheadline: "MUSASCO connects the systems that attract customers, convert opportunities, and scale what works.",
  ctaLabel: "See Where Your System Is Leaking",
  ctaHref: "/contact",
};

export const growthOverview = {
  headline: "One Connected System.",
  subheadline: "Most businesses treat marketing as disconnected tasks. We treat it as infrastructure.",
  stages: [
    {
      id: "attract",
      label: "Attract",
      description: "Creates demand and brings the right people into the business.",
    },
    {
      id: "convert",
      label: "Convert",
      description: "Turns attention and traffic into qualified opportunities and customers.",
    },
    {
      id: "scale",
      label: "Scale",
      description: "Makes what works measurable, repeatable, and increasingly efficient.",
    },
  ],
};

export type EngineStage = {
  id: string;
  name: string;
  problem: string;
  system: string;
  outcome: string;
  capabilities: string[];
};

export const growthEngines: Record<string, EngineStage> = {
  attract: {
    id: "attract",
    name: "Attract",
    problem: "Not enough of the right people are discovering the business.",
    system: "Paid acquisition + targeting + demand generation.",
    outcome: "A healthier flow of qualified opportunities.",
    capabilities: [
      "Meta Ads Management",
      "Google Ads Management",
      "Audience Targeting",
      "Demand Generation",
      "Search Visibility",
    ],
  },
  convert: {
    id: "convert",
    name: "Convert",
    problem: "Attention isn't becoming enough customers.",
    system: "Landing pages + website experience + conversion optimisation.",
    outcome: "More of the right visitors become customers.",
    capabilities: [
      "Landing Page Design",
      "Website Experience",
      "Conversion Optimisation",
      "Customer Journey Mapping",
      "Lead Capture Systems",
    ],
  },
  scale: {
    id: "scale",
    name: "Scale",
    problem: "What works isn't being measured or repeated consistently.",
    system: "Tracking + analytics + optimisation + automation.",
    outcome: "Growth becomes more repeatable.",
    capabilities: [
      "Analytics & Tracking",
      "Performance Reporting",
      "Marketing Automation",
      "Growth Strategy",
      "Continuous Optimisation",
    ],
  },
};

export const growthProcess = {
  headline: "How We Build Your System",
  steps: [
    {
      step: 1,
      name: "Audit",
      description: "We identify where your current system is leaking value.",
    },
    {
      step: 2,
      name: "Blueprint",
      description: "We design the specific infrastructure required to fix it.",
    },
    {
      step: 3,
      name: "Build",
      description: "We implement the systems across Attract, Convert, and Scale.",
    },
    {
      step: 4,
      name: "Optimise",
      description: "We measure, refine, and compound the results over time.",
    },
  ],
};

export const growthCta = {
  headline: "See Where Your System Is Leaking.",
  subheadline: "Book a Growth Audit to identify the biggest bottleneck in your customer journey.",
  ctaLabel: "Start Your Growth Audit",
  ctaHref: "/contact",
};