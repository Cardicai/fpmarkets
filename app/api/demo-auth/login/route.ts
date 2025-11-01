import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const DEMO_EMAIL = 'demo@fpmarkets.app'
const DEMO_PASS  = 'fp-demo-123'

export async function POST(req: Request) {
  const { email, password } = await req.json().catch(() => ({}))
  if (email === DEMO_EMAIL && password === DEMO_PASS) {
    cookies().set('fp_demo_session', 'ok', { httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 60*60*24*3 })
    cookies().set('fp_demo_email', email, { httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 60*60*24*3 })
    return NextResponse.json({ ok: true })
  }
  return NextResponse.json({ ok: false, error: 'Invalid credentials' }, { status: 401 })
}
