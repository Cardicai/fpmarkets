import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { value: '10k+', label: 'Instruments & CFDs' },
  { value: '45ms', label: 'Average execution speed' },
  { value: '95%', label: 'Client retention rate' },
  { value: '24/5', label: 'Global support coverage' },
]

const productCards = [
  {
    title: 'Highest leverage',
    img: '/cards/leverage.svg',
    description: 'Flexible tiers and smart margin monitoring to scale with your top performers.',
  },
  {
    title: 'Instant payouts',
    img: '/cards/payouts.svg',
    description: 'Streamline partner commissions with automated workflows and built-in compliance.',
  },
  {
    title: '24/7 multilingual support',
    img: '/cards/support.svg',
    description: 'Dedicated success pods covering every time zone to keep partners trading.',
  },
]

export default function Home() {
  return (
    <main className="flex flex-col gap-20 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/markets-hero.svg"
            alt="Markets"
            width={2400}
            height={1200}
            className="h-[46vh] w-full object-cover md:h-[60vh]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/70 to-transparent" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-20 md:py-28">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-cyan-300/80">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-semibold">Introducing FP Partner Desk</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-semibold">MiFID II compliant</span>
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl md:leading-[1.08]">
            Grow a modern brokerage franchise with battle-tested liquidity and partner economics
          </h1>
          <p className="max-w-2xl text-lg text-white/80 md:text-xl">
            Unlock tiered revenue sharing, localized onboarding, and white-label experiences that adapt to your market in real time.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#partners"
              className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Meet our partners
            </Link>
            <Link
              href="#products"
              className="rounded-xl border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white"
            >
              Explore solutions
            </Link>
          </div>

          <div className="mt-6 grid w-full gap-4 rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur">
            <div className="grid grid-cols-2 gap-4 text-sm text-white/70 md:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/5 bg-white/5 p-4 shadow-[0_12px_40px_rgba(8,17,32,0.45)]">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_80px_rgba(4,11,22,0.45)] backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Trusted by growth leaders</p>
              <h2 className="text-3xl font-semibold">Partners scaling globally with FP Markets</h2>
            </div>
            <p className="max-w-md text-sm text-white/70">
              Access institutional relationships, cross-border licensing support, and a concierge partner desk built for long-term revenue.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <Image src="/logos/exness.svg" alt="Exness" width={120} height={36} className="opacity-90" />
            <Image src="/logos/fp.svg" alt="FP" width={120} height={36} className="opacity-90" />
            <Image src="/logos/tc.svg" alt="TC" width={120} height={36} className="opacity-90" />
            <Image src="/logos/oanda.svg" alt="Oanda" width={120} height={36} className="opacity-90" />
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Solutions</p>
          <h2 className="text-3xl font-semibold">Everything partners need to activate and retain traders</h2>
          <p className="max-w-2xl text-white/70">
            Deploy modular liquidity, payment, and analytics building blocks that integrate with your existing stack in weeks—not months.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {productCards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_32px_80px_rgba(5,10,20,0.55)] transition hover:border-cyan-300/30 hover:shadow-[0_40px_100px_rgba(8,20,40,0.7)]"
            >
              <div className="relative">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={800}
                  height={500}
                  className="h-48 w-full object-cover opacity-80 transition duration-300 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-transparent to-transparent" />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-white/70">{card.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-cyan-300/80">
                  Learn more
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-white/5 p-8 shadow-[0_30px_90px_rgba(8,18,35,0.5)] md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Why FP Markets</p>
            <h2 className="text-3xl font-semibold">Compliance-friendly partner enablement</h2>
            <ul className="grid gap-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-300/30 text-cyan-200">1</span>
                <span>
                  Regulated across tier-one jurisdictions with audit-ready client reporting, so you scale confidently.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-300/30 text-cyan-200">2</span>
                <span>
                  Deep liquidity venues and smart order routing unlock competitive pricing even during volatile markets.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-300/30 text-cyan-200">3</span>
                <span>
                  Embedded analytics dashboards track client activation, churn risk, and payout timelines in real time.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-[#0a101d]/70 p-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Next steps</p>
              <h3 className="text-2xl font-semibold">Launch your partner desk in under 30 days</h3>
              <p className="text-sm text-white/70">
                Align incentives, automate operations, and plug into a liquidity backbone that keeps you competitive.
              </p>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-400/20 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/30"
            >
              View live dashboard
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-black/40 p-10 text-center shadow-[0_40px_100px_rgba(2,8,20,0.65)]">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Ready to partner</p>
          <h2 className="mt-3 text-3xl font-semibold">Let’s architect the next stage of your brokerage growth</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
            Schedule a strategy session with FP Markets specialists to tailor liquidity, funding, and automation to your roadmap.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="mailto:partners@fpmarkets.com"
              className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Talk to an expert
            </Link>
            <Link
              href="#products"
              className="rounded-xl border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white"
            >
              Review partner stack
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
