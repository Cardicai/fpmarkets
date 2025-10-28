import Surface from "@/components/ui/Surface";
import { AppShell } from "@/components/ui/AppShell";
import { naira } from "@/components/ui/NA";

const performancePoints = [120, 132, 150, 168, 172, 188, 210];

const plans = [
  {
    name: "Quantum Prime",
    code: "PG398165",
    country: "Netherlands",
    invested: 6800,
    cycleDays: 25,
    expectedYield: 4760,
    completion: 62,
  },
  {
    name: "Neon Velocity",
    code: "PG571204",
    country: "Singapore",
    invested: 12000,
    cycleDays: 45,
    expectedYield: 9400,
    completion: 44,
  },
];

export default function InvestPage() {
  return (
    <AppShell
      title="Invest"
      subtitle="Track your active investment cycles, manage subscriptions, and preview projected earnings."
      actions={
        <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(59,130,246,0.35)] transition-transform duration-300 hover:-translate-y-0.5">
          Start new plan
          <span className="text-lg transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      }
    >
      <section className="grid gap-6 lg:grid-cols-3">
        <Surface className="lg:col-span-1">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">Portfolio balance</p>
          <h3 className="mt-4 text-3xl font-bold text-white">{naira(58240.5)}</h3>
          <p className="mt-2 text-sm text-slate-300/70">
            Combined capital across all live trading cycles.
          </p>
          <div className="mt-6 flex items-baseline gap-3 text-sm">
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300">+8.2% weekly</span>
            <span className="text-slate-400">Updated 3 mins ago</span>
          </div>
        </Surface>
        <Surface className="lg:col-span-1">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">Active cycles</p>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h3 className="text-3xl font-bold text-white">7</h3>
              <p className="mt-1 text-sm text-slate-300/70">3 short • 4 long positions</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-2 text-xs text-slate-200/80">
              Next renewal
              <br />
              <span className="text-base font-semibold text-white">12h 54m</span>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-sm text-slate-300/70">
            <div>
              <div className="text-xs text-slate-400">Cycle ROI</div>
              <div className="text-lg font-semibold text-white">18.4%</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Auto reinvest</div>
              <div className="text-lg font-semibold text-white">On</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Total earnings</div>
              <div className="text-lg font-semibold text-emerald-300">{naira(21460)}</div>
            </div>
          </div>
        </Surface>
        <Surface className="lg:col-span-1">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">Profit momentum</p>
          <div className="mt-4 h-28 w-full">
            <svg viewBox="0 0 200 80" className="h-full w-full">
              <defs>
                <linearGradient id="profitGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(56,189,248,0.5)" />
                  <stop offset="100%" stopColor="rgba(15,23,42,0.05)" />
                </linearGradient>
              </defs>
              <path
                d="M0,80 L0,50"
                stroke="rgba(148,163,184,0.35)"
                strokeDasharray="4 6"
              />
              <polyline
                fill="url(#profitGradient)"
                stroke="rgba(56,189,248,0.6)"
                strokeWidth="2"
                points={performancePoints
                  .map((value, index) => {
                    const x = (index / (performancePoints.length - 1)) * 200;
                    const y = 80 - (value / 220) * 70 - 5;
                    return `${x},${y}`;
                  })
                  .join(" ")}
              />
            </svg>
          </div>
          <div className="mt-3 flex items-center justify-between text-sm text-slate-300/70">
            <span>7-day projected</span>
            <span className="font-semibold text-emerald-300">+{naira(2180)}</span>
          </div>
        </Surface>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {plans.map((plan) => (
          <Surface key={plan.code} className="flex flex-col gap-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="text-sm text-slate-400">{plan.country} • {plan.code}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-sky-200/80">
                Cycle {plan.cycleDays}d
              </span>
            </div>
            <div className="grid gap-4 text-sm text-slate-300/80 sm:grid-cols-3">
              <div>
                <div className="text-xs text-slate-400">Capital</div>
                <div className="text-lg font-semibold text-white">{naira(plan.invested)}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Projected yield</div>
                <div className="text-lg font-semibold text-emerald-300">{naira(plan.expectedYield)}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Automation</div>
                <div className="text-lg font-semibold text-white">Enabled</div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Cycle progress</span>
                <span>{plan.completion}%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500"
                  style={{ width: `${plan.completion}%` }}
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/20 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/30">
                Reinvest profits
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:text-white">
                View contract
              </button>
            </div>
          </Surface>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Surface>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Deposit & subscription preview</h3>
              <p className="mt-1 text-sm text-slate-300/70">
                Simulate a new deposit to preview returns before committing capital.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300/70">
              <span className="text-xs uppercase tracking-wider text-slate-400">Estimated APR</span>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 font-semibold text-emerald-300">23.6%</span>
            </div>
          </div>
          <form className="mt-6 grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
            <label className="sm:col-span-1">
              <span className="text-xs uppercase tracking-wide text-slate-400">Capital (NGN)</span>
              <input
                type="number"
                min={1000}
                defaultValue={25000}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400/60 focus:bg-white/10"
              />
            </label>
            <label className="sm:col-span-1">
              <span className="text-xs uppercase tracking-wide text-slate-400">Cycle length</span>
              <select className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400/60 focus:bg-white/10">
                <option>15 days</option>
                <option>25 days</option>
                <option>40 days</option>
              </select>
            </label>
            <label className="sm:col-span-1">
              <span className="text-xs uppercase tracking-wide text-slate-400">Auto compound</span>
              <select className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400/60 focus:bg-white/10">
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </label>
            <div className="sm:col-span-3">
              <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-sky-500/10 via-violet-500/10 to-fuchsia-500/10 px-4 py-3">
                <div>
                  <span className="text-xs uppercase tracking-wide text-slate-300/80">Projected return</span>
                  <div className="text-lg font-semibold text-emerald-300">{naira(31280)}</div>
                </div>
                <div className="text-xs text-slate-300/70">
                  Includes compounding bonus and referral accelerator.
                </div>
                <button type="button" className="ml-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_15px_35px_rgba(59,130,246,0.35)]">
                  Confirm simulation
                </button>
              </div>
            </div>
          </form>
        </Surface>
        <Surface className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Live signal feed</h3>
          <ul className="flex flex-1 flex-col gap-4 text-sm text-slate-300/80">
            {["NAS100 scalping signals performing 1.4% above benchmark", "Gold hedging strategy entering cooldown window", "AI arbitrage bot secured +₦420k in daily delta"].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5/40 p-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Surface>
      </section>
    </AppShell>
  );
}
