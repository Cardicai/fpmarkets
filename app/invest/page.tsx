import Link from "next/link";
import Surface from "@/components/ui/Surface";
import TabBar from "@/components/ui/TabBar";
import { naira } from "@/components/ui/NA";

type TraderProject = {
  name: string;
  code: string;
  country: string;
  roi: string;
  cycle: string;
  min: number;
  earnings: number;
  capacity: number;
  image: string;
};

type Product = {
  title: string;
  subtitle: string;
  category: string;
  roi: string;
  cycle: string;
  min: number;
  earnings: number;
  badge?: string;
  progress: number;
  image: string;
  highlights: string[];
};

const heroStats = [
  { label: "Investors onboarded", value: "84k+" },
  { label: "Average daily ROI", value: "64.2%" },
  { label: "Assets monitored", value: "₦18.6b" },
];

const balanceInsights = [
  { label: "Today's ROI", value: naira(184000), detail: "+61% vs yesterday" },
  { label: "Active projects", value: "7", detail: "Across 3 strategies" },
];

const currencyWallets = [
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
    name: "Netherlands SkyWheel",
    code: "PG398165",
    country: "Netherlands",
    roi: "62% ROI / day",
    cycle: "25 day cycle",
    min: 6800,
    earnings: 4760,
    capacity: 0.78,
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200",
  },
  {
    name: "Dubai Credit Carnival",
    code: "ME204112",
    country: "UAE",
    roi: "64% ROI / day",
    cycle: "30 day cycle",
    min: 12500,
    earnings: 9400,
    capacity: 0.54,
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200",
  },
  {
    name: "Kenya Harvest Villas",
    code: "AF103560",
    country: "Kenya",
    roi: "60% ROI / day",
    cycle: "21 day cycle",
    min: 5400,
    earnings: 3200,
    capacity: 0.91,
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200",
  },
  {
    name: "Bali Resort Rotation",
    code: "AS311240",
    country: "Indonesia",
    roi: "68% ROI / day",
    cycle: "18 day cycle",
    min: 7800,
    earnings: 4150,
    capacity: 0.37,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
  },
];

