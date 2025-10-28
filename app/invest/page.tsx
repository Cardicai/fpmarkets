import Link from "next/link";
import Surface from "@/components/ui/Surface";
import TabBar from "@/components/ui/TabBar";
import { naira } from "@/components/ui/NA";

type Investment = {
  name: string;
  code: string;
  image: string;
  region: string;
  min: number;
  cycle: string;
  projectedApy: string;
  projectedEarnings: number;
  tvl: string;
  description: string;
  tags: string[];
  progress: number;
};

const heroMetrics = [
  {
    label: "Assets Under Management",
    value: naira(1240000000),
    sub: "Up 38% vs. last quarter",
  },
  {
    label: "Average Monthly Yield",
    value: "18.4%",
    sub: "Net performance across flagship portfolios",
  },
  {
    label: "Active Global Investors",
    value: "12,947",
    sub: "Family offices, HNWIs & sovereign partners",
  },
];

const investmentProducts: Investment[] = [
  {
    name: "Netherlands Clean Energy Infrastructure",
    code: "PG398165",
    image:
      "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1600",
    region: "Amsterdam, Rotterdam",
    min: 6800,
    cycle: "25 Day Liquidity Cycle",
    projectedApy: "28% targeted APY",
    projectedEarnings: 4760,
    tvl: naira(186000000),
    description:
      "Utility-scale solar and offshore wind access with sovereign guarantees and FX hedging baked in for predictable yield.",
    tags: ["Clean Tech", "ESG", "Hedged"],
    progress: 0.62,
  },
  {
    name: "Dubai Private Credit Opportunities",
    code: "ME204112",
    image:
      "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?q=80&w=1600",
    region: "UAE & GCC",
    min: 12500,
    cycle: "45 Day Settlement",
    projectedApy: "22% secured APY",
    projectedEarnings: 7800,
    tvl: naira(243000000),
    description:
      "Asset-backed corporate lending across logistics & aviation with 92% principal protection coverage and audited collateral.",
    tags: ["Private Credit", "Asset Backed", "Alpha"],
    progress: 0.74,
  },
  {
    name: "Kenya Frontier Agriculture Notes",
    code: "AF103560",
    image:
      "https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=1600",
    region: "Nairobi, Eldoret",
    min: 5400,
    cycle: "35 Day Redemption",
    projectedApy: "31% boosted APY",
    projectedEarnings: 5120,
    tvl: naira(96000000),
    description:
      "Digitised commodity financing across horticulture exporters with smart crop insurance and live risk monitoring dashboards.",
    tags: ["Agritech", "Impact", "Growth"],
    progress: 0.48,
  },
];

const stats = [
  {
    value: "23 markets",
    label: "Multi-region exposure with on-ground analysts in EMEA & APAC",
  },
  {
    value: "96.2%",
    label: "Capital preservation score backed by multi-layer risk controls",
  },
  {
    value: "4.7 hrs",
    label: "Average response time from our dedicated strategy desk",
  },
  {
    value: "99.4%",
    label: "Investor retention rate tracked over the last 18 months",
  },
];

const roadmap = [
  {
    quarter: "Q3 2024",
    title: "Launch of Carbon Neutral Commodities Basket",
    description:
      "A curated mix of lithium, cobalt and agricultural forwards with full ESG attestation and OTC hedges built in.",
  },
  {
    quarter: "Q1 2025",
    title: "On-chain NAV Reporting",
    description:
      "Deploying zk-audited fund accounting so you can reconcile portfolio performance with independent third-party oracles in real time.",
  },
  {
    quarter: "Q2 2025",
    title: "AI Co-pilot for Portfolio Steering",
    description:
      "Machine-led rebalancing recommendations tuned to your risk appetite, factoring macro signals, FX positioning and liquidity windows.",
  },
];

const testimonials = [
  {
    quote:
      "FP Markets engineered a custom laddered strategy that smoothed our cashflow dips while outperforming our VC benchmarks by 11%.",
    name: "Lara Ogunleye",
    role: "Principal, Havenwood Family Office",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400",
  },
  {
    quote:
      "Their underwriting rigour and real-time dashboards let us deploy eight figures into frontier notes with absolute clarity on risk.",
    name: "Tariq Al-Hamra",
    role: "Managing Director, Crescent Capital",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400",
  },
  {
    quote:
      "From settlement to hedging, every touchpoint feels institutional-grade. It’s our fastest growing income sleeve this year.",
    name: "Elena García",
    role: "CIO, Meridian Cooperative",
    avatar:
      "https://images.unsplash.com/photo-1544723795-432537f69586?q=80&w=400",
  },
];

const trustBadges = [
  "Bloomberg Verified",
  "SWIFT Connected",
  "MiFID II Compliant",
  "Thomson Reuters Feed",
];

