import './globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'FP Markets',
  description: 'Partner-grade trading dashboard (demo auth)',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0f18] text-white antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
