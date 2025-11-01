import Link from "next/link";
import OnboardingForm from "./OnboardingForm";

export const metadata = {
  title: "Complete your profile • FP Markets",
  description: "Provide identity details to continue onboarding.",
};

export default function CompleteProfilePage() {
  return (
    <main className="onboarding" aria-labelledby="onboarding-title">
      <div className="onboarding__halo onboarding__halo--left" aria-hidden />
      <div className="onboarding__halo onboarding__halo--right" aria-hidden />

      <div className="onboarding__shell">
        <header className="onboarding__top" aria-label="Onboarding navigation">
          <div className="onboarding__stepper">
            <span className="onboarding__step-count">Step 2 of 3</span>
            <h1 id="onboarding-title" className="onboarding__title">
              Complete your profile
            </h1>
          </div>
          <Link
            href="/"
            className="onboarding__brand"
            aria-label="Return to the FP Markets landing page"
          >
            <span className="sr-only">Return to the FP Markets landing page</span>
            <svg
              className="onboarding__brand-icon"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden
            >
              <path
                d="M12.53 5.47a.75.75 0 0 1 1.06 1.06L9.56 10.56H19a.75.75 0 0 1 0 1.5H9.56l4.03 4.03a.75.75 0 0 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06Z"
              />
            </svg>
          </Link>
        </header>

        <section className="onboarding__card" aria-label="Profile details">
          <OnboardingForm />
        </section>
      </div>
    </main>
  );
}
