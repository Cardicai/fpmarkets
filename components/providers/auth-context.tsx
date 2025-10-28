"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  login: (payload: { email: string; password: string }) => Promise<void>;
  signup: (payload: { name: string; email: string; password: string }) => Promise<void>;
  logout: () => void;
};

const STORAGE_KEY = "fpmarkets-auth";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as AuthUser;
        setUser(parsed);
      } catch (error) {
        console.warn("Failed to parse stored session", error);
      }
    }
    setLoading(false);
  }, []);

  const persist = (next: AuthUser | null) => {
    if (typeof window === "undefined") return;
    if (next) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } else {
      window.sessionStorage.removeItem(STORAGE_KEY);
    }
  };

  const login: AuthContextValue["login"] = async ({ email }) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    const nextUser: AuthUser = { email, name: email.split("@")[0] || "Investor" };
    setUser(nextUser);
    persist(nextUser);
  };

  const signup: AuthContextValue["signup"] = async ({ name, email }) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const nextUser: AuthUser = { email, name: name.trim() || "Investor" };
    setUser(nextUser);
    persist(nextUser);
  };

  const logout = () => {
    setUser(null);
    persist(null);
  };

  const value = useMemo<AuthContextValue>(
    () => ({ user, loading, login, signup, logout }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
