export type GrowthStory = {
  id: string;
  businessName: string;
  category: string;
  description: string;
  challenge: string;
  work: string[];
  result: string;
  resultHighlights: string[];
  caseStudyHref?: string;
};

export const resultsHero = {
  eyebrow: "SELECTED RESULTS",
  headline: "Growth Should Be Visible.",
  subheadline: "We work with ambitious businesses to build the systems, creative and customer journeys that turn visibility into real demand.",
  supportingStatement: "Here are a few businesses we've helped move forward.",
};

export const growthStories: GrowthStory[] = [
  {
    id: "zee-chilled-party",
    businessName: "Zee Chilled Party",
    category: "Food, Catering & Events",
    description: "A local food and catering business offering fruit salad, food packages and catering services for events.",
    challenge: "The business had products and services people could buy, but needed stronger visibility and more attention from potential customers.",
    work: [
      "Improving brand and product presentation",
      "Creating stronger customer-facing promotional materials",
      "Supporting visibility and awareness",
      "Helping communicate products and services more clearly",
      "Supporting promotional efforts to attract more customers",
    ],
    result: "Through the work, Zee Chilled Party increased its visibility, began receiving more orders and achieved at least 40% revenue growth.",
    resultHighlights: ["Increased visibility", "More orders", "Revenue growth", "Positive owner feedback"],
    caseStudyHref: "/case-studies/zee-chilled-party",
  },
  {
    id: "lickrish",
    businessName: "Lickrish",
    category: "Snacks, Bakery & Catering",
    description: "A local food/snacks brand offering cakes, parfait, bread, ice cream and catering services.",
    challenge: "The business had a broad product and service offering but needed stronger visibility and customer attention.",
    work: [
      "Product presentation",
      "Promotional creative",
      "Brand visibility",
      "Customer-facing marketing materials",
      "Communicating the product range more effectively",
      "Supporting customer acquisition efforts",
    ],
    result: "After the work, Lickrish began receiving orders and gained stronger visibility among potential customers.",
    resultHighlights: ["Increased visibility", "Started receiving orders", "Growing customer demand"],
  },
];

export const resultsShowcase = {
  headline: "Real Businesses. Real Progress.",
  subheadline: "We work with businesses that have something worth growing. The goal is simple: make them more visible, make it easier for customers to choose them, and build the systems that help demand turn into growth.",
};

export const resultsOpportunity = {
  headline: "Your Business Could Be Our Next Growth Story.",
  subheadline: "We're not looking to fill a portfolio with logos. We're looking to work with businesses that are serious about becoming more visible, attracting more customers and building something that can grow.",
  closingStatement: "If your business has something worth growing, let's build the next result together.",
  ctaLabel: "Build My Growth System",
  ctaHref: "/pricing",
};

export const resultsFeedback = {
  headline: "Your Growth Story Could Be Next.",
  subheadline: "We're continuing to collect feedback and document the businesses we help. As the portfolio grows, so will the stories, lessons and results behind the work.",
};