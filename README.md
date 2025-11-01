# FP Markets

## Supabase setup

Ensure the `public.profiles` table includes the onboarding fields consumed by the app:

```sql
alter table public.profiles
  add column if not exists country text,
  add column if not exists state text,
  add column if not exists kyc_status text check (kyc_status in ('completed', 'skipped')); 
```

Retain the existing trigger that inserts a profile for every new auth user. Users who complete the onboarding form will
have `kyc_status = 'completed'`. Selecting “Skip for now” stores `kyc_status = 'skipped'` so they can access the
Dashboard while still being reminded to finish KYC.
