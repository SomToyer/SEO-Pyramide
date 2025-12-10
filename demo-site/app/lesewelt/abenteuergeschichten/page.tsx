import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abenteuergeschichten für Kinder – Spannende Geschichten zum Vorlesen | Fluxie',
  description: 'Abenteuergeschichten für Kinder von Fluxie ✓ Spannende Erlebnisse ✓ Perfekt zum Vorlesen ✓ Für mutige Entdecker ➤ Jetzt entdecken!',
  openGraph: {
    title: 'Abenteuergeschichten für Kinder – Spannende Geschichten zum Vorlesen | Fluxie',
    description: 'Entdecke spannende Abenteuergeschichten für Kinder. Aufregende Vorlesegeschichten, die Mut und Entdeckergeist fördern. Kostenlos lesen!',
    url: 'https://fluxie.de/lesewelt/abenteuergeschichten',
    siteName: 'Fluxie',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://fluxie.de/images/abenteuergeschichten-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Abenteuergeschichten für Kinder'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abenteuergeschichten für Kinder – Spannende Geschichten zum Vorlesen',
    description: 'Abenteuergeschichten für Kinder ✓ Spannende Erlebnisse ✓ Perfekt zum Vorlesen',
    images: ['https://fluxie.de/images/abenteuergeschichten-og.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://fluxie.de/lesewelt/abenteuergeschichten'
  }
}

