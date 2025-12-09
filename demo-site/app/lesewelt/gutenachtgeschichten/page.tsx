import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gutenachtgeschichten für Kinder – Zum Vorlesen & Einschlafen | Fluxie',
  description: 'Gutenachtgeschichten für Kinder von Fluxie ✓ Zauberhafte Einschlafgeschichten ✓ Perfekt zum Vorlesen ✓ Für süße Träume ➤ Jetzt entdecken!',
  openGraph: {
    title: 'Gutenachtgeschichten für Kinder – Zum Vorlesen & Einschlafen | Fluxie',
    description: 'Entdecke zauberhafte Gutenachtgeschichten für Kinder. Beruhigende Vorlesegeschichten, die sanft in den Schlaf begleiten. Kostenlos lesen!',
    url: 'https://fluxie.de/lesewelt/gutenachtgeschichten',
    siteName: 'Fluxie',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://fluxie.de/images/gutenachtgeschichten-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Gutenachtgeschichten für Kinder'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutenachtgeschichten für Kinder – Zum Vorlesen & Einschlafen',
    description: 'Gutenachtgeschichten für Kinder ✓ Zauberhafte Einschlafgeschichten ✓ Perfekt zum Vorlesen',
    images: ['https://fluxie.de/images/gutenachtgeschichten-og.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://fluxie.de/lesewelt/gutenachtgeschichten'
  }
}

