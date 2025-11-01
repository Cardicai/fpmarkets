import { NextResponse } from 'next/server'
import { getDemoSession } from '@/lib/demoSession'
export async function GET() {
  const s = getDemoSession()
  return NextResponse.json({ email: s?.email ?? null })
}