export default function Invest() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <span className="hero__eyebrow">FP Markets Alpha Desk</span>
          <h1 className="hero__title">Invest beyond the obvious frontier.</h1>
          <p className="hero__description">
            Unlock institutional deal-flow across energy, private credit and agritech
            without sacrificing liquidity. We orchestrate the diligence,
            compliance and hedging so you stay focused on compounding capital.
          </p>
          <div className="hero__actions">
            <Link href="#strategies" className="button button--primary">
              Explore flagship strategies
            </Link>
            <Link href="#roadmap" className="button button--ghost">
              Download investment memo
            </Link>
          </div>
          <div className="hero__metrics">
            {heroMetrics.map((metric) => (
              <Surface
                key={metric.label}
                style={{
                  background: "rgba(15,23,42,.82)",
                  border: "1px solid rgba(148,163,184,.2)",
                  padding: 24,
                }}
              >
                <div className="metric">
                  <span className="metric__label">{metric.label}</span>
                  <span className="metric__value">{metric.value}</span>
                  <span className="metric__sub">{metric.sub}</span>
                </div>
              </Surface>
            ))}
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__visual-content">
            <div className="visual__header">
              <span>Live yield velocity</span>
              <span>+18.4%</span>
            </div>
            <div className="visual__chart">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="visual__bar" />
              ))}
            </div>
            <div className="visual__footer">
              <span>Dynamic hedging synced hourly</span>
              <span>VaR @95%: 3.1%</span>
            </div>
          </div>
        </div>
      </section>

      <section id="strategies" className="section">
        <div className="section__head">
          <span className="section__eyebrow">Flagship allocations</span>
          <h2 className="section__title">Curated strategies engineered for velocity.</h2>
          <p className="section__subtitle">
            Proprietary market access powered by quant overlays, native currency
            hedges and a human desk that actively manages exposure on your
            behalf.
          </p>
        </div>
        <div className="investments-grid">
          {investmentProducts.map((product) => (
            <InvestmentCard key={product.code} product={product} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <span className="section__eyebrow">Performance architecture</span>
          <h2 className="section__title">Structured to defend your downside.</h2>
          <p className="section__subtitle">
            Advanced risk modelling, 24/7 operations teams and real-time data
            feeds allow us to deliver asymmetric outcomes without exposing your
            capital to unnecessary volatility.
          </p>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <Surface
              key={stat.value}
              style={{
                background: "rgba(15,23,42,.76)",
                border: "1px solid rgba(148,163,184,.18)",
                padding: 28,
              }}
            >
              <div className="stat-card">
                <span className="stat-card__value">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
              </div>
            </Surface>
          ))}
        </div>
      </section>

      <section id="roadmap" className="section">
        <div className="section__head">
          <span className="section__eyebrow">Forward roadmap</span>
          <h2 className="section__title">Your capital keeps evolving with us.</h2>
          <p className="section__subtitle">
            From carbon markets to AI-driven allocation, our pipeline unlocks
            differentiated exposures that match your thesis before they trend.
          </p>
        </div>
        <div className="roadmap">
          {roadmap.map((item) => (
            <div key={item.quarter} className="roadmap__item">
              <span className="roadmap__quarter">{item.quarter}</span>
              <span className="roadmap__title">{item.title}</span>
              <p className="roadmap__description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <span className="section__eyebrow">Investor proof</span>
          <h2 className="section__title">Trusted by capital allocators worldwide.</h2>
          <p className="section__subtitle">
            Strategic partners spanning four continents choose FP Markets for our
            relentless execution and transparent reporting frameworks.
          </p>
        </div>
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial">
              <p className="testimonial__quote">“{testimonial.quote}”</p>
              <div className="testimonial__author">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial__avatar"
                />
                <div className="testimonial__meta">
                  <span>{testimonial.name}</span>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="cta-panel">
          <div>
            <h2 className="cta-panel__title">Deploy with conviction.</h2>
            <p className="cta-panel__text">
              Schedule a strategy session with our alpha desk, run scenario
              analysis tailored to your mandate and access our due diligence
              vault within 24 hours.
            </p>
            <div className="cta-panel__actions">
              <Link href="mailto:alpha@fpmarkets.com" className="button button--primary">
                Book a strategy call
              </Link>
              <Link href="#" className="button button--ghost">
                View compliance pack
              </Link>
            </div>
            <div className="logo-row" style={{ marginTop: 32 }}>
              {trustBadges.map((badge) => (
                <span key={badge} className="logo-chip">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="cta-panel__visual">
            <div className="cta-panel__visual-content">
              <h3 style={{ margin: 0, fontSize: 18, color: "#bae6fd" }}>
                Risk-managed returns
              </h3>
              <p style={{ marginTop: 12, color: "#e0f2fe", fontSize: 14 }}>
                67% of allocations reinvest within 90 days. Tap into our data
                vault for the evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TabBar />
    </main>
  );
}

function InvestmentCard({ product }: { product: Investment }) {
  return (
    <article className="investment-card">
      <div className="investment-card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="investment-card__body">
        <div className="tag-list">
          {product.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div>
          <h3 style={{ margin: "8px 0 0", fontSize: 22, color: "#f8fafc" }}>
            {product.name}
          </h3>
          <p style={{ margin: "6px 0 0", color: "#94a3b8", fontSize: 14 }}>
            {product.region} • {product.code}
          </p>
        </div>
        <p style={{ margin: 0, color: "#cbd5f5", lineHeight: 1.6, fontSize: 15 }}>
          {product.description}
        </p>
        <div className="investment-card__stats">
          <span>
            <strong style={{ color: "#f8fafc", fontSize: 16 }}>
              {naira(product.min)}
            </strong>
            <span>Minimum entry</span>
          </span>
          <span>
            <strong style={{ color: "#f8fafc", fontSize: 16 }}>
              {product.projectedApy}
            </strong>
            <span>Projected yield</span>
          </span>
          <span>
            <strong style={{ color: "#f8fafc", fontSize: 16 }}>
              {product.cycle}
            </strong>
            <span>Liquidity window</span>
          </span>
          <span>
            <strong style={{ color: "#f8fafc", fontSize: 16 }}>
              {naira(product.projectedEarnings)}
            </strong>
            <span>Earnings per cycle</span>
          </span>
        </div>
        <div className="progress">
          <div
            className="progress__bar"
            style={{ width: `${Math.round(product.progress * 100)}%` }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#94a3b8",
            fontSize: 13,
          }}
        >
          <span>{product.tvl} TVL secured</span>
          <Link href="#" style={{ color: "#7cd1ff", fontWeight: 600 }}>
            View thesis ↗
          </Link>
        </div>
      </div>
    </article>
  );
}
