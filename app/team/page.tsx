import Surface from "@/components/ui/Surface"; import TabBar from "@/components/ui/TabBar";
export default function Team(){
  return (
    <main>
      <h1 style={{fontSize:24,marginBottom:12}}>Team</h1>
      <Surface>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,textAlign:"center"}}>
          <div><div style={{opacity:.8,fontSize:14}}>Team staff</div><div style={{fontSize:28,fontWeight:700}}>0</div></div>
          <div><div style={{opacity:.8,fontSize:14}}>Distribution commission</div><div style={{fontSize:28,fontWeight:700}}>0</div></div>
        </div>
        <div style={{marginTop:12,opacity:.8,fontSize:14,textAlign:"center"}}>Subordinate purchases – commission: L1 17% • L2 7%.</div>
      </Surface>
      <div style={{height:56}}/>
      <TabBar/>
    </main>
  );
}
