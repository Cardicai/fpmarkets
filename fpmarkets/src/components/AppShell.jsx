import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Tab({ to, label, emoji }) {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        `flex flex-col items-center justify-center gap-1 flex-1 py-2 ${isActive ? "text-sky-400" : "text-white/60"}`
      }
    >
      <div className="tab-icon">{emoji}</div>
      <div className="text-xs">{label}</div>
    </NavLink>
  );
}

export default function AppShell(){
  return (
    <div className="min-h-screen bg-[#0a0d13] text-white pb-16">
      <Outlet />
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0b1220]/90 backdrop-blur border-t border-white/10 flex">
        <Tab to="/app" label="Home" emoji="🏠"/>
        <Tab to="/app/invest" label="Invest" emoji="💹"/>
        <Tab to="/app/team" label="Team" emoji="👥"/>
        <Tab to="/app/mine" label="Mine" emoji="👤"/>
      </nav>
    </div>
  );
}
