import { cookies } from 'next/headers'
export function getDemoSession() {
  const ok = cookies().get('fp_demo_session')?.value === 'ok'
  const email = cookies().get('fp_demo_email')?.value || null
  return ok ? { email } : null
}
