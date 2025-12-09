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
      <body style={{ backgroundColor: '#fff8f0' }}>
        {/* Header mit Fluxie Branding */}
        <nav style={{ backgroundColor: '#003049' }} className="text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Fluxie Logo */}
              <a href="/" className="flex items-center hover:opacity-80 transition">
                <img
                  src="https://fluxie.de/wp-content/uploads/2025/08/fluxietopleft.png"
                  alt="Fluxie Logo"
                  className="h-12"
                  style={{ height: '48px', width: 'auto' }}
                />
              </a>

              {/* Navigation Links */}
              <div className="flex gap-6">
                <a
                  href="/lesewelt"
                  className="hover:opacity-80 transition font-medium text-white flex items-center gap-2"
                >
                  <span>📚</span>
                  <span>Lesewelt</span>
                </a>
                <a
                  href="/blog"
                  className="hover:opacity-80 transition font-medium text-white flex items-center gap-2"
                >
                  <span>✍️</span>
                  <span>Blog</span>
                </a>
                <a
                  href="https://fluxie.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition font-medium text-white flex items-center gap-2"
                >
                  <span>🛒</span>
                  <span>Shop</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content mit Custom Background */}
        <main className="min-h-screen" style={{ backgroundColor: '#fff8f0' }}>
          {children}
        </main>

        {/* Footer mit Fluxie Branding */}
        <footer style={{ backgroundColor: '#003049' }} className="text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="mb-2 font-medium">© 2025 Fluxie - Interaktive Lesekarten für Kinder</p>
              <p className="text-sm opacity-80">Wie Tonies, aber fürs Lesen</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
