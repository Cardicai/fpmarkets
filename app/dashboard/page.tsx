import { redirect } from 'next/navigation'
import { createServerClient } from '@/lib/supabase/server'

export default async function Dashboard() {
  const supabase = createServerClient()
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) redirect('/auth')

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, avatar_url')
    .eq('id', session.user.id)
    .maybeSingle()

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Welcome, {profile?.full_name || session.user.email}</h1>
      <pre className="p-4 rounded-lg bg-white/5 overflow-x-auto">
        {JSON.stringify({ user: session.user, profile }, null, 2)}
      </pre>
    </div>
  )
}
