import Link from "next/link";
import Surface from "@/components/ui/Surface";
import TabBar from "@/components/ui/TabBar";
import { naira } from "@/components/ui/NA";

const quickStats = [
  {
    label: "ROI today",
    value: "+64%",
    detail: "Credited nightly at 23:59 WAT",
  },
  {
    label: "Earned this week",
    value: naira(186000),
    detail: "Auto-withdraw in 3 days",
  },
  {
    label: "Referral bonus",
    value: naira(42000),
    detail: "Squad Lagos online",
  },
];

const menuItems = [
  {
    label: "Top up",
    description: "Fund your vault instantly",
    href: "/deposit",
    icon: "⬆️",
  },
  {
    label: "Withdrawal",
    description: "Cash out profits securely",
    href: "/withdraw",
    icon: "⬇️",
  },
  {
    label: "Invite friends to earn",
    description: "Share your code for squad rewards",
    href: "/invite",
    icon: "🤝",
  },
  {
    label: "VIP centre",
    description: "Review your privilege perks",
    href: "/vip",
    icon: "👑",
  },
  {
    label: "Points mall",
    description: "Redeem loyalty gifts",
    href: "/points",
    icon: "🎁",
  },
  {
    label: "Bind a bank card",
    description: "Link preferred payout channels",
    href: "/banking",
    icon: "💳",
  },
  {
    label: "Change withdrawal password",
    description: "Refresh your security pin",
    href: "/security",
    icon: "🔐",
  },
  {
    label: "My income",
    description: "Track ROI statements",
    href: "/income",
    icon: "📈",
  },
  {
    label: "Account details",
    description: "Update your profile data",
    href: "/settings",
    icon: "🧾",
  },
];

const documentShortcuts = [
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

const dashboardMetrics = [
  {
    label: "Projected ROI today",
    value: "+64%",
    trend: "▲ 2.1% vs avg",
  },
  {
    label: "Auto-withdraw timer",
    value: "03:12:48",
    trend: "Next trigger",
  },
  {
    label: "Investors synced",
    value: "4 squads",
    trend: "All online",
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
    <main className="profile-page profile-page--mobile">
      <section className="profile-mobile">
        <Surface className="profile-mobile__identity-card">
          <header className="profile-mobile__identity-head">
            <div>
              <span className="profile-mobile__vip">VIP 1</span>
              <h1>Sola Gbadamosi</h1>
              <p className="profile-mobile__coop">Cooperation number 303659</p>
              <p className="profile-mobile__location">Lagos, Nigeria</p>
            </div>
            <div className="profile-mobile__avatar">SG</div>
          </header>

          <div className="profile-mobile__balance">
            <span>Balance</span>
            <strong>{naira(280270)}</strong>
          </div>

          <div className="profile-mobile__stats">
            {quickStats.map((stat) => (
              <div key={stat.label} className="profile-mobile__stat">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <p>{stat.detail}</p>
              </div>
            ))}
          </div>

          <div className="profile-mobile__actions">
            <Link
              href="/deposit"
              className="profile-mobile__action profile-mobile__action--primary"
            >
              Top up
            </Link>
            <Link href="/withdraw" className="profile-mobile__action">
              Withdraw
            </Link>
          </div>
        </Surface>

        <Surface className="profile-mobile__menu-card">
          <header>
            <h2>Account console</h2>
            <p>Manage your funding, rewards and personal settings.</p>
          </header>
          <div className="profile-mobile__menu-list">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href} className="profile-mobile__menu-row">
                <span className="profile-mobile__menu-icon">{item.icon}</span>
                <div className="profile-mobile__menu-copy">
                  <strong>{item.label}</strong>
                  <p>{item.description}</p>
                </div>
                <span className="profile-mobile__menu-caret">›</span>
              </Link>
            ))}
          </div>
        </Surface>

        <Surface className="profile-mobile__documents">
          <header>
            <h2>Documents & proofs</h2>
            <p>Always accessible for audits and compliance reviews.</p>
          </header>
          <div className="profile-mobile__document-list">
            {documentShortcuts.map((doc) => (
              <Link key={doc.name} href={doc.href} className="profile-mobile__document">
                <div>
                  <strong>{doc.name}</strong>
                  <p>{doc.detail}</p>
                </div>
                <span>↗</span>
              </Link>
            ))}
          </div>
        </Surface>

        <Surface className="profile-demo profile-demo--mobile">
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

      <TabBar />
    </main>
  );
}
