import Link from "next/link";

type Highlight = {
  label: string;
  value: string;
  description: string;
};

type FeatureCard = {
  category: string;
  title: string;
  description: string;
};

const heroHighlights: Highlight[] = [
  {
    label: "Global licenses",
    value: "12+",
    description: "Regulated coverage with audited partner oversight.",
  },
  {
    label: "Average ROI uplift",
    value: "64%",
    description: "Compounded partner growth with disciplined risk pacing.",
  },
  {
    label: "Support languages",
    value: "24/7 · 9",
    description: "Concierge teams covering traders and investors worldwide.",
  },
];

const featureCards: FeatureCard[] = [
  {
    category: "Leverage",
    title: "Highest leverage",
    description:
      "Grow faster with partner-grade distribution, analytics and bespoke liquidity programmes.",
  },
  {
    category: "Payouts",
    title: "Instant payouts",
    description:
      "Weekly profit cycles with automated compliance, statements and partner settlement support.",
  },
  {
    category: "Support",
    title: "24/7 multilingual support",
    description:
      "Relationship managers in nine languages keep onboarding painless for every desk.",
  },
];

export default function Home() {
  return (
    <main className="landing">
      <div className="landing__container">
        <header className="landing__header" aria-label="Global navigation">
          <Link href="/" className="landing__logo">
            FP Markets
          </Link>

          <nav className="landing__nav" aria-label="Primary">
            <Link href="/invest" className="landing__nav-link">
              Products
            </Link>
            <Link href="/share" className="landing__nav-link">
              Partners
            </Link>
            <Link href="/withdraw" className="landing__nav-link">
              Payouts
            </Link>
          </nav>

          <div className="landing__header-actions">
            <Link href="/mine" className="landing__signin" aria-label="Sign in">
              Sign in
            </Link>
            <Link href="/signup" className="landing__signup" aria-label="Sign up">
              Sign up
            </Link>
          </div>
        </header>

        <section className="landing__hero" aria-labelledby="landing-hero-title">
          <div className="landing__hero-copy">
            <span className="landing__hero-eyebrow">Partners · Products · Growth</span>
            <h1 id="landing-hero-title" className="landing__hero-title">
              Build recurring revenue with a trusted global investment leader.
            </h1>
            <p className="landing__hero-subtitle">
              Institutional-grade spreads, multilingual support and painless onboarding
              help your traders grow faster. Launch the partnership and focus on
              performance while our teams handle execution.
            </p>

            <div className="landing__hero-actions">
              <Link href="/signup" className="button button--primary">
                Sign up
              </Link>
              <Link href="/invest" className="button button--ghost">
                Explore partnership
              </Link>
            </div>

            <dl className="landing__hero-highlights">
              {heroHighlights.map((highlight) => (
                <div key={highlight.label} className="landing__hero-highlight">
                  <dt>{highlight.label}</dt>
                  <dd>
                    <strong>{highlight.value}</strong>
                    <span>{highlight.description}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="landing__hero-panel" aria-label="Partner revenue snapshot">
            <header>
              <span>Markets Hero</span>
              <h2>Partner revenue tracker</h2>
            </header>
            <p>
              Institutional accounts receive concierge onboarding, automated reporting and
              steady recurring payouts. Build trust with your investors from day one.
            </p>

            <div className="landing__hero-metric">
              <span>Recurring revenue</span>
              <strong>$128,400</strong>
              <small>Quarter-to-date partner earnings</small>
            </div>

            <ul className="landing__hero-momentum">
              <li>
                <strong>+28%</strong>
                <span>Average account growth in Q2</span>
              </li>
              <li>
                <strong>3.2h</strong>
                <span>Median onboarding time</span>
              </li>
              <li>
                <strong>99.9%</strong>
                <span>Uptime across trading desks</span>
              </li>
            </ul>
          </aside>
        </section>

        <section
          id="markets-hero"
          className="landing__features"
          aria-labelledby="landing-features-title"
        >
          <div className="landing__features-head">
            <span className="landing__features-eyebrow">Markets Hero</span>
            <h2 id="landing-features-title">Where partner growth compounds.</h2>
          </div>
          <div className="landing__features-grid">
            {featureCards.map((feature) => (
              <article key={feature.category} className="landing__feature">
                <header>
                  <span>{feature.category}</span>
                  <h3>{feature.title}</h3>
                </header>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
