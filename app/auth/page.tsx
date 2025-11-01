'use client'

import { supabase } from '@/lib/supabase/client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function AuthPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        <div className="mb-6 space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Account access</p>
          <h1 className="text-3xl font-semibold">Sign in or create your account</h1>
          <p className="text-sm text-white/60">
            Use your email address or Google account to continue. We&apos;ll guide you through setting up your
            investor profile in the next step.
          </p>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            style: {
              button: { borderRadius: '0.75rem', fontWeight: 600 },
              input: { borderRadius: '0.75rem' },
              anchor: { color: 'rgb(129 140 248)' },
            },
            variables: {
              default: {
                colors: {
                  brand: 'rgb(129 140 248)',
                  brandAccent: 'rgb(79 70 229)',
                  inputBackground: 'rgba(15, 23, 42, 0.6)',
                  inputText: '#fff',
                },
              },
            },
          }}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Work email',
                password_label: 'Password',
              },
            },
          }}
          providers={['google']}
          onlyThirdPartyProviders={false}
          redirectTo={`${process.env.NEXT_PUBLIC_SITE_URL || ''}/onboarding`}
        />
      </div>
    </div>
  )
}
