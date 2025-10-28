import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [email,setEmail]=useState("");
  const [code,setCode]=useState("");
  const nav=useNavigate();

  useEffect(()=>{
    const c = Math.floor(100000 + Math.random()*900000).toString();
    localStorage.setItem("demo_code", c);
    navigator.clipboard.writeText(c).catch(()=>{});
  },[]);

  function submit(e){
    e.preventDefault();
    const s = localStorage.getItem("demo_code");
    if(code.trim()===s) nav("/app",{replace:true});
    else alert("Invalid code");
  }

  function resend(){
    const c = Math.floor(100000 + Math.random()*900000).toString();
    localStorage.setItem("demo_code", c);
    navigator.clipboard.writeText(c).catch(()=>{});
    alert("New code copied.");
  }

  return (
    <div className="center">
      <div className="glowA"></div><div className="glowB"></div>
      <form onSubmit={submit} className="card neon" style={{width:380,padding:20,position:"relative",zIndex:1}}>
        <h2 className="h1grad">FPMarkets</h2>
        <div className="small" style={{marginTop:6,marginBottom:16}}>Sign in to continue</div>

        <div className="xsmall">Phone or Email</div>
        <input className="input" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} style={{marginTop:6,marginBottom:12}}/>

        <div className="xsmall">6-digit code</div>
        <div className="row" style={{marginTop:6,marginBottom:12}}>
          <input className="input" placeholder="••••••" value={code} onChange={e=>setCode(e.target.value)} />
          <button type="button" className="btn" onClick={resend}>Resend</button>
        </div>

        <button className="btn grad" style={{width:"100%"}}>Sign in</button>
        <div className="xsmall" style={{marginTop:10}}>Demo only — code is generated locally and copied to your clipboard.</div>
      </form>
    </div>
  );
}
