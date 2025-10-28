import Surface from "@/components/ui/Surface";

export const metadata = { title: "Withdraw" };

export default function WithdrawPage() {
  return (
    <main>
      <section style={{maxWidth: 640, margin: "0 auto", padding: 24}}>
        <h1 style={{fontSize: 20, fontWeight: 600, marginBottom: 12}}>Withdrawal</h1>
        <Surface>
          <div style={{display:"grid", gap: 10}}>
            <div style={{display:"grid", gap:6}}>
              <label style={{fontSize: 12, opacity: .7}}>Amount (NGN)</label>
              <input
                readOnly
                placeholder="Enter amount"
                value="0.00"
                style={{
                  width:"100%", padding:"10px 12px", borderRadius:12,
                  border:"1px solid rgba(255,255,255,.18)", background:"rgba(255,255,255,.06)",
                  color:"inherit"
                }}
              />
              <div style={{fontSize:12,opacity:.7}}>
                Note: Buttons disabled in static build. We’ll re-enable after deploy.
              </div>
            </div>
          </div>
        </Surface>
      </section>
    </main>
  );
}
