import React from "react";
export default function Mine(){
  const items=[
    "Invite friend to earn income","Sign in","VIP","Private message","Points Mall",
    "Change password","Bind a bank card","Change the withdrawal password","My income","Account details"
  ];
  return (
    <div className="container">
      <div className="card neon" style={{padding:14,marginBottom:12,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <div style={{color:"#fbbf24",fontWeight:700,fontSize:12}}>VIP 1</div>
          <div className="xsmall">Cooperation number</div>
          <div style={{fontWeight:800,letterSpacing:.5}}>303659</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div className="small">Balance</div>
          <div style={{fontSize:24,fontWeight:900,color:"#7dd3fc"}}>₦280.27</div>
        </div>
      </div>

      <div className="row" style={{marginBottom:12}}>
        <button className="card neon btn" style={{flex:1,justifyContent:"center"}}>💳 Top up</button>
        <button className="card neon btn" style={{flex:1,justifyContent:"center"}}>🏧 Withdrawal</button>
      </div>

      {items.map(txt=>(
        <div key={txt} className="card neon" style={{padding:12,marginBottom:8,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>{txt}</div><div style={{opacity:.5}}>›</div>
        </div>
      ))}

      <div style={{height:60}}/>
    </div>
  );
}
