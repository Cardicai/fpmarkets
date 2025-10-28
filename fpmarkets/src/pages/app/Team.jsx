import React from "react";
export default function Team(){
  return (
    <div className="container">
      <div className="card neon" style={{padding:14,marginBottom:12}}>
        <div style={{fontWeight:600,marginBottom:10}}>Team</div>
        <div className="row" style={{marginBottom:10}}>
          <div className="card" style={{padding:14,flex:1,textAlign:"center"}}>
            <div className="xsmall">Team staff</div>
            <div style={{fontSize:22,fontWeight:800}}>0</div>
          </div>
          <div className="card" style={{padding:14,flex:1,textAlign:"center"}}>
            <div className="xsmall">Distribution commission</div>
            <div style={{fontSize:22,fontWeight:800}}>0</div>
          </div>
        </div>
        <div className="xsmall">Subordinate purchases: get commission on project income. L1: 17% • L2: 7%.</div>
      </div>

      <div className="row small" style={{marginBottom:10}}>
        <div className="card" style={{padding:"6px 12px",background:"#ffffff12",border:"none"}}>Level 1</div>
        <div className="card" style={{padding:"6px 12px",background:"#ffffff08",border:"none",color:"#cfe1ffb3"}}>Level 2</div>
      </div>

      <div className="card neon" style={{padding:24,textAlign:"center",color:"#cfe1ffb3"}}>No membership</div>

      <button className="btn grad" style={{position:"fixed",right:16,bottom:84}}>Share now</button>
    </div>
  );
}
