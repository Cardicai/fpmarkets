import Link from "next/link"; import Surface from "@/components/ui/Surface"; import TabBar from "@/components/ui/TabBar"; import { naira } from "@/components/ui/NA";
export default function Mine(){
  const Menu = ({label,href}:{label:string;href:string}) => (
    <Link href={href} style={{display:"block",padding:"14px 16px",background:"rgba(255,255,255,.06)",borderTop:"1px solid rgba(255,255,255,.12)",textDecoration:"none",color:"inherit"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span>{label}</span><span style={{opacity:.6}}>›</span></div>
    </Link>
  );
  return (
    <main>
      <Surface>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div>
            <div style={{color:"#facc15",fontWeight:600}}>VIP 1</div>
            <div style={{opacity:.7,fontSize:12}}>Cooperation number</div>
            <div style={{fontSize:18,fontWeight:800,letterSpacing:.5}}>303659</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{opacity:.7,fontSize:12}}>Balance</div>
            <div style={{fontSize:22,fontWeight:800,color:"#7cd1ff"}}>{naira(280.27)}</div>
          </div>
        </div>
      </Surface>

      <div style={{border:"1px solid rgba(255,255,255,.12)",borderRadius:16,overflow:"hidden",marginTop:16}}>
        <Menu label="Invite friend to earn income" href="/share" />
        <Menu label="Sign in" href="/login" />
        <Menu label="VIP" href="/vip" />
        <Menu label="Private message" href="/messages" />
        <Menu label="Points Mall" href="/points" />
        <Menu label="Change password" href="/account/security" />
        <Menu label="Bind a bank card" href="/bank" />
      </div>

      <div style={{height:56}}/>
      <TabBar/>
    </main>
  );
}
