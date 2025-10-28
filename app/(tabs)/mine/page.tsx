import Link from "next/link";
import Surface from "@/components/ui/Surface";
import TabBar from "@/components/ui/TabBar";
import { naira } from "@/components/ui/NA";

export default function MinePage(){
  return (
    <main className="min-h-screen bg-[#070a11] text-white pb-24">
      <section className="mx-auto max-w-5xl p-4 pt-6 space-y-4">
        <Surface className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-amber-300 font-semibold">VIP 1</div>
              <div className="text-xs opacity-70">Cooperation number</div>
              <div className="text-xl font-bold tracking-wider">303659</div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-70">Balance</div>
              <div className="text-2xl font-extrabold text-sky-300">{naira(280.27)}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <Link href="/topup" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-center hover:bg-white/10">💳 Top up</Link>
            <Link href="/withdraw" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-center hover:bg-white/10">🏧 Withdrawal</Link>
          </div>
        </Surface>

        <nav className="divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
          {[
            {label:"Invite friend to earn income", href:"/share"},
            {label:"Sign in", href:"/login"},
            {label:"VIP", href:"/vip"},
            {label:"Private message", href:"/messages"},
            {label:"Points Mall", href:"/points"},
            {label:"Change password", href:"/account/security"},
            {label:"Bind a bank card", href:"/bank"},
          ].map(i=>(
            <Link key={i.label} href={i.href} className="block bg-white/5 px-4 py-4 hover:bg-white/10">
              <div className="flex items-center justify-between">
                <span>{i.label}</span><span className="opacity-60">›</span>
              </div>
            </Link>
          ))}
        </nav>
      </section>
      <TabBar/>
    </main>
  );
}
