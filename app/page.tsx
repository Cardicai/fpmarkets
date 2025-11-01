export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">FP Markets Auth Demo</h1>
      <p className="text-lg text-white/70">
        Authenticate securely with Supabase Auth, then complete your investor profile to access the FP Markets
        dashboard.
      </p>
      <ul className="space-y-2 text-white/60">
        <li>• Sign in from the header to get started.</li>
        <li>• Provide your name, country, and state during onboarding—or skip and finish later.</li>
        <li>• Review your session details inside the protected dashboard.</li>
      </ul>
    </div>
  )
}
