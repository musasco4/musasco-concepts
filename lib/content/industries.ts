export type IndustryEngine = "Attract" | "Convert" | "Scale";

export type Industry = {
  id: string;
  name: string;
  headline: string;
  challenge: string;
  systemSolution: string;
  outcome: string;
  engines: IndustryEngine[];
};

export const industriesHero = {
  eyebrow: "INDUSTRIES WE BUILD FOR",
  headline: "Growth Systems for Every Industry",
  subheadline:
    "The underlying growth problem is often the same. The system required to fix it is what changes.",
};

export const industries: Industry[] = [
  {
    id: "smes",
    name: "SMEs",
    headline: "Scale Past Word-of-Mouth",
    challenge:
      "Reliance on referrals creates unpredictable revenue. Growth stalls when the network dries up.",
    systemSolution:
      "Build a repeatable acquisition engine and a professional digital presence that converts strangers into clients.",
    outcome: "Predictable lead flow independent of personal networks.",
    engines: ["Attract", "Convert"],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    headline: "Turn Expertise into Pipeline",
    challenge:
      "High trust requirements mean long sales cycles. Generic marketing fails to qualify leads effectively.",
    systemSolution:
      "Targeted demand generation combined with authority-building landing pages and automated follow-up.",
    outcome: "A consistent pipeline of qualified, high-value clients.",
    engines: ["Attract", "Convert"],
  },
  {
    id: "home-services",
    name: "Home Services",
    headline: "Fill the Schedule Systematically",
    challenge:
      "Seasonal dips and emergency-only calls. High competition for local visibility.",
    systemSolution:
      "Local search dominance and paid acquisition with frictionless booking and quote systems.",
    outcome: "Full schedules year-round with higher margin jobs.",
    engines: ["Attract", "Convert"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    headline: "Grow Patient Volume Trustingly",
    challenge:
      "Strict compliance and high trust barriers. Patients research extensively before booking.",
    systemSolution:
      "Educational content and precise targeting with compliant, reassuring patient journeys.",
    outcome: "Increased patient bookings with better retention.",
    engines: ["Attract", "Convert"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    headline: "Systematic Lead Flow",
    challenge:
      "Market volatility and high lead volume but low qualification. Agents waste time on unready buyers.",
    systemSolution:
      "Broad awareness campaigns filtered through automated qualification and nurture sequences.",
    outcome: "Agents spend time closing, not chasing cold leads.",
    engines: ["Attract", "Convert", "Scale"],
  },
  {
    id: "local-businesses",
    name: "Local Businesses",
    headline: "Compete Without Big Budgets",
    challenge:
      "Outspent by chains. Need maximum efficiency from every marketing dollar.",
    systemSolution:
      "Hyper-local targeting and optimized conversion paths to maximize ROI.",
    outcome: "Dominant local presence with efficient ad spend.",
    engines: ["Attract", "Scale"],
  },
];