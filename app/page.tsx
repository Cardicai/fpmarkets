import Image from 'next/image'
export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Image
          src="/hero/markets-hero.svg"
          alt="Markets"
          width={2400}
          height={1200}
          className="h-[46vh] w-full object-cover md:h-[60vh]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/50 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col items-start justify-end gap-4 px-6 py-16">
          <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs tracking-wide">
            Trusted partners • 10k+ instruments
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Build recurring revenue with a trusted global investment leader
          </h1>
          <p className="max-w-2xl text-white/80">
            Institutional-grade spreads, multilingual support, and painless onboarding.
          </p>
          <div className="mt-2 flex gap-3">
            <a href="#partners" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90">Explore partnership</a>
            <a href="#products" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/5">View products</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 opacity-80" id="partners">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Image src="/logos/exness.svg" alt="Exness" width={120} height={36} />
          <Image src="/logos/fp.svg" alt="FP" width={120} height={36} />
          <Image src="/logos/tc.svg" alt="TC" width={120} height={36} />
          <Image src="/logos/oanda.svg" alt="Oanda" width={120} height={36} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16" id="products">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: 'Highest leverage', img: '/cards/leverage.svg' },
            { title: 'Instant payouts', img: '/cards/payouts.svg' },
            { title: '24/7 multilingual support', img: '/cards/support.svg' },
          ].map((c, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image src={c.img} alt={c.title} width={800} height={500} className="h-44 w-full object-cover opacity-90" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="text-sm opacity-70">Grow faster with partner-grade infrastructure and analytics.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
