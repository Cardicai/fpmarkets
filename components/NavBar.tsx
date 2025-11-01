'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import DemoAuthModal from './DemoAuthModal'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/whoami').then(r => r.ok ? r.json() : null).then(j => setEmail(j?.email ?? null)).catch(()=>{})
  }, [])

  const signOut = async () => {
    await fetch('/api/demo-auth/logout', { method: 'POST' })
    window.location.assign('/')
  }

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b12]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="font-semibold tracking-wide">FP Markets</Link>
          <div className="flex items-center gap-2">
            <Link href="/#products" className="hidden sm:block rounded-xl px-3 py-1 text-sm opacity-80 hover:opacity-100">Products</Link>
            <Link href="/#partners" className="hidden sm:block rounded-xl px-3 py-1 text-sm opacity-80 hover:opacity-100">Partners</Link>
            {email ? (
              <>
                <span className="hidden text-sm opacity-70 sm:block">{email}</span>
                <Link href="/dashboard" className="rounded-xl border border-white/10 px-3 py-1 text-sm hover:bg-white/5">Dashboard</Link>
                <button onClick={signOut} className="rounded-xl bg-cyan-400/15 px-3 py-1 text-sm hover:bg-cyan-400/25">Sign out</button>
              </>
            ) : (
              <button onClick={() => setOpen(true)} className="rounded-xl bg-cyan-400/20 px-3 py-1 text-sm hover:bg-cyan-400/30">Sign in</button>
            )}
          </div>
        </div>
      </nav>
      <DemoAuthModal open={open && !email} onClose={() => setOpen(false)} />
    </>
  )
}
