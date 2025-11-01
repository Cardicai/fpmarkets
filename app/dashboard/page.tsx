import { redirect } from 'next/navigation'

import { createServerClient } from '@/lib/supabase/server'

type Profile = {
  full_name: string | null
  avatar_url: string | null
  country: string | null
  state: string | null
  kyc_status: 'completed' | 'skipped' | null
}

export default async function Dashboard() {
  const supabase = createServerClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) redirect('/auth')

  const { data } = await supabase
    .from('profiles')
    .select('full_name, avatar_url, country, state, kyc_status')
    .eq('id', session.user.id)
    .maybeSingle()

  const profile = (data as Profile | null) ?? null
  const onboardingIncomplete = !profile || profile.kyc_status !== 'completed'

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
        <h1 className="text-3xl font-semibold">Welcome back, {profile?.full_name || session.user.email}</h1>
        <p className="mt-2 text-white/60">
          This is your secure FP Markets dashboard. From here you can manage your trading accounts and profile.
        </p>
      </div>

      {onboardingIncomplete ? (
        <div className="rounded-2xl border border-amber-400/30 bg-amber-500/10 p-5 text-amber-100">
          <h2 className="text-lg font-semibold">Complete your investor profile</h2>
          <p className="mt-1 text-sm text-amber-100/80">
            We noticed your KYC information hasn&apos;t been finalised yet. Please finish the onboarding flow to unlock all
            platform features.
          </p>
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <h2 className="text-lg font-semibold">Profile details</h2>
          <dl className="mt-4 space-y-3 text-sm text-white/80">
            <div className="flex items-start justify-between">
              <dt className="uppercase tracking-wider text-white/50">Email</dt>
              <dd>{session.user.email}</dd>
            </div>
            <div className="flex items-start justify-between">
              <dt className="uppercase tracking-wider text-white/50">Name</dt>
              <dd>{profile?.full_name || 'Pending'}</dd>
            </div>
            <div className="flex items-start justify-between">
              <dt className="uppercase tracking-wider text-white/50">Country</dt>
              <dd>{profile?.country || 'Pending'}</dd>
            </div>
            <div className="flex items-start justify-between">
              <dt className="uppercase tracking-wider text-white/50">State</dt>
              <dd>{profile?.state || 'Pending'}</dd>
            </div>
            <div className="flex items-start justify-between">
              <dt className="uppercase tracking-wider text-white/50">KYC status</dt>
              <dd className="font-medium capitalize">{profile?.kyc_status || 'pending'}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <h2 className="text-lg font-semibold">Debug payload</h2>
          <pre className="mt-4 max-h-80 overflow-y-auto rounded-xl bg-black/50 p-4 text-xs text-white/70">
            {JSON.stringify({ user: session.user, profile }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}
