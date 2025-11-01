'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AuthModal from '@/components/AuthModal'
import { supabase } from '@/lib/supabase/client'
import type { Session } from '@supabase/supabase-js'

export default function NavBar() {
  const [session, setSession] = useState<Session | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => sub.subscription.unsubscribe()
  }, [])

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b12]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Image src="/brand/fp-logo.svg" alt="FP" width={28} height={28} priority />
            <Link href="/" className="font-semibold tracking-wide">FP Markets</Link>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/#products" className="hidden sm:block rounded-xl px-3 py-1 text-sm opacity-80 hover:opacity-100">Products</Link>
            <Link href="/#partners" className="hidden sm:block rounded-xl px-3 py-1 text-sm opacity-80 hover:opacity-100">Partners</Link>

            {session ? (
              <>
                <span className="hidden text-sm opacity-70 sm:block">{session.user.email}</span>
                <Link href="/dashboard" className="rounded-xl border border-white/10 px-3 py-1 text-sm hover:bg-white/5">Dashboard</Link>
                <button onClick={() => supabase.auth.signOut()} className="rounded-xl bg-cyan-400/15 px-3 py-1 text-sm hover:bg-cyan-400/25">Sign out</button>
              </>
            ) : (
              <button onClick={() => setOpen(true)} className="rounded-xl bg-cyan-400/20 px-3 py-1 text-sm hover:bg-cyan-400/30">Sign in</button>
            )}
          </div>
        </div>
      </nav>
      <AuthModal open={open && !session} onClose={() => setOpen(false)} />
    </>
  )
}
