import Surface from "@/components/ui/Surface"; import TabBar from "@/components/ui/TabBar"; import { naira } from "@/components/ui/NA";
export default function Invest(){
  return (
    <main>
      <h1 style={{fontSize:24,marginBottom:12}}>Invest</h1>
      <Surface>
        <div style={{display:"flex",gap:16,alignItems:"center"}}>
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800" alt="Netherlands" style={{width:96,height:80,objectFit:"cover",borderRadius:12}}/>
          <div style={{flex:1}}>
            <div style={{fontWeight:600}}>Netherlands: PG398165</div>
            <div style={{opacity:.8,fontSize:14,marginTop:4,display:"flex",gap:16,flexWrap:"wrap"}}>
              <span>Minimum <b>{naira(6800)}</b></span>
              <span>Cycle <b>25 Day</b></span>
              <span>Earnings <b>{naira(4760)}</b></span>
            </div>
            <div style={{marginTop:12,height:8,background:"rgba(255,255,255,.12)",borderRadius:999}}>
              <div style={{width:"62%",height:8,background:"linear-gradient(90deg,#38bdf8,#3b82f6)",borderRadius:999}}/>
            </div>
          </div>
        </div>
      </Surface>
      <div style={{height:56}}/>
      <TabBar/>
    </main>
  );
}
