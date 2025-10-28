import Link from "next/link";
import Surface from "@/components/ui/Surface";
import TabBar from "@/components/ui/TabBar";
import { naira } from "@/components/ui/NA";

const metrics = [
  {
    label: "Net invested",
    value: naira(2440000),
    detail: "+18.2% QoQ",
  },
  {
    label: "Cash on hand",
    value: naira(286000),
    detail: "Across 3 currencies",
  },
  {
    label: "30 day yield",
    value: "12.8%",
    detail: "Risk-adjusted",
  },
];

const quickActions = [
  {
    label: "Top up balance",
    description: "Fund via bank transfer, card or USDT channel",
    href: "/deposit",
    accent: "#38bdf8",
  },
  {
    label: "Withdraw profits",
    description: "Schedule a payout with compliance pre-checks",
    href: "/withdraw",
    accent: "#f472b6",
  },
  {
    label: "Convert currency",
    description: "Swap NGN ⇄ USD ⇄ GBP at hedged FX rates",
    href: "/convert",
    accent: "#facc15",
  },
  {
    label: "Download statements",
    description: "Export branded PDF or CSV summaries",
    href: "/statements",
    accent: "#34d399",
  },
];

const wallets = [
  {
    code: "NGN",
    title: "Naira wallet",
    balance: naira(860000),
    reserved: naira(120000),
    status: "Instant top ups",
  },
  {
    code: "USD",
    title: "USDT vault",
    balance: "$6,200",
    reserved: "$850",
    status: "On-chain",
  },
  {
    code: "GBP",
    title: "Sterling account",
    balance: "£4,800",
    reserved: "£500",
    status: "Same-day",
  },
];

const earnings = [
  {
    label: "Daily ROI",
    value: "+64%",
    detail: "Credited at 23:59 WAT",
  },
  {
    label: "This cycle",
    value: naira(472000),
    detail: "Auto-withdraw in 3 days",
  },
  {
    label: "Lifetime gain",
    value: naira(2860000),
    detail: "+192% since onboarding",
  },
];

const payouts = [
  {
    channel: "Access Bank • NGN",
    detail: "₦240,000 pending release",
    eta: "Clears in 1h",
  },
  {
    channel: "USDT-TRC20",
    detail: "$1,200 settled",
    eta: "Completed 12:04",
  },
  {
    channel: "Barclays UK",
    detail: "£2,500 scheduled",
    eta: "Arrives tomorrow",
  },
];

const holdings = [
  {
    name: "Dubai Private Credit",
    value: naira(1560000),
    change: "+4.8%",
    allocation: "32%",
  },
  {
    name: "Netherlands Clean Energy",
    value: naira(860000),
    change: "+7.4%",
    allocation: "26%",
  },
  {
    name: "Kenya Agriculture Notes",
    value: naira(612000),
    change: "+5.6%",
    allocation: "18%",
  },
  {
    name: "Liquidity sleeve",
    value: naira(420000),
    change: "Stable",
    allocation: "12%",
  },
];

const activities = [
  {
    time: "Today, 08:42",
    title: "Reinvestment executed",
    description: "₦420,000 allocated into Carbon Neutral Commodities preview.",
  },
  {
    time: "Yesterday, 16:10",
    title: "Risk check cleared",
    description: "All exposures within VaR tolerance (3.0%) for this week.",
  },
  {
    time: "Tue, 12:05",
    title: "Document signed",
    description: "Subscription agreement countersigned by compliance desk.",
  },
];

const documents = [
  {
    name: "Consolidated statement",
    detail: "Updated 2 days ago",
    href: "/docs/statement",
  },
  {
    name: "Tax report (FY 2023)",
    detail: "Awaiting signature",
    href: "/docs/tax",
  },
  {
    name: "KYC dossier",
    detail: "Verified • Expires Sep 2025",
    href: "/docs/kyc",
  },
];

