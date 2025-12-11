import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Piraten Abenteuergeschichten – Spannende Piratengeschichten für Kinder | Fluxie',
  description: 'Aufregende Piraten Abenteuergeschichten ✓ Perfekt zum Vorlesen ✓ Mit mutigen Seefahrern ✓ Kostenlose Piratengeschichten ➤ Jetzt entdecken!',
  openGraph: {
    title: 'Piraten Abenteuergeschichten – Spannende Piratengeschichten für Kinder | Fluxie',
    description: 'Aufregende Piraten Abenteuergeschichten ✓ Perfekt zum Vorlesen ✓ Mit mutigen Seefahrern ✓ Kostenlose Piratengeschichten',
    url: 'https://fluxie.de/lesewelt/abenteuergeschichten/piraten-abenteuer',
    siteName: 'Fluxie',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://fluxie.de/images/piraten-abenteuer-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Piraten Abenteuergeschichten für Kinder'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piraten Abenteuergeschichten – Spannende Piratengeschichten für Kinder',
    description: 'Aufregende Piraten Abenteuergeschichten ✓ Perfekt zum Vorlesen ✓ Mit mutigen Seefahrern',
    images: ['https://fluxie.de/images/piraten-abenteuer-og.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://fluxie.de/lesewelt/abenteuergeschichten/piraten-abenteuer'
  }
}