export default function AbenteuergeschichtenPage() {
  // Schema.org JSON-LD Strukturierte Daten
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Abenteuergeschichten für Kinder",
    "description": "Sammlung spannender Abenteuergeschichten zum Vorlesen für Kinder ab 4 Jahren.",
    "url": "https://fluxie.de/lesewelt/abenteuergeschichten",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": []
    },
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 4,
      "suggestedMaxAge": 12
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
        "name": "Abenteuergeschichten",
        "item": "https://fluxie.de/lesewelt/abenteuergeschichten"
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
                <a href="/" className="hover:opacity-80 transition" style={{ color: '#f77f00' }}>Home</a>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">›</span>
              </li>
              <li>
                <a href="/lesewelt" className="hover:opacity-80 transition" style={{ color: '#f77f00' }}>Lesewelt</a>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">›</span>
              </li>
              <li aria-current="page">
                <span className="text-gray-900">Abenteuergeschichten</span>
              </li>
            </ol>
          </nav>

          {/* Kategorie-Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#f77f00' }}>
              ⚔️ Abenteuergeschichten für Kinder: Spannende Vorlesegeschichten
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-4">
                Entdecke unsere aufregende Sammlung an <strong>Abenteuergeschichten</strong>, die
                Kinder auf spannende Reisen mitnehmen und ihre Fantasie beflügeln. Ob mutige Helden,
                geheimnisvolle Schätze oder fantastische Welten – hier findest du die perfekte
                Abenteuergeschichte für kleine Entdecker.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Alle Abenteuergeschichten sind speziell darauf ausgelegt, Mut zu fördern,
                Problemlösungsfähigkeiten zu stärken und die Vorstellungskraft anzuregen.
                Perfekt zum Vorlesen am Nachmittag oder als aufregendes Abendritual.
              </p>
            </div>
          </header>

          {/* Fluxie Produkt-Box */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-12 border-2 shadow-lg" style={{ borderColor: '#f77f00' }}>
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
                    alt="Fluxie Starter-Set mit Lesekarten"
                    className="w-48 h-48 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#f77f00' }}>
                  Abenteuergeschichten interaktiv erleben
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Mit den Fluxie Lesekarten werden Abenteuergeschichten zum interaktiven Erlebnis.
                  Dein Kind kann die spannenden Geschichten selbst entdecken und dabei spielerisch
                  lesen lernen – perfekt für kleine Entdecker!
                </p>
                <a
                  href="https://fluxie.de/produkt/pionierset/"
                  className="inline-block bg-fluxie-orange hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zum Fluxie Starter-Set →
                </a>
              </div>
            </div>
          </div>

          {/* Abenteuergeschichten nach Themen */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Abenteuergeschichten nach Themen
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-100 rounded-xl p-6 opacity-60">
                <div className="text-5xl mb-3">🏴‍☠️</div>
                <h3 className="text-xl font-bold mb-2 text-gray-600">
                  Piraten-Abenteuer
                </h3>
                <p className="text-gray-500">
                  Spannende Geschichten über mutige Seefahrer und versteckte Schätze – bald verfügbar!
                </p>
              </div>

              <div className="bg-gray-100 rounded-xl p-6 opacity-60">
                <div className="text-5xl mb-3">🏰</div>
                <h3 className="text-xl font-bold mb-2 text-gray-600">
                  Ritter & Drachen
                </h3>
                <p className="text-gray-500">
                  Heldenhafte Geschichten über tapfere Ritter und feuerspeiende Drachen – demnächst hier!
                </p>
              </div>
            </div>

            {/* CTA-Button */}
            <div className="text-center">
              <a
                href="/lesewelt"
                className="inline-block bg-fluxie-orange hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Alle Geschichten entdecken →
              </a>
            </div>
          </section>

          {/* Beliebte Geschichten */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Beliebte Abenteuergeschichten
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Bald findest du hier die beliebtesten Abenteuergeschichten für kleine Entdecker:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Placeholder Card 1 */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 opacity-60">
                <div className="text-4xl mb-4 text-center">⚔️✨</div>
                <h3 className="text-lg font-bold mb-2 text-gray-600">
                  Spannende Abenteuer folgen
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Bald findest du hier aufregende Geschichten für mutige Entdecker.
                </p>
                <div className="text-xs text-gray-400">
                  <span className="mr-3">Demnächst...</span>
                </div>
              </div>

              {/* Placeholder Card 2 */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 opacity-60">
                <div className="text-4xl mb-4 text-center">🗺️🔍</div>
                <h3 className="text-lg font-bold mb-2 text-gray-600">
                  Weitere Geschichten folgen
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Bald findest du hier noch mehr spannende Geschichten.
                </p>
                <div className="text-xs text-gray-400">
                  <span className="mr-3">Demnächst...</span>
                </div>
              </div>

              {/* Placeholder Card 3 */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 opacity-60">
                <div className="text-4xl mb-4 text-center">🏴‍☠️💎</div>
                <h3 className="text-lg font-bold mb-2 text-gray-600">
                  Neue Abenteuer
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Jeden Monat kommen neue Abenteuergeschichten hinzu.
                </p>
                <div className="text-xs text-gray-400">
                  <span className="mr-3">Bald verfügbar</span>
                </div>
              </div>
            </div>
          </section>

          {/* Warum Abenteuergeschichten wichtig sind */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Warum sind Abenteuergeschichten so wichtig?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">💪</span>
                  <span><strong>Mut fördern:</strong> Abenteuergeschichten helfen Kindern,
                  über sich hinauszuwachsen und Herausforderungen anzunehmen.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🧩</span>
                  <span><strong>Problemlösung:</strong> Durch spannende Situationen lernen Kinder,
                  kreative Lösungen zu finden.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🌍</span>
                  <span><strong>Weltverständnis:</strong> Geschichten über fremde Länder und
                  Kulturen erweitern den Horizont.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✨</span>
                  <span><strong>Fantasie anregen:</strong> Abenteuergeschichten beflügeln die
                  Vorstellungskraft und fördern kreatives Denken.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🤝</span>
                  <span><strong>Soziale Werte:</strong> Viele Abenteuergeschichten vermitteln
                  Werte wie Freundschaft, Zusammenhalt und Hilfsbereitschaft.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Tipps für das Vorlesen */}
          <section className="mb-12 bg-orange-50 rounded-xl p-8 border-2 border-orange-100">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#f77f00' }}>
              💡 Tipps für das Vorlesen von Abenteuergeschichten
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Lebendige Stimme:</strong> Nutze verschiedene Stimmen für unterschiedliche Charaktere</li>
              <li>✓ <strong>Spannung aufbauen:</strong> Lies langsamer in spannenden Momenten und schneller bei Action</li>
              <li>✓ <strong>Pausen einbauen:</strong> Lass Kinder raten, wie die Geschichte weitergeht</li>
              <li>✓ <strong>Nachbesprechen:</strong> Sprecht über die Abenteuer und was die Helden gelernt haben</li>
              <li>✓ <strong>Interaktiv gestalten:</strong> Lass dein Kind Geräusche oder Bewegungen mitmachen</li>
            </ul>
          </section>

          {/* Luna Produktbox */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-12 border-2 shadow-lg" style={{ borderColor: '#f77f00' }}>
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
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#f77f00' }}>
                  Entdecke Luna – Ein mutiges Abenteuer
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Luna die Löwin ist eine wunderbare Abenteuergeschichte über Mut und das Finden der eigenen
                  Stimme. Perfekt für Kinder, die spannende Geschichten lieben und selbst mutig sein wollen!
                </p>
                <a
                  href="https://fluxie.de/produkt/luna-die-loewin-mit-der-leisen-stimme/"
                  className="inline-block bg-fluxie-orange hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Luna entdecken →
                </a>
              </div>
            </div>
          </div>

          {/* Die Bedeutung von Abenteuergeschichten - Wissenschaftlich fundiert */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Die Bedeutung von Abenteuergeschichten: Wissenschaftlich fundiert
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="leading-relaxed">
                Abenteuergeschichten sind weit mehr als nur spannende Unterhaltung – sie sind ein wertvolles
                Instrument für die kindliche Entwicklung. Pädagogische Studien belegen die positiven Auswirkungen
                auf verschiedene Entwicklungsbereiche.
              </p>

              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Förderung von Resilienz und Selbstbewusstsein
                </h3>
                <p className="leading-relaxed">
                  Forschungen zeigen, dass Kinder, die regelmäßig Abenteuergeschichten hören, ein stärkeres
                  Selbstbewusstsein entwickeln. Durch die Identifikation mit mutigen Helden lernen sie,
                  dass Herausforderungen gemeistert werden können. Dies stärkt ihre Resilienz und
                  Problemlösungsfähigkeiten im Alltag.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Entwicklung kognitiver Fähigkeiten
                </h3>
                <p className="leading-relaxed">
                  Abenteuergeschichten mit komplexen Handlungssträngen fördern das logische Denken und die
                  Konzentrationsfähigkeit. Kinder lernen, Zusammenhänge zu erkennen, Ursache und Wirkung
                  zu verstehen und vorausschauend zu denken. Diese Fähigkeiten sind essentiell für die
                  schulische Entwicklung.
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Sozial-emotionale Kompetenz
                </h3>
                <p className="leading-relaxed">
                  Durch Abenteuergeschichten lernen Kinder wichtige soziale Werte wie Teamarbeit, Loyalität
                  und Hilfsbereitschaft. Sie erleben, wie Charaktere Konflikte lösen und Freundschaften
                  aufbauen. Dies unterstützt die Entwicklung ihrer eigenen sozialen Kompetenzen.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Kreativität und Vorstellungskraft
                </h3>
                <p className="leading-relaxed">
                  Abenteuergeschichten entführen Kinder in fantastische Welten und regen ihre Fantasie an.
                  Dies fördert kreatives Denken und die Fähigkeit, über den Tellerrand zu schauen –
                  wichtige Kompetenzen für Innovation und Problemlösung in der Zukunft.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="mb-12 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 border-2" style={{ borderColor: '#f77f00' }}>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Was Eltern über unsere Abenteuergeschichten sagen
            </h2>
            <blockquote className="text-center">
              <p className="text-lg italic text-gray-700 mb-4 leading-relaxed">
                "Unser Sohn Leo (6) liebt die Fluxie Abenteuergeschichten! Seit wir sie regelmäßig lesen,
                ist er viel mutiger geworden und traut sich mehr zu. Die Geschichten sind spannend,
                aber nicht zu aufregend – genau richtig für sein Alter!"
              </p>
              <footer className="text-gray-600 font-medium">
                — Michael T., Vater eines 6-jährigen Sohnes
              </footer>
            </blockquote>
          </section>

          {/* FAQ Sektion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Häufig gestellte Fragen zu Abenteuergeschichten
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4" style={{ borderLeftColor: '#f77f00' }}>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Ab welchem Alter sind Abenteuergeschichten geeignet?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Abenteuergeschichten sind ideal für Kinder ab 4-5 Jahren. In diesem Alter können sie
                  komplexere Handlungsstränge verstehen und sich mit Heldenfiguren identifizieren. Jüngere
                  Kinder profitieren von einfacheren Abenteuergeschichten mit klaren Strukturen, während
                  ältere Kinder (8-12 Jahre) auch längere, komplexere Abenteuer genießen können.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4" style={{ borderLeftColor: '#f77f00' }}>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Sind Abenteuergeschichten nicht zu aufregend vor dem Schlafengehen?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Das hängt vom Kind und der Geschichte ab. Viele Abenteuergeschichten haben ein beruhigendes
                  Ende und sind so gestaltet, dass sie zwar spannend, aber nicht übermäßig aufwühlend sind.
                  Für das abendliche Ritual empfehlen sich kürzere Abenteuer mit positivem Ausgang. Sehr
                  spannende Geschichten liest man besser tagsüber vor.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4" style={{ borderLeftColor: '#f77f00' }}>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Wie kann ich mein Kind während des Vorlesens einbeziehen?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Stelle Zwischenfragen wie "Was würdest du jetzt tun?" oder "Wie fühlt sich der Held wohl?".
                  Lass dein Kind Geräusche machen oder einfache Bewegungen zur Geschichte ausführen. Nach dem
                  Vorlesen könnt ihr gemeinsam über die Geschichte sprechen und überlegen, was die Charaktere
                  gelernt haben.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4" style={{ borderLeftColor: '#f77f00' }}>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Welche Werte vermitteln Abenteuergeschichten?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Gute Abenteuergeschichten vermitteln wichtige Werte wie Mut, Durchhaltevermögen,
                  Freundschaft, Hilfsbereitschaft und Problemlösungskompetenz. Sie zeigen, dass Herausforderungen
                  gemeistert werden können und dass es okay ist, auch mal Angst zu haben. Zudem lernen Kinder,
                  dass Teamarbeit oft erfolgreicher ist als Einzelkämpfertum.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4" style={{ borderLeftColor: '#f77f00' }}>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Wie lang sollte eine Abenteuergeschichte sein?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Für jüngere Kinder (4-6 Jahre) sind Geschichten von 8-12 Minuten ideal. Ältere Kinder
                  (7-10 Jahre) können längere Geschichten von 15-20 Minuten oder sogar Fortsetzungsgeschichten
                  genießen. Wichtig ist, dass die Geschichte in einem Lesegang abgeschlossen werden kann,
                  damit das Kind ein Erfolgserlebnis hat.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
