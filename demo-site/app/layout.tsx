import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fluxie - Blog & Lesewelt',
  description: 'Geschichten und Tipps zur Leseförderung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <nav className="bg-gradient-to-r from-fluxie-orange to-amber-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold hover:text-orange-100 transition">
                🏠 Fluxie
              </a>
              <div className="flex gap-6">
                <a href="/lesewelt" className="hover:text-orange-100 transition font-medium">
                  📚 Lesewelt
                </a>
                <a href="/blog" className="hover:text-orange-100 transition font-medium">
                  ✍️ Blog
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>© 2025 Fluxie - Interaktive Lesekarten für Kinder</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
