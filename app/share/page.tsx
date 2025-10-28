"use client";

import { useState } from "react";
import Surface from "@/components/ui/Surface";
import { AppShell } from "@/components/ui/AppShell";

const referralLink = "https://fpmarkets.app/join?ref=NEON-8X42";

export default function SharePage() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.warn("Clipboard unavailable", error);
      setCopied(false);
    }
  };

  return (
    <AppShell
      title="Share"
      subtitle="Grow your circle with a beautifully branded referral presence."
      actions={
        <button
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(59,130,246,0.35)]"
        >
          {copied ? "Link copied" : "Copy link"}
        </button>
      }
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Surface>
          <h3 className="text-lg font-semibold text-white">Referral mission control</h3>
          <p className="mt-2 text-sm text-slate-300/80">
            Activate the Neon Growth campaign to unlock boosted bonuses for the next 24 hours.
          </p>
          <div className="mt-6 grid gap-4 text-sm text-slate-300/80 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xs uppercase tracking-wide text-slate-400">Referral link</div>
              <div className="mt-2 truncate font-semibold text-white">{referralLink}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xs uppercase tracking-wide text-slate-400">Today's clicks</div>
              <div className="mt-2 text-2xl font-semibold text-white">128</div>
              <div className="text-xs text-emerald-300">+32% vs yesterday</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xs uppercase tracking-wide text-slate-400">New signups</div>
              <div className="mt-2 text-2xl font-semibold text-white">42</div>
              <div className="text-xs text-emerald-300">Boost mode active</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xs uppercase tracking-wide text-slate-400">Commission earned</div>
              <div className="mt-2 text-2xl font-semibold text-white">₦210k</div>
              <div className="text-xs text-emerald-300">Payout scheduled Friday</div>
            </div>
          </div>
        </Surface>
        <Surface className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Share toolkit</h3>
          <ul className="flex flex-1 flex-col gap-3 text-sm text-slate-300/80">
            {["Download promo kit with neon visuals", "Generate QR code for offline events", "Schedule auto-reminders for prospects"].map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">{item}</li>
            ))}
          </ul>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/20 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/30">
            Launch landing page
          </button>
        </Surface>
      </section>
    </AppShell>
  );
}
