import Link from "next/link";

export const metadata = {
  title: "Sign up • FP Markets",
  description: "Create a demo FP Markets partner account.",
};

export default function SignUpPage() {
  return (
    <main className="auth">
      <div className="auth__halo auth__halo--left" aria-hidden />
      <div className="auth__halo auth__halo--right" aria-hidden />

      <div className="auth__shell">
        <header className="auth__top" aria-label="Account navigation">
          <Link href="/" className="auth__logo">
            FP Markets
          </Link>
          <Link href="/mine" className="auth__top-link">
            Sign in
          </Link>
        </header>

        <section className="auth__card" aria-labelledby="auth-title">
          <header className="auth__header">
            <h1 id="auth-title">Sign up</h1>
            <p>Demo mode — no real accounts created</p>
          </header>

          <form className="auth__form">
            <label className="auth__field" htmlFor="auth-email">
              <span>Email</span>
              <input
                id="auth-email"
                type="email"
                name="email"
                placeholder="demo@fpmarkets.app"
                autoComplete="email"
                required
              />
            </label>

            <label className="auth__field" htmlFor="auth-password">
              <span>Password</span>
              <input
                id="auth-password"
                type="password"
                name="password"
                placeholder="••••••••"
                autoComplete="new-password"
                required
              />
            </label>

            <button type="submit" className="auth__submit">
              Sign up
            </button>
          </form>

          <button type="button" className="auth__google">
            <span className="auth__google-icon" aria-hidden>
              G
            </span>
            Continue with Google
          </button>

          <div className="auth__links">
            <a
              href="mailto:support@fpmarkets.app?subject=Password%20reset"
              className="auth__link"
            >
              Forgot password
            </a>
            <a href="mailto:support@fpmarkets.app" className="auth__link">
              Contact support
            </a>
          </div>

          <footer className="auth__footer">
            <span>Already have an account?</span>
            <Link href="/mine">Sign in</Link>
          </footer>
        </section>
      </div>
    </main>
  );
}
