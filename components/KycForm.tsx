'use client'

import { useCallback, useState } from 'react'
import type { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

import { supabase } from '@/lib/supabase/client'

const COUNTRIES = ['Australia', 'United States', 'United Kingdom', 'Singapore', 'United Arab Emirates']

type Profile = {
  full_name: string | null
  country: string | null
  state: string | null
  kyc_status: 'completed' | 'skipped' | null
}

type Props = {
  profile?: Profile
  userId: string
}

export default function KycForm({ profile, userId }: Props) {
  const router = useRouter()
  const [fullName, setFullName] = useState(profile?.full_name ?? '')
  const [country, setCountry] = useState(profile?.country ?? '')
  const [state, setState] = useState(profile?.state ?? '')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCompleted = useCallback(
    async (payload: { fullName?: string; country?: string; state?: string; status: 'completed' | 'skipped' }) => {
      setSubmitting(true)
      setError(null)

      const updates = {
        id: userId,
        full_name: payload.fullName ?? null,
        country: payload.country ?? null,
        state: payload.state ?? null,
        kyc_status: payload.status,
      }

      const { error: updateError } = await supabase.from('profiles').upsert(updates, { onConflict: 'id' })

      if (updateError) {
        setError(updateError.message)
        setSubmitting(false)
        return
      }

      setSubmitting(false)
      router.push('/dashboard')
      router.refresh()
    },
    [router, userId]
  )

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (!fullName || !country || !state) {
        setError('Please complete all required fields before continuing.')
        return
      }

      await handleCompleted({ fullName, country, state, status: 'completed' })
    },
    [country, fullName, handleCompleted, state]
  )

  const onSkip = useCallback(async () => {
    await handleCompleted({ status: 'skipped' })
  }, [handleCompleted])

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur"
    >
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-white/80" htmlFor="full-name">
            Legal name
          </label>
          <input
            id="full-name"
            name="full-name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Jane Smith"
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-white/80" htmlFor="country">
            Country of residence
          </label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          >
            <option value="" disabled>
              Select your country
            </option>
            {COUNTRIES.map((option) => (
              <option key={option} value={option} className="bg-slate-900">
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-white/80" htmlFor="state">
            State / Province
          </label>
          <input
            id="state"
            name="state"
            value={state}
            onChange={(event) => setState(event.target.value)}
            placeholder="New South Wales"
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          />
        </div>
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-500 px-4 py-3 font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? 'Saving...' : 'Submit and continue'}
        </button>
        <button
          type="button"
          onClick={onSkip}
          disabled={submitting}
          className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-4 py-3 font-semibold text-white transition hover:border-white/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Skip for now
        </button>
      </div>
      <p className="mt-4 text-xs text-white/50">
        You can update these details at any time from your dashboard. We&apos;ll remind you until your profile is fully
        verified.
      </p>
    </form>
  )
}
