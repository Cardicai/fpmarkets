import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) redirect('/')

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-6 py-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-sm opacity-70">Signed in as</h3>
          <p className="text-lg font-semibold">{session.user.email}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-sm opacity-70">Next step</h3>
          <p className="text-lg font-semibold">Connect FP Markets account</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-sm opacity-70">Status</h3>
          <p className="text-lg font-semibold text-emerald-400">Active</p>
        </div>
      </div>
    </div>
  )
}
