export default function VorlesenPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <a href="/" className="hover:text-indigo-600">Home</a>
          <span className="mx-2">›</span>
          <a href="/blog" className="hover:text-indigo-600">Blog</a>
          <span className="mx-2">›</span>
          <span>Vorlesen</span>
        </nav>

        {/* Kategorie-Header */}
        <h1 className="text-4xl font-bold mb-4 text-indigo-600">
          📖 Vorlesen
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Tipps und Tricks für gelungene Vorlesestunden mit Kindern. Entdecke, wie du
          die Magie des Vorlesens in euren Alltag bringst!
        </p>

        {/* Fluxie-Produkt-Box */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-6 mb-12 border-2 border-indigo-200">
          <div className="flex items-start gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md flex-shrink-0">
              <div className="text-6xl">🎴</div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-indigo-600">
                Gemeinsam Geschichten erleben
              </h3>
              <p className="text-gray-700 mb-4">
                Vorlesegeschichten, die Kinder begeistern und zum Selberlesen motivieren.
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

        {/* Artikel-Liste */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Artikel</h2>
        <div className="space-y-6">
          <a href="/blog/vorlesen/leseecke-einrichten-tipps" className="block group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🏡</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-indigo-600 group-hover:text-indigo-700">
                    Leseecke einrichten: Tipps für die perfekte Leseoase
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Eine gemütliche Leseecke macht das Vorlesen zu einem besonderen Erlebnis.
                    Erfahre, wie du mit einfachen Mitteln einen magischen Ort zum Lesen schaffst.
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>📖 5 Min. Lesezeit</span>
                    <span>•</span>
                    <span>🏷️ Vorlesen, Tipps</span>
                  </div>
                  <span className="inline-block mt-3 text-indigo-600 font-medium group-hover:underline">
                    Artikel lesen →
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