const profileMenu = [
  {
    label: "Top up",
    description: "Fund your vault instantly",
    href: "/deposit",
    icon: "⬆️",
  },
  {
    label: "Withdrawal",
    description: "Cash out profits anytime",
    href: "/withdraw",
    icon: "⬇️",
  },
  {
    label: "Invite & earn",
    description: "Share your referral code",
    href: "/invite",
    icon: "🤝",
  },
  {
    label: "VIP centre",
    description: "Unlock loyalty perks",
    href: "/vip",
    icon: "💎",
  },
  {
    label: "Team room",
    description: "Coordinate squad targets",
    href: "/team",
    icon: "👥",
  },
  {
    label: "Points mall",
    description: "Redeem elite rewards",
    href: "/points",
    icon: "🎁",
  },
  {
    label: "My income",
    description: "Track ROI statements",
    href: "/income",
    icon: "📈",
  },
  {
    label: "Bind bank card",
    description: "Link payout channels",
    href: "/banking",
    icon: "💳",
  },
  {
    label: "Change password",
    description: "Refresh security keys",
    href: "/security",
    icon: "🔐",
  },
  {
    label: "Account details",
    description: "Update your profile",
    href: "/settings",
    icon: "🧾",
  },
];

const dashboardMetrics = [
  {
    label: "Projected ROI today",
    value: "+64%",
    trend: "▲ 2.1% vs avg",
  },
  {
    label: "Total investors synced",
    value: "4 squads",
    trend: "Online",
  },
  {
    label: "Auto-withdraw timer",
    value: "03:12:48",
    trend: "Next trigger",
  },
];

const dashboardProjects = [
  {
    name: "Dubai Private Credit",
    roi: "66% daily",
    progress: 0.78,
  },
  {
    name: "Netherlands Wind Equity",
    roi: "62% daily",
    progress: 0.64,
  },
  {
    name: "Kenya Harvest Villas",
    roi: "60% daily",
    progress: 0.52,
  },
];

const dashboardStream = [
  "08:40 • Top up ₦120,000 credited",
  "08:12 • ROI +64% released to NGN wallet",
  "07:58 • VIP centre unlocked fresh perks",
  "07:21 • Team Lagos hit 110% of quota",
  "06:40 • Withdrawal ₦85,000 scheduled",
  "06:05 • Referral bonus ₦32,000 earned",
];

