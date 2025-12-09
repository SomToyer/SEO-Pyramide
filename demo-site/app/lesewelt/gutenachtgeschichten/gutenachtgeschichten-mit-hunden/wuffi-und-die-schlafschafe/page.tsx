import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wuffi und die Schlafschafe – Lustige Hundegeschichte zum Einschlafen | Fluxie',
  description: 'Wuffi will der beste Schlafschaf-Champion werden ✓ Lustige Gutenachtgeschichte mit Hund ✓ 5 Min. Lesezeit ✓ Perfekt für Kinder ab 3 Jahren ➤ Jetzt lesen!',
  openGraph: {
    title: 'Wuffi und die Schlafschafe – Lustige Hundegeschichte zum Einschlafen',
    description: 'Eine lustige Gutenachtgeschichte über Wuffi, den kleinen Hund, der lernt, dass Stillsitzen gar nicht so einfach ist. Perfekt zum Vorlesen!',
    url: 'https://fluxie.de/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden/wuffi-und-die-schlafschafe',
    siteName: 'Fluxie',
    locale: 'de_DE',
    type: 'article',
    images: [
      {
        url: 'https://fluxie.de/images/wuffi-schlafschafe-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Wuffi und die Schlafschafe - Gutenachtgeschichte'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wuffi und die Schlafschafe – Lustige Hundegeschichte',
    description: 'Eine lustige Gutenachtgeschichte über Wuffi, den kleinen Hund, der lernt, dass Stillsitzen gar nicht so einfach ist.',
    images: ['https://fluxie.de/images/wuffi-schlafschafe-og.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://fluxie.de/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden/wuffi-und-die-schlafschafe'
  }
}

export default function WuffiUndDieSchlafschafePage() {
  // Schema.org JSON-LD Strukturierte Daten
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Wuffi und die Schlafschafe",
    "description": "Eine lustige Gutenachtgeschichte über Wuffi, den kleinen Hund, der lernt, dass Stillsitzen gar nicht so einfach ist.",
    "image": "https://fluxie.de/images/wuffi-schlafschafe-og.jpg",
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
    "articleSection": "Gutenachtgeschichten",
    "keywords": "Gutenachtgeschichte Hund, Wuffi, Hundegeschichte für Kinder, Einschlafgeschichte, Vorlesegeschichte",
    "wordCount": 450,
    "timeRequired": "PT5M",
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 3,
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
        "name": "Gutenachtgeschichten",
        "item": "https://fluxie.de/lesewelt/gutenachtgeschichten"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Gutenachtgeschichten mit Hunden",
        "item": "https://fluxie.de/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Wuffi und die Schlafschafe",
        "item": "https://fluxie.de/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden/wuffi-und-die-schlafschafe"
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

      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
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
              <li>
                <a href="/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden" className="hover:text-purple-600">
                  Mit Hunden
                </a>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">›</span>
              </li>
              <li aria-current="page">
                <span className="text-gray-900">Wuffi und die Schlafschafe</span>
              </li>
            </ol>
          </nav>

          {/* Artikel-Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600">
              🐕💤 Wuffi und die Schlafschafe
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📖 Lesezeit: 5 Minuten</span>
              <span>•</span>
              <span>👶 Ab 3 Jahren</span>
              <span>•</span>
              <span>🌙 Gutenachtgeschichte</span>
            </div>
          </header>

          {/* ★ Story-Bild (wie wunschturmkinder) */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://wunschturmkinder.de/wp-content/uploads/2025/02/wuffi_001.jpg"
              alt="Wuffi und die Schlafschafe - Gutenachtgeschichte Illustration"
              className="w-full h-auto"
              width={800}
              height={1200}
              loading="eager"
            />
          </div>

          {/* Teaser */}
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8 rounded-r-lg">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              Wuffi, der kleine zottelige Hund, will der beste Schlafschaf-Champion werden.
              Doch Stillsitzen ist gar nicht so einfach! Eine lustige und beruhigende
              Gutenachtgeschichte über einen quirligen Hund und seine Schaf-Freunde.
            </p>
          </div>

          {/* Story-Text */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              Es ist ein wunderschöner Frühlingstag in den Bergen. Die Sonne kitzelt die Grashalme,
              bunte Blumen wiegen sich im Wind, und über allem schwebt der süße Duft von Wildkräutern.
              Wuffi, der kleine zottelige Hund mit dem buschigen Schwanz und den lustigen Schlappohren,
              rennt aufgeregt den Hügel hinauf.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Juhu! Endlich ist der Winter vorbei!"</strong>, bellt er fröhlich. Seine Pfoten trommeln auf
              den weichen Boden, und seine schwarzen Ohren flattern wie kleine Fähnchen im Wind.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Oben auf der Bergwiese warten schon seine besten Freunde: sechs kuschelige Schafe mit
              klugen Augen und freundlichen Gesichtern. Ihre weiße Wolle glänzt in der Sonne wie
              frisch gefallener Schnee.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Määäähh!"</strong>, ruft das kleinste Schaf begeistert. <strong>"Wuffi, du kommst genau richtig!
              Wir haben gerade eine tolle Idee für ein neues Spiel!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Wuffis braune Augen leuchten vor Aufregung. <strong>"Ein neues Spiel? Oh ja, ich liebe neue Spiele!"</strong>,
              ruft er und macht vor Freude einen Luftsprung. Seine Pfoten zappeln wild, und sein Schwanz
              wedelt wie ein kleiner Propeller.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Wir sind die Schlafschafe"</strong>, erklärt das größte Schaf mit wichtiger Stimme. <strong>"Wer am längsten
              die Augen geschlossen halten kann, ohne zu blinzeln oder zu zappeln, ist der Champion!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Wuffi plumpst ins weiche Gras und versucht, ganz würdevoll auszusehen. Seine Schnauze
              zuckt vor Aufregung.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Das ist ja supereinfach!"</strong>, prahlt er. <strong>"Ich werde der beste Schlafschaf-Champion aller Zeiten!
              Ich kann stillsitzen wie eine Statue!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Die Schafe verstecken ihr Kichern hinter ihren Wolllocken. Sie kennen ihren quirligen Freund
              gut genug, um zu wissen, dass Stillsitzen nicht gerade seine Stärke ist.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Na dann"</strong>, sagt das dickste Schaf und räuspert sich feierlich. <strong>"Alle Augen zu... und... START!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Wuffi kneift seine Augen ganz fest zusammen. Seine Ohren zucken wie verrückt. Seine Nase
              kribbelt. Sein Schwanz will unbedingt wedeln. In seinem Kopf tanzen tausend Gedanken:
              An Schmetterlinge, die er jagen könnte, an Stöckchen, die auf ihn warten, an all die
              aufregenden Abenteuer...
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Ruhe bewahren!"</strong>, flüstert das älteste Schaf sanft. <strong>"Denk an etwas Ruhiges, wie eine
              schlafende Blume."</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Aber da! Ein geheimnisvolles Rascheln im Gras! Und was ist das? Ein frecher Schmetterling
              landet direkt auf Wuffis Nase! Seine Flügel kitzeln wie kleine Federn.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Ich... ich... ich muss... HATSCHIIII!"</strong> Wuffis Nieser ist so gewaltig, dass die Gänseblümchen
              ihre Köpfe schütteln und der Schmetterling erschrocken davonflattert.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Die Schafe prusten los vor Lachen. Wuffi schüttelt sich, bis sein Fell in alle Richtungen steht,
              und stimmt in das Gelächter ein.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Okay, okay"</strong>, gibt er zu und grinst verlegen. <strong>"Vielleicht bin ich nicht das beste Schlafschaf.
              Aber dafür bin ich das allerbeste Spielschaf!"</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Den ganzen wundervollen Nachmittag lang toben sie zusammen über die Frühlingswiese, jagen
              bunte Schmetterlinge, rollen den Hang hinunter und erfinden neue, wilde Spiele.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>"Das ist tausendmal besser als Stillsitzen"</strong>, bellt Wuffi glücklich, während Grashalme aus
              seinem zotteligen Fell schauen. Die Schafe schmiegen sich an ihn und blöken zustimmend.
              Manchmal ist es eben am schönsten, einfach man selbst zu sein.
            </p>
          </div>

          {/* ★ PRODUKTBOX mit echtem Bild - NACH der Geschichte */}
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
                    alt="Fluxie Pionierset - Starter-Set mit 3 Lesekarten"
                    className="w-56 h-56 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-700 mb-3">
                  Geschichten wie Wuffi interaktiv erleben
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Mit dem Fluxie Pionierset können Kinder Geschichten eigenständig erleben –
                  wie Tonies, aber fürs Lesen! Perfekt für Leseanfänger ab 5 Jahren.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>✓ 3 Lesekarten enthalten</span>
                  <span>•</span>
                  <span>✓ Inkl. Lesegerät</span>
                </div>
                <a
                  href="https://fluxie.de/produkt/pionierset/"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pionierset entdecken →
                </a>
              </div>
            </div>
          </div>

          {/* Zurück-Button */}
          <div className="mb-12">
            <a
              href="/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
            >
              ← Zurück zu allen Hundegeschichten
            </a>
          </div>

          {/* Verwandte Geschichten */}
          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Das könnte dir auch gefallen
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden"
                className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-3">🐕✨</div>
                <h3 className="font-bold text-purple-600 mb-2">Mehr Hundegeschichten</h3>
                <p className="text-sm text-gray-600">Entdecke alle Gutenachtgeschichten mit Hunden</p>
              </a>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-dashed border-gray-300">
                <div className="text-5xl mb-3 opacity-50">🐶🌙</div>
                <h3 className="font-bold text-gray-500 mb-2">Bello träumt</h3>
                <p className="text-sm text-gray-400 italic">Bald verfügbar</p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-dashed border-gray-300">
                <div className="text-5xl mb-3 opacity-50">💤🐕</div>
                <h3 className="font-bold text-gray-500 mb-2">Schnuffel ist müde</h3>
                <p className="text-sm text-gray-400 italic">Bald verfügbar</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
