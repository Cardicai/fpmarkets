import Surface from "@/components/ui/Surface";

export const metadata = { title: "Invite & Earn" };

export default function SharePage() {
  const referral = "https://cardicworld.vercel.app/?ref=REAL-CARDIC-WCH8TC";
  return (
    <main>
      <section style={{maxWidth: 640, margin: "0 auto", padding: 24}}>
        <h1 style={{fontSize: 20, fontWeight: 600, marginBottom: 12}}>Invite & Earn</h1>
        <Surface>
          <div style={{opacity: 0.85, fontSize: 14, marginBottom: 12}}>
            Share this link with friends to earn commissions. (JS disabled here to keep build stable.)
          </div>
          <div style={{display:"grid", gap: 8}}>
            <label style={{fontSize: 12, opacity: 0.7}}>Referral link</label>
            <input
              readOnly
              value={referral}
              style={{
                width: "100%", padding: "10px 12px", borderRadius: 12,
                border: "1px solid rgba(255,255,255,.18)", background: "rgba(255,255,255,.06)",
                color: "inherit"
              }}
            />
            <div style={{fontSize:12,opacity:.7}}>
              Tip: Select and copy the link manually (Ctrl/Cmd + C).
            </div>
          </div>
        </Surface>
      </section>
    </main>
  );
}
