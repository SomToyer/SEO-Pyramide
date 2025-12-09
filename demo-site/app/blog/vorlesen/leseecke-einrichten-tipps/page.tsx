export default function LeseeckePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <a href="/" className="hover:text-fluxie-orange">Home</a>
          <span className="mx-2">›</span>
          <a href="/blog" className="hover:text-fluxie-orange">Blog</a>
          <span className="mx-2">›</span>
          <a href="/blog/vorlesen" className="hover:text-fluxie-orange">Vorlesen</a>
          <span className="mx-2">›</span>
          <span>Leseecke einrichten</span>
        </nav>

        {/* Artikel-Header */}
        <h1 className="text-4xl font-bold mb-4 text-fluxie-orange">
          🏡 Leseecke einrichten: Tipps für die perfekte Leseoase
        </h1>
        <div className="flex items-center gap-4 mb-8 text-sm text-gray-600">
          <span>👤 Christian Gödde</span>
          <span>•</span>
          <span>📅 10. Januar 2025</span>
          <span>•</span>
          <span>📖 5 Min. Lesezeit</span>
        </div>

        {/* Teaser */}
        <div className="bg-orange-50 border-l-4 border-fluxie-orange p-6 mb-8 rounded-r-lg">
          <p className="text-lg text-gray-700">
            Eine gemütliche Leseecke macht das Vorlesen zu einem besonderen Erlebnis.
            Erfahre, wie du mit einfachen Mitteln einen magischen Ort zum Lesen schaffst,
            der Kinder zum Schmökern einlädt.
          </p>
        </div>

        {/* Fluxie-Produkt-Box */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6 mb-12 border-2 border-fluxie-orange">
          <div className="flex items-start gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md flex-shrink-0">
              <div className="text-6xl">🎴</div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-fluxie-orange">
                Die perfekte Leseecke mit Fluxie
              </h3>
              <p className="text-gray-700 mb-4">
                Schaffe eine gemütliche Umgebung für spannende Lesestunden mit den
                interaktiven Fluxie-Lesekarten.
              </p>
              <a
                href="https://fluxie.de/produkt/pionierset/"
                className="inline-block bg-fluxie-orange text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition font-medium"
              >
                Jetzt entdecken →
              </a>
            </div>
          </div>
        </div>

        {/* Inhaltsverzeichnis */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Inhaltsverzeichnis</h2>
          <ol className="space-y-2 text-fluxie-orange">
            <li><a href="#warum" className="hover:underline">1. Warum eine Leseecke wichtig ist</a></li>
            <li><a href="#ort" className="hover:underline">2. Der richtige Ort</a></li>
            <li><a href="#gestaltung" className="hover:underline">3. Gemütliche Gestaltung</a></li>
            <li><a href="#ausstattung" className="hover:underline">4. Die richtige Ausstattung</a></li>
            <li><a href="#buecher" className="hover:underline">5. Bücher-Auswahl</a></li>
            <li><a href="#fazit" className="hover:underline">6. Fazit</a></li>
          </ol>
        </div>

        {/* Artikel-Content */}
        <div className="prose prose-lg max-w-none">
          <h2 id="warum" className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            1. Warum eine Leseecke wichtig ist
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eine eigene Leseecke gibt Kindern einen festen Ort, den sie mit positiven Leseerlebnissen
            verbinden. Sie signalisiert: "Hier ist Platz für Geschichten, Abenteuer und Fantasie."
            Studien zeigen, dass Kinder mit einer gemütlichen Leseecke häufiger und lieber lesen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der besondere Rückzugsort macht das Lesen zu einem Ritual – ähnlich wie die Gutenachtgeschichte
            vor dem Schlafengehen. Kinder lernen, dass Lesen etwas Besonderes ist, das einen eigenen
            Platz im Alltag verdient.
          </p>

          <h2 id="ort" className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            2. Der richtige Ort
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wähle einen ruhigen Ort, der nicht direkt im Durchgangsbereich liegt. Ideal sind:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Eine Ecke im Kinderzimmer</li>
            <li>Ein Platz unter der Dachschräge</li>
            <li>Eine Nische im Wohnzimmer</li>
            <li>Ein Bereich am Fenster mit Tageslicht</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wichtig ist, dass genug Licht vorhanden ist und der Ort gemütlich, aber nicht zu
            ablenkend ist. Eine Balance zwischen Geborgenheit und Helligkeit ist ideal.
          </p>

          <h2 id="gestaltung" className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            3. Gemütliche Gestaltung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Gemütlichkeit macht den Unterschied! Diese Elemente helfen:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Sitzkissen oder Sitzsack:</strong> Bequem und flexibel</li>
            <li><strong>Weiche Decken:</strong> Zum Einkuscheln</li>
            <li><strong>Teppich:</strong> Macht den Boden warm und weich</li>
            <li><strong>Lichterkette:</strong> Schafft eine magische Atmosphäre</li>
            <li><strong>Leselampe:</strong> Für ausreichend Licht beim Lesen</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tipp: Lass dein Kind bei der Gestaltung mitentscheiden! Wenn es seine Lieblingsfarben
            oder ein bestimmtes Thema (z.B. Dschungel, Weltraum) einbringen kann, wird die
            Leseecke noch attraktiver.
          </p>

          <h2 id="ausstattung" className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            4. Die richtige Ausstattung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eine gut ausgestattete Leseecke braucht nicht viel, aber das Richtige:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Bücherregal oder Bücherkiste:</strong> Bücher griffbereit halten</li>
            <li><strong>Kleines Regal für Fluxie-Lesekarten:</strong> Praktisch und übersichtlich</li>
            <li><strong>Lesezeichen-Box:</strong> Für selbstgebastelte Lesezeichen</li>
            <li><strong>Kuscheltier:</strong> Als Lesepartner</li>
            <li><strong>Kleine Pflanze:</strong> Bringt Leben in die Ecke (optional)</li>
          </ul>

          <h2 id="buecher" className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            5. Bücher-Auswahl
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Auswahl der Bücher ist entscheidend:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Wechsle die Bücher regelmäßig aus, um Abwechslung zu schaffen</li>
            <li>Stelle 5-10 Bücher gleichzeitig bereit – nicht zu viele, nicht zu wenige</li>
            <li>Mische verschiedene Genres: Geschichten, Sachbücher, Comics</li>
            <li>Berücksichtige das aktuelle Leseniveau und Interessen</li>
            <li>Integriere auch Fluxie-Lesekarten für interaktives Lesen</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tipp: Lass dein Kind selbst aussuchen, welche Bücher in der Leseecke stehen sollen!
          </p>

          <h2 id="fazit" className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            6. Fazit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eine Leseecke ist mehr als nur ein Platz zum Lesen – sie ist ein magischer Ort,
            der die Liebe zu Büchern fördert. Mit wenigen Mitteln kannst du eine Umgebung schaffen,
            die dein Kind zum Schmökern einlädt und positive Leseerlebnisse ermöglicht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wichtig ist vor allem, dass sich dein Kind wohlfühlt und die Leseecke als "seinen"
            Ort wahrnimmt. Dann wird das Lesen ganz von selbst zu einem festen Bestandteil
            des Alltags.
          </p>
        </div>

        {/* CTA-Banner */}
        <div className="bg-gradient-to-r from-fluxie-orange to-amber-600 rounded-xl p-8 my-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Jetzt Fluxie testen und Lesen fördern
          </h3>
          <p className="mb-6 text-orange-100">
            Über 1.000 zufriedene Eltern vertrauen auf Fluxie. Mach das Lesen zu einem Abenteuer!
          </p>
          <a
            href="https://fluxie.de/shop"
            className="inline-block bg-white text-fluxie-orange px-8 py-3 rounded-lg hover:bg-gray-100 transition font-bold"
          >
            Zum Shop →
          </a>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="bg-orange-100 text-fluxie-orange px-3 py-1 rounded-full text-sm">#Vorlesen</span>
          <span className="bg-orange-100 text-fluxie-orange px-3 py-1 rounded-full text-sm">#Leseecke</span>
          <span className="bg-orange-100 text-fluxie-orange px-3 py-1 rounded-full text-sm">#Leseförderung</span>
          <span className="bg-orange-100 text-fluxie-orange px-3 py-1 rounded-full text-sm">#Tipps</span>
        </div>

        {/* Verwandte Artikel */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Das könnte dich auch interessieren
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-4 opacity-60">
              <div className="text-4xl mb-2">📚</div>
              <h3 className="font-bold text-gray-600">Weitere Artikel</h3>
              <p className="text-sm text-gray-500">Bald verfügbar</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 opacity-60">
              <div className="text-4xl mb-2">📖</div>
              <h3 className="font-bold text-gray-600">Weitere Artikel</h3>
              <p className="text-sm text-gray-500">Bald verfügbar</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 opacity-60">
              <div className="text-4xl mb-2">✨</div>
              <h3 className="font-bold text-gray-600">Weitere Artikel</h3>
              <p className="text-sm text-gray-500">Bald verfügbar</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
