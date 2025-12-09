export default function GutenachtgeschichtenMitHundenPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <a href="/" className="hover:text-fluxie-orange">Home</a>
          <span className="mx-2">›</span>
          <a href="/lesewelt" className="hover:text-fluxie-orange">Lesewelt</a>
          <span className="mx-2">›</span>
          <a href="/lesewelt/gutenachtgeschichten" className="hover:text-fluxie-orange">Gutenachtgeschichten</a>
          <span className="mx-2">›</span>
          <span>Gutenachtgeschichten mit Hunden</span>
        </nav>

        {/* Unterkategorie-Header */}
        <h1 className="text-4xl font-bold mb-4 text-fluxie-orange">
          🐕 Gutenachtgeschichten mit Hunden
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Herzerwärmende Geschichten mit treuen Vierbeinern, die Kindern beim Einschlafen helfen.
        </p>

        {/* Artikel-Liste */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Geschichten</h2>
        <div className="space-y-6">
          <a href="/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden/wuffi-und-die-schlafschafe" className="block group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🐕💤</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-fluxie-orange group-hover:text-amber-600">
                    Wuffi und die Schlafschafe
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Wuffi, der kleine zottelige Hund, will der beste Schlafschaf-Champion werden.
                    Doch Stillsitzen ist gar nicht so einfach! Eine lustige Gutenachtgeschichte über
                    einen quirligen Hund und seine Schaf-Freunde.
                  </p>
                  <span className="text-fluxie-orange font-medium group-hover:underline">
                    Geschichte lesen →
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
