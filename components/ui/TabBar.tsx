import Link from "next/link";
export default function TabBar(){
  return (
    <nav style={{position:"fixed",left:0,right:0,bottom:0,background:"rgba(0,0,0,.6)",backdropFilter:"blur(6px)",borderTop:"1px solid rgba(255,255,255,.12)",display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
      <Link href="/invest" style={{padding:12,textAlign:"center",color:"#cfe9ff"}}>Invest</Link>
      <Link href="/team"   style={{padding:12,textAlign:"center",color:"#cfe9ff"}}>Team</Link>
      <Link href="/mine"   style={{padding:12,textAlign:"center",color:"#cfe9ff"}}>Mine</Link>
    </nav>
  );
}
