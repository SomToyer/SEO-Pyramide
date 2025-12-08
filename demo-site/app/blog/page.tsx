export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <a href="/" className="hover:text-indigo-600">Home</a>
          <span className="mx-2">›</span>
          <span>Blog</span>
        </nav>

        {/* Hero */}
        <h1 className="text-4xl font-bold mb-4 text-indigo-600">
          ✍️ Fluxie Blog – Tipps für Leseförderung
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Expertentipps zu Leseförderung, LRS, Vorlesen und mehr. Praktische Ratschläge
          für Eltern von Leseanfängern.
        </p>

        {/* Fluxie-Produkt-Box */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-6 mb-12 border-2 border-indigo-200">
          <div className="flex items-start gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md flex-shrink-0">
              <div className="text-6xl">🎴</div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-indigo-600">
                Leseförderung mit Fluxie
              </h3>
              <p className="text-gray-700 mb-4">
                Wie Tonies, aber fürs Lesen! Spielerisch Lesen lernen mit interaktiven Lesekarten.
              </p>
              <a
                href="https://fluxie.de/produkt/pionierset/"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
              >
                Jetzt entdecken →
              </a>
            </div>
          </div>
        </div>

        {/* Kategorien-Grid */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Kategorien</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a href="/blog/vorlesen" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-5xl mb-3">📖</div>
              <h3 className="text-xl font-bold mb-2 text-indigo-600 group-hover:text-indigo-700">
                Vorlesen
              </h3>
              <p className="text-gray-600">
                Tipps und Tricks für gelungene Vorlesestunden mit Kindern
              </p>
            </div>
          </a>

          <div className="bg-gray-100 rounded-xl p-6 opacity-60">
            <div className="text-5xl mb-3">📚</div>
            <h3 className="text-xl font-bold mb-2 text-gray-600">
              Weitere Kategorien folgen...
            </h3>
            <p className="text-gray-500">
              LRS, Leseförderung und mehr – bald verfügbar!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
