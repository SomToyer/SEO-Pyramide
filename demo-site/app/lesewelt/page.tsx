export default function LeseweltPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <a href="/" className="hover:text-purple-600">Home</a>
          <span className="mx-2">›</span>
          <span>Lesewelt</span>
        </nav>

        {/* Hero */}
        <h1 className="text-4xl font-bold mb-4 text-purple-600">
          📚 Lesewelt – Entdecke unsere Geschichten
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Tauche ein in die wunderbare Welt der Geschichten! Hier findest du spannende Abenteuer,
          berührende Gutenachtgeschichten und vieles mehr.
        </p>

        {/* Kategorien-Grid */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Kategorien</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a href="/lesewelt/gutenachtgeschichten" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-5xl mb-3">🌙</div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 group-hover:text-purple-700">
                Gutenachtgeschichten
              </h3>
              <p className="text-gray-600">
                Sanfte Geschichten zum Einschlafen und Träumen
              </p>
            </div>
          </a>

          <div className="bg-gray-100 rounded-xl p-6 opacity-60">
            <div className="text-5xl mb-3">✨</div>
            <h3 className="text-xl font-bold mb-2 text-gray-600">
              Weitere Kategorien folgen...
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
