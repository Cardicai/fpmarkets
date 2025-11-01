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
            className="rounded-md border border-amber-400/40 px-3 py-1 text-amber-200 transition hover:border-amber-300/60"
          >
            Complete profile
          </Link>
        ) : null}
        <Link href="/dashboard" className="rounded-md border px-3 py-1 transition hover:border-white/60">
          Dashboard
        </Link>
        <button
          className="rounded-md border px-3 py-1 transition hover:border-white/60"
          onClick={() => supabase.auth.signOut()}
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <Link href="/auth" className="rounded-md border px-3 py-1 transition hover:border-white/60">
      Sign in
    </Link>
  )
}