const productSections: {
  key: string;
  title: string;
  eyebrow: string;
  projects: Product[];
}[] = [
  {
    key: "cumulative",
    title: "Cumulative Projects",
    eyebrow: "Compounding balance with auto-withdraw",
    projects: [
      {
        title: "Netherlands Wind Equity",
        subtitle: "Daily harvest from iconic city attractions",
        category: "Cumulative",
        roi: "62% per day",
        cycle: "25 day cycle",
        min: 6800,
        earnings: 4760,
        badge: "Hot",
        progress: 0.82,
        image:
          "https://images.unsplash.com/photo-1459603677915-a62079ffd002?q=80&w=1200",
        highlights: ["Instant activation", "Auto compound", "Insurance backed"],
      },
      {
        title: "Seoul Digital Parks",
        subtitle: "Smart city ads powering night profits",
        category: "Cumulative",
        roi: "66% per day",
        cycle: "28 day cycle",
        min: 7200,
        earnings: 5280,
        progress: 0.58,
        image:
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200",
        highlights: ["Full KYC done", "Auto reinvest", "24/7 support"],
      },
    ],
  },
  {
    key: "daily",
    title: "Daily Projects",
    eyebrow: "Quick flip missions crediting ROI every midnight",
    projects: [
      {
        title: "Lisbon Solar Drops",
        subtitle: "Micro homes feeding grid rewards",
        category: "Daily",
        roi: "61% per day",
        cycle: "15 day cycle",
        min: 3200,
        earnings: 1950,
        badge: "New",
        progress: 0.35,
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200",
        highlights: ["Daily release", "Fast withdrawal", "Realtime ticker"],
      },
      {
        title: "Accra Port Logistics",
        subtitle: "Cargo digitisation with guaranteed slots",
        category: "Daily",
        roi: "63% per day",
        cycle: "20 day cycle",
        min: 4500,
        earnings: 2840,
        progress: 0.64,
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
        highlights: ["Same-day matching", "Zero downtime", "Dedicated manager"],
      },
    ],
  },
  {
    key: "vip",
    title: "VIP Products",
    eyebrow: "Invite-only experiences with personal online managers",
    projects: [
      {
        title: "Dubai Platinum Tower",
        subtitle: "Luxury hospitality share-outs with concierge",
        category: "VIP",
        roi: "70% per day",
        cycle: "30 day cycle",
        min: 15000,
        earnings: 11200,
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
        cycle: "35 day cycle",
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

const dashboardInsights = [
  {
    title: "Portfolio yield",
    value: "64.2%",
    description: "Average daily ROI credited across your open missions.",
  },
  {
    title: "Settled earnings",
    value: naira(1184000),
    description: "Ready to withdraw into your preferred currency wallet.",
  },
  {
    title: "Capital deployed",
    value: naira(2460000),
    description: "Diversified across infrastructure, credit and mobility.",
  },
];

const workflowSteps = [
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

const supportHighlights = [
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
    <main className="page page--invest">
      <section className="invest-hero invest-hero--refined">
        <div className="invest-hero__content">
          <span className="invest-hero__eyebrow">Invest · Earn · Withdraw</span>
          <h1 className="invest-hero__title">
            A calm command centre for 60%+ daily ROI missions.
          </h1>
          <p className="invest-hero__subtitle">
            FP Markets curates institutional-grade trader projects with automated
            crediting, insured custody and instant liquidity. Build your vault,
            monitor growth and exit when it suits you.
          </p>

          <div className="invest-hero__stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="invest-hero__stat">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="invest-hero__cta">
            <Link href="#projects" className="button button--primary button--glow">
              Explore missions
            </Link>
            <Link href="#currencies" className="button button--ghost">
              View currency wallets
            </Link>
            <a
              href="https://t.me/ManagesophiaLiam"
              target="_blank"
              rel="noreferrer"
              className="button button--support"
            >
              Hey, I need help
            </a>
          </div>
        </div>

        <Surface className="invest-hero__panel">
          <header className="invest-panel__head">
            <div>
              <span>Personal vault</span>
              <strong>{naira(428000)}</strong>
              <p>Clears at 23:59 WAT • Auto compounding enabled</p>
            </div>
            <Link href="#topup">Statements</Link>
          </header>

          <div className="invest-panel__actions">
            <Link href="#topup" className="panel-action panel-action--primary">
              <div>
                <span>Top up balance</span>
                <p>NGN, USD, GBP, KES wallets supported</p>
              </div>
              <span>↗</span>
            </Link>
            <Link href="#withdraw" className="panel-action">
              <div>
                <span>Withdraw earnings</span>
                <p>Schedule payout with compliance pre-check</p>
              </div>
              <span>↗</span>
            </Link>
          </div>

          <div className="invest-panel__insights">
            {balanceInsights.map((insight) => (
              <div key={insight.label}>
                <span>{insight.label}</span>
                <strong>{insight.value}</strong>
                <p>{insight.detail}</p>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      <section id="currencies" className="section invest-currencies">
        <div className="section__head">
          <span className="section__eyebrow">Currency control</span>
          <h2 className="section__title">Choose the wallet that matches your funding source.</h2>
          <p className="section__subtitle">
            Seamless conversion between NGN, USD, GBP and KES with hedged FX
            rates and live compliance monitoring.
          </p>
        </div>
        <div className="currency-grid">
          {currencyWallets.map((wallet) => (
            <Surface key={wallet.code} className="currency-card">
              <div className="currency-card__badge">{wallet.code}</div>
              <h3>{wallet.name}</h3>
              <p>{wallet.description}</p>
              <div className="currency-card__meta">
                <div>
                  <span>Limits</span>
                  <strong>{wallet.limits}</strong>
                </div>
                <div>
                  <span>Settlement</span>
                  <strong>{wallet.status}</strong>
                </div>
              </div>
              <Link href="#topup" className="currency-card__link">
                Use this wallet
              </Link>
            </Surface>
          ))}
        </div>
      </section>

      <section className="ticker ticker--refined" aria-label="Live trader board">
        <div className="ticker__track">
          {[...traderTicker, ...traderTicker].map((item, index) => (
            <article key={`${item.code}-${index}`} className="ticker__item">
              <img src={item.image} alt={item.name} loading="lazy" />
              <div>
                <div className="ticker__header">
                  <span>{item.name}</span>
                  <span>{item.roi}</span>
                </div>
                <div className="ticker__meta">
                  <span>{item.country}</span>
                  <span>{item.code}</span>
                </div>
                <div className="ticker__progress">
                  <div
                    className="ticker__progress-bar"
                    style={{ width: `${item.capacity * 100}%` }}
                  />
                  <span>{Math.round(item.capacity * 100)}% slots live</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section section--tight">
        <div className="section__head">
          <span className="section__eyebrow">Curated catalogue</span>
          <h2 className="section__title">Pick a trader project to grow your vault.</h2>
          <p className="section__subtitle">
            Minimum ROI sits at 60% daily. Choose your cycle, confirm the top-up
            and sit back while our managers handle execution.
          </p>
        </div>
        <div className="section__tabs">
          {productSections.map((section) => (
            <Surface key={section.key} className="section__tab">
              <span className="section__tab-eyebrow">{section.eyebrow}</span>
              <h3>{section.title}</h3>
              <div className="project-grid">
                {section.projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </Surface>
          ))}
        </div>
      </section>

      <section className="section" id="dashboard">
        <div className="section__head">
          <span className="section__eyebrow">Dashboard snapshot</span>
          <h2 className="section__title">Track performance without the noise.</h2>
          <p className="section__subtitle">
            A refined analytics surface summarises ROI, capital deployment and
            liquidity so you always know what’s working.
          </p>
        </div>

        <div className="dashboard-grid">
          <Surface className="dashboard-panel dashboard-panel--insights">
            <div className="dashboard-panel__body">
              {dashboardInsights.map((insight) => (
                <div key={insight.title}>
                  <span>{insight.title}</span>
                  <strong>{insight.value}</strong>
                  <p>{insight.description}</p>
                </div>
              ))}
            </div>
          </Surface>

          <div id="topup" className="dashboard-panel-wrapper">
            <Surface className="dashboard-panel dashboard-panel--actions">
              <header>
                <span>Demo payout lane</span>
                <Link href="#withdraw">Withdrawal history</Link>
              </header>
              <div className="dashboard-actions">
                <div>
                  <h3>Top up</h3>
                  <p>Select currency, enter amount and confirm transfer.</p>
                  <Link href="#currencies">Launch funding wizard ↗</Link>
                </div>
                <div>
                  <h3>Withdraw</h3>
                  <p>Pick wallet, verify beneficiary and release instantly.</p>
                  <Link href="#withdraw">Schedule payout ↗</Link>
                </div>
              </div>
              <footer>
                <div>
                  <span>Next credit</span>
                  <strong>23:59 WAT</strong>
                </div>
                <div>
                  <span>Queued amount</span>
                  <strong>{naira(320000)}</strong>
                </div>
              </footer>
            </Surface>
          </div>

          <div id="withdraw" className="dashboard-panel-wrapper">
            <Surface className="dashboard-panel dashboard-panel--rates">
              <header>
                <span>Earned today</span>
                <strong>{naira(184000)}</strong>
              </header>
              <div className="dashboard-rate">
                <div>
                  <span>ROI rate</span>
                  <strong>+64%</strong>
                  <p>Weighted average across open missions.</p>
                </div>
                <div>
                  <span>Auto-withdraw</span>
                  <strong>Enabled</strong>
                  <p>Next sweep in 3 hours.</p>
                </div>
              </div>
            </Surface>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <span className="section__eyebrow">How it works</span>
          <h2 className="section__title">Three deliberate steps to deploy capital.</h2>
        </div>
        <div className="workflow">
          {workflowSteps.map((step, index) => (
            <Surface key={step.title} className="workflow__step">
              <div className="workflow__index">0{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <div className="section__head">
          <span className="section__eyebrow">Support &amp; safety</span>
          <h2 className="section__title">Sleep easy while your ROI keeps rolling.</h2>
          <p className="section__subtitle">
            FP Markets runs compliance-grade monitoring, human concierge and AI
            security so your wallet stays smiling.
          </p>
        </div>
        <div className="benefit-grid">
          {supportHighlights.map((item) => (
            <Surface key={item.title} className="benefit-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <TabBar />
    </main>
  );
}

function ProjectCard({ project }: { project: Product }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img src={project.image} alt={project.title} loading="lazy" />
        {project.badge && <span className="project-card__badge">{project.badge}</span>}
      </div>
      <div className="project-card__body">
        <div className="project-card__head">
          <span className="project-card__category">{project.category}</span>
          <h4>{project.title}</h4>
          <p>{project.subtitle}</p>
        </div>
        <div className="project-card__stats">
          <div>
            <span>ROI</span>
            <strong>{project.roi}</strong>
          </div>
          <div>
            <span>Cycle</span>
            <strong>{project.cycle}</strong>
          </div>
          <div>
            <span>Minimum</span>
            <strong>{naira(project.min)}</strong>
          </div>
          <div>
            <span>Est. earnings</span>
            <strong>{naira(project.earnings)}</strong>
          </div>
        </div>
        <div className="project-card__progress">
          <div
            className="project-card__progress-bar"
            style={{ width: `${project.progress * 100}%` }}
          />
          <span>{Math.round(project.progress * 100)}% slots secured</span>
        </div>
        <div className="project-card__highlights">
          {project.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
        <div className="project-card__actions">
          <Link href="#" className="button button--primary">
            Buy it now
          </Link>
          <Link href="#" className="project-card__link">
            View project
          </Link>
        </div>
      </div>
    </article>
  );
}
