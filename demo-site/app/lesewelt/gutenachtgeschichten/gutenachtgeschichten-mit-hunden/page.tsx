import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gutenachtgeschichten mit Hunden – Hundegeschichten zum Einschlafen | Fluxie',
  description: 'Zauberhafte Gutenachtgeschichten mit Hunden für Kinder. Beruhigende Hundegeschichten zum Vorlesen, die sanft in den Schlaf begleiten. Jetzt kostenlos lesen!',
  openGraph: {
    title: 'Gutenachtgeschichten mit Hunden – Hundegeschichten zum Einschlafen | Fluxie',
    description: 'Zauberhafte Gutenachtgeschichten mit Hunden für Kinder. Beruhigende Hundegeschichten zum Vorlesen, die sanft in den Schlaf begleiten.',
    url: 'https://fluxie.de/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden',
    siteName: 'Fluxie',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://fluxie.de/images/gutenachtgeschichten-hunde-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Gutenachtgeschichten mit Hunden für Kinder'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutenachtgeschichten mit Hunden – Hundegeschichten zum Einschlafen',
    description: 'Zauberhafte Gutenachtgeschichten mit Hunden, die Kinder sanft in den Schlaf begleiten.',
    images: ['https://fluxie.de/images/gutenachtgeschichten-hunde-og.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://fluxie.de/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden'
  }
}

export default function GutenachtgeschichtenMitHundenPage() {
  // Schema.org JSON-LD Strukturierte Daten
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Gutenachtgeschichten mit Hunden",
    "description": "Sammlung beruhigender Gutenachtgeschichten mit Hunden zum Vorlesen für Kinder ab 3 Jahren.",
    "url": "https://fluxie.de/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Wuffi und die Schlafschafe",
          "url": "https://fluxie.de/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden/wuffi-und-die-schlafschafe"
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
      "@type": "WebPage",
      "name": "Gutenachtgeschichten",
      "url": "https://fluxie.de/lesewelt/gutenachtgeschichten"
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
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Gutenachtgeschichten mit Hunden",
        "item": "https://fluxie.de/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden"
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
              <li>
                <a href="/lesewelt/gutenachtgeschichten" className="hover:text-purple-600">
                  Gutenachtgeschichten
                </a>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">›</span>
              </li>
              <li aria-current="page">
                <span className="text-gray-900">Gutenachtgeschichten mit Hunden</span>
              </li>
            </ol>
          </nav>

          {/* Unterkategorie-Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-600">
              🐕 Gutenachtgeschichten mit Hunden
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-4">
                Entdecke herzerwärmende <strong>Gutenachtgeschichten mit Hunden</strong>, die Kinder
                sanft in den Schlaf begleiten. Treue Vierbeiner, spannende Abenteuer und beruhigende
                Erzählungen schaffen die perfekte Atmosphäre für einen erholsamen Schlaf.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Hundegeschichten zum Einschlafen sind besonders beliebt bei Kindern, die Tiere lieben.
                Die Geschichten vermitteln Werte wie Freundschaft, Treue und Geborgenheit – perfekt
                für das abendliche Vorleseritual.
              </p>
            </div>
          </header>

          {/* Fluxie Produkt-Box */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12 border-2 border-purple-200 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <a
                  href="https://fluxie.de/produkt/luna-die-loewin-mit-der-leisen-stimme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://fluxie.de/wp-content/uploads/2025/08/4-2-1.png"
                    alt="Fluxie Luna - Die Löwin mit der leisen Stimme Lesekarte"
                    className="w-48 h-48 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-700 mb-3">
                  Tiergeschichten interaktiv erleben mit Luna
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Luna die Löwin ist eine wunderbare Geschichte über Mut und das Finden der eigenen
                  Stimme. Perfekt für Kinder, die Tiergeschichten lieben – wie unsere Hundegeschichten!
                </p>
                <a
                  href="https://fluxie.de/produkt/luna-die-loewin-mit-der-leisen-stimme/"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Luna entdecken →
                </a>
              </div>
            </div>
          </div>

          {/* Warum Hundegeschichten zum Einschlafen? */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Warum Gutenachtgeschichten mit Hunden so beliebt sind
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🐕</span>
                  <span><strong>Emotionale Bindung:</strong> Kinder lieben Hunde und fühlen sich
                  den Charakteren besonders nah. Das erleichtert das Einschlafen.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">💤</span>
                  <span><strong>Beruhigende Wirkung:</strong> Geschichten über treue Vierbeiner
                  vermitteln Geborgenheit und Sicherheit – ideal für die Nacht.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">❤️</span>
                  <span><strong>Werte vermitteln:</strong> Hundegeschichten lehren Freundschaft,
                  Treue, Mut und Verantwortung auf kindgerechte Weise.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🌟</span>
                  <span><strong>Fantasie anregen:</strong> Abenteuer mit Hunden regen die
                  Vorstellungskraft an, ohne zu aufregend für die Schlafenszeit zu sein.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🏠</span>
                  <span><strong>Vertraut und sicher:</strong> Hunde als Haustiere sind vielen
                  Kindern vertraut, was eine beruhigende Atmosphäre schafft.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Geschichten-Liste */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Unsere Hundegeschichten zum Einschlafen
            </h2>
            <div className="space-y-6">
              <a
                href="/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden/wuffi-und-die-schlafschafe"
                className="block group"
              >
                <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">🐕💤</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-purple-600 group-hover:text-purple-700">
                        Wuffi und die Schlafschafe
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Wuffi, der kleine zottelige Hund, will der beste Schlafschaf-Champion werden.
                        Doch Stillsitzen ist gar nicht so einfach! Eine lustige und beruhigende
                        Gutenachtgeschichte über einen quirligen Hund und seine Schaf-Freunde, die
                        Kindern zeigt, wie wichtig Ruhe und Geduld sind.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="mr-4">👶 Ab 3 Jahren</span>
                        <span className="mr-4">⏱️ 5 Min. Lesezeit</span>
                        <span>😴 Perfekt zum Einschlafen</span>
                      </div>
                      <span className="text-purple-600 font-medium group-hover:underline inline-flex items-center">
                        Geschichte jetzt lesen →
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
          </section>

          {/* Tipps für Hundegeschichten */}
          <section className="bg-purple-50 rounded-xl p-8 border-2 border-purple-100">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">
              💡 Tipps zum Vorlesen von Hundegeschichten
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Tierlaute einbauen:</strong> Lass Hunde bellen oder hecheln – das macht Spaß!</li>
              <li>✓ <strong>Kuscheltier dazunehmen:</strong> Ein Plüschhund begleitet die Geschichte</li>
              <li>✓ <strong>Ruhige Stimme:</strong> Lies langsam und beruhigend, besonders zum Ende</li>
              <li>✓ <strong>Über eigene Erfahrungen sprechen:</strong> Kennt dein Kind einen Hund?</li>
              <li>✓ <strong>Wiederholung:</strong> Kinder lieben es, ihre Lieblingsgeschichte mehrmals zu hören</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}
