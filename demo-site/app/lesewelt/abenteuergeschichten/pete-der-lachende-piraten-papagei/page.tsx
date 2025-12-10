import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Piraten-Abenteuergeschichte: Pete der lachende Papagei | Fluxie',
  description: 'Spannende Piratengeschichte für Kinder ✓ Pete und die Schatzsuche ✓ Abenteuergeschichte mit Papagei ab 4 Jahren ✓ 8 Min. Vorlesegeschichte ➤ Jetzt kostenlos lesen!',
  openGraph: {
    title: 'Piraten-Abenteuergeschichte: Pete der lachende Papagei',
    description: 'Spannende Piratengeschichte für Kinder zum Vorlesen. Pete, der bunte Papagei, erlebt ein aufregendes Schatzabenteuer. Perfekte Abenteuergeschichte ab 4 Jahren!',
    url: 'https://fluxie.de/lesewelt/abenteuergeschichten/pete-der-lachende-piraten-papagei',
    siteName: 'Fluxie',
    locale: 'de_DE',
    type: 'article',
    images: [
      {
        url: 'https://fluxie.de/images/pete-papagei-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Pete der lachende Piraten Papagei - Abenteuergeschichte'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piraten-Abenteuergeschichte: Pete der lachende Papagei',
    description: 'Spannende Piratengeschichte für Kinder zum Vorlesen. Perfekte Abenteuergeschichte ab 4 Jahren!',
    images: ['https://fluxie.de/images/pete-papagei-og.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://fluxie.de/lesewelt/abenteuergeschichten/pete-der-lachende-piraten-papagei'
  }
}

export default function PeteDerLachendePiratenPapageiPage() {
  // Schema.org JSON-LD Strukturierte Daten
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pete der lachende Piraten Papagei",
    "description": "Eine spannende Abenteuergeschichte über Pete, den bunten Papageien, der mit Kapitän Rotbart auf Schatzsuche geht.",
    "image": "https://fluxie.de/images/pete-papagei-og.jpg",
    "author": {
      "@type": "Organization",
      "name": "Fluxie"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fluxie",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fluxie.de/logo.png"
      }
    },
    "datePublished": "2025-01-10",
    "dateModified": "2025-01-10",
    "articleSection": "Abenteuergeschichten",
    "keywords": "Piratengeschichte für Kinder, Abenteuergeschichte mit Papagei, Schatzsuche Geschichte Kinder, Vorlesegeschichte Piraten, Piraten Papagei Geschichte, Pete",
    "wordCount": 650,
    "timeRequired": "PT8M",
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 4,
      "suggestedMaxAge": 10
    },
    "inLanguage": "de-DE"
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
        "name": "Pete der lachende Piraten Papagei",
        "item": "https://fluxie.de/lesewelt/abenteuergeschichten/pete-der-lachende-piraten-papagei"
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
        "name": "Ab welchem Alter eignet sich diese Piratengeschichte für Kinder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diese Abenteuergeschichte mit Papagei ist perfekt für Kinder ab 4 Jahren geeignet. Die spannende, aber nicht zu aufregende Handlung, die Lesezeit von 8 Minuten und die bildliche Erzählweise machen sie ideal für Kindergarten- und Grundschulkinder. Ältere Kinder bis etwa 10 Jahre genießen die Piratengeschichte ebenfalls."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert es, diese Piratengeschichte vorzulesen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Vorlesegeschichte dauert etwa 8 Minuten in normalem Tempo. Das macht sie ideal für das nachmittägliche Vorlesen oder als Abendritual. Mit lebendiger Vorlesestimme und Betonung der spannenden Momente kann sie auch 10 Minuten dauern."
        }
      },
      {
        "@type": "Question",
        "name": "Warum sind Piratengeschichten gut für Kinder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Piratengeschichten für Kinder fördern Mut, Abenteuerlust und Problemlösungsfähigkeiten. Sie vermitteln Werte wie Freundschaft, Zusammenhalt und Cleverness. Pete zeigt, dass man mit Humor und Teamwork jede Herausforderung meistern kann."
        }
      },
      {
        "@type": "Question",
        "name": "Ist die Geschichte zu spannend vor dem Schlafengehen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Geschichte ist spannend, aber nicht übermäßig aufregend. Sie hat ein beruhigendes Ende und ist so gestaltet, dass sie auch abends vorgelesen werden kann. Für besonders sensible Kinder empfiehlt sich das Vorlesen am Nachmittag."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Botschaft vermittelt Pete der lachende Piraten Papagei?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Geschichte vermittelt, dass Lachen und gute Laune auch in schwierigen Situationen helfen. Pete zeigt, dass Freundschaft und Zusammenhalt wichtiger sind als Gold und Schätze. Cleverness und Humor sind oft wertvoller als Kraft."
        }
      },
      {
        "@type": "Question",
        "name": "Gibt es weitere Abenteuergeschichten auf Fluxie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja! In der Rubrik Abenteuergeschichten finden Sie weitere spannende Geschichten für kleine Entdecker zum kostenlosen Vorlesen. Die Sammlung wird regelmäßig um neue Abenteuergeschichten erweitert."
        }
      }
    ]
  }

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
        <article className="max-w-3xl mx-auto">
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
                <span className="text-gray-900">Pete der lachende Piraten Papagei</span>
              </li>
            </ol>
          </nav>

          {/* Artikel-Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#f77f00' }}>
              Pete der lachende Piraten Papagei 🦜
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📖 Lesezeit: 8 Minuten</span>
              <span>•</span>
              <span>👶 Ab 4 Jahren</span>
              <span>•</span>
              <span>🏴‍☠️ Piraten-Abenteuer</span>
            </div>
          </header>

          {/* Teaser */}
          <div className="bg-orange-50 border-l-4 p-6 mb-8 rounded-r-lg" style={{ borderLeftColor: '#f77f00' }}>
            <p className="text-lg text-gray-700 italic leading-relaxed">
              Pete, der bunte Papagei mit dem lustigsten Lachen der Karibik, segelt mit Kapitän Rotbart
              auf Schatzsuche. Doch als sie endlich die geheimnisvolle Schatzinsel erreichen, wartet
              eine Überraschung auf sie! Eine spannende Piratengeschichte über Freundschaft und echte Schätze.
            </p>
          </div>

          {/* Story-Text */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Sonne funkelt auf dem türkisblauen Meer, und das Piratenschiff "Wellenreiter" schaukelt
              sanft auf den Wellen. Auf dem Mast sitzt Pete, ein prächtiger Papagei mit leuchtend roten,
              blauen und gelben Federn. Seine Augen glitzern vor Aufregung.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Kraaaah! Land in Sicht! Land in Sicht!"</strong>, kreischt er fröhlich und flattert
              aufgeregt mit den Flügeln.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Kapitän Rotbart, ein freundlicher Pirat mit einem mächtigen roten Bart, der wie eine
              Flamme im Wind weht, klappt seine alte Schatzkarte zusammen und grinst breit.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Endlich, Pete! Nach drei Wochen auf See haben wir die geheimnisvolle Schatzinsel gefunden!
              Der legendäre Goldschatz von Käpt'n Silberzahn muss hier vergraben sein!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Pete lacht sein typisches Papageien-Lachen: <strong>"Hihihahaha! Schatz, Schatz, bunter Schatz!"</strong>
              Er liebt es, Kapitän Rotbart zum Lachen zu bringen, denn wenn der Kapitän lacht, wackelt sein
              ganzer roter Bart lustig hin und her.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Als das Schiff am weißen Sandstrand anlegt, springen beide an Land. Die Insel ist wunderschön!
              Palmen wiegen sich im Wind, bunte Blumen duften süß, und irgendwo in der Ferne plätschert ein
              Wasserfall.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Laut Karte"</strong>, sagt Kapitän Rotbart und studiert das alte Pergament, <strong>"müssen
              wir drei Schritte nach Norden, dann fünf Schritte nach Osten gehen und bei der großen Palme
              graben!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Pete hopst voraus und zählt laut mit: <strong>"Eins, zwei, drei... Vier, fünf... Sechs, sieben...
              Oh nein, wie viele waren es nochmal?"</strong> Er kichert und fängt wieder von vorne an.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Endlich stehen sie vor einer riesigen Palme. Kapitän Rotbart holt seinen Spaten hervor und
              beginnt zu graben. Pete sitzt auf einem Ast und feuert ihn an: <strong>"Grab, grab, grab!
              Der Schatz ist nah!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <em>KLONK!</em> Der Spaten stößt auf etwas Hartes!
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Eine Schatzkiste!"</strong>, ruft Kapitän Rotbart aufgeregt. Mit vereinten Kräften
              ziehen sie die alte Holztruhe aus dem Sand. Sie ist mit Muscheln und Seesternen verziert.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Pete kann es kaum erwarten: <strong>"Auf, auf, auf! Was ist drin?"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Mit klopfendem Herzen öffnet Kapitän Rotbart die Truhe. Doch anstatt von glitzerndem Gold
              sind sie von... Papageienfedern in allen Farben des Regenbogens geblendet! Darunter liegt
              ein altes Buch mit der Aufschrift: "Die lustigsten Piratenwitze der Karibik".
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Pete schaut verwirrt. Kapitän Rotbart schaut verwirrt. Dann beginnen beide gleichzeitig
              zu lachen! Es ist ein so herzliches, fröhliches Lachen, dass die Palmen im Takt zu wippen
              scheinen.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Hihihahaha! Das ist ja der beste Schatz überhaupt!"</strong>, krächzt Pete und schlägt
              mit den Flügeln vor Freude. <strong>"Käpt'n Silberzahn war also auch ein lustiger Pirat!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Kapitän Rotbart nickt weise und streicht Pete über die bunten Federn. <strong>"Weißt du, Pete,
              ich habe heute etwas Wichtiges gelernt: Der größte Schatz ist nicht Gold oder Silber. Der größte
              Schatz ist ein guter Freund, mit dem man lachen kann!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Und gute Witze!"</strong>, fügt Pete hinzu und blättert aufgeregt im Witzebuch.
              <strong>"Hör mal: Warum tragen Piraten Augenklappen? Weil sie bei den Preisen nur noch mit
              einem Auge hinsehen können! Hihihaha!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Die beiden verbringen den ganzen Nachmittag am Strand, lesen Witze, sammeln bunte Papageienfedern
              und lachen, bis ihnen die Bäuche wehtun. Als die Sonne langsam untergeht und den Himmel in
              Orange und Rosa taucht, segeln sie zufrieden zurück zur "Wellenreiter".
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Das war das beste Abenteuer ever!"</strong>, sagt Pete und kuschelt sich in Kapitän
              Rotbarts Schulter. <strong>"Morgen suchen wir einen neuen Schatz, ja?"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Klar doch, mein kleiner Piratenpapagei"</strong>, lacht Kapitän Rotbart. <strong>"Aber
              denk dran: Der wahre Schatz segelt jeden Tag mit mir auf diesem Schiff!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Und so segeln sie in den Sonnenuntergang, begleitet von Petes fröhlichem Lachen, das über das
              weite Meer hallt: <strong>"Hihihahaha! Piraten-Pete und Kapitän Rotbart – die lustigsten
              Schatzsucher der Karibik!"</strong>
            </p>
          </div>

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
                    className="w-56 h-56 object-contain hover:scale-105 transition-transform duration-300"
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
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>✓ Interaktive Lesekarte</span>
                  <span>•</span>
                  <span>✓ Mit Fluxie-Gerät nutzbar</span>
                </div>
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

          {/* Outro: Warum Piratengeschichten perfekt für Kinder sind */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border-l-4" style={{ borderLeftColor: '#f77f00' }}>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Warum Piratengeschichten perfekt für Kinder sind
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Piratengeschichten für Kinder</strong> wie "Pete der lachende Piraten Papagei" sind
                besonders gut geeignet, um Mut, Abenteuerlust und Problemlösungsfähigkeiten zu fördern.
                Piraten verkörpern Freiheit und Abenteuer – Themen, die Kinder faszinieren und inspirieren.
              </p>
              <p>
                Diese <strong>Abenteuergeschichte mit Papagei</strong> (8 Minuten Lesezeit) kombiniert spannende
                Elemente mit einer wichtigen Botschaft: Wahre Schätze sind Freundschaft und gemeinsames Lachen.
                Pete zeigt, dass Humor und gute Laune wichtiger sind als materieller Reichtum.
              </p>
              <p>
                Als <strong>Vorlesegeschichte für Kinder ab 4 Jahren</strong> eignet sich diese Piratengeschichte
                besonders gut, weil:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Die Sprache lebendig und bildlich ist</li>
                <li>Der Spannungsbogen kindgerecht und nicht zu aufregend verläuft</li>
                <li>Humor und Lachen im Mittelpunkt stehen</li>
                <li>Die Geschichte mit einer positiven Botschaft endet</li>
                <li>Kinder sich mit dem lustigen Pete identifizieren können</li>
              </ul>
              <p>
                <strong>Tipp für Eltern:</strong> Lesen Sie diese <strong>Piratengeschichte</strong> mit verschiedenen
                Stimmen vor – Pete mit hoher, lustiger Stimme und Kapitän Rotbart mit tiefer Piratenstimme. Das macht
                die Geschichte noch lebendiger! Lassen Sie Ihr Kind Petes Lachen nachmachen – das schafft besondere
                Vorlesemomente.
              </p>
            </div>
          </div>

          {/* Zurück-Button */}
          <div className="mb-12">
            <a
              href="/lesewelt/abenteuergeschichten"
              className="inline-flex items-center font-medium hover:opacity-80 transition"
              style={{ color: '#f77f00' }}
            >
              ← Zurück zu allen Abenteuergeschichten
            </a>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Häufig gestellte Fragen zu Piratengeschichten
            </h2>
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#f77f00' }}>
                  Ab welchem Alter eignet sich diese Piratengeschichte für Kinder?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Diese <strong>Abenteuergeschichte mit Papagei</strong> ist perfekt für Kinder <strong>ab 4 Jahren</strong> geeignet.
                  Die spannende, aber nicht zu aufregende Handlung, die Lesezeit von 8 Minuten und die bildliche Erzählweise machen sie
                  ideal für Kindergarten- und Grundschulkinder. Ältere Kinder bis etwa 10 Jahre genießen die Piratengeschichte ebenfalls,
                  besonders wenn sie Abenteuer lieben.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#f77f00' }}>
                  Wie lange dauert es, diese Piratengeschichte vorzulesen?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die <strong>Vorlesegeschichte</strong> dauert etwa <strong>8 Minuten</strong> in normalem Tempo. Das macht sie ideal
                  für das nachmittägliche Vorlesen oder als Abendritual. Mit lebendiger Vorlesestimme, verschiedenen Charakterstimmen
                  und Betonung der spannenden Momente kann sie auch 10 Minuten dauern.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#f77f00' }}>
                  Warum sind Piratengeschichten gut für Kinder?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Piratengeschichten für Kinder</strong> fördern Mut, Abenteuerlust und Problemlösungsfähigkeiten. Sie
                  vermitteln Werte wie Freundschaft, Zusammenhalt und Cleverness. Pete zeigt in dieser Geschichte, dass Humor
                  und Lachen wichtige Fähigkeiten sind und dass wahre Schätze nicht materiell sind. Piratengeschichten regen
                  zudem die Fantasie an und ermutigen Kinder, selbst mutig zu sein.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#f77f00' }}>
                  Ist die Geschichte zu spannend vor dem Schlafengehen?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die Geschichte ist spannend, aber nicht übermäßig aufregend. Sie hat ein beruhigendes, fröhliches Ende und ist
                  so gestaltet, dass sie auch abends vorgelesen werden kann. Für besonders sensible Kinder oder wenn das Kind zu
                  Aufregung neigt, empfiehlt sich das Vorlesen am Nachmittag. Das fröhliche Ende mit Lachen und Freundschaft
                  hinterlässt ein positives Gefühl.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#f77f00' }}>
                  Welche Botschaft vermittelt "Pete der lachende Piraten Papagei"?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die Geschichte vermittelt mehrere wichtige Botschaften: <strong>Lachen und gute Laune helfen auch in
                  schwierigen Situationen.</strong> Pete zeigt, dass Freundschaft und Zusammenhalt wichtiger sind als
                  Gold und Schätze. Die Geschichte lehrt Kinder, dass wahre Werte nicht materiell sind und dass Humor
                  eine wichtige Lebenskompetenz ist. Cleverness und Fröhlichkeit sind oft wertvoller als Reichtum.
                </p>
              </div>

              {/* FAQ 6 */}
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#f77f00' }}>
                  Gibt es weitere Abenteuergeschichten auf Fluxie?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ja! In unserer Rubrik <a href="/lesewelt/abenteuergeschichten" className="font-semibold hover:opacity-80" style={{ color: '#f77f00' }}>
                  "Abenteuergeschichten"</a> finden Sie weitere spannende Geschichten für kleine Entdecker zum kostenlosen
                  Vorlesen. Wir erweitern die Sammlung regelmäßig um neue <strong>Piratengeschichten</strong> und andere
                  Abenteuer, die speziell für das Alter 4-10 Jahre entwickelt wurden. Schauen Sie gerne regelmäßig vorbei!
                </p>
              </div>
            </div>
          </div>

          {/* Verwandte Geschichten */}
          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Das könnte dir auch gefallen
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/lesewelt/abenteuergeschichten"
                className="bg-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-3">⚔️✨</div>
                <h3 className="font-bold mb-2" style={{ color: '#f77f00' }}>Mehr Abenteuergeschichten</h3>
                <p className="text-sm text-gray-600">Entdecke alle spannenden Abenteuergeschichten</p>
              </a>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-dashed border-gray-300">
                <div className="text-5xl mb-3 opacity-50">🏴‍☠️⚓</div>
                <h3 className="font-bold text-gray-500 mb-2">Käpt'n Blaubart</h3>
                <p className="text-sm text-gray-400 italic">Bald verfügbar</p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-dashed border-gray-300">
                <div className="text-5xl mb-3 opacity-50">🗺️💎</div>
                <h3 className="font-bold text-gray-500 mb-2">Die geheimnisvolle Karte</h3>
                <p className="text-sm text-gray-400 italic">Bald verfügbar</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
