"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Surface from "@/components/ui/Surface";
import TabBar from "@/components/ui/TabBar";
import { naira } from "@/components/ui/NA";
import {
  DEFAULT_INVESTMENT_BALANCE,
  INVESTMENT_STORAGE_KEY,
  type ActiveInvestment,
  type StoredInvestmentState,
} from "@/components/invest/InvestExperience";
import {
  PROFILE_STORAGE_KEY,
  defaultStoredProfile,
  parseStoredProfile,
  type StoredProfile,
} from "@/lib/profile-storage";

const defaultQuickStats = [
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
];

const documentShortcuts = [
  {
    name: "KYC dossier",
    detail: "Verified • Expires Sep 2025",
    href: "/docs/kyc",
  },
];

const fallbackDashboardMetrics = [
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

const fallbackDashboardProjects = [
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

const fallbackDashboardStream = [
  "08:40 • Top up ₦120,000 credited",
  "08:12 • ROI +64% released to NGN wallet",
  "07:58 • VIP centre unlocked fresh perks",
  "07:21 • Team Lagos hit 110% of quota",
  "06:40 • Withdrawal ₦85,000 scheduled",
  "06:05 • Referral bonus ₦32,000 earned",
];

export default function Mine() {
  const [profile, setProfile] = useState<StoredProfile>(defaultStoredProfile);
  const [profileHydrated, setProfileHydrated] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(DEFAULT_INVESTMENT_BALANCE);
  const [activeInvestment, setActiveInvestment] = useState<ActiveInvestment | null>(null);
  const [dashboardVisible, setDashboardVisible] = useState(false);
  const [liveEarnings, setLiveEarnings] = useState(0);
  const [elapsedMs, setElapsedMs] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || profileHydrated) {
      return;
    }

    const raw = window.localStorage.getItem(PROFILE_STORAGE_KEY);

    if (!raw) {
      setProfile(defaultStoredProfile);
      setProfileHydrated(true);
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      setProfile(parseStoredProfile(parsed));
      setProfileHydrated(true);
    } catch (error) {
      setProfile(defaultStoredProfile);
      setProfileHydrated(true);
    }
  }, [profileHydrated]);

  useEffect(() => {
    if (!profileHydrated || typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  }, [profile, profileHydrated]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const raw = window.localStorage.getItem(INVESTMENT_STORAGE_KEY);

    if (!raw) {
      setCurrentBalance(DEFAULT_INVESTMENT_BALANCE);
      setActiveInvestment(null);
      return;
    }

    try {
      const parsed = JSON.parse(raw) as Partial<StoredInvestmentState>;
      const balance =
        typeof parsed?.balance === "number" ? parsed.balance : DEFAULT_INVESTMENT_BALANCE;
      const storedInvestment =
        parsed?.activeInvestment &&
        typeof parsed.activeInvestment.amount === "number" &&
        typeof parsed.activeInvestment.startedAt === "number" &&
        parsed.activeInvestment.project &&
        typeof parsed.activeInvestment.project.title === "string"
          ? (parsed.activeInvestment as ActiveInvestment)
          : null;

      setCurrentBalance(balance);
      setActiveInvestment(storedInvestment);
    } catch (error) {
      setCurrentBalance(DEFAULT_INVESTMENT_BALANCE);
      setActiveInvestment(null);
    }
  }, []);

  useEffect(() => {
    if (!activeInvestment) {
      setLiveEarnings(0);
      setElapsedMs(0);
      return;
    }

    const dayMs = 24 * 60 * 60 * 1000;

    const update = () => {
      const diff = Date.now() - activeInvestment.startedAt;
      setElapsedMs(diff);
      const roiPerMs = (activeInvestment.amount * 0.69) / dayMs;
      setLiveEarnings(diff * roiPerMs);
    };

    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, [activeInvestment]);

  const elapsedLabel = useMemo(() => {
    const totalSeconds = Math.max(0, Math.floor(elapsedMs / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  }, [elapsedMs]);

  const roiTarget = activeInvestment ? activeInvestment.amount * 0.69 : 0;
  const roiPercent = activeInvestment?.amount
    ? Math.min((liveEarnings / activeInvestment.amount) * 100, 69)
    : 0;
  const roiProgress = roiTarget > 0 ? Math.min(liveEarnings / roiTarget, 1) : 0;

  const liveTickerItems = useMemo(() => {
    if (!activeInvestment) {
      return fallbackDashboardStream;
    }

    return [
      `${activeInvestment.project.title} • ${activeInvestment.project.cycle}`,
      `Live earnings ${naira(liveEarnings)} • ROI +${roiPercent.toFixed(2)}%`,
      `Balance ${naira(currentBalance)} • Target ${naira(roiTarget)}`,
    ];
  }, [activeInvestment, currentBalance, liveEarnings, roiPercent, roiTarget]);

  const stats = useMemo(() => {
    if (!activeInvestment) {
      return defaultQuickStats;
    }

    return [
      {
        label: "Project invested",
        value: activeInvestment.project.title,
        detail: activeInvestment.project.cycle,
      },
      {
        label: "Live ROI",
        value: `+${roiPercent.toFixed(2)}%`,
        detail: `Earnings ${naira(liveEarnings)}`,
      },
      {
        label: "Capital deployed",
        value: naira(activeInvestment.amount),
        detail: `Balance ${naira(currentBalance)} remaining`,
      },
    ];
  }, [activeInvestment, currentBalance, liveEarnings, roiPercent]);

  const handleProfileSave = (next: StoredProfile) => {
    setProfile(next);
    setIsEditingProfile(false);
  };

  const profileInitials = useMemo(() => {
    return profile.name
      .split(" ")
      .map((part) => part.trim()[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }, [profile.name]);

  return (
    <main className="profile-page profile-page--mobile">
      <section className="profile-mobile">
        <Surface className="profile-mobile__identity-card">
          <div className="profile-mobile__identity-glow" aria-hidden="true" />

          <header className="profile-mobile__identity-head">
            <span className="profile-mobile__identity-title">My account</span>
            <span className="profile-mobile__identity-medal">
              <span className="profile-mobile__identity-medal-icon">🏅</span>
              <span className="profile-mobile__identity-medal-tier">VIP 1</span>
            </span>
          </header>

          <div className="profile-mobile__identity-main">
            <div
              className={`profile-mobile__identity-avatar${
                profile.photo ? " profile-mobile__identity-avatar--photo" : ""
              }`}
            >
              {profile.photo ? (
                <img src={profile.photo} alt={`${profile.name} profile`} />
              ) : (
                <span className="profile-mobile__avatar-initials" aria-hidden="true">
                  {profileInitials}
                </span>
              )}
              <span className="sr-only">{`${profile.name} profile photo`}</span>
            </div>

            <div className="profile-mobile__identity-meta">
              <h1 className="profile-mobile__identity-name">{profile.name}</h1>
              <div className="profile-mobile__identity-row">
                <span className="profile-mobile__identity-label">Nickname</span>
                <span className="profile-mobile__identity-value">{profile.nickname}</span>
              </div>
              <div className="profile-mobile__identity-row">
                <span className="profile-mobile__identity-label">Coop ID</span>
                <span className="profile-mobile__identity-value">
                  {profile.coopId}
                  <button
                    type="button"
                    className="profile-mobile__identity-edit"
                    onClick={() => setIsEditingProfile(true)}
                    aria-label="Edit cooperative ID"
                    title="Edit cooperative ID"
                  >
                    ✎
                  </button>
                </span>
              </div>
              <div className="profile-mobile__identity-row">
                <span className="profile-mobile__identity-label">Location</span>
                <span className="profile-mobile__identity-value">
                  {profile.city}, {profile.region}, {profile.countryName}
                </span>
              </div>
              <div className="profile-mobile__identity-row">
                <span className="profile-mobile__identity-label">Currency</span>
                <span className="profile-mobile__identity-value">
                  {profile.currencySymbol} {profile.currencyCode}
                </span>
              </div>
              <div className="profile-mobile__identity-row">
                <span className="profile-mobile__identity-label">Phone</span>
                <span className="profile-mobile__identity-value">
                  {profile.dialCode} {profile.phoneNumber}
                </span>
              </div>
            </div>
          </div>

          <div className="profile-mobile__balance">
            <span>Current balance</span>
            <strong>{naira(currentBalance)}</strong>
          </div>

          <div className="profile-mobile__actions">
            <Link
              href="/deposit"
              className="profile-mobile__action profile-mobile__action--primary"
            >
              Deposit
            </Link>
            <Link href="/withdraw" className="profile-mobile__action">
              Withdrawal
            </Link>
            <Link href="/banking" className="profile-mobile__action">
              My cards
            </Link>
            <button
              type="button"
              className={`profile-mobile__action profile-mobile__action--dashboard${
                dashboardVisible ? " profile-mobile__action--dashboard-active" : ""
              }`}
              onClick={() => setDashboardVisible((prev) => !prev)}
            >
              {dashboardVisible ? "Hide dashboard" : "Dashboard"}
            </button>
          </div>
        </Surface>

        <Surface className="profile-mobile__stat-card">
          <div className="profile-mobile__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="profile-mobile__stat">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <p>{stat.detail}</p>
              </div>
            ))}
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
            <button
              type="button"
              className="profile-mobile__menu-row profile-mobile__menu-row--button"
              onClick={() => setIsEditingProfile(true)}
            >
              <span className="profile-mobile__menu-icon">🧾</span>
              <div className="profile-mobile__menu-copy">
                <strong>Update cooperative ID</strong>
                <p>Only your assigned ID can be changed for now</p>
              </div>
              <span className="profile-mobile__menu-caret">›</span>
            </button>
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

        {dashboardVisible && (
          <Surface
            className={`profile-demo profile-demo--mobile${
              activeInvestment ? " profile-demo--live" : " profile-demo--idle"
            }`}
          >
            <header className="profile-demo__head">
              <div>
                <span>Investment dashboard</span>
                <h2>
                  {activeInvestment
                    ? `Tracking ${activeInvestment.project.title}`
                    : "Demo investor pulse"}
                </h2>
              </div>
              <span
                className={`profile-demo__status${
                  activeInvestment ? "" : " profile-demo__status--idle"
                }`}
              >
                {activeInvestment ? "Live" : "Awaiting"}
              </span>
            </header>

            {activeInvestment ? (
              <>
                <div className="profile-demo__live">
                  <div className="profile-demo__live-primary">
                    <span>Project invested</span>
                    <strong>{activeInvestment.project.title}</strong>
                    <p>{activeInvestment.project.subtitle}</p>
                    <span className="profile-demo__live-meta">
                      {activeInvestment.project.cycle}
                    </span>
                  </div>
                  <div className="profile-demo__live-secondary">
                    <span>Live ROI</span>
                    <strong>+{roiPercent.toFixed(2)}%</strong>
                    <p>Earnings {naira(liveEarnings)}</p>
                    <span className="profile-demo__live-meta">
                      Target {naira(roiTarget)}
                    </span>
                  </div>
                </div>

                <div className="profile-demo__grid profile-demo__grid--live">
                  <div className="profile-demo__metric">
                    <span>Capital deployed</span>
                    <strong>{naira(activeInvestment.amount)}</strong>
                    <p>Charged from wallet balance</p>
                  </div>
                  <div className="profile-demo__metric">
                    <span>Balance remaining</span>
                    <strong>{naira(currentBalance)}</strong>
                    <p>Withdrawals stay open</p>
                  </div>
                  <div className="profile-demo__metric">
                    <span>Live earnings</span>
                    <strong>{naira(liveEarnings)}</strong>
                    <p>{roiPercent.toFixed(2)}% of daily target</p>
                  </div>
                  <div className="profile-demo__metric">
                    <span>Time running</span>
                    <strong>{elapsedLabel}</strong>
                    <p>Auto-withdraw at 23:59 WAT</p>
                  </div>
                </div>

                <div className="profile-demo__project profile-demo__project--live">
                  <div className="profile-demo__project-brief">
                    <div>
                      <span>Charges applied</span>
                      <strong>{naira(activeInvestment.amount)}</strong>
                      <p>Next review in {elapsedLabel}</p>
                    </div>
                    <div className="profile-demo__project-chip">
                      <span>Daily target</span>
                      <strong>{naira(roiTarget)}</strong>
                      <p>69% ROI objective</p>
                    </div>
                  </div>
                  <div className="profile-demo__bar">
                    <div style={{ width: `${Math.round(roiProgress * 100)}%` }} />
                  </div>
                </div>

                <div className="profile-demo__stream">
                  <span className="profile-demo__live-dot" />
                  <div className="profile-demo__ticker">
                    <div className="profile-demo__ticker-track">
                      {[...liveTickerItems, ...liveTickerItems].map((item, index) => (
                        <span key={`${item}-${index}`}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="profile-demo__grid">
                  {fallbackDashboardMetrics.map((metric) => (
                    <div key={metric.label} className="profile-demo__metric">
                      <span>{metric.label}</span>
                      <strong>{metric.value}</strong>
                      <p>{metric.trend}</p>
                    </div>
                  ))}
                </div>

                <div className="profile-demo__projects">
                  {fallbackDashboardProjects.map((project) => (
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
                      {[...liveTickerItems, ...liveTickerItems].map((entry, index) => (
                        <span key={`${entry}-${index}`}>{entry}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </Surface>
        )}
      </section>

      <TabBar />

      {isEditingProfile && (
        <ProfileEditDialog
          initialProfile={profile}
          onClose={() => setIsEditingProfile(false)}
          onSave={handleProfileSave}
        />
      )}
    </main>
  );
}

type ProfileEditDialogProps = {
  initialProfile: StoredProfile;
  onClose: () => void;
  onSave: (profile: StoredProfile) => void;
};

function ProfileEditDialog({ initialProfile, onClose, onSave }: ProfileEditDialogProps) {
  const [coopId, setCoopId] = useState(initialProfile.coopId);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!coopId.trim()) {
      setError("Coop ID is required.");
      return;
    }

    setError(null);
    onSave({
      ...initialProfile,
      coopId: coopId.trim(),
    });
  };

  return (
    <div className="profile-edit" onClick={onClose}>
      <div
        className="profile-edit__surface"
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-edit-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="profile-edit__header">
          <div>
            <span className="profile-edit__eyebrow">Identity settings</span>
            <h2 id="profile-edit-title">Update cooperative ID</h2>
            <p>Only your assigned cooperative ID can be changed right now. Other details remain locked.</p>
          </div>
          <button type="button" className="profile-edit__close" onClick={onClose} aria-label="Close profile editor">
            ×
          </button>
        </header>

        <form className="profile-edit__form" onSubmit={handleSubmit}>
          <p className="profile-edit__info">
            Need to adjust your name, nickname or photo? Reach out to support—those fields are locked for now.
          </p>
          <label className="profile-edit__field">
            <span>Coop ID</span>
            <input
              type="text"
              value={coopId}
              onChange={(event) => setCoopId(event.target.value)}
              placeholder="e.g. 303659"
            />
          </label>

          {error && <p className="profile-edit__error">{error}</p>}

          <div className="profile-edit__actions">
            <button type="button" className="button button--ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="button button--primary">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
