'use client'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase/client'

type Props = { open: boolean; onClose: () => void }

export default function AuthModal({ open, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) {
      const el = document.createElement('div')
      el.id = 'auth-portal'
      document.body.appendChild(el)
      containerRef.current = el
    }
    return () => {
      if (containerRef.current) document.body.removeChild(containerRef.current)
      containerRef.current = null
    }
  }, [])

  if (!open || !containerRef.current) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-[92%] max-w-md rounded-2xl border border-white/10 bg-[#0c111a]/95 p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full border border-white/10 px-2 py-0.5 text-xs opacity-70 hover:opacity-100"
        >✕</button>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Welcome back</h2>
          <p className="text-sm opacity-70">Sign in to continue</p>
        </div>

        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#22d3ee',
                  brandAccent: '#0ea5e9',
                  inputBackground: '#0b1220',
                  inputText: 'white',
                },
                radii: { borderRadiusButton: '12px', inputBorderRadius: '12px' },
              },
            },
          }}
          providers={['google']}
          onlyThirdPartyProviders={false}
          redirectTo={`${process.env.NEXT_PUBLIC_SITE_URL || ''}/dashboard`}
        />
        <p className="mt-3 text-center text-xs opacity-60">By continuing you agree to our Terms & Privacy.</p>
      </div>
    </div>,
    containerRef.current
  )
}