export default function PiratenAbenteuerPage() {
  // Schema.org JSON-LD Strukturierte Daten
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Piraten Abenteuergeschichten",
    "description": "Sammlung spannender Piraten Abenteuergeschichten zum Vorlesen für Kinder ab 4 Jahren.",
    "url": "https://fluxie.de/lesewelt/abenteuergeschichten/piraten-abenteuer",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Pete der lachende Piraten Papagei",
          "url": "https://fluxie.de/lesewelt/abenteuergeschichten/pete-der-lachende-piraten-papagei"
        }
      ]
    },
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 4,
      "suggestedMaxAge": 10
    },
    "inLanguage": "de-DE",
    "isPartOf": {
      "@type": "WebPage",
      "name": "Abenteuergeschichten",
      "url": "https://fluxie.de/lesewelt/abenteuergeschichten"
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
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Piraten Abenteuer",
        "item": "https://fluxie.de/lesewelt/abenteuergeschichten/piraten-abenteuer"
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Warum sind Piratengeschichten gut für Kinder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Piratengeschichten fördern Mut, Abenteuerlust und Problemlösungsfähigkeiten bei Kindern. Sie vermitteln wichtige Werte wie Teamwork, Freundschaft und Cleverness. Die spannenden Geschichten regen die Fantasie an und helfen Kindern, selbstbewusster zu werden."
        }
      },
      {
        "@type": "Question",
        "name": "Ab welchem Alter sind Piratengeschichten geeignet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unsere Piraten Abenteuergeschichten sind für Kinder ab 4 Jahren konzipiert. Die Geschichten sind altersgerecht spannend gestaltet und können bis ins Grundschulalter (ca. 10 Jahre) vorgelesen werden. Jüngere Kinder profitieren besonders vom gemeinsamen Vorlesen und der aufregenden Atmosphäre."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert das Vorlesen einer Piratengeschichte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die meisten unserer Piratengeschichten haben eine Vorlesedauer von etwa 7-10 Minuten. Diese Länge ist ideal für das Vorlesen am Nachmittag oder als Abendritual, da sie spannend genug ist für ein Abenteuer, aber nicht zu lang für die Aufmerksamkeitsspanne von Kindern."
        }
      }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <li>
                <a href="/lesewelt/abenteuergeschichten" className="hover:opacity-80 transition" style={{ color: '#f77f00' }}>
                  Abenteuergeschichten
                </a>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">›</span>
              </li>
              <li aria-current="page">
                <span className="text-gray-900">Piraten Abenteuer</span>
              </li>
            </ol>
          </nav>

          {/* Header mit Intro */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#f77f00' }}>
              🏴‍☠️ Piraten Abenteuergeschichten für Kinder
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-4">
                Entdecke aufregende <strong>Piraten Abenteuergeschichten</strong>, die kleine Seefahrer
                auf spannende Reisen über die Weltmeere mitnehmen. Mutige Piraten, geheimnisvolle Schätze
                und lustige Erlebnisse auf hoher See – hier finden Kinder die perfekten Piratengeschichten
                zum Vorlesen und Selberlesen.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Piratengeschichten für Kinder sind besonders beliebt bei kleinen Abenteurern, die das Meer
                lieben. Die Geschichten vermitteln wichtige Werte wie Mut, Freundschaft und Teamwork – perfekt
                für das Vorlesen am Nachmittag oder als spannendes Abendritual.
              </p>
            </div>
          </header>

          {/* Story Grid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Unsere Piraten Abenteuergeschichten
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Story 1 - Pete */}
              <a
                href="/lesewelt/abenteuergeschichten/pete-der-lachende-piraten-papagei"
                className="block group"
              >
                <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all h-full">
                  <div className="flex flex-col h-full">
                    <div className="text-6xl mb-4 text-center">🦜🏴‍☠️</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:opacity-80 transition" style={{ color: '#f77f00' }}>
                      Pete der lachende Piraten Papagei
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Pete, der bunte Papagei, segelt mit Kapitän Rotbart auf Schatzsuche.
                      Eine lustige Geschichte über Freundschaft und wahre Schätze.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div>👶 Ab 4 Jahren</div>
                      <div>⏱️ 8 Min. Lesezeit</div>
                      <div>😄 Lustig & Lehrreich</div>
                    </div>
                    <span className="font-medium group-hover:underline" style={{ color: '#f77f00' }}>
                      Jetzt lesen →
                    </span>
                  </div>
                </article>
              </a>

              {/* Story 2 - Placeholder */}
              <div className="block">
                <article className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-6 h-full border-2 border-dashed border-gray-300">
                  <div className="flex flex-col h-full">
                    <div className="text-6xl mb-4 text-center opacity-50">⚓🗺️</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-500">
                      Käpt'n Blaubart und die Schatzkarte
                    </h3>
                    <p className="text-gray-500 mb-4 flex-grow">
                      Eine spannende Geschichte über einen mutigen Kapitän und seine Crew
                      auf der Suche nach dem legendären Goldschatz.
                    </p>
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <div>👶 Ab 4 Jahren</div>
                      <div>⏱️ 9 Min. Lesezeit</div>
                    </div>
                    <span className="text-gray-400 font-medium italic">
                      Bald verfügbar
                    </span>
                  </div>
                </article>
              </div>

              {/* Story 3 - Placeholder */}
              <div className="block">
                <article className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-6 h-full border-2 border-dashed border-gray-300">
                  <div className="flex flex-col h-full">
                    <div className="text-6xl mb-4 text-center opacity-50">🏴‍☠️💎</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-500">
                      Die Pirateninsel
                    </h3>
                    <p className="text-gray-500 mb-4 flex-grow">
                      Auf einer geheimnisvollen Insel warten nicht nur Schätze, sondern auch
                      neue Freunde und aufregende Abenteuer.
                    </p>
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <div>👶 Ab 5 Jahren</div>
                      <div>⏱️ 10 Min. Lesezeit</div>
                    </div>
                    <span className="text-gray-400 font-medium italic">
                      Bald verfügbar
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Krümmelbrandt Produktbox */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-12 border-2 shadow-lg" style={{ borderColor: '#f77f00' }}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <a
                  href="https://fluxie.de/produkt/kruemelbrandt-der-backdrache/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://fluxie.de/wp-content/uploads/2025/08/6-768x768.png"
                    alt="Krümmelbrandt der Backdrache - Fluxie Lesekarte"
                    className="w-48 h-48 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#f77f00' }}>
                  Noch mehr Abenteuer mit Krümmelbrandt
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Krümmelbrandt der Backdrache erlebt ebenfalls spannende Abenteuer! Eine zauberhafte Geschichte
                  über einen kleinen Drachen, der lieber backt als Feuer speit. Perfekt für alle kleinen Abenteurer!
                </p>
                <a
                  href="https://fluxie.de/produkt/kruemelbrandt-der-backdrache/"
                  className="inline-block bg-fluxie-orange hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Krümmelbrandt entdecken →
                </a>
              </div>
            </div>
          </div>

          {/* Content-Block mit H3-Subsections */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Piratengeschichten für Kinder – Mehr als nur Unterhaltung
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              {/* H3: Warum Piratengeschichten Kinder faszinieren */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Warum Piratengeschichten Kinder faszinieren
                </h3>
                <p className="leading-relaxed">
                  Piraten Abenteuergeschichten haben eine besondere Anziehungskraft auf Kinder. Die Vorstellung
                  von Freiheit auf dem Meer, verborgenen Schätzen und mutigen Seefahrern weckt die Abenteuerlust
                  in jedem Kind. Piratengeschichten kombinieren Spannung mit Humor und vermitteln dabei wichtige
                  Werte wie Mut, Zusammenhalt und Cleverness. Die bunten Charaktere, von lustigen Papageien bis
                  zu weisen Kapitänen, machen jede Geschichte zu einem einzigartigen Erlebnis.
                </p>
              </div>

              {/* H3: Mut und Selbstvertrauen entwickeln */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Mut und Selbstvertrauen durch Piratengeschichten
                </h3>
                <p className="leading-relaxed">
                  Piratengeschichten für Kinder sind wertvolle Werkzeuge zur Entwicklung von Mut und Selbstvertrauen.
                  Durch die Identifikation mit mutigen Piraten lernen Kinder, dass Herausforderungen gemeistert
                  werden können. Die Geschichten zeigen, dass es normal ist, manchmal Angst zu haben, aber dass
                  man diese überwinden kann. Kinder sehen, wie Piratenhelden Probleme kreativ lösen und dabei
                  nie aufgeben – eine wichtige Lektion fürs Leben.
                </p>
              </div>

              {/* H3: Teamwork und Freundschaft */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Teamwork und Freundschaft auf hoher See
                </h3>
                <p className="leading-relaxed">
                  Auf einem Piratenschiff muss jeder zusammenarbeiten. Piraten Abenteuergeschichten vermitteln
                  Kindern, wie wichtig Teamwork und Freundschaft sind. Die Crew muss zusammenhalten, einander
                  vertrauen und gemeinsam Herausforderungen meistern. Diese Geschichten zeigen, dass man zusammen
                  stärker ist und dass echte Freunde füreinander einstehen. Kinder lernen, dass Zusammenhalt
                  oft wichtiger ist als individueller Erfolg.
                </p>
              </div>

              {/* H3: Fantasie und Kreativität fördern */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Fantasie und Kreativität anregen
                </h3>
                <p className="leading-relaxed">
                  Die Welt der Piraten ist voller Möglichkeiten für kreatives Denken. Geheimnisvolle Inseln,
                  versteckte Schätze, sprechende Papageien – Piratengeschichten für Kinder öffnen Türen zu
                  fantastischen Welten. Diese Geschichten regen die Vorstellungskraft an und ermutigen Kinder,
                  ihre eigenen Abenteuer zu erfinden. Das Nachspielen von Piratenabenteuern fördert zudem die
                  soziale Interaktion und das Rollenspiel.
                </p>
              </div>

              {/* H3: Problemlösungsfähigkeiten entwickeln */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Problemlösungsfähigkeiten entwickeln
                </h3>
                <p className="leading-relaxed">
                  Piraten müssen oft clevere Lösungen für knifflige Situationen finden. Ob es darum geht,
                  eine Schatzkarte zu entziffern oder einen Sturm zu überstehen – Piraten Abenteuergeschichten
                  zeigen Kindern, wie man kreativ denkt und Probleme löst. Diese Fähigkeiten sind nicht nur
                  in Geschichten wichtig, sondern auch im echten Leben. Kinder lernen, dass es für jedes
                  Problem eine Lösung gibt, wenn man nur clever genug darüber nachdenkt.
                </p>
              </div>

              {/* H3: Humor und Leichtigkeit */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Humor und Leichtigkeit in Piratengeschichten
                </h3>
                <p className="leading-relaxed">
                  Gute Piratengeschichten für Kinder sind nicht nur spannend, sondern auch lustig. Humorvolle
                  Charaktere wie plappernde Papageien, tollpatschige Matrosen oder Kapitäne mit lustigen
                  Macken sorgen für Unterhaltung und Spaß. Lachen ist ein wichtiger Bestandteil des Lernens,
                  und Geschichten, die Kinder zum Lachen bringen, bleiben ihnen besonders lange in Erinnerung.
                  Der Humor macht die Geschichten leicht verdaulich und sorgt für positive Emotionen.
                </p>
              </div>

              {/* H3: Werte vermitteln */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Wichtige Werte durch Piratengeschichten vermitteln
                </h3>
                <p className="leading-relaxed">
                  Moderne Piraten Abenteuergeschichten für Kinder vermitteln positive Werte. Ehrlichkeit,
                  Loyalität, Hilfsbereitschaft und Fairness stehen im Mittelpunkt vieler Piratengeschichten.
                  Kinder lernen, dass wahre Schätze nicht aus Gold bestehen, sondern aus Freundschaft,
                  Zusammenhalt und gemeinsamen Erlebnissen. Diese Botschaften prägen die Wertvorstellungen
                  von Kindern und helfen ihnen, zu empathischen und sozialen Menschen heranzuwachsen.
                </p>
              </div>

              {/* H3: Praktische Tipps für Eltern */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Tipps für das Vorlesen von Piratengeschichten
                </h3>
                <p className="leading-relaxed">
                  Machen Sie das Vorlesen zum Abenteuer! Verwenden Sie verschiedene Stimmen für Kapitäne,
                  Papageien und Matrosen. Bauen Sie Spannung auf, indem Sie in aufregenden Momenten langsamer
                  lesen. Lassen Sie Ihr Kind mitraten: "Was würdest du jetzt tun?" Verwenden Sie Requisiten
                  wie ein Stofftier-Papagei oder ein Piratenhut. Nach der Geschichte können Sie gemeinsam
                  eine Schatzkarte malen oder ein Piratenabenteuer nachspielen. So wird das Vorleseerlebnis
                  noch intensiver und unvergesslicher.
                </p>
              </div>

              {/* Abschluss-Paragraph */}
              <div className="pt-4 border-t border-gray-200">
                <p className="leading-relaxed font-medium">
                  Piraten Abenteuergeschichten sind wertvolle Begleiter in der Kindheit. Sie unterhalten nicht
                  nur, sondern fördern auch wichtige Fähigkeiten und Werte. Das gemeinsame Vorlesen stärkt die
                  Bindung zwischen Eltern und Kindern und schafft schöne Erinnerungen. Die spannenden Geschichten
                  über mutige Seefahrer, geheimnisvolle Schätze und treue Freundschaften begleiten Kinder oft
                  ihr ganzes Leben lang und wecken vielleicht sogar eine lebenslange Liebe zum Lesen und zu
                  Abenteuern.
                </p>
              </div>
            </div>
          </section>

          {/* Tipps-Sektion */}
          <section className="mb-12 bg-orange-50 rounded-xl p-8 border-2 border-orange-100">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#f77f00' }}>
              💡 Tipps zum Vorlesen von Piratengeschichten
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Piratenstimme verwenden:</strong> Sprechen Sie mit rauer Piratenstimme – "Ahoi, Landratten!"</li>
              <li>✓ <strong>Requisiten einsetzen:</strong> Ein Piratenhut oder Augenklappe machen das Vorlesen noch lebendiger</li>
              <li>✓ <strong>Spannung aufbauen:</strong> Lesen Sie in spannenden Momenten langsamer und machen Sie Pausen</li>
              <li>✓ <strong>Interaktiv gestalten:</strong> Lassen Sie Ihr Kind Papageien-Geräusche machen oder Piratenlieder singen</li>
              <li>✓ <strong>Nachspielen:</strong> Nach der Geschichte können Sie gemeinsam auf Schatzsuche im Haus gehen</li>
            </ul>
          </section>

          {/* FAQ-Sektion */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Häufig gestellte Fragen
            </h2>

            <div className="space-y-6">
              {/* Frage 1 */}
              <div className="border-l-4 pl-4" style={{ borderLeftColor: '#f77f00' }}>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Warum sind Piratengeschichten gut für Kinder?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Piratengeschichten fördern Mut, Abenteuerlust und Problemlösungsfähigkeiten bei Kindern.
                  Sie vermitteln wichtige Werte wie Teamwork, Freundschaft und Cleverness. Die spannenden
                  Geschichten regen die Fantasie an und helfen Kindern, selbstbewusster zu werden.
                </p>
              </div>

              {/* Frage 2 */}
              <div className="border-l-4 pl-4" style={{ borderLeftColor: '#f77f00' }}>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Ab welchem Alter sind Piratengeschichten geeignet?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Unsere Piraten Abenteuergeschichten sind für Kinder ab 4 Jahren konzipiert. Die Geschichten
                  sind altersgerecht spannend gestaltet und können bis ins Grundschulalter (ca. 10 Jahre)
                  vorgelesen werden. Jüngere Kinder profitieren besonders vom gemeinsamen Vorlesen und der
                  aufregenden Atmosphäre.
                </p>
              </div>

              {/* Frage 3 */}
              <div className="border-l-4 pl-4" style={{ borderLeftColor: '#f77f00' }}>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Wie lange dauert das Vorlesen einer Piratengeschichte?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die meisten unserer Piratengeschichten haben eine Vorlesedauer von etwa 7-10 Minuten. Diese
                  Länge ist ideal für das Vorlesen am Nachmittag oder als Abendritual, da sie spannend genug
                  ist für ein Abenteuer, aber nicht zu lang für die Aufmerksamkeitsspanne von Kindern.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
