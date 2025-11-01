'use client'
import { useState } from 'react'

export default function DemoAuthModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('demo@fpmarkets.app')
  const [password, setPassword] = useState('fp-demo-123')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!open) return null

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError(null)
    try {
      const r = await fetch('/api/demo-auth/login', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      if (!r.ok) throw new Error((await r.json()).error || 'Login failed')
      onClose()
      window.location.assign('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Login failed')
    } finally { setLoading(false) }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-[92%] max-w-md rounded-2xl border border-white/10 bg-[#0c111a]/95 p-6 shadow-2xl">
        <button onClick={onClose} className="absolute right-3 top-3 rounded-full border border-white/10 px-2 py-0.5 text-xs opacity-70 hover:opacity-100">✕</button>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Sign in</h2>
          <p className="text-sm opacity-70">Demo mode — no real accounts created.</p>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="mb-1 block text-xs opacity-70">Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0b1220] px-3 py-2 text-sm outline-none" />
          </div>
          <div>
            <label className="mb-1 block text-xs opacity-70">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0b1220] px-3 py-2 text-sm outline-none" />
          </div>
          {error && <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-3 py-2 text-xs text-red-200">{error}</p>}
          <button disabled={loading} className="w-full rounded-xl bg-cyan-400/20 px-3 py-2 text-sm hover:bg-cyan-400/30">
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
