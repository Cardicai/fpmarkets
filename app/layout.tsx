import './globals.css'
import NavAuth from '@/components/NavAuth'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0d13] text-white">
        <header className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="font-bold">FP Markets</div>
          <NavAuth />
        </header>
        <main className="p-4 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  )
}
