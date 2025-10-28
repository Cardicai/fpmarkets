"use client";

import Link from "next/link";
import Surface from "@/components/ui/Surface";
import { AppShell } from "@/components/ui/AppShell";
import { naira } from "@/components/ui/NA";
import { useAuth } from "@/components/providers/auth-context";

const quickLinks = [
  { label: "Invite friends & earn", href: "/share" },
  { label: "Daily mining boost", href: "/mine/boost" },
  { label: "VIP tiers", href: "/vip" },
  { label: "Private messages", href: "/messages" },
  { label: "Points mall", href: "/points" },
  { label: "Account security", href: "/account/security" },
  { label: "Linked bank cards", href: "/bank" },
];

export default function MinePage() {
  const { user, logout } = useAuth();

  return (
    <AppShell
      title="Mine"
      subtitle="Review your personal rewards, mining streaks, and quick actions."
      actions={
        <button
          onClick={logout}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-sky-400/40 hover:text-white"
        >
          Sign out
        </button>
      }
    >
      <section className="grid gap-6 lg:grid-cols-3">
        <Surface className="lg:col-span-2">
          <div className="flex flex-col justify-between gap-6 lg:flex-row">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">Member tier</p>
              <h3 className="mt-3 text-4xl font-semibold text-white">VIP 3 • {user?.name ?? "Investor"}</h3>
              <p className="mt-2 text-sm text-slate-300/80">
                Maintain a 14-day mining streak to unlock the Aurora accelerator badge.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300/70">
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300">Streak: 9 days</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Hash power +32%</span>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300/80">
              <div className="text-xs uppercase tracking-wide text-slate-400">Mining balance</div>
              <div className="mt-3 text-3xl font-semibold text-white">{naira(280.27)}</div>
              <div className="mt-4 grid gap-3">
                <div className="flex items-center justify-between">
                  <span>Daily booster</span>
                  <span className="text-emerald-300">+₦32.50</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Referral fusion</span>
                  <span className="text-emerald-300">+₦18.40</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Cycle sync</span>
                  <span className="text-slate-200">2 hrs remaining</span>
                </div>
              </div>
            </div>
          </div>
        </Surface>
        <Surface className="flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">Support coach</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Ada from Lagos</h3>
            <p className="mt-2 text-sm text-slate-300/80">Available 9am – 6pm WAT to help you optimise returns.</p>
          </div>
          <Link
            href="/support"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/20 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/30"
          >
            Message coach
          </Link>
        </Surface>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Surface>
          <h3 className="text-lg font-semibold text-white">Quick controls</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300/80 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-sky-400/40 hover:bg-sky-500/10"
              >
                <span>{link.label}</span>
                <span className="text-lg text-sky-300 transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            ))}
          </div>
        </Surface>
        <Surface>
          <h3 className="text-lg font-semibold text-white">Mining boosts</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300/80">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/20 via-sky-500/10 to-transparent px-4 py-3">
              Activate “Stellar Burst” to double hash power for 2 hours.
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-violet-500/20 via-sky-500/10 to-transparent px-4 py-3">
              Weekend surge incoming — expect +12% mining rewards.
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-fuchsia-500/20 via-sky-500/10 to-transparent px-4 py-3">
              Sync with team multiplier to unlock fusion payouts.
            </div>
          </div>
        </Surface>
      </section>
    </AppShell>
  );
}
