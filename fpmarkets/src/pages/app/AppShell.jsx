import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AppShell(){
  return (
    <div style={{paddingBottom:64}}>
      <Outlet/>
      <div className="tabs">
        <NavLink end to="/app" className={({isActive})=>`tab ${isActive?"active":""}`}>🏠 Home</NavLink>
        <NavLink to="/app/invest" className={({isActive})=>`tab ${isActive?"active":""}`}>💹 Invest</NavLink>
        <NavLink to="/app/team" className={({isActive})=>`tab ${isActive?"active":""}`}>👥 Team</NavLink>
        <NavLink to="/app/mine" className={({isActive})=>`tab ${isActive?"active":""}`}>👤 Mine</NavLink>
      </div>
    </div>
  );
}
