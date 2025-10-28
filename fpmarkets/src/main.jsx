import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AppShell from "./pages/app/AppShell.jsx";
import AppHome from "./pages/app/Home.jsx";
import AppTeam from "./pages/app/Team.jsx";
import AppMine from "./pages/app/Mine.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/app" element={<AppShell />}>
          <Route index element={<AppHome />} />
          <Route path="invest" element={<AppHome />} />
          <Route path="team" element={<AppTeam />} />
          <Route path="mine" element={<AppMine />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
