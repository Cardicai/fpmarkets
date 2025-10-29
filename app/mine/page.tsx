"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
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

const PROFILE_STORAGE_KEY = "fpmarkets:profile-state";

type ThemePreference = "dark" | "light";

type ProfileState = {
  name: string;
  nickname: string;
  email: string;
  coopId: string;
  language: string;
  currency: string;
  theme: ThemePreference;
  roiAlerts: boolean;
  marketing: boolean;
  photo: string | null;
};

const defaultProfile: ProfileState = {
  name: "Sola Gbadamosi",
  nickname: "solagbada",
  email: "sola.gbadamosi@example.com",
  coopId: "303659",
  language: "English (Nigeria)",
  currency: "NGN",
  theme: "dark",
  roiAlerts: true,
  marketing: false,
  photo: null,
};

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
  const [profile, setProfile] = useState<ProfileState>(defaultProfile);
  const [profileHydrated, setProfileHydrated] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
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
      setProfile(defaultProfile);
      setProfileHydrated(true);
      return;
    }

    try {
      const parsed = JSON.parse(raw) as Partial<ProfileState>;
      const name = typeof parsed?.name === "string" && parsed.name.trim()
        ? parsed.name.trim()
        : defaultProfile.name;
      const nickname = typeof parsed?.nickname === "string" && parsed.nickname.trim()
        ? parsed.nickname.trim()
        : defaultProfile.nickname;
      const email = typeof parsed?.email === "string" && parsed.email.trim()
        ? parsed.email.trim()
        : defaultProfile.email;
      const coopId = typeof parsed?.coopId === "string" && parsed.coopId.trim()
        ? parsed.coopId.trim()
        : defaultProfile.coopId;
      const language = typeof parsed?.language === "string" && parsed.language.trim()
        ? parsed.language.trim()
        : defaultProfile.language;
      const currency = typeof parsed?.currency === "string" && parsed.currency.trim()
        ? parsed.currency.trim()
        : defaultProfile.currency;
      const theme: ThemePreference = parsed?.theme === "light" ? "light" : "dark";
      const roiAlerts = typeof parsed?.roiAlerts === "boolean"
        ? parsed.roiAlerts
        : defaultProfile.roiAlerts;
      const marketing = typeof parsed?.marketing === "boolean"
        ? parsed.marketing
        : defaultProfile.marketing;
      const photo = typeof parsed?.photo === "string" && parsed.photo.trim()
        ? parsed.photo.trim()
        : null;

      setProfile({
        name,
        nickname,
        email,
        coopId,
        language,
        currency,
        theme,
        roiAlerts,
        marketing,
        photo,
      });
      setProfileHydrated(true);
    } catch (error) {
      setProfile(defaultProfile);
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
    if (typeof document === "undefined") {
      return;
    }

    const body = document.body;
    body.classList.remove("theme-light", "theme-dark");
    const nextTheme = profile.theme === "light" ? "theme-light" : "theme-dark";
    body.classList.add(nextTheme);
    document.documentElement.style.colorScheme = profile.theme === "light" ? "light" : "dark";
  }, [profile.theme]);

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

  const preferenceHighlights = useMemo(
    () => [
      {
        label: "Contact email",
        value: profile.email,
        detail: profile.roiAlerts ? "ROI alerts enabled" : "ROI alerts paused",
      },
      {
        label: "Interface language",
        value: profile.language,
        detail: `Theme ${profile.theme === "light" ? "Light" : "Dark"}`,
      },
      {
        label: "Primary currency",
        value: profile.currency,
        detail: profile.marketing ? "Community updates on" : "Community updates off",
      },
    ],
    [profile.currency, profile.email, profile.language, profile.marketing, profile.roiAlerts, profile.theme],
  );

  const handleProfileSave = (next: ProfileState) => {
    setProfile(next);
    setIsSettingsOpen(false);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(PROFILE_STORAGE_KEY);
      window.localStorage.removeItem(INVESTMENT_STORAGE_KEY);
    }

    setProfile({ ...defaultProfile });
    setCurrentBalance(DEFAULT_INVESTMENT_BALANCE);
    setActiveInvestment(null);
    setDashboardVisible(false);
    setLiveEarnings(0);
    setElapsedMs(0);

    if (typeof window !== "undefined") {
      window.alert("You have been logged out of the demo experience.");
    }
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
                <span className="profile-mobile__identity-value profile-mobile__identity-value--locked">
                  {profile.coopId}
                  <span className="profile-mobile__identity-lock" aria-hidden="true">
                    🔒
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="profile-mobile__identity-controls">
            <button
              type="button"
              className="profile-mobile__identity-manage"
              onClick={() => setIsSettingsOpen(true)}
            >
              Manage profile
            </button>
            <p>Update your name, contact email, language and interface theme.</p>
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

        <Surface className="profile-mobile__preferences-card">
          <header className="profile-mobile__preferences-head">
            <div>
              <span className="profile-mobile__preferences-title">Personal settings</span>
              <h2>Interface preferences</h2>
            </div>
            <button
              type="button"
              className="profile-mobile__preferences-manage"
              onClick={() => setIsSettingsOpen(true)}
            >
              Adjust settings
            </button>
          </header>

          <div className="profile-mobile__preferences-grid">
            {preferenceHighlights.map((preference) => (
              <div key={preference.label} className="profile-mobile__preference">
                <span>{preference.label}</span>
                <strong>{preference.value}</strong>
                <p>{preference.detail}</p>
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
              onClick={() => setIsSettingsOpen(true)}
            >
              <span className="profile-mobile__menu-icon">⚙️</span>
              <div className="profile-mobile__menu-copy">
                <strong>Profile &amp; settings</strong>
                <p>Change your name, email, language or theme</p>
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

        <button type="button" className="profile-mobile__logout" onClick={handleLogout}>
          Logout
        </button>
      </section>

      <TabBar />

      {isSettingsOpen && (
        <ProfileSettingsDialog
          initialProfile={profile}
          onClose={() => setIsSettingsOpen(false)}
          onSave={handleProfileSave}
        />
      )}
    </main>
  );
}

type ProfileSettingsDialogProps = {
  initialProfile: ProfileState;
  onClose: () => void;
  onSave: (profile: ProfileState) => void;
};

function ProfileSettingsDialog({ initialProfile, onClose, onSave }: ProfileSettingsDialogProps) {
  const [name, setName] = useState(initialProfile.name);
  const [nickname, setNickname] = useState(initialProfile.nickname);
  const [email, setEmail] = useState(initialProfile.email);
  const [language, setLanguage] = useState(initialProfile.language);
  const [currency, setCurrency] = useState(initialProfile.currency);
  const [theme, setTheme] = useState<ThemePreference>(initialProfile.theme);
  const [roiAlerts, setRoiAlerts] = useState(initialProfile.roiAlerts);
  const [marketing, setMarketing] = useState(initialProfile.marketing);
  const [photo, setPhoto] = useState<string | null>(initialProfile.photo);
  const [error, setError] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (file.size > 4 * 1024 * 1024) {
      setPhotoError("Please choose an image under 4MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(typeof reader.result === "string" ? reader.result : null);
      setPhotoError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim()) {
      setError("Your full name is required.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }

    setError(null);
    onSave({
      ...initialProfile,
      name: name.trim(),
      nickname: nickname.trim() || initialProfile.nickname,
      email: email.trim(),
      language,
      currency,
      theme,
      roiAlerts,
      marketing,
      photo,
    });
  };

  return (
    <div className="profile-settings" onClick={onClose}>
      <div
        className="profile-settings__surface"
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-settings-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="profile-settings__header">
          <div>
            <span className="profile-settings__eyebrow">Profile settings</span>
            <h2 id="profile-settings-title">Personalise your experience</h2>
            <p>Update your name, contact details and interface preferences. Your cooperative ID remains locked.</p>
          </div>
          <button
            type="button"
            className="profile-settings__close"
            onClick={onClose}
            aria-label="Close profile settings"
          >
            ×
          </button>
        </header>

        <form className="profile-settings__form" onSubmit={handleSubmit}>
          <div className="profile-settings__columns">
            <div className="profile-settings__column">
              <label className="profile-settings__field">
                <span>Full name</span>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
              </label>

              <label className="profile-settings__field">
                <span>Nickname</span>
                <input
                  type="text"
                  value={nickname}
                  onChange={(event) => setNickname(event.target.value)}
                  placeholder="Optional display name"
                />
              </label>

              <label className="profile-settings__field">
                <span>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@example.com"
                />
              </label>

              <label className="profile-settings__field profile-settings__field--locked">
                <span>Coop ID</span>
                <input type="text" value={initialProfile.coopId} readOnly />
                <p>This ID is assigned at sign up and cannot be edited.</p>
              </label>
            </div>

            <div className="profile-settings__column">
              <label className="profile-settings__field">
                <span>Language</span>
                <select value={language} onChange={(event) => setLanguage(event.target.value)}>
                  <option>English (Nigeria)</option>
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Français</option>
                </select>
              </label>

              <label className="profile-settings__field">
                <span>Primary currency</span>
                <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
                  <option value="NGN">Nigerian Naira (NGN)</option>
                  <option value="USD">US Dollar (USD)</option>
                  <option value="USDT">Tether (USDT)</option>
                  <option value="GBP">Pound Sterling (GBP)</option>
                </select>
              </label>

              <fieldset className="profile-settings__field">
                <legend>Interface theme</legend>
                <div className="profile-settings__theme">
                  <label>
                    <input
                      type="radio"
                      name="theme"
                      value="dark"
                      checked={theme === "dark"}
                      onChange={() => setTheme("dark")}
                    />
                    <span>Dark</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="theme"
                      value="light"
                      checked={theme === "light"}
                      onChange={() => setTheme("light")}
                    />
                    <span>Light</span>
                  </label>
                </div>
              </fieldset>

              <div className="profile-settings__toggles">
                <label className="profile-settings__toggle">
                  <input
                    type="checkbox"
                    checked={roiAlerts}
                    onChange={(event) => setRoiAlerts(event.target.checked)}
                  />
                  <div>
                    <strong>ROI alerts</strong>
                    <p>Send me daily ROI performance updates.</p>
                  </div>
                </label>

                <label className="profile-settings__toggle">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(event) => setMarketing(event.target.checked)}
                  />
                  <div>
                    <strong>Community updates</strong>
                    <p>Keep me in the loop with programme news.</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <section className="profile-settings__avatar">
            <div className="profile-settings__avatar-preview">
              {photo ? (
                <img src={photo} alt="Profile preview" />
              ) : (
                <span>{(name || initialProfile.name).slice(0, 1).toUpperCase()}</span>
              )}
            </div>

            <div className="profile-settings__avatar-actions">
              <label className="button button--secondary">
                Upload photo
                <input type="file" accept="image/*" onChange={handlePhotoChange} hidden />
              </label>
              <button
                type="button"
                className="button button--ghost"
                onClick={() => {
                  setPhoto(null);
                  setPhotoError(null);
                }}
              >
                Remove photo
              </button>
            </div>

            {photoError && <p className="profile-settings__error">{photoError}</p>}
          </section>

          {error && <p className="profile-settings__error">{error}</p>}

          <div className="profile-settings__actions">
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
