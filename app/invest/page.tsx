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

type Project = {
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

const topUpRewards = [
  { tier: "Top up ₦5,000", reward: "Get ₦1,000 cashback" },
  { tier: "Top up ₦20,000", reward: "Earn ₦5,000 welcome boost" },
  { tier: "Top up ₦50,000", reward: "Unlock ₦18,000 elite bonus" },
  { tier: "Top up ₦100,000", reward: "VIP red packet ₦45,000" },
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

const projectSections: { key: string; title: string; eyebrow: string; projects: Project[] }[] = [
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

const levelBenefits = [
  {
    level: "Level 1",
    staff: "12",
    commission: "7% daily",
    description: "Invite friends, unlock steady override every sunset.",
  },
  {
    level: "Level 2",
    staff: "48",
    commission: "12% daily",
    description: "Coach your crew with weekly webinars from HQ.",
  },
];

const safetyHighlights = [
  {
    title: "Cold wallet vault",
    description: "Every deposit insured with triple-signature custody and smart alerts.",
  },
  {
    title: "24/7 online manager",
    description: "Direct chat with VIP support and instant proof of payment uploads.",
  },
  {
    title: "AI fraud radar",
    description: "Realtime scans trace capital to block malicious hops before they land.",
  },
];

export default function Invest() {
  return (
    <main className="page">
      <section className="invest-hero">
        <div className="invest-hero__content">
          <div className="invest-hero__eyebrow">Copy · Invest · Earn</div>
          <h1 className="invest-hero__title">
            Cause it’s FP Markets — your daily 60%+ ROI playground.
          </h1>
          <p className="invest-hero__subtitle">
            Join pro traders dropping projects that credit ROI every midnight. Top
            up, copy their missions and watch rewards stream in instantly.
          </p>
          <div className="invest-hero__cta">
            <Link href="#projects" className="button button--primary button--glow">
              Start earning today
            </Link>
            <Link href="#team" className="button button--ghost">
              Invite friends · get paid
            </Link>
          </div>
          <div className="reward-board">
            {topUpRewards.map((reward) => (
              <Surface key={reward.tier} className="reward-board__item">
                <span className="reward-board__tier">{reward.tier}</span>
                <span className="reward-board__reward">{reward.reward}</span>
              </Surface>
            ))}
          </div>
        </div>
        <div className="invest-hero__visual">
          <div className="invest-hero__visual-card">
            <div className="invest-hero__visual-header">
              <span>Entertainment · Rational Use of Capital</span>
              <span className="invest-hero__pulse">Live</span>
            </div>
            <div className="invest-hero__visual-body">
              <p>
                Stack your balance, tap into hot projects and receive endless
                rewards with each successful top-up.
              </p>
              <ul>
                <li>Daily ROI credited by 23:59 WAT</li>
                <li>Instant withdrawals once cycle clears</li>
                <li>On-chain receipt for every mission</li>
              </ul>
            </div>
            <div className="invest-hero__visual-footer">
              <span>Current balance</span>
              <strong>{naira(280000)}</strong>
              <Link href="#" className="invest-hero__visual-link">
                Top up now ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Live trader board">
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
          <span className="section__eyebrow">Explore &amp; copy</span>
          <h2 className="section__title">Pick a trader project to grow your vault.</h2>
          <p className="section__subtitle">
            Minimum ROI sits at 60% daily. Choose your cycle, confirm the top-up and
            sit back while our managers handle execution.
          </p>
        </div>
        <div className="section__tabs">
          {projectSections.map((section) => (
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

      <section className="section" id="team">
        <div className="section__head">
          <span className="section__eyebrow">Team rewards</span>
          <h2 className="section__title">Grow your squad. Earn overrides on every level.</h2>
          <p className="section__subtitle">
            Share your invite link, watch your staff count climb and unlock deeper
            commissions daily.
          </p>
        </div>
        <div className="team-board">
          {levelBenefits.map((benefit) => (
            <Surface key={benefit.level} className="team-card">
              <div className="team-card__level">{benefit.level}</div>
              <div className="team-card__row">
                <span>Team staff</span>
                <strong>{benefit.staff}</strong>
              </div>
              <div className="team-card__row">
                <span>Distribution commission</span>
                <strong>{benefit.commission}</strong>
              </div>
              <p>{benefit.description}</p>
              <Link href="#" className="team-card__cta">
                Share now
              </Link>
            </Surface>
          ))}
        </div>
        <div className="invite-banner">
          <div>
            <h3>Invite friends. Claim unlimited commission.</h3>
            <p>
              Every friend you onboard locks in recurring income. Track their
              progress in real time and cash out any moment.
            </p>
          </div>
          <Link href="#" className="button button--primary button--glow">
            Copy invite link
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <span className="section__eyebrow">Safety &amp; support</span>
          <h2 className="section__title">Sleep easy while your ROI keeps rolling.</h2>
          <p className="section__subtitle">
            FP Markets runs compliance-grade monitoring, human concierge and AI
            security so your wallet stays smiling.
          </p>
        </div>
        <div className="benefit-grid">
          {safetyHighlights.map((item) => (
            <Surface key={item.title} className="benefit-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Surface>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <div className="section__head">
          <span className="section__eyebrow">Need help?</span>
          <h2 className="section__title">Online manager is one tap away.</h2>
          <p className="section__subtitle">
            Withdrawals, password change, account binding — manage everything from
            the dashboard shortcuts.
          </p>
        </div>
        <div className="shortcut-grid">
          {[
            "Top up",
            "Withdraw",
            "Invite friends",
            "Bind bank card",
            "Points mall",
            "Account details",
            "Change password",
            "My income",
          ].map((shortcut) => (
            <Surface key={shortcut} className="shortcut">
              <span>{shortcut}</span>
              <span className="shortcut__icon">↗</span>
            </Surface>
          ))}
        </div>
      </section>

      <TabBar />
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
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
