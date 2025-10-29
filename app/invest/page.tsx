import InvestExperience, {
  type CurrencyWallet,
  type HeroStat,
  type ProductSection,
  type SupportHighlight,
  type TraderProject,
  type VisionHighlight,
  type WorkflowStep,
  DEFAULT_INVESTMENT_BALANCE,
} from "@/components/invest/InvestExperience";

const heroStats: HeroStat[] = [
  { label: "Investors onboarded", value: "84k+" },
  { label: "Average daily ROI", value: "64.2%" },
  { label: "Assets monitored", value: "₦18.6b" },
];

const visionHighlights: VisionHighlight[] = [
  {
    title: "Executive spacing",
    description: "Wide gutters and breathing room keep controls legible on widescreen desktops while preserving focus on ROI insight.",
    metric: "Grid 1200px",
  },
  {
    title: "Signal-weighted panels",
    description: "Primary calls to action sit on frosted panels so investors see vault balance and currency flows without visual clutter.",
    metric: "Noise ↓68%",
  },
  {
    title: "Adaptive focus mode",
    description: "Sections collapse elegantly on mobile, yet the desktop canvas maintains a professional cadence investors expect.",
    metric: "PC first",
  },
];

const currencyWallets: CurrencyWallet[] = [
  {
    code: "NGN",
    name: "Nigerian Naira",
    description: "Instant top up via bank transfer or USSD",
    limits: "₦5,000 – ₦5,000,000",
    status: "Instant",
  },
  {
    code: "USD",
    name: "US Dollar (USDT-TRC20)",
    description: "Stablecoin vault with 24/7 settlement",
    limits: "$50 – $20,000",
    status: "5 min",
  },
  {
    code: "GBP",
    name: "British Pound",
    description: "Local account for UK investors",
    limits: "£100 – £10,000",
    status: "Same day",
  },
  {
    code: "KES",
    name: "Kenyan Shilling",
    description: "M-Pesa collections with FX hedge",
    limits: "KSh 10,000 – 1,500,000",
    status: "Instant",
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
    key: "copy",
    title: "Copy Trading Pods",
    eyebrow: "Compounding desk signals with auto-withdraw",
    projects: [
      {
        title: "Quantum Momentum Pool",
        subtitle: "AI mirrors Nasdaq scalpers with layered hedges",
        category: "Copy Trading",
        roi: "69% per day",
        cycle: "25 day circuit",
        min: 6800,
        earnings: 4690,
        badge: "Hot",
        progress: 0.82,
        image:
          "https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1200",
        highlights: [
          "Instant activation",
          "Drawdown guard",
          "Manager chat",
        ],
      },
      {
        title: "Seoul Alpha Grid",
        subtitle: "Smart city quant desk rebalancing nightly",
        category: "Copy Trading",
        roi: "66% per day",
        cycle: "28 day orbit",
        min: 7200,
        earnings: 4750,
        progress: 0.58,
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
        highlights: ["Auto compound", "24/7 support", "Loss-limit AI"],
      },
    ],
  },
  {
    key: "daily",
    title: "Daily Flip Missions",
    eyebrow: "Rapid strategies crediting ROI every midnight",
    projects: [
      {
        title: "Lisbon FX Sprint",
        subtitle: "Micro lots cycling through EUR/USD breakouts",
        category: "Daily",
        roi: "61% per day",
        cycle: "15 day dash",
        min: 3200,
        earnings: 1950,
        badge: "New",
        progress: 0.35,
        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200",
        highlights: ["Daily release", "Fast withdrawal", "Realtime ticker"],
      },
      {
        title: "Accra Commodities Pair",
        subtitle: "Cargo-backed swaps with guaranteed hedges",
        category: "Daily",
        roi: "63% per day",
        cycle: "20 day glide",
        min: 4500,
        earnings: 2835,
        progress: 0.64,
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200",
        highlights: ["Same-day matching", "Zero downtime", "Dedicated manager"],
      },
    ],
  },
  {
    key: "vip",
    title: "VIP Quant Access",
    eyebrow: "Invite-only desks with personal managers",
    projects: [
      {
        title: "Dubai Platinum Algo",
        subtitle: "Luxury desk arbitraging MENA crypto flows",
        category: "VIP",
        roi: "70% per day",
        cycle: "30 day residency",
        min: 15000,
        earnings: 10500,
        badge: "VIP 1",
        progress: 0.24,
        image:
          "https://images.unsplash.com/photo-1464036388609-7475377357d1?q=80&w=1200",
        highlights: ["Dedicated butler", "Level 2 commission", "Priority exit"],
      },
      {
        title: "Zurich Quantum Labs",
        subtitle: "Fintech research licensing daily payouts",
        category: "VIP",
        roi: "72% per day",
        cycle: "35 day residency",
        min: 22000,
        earnings: 15840,
        progress: 0.46,
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200",
        highlights: ["Audit ready", "AI monitor", "24h concierge"],
      },
    ],
  },
];

const workflowSteps: WorkflowStep[] = [
  {
    title: "Pick a trader mission",
    description:
      "Review ROI, cycle length and risk rating from the curated opportunity board.",
  },
  {
    title: "Fund your vault",
    description:
      "Top up with NGN, USD, GBP or KES and lock in rewards immediately.",
  },
  {
    title: "Track & withdraw",
    description:
      "See live crediting on the dashboard and schedule withdrawals in one tap.",
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
      currencyWallets={currencyWallets}
      traderTicker={traderTicker}
      productSections={productSections}
      workflowSteps={workflowSteps}
      supportHighlights={supportHighlights}
      initialBalance={DEFAULT_INVESTMENT_BALANCE}
      visionHighlights={visionHighlights}
    />
  );
}
