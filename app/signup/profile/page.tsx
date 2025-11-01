import Link from "next/link";

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
          <Link href="/" className="onboarding__brand" aria-label="FP Markets home">
            CARDIC
          </Link>
        </header>

        <section className="onboarding__card" aria-label="Profile details">
          <form className="onboarding__form">
            <label className="onboarding__field" htmlFor="profile-name">
              <span className="onboarding__label">Full name</span>
              <input
                id="profile-name"
                name="name"
                type="text"
                placeholder="Alex Cardic"
                autoComplete="name"
                required
              />
            </label>

            <div className="onboarding__field-group">
              <label className="onboarding__field" htmlFor="profile-country">
                <span className="onboarding__label">Country</span>
                <div className="onboarding__select">
                  <span className="onboarding__flag" aria-hidden>
                    🇳🇬
                  </span>
                  <select id="profile-country" name="country" defaultValue="nigeria">
                    <option value="nigeria">Nigeria</option>
                    <option value="ghana">Ghana</option>
                    <option value="south-africa">South Africa</option>
                    <option value="kenya">Kenya</option>
                    <option value="united-kingdom">United Kingdom</option>
                  </select>
                </div>
              </label>

              <label className="onboarding__field" htmlFor="profile-region">
                <span className="onboarding__label">State/Region</span>
                <input
                  id="profile-region"
                  name="region"
                  type="text"
                  placeholder="Lagos"
                  autoComplete="address-level1"
                  required
                />
              </label>
            </div>

            <label className="onboarding__field" htmlFor="profile-city">
              <span className="onboarding__label">City</span>
              <input
                id="profile-city"
                name="city"
                type="text"
                placeholder="Ikeja"
                autoComplete="address-level2"
                required
              />
            </label>

            <div className="onboarding__field-group">
              <label className="onboarding__field" htmlFor="profile-phone-code">
                <span className="onboarding__label">Phone</span>
                <div className="onboarding__split">
                  <input
                    id="profile-phone-code"
                    name="phone-code"
                    type="text"
                    inputMode="tel"
                    placeholder="+234"
                    defaultValue="+234"
                    aria-label="Country dial code"
                    autoComplete="tel-country-code"
                    required
                  />
                  <input
                    id="profile-phone-number"
                    name="phone"
                    type="text"
                    inputMode="tel"
                    placeholder="1234"
                    aria-label="Phone number"
                    autoComplete="tel-national"
                    required
                  />
                </div>
              </label>
            </div>

            <fieldset className="onboarding__kyc">
              <legend className="onboarding__label">KYC</legend>
              <p className="onboarding__kyc-subtitle">
                Upload ID (passport, national ID, or driver&apos;s license)
              </p>
              <p className="onboarding__kyc-meta">PNG, JPG, or PDF (up to 10MB)</p>
              <label className="onboarding__upload" htmlFor="profile-kyc">
                <input id="profile-kyc" name="kyc" type="file" accept=".png,.jpg,.jpeg,.pdf" />
                <span className="onboarding__upload-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" role="img" aria-hidden>
                    <path d="M12 3a1 1 0 0 1 1 1v9.585l1.293-1.292a1 1 0 1 1 1.414 1.414l-3.004 3.004a1.5 1.5 0 0 1-2.121 0l-3.004-3.004a1 1 0 0 1 1.414-1.414L11 13.585V4a1 1 0 0 1 1-1Z" />
                    <path d="M5 15a1 1 0 0 1 2 0v3h10v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-3Z" />
                  </svg>
                </span>
                <span className="onboarding__upload-text">Drag & drop or click to upload</span>
              </label>
              <button type="button" className="onboarding__skip">
                Skip KYC for now
              </button>
            </fieldset>

            <div className="onboarding__actions">
              <button type="submit" className="onboarding__continue">
                Continue
              </button>
              <button type="button" className="onboarding__save">
                Save &amp; continue later
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
