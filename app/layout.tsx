import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "FPMarkets • Neo-Investment Dashboard",
  description:
    "FPMarkets is a modern investment dashboard for monitoring cycles, teams, mining rewards, and withdrawals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="gradient-overlay min-h-screen">
        <Providers>
          <div className="relative min-h-screen">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
            <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-0 pb-24 pt-10 lg:pb-16">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
