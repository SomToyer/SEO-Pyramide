export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Willkommen bei Fluxie
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Interaktive Lesekarten für Kinder – wie Tonies, aber fürs Lesen!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <a href="/lesewelt" className="group">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-2xl font-bold mb-3 text-purple-600 group-hover:text-purple-700">
                Lesewelt
              </h2>
              <p className="text-gray-600">
                Entdecke spannende Geschichten für Kinder. Gutenachtgeschichten, Abenteuer und mehr!
              </p>
            </div>
          </a>

          <a href="/blog" className="group">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="text-6xl mb-4">✍️</div>
              <h2 className="text-2xl font-bold mb-3 text-indigo-600 group-hover:text-indigo-700">
                Blog
              </h2>
              <p className="text-gray-600">
                Tipps zur Leseförderung, LRS, Vorlesen und mehr. Praktische Ratschläge für Eltern.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
