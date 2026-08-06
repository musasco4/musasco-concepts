export type PricingTier = {
  id: string;
  name: string;
  description: string;
  price: string; // Now a simple string e.g., "$150"
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
  note?: string;
};

export const pricingHero = {
  headline: "Growth Systems Built Around Your Business Goals",
  subheadline:
    "Choose the right level of support based on where your business is today. From understanding opportunities to building customer acquisition systems, we help businesses grow with clarity.",
  ctaPrimaryLabel: "Start Your Growth Audit",
  ctaSecondaryLabel: "Talk To Our Team",
};

export const pricingTiers: PricingTier[] = [
  {
    id: "audit",
    name: "Growth Audit",
    description: "For businesses that need clarity before investing in growth.",
    price: "$150",
    features: [
      "Business growth audit",
      "Digital presence review",
      "Competitor analysis",
      "Customer journey review",
      "Growth opportunity identification",
      "Marketing recommendations",
      "Growth roadmap",
    ],
    ctaLabel: "Start Your Growth Audit",
  },
  {
    id: "foundation",
    name: "Growth Foundation",
    description: "For businesses that need the right systems and tracking before scaling.",
    price: "$300+",
    features: [
      "Everything in Growth Audit",
      "Business direction review",
      "Customer journey improvements",
      "Google Analytics setup",
      "Google Search Console setup",
      "Meta Business Manager setup",
      "Meta Pixel setup",
      "Conversion tracking setup",
      "Digital presence improvements",
    ],
    ctaLabel: "Build My Foundation",
    note: "This package does NOT include website development or ads management. Need campaigns and customer acquisition? Upgrade to Growth Accelerator.",
  },
  {
    id: "accelerator",
    name: "Growth Accelerator",
    description: "For businesses ready to actively acquire customers through paid marketing.",
    price: "$500+",
    features: [
      "Everything in Growth Foundation",
      "Meta Ads management",
      "Google Ads management",
      "Campaign strategy",
      "Audience research",
      "Ad account structure",
      "Pixel optimisation",
      "Campaign monitoring",
      "Performance reporting",
      "Creative direction",
      "Ad copy recommendations",
    ],
    ctaLabel: "Start Growing",
    highlighted: true,
    note: "Advertising budget is separate. Clients pay Meta and Google directly. Recommended minimum advertising budget: $250/month.",
  },
  {
    id: "partner",
    name: "Growth Partner",
    description: "For businesses that want MUSASCO as their long-term outsourced growth team.",
    price: "Custom",
    features: [
      "Everything in Growth Accelerator",
      "Brand strategy",
      "Brand positioning",
      "Visual identity",
      "Logo development",
      "Website design and development",
      "Sales funnels",
      "Automation systems",
      "CRM setup",
      "Growth strategy sessions",
      "Continuous optimisation",
    ],
    ctaLabel: "Become a Growth Partner",
  },
];

export const pricingDisclaimer =
  "All packages start from the prices shown. Final investment depends on your business goals, requirements, and the growth systems needed to achieve your objectives.";

export const comparisonData = {
  headers: ["Feature", "Growth Audit", "Growth Foundation", "Growth Accelerator", "Growth Partner"],
  rows: [
    { feature: "Goal", values: ["Clarity", "Build Foundation", "Acquire Customers", "Scale Business"] },
    { feature: "Branding", values: ["No", "No", "No", "Yes"] },
    { feature: "Website Development", values: ["No", "No", "Optional", "Yes"] },
    { feature: "Ads Management", values: ["No", "No", "Included", "Included"] },
    { feature: "Tracking", values: ["Review", "Setup", "Advanced", "Advanced"] },
    { feature: "Price", values: ["$150", "$300+", "$500+", "Custom"] },
  ],
};

export const pricingFaq = {
  headline: "Common Questions",
  items: [
    {
      question: "Do you include advertising budget?",
      answer: "No. Clients pay Meta and Google directly. Our fees cover strategy, setup, management, optimisation and reporting.",
    },
    {
      question: "What minimum ad budget do you recommend?",
      answer: "We recommend starting from $250/month so campaigns can gather enough data for optimisation.",
    },
    {
      question: "Can I start small and scale?",
      answer: "Yes. Businesses can start with Growth Audit or Growth Foundation before moving into Growth Accelerator or Growth Partner.",
    },
    {
      question: "What happens after the Growth Audit?",
      answer: "We review your current setup, identify growth opportunities, and provide a roadmap. There is no obligation to continue.",
    },
  ],
};

export const pricingFinalCta = {
  headline: "Ready To Build Your Next Growth System?",
  ctaLabel: "Start Your Growth Audit",
};