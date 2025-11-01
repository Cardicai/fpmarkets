'use client'

import Image from 'next/image'

import { supabase } from '@/lib/supabase/client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function AuthPage() {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl sm:p-12">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.2),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(52,211,153,0.16),_transparent_60%)]" />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="relative hidden overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 lg:block">
          <Image
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
            alt="FP Markets partners discussing strategy"
            width={900}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 space-y-3 p-6 text-white/80">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Partner promise</p>
            <p className="text-2xl font-semibold text-white">Where global investors meet FP Markets expertise</p>
            <p className="text-sm">
              Sign in to access tailored onboarding, multi-asset research, and the partner hub with live performance insights.
            </p>
          </div>
        </div>
        <div className="w-full max-w-lg justify-self-center rounded-2xl border border-white/10 bg-slate-900/80 p-8 shadow-lg backdrop-blur">
          <div className="mb-8 space-y-3 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Secure access</p>
            <h1 className="text-3xl font-semibold text-white">Sign in to the FP Markets Partner Hub</h1>
            <p className="text-sm text-white/60">
              Continue with email or Google. After you sign in we&apos;ll guide you through a streamlined KYC flow so you can start
              earning faster.
            </p>
          </div>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              style: {
                button: { borderRadius: '9999px', fontWeight: 600 },
                input: { borderRadius: '0.75rem', backgroundColor: 'rgba(15, 23, 42, 0.7)', color: '#fff' },
                anchor: { color: 'rgb(56 189 248)' },
              },
              variables: {
                default: {
                  colors: {
                    brand: 'rgb(56 189 248)',
                    brandAccent: 'rgb(16 185 129)',
                    inputBackground: 'rgba(15, 23, 42, 0.7)',
                    inputText: '#ffffff',
                    messageText: '#cbd5f5',
                  },
                  fonts: {
                    bodyFontFamily: 'inherit',
                    buttonFontFamily: 'inherit',
                  },
                },
              },
            }}
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Work email',
                  password_label: 'Password',
                  button_label: 'Sign in',
                },
                sign_up: {
                  email_label: 'Work email',
                  password_label: 'Password',
                  button_label: 'Create account',
                },
              },
            }}
            providers={['google']}
            onlyThirdPartyProviders={false}
            redirectTo={`${process.env.NEXT_PUBLIC_SITE_URL || ''}/onboarding`}
          />
          <p className="mt-6 text-xs text-white/50">
            By continuing you agree to the FP Markets Partner Agreement and confirm you&apos;ve reviewed the product disclosure
            statements relevant to your jurisdiction.
          </p>
        </div>
      </div>
    </div>
  )
}
