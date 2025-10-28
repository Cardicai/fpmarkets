"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/auth-context";

export default function LoginPage() {
  const router = useRouter();
  const { login, loading } = useAuth();
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      if (!formState.email || !formState.password) {
        throw new Error("Enter both email and password");
      }
      await login(formState);
      router.push("/invest");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-slate-100">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(56,189,248,0.25)] backdrop-blur-xl">
        <div className="text-xs uppercase tracking-[0.4em] text-sky-300/80">FPMarkets</div>
        <h1 className="mt-3 text-3xl font-semibold text-white">Welcome back</h1>
        <p className="mt-1 text-sm text-slate-300/80">
          Sign in to access your investment cockpit.
        </p>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 text-sm text-slate-200">
          <label className="grid gap-2">
            <span className="text-xs uppercase tracking-wide text-slate-400">Email</span>
            <input
              type="email"
              value={formState.email}
              onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400/60 focus:bg-white/10"
              placeholder="you@fpmarkets.com"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-xs uppercase tracking-wide text-slate-400">Password</span>
            <input
              type="password"
              value={formState.password}
              onChange={(event) => setFormState((prev) => ({ ...prev, password: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400/60 focus:bg-white/10"
              placeholder="••••••••"
            />
          </label>
          {error ? <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 px-4 py-2 text-xs text-rose-200">{error}</div> : null}
          <button
            type="submit"
            disabled={submitting || loading}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(59,130,246,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-slate-400">
          Don’t have an account? <Link href="/signup" className="text-sky-300">Create one</Link>
        </p>
      </div>
    </div>
  );
}
