"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/providers/auth-context";

const NAV_LINKS = [
  { href: "/invest", label: "Invest" },
  { href: "/team", label: "Team" },
  { href: "/mine", label: "Mine" },
  { href: "/withdraw", label: "Withdraw" },
  { href: "/share", label: "Share" },
];

export function AppNav() {
  const pathname = usePathname();
  const { user, loading } = useAuth();

  return (
    <header className="z-20 px-6 pb-6 lg:px-12">
      <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5/60 p-6 shadow-[0_0_60px_rgba(56,189,248,0.15)] backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.4em] text-sky-300/80">FPMarkets</div>
          <h1 className="mt-2 text-2xl font-semibold text-white lg:text-3xl">Neo Investment Control Center</h1>
          <p className="mt-1 max-w-xl text-sm text-slate-300/80">
            Monitor balances, guide your team, withdraw profits, and share referral growth from a single dark-mode cockpit.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <nav className="flex flex-wrap items-center gap-2">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`group relative overflow-hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-sky-500/20 text-sky-100"
                      : "bg-white/5 text-slate-200 hover:bg-white/10"
                  }`}
                >
                  <span className="relative z-10">{label}</span>
                  <span
                    className={`absolute inset-0 z-0 bg-gradient-to-r from-sky-500/30 via-violet-500/30 to-fuchsia-500/30 opacity-0 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <div className="flex flex-col text-right">
              <span className="text-xs uppercase tracking-wider text-sky-200/80">Signed in as</span>
              <span className="font-semibold text-white/90">{loading ? "Loading…" : user ? user.name : "Guest"}</span>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-400/60 via-violet-500/60 to-slate-900/80 shadow-lg" />
          </div>
        </div>
      </div>
    </header>
  );
}
