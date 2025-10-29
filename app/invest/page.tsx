import InvestExperience, {
  type HeroStat,
  type ProductSection,
  type SupportHighlight,
  type TraderProject,
  type VisionHighlight,
  type WorkflowStep,
  DEFAULT_INVESTMENT_BALANCE,
} from "@/components/invest/InvestExperience";

const heroStats: HeroStat[] = [
  { label: "Desk oversight score", value: "AA+" },
  { label: "Average ROI target", value: "69%" },
  { label: "Compliance uptime", value: "99.9%" },
];

const visionHighlights: VisionHighlight[] = [
  {
    title: "Measured pacing",
    description:
      "Wide gutters, restrained colour and disciplined typography deliver a calmer first impression for serious capital.",
    metric: "Cadence",
  },
  {
    title: "Executive narrative",
    description:
      "Hero copy now focuses on desk oversight, risk controls and governance instead of wallet clutter.",
    metric: "Tone",
  },
  {
    title: "Desktop polish",
    description:
      "Cards breathe, align to a 1200px grid and keep the call to action sharply anchored on large displays.",
    metric: "Grid",
  },
];

const traderTicker: TraderProject[] = [
  {
    name: "Singapore Momentum Desk",
    code: "FX-9381",
    country: "Singapore",
    roi: "69% ROI / day",
    cycle: "24h scalping loops",
    min: 6800,
    earnings: 4690,
    capacity: 0.78,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200",
  },
  {
    name: "Dubai Liquidity Engine",
    code: "CR-2041",
    country: "UAE",
    roi: "64% ROI / day",
    cycle: "30 day copy run",
    min: 12500,
    earnings: 9400,
    capacity: 0.54,
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200",
  },
  {
    name: "Nairobi Swing Grid",
    code: "AF-5310",
    country: "Kenya",
    roi: "60% ROI / day",
    cycle: "21 day swing set",
    min: 5400,
    earnings: 3240,
    capacity: 0.91,
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200",
  },
  {
    name: "Tokyo Breakout Relay",
    code: "JP-8812",
    country: "Japan",
    roi: "68% ROI / day",
    cycle: "18 day breakout",
    min: 7800,
    earnings: 5300,
    capacity: 0.37,
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200",
  },
];

const productSections: ProductSection[] = [
  {
    key: "spotlight",
    title: "Spotlight missions",
    eyebrow: "Fewer, sharper desks curated for executive portfolios",
    projects: [
      {
        title: "Zurich Quantum Relay",
        subtitle: "Structured arbitrage desk scaling 60%+ returns with drawdown buffers",
        category: "Quant",
        roi: "69% per day",
        cycle: "28 day supervision",
        min: 9800,
        earnings: 6762,
        badge: "Flagship",
        progress: 0.41,
        image:
          "https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1200",
        highlights: ["Audit trail", "Capital guard", "Desk concierge"],
      },
      {
        title: "Dubai Credit Syndicate",
        subtitle: "Private credit rotation smoothing volatility across Gulf treasuries",
        category: "Income",
        roi: "66% per day",
        cycle: "24 day mandate",
        min: 12500,
        earnings: 8250,
        progress: 0.58,
        image:
          "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200",
        highlights: ["Risk capped", "Instant reporting", "Concierge desk"],
      },
      {
        title: "Singapore Momentum Desk",
        subtitle: "FX momentum pod pairing human oversight with adaptive automation",
        category: "FX",
        roi: "64% per day",
        cycle: "18 day sprint",
        min: 7800,
        earnings: 4992,
        progress: 0.33,
        image:
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200",
        highlights: ["Manager chat", "Auto compounding", "Risk dial"],
      },
    ],
  },
];

const workflowSteps: WorkflowStep[] = [
  {
    title: "Study the brief",
    description:
      "Each mission surfaces governance notes, risk posture and oversight cadence before you commit capital.",
  },
  {
    title: "Commit deliberately",
    description:
      "Confirm your allocation against the minimum and align with your desk manager for onboarding.",
  },
  {
    title: "Review daily",
    description:
      "Once live, the dashboard streams ROI pacing, compliance checkpoints and withdrawal timelines.",
  },
];

const supportHighlights: SupportHighlight[] = [
  {
    title: "24/7 desk",
    description: "Access a dedicated relationship manager via chat or phone.",
  },
  {
    title: "Custody insured",
    description:
      "Cold storage vaults, biometric approvals and audit-grade reporting.",
  },
  {
    title: "Compliance ready",
    description: "Full KYC, KYT and proof-of-funds checkpoints across every wallet.",
  },
];

export default function Invest() {
  return (
    <InvestExperience
      heroStats={heroStats}
      traderTicker={traderTicker}
      productSections={productSections}
      workflowSteps={workflowSteps}
      supportHighlights={supportHighlights}
      initialBalance={DEFAULT_INVESTMENT_BALANCE}
      visionHighlights={visionHighlights}
    />
  );
}
