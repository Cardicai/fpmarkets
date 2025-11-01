const stats = [
  { label: 'Active partners', value: '132,000+' },
  { label: 'Monthly partner payouts', value: '$3.1M' },
  { label: 'Global client assets', value: '$1.8B' },
]

const programs = [
  {
    title: 'Introducing Broker',
    description:
      'Earn up to 45% revenue share with tiered rebates across FX, indices, metals, equities, and crypto CFDs.',
  },
  {
    title: 'Affiliate Program',
    description: 'Scale performance marketing with hybrid CPA + CPL rewards, tailored funnels, and real-time attribution.',
  },
  {
    title: 'Asset Manager',
    description: 'Leverage FP Markets multi-account manager technology to manage investor capital with institutional spreads.',
  },
]

const reasons = [
  {
    title: 'Multi-regulated security',
    copy: 'Operate under ASIC, CySEC, FSCA, and FSA oversight with segregated funds and negative balance protection.',
  },
  {
    title: 'Promotional intelligence',
    copy: 'Launch high-converting campaigns with localized landing pages, creative assets, and marketing automation.',
  },
  {
    title: 'Predictable payouts',
    copy: 'Receive weekly settlements in 20+ currencies with transparent performance dashboards and automated invoicing.',
  },
]

const insights = [
  {
    title: 'Real-time analytics',
    description:
      'Track registrations, first-time deposits, and trading volume with live cohort breakdowns and predictive trends.',
  },
  {
    title: 'Mobile partner app',
    description: 'Monitor conversions, manage referral codes, and chat with your account manager wherever you work.',
  },
  {
    title: 'Payment flexibility',
    description: 'Instant withdrawals to Skrill, Neteller, bank transfer, and local e-wallets with zero hidden fees.',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <section className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 px-6 py-12 shadow-2xl sm:px-12">
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.18),_transparent_70%)] sm:block" />
        <div className="mx-auto grid max-w-4xl gap-10 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">FP Markets Partnership</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Build recurring revenue with a trusted global investment leader
          </h1>
          <p className="text-lg text-white/70">
            Unlock institutional-grade spreads, 10,000+ tradeable products, and multi-language support tailored for growth.
            Our onboarding flow keeps compliance painless so you can focus on scaling your portfolio of active traders.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <a
              href="/auth"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-cyan-300"
            >
              Start earning today
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Explore partnership models
            </a>
          </div>
          <dl className="grid gap-6 text-left sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/5 px-5 py-6 backdrop-blur">
                <dt className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="programs" className="space-y-10">
        <header className="space-y-3 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">What we offer</p>
          <h2 className="text-3xl font-semibold">Tailored partnership programs</h2>
          <p className="text-base text-white/70">
            Choose the revenue engine that aligns with your audience—each program includes dedicated onboarding, KYC support,
            and transparent payout tiers.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-cyan-900/40"
            >
              <h3 className="text-xl font-semibold text-white">{program.title}</h3>
              <p className="text-sm text-white/70">{program.description}</p>
              <span className="mt-auto inline-flex items-center text-sm font-semibold text-cyan-300">Learn more →</span>
            </div>
          ))}
        </div>
      </section>

      <section id="why-fp" className="space-y-10">
        <header className="space-y-3 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Why FP Markets</p>
          <h2 className="text-3xl font-semibold">Grow with a partner-first ecosystem</h2>
          <p className="text-base text-white/70">
            We blend multi-asset liquidity, global regulation, and marketing innovation so your traders stay active longer—and
            your commissions keep compounding.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
              <p className="mt-3 text-sm text-white/70">{reason.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="insights" className="space-y-10">
        <header className="space-y-3 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Tools &amp; Insights</p>
          <h2 className="text-3xl font-semibold">Command your performance data</h2>
          <p className="text-base text-white/70">
            Access the FP Markets Partner Portal to manage campaigns, monitor KYC progress, and unlock tailored investment
            intelligence.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((insight) => (
            <div key={insight.title} className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
              <p className="text-sm text-white/70">{insight.description}</p>
              <div className="mt-auto h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-[#020617] p-10 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Global support</p>
          <h2 className="text-3xl font-semibold">Dedicated teams in every trading session</h2>
          <p className="text-base text-white/70">
            Connect with multilingual account managers, compliance specialists, and marketing strategists who understand local
            regulations and investor behaviour.
          </p>
          <ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
            <li>• 24/7 dealing desk coverage</li>
            <li>• Institutional liquidity partners</li>
            <li>• Tier-1 banking relationships</li>
            <li>• Custom incentive structures</li>
          </ul>
        </div>
        <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-sm text-white/70 backdrop-blur">
          <h3 className="text-lg font-semibold text-white">Partner onboarding checklist</h3>
          <ol className="space-y-3">
            <li>1. Sign the partner agreement and verify your organisation.</li>
            <li>2. Complete profile KYC and define your payout preferences.</li>
            <li>3. Launch your first campaign with co-branded creatives.</li>
            <li>4. Track conversions in real time and request instant payouts.</li>
          </ol>
          <a
            href="/onboarding"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-300"
          >
            Continue onboarding
          </a>
        </div>
      </section>
    </div>
  )
}
