'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { supabase } from '@/lib/supabase/client'
import type { Session } from '@supabase/supabase-js'

type KycStatus = 'completed' | 'skipped' | 'pending' | null

export default function NavAuth() {
  const [session, setSession] = useState<Session | null>(null)
  const [kycStatus, setKycStatus] = useState<KycStatus>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: sub } = supabase.auth.onAuthStateChange((_event, nextSession) => setSession(nextSession))
    return () => sub.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    let active = true

    if (!session) {
      setKycStatus(null)
      return
    }

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('kyc_status, full_name, country, state')
        .eq('id', session.user.id)
        .maybeSingle()

      if (!active) return

      if (error) {
        setKycStatus('pending')
        return
      }

      if (!data) {
        setKycStatus('pending')
        return
      }

      const status = (data.kyc_status as KycStatus) ?? null
      if (status === 'completed' || status === 'skipped') {
        setKycStatus(status)
        return
      }

      if (data.full_name && data.country && data.state) {
        setKycStatus('completed')
        return
      }

      setKycStatus('pending')
    }

    fetchProfile().catch(() => {
      if (!active) return
      setKycStatus('pending')
    })

    return () => {
      active = false
    }
  }, [session])

  if (session) {
    const showCompleteProfile = kycStatus !== 'completed'
    return (
      <div className="flex items-center gap-3">
        <span className="hidden text-sm opacity-70 sm:block">{session.user.email}</span>
        {showCompleteProfile ? (
          <Link
            href="/onboarding"
            className="hidden rounded-full border border-amber-400/60 px-4 py-2 text-sm font-semibold text-amber-200 transition hover:border-amber-200 md:inline-flex"
          >
            Complete profile
          </Link>
        ) : null}
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold transition hover:border-cyan-200"
        >
          Dashboard
        </Link>
        <button
          className="inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold transition hover:border-rose-200"
          onClick={() => supabase.auth.signOut()}
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <Link
      href="/auth"
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg transition hover:from-cyan-300 hover:to-emerald-300"
    >
      Sign in
    </Link>
  )
}
