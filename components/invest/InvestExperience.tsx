"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import TabBar from "@/components/ui/TabBar";
import { naira } from "@/components/ui/NA";

export const DEFAULT_INVESTMENT_BALANCE = 428000;
export const INVESTMENT_STORAGE_KEY = "fpmarkets:investment-state";

export type HeroStat = {
  label: string;
  value: string;
};

export type CurrencyWallet = {
  code: string;
  name: string;
  description: string;
  limits: string;
  status: string;
};

export type TraderProject = {
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

export type Product = {
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

export type ProductSection = {
  key: string;
  title: string;
  eyebrow: string;
  projects: Product[];
};

export type WorkflowStep = {
  title: string;
  description: string;
};

export type SupportHighlight = {
  title: string;
  description: string;
};

export type VisionHighlight = {
  title: string;
  description: string;
  metric: string;
};

type InvestExperienceProps = {
  heroStats: HeroStat[];
  currencyWallets: CurrencyWallet[];
  traderTicker: TraderProject[];
  productSections: ProductSection[];
  workflowSteps: WorkflowStep[];
  supportHighlights: SupportHighlight[];
  initialBalance: number;
  visionHighlights: VisionHighlight[];
};

export type ActiveInvestment = {
  project: Product;
  amount: number;
  startedAt: number;
};

type WalletInsight = {
  label: string;
  value: string;
  detail: string;
};

export type StoredInvestmentState = {
  balance: number;
  activeInvestment: ActiveInvestment | null;
};

export default function InvestExperience({
  heroStats,
  currencyWallets,
  traderTicker,
  productSections,
  workflowSteps,
  supportHighlights,
  initialBalance,
  visionHighlights,
}: InvestExperienceProps) {
  const [availableBalance, setAvailableBalance] = useState(initialBalance);
  const [selectedProject, setSelectedProject] = useState<Product | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [activeInvestment, setActiveInvestment] = useState<ActiveInvestment | null>(null);
  const [investmentError, setInvestmentError] = useState<string | null>(null);
  const [investmentSuccess, setInvestmentSuccess] = useState<string | null>(null);
  const [earnings, setEarnings] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || isHydrated) {
      return;
    }

    const parseState = (raw: string): StoredInvestmentState => {
      try {
        const parsed = JSON.parse(raw) as Partial<StoredInvestmentState>;
        const balance = typeof parsed.balance === "number" ? parsed.balance : initialBalance;
        const maybeActive = parsed.activeInvestment as ActiveInvestment | null | undefined;

        if (
          maybeActive &&
          typeof maybeActive.amount === "number" &&
          typeof maybeActive.startedAt === "number" &&
          maybeActive.project &&
          typeof maybeActive.project.title === "string"
        ) {
          return { balance, activeInvestment: maybeActive };
        }

        return { balance, activeInvestment: null };
      } catch (error) {
        return { balance: initialBalance, activeInvestment: null };
      }
    };

    const raw = window.localStorage.getItem(INVESTMENT_STORAGE_KEY);

    if (raw) {
      const state = parseState(raw);
      setAvailableBalance(state.balance);
      setActiveInvestment(state.activeInvestment);
      setIsHydrated(true);
      return;
    }

    const defaultState: StoredInvestmentState = {
      balance: initialBalance,
      activeInvestment: null,
    };

    window.localStorage.setItem(INVESTMENT_STORAGE_KEY, JSON.stringify(defaultState));
    setAvailableBalance(initialBalance);
    setActiveInvestment(null);
    setIsHydrated(true);
  }, [initialBalance, isHydrated]);

  useEffect(() => {
    if (!isHydrated || typeof window === "undefined") {
      return;
    }

    const payload: StoredInvestmentState = {
      balance: availableBalance,
      activeInvestment,
    };

    window.localStorage.setItem(INVESTMENT_STORAGE_KEY, JSON.stringify(payload));
  }, [availableBalance, activeInvestment, isHydrated]);

  useEffect(() => {
    if (!activeInvestment) {
      setEarnings(0);
      return;
    }

    const dayMs = 24 * 60 * 60 * 1000;

    const update = () => {
      const diff = Date.now() - activeInvestment.startedAt;
      const roiPerMs = (activeInvestment.amount * 0.69) / dayMs;
      setEarnings(diff * roiPerMs);
    };

    update();

    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, [activeInvestment]);

  const walletInsights = useMemo<WalletInsight[]>(() => {
    if (activeInvestment) {
      return [
        {
          label: "Live earnings",
          value: naira(earnings),
          detail: "69% ROI counter in motion",
        },
        {
          label: "Available balance",
          value: naira(availableBalance),
          detail: "After current allocations",
        },
      ];
    }

    return [
      {
        label: "Vault balance",
        value: naira(availableBalance),
        detail: "Ready to deploy into trader missions",
      },
      {
        label: "Live missions",
        value: "0",
        detail: "Select a trader below to begin",
      },
    ];
  }, [activeInvestment, availableBalance, earnings]);

  const handleSelectProject = (project: Product) => {
    setSelectedProject(project);
    setAmount(String(project.min));
    setInvestmentError(null);
    setInvestmentSuccess(null);
  };

  const handleInvest = () => {
    if (!selectedProject) {
      return;
    }

    const numericAmount = Number(amount);

    if (Number.isNaN(numericAmount) || numericAmount <= 0) {
      setInvestmentError("Enter a valid amount to invest.");
      return;
    }

    if (numericAmount < selectedProject.min) {
      setInvestmentError(
        `Minimum allocation for this mission is ${naira(selectedProject.min)}.`
      );
      return;
    }

    if (numericAmount > availableBalance) {
      setInvestmentError("Insufficient balance. Top up your vault to continue.");
      return;
    }

    const investment: ActiveInvestment = {
      project: selectedProject,
      amount: numericAmount,
      startedAt: Date.now(),
    };

    setActiveInvestment(investment);
    setAvailableBalance((prev) => prev - numericAmount);
    setSelectedProject(null);
    setAmount("");
    setInvestmentError(null);
    setInvestmentSuccess("Investment launched! Manage it from your profile dashboard.");
  };

  const handleAmountChange = (value: string) => {
    setAmount(value);
    setInvestmentError(null);
    setInvestmentSuccess(null);
  };

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

        <div className="invest-hero__panel">
          <header className="invest-panel__head">
            <div>
              <span>Personal vault</span>
              <strong>{naira(availableBalance)}</strong>
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
            {walletInsights.map((insight) => (
              <div key={insight.label}>
                <span>{insight.label}</span>
                <strong>{insight.value}</strong>
                <p>{insight.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section invest-vision" aria-label="Executive overview">
        <div className="invest-vision__copy">
          <span className="section__eyebrow">Designed for desktop clarity</span>
          <h2 className="section__title">Every control spaced for a calmer PC command view.</h2>
          <p className="section__subtitle">
            We decluttered the landing journey so you can glide through balance review,
            currency setup and mission selection without noise. Each highlight below
            keeps the desktop layout measured and professional.
          </p>
        </div>
        <div className="invest-vision__grid">
          {visionHighlights.map((item) => (
            <article key={item.title} className="invest-vision__card">
              <header>
                <span>{item.metric}</span>
                <h3>{item.title}</h3>
              </header>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
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
            <div key={wallet.code} className="currency-card">
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
            </div>
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
            <div key={section.key} className="section__tab">
              <span className="section__tab-eyebrow">{section.eyebrow}</span>
              <h3>{section.title}</h3>
              <div className="project-grid">
                {section.projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    isSelected={selectedProject?.title === project.title}
                    amount={selectedProject?.title === project.title ? amount : ""}
                    onAmountChange={handleAmountChange}
                    onSelect={() => handleSelectProject(project)}
                    onConfirm={handleInvest}
                    availableBalance={availableBalance}
                    error={
                      selectedProject?.title === project.title ? investmentError : null
                    }
                    success={
                      activeInvestment?.project.title === project.title
                        ? investmentSuccess
                        : null
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <span className="section__eyebrow">How it works</span>
          <h2 className="section__title">Three deliberate steps to deploy capital.</h2>
        </div>
        <div className="workflow">
          {workflowSteps.map((step, index) => (
            <div key={step.title} className="workflow__step">
              <div className="workflow__index">0{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
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
            <div key={item.title} className="benefit-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TabBar />
    </main>
  );
}

type ProjectCardProps = {
  project: Product;
  isSelected: boolean;
  amount: string;
  onAmountChange: (value: string) => void;
  onSelect: () => void;
  onConfirm: () => void;
  availableBalance: number;
  error: string | null;
  success: string | null;
};

function ProjectCard({
  project,
  isSelected,
  amount,
  onAmountChange,
  onSelect,
  onConfirm,
  availableBalance,
  error,
  success,
}: ProjectCardProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onConfirm();
  };

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
          {isSelected ? (
            <form className="project-card__form" onSubmit={handleSubmit}>
              <label htmlFor={`${project.title}-amount`}>Amount to invest</label>
              <div className="project-card__form-controls">
                <input
                  id={`${project.title}-amount`}
                  type="number"
                  min={project.min}
                  step="100"
                  value={amount}
                  onChange={(event) => onAmountChange(event.target.value)}
                  placeholder={String(project.min)}
                  aria-describedby={`${project.title}-helper`}
                />
                <button type="submit" className="button button--primary">
                  Confirm invest
                </button>
              </div>
              <p id={`${project.title}-helper`} className="project-card__helper">
                Available balance: {naira(availableBalance)}
              </p>
              {error && <p className="project-card__error">{error}</p>}
            </form>
          ) : (
            <button type="button" className="button button--primary" onClick={onSelect}>
              Invest
            </button>
          )}
          <p className="project-card__note">Full trade brief unlocks inside your profile dashboard.</p>
        </div>
        {success && (
          <p className="project-card__success" role="status">
            {success}
          </p>
        )}
      </div>
    </article>
  );
}