export default function GutenachtgeschichtenPage() {
  // Schema.org JSON-LD Strukturierte Daten
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Gutenachtgeschichten für Kinder",
    "description": "Sammlung beruhigender Gutenachtgeschichten zum Vorlesen für Kinder ab 3 Jahren.",
    "url": "https://fluxie.de/lesewelt/gutenachtgeschichten",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Gutenachtgeschichten mit Hunden",
          "url": "https://fluxie.de/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden"
        }
      ]
    },
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 3,
      "suggestedMaxAge": 10
    },
    "inLanguage": "de-DE",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fluxie Lesewelt",
      "url": "https://fluxie.de/lesewelt"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fluxie.de"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Lesewelt",
        "item": "https://fluxie.de/lesewelt"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Gutenachtgeschichten",
        "item": "https://fluxie.de/lesewelt/gutenachtgeschichten"
      }
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fluxie",
    "url": "https://fluxie.de",
    "logo": "https://fluxie.de/logo.png",
    "description": "Interaktive Lesekarten für Kinder – wie Tonies, aber fürs Lesen",
    "sameAs": [
      "https://www.instagram.com/fluxie.de",
      "https://www.facebook.com/fluxie.de"
    ]
  }

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="hover:text-purple-600">Home</a>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">›</span>
              </li>
              <li>
                <a href="/lesewelt" className="hover:text-purple-600">Lesewelt</a>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">›</span>
              </li>
              <li aria-current="page">
                <span className="text-gray-900">Gutenachtgeschichten</span>
              </li>
            </ol>
          </nav>

          {/* Kategorie-Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-600">
              🌙 Gutenachtgeschichten für Kinder: Zauberhafte Einschlafgeschichten
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-4">
                Entdecke unsere zauberhafte Sammlung an <strong>Gutenachtgeschichten</strong>, die
                Kinder sanft und friedlich in den Schlaf begleiten. Ob kurze Einschlafgeschichten
                für die Kleinsten oder längere Vorlesegeschichten für größere Kinder – hier findest
                du die perfekte Gute-Nacht-Geschichte für dein Kind.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Alle Gutenachtgeschichten sind speziell darauf ausgelegt, eine beruhigende
                Atmosphäre zu schaffen und das abendliche Vorleseritual zu einem besonderen
                Erlebnis zu machen. Perfekt zum Vorlesen vor dem Schlafengehen oder zum
                gemeinsamen Kuscheln im Bett.
              </p>
            </div>
          </header>

          {/* Fluxie Produkt-Box */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12 border-2 border-purple-200 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <a
                  href="https://fluxie.de/produkt/pionierset/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://fluxie.de/wp-content/uploads/2025/08/Product_shots_starterset.png"
                    alt="Fluxie Pionierset - Starter-Set mit Lesekarten"
                    className="w-48 h-48 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-700 mb-3">
                  Gutenachtgeschichten interaktiv erleben
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Mit den Fluxie Lesekarten werden Gutenachtgeschichten zum interaktiven Erlebnis.
                  Dein Kind kann die Geschichten selbst entdecken und dabei spielerisch lesen lernen –
                  perfekt für das Abendritual!
                </p>
                <a
                  href="https://fluxie.de/produkt/pionierset/"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zum Fluxie Starter-Set →
                </a>
              </div>
            </div>
          </div>

          {/* Gutenachtgeschichten nach Themen - NACH OBEN VERSCHOBEN! */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Gutenachtgeschichten nach Themen
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <a
                href="/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden"
                className="group"
              >
                <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 h-full">
                  <div className="text-5xl mb-3">🐕</div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600 group-hover:text-purple-700">
                    Gutenachtgeschichten mit Hunden
                  </h3>
                  <p className="text-gray-600">
                    Herzerwärmende Einschlafgeschichten mit treuen Vierbeinern, die Kindern
                    zeigen, wie wunderbar Freundschaft und Geborgenheit sind.
                  </p>
                </article>
              </a>

              <div className="bg-gray-100 rounded-xl p-6 opacity-60">
                <div className="text-5xl mb-3">🐱</div>
                <h3 className="text-xl font-bold mb-2 text-gray-600">
                  Weitere Themen folgen...
                </h3>
                <p className="text-gray-500">
                  Bald findest du hier noch mehr zauberhafte Gutenachtgeschichten zu verschiedenen Themen!
                </p>
              </div>
            </div>

            {/* CTA-Button */}
            <div className="text-center">
              <a
                href="/lesewelt"
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Alle Geschichten entdecken →
              </a>
            </div>
          </section>

          {/* Warum Gutenachtgeschichten wichtig sind */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Warum sind Gutenachtgeschichten so wichtig?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">💤</span>
                  <span><strong>Beruhigende Wirkung:</strong> Gutenachtgeschichten helfen Kindern,
                  vom aufregenden Tag abzuschalten und zur Ruhe zu kommen.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">❤️</span>
                  <span><strong>Bindung stärken:</strong> Das gemeinsame Vorleseritual schafft
                  wertvolle Nähe zwischen Eltern und Kind.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📚</span>
                  <span><strong>Sprachentwicklung:</strong> Regelmäßiges Vorlesen fördert den
                  Wortschatz und die Sprachkompetenz.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✨</span>
                  <span><strong>Fantasie anregen:</strong> Geschichten vor dem Einschlafen
                  regen die Vorstellungskraft an und fördern kreatives Denken.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">😴</span>
                  <span><strong>Besserer Schlaf:</strong> Das abendliche Vorleseritual signalisiert
                  dem Körper, dass es Zeit ist zur Ruhe zu kommen.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Beliebte Geschichten - NEU! */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Beliebte Gutenachtgeschichten
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Diese Geschichten werden von Kindern besonders geliebt und sind perfekt für das abendliche Vorleseritual:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Story Card 1 */}
              <a
                href="/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden/wuffi-und-die-schlafschafe"
                className="group block"
              >
                <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all h-full">
                  <div className="mb-4 flex justify-center">
                    <img
                      src="https://wunschturmkinder.de/wp-content/uploads/2025/02/wuffi_001.jpg"
                      alt="Wuffi und die Schlafschafe"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-purple-600 group-hover:text-purple-700">
                    Wuffi und die Schlafschafe
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Eine lustige Geschichte über einen quirligen Hund, der lernt, zur Ruhe zu kommen.
                  </p>
                  <div className="text-xs text-gray-500">
                    <span className="mr-3">👶 Ab 3 Jahren</span>
                    <span>⏱️ 5 Min.</span>
                  </div>
                </article>
              </a>

              {/* Placeholder Card 2 */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 opacity-60">
                <div className="text-4xl mb-4 text-center">🌙✨</div>
                <h3 className="text-lg font-bold mb-2 text-gray-600">
                  Weitere Geschichten folgen
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Bald findest du hier noch mehr zauberhafte Geschichten.
                </p>
                <div className="text-xs text-gray-400">
                  <span className="mr-3">Demnächst...</span>
                </div>
              </div>

              {/* Placeholder Card 3 */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 opacity-60">
                <div className="text-4xl mb-4 text-center">📖💫</div>
                <h3 className="text-lg font-bold mb-2 text-gray-600">
                  Neue Abenteuer
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Jeden Monat kommen neue Gutenachtgeschichten hinzu.
                </p>
                <div className="text-xs text-gray-400">
                  <span className="mr-3">Bald verfügbar</span>
                </div>
              </div>
            </div>
          </section>

          {/* Tipps für das Vorlesen - NACH OBEN VERSCHOBEN! */}
          <section className="mb-12 bg-purple-50 rounded-xl p-8 border-2 border-purple-100">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">
              💡 Tipps für das abendliche Vorlesen
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Feste Routine:</strong> Lies jeden Abend zur gleichen Zeit vor</li>
              <li>✓ <strong>Ruhige Atmosphäre:</strong> Dimme das Licht und schaffe eine gemütliche Umgebung</li>
              <li>✓ <strong>Langsam lesen:</strong> Nimm dir Zeit und lies mit ruhiger Stimme</li>
              <li>✓ <strong>Kuscheln:</strong> Körperliche Nähe verstärkt die beruhigende Wirkung</li>
              <li>✓ <strong>Kurze Geschichten:</strong> Wähle altersgerechte Geschichten, die nicht zu aufregend sind</li>
            </ul>
          </section>

          {/* Die Bedeutung von Gutenachtgeschichten - Wissenschaftlich fundiert */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Die Bedeutung von Gutenachtgeschichten: Wissenschaftlich fundiert
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="leading-relaxed">
                Das abendliche Vorlesen von Gutenachtgeschichten ist weit mehr als nur ein liebgewonnenes
                Ritual – es ist ein wertvolles Instrument für die kindliche Entwicklung. Zahlreiche
                wissenschaftliche Studien belegen die positiven Auswirkungen auf verschiedene Entwicklungsbereiche.
              </p>

              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Förderung der Sprachentwicklung
                </h3>
                <p className="leading-relaxed">
                  Forschungen zeigen, dass Kinder, denen regelmäßig vorgelesen wird, einen deutlich größeren
                  Wortschatz entwickeln und bessere sprachliche Fähigkeiten aufweisen. Die American Academy
                  of Pediatrics empfiehlt das Vorlesen sogar schon ab dem Säuglingsalter, da es die
                  Gehirnentwicklung stimuliert und den Grundstein für spätere Lesekompetenz legt.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Verbesserung der Schlafqualität
                </h3>
                <p className="leading-relaxed">
                  Aktuelle Erkenntnisse der Schlafmedizin bestätigen den positiven Einfluss von abendlichen
                  Vorleseritualen auf die Schlafqualität. Kinder, denen regelmäßig Gutenachtgeschichten
                  vorgelesen werden, schlafen im Durchschnitt schneller ein und haben einen tieferen,
                  erholsameren Schlaf. Dies wirkt sich positiv auf ihre Konzentrationsfähigkeit und
                  emotionale Ausgeglichenheit am nächsten Tag aus.
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Emotionale und soziale Entwicklung
                </h3>
                <p className="leading-relaxed">
                  Pädagogen betonen die positiven Auswirkungen auf die sozial-emotionale Entwicklung: Durch
                  verschiedene Charaktere und Handlungen lernen Kinder spielerisch, sich in andere
                  hineinzuversetzen und verschiedene Perspektiven zu verstehen. Die ruhige Atmosphäre beim
                  Vorlesen bietet zudem einen idealen Rahmen für Gespräche über die Erlebnisse des Tages.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Kreativität und Vorstellungskraft
                </h3>
                <p className="leading-relaxed">
                  Ein weiterer wichtiger Aspekt ist die Förderung der Kreativität: Anders als bei visuellen
                  Medien müssen Kinder beim Zuhören ihre eigenen inneren Bilder entwickeln. Dies stärkt die
                  Vorstellungskraft und regt die Fantasie an – wichtige Fähigkeiten für die kognitive Entwicklung.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Was Eltern über unsere Gutenachtgeschichten sagen
            </h2>
            <blockquote className="text-center">
              <p className="text-lg italic text-gray-700 mb-4 leading-relaxed">
                "Seit wir die Fluxie Gutenachtgeschichten entdeckt haben, ist das Zubettgehen viel
                entspannter geworden. Unsere Tochter Emma (4) freut sich jeden Abend auf ihre Geschichte
                und schläft danach viel schneller ein. Die Geschichten sind wunderschön erzählt und
                haben genau die richtige Länge!"
              </p>
              <footer className="text-gray-600 font-medium">
                — Sarah M., Mutter einer 4-jährigen Tochter
              </footer>
            </blockquote>
          </section>

          {/* FAQ Sektion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Häufig gestellte Fragen zu Gutenachtgeschichten
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Wie lang sollte eine Gutenachtgeschichte sein?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Für die meisten Kinder sind Geschichten von 5-10 Minuten Vorlesezeit ideal. Bei jüngeren
                  Kindern (2-4 Jahre) empfehlen sich kürzere Geschichten von 3-5 Minuten, während ältere
                  Kinder (5-8 Jahre) auch längere Geschichten von bis zu 15 Minuten genießen können. Wichtig
                  ist, dass die Geschichte noch vor dem Einschlafen zu Ende geht.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Ab welchem Alter sind Gutenachtgeschichten sinnvoll?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Schon Babys ab 6 Monaten profitieren vom Vorlesen! Die beruhigende Stimme und der
                  gleichmäßige Rhythmus haben eine entspannende Wirkung. Unsere Gutenachtgeschichten sind
                  speziell für Kinder ab 3 Jahren konzipiert, aber auch jüngere Kinder können sie bereits
                  genießen. Das Wichtigste ist, dass das Vorlesen zum festen Bestandteil des Abendrituals wird.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-600">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Können Gutenachtgeschichten Albträume verhindern?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ja! Positive, beruhigende Gutenachtgeschichten können tatsächlich dazu beitragen, Albträume
                  zu reduzieren. Sie schaffen positive Gedanken und Bilder, mit denen Kinder einschlafen.
                  Wichtig ist, auf Geschichten mit harmonischem Ende zu achten und aufwühlende oder spannende
                  Inhalte am Abend zu vermeiden.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Was tun, wenn mein Kind immer "noch eine Geschichte" möchte?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Das ist völlig normal! Setze klare, liebevolle Grenzen: "Wir lesen jeden Abend eine
                  Geschichte. Morgen gibt es eine neue." Bleibe konsequent, aber einfühlsam. Alternativ
                  kannst du anbieten, dass dein Kind sich die Geschichte noch einmal im Kopf vorstellen
                  darf – das fördert die Fantasie und hilft beim Einschlafen.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Sollte ich immer dieselbe Geschichte vorlesen?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Kinder lieben Wiederholungen! Es ist völlig in Ordnung, wenn dein Kind über Wochen
                  dieselbe Lieblingsgeschichte hören möchte. Die Vertrautheit gibt Sicherheit und
                  Geborgenheit. Biete trotzdem gelegentlich neue Geschichten an – viele Kinder mögen eine
                  Mischung aus vertrauten Klassikern und neuen Abenteuern.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
