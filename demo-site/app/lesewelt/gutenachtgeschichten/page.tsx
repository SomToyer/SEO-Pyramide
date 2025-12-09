export default function GutenachtgeschichtenPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <a href="/" className="hover:text-fluxie-orange">Home</a>
          <span className="mx-2">›</span>
          <a href="/lesewelt" className="hover:text-fluxie-orange">Lesewelt</a>
          <span className="mx-2">›</span>
          <span>Gutenachtgeschichten</span>
        </nav>

        {/* Kategorie-Header */}
        <h1 className="text-4xl font-bold mb-4 text-fluxie-orange">
          🌙 Gutenachtgeschichten
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Sanfte Geschichten, die Kinder in den Schlaf begleiten. Perfekt zum Vorlesen am Abend
          oder zum gemeinsamen Kuscheln.
        </p>

        {/* Unterkategorien */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Unterkategorien</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a href="/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-5xl mb-3">🐕</div>
              <h3 className="text-xl font-bold mb-2 text-fluxie-orange group-hover:text-amber-600">
                Gutenachtgeschichten mit Hunden
              </h3>
              <p className="text-gray-600">
                Herzerwärmende Geschichten mit treuen Vierbeinern
              </p>
            </div>
          </a>

          <div className="bg-gray-100 rounded-xl p-6 opacity-60">
            <div className="text-5xl mb-3">🐱</div>
            <h3 className="text-xl font-bold mb-2 text-gray-600">
              Weitere Themen folgen...
            </h3>
            <p className="text-gray-500">
              Bald gibt es hier mehr Geschichten!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