export default function Mine() {
  return (
    <main className="profile-page">
      <section className="profile-hero">
        <Surface className="profile-hero__card profile-hero__card--mobile">
          <div className="profile-identity profile-identity--vip">
            <div className="profile-identity__avatar profile-identity__avatar--accent">
              SG
            </div>
            <div>
              <div className="profile-identity__eyebrow profile-identity__eyebrow--vip">
                VIP 1 • Visionary Circle
              </div>
              <h1 className="profile-identity__title">Sola Gbadamosi</h1>
              <p className="profile-identity__subtitle">
                Cooperation number 303659 • Lagos, NG
              </p>
            </div>
          </div>

          <div className="profile-hero__balance-card">
            <div>
              <span>Available balance</span>
              <strong>{naira(280270)}</strong>
            </div>
            <div>
              <span>Earned this week</span>
              <strong>{naira(186000)}</strong>
            </div>
            <div>
              <span>Referral bonus</span>
              <strong>{naira(42000)}</strong>
            </div>
          </div>

          <div className="profile-mobile__cta">
            <Link
              href="/deposit"
              className="profile-mobile__cta-button profile-mobile__cta-button--primary"
            >
              Top up
            </Link>
            <Link href="/withdraw" className="profile-mobile__cta-button">
              Withdraw
            </Link>
          </div>

          <div className="profile-metrics profile-metrics--inline">
            {metrics.map((metric) => (
              <Surface key={metric.label} className="profile-metric profile-metric--inline">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </Surface>
            ))}
          </div>
        </Surface>

        <Surface className="profile-mobile__menu">
          <div className="profile-mobile__menu-grid">
            {profileMenu.map((item) => (
              <Link key={item.label} href={item.href} className="profile-mobile__menu-item">
                <span className="profile-mobile__menu-icon">{item.icon}</span>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Surface>

        <Surface className="profile-demo">
          <header className="profile-demo__head">
            <div>
              <span>Running demo dashboard</span>
              <h2>Live investor pulse</h2>
            </div>
            <span className="profile-demo__status">Live</span>
          </header>
          <div className="profile-demo__grid">
            {dashboardMetrics.map((metric) => (
              <div key={metric.label} className="profile-demo__metric">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <p>{metric.trend}</p>
              </div>
            ))}
          </div>
          <div className="profile-demo__projects">
            {dashboardProjects.map((project) => (
              <div key={project.name} className="profile-demo__project">
                <div>
                  <span className="profile-demo__project-name">{project.name}</span>
                  <span className="profile-demo__project-roi">{project.roi}</span>
                </div>
                <div className="profile-demo__bar">
                  <div style={{ width: `${Math.round(project.progress * 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="profile-demo__stream">
            <span className="profile-demo__live-dot" />
            <div className="profile-demo__ticker">
              <div className="profile-demo__ticker-track">
                {[...dashboardStream, ...dashboardStream].map((entry, index) => (
                  <span key={`${entry}-${index}`}>{entry}</span>
                ))}
              </div>
            </div>
          </div>
        </Surface>
      </section>

      <section className="profile-section" id="actions">
        <div className="profile-section__head">
          <h2>Quick controls</h2>
          <p>Top up, withdraw, convert currencies and access your statements instantly.</p>
        </div>
        <div className="profile-actions">
          {quickActions.map((action) => (
            <Link key={action.label} href={action.href} className="profile-action">
              <span className="profile-action__pulse" style={{ background: action.accent }} />
              <div>
                <h2>{action.label}</h2>
                <p>{action.description}</p>
              </div>
              <span className="profile-action__chevron">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="profile-section" id="wallets">
        <div className="profile-section__head">
          <h2>Currency wallets</h2>
          <p>Monitor balances across NGN, USD and GBP accounts with reserved amounts ready for withdrawal.</p>
        </div>
        <div className="profile-wallets">
          {wallets.map((wallet) => (
            <Surface key={wallet.code} className="wallet-card">
              <div className="wallet-card__head">
                <span>{wallet.code}</span>
                <strong>{wallet.title}</strong>
              </div>
              <div className="wallet-card__balance">{wallet.balance}</div>
              <div className="wallet-card__meta">
                <div>
                  <span>Reserved</span>
                  <strong>{wallet.reserved}</strong>
                </div>
                <div>
                  <span>Status</span>
                  <strong>{wallet.status}</strong>
                </div>
              </div>
              <Link href="/convert" className="wallet-card__link">
                Manage wallet
              </Link>
            </Surface>
          ))}
        </div>
      </section>

      <section className="profile-section" id="earnings">
        <div className="profile-section__head">
          <h2>Earnings at a glance</h2>
          <p>Stay informed about current ROI, cycle payouts and total gain since onboarding.</p>
        </div>
        <div className="profile-earnings">
          {earnings.map((item) => (
            <Surface key={item.label} className="earnings-card">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="profile-section" id="payouts">
        <div className="profile-section__head">
          <h2>Payout timeline</h2>
          <p>Every withdrawal lane shows settlement progress and next action.</p>
        </div>
        <div className="profile-payouts">
          {payouts.map((payout) => (
            <Surface key={payout.channel} className="payout-card">
              <div>
                <h3>{payout.channel}</h3>
                <p>{payout.detail}</p>
              </div>
              <span>{payout.eta}</span>
            </Surface>
          ))}
        </div>
      </section>

      <section className="profile-layout">
        <div className="profile-column">
          <Surface className="profile-panel">
            <header className="profile-panel__head">
              <div>
                <h2>Active holdings</h2>
                <p>Strategic allocations diversified across credit, energy and commodities.</p>
              </div>
              <Link href="/portfolio">Manage</Link>
            </header>
            <div className="profile-holdings">
              {holdings.map((holding) => (
                <div key={holding.name} className="profile-holding">
                  <div>
                    <span className="profile-holding__name">{holding.name}</span>
                    <span className="profile-holding__value">{holding.value}</span>
                  </div>
                  <div className="profile-holding__meta">
                    <span>{holding.change}</span>
                    <span>{holding.allocation} allocation</span>
                  </div>
                  <div className="profile-holding__bar">
                    <div style={{ width: holding.allocation }} />
                  </div>
                </div>
              ))}
            </div>
          </Surface>

          <Surface className="profile-panel">
            <header className="profile-panel__head">
              <div>
                <h2>Activity timeline</h2>
                <p>Last touchpoints from your relationship desk.</p>
              </div>
              <Link href="/messages">View inbox</Link>
            </header>
            <div className="profile-timeline">
              {activities.map((activity) => (
                <div key={activity.title} className="profile-timeline__item">
                  <div className="profile-timeline__dot" />
                  <div>
                    <span className="profile-timeline__time">{activity.time}</span>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Surface>
        </div>

        <div className="profile-column">
          <Surface className="profile-panel profile-panel--gradient">
            <header className="profile-panel__head">
              <div>
                <h2>Loyalty progress</h2>
                <p>Unlock premium liquidity windows and co-invest allocations.</p>
              </div>
              <Link href="/vip">Benefits</Link>
            </header>
            <div className="profile-loyalty">
              <div>
                <span>Status</span>
                <strong>VIP 3</strong>
              </div>
              <div>
                <span>Points</span>
                <strong>18,640</strong>
              </div>
              <div>
                <span>Next tier unlock</span>
                <strong>23 days</strong>
              </div>
            </div>
            <div className="profile-progress">
              <div style={{ width: "68%" }} />
              <span>68% to VIP 4</span>
            </div>
            <ul className="profile-loyalty__perks">
              <li>Priority exit queue</li>
              <li>Dedicated macro strategist briefings</li>
              <li>Access to pre-IPO private placements</li>
            </ul>
          </Surface>

          <Surface className="profile-panel">
            <header className="profile-panel__head">
              <div>
                <h2>Documents vault</h2>
                <p>Secure, encrypted statements ready for download.</p>
              </div>
              <Link href="/docs">All files</Link>
            </header>
            <div className="profile-documents">
              {documents.map((document) => (
                <Link key={document.name} href={document.href} className="profile-document">
                  <div>
                    <span className="profile-document__name">{document.name}</span>
                    <span className="profile-document__detail">{document.detail}</span>
                  </div>
                  <span className="profile-document__chevron">↗</span>
                </Link>
              ))}
            </div>
          </Surface>

          <Surface className="profile-panel">
            <header className="profile-panel__head">
              <div>
                <h2>Risk alignment</h2>
                <p>Continuous monitoring against your bespoke mandate.</p>
              </div>
            </header>
            <div className="profile-risk">
              <div>
                <span>Current VaR @95%</span>
                <strong>3.1%</strong>
              </div>
              <div>
                <span>Liquidity runway</span>
                <strong>27 days</strong>
              </div>
              <div>
                <span>Stress tested drawdown</span>
                <strong>-6.4%</strong>
              </div>
            </div>
            <p className="profile-risk__footnote">
              Portfolio rebalancing triggers if VaR exceeds 4.2% or FX hedge ratio falls below 0.85.
            </p>
          </Surface>
        </div>
      </section>

      <div className="profile-spacer" />
      <TabBar />
    </main>
  );
}
