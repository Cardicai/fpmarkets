import Surface from "@/components/ui/Surface";

export default function Withdraw(){
  return (
    <main className="min-h-screen bg-[#070a11] text-white">
      <section className="mx-auto max-w-lg p-6 space-y-4">
        <h1 className="text-xl font-semibold">Withdrawal</h1>
        <Surface className="p-5 space-y-4">
          <label className="block">
            <span className="text-sm opacity-80">Amount (NGN)</span>
            <input className="mt-1 w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10" placeholder="3000" />
          </label>
          <button className="w-full rounded-xl bg-white/10 border border-white/15 py-2 hover:bg-white/20">
            Request
          </button>
        </Surface>
      </section>
    </main>
  );
}
