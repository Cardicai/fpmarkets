import React from "react";
const prods=[
  {id:1,title:"Netherlands: PG398165",tag:"Cumulative projects",min:6800,cycle:"25 Day",earn:4760,progress:0.23,img:"https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop"},
  {id:2,title:"South Korea: PG568135",tag:"Cumulative projects",min:5000,cycle:"20 Day",earn:3200,progress:0.18,img:"https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=800&auto=format&fit=crop"},
];
export default function Home(){
  return (
    <div className="container">
      <div className="card neon" style={{overflow:"hidden"}}>
        <div style={{height:96,background:"linear-gradient(135deg,#60a5fa,#06b6d4,#22c55e)"}}/>
        <div className="small" style={{padding:12}}>🎁 Top-up bonuses active • Invest responsibly</div>
      </div>

      <div className="grid4" style={{margin:"12px 0 16px"}}>
        {["🏢 Company","💳 Top up","🏧 Withdrawal","❓ Help"].map(s=>(
          <div key={s} className="card neon" style={{padding:"10px 6px",textAlign:"center"}}>{s}</div>
        ))}
      </div>

      <div className="row small" style={{marginBottom:10}}>
        <div className="card" style={{padding:"6px 12px",background:"#ffffff12",border:"none"}}>Cumulative</div>
        <div className="card" style={{padding:"6px 12px",background:"#ffffff08",border:"none",color:"#cfe1ffb3"}}>Daily Project</div>
        <div className="card" style={{padding:"6px 12px",background:"#ffffff08",border:"none",color:"#cfe1ffb3"}}>VIP products</div>
      </div>

      {prods.map(p=>(
        <div key={p.id} className="card neon prod" style={{marginBottom:10}}>
          <img src={p.img} alt=""/>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center"}}>
              <div style={{fontWeight:600}}>{p.title}</div>
              <span className="badge">{p.tag}</span>
            </div>
            <div className="row small" style={{marginTop:6}}>
              <div><div className="xsmall">Minimum amount</div><div style={{fontWeight:700}}>₦{p.min.toLocaleString()}</div></div>
              <div><div className="xsmall">Cycle</div><div style={{fontWeight:700}}>{p.cycle}</div></div>
              <div><div className="xsmall">Est. earnings</div><div style={{fontWeight:700}}>₦{p.earn.toLocaleString()}</div></div>
            </div>
            <div className="bar" style={{marginTop:8}}><i style={{width:`${p.progress*100}%`}}/></div>
          </div>
          <button className="btn">Buy</button>
        </div>
      ))}

      <div style={{height:60}}/>
    </div>
  );
}
