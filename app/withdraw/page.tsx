"use client";

import { useState } from "react";
import Surface from "@/components/ui/Surface";
import { AppShell } from "@/components/ui/AppShell";
import { naira } from "@/components/ui/NA";

const methods = [
  { id: "bank", label: "Bank transfer", eta: "Instant", fee: "₦100" },
  { id: "usdt", label: "USDT payout", eta: "< 5 mins", fee: "0.9%" },
  { id: "card", label: "Virtual card", eta: "Same day", fee: "₦0" },
];

export default function WithdrawPage() {
  const [amount, setAmount] = useState(0);
  const [method, setMethod] = useState(methods[0].id);

  return (
    <AppShell
      title="Withdraw"
      subtitle="Stage withdrawal requests, review previous settlements, and preview fees."
    >
      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Surface>
          <h3 className="text-lg font-semibold text-white">Request payout</h3>
          <p className="mt-1 text-sm text-slate-300/80">
            Funds will be locked while we simulate verification in this preview environment.
          </p>
          <form className="mt-6 grid gap-4 text-sm text-slate-200">
            <label>
              <span className="text-xs uppercase tracking-wide text-slate-400">Amount (NGN)</span>
              <input
                type="number"
                min={0}
                step={1000}
                value={amount}
                onChange={(event) => setAmount(Number(event.target.value))}
                placeholder="Enter amount"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400/60 focus:bg-white/10"
              />
            </label>
            <div>
              <span className="text-xs uppercase tracking-wide text-slate-400">Destination</span>
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                {methods.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setMethod(item.id)}
                    className={`rounded-2xl border px-4 py-3 text-left transition ${
                      method === item.id
                        ? "border-sky-400/60 bg-sky-500/20 text-white"
                        : "border-white/10 bg-white/5 text-slate-200 hover:border-sky-400/40 hover:bg-sky-500/10"
                    }`}
                  >
                    <div className="text-sm font-semibold">{item.label}</div>
                    <div className="mt-1 text-xs text-slate-300/70">Fee {item.fee} • ETA {item.eta}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
              <div className="flex items-center justify-between">
                <span>Payout amount</span>
                <span className="font-semibold text-white">{naira(amount || 0)}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                <span>Processing fee</span>
                <span>{method === "card" ? "₦0" : method === "usdt" ? "0.9%" : "₦100"}</span>
              </div>
            </div>
            <button
              type="button"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(59,130,246,0.35)]"
            >
              Queue withdrawal
            </button>
            <p className="text-xs text-slate-400">
              This is a static preview. Real payouts will be enabled after integration with payment rails.
            </p>
          </form>
        </Surface>
        <Surface className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Recent settlements</h3>
          <ul className="flex flex-1 flex-col gap-3 text-sm text-slate-300/80">
            {[
              { label: "₦120,000 • Bank transfer", meta: "Cleared in 3m" },
              { label: "₦45,000 • USDT payout", meta: "Arrived in 2m" },
              { label: "₦300,000 • Virtual card", meta: "Issued in 30m" },
            ].map((item) => (
              <li key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="font-semibold text-white">{item.label}</div>
                <div className="text-xs text-slate-400">{item.meta}</div>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-dashed border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-xs text-emerald-200">
            Tip: Enable instant-settlement mode once your KYC badge is verified.
          </div>
        </Surface>
      </section>
    </AppShell>
  );
}
