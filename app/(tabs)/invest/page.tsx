import Link from "next/link";
import Surface from "@/components/ui/Surface";
import TabBar from "@/components/ui/TabBar";
import { naira } from "@/components/ui/NA";

const products = [
  { id:"PG398165", country:"Netherlands", min:6800, days:25, est:4760, progress:62,
    img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800" },
  { id:"PG568135", country:"South Korea", min:5000, days:20, est:3200, progress:38,
    img:"https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800" },
];

export const dynamic = "force-dynamic";

export default function InvestPage() {
  return (
    <main className="min-h-screen bg-[#070a11] text-white pb-24">
      <section className="mx-auto max-w-5xl p-4 pt-6">
        <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-emerald-400 h-28" />
        <div className="grid grid-cols-2 gap-3 mt-4">
          <Link href="/actions/company" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-center hover:bg-white/10">🏢 Company</Link>
          <Link href="/topup" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-center hover:bg-white/10">💳 Top up</Link>
          <Link href="/withdraw" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-center hover:bg-white/10">🏧 Withdrawal</Link>
          <Link href="/help" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-center hover:bg-white/10">❓ Help</Link>
        </div>

        <div className="flex items-center gap-2 mt-6 text-sm text-white/80">
          <span>🎁 Top-up bonuses active • Invest responsibly</span>
        </div>

        <div id="products" className="mt-4 space-y-4">
          {products.map(p => (
            <Surface key={p.id} className="p-4">
              <div className="flex gap-4">
                <img src={p.img} alt={p.country} className="h-20 w-24 object-cover rounded-xl"/>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{p.country}: <span className="opacity-90">{p.id}</span></h3>
                      <div className="mt-1 text-sm text-white/80 flex flex-wrap gap-4">
                        <span>Minimum <b>{naira(p.min)}</b></span>
                        <span>Cycle <b>{p.days} Day</b></span>
                        <span>Earnings <b>{naira(p.est)}</b></span>
                      </div>
                    </div>
                    <Link href={`/invest/${p.id}`} className="rounded-2xl px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/15">Buy</Link>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-500" style={{width:`${p.progress}%`}} />
                  </div>
                </div>
              </div>
            </Surface>
          ))}
        </div>
      </section>
      <TabBar/>
    </main>
  );
}
