import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gutenachtgeschichten für Kinder – Zum Vorlesen & Einschlafen | Fluxie',
  description: 'Entdecke zauberhafte Gutenachtgeschichten für Kinder. Beruhigende Vorlesegeschichten, die sanft in den Schlaf begleiten. Kostenlos lesen!',
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
    description: 'Zauberhafte Gutenachtgeschichten, die Kinder sanft in den Schlaf begleiten.',
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
              🌙 Gutenachtgeschichten für Kinder
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
                <div className="w-32 h-32 bg-purple-200 rounded-xl flex items-center justify-center text-6xl">
                  🌙
                </div>
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
              </ul>
            </div>
          </section>

          {/* Unterkategorien */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Gutenachtgeschichten nach Themen
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
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
          </section>

          {/* Tipps für das Vorlesen */}
          <section className="bg-purple-50 rounded-xl p-8 border-2 border-purple-100">
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
        </div>
      </div>
    </>
  )
}
