import './globals.css'
import NavAuth from '@/components/NavAuth'
import Link from 'next/link'

const navLinks = [
  { href: '#programs', label: 'Programs' },
  { href: '#why-fp', label: 'Why FP Markets' },
  { href: '#insights', label: 'Insights' },
  { href: '#support', label: 'Support' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white">
        <div className="relative isolate min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,118,110,0.24),_transparent_65%)]" />
          <header className="border-white/10 bg-slate-950/80 backdrop-blur-sm border-b">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                  <span className="text-lg font-semibold">FP</span>
                </div>
                <div className="leading-tight">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">FP Markets</p>
                  <p className="text-lg font-semibold">Partner Hub</p>
                </div>
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <Link
                  href="/auth"
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/80 hover:text-cyan-100"
                >
                  Become a partner
                </Link>
                <NavAuth />
              </div>
            </div>
          </header>
          <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-12 sm:py-16 md:py-24">{children}</main>
          <footer id="support" className="mt-12 border-t border-white/10 bg-slate-950/60 py-12">
            <div className="mx-auto grid max-w-6xl gap-8 px-4 text-sm text-white/60 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Contact</p>
                <p className="mt-3 font-medium text-white">partnerdesk@fpmarkets.com</p>
                <p>24/7 multilingual support for onboarding and trading queries.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Offices</p>
                <p className="mt-3 font-medium text-white">Sydney • Limassol • Dubai • Johannesburg</p>
                <p>Regional expertise with dedicated account managers in 20+ markets.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Compliance</p>
                <p className="mt-3 font-medium text-white">ASIC • CySEC • FSCA • FSA</p>
                <p>Licensed and regulated across key jurisdictions with segregated client funds.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
