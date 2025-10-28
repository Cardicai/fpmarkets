import Surface from "@/components/ui/Surface";
import { AppShell } from "@/components/ui/AppShell";

const tiers = [
  { label: "Level 1", members: 28, bonus: "17%", pulse: "+₦420k" },
  { label: "Level 2", members: 94, bonus: "7%", pulse: "+₦210k" },
  { label: "Level 3", members: 182, bonus: "3%", pulse: "+₦110k" },
];

export default function TeamPage() {
  return (
    <AppShell
      title="Team"
      subtitle="Visualise how your referral network is growing and the revenue streams it unlocks."
    >
      <section className="grid gap-6 lg:grid-cols-3">
        <Surface>
          <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">Global network</p>
          <h3 className="mt-3 text-4xl font-semibold text-white">304 members</h3>
          <p className="mt-2 text-sm text-slate-300/80">
            Across 12 countries, with top hubs in Lagos, Dubai, and Singapore.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300/70">
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300">+42 new this week</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Conversion rate 63%</span>
          </div>
        </Surface>
        <Surface>
          <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">Commission earned</p>
          <h3 className="mt-3 text-4xl font-semibold text-emerald-300">₦1.82M</h3>
          <p className="mt-2 text-sm text-slate-300/80">
            Paid out in the last 30 days across distribution tiers.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-slate-300/70">
            <div className="flex items-center justify-between">
              <span>Pending disbursement</span>
              <span className="font-semibold text-white">₦240k</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Performance accelerator</span>
              <span className="font-semibold text-white">+12%</span>
            </div>
          </div>
        </Surface>
        <Surface>
          <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">Team sentiment</p>
          <h3 className="mt-3 text-4xl font-semibold text-white">94% positive</h3>
          <p className="mt-2 text-sm text-slate-300/80">Based on support feedback and payout success scores.</p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-slate-300/70">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Instant withdrawals running smoothly.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              <span>Team leaders requested more weekly workshops.</span>
            </div>
          </div>
        </Surface>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Surface>
          <h3 className="text-lg font-semibold text-white">Referral hierarchy</h3>
          <div className="mt-6 grid gap-4 text-sm text-slate-300/80 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.label} className="rounded-2xl border border-white/5 bg-white/5/50 p-4">
                <div className="text-xs uppercase tracking-wide text-slate-400">{tier.label}</div>
                <div className="mt-2 text-2xl font-semibold text-white">{tier.members}</div>
                <div className="mt-1 text-sm text-emerald-300">Bonus {tier.bonus}</div>
                <div className="mt-3 text-xs text-slate-400">Pulse {tier.pulse}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-dashed border-sky-500/40 bg-sky-500/10 p-5 text-sm text-slate-200">
            Invite 8 more direct partners to unlock the Aurora tier with a 22% leader commission.
          </div>
        </Surface>
        <Surface className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Payout schedule</h3>
          <ul className="flex flex-1 flex-col gap-3 text-sm text-slate-300/80">
            {["Monday 10:00 — Core team auto-payout", "Wednesday 14:30 — Accelerator bonus release", "Friday 09:00 — Regional leaders cash out"].map((item) => (
              <li key={item} className="rounded-2xl border border-white/5 bg-white/5/40 px-4 py-3">{item}</li>
            ))}
          </ul>
          <button className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(59,130,246,0.35)]">
            Share team invite link
          </button>
        </Surface>
      </section>
    </AppShell>
  );
}
