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
    description: "Fund via bank transfer or USDT channel",
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
    label: "Open support lane",
    description: "Ping your dedicated relationship manager",
    href: "/support",
    accent: "#facc15",
  },
  {
    label: "Share referral link",
    description: "Earn 6% trail commission on invites",
    href: "/share",
    accent: "#34d399",
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

export default function Mine() {
  return (
    <main className="profile-page">
      <section className="profile-hero">
        <Surface className="profile-hero__card">
          <div className="profile-identity">
            <div className="profile-identity__avatar">SG</div>
            <div>
              <div className="profile-identity__eyebrow">VIP 3 • Infinity Circle</div>
              <h1 className="profile-identity__title">Sola Gbadamosi</h1>
              <p className="profile-identity__subtitle">
                Private wealth partner since 2021 • Cooperation ID 303659
              </p>
            </div>
          </div>
          <div className="profile-balance">
            <div>
              <span>Net worth</span>
              <strong>{naira(2726000)}</strong>
            </div>
            <div>
              <span>Credit line</span>
              <strong>{naira(800000)}</strong>
            </div>
            <div>
              <span>Unrealised gain</span>
              <strong>{naira(318000)}</strong>
            </div>
          </div>
          <div className="profile-metrics">
            {metrics.map((metric) => (
              <Surface key={metric.label} className="profile-metric">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </Surface>
            ))}
          </div>
        </Surface>
      </section>

      <section>
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
