import { redirect } from 'next/navigation'

import KycForm from '@/components/KycForm'
import { createServerClient } from '@/lib/supabase/server'

type Profile = {
  id: string
  full_name: string | null
  country: string | null
  state: string | null
  kyc_status: 'completed' | 'skipped' | null
}

export default async function OnboardingPage() {
  const supabase = createServerClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/auth')
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name, country, state, kyc_status')
    .eq('id', session.user.id)
    .maybeSingle()

  if (error) {
    throw new Error(error.message)
  }

  const profile = (data as Profile | null) ?? null

  if (profile && (profile.kyc_status === 'completed' || (profile.full_name && profile.country && profile.state))) {
    redirect('/dashboard')
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Investor onboarding</p>
        <h1 className="text-3xl font-semibold">Verify your identity</h1>
        <p className="text-sm text-white/60">
          Tell us a bit more about yourself so we can tailor your FP Markets experience. You can provide these
          details now or skip and do it later.
        </p>
      </div>
      <KycForm profile={profile ?? undefined} userId={session.user.id} />
    </div>
  )
}
