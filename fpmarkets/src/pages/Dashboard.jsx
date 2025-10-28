import React from "react";
export default function Dashboard(){
  return (
    <div className="container">
      <div className="header"><h1 className="h1grad">Trader Dashboard</h1><a className="btn" href="/">Logout</a></div>
      <div className="card" style={{padding:16}}>Stats & charts will go here.</div>
    </div>
  );
}
