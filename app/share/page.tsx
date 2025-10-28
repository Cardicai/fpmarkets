import Surface from "@/components/ui/Surface";

export default function Share(){
  const link = typeof window !== "undefined"
    ? window.location.origin + "/invite/ABC123"
    : "https://cardic.world/invite/ABC123";

  return (
    <main className="min-h-screen bg-[#070a11] text-white">
      <section className="mx-auto max-w-lg p-6 space-y-4">
        <h1 className="text-xl font-semibold">Invite & Earn</h1>
        <Surface className="p-5 space-y-3">
          <div className="text-sm opacity-80">
            Share this link with friends to earn commissions.
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm break-all">
            {link}
          </div>
          <button
            onClick={async()=>{try{await navigator.clipboard.writeText(link);}catch{}}}
            className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 text-black font-semibold py-2">
            Copy link
          </button>
        </Surface>
      </section>
    </main>
  );
}
