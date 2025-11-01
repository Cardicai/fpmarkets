'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { Session } from '@supabase/supabase-js'

export default function NavAuth() {
  const [session, setSession] = useState<Session | null>(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => sub.subscription.unsubscribe()
  }, [])
  if (session) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm opacity-70 hidden sm:block">{session.user.email}</span>
        <Link href="/dashboard" className="px-3 py-1 rounded-md border">Dashboard</Link>
        <button className="px-3 py-1 rounded-md border" onClick={() => supabase.auth.signOut()}>
          Sign out
        </button>
      </div>
    )
  }
  return <Link href="/auth" className="px-3 py-1 rounded-md border">Sign in</Link>
}
