import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
export async function POST() {
  cookies().delete('fp_demo_session')
  cookies().delete('fp_demo_email')
  return NextResponse.json({ ok: true })
}
