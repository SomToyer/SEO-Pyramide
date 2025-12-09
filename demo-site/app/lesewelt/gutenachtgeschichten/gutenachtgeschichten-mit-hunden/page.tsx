import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gutenachtgeschichten mit Hunden – Hundegeschichten zum Einschlafen | Fluxie',
  description: 'Liebevolle Gute Nacht Geschichten mit Hunden ✓ Perfekt zum Vorlesen ✓ Mit süßen Hundewelpen ✓ Kostenlose Einschlafgeschichten ➤ Jetzt entdecken!',
  openGraph: {
    title: 'Gutenachtgeschichten mit Hunden – Hundegeschichten zum Einschlafen | Fluxie',
    description: 'Liebevolle Gute Nacht Geschichten mit Hunden ✓ Perfekt zum Vorlesen ✓ Mit süßen Hundewelpen ✓ Kostenlose Einschlafgeschichten',
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
    description: 'Liebevolle Gute Nacht Geschichten mit Hunden ✓ Perfekt zum Vorlesen ✓ Mit süßen Hundewelpen',
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Warum sind Hundegeschichten gut zum Einschlafen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hundegeschichten wirken besonders beruhigend auf Kinder, da Hunde als treue und vertraute Begleiter wahrgenommen werden. Die Geschichten vermitteln Geborgenheit und Sicherheit, was den Übergang in den Schlaf erleichtert. Zudem sind die Abenteuer mit Hunden meist nicht zu aufregend, sondern schaffen eine entspannte Atmosphäre."
        }
      },
      {
        "@type": "Question",
        "name": "Ab welchem Alter sind Hundegeschichten geeignet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unsere Gutenachtgeschichten mit Hunden sind für Kinder ab 3 Jahren konzipiert. Die Geschichten sind altersgerecht gestaltet und können bis ins Grundschulalter (ca. 10 Jahre) vorgelesen werden. Jüngere Kinder profitieren besonders vom gemeinsamen Vorlesen und der beruhigenden Atmosphäre."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert das Vorlesen einer Hundegeschichte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die meisten unserer Hundegeschichten haben eine Vorlesedauer von etwa 5-7 Minuten. Diese Länge ist ideal für das abendliche Ritual, da sie lang genug ist, um eine Geschichte zu erzählen, aber kurz genug, um das Kind nicht zu überfordern oder den Einschlafprozess zu verzögern."
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

          {/* Header mit Intro */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-600">
              🐕 Gutenachtgeschichten mit Hunden
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-4">
                Entdecke herzerwärmende <strong>Gutenachtgeschichten mit Hunden</strong>, die Kinder
                sanft in den Schlaf begleiten. Treue Vierbeiner, liebevolle Abenteuer und beruhigende
                Erzählungen schaffen die perfekte Atmosphäre für einen erholsamen Schlaf und süße Hundeträume.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Hundegeschichten zum Einschlafen sind besonders beliebt bei Kindern, die Tiere lieben.
                Die Geschichten vermitteln wichtige Werte wie Freundschaft, Treue und Geborgenheit – perfekt
                für das abendliche Vorleseritual.
              </p>
            </div>
          </header>

          {/* ★ STORY GRID - Position 3 (direkt nach Intro!) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Unsere Hundegeschichten zum Einschlafen
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Story 1 - Real */}
              <a
                href="/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden/wuffi-und-die-schlafschafe"
                className="block group"
              >
                <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all h-full">
                  <div className="flex flex-col h-full">
                    <div className="text-6xl mb-4 text-center">🐕💤</div>
                    <h3 className="text-xl font-bold mb-3 text-purple-600 group-hover:text-purple-700">
                      Wuffi und die Schlafschafe
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Wuffi, der kleine zottelige Hund, will der beste Schlafschaf-Champion werden.
                      Eine lustige Geschichte über Ruhe und Geduld.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div>👶 Ab 3 Jahren</div>
                      <div>⏱️ 5 Min. Lesezeit</div>
                      <div>😴 Perfekt zum Einschlafen</div>
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Jetzt lesen →
                    </span>
                  </div>
                </article>
              </a>

              {/* Story 2 - Placeholder */}
              <div className="block">
                <article className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-6 h-full border-2 border-dashed border-gray-300">
                  <div className="flex flex-col h-full">
                    <div className="text-6xl mb-4 text-center opacity-50">🐶✨</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-500">
                      Bello träumt
                    </h3>
                    <p className="text-gray-500 mb-4 flex-grow">
                      Eine zauberhafte Geschichte über Bellos traumhafte Abenteuer im Hundeschlaf.
                    </p>
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <div>👶 Ab 3 Jahren</div>
                      <div>⏱️ 5 Min. Lesezeit</div>
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
                    <div className="text-6xl mb-4 text-center opacity-50">🐕🌙</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-500">
                      Schnuffel ist müde
                    </h3>
                    <p className="text-gray-500 mb-4 flex-grow">
                      Schnuffel, der kleine Welpe, erlebt seinen ersten aufregenden Tag und lernt,
                      wie schön Schlaf sein kann.
                    </p>
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <div>👶 Ab 3 Jahren</div>
                      <div>⏱️ 6 Min. Lesezeit</div>
                    </div>
                    <span className="text-gray-400 font-medium italic">
                      Bald verfügbar
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* ★ PRODUKTBOX - Position 4 (nach Stories!) */}
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

          {/* Content-Block mit H3-Subsections (wie wunschturmkinder) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Gute Nacht Geschichten mit Hunden – Mehr als nur Einschlafhilfe
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              {/* H3: Warum Hunde-Geschichten beim Einschlafen so wertvoll sind */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Warum Hunde-Geschichten beim Einschlafen so wertvoll sind
                </h3>
                <p className="leading-relaxed">
                  Gute Nacht Geschichten mit Hunden haben eine ganz besondere Magie, die Kindern den Weg
                  in den Schlaf erleichtert. Diese herzerwärmenden Erzählungen über treue Vierbeiner schaffen
                  nicht nur eine beruhigende Atmosphäre, sondern fördern auch die emotionale Entwicklung der Kleinen.
                  Hunde sind als Protagonisten besonders geeignet, da sie als loyale Freunde bekannt sind und
                  Kindern ein starkes Gefühl von Geborgenheit und Sicherheit vermitteln.
                </p>
              </div>

              {/* H3: Die entwicklungsfördernden Aspekte */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Die entwicklungsfördernden Aspekte von Hunde-Geschichten
                </h3>
                <p className="leading-relaxed">
                  Geschichten über Hunde bieten zahlreiche positive Effekte für die kindliche Entwicklung.
                  Durch die Abenteuer der pelzigen Helden lernen Kinder wichtige soziale Werte wie Freundschaft,
                  Mitgefühl und Verantwortungsbewusstsein kennen. Die Perspektive eines Hundes ermöglicht es
                  den Kleinen, die Welt aus einem anderen Blickwinkel zu betrachten und ihr Einfühlungsvermögen
                  zu stärken. Diese Geschichten fördern zudem die Sprachentwicklung und erweitern den kindlichen Wortschatz.
                </p>
              </div>

              {/* H3: Emotionale Bindung zu Tieren stärken */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Emotionale Bindung zu Tieren stärken
                </h3>
                <p className="leading-relaxed">
                  Kinder, die regelmäßig Hundegeschichten hören, entwickeln oft eine besondere Verbindung zu Tieren.
                  Sie lernen, dass Hunde Gefühle haben, Zuneigung zeigen und echte Freunde sein können. Diese
                  Erkenntnis fördert nicht nur den respektvollen Umgang mit Tieren, sondern stärkt auch die
                  emotionale Intelligenz der Kinder. Viele Kinder fühlen sich den pelzigen Charakteren besonders
                  nah und können sich gut in deren Situationen hineinversetzen.
                </p>
              </div>

              {/* H3: Die perfekte Einschlaf-Routine */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Die perfekte Einschlaf-Routine mit Hunde-Geschichten
                </h3>
                <p className="leading-relaxed">
                  Eine regelmäßige Vorleseroutine mit Hunde-Geschichten hilft Kindern, zur Ruhe zu kommen und
                  sich auf die Nachtruhe einzustimmen. Die gleichmäßige Stimme der Eltern, kombiniert mit den
                  sanften Abenteuern der Hundehelden, schafft eine entspannte Atmosphäre. Dies unterstützt den
                  natürlichen Übergang vom aktiven Tag in die erholsame Nachtruhe. Das tägliche Ritual gibt
                  Kindern zudem Struktur und Sicherheit, was das Einschlafen erheblich erleichtert.
                </p>
              </div>

              {/* H3: Fantasie und Kreativität fördern */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Fantasie und Kreativität fördern
                </h3>
                <p className="leading-relaxed">
                  Hunde-Geschichten regen die kindliche Fantasie besonders an. Die Vorstellung, wie ein Hund
                  die Welt wahrnimmt, welche Abenteuer er erlebt und wie er Probleme löst, ermutigt Kinder,
                  ihre eigene Kreativität zu entfalten. Diese imaginativen Erlebnisse bereichern nicht nur den
                  Wortschatz, sondern fördern auch das abstrakte Denken. Kinder können sich in die Rolle des
                  Hundes hineinversetzen und lernen, Situationen aus verschiedenen Perspektiven zu betrachten.
                </p>
              </div>

              {/* H3: Ängste abbauen und Selbstvertrauen stärken */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Ängste abbauen und Selbstvertrauen stärken
                </h3>
                <p className="leading-relaxed">
                  Viele Kinder haben Schwierigkeiten beim Einschlafen oder Angst vor der Dunkelheit. Geschichten
                  über mutige Hunde, die ihre eigenen Ängste überwinden, können Kindern als positive Vorbilder dienen.
                  Die Identifikation mit einem starken, aber dennoch verletzlichen Hundehelden hilft ihnen, ihre
                  eigenen Sorgen zu bewältigen und mehr Selbstvertrauen zu entwickeln. Die Geschichten zeigen, dass
                  es normal ist, manchmal Angst zu haben – und dass man diese überwinden kann.
                </p>
              </div>

              {/* H3: Die Bedeutung der Mensch-Tier-Beziehung */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Die Bedeutung der Mensch-Tier-Beziehung
                </h3>
                <p className="leading-relaxed">
                  Durch Gute Nacht Geschichten mit Hunden lernen Kinder die besondere Beziehung zwischen Mensch
                  und Tier kennen. Sie verstehen, dass Tiere Gefühle haben, Zuneigung zeigen können und treue
                  Begleiter sind. Diese Erkenntnis fördert nicht nur den respektvollen Umgang mit Tieren, sondern
                  stärkt auch das Verantwortungsbewusstsein und die emotionale Intelligenz der Kinder. Die Geschichten
                  vermitteln, wie wertvoll und bereichernd die Freundschaft zwischen Kindern und Hunden sein kann.
                </p>
              </div>

              {/* H3: Praktische Tipps für Eltern */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Praktische Tipps für das Vorlesen von Hunde-Geschichten
                </h3>
                <p className="leading-relaxed">
                  Das Vorlesen kann durch verschiedene Elemente noch spannender gestaltet werden. Eine variierte
                  Stimme für verschiedene Charaktere, sanfte Geräusche wie ein leises Bellen oder Hecheln, oder das
                  Einbinden von Kuscheltieren machen das Vorleseerlebnis noch intensiver. Dabei sollte die Geschichte
                  jedoch nicht zu aufregend sein, um den Einschlafprozess nicht zu stören. Die ruhige, gleichmäßige
                  Vorlesestimme ist der Schlüssel zu einem entspannten Einschlafen.
                </p>
              </div>

              {/* Abschluss-Paragraph */}
              <div className="pt-4 border-t border-gray-200">
                <p className="leading-relaxed font-medium">
                  Gute Nacht Geschichten mit Hunden sind mehr als nur eine Einschlafhilfe. Sie bilden ein wertvolles
                  Ritual, das die Bindung zwischen Eltern und Kindern stärkt, die Entwicklung fördert und positive
                  Erinnerungen schafft. Die friedliche Atmosphäre, die durch diese Geschichten geschaffen wird, bereitet
                  den Weg für einen erholsamen Schlaf und süße Hundeträume. Hunde als treue Begleiter in Geschichten
                  bleiben den Kindern oft noch lange in Erinnerung und können zu lebenslangen positiven Assoziationen
                  mit dem Zubettgehen führen.
                </p>
              </div>
            </div>
          </section>

          {/* Tipps-Sektion (kompakt) */}
          <section className="mb-12 bg-purple-50 rounded-xl p-8 border-2 border-purple-100">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">
              💡 Tipps zum Vorlesen von Hundegeschichten
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Tierlaute einbauen:</strong> Lass Hunde bellen oder hecheln – das macht Spaß und bringt die Geschichte zum Leben!</li>
              <li>✓ <strong>Kuscheltier dazunehmen:</strong> Ein Plüschhund begleitet die Geschichte und wird zum Teil des Rituals</li>
              <li>✓ <strong>Ruhige Stimme:</strong> Lies langsam und beruhigend, besonders zum Ende der Geschichte</li>
              <li>✓ <strong>Über eigene Erfahrungen sprechen:</strong> Kennt dein Kind einen Hund? Verbinde die Geschichte mit Erlebnissen</li>
              <li>✓ <strong>Wiederholung:</strong> Kinder lieben es, ihre Lieblingsgeschichte mehrmals zu hören – das ist völlig normal!</li>
            </ul>
          </section>

          {/* FAQ-Sektion (kurz, 3 Fragen) */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Häufig gestellte Fragen
            </h2>

            <div className="space-y-6">
              {/* Frage 1 */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Warum sind Hundegeschichten gut zum Einschlafen?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Hundegeschichten wirken besonders beruhigend auf Kinder, da Hunde als treue und vertraute
                  Begleiter wahrgenommen werden. Die Geschichten vermitteln Geborgenheit und Sicherheit, was
                  den Übergang in den Schlaf erleichtert. Zudem sind die Abenteuer mit Hunden meist nicht zu
                  aufregend, sondern schaffen eine entspannte Atmosphäre.
                </p>
              </div>

              {/* Frage 2 */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Ab welchem Alter sind Hundegeschichten geeignet?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Unsere Gutenachtgeschichten mit Hunden sind für Kinder ab 3 Jahren konzipiert. Die Geschichten
                  sind altersgerecht gestaltet und können bis ins Grundschulalter (ca. 10 Jahre) vorgelesen werden.
                  Jüngere Kinder profitieren besonders vom gemeinsamen Vorlesen und der beruhigenden Atmosphäre.
                </p>
              </div>

              {/* Frage 3 */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Wie lange dauert das Vorlesen einer Hundegeschichte?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die meisten unserer Hundegeschichten haben eine Vorlesedauer von etwa 5-7 Minuten. Diese Länge
                  ist ideal für das abendliche Ritual, da sie lang genug ist, um eine Geschichte zu erzählen, aber
                  kurz genug, um das Kind nicht zu überfordern oder den Einschlafprozess zu verzögern.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
