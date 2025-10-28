import Surface from "@/components/ui/Surface";
import TabBar from "@/components/ui/TabBar";
import Link from "next/link";

export default function TeamPage(){
  return (
    <main className="min-h-screen bg-[#070a11] text-white pb-24">
      <section className="mx-auto max-w-5xl p-4 pt-6 space-y-4">
        <h1 className="text-xl font-semibold">Team</h1>

        <Surface className="p-4 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-white/5 p-4 text-center">
            <div className="text-sm opacity-80">Team staff</div>
            <div className="text-3xl font-bold">0</div>
          </div>
          <div className="rounded-xl bg-white/5 p-4 text-center">
            <div className="text-sm opacity-80">Distribution commission</div>
            <div className="text-3xl font-bold">0</div>
          </div>
          <div className="col-span-2 text-center text-sm opacity-80">
            Subordinate purchases – commission: L1 17% • L2 7%.
          </div>
        </Surface>

        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">Level 1</button>
          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">Level 2</button>
        </div>

        <Surface className="p-6 text-center text-white/70">No membership</Surface>

        <div className="fixed bottom-20 right-4">
          <Link href="/share" className="px-4 py-2 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-400 text-black font-semibold shadow-lg">
            Share now
          </Link>
        </div>
      </section>
      <TabBar/>
    </main>
  );
}
