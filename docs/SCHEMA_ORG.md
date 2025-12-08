# Schema.org: Strukturierte Daten

Dieses Dokument definiert die Schema.org Strukturen (JSON-LD) für alle Seitentypen.

---

## 📖 Was ist Schema.org?

**Schema.org** ist ein Standard für strukturierte Daten, der von Google, Bing, Yahoo und Yandex unterstützt wird.

**Vorteile:**
- ✅ Rich Snippets in Suchergebnissen
- ✅ Besseres Verständnis des Contents durch Suchmaschinen
- ✅ Höhere Klickraten (CTR)
- ✅ Featured Snippets / Answer Boxes

**Format**: JSON-LD (in `<script type="application/ld+json">`)

---

## 🌐 Organisation (Fluxie)

Auf **jeder Seite** (einmalig):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fluxie",
  "url": "https://fluxie.de",
  "logo": "https://fluxie.de/logo.png",
  "description": "Interaktive Lesekarten für Kinder – wie Tonies, aber fürs Lesen",
  "foundingDate": "2023",
  "founders": [
    {
      "@type": "Person",
      "name": "Christian Gödde"
    },
    {
      "@type": "Person",
      "name": "Richard Fonfara"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/fluxie.de",
    "https://www.facebook.com/fluxie.de",
    "https://www.linkedin.com/company/fluxie"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "hallo@fluxie.de"
  }
}
```

---

## 🍞 BreadcrumbList

Auf **allen Seiten** (außer Hauptseiten):

### Beispiel: Blog-Artikel

```json
{
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
      "name": "Blog",
      "item": "https://fluxie.de/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "LRS",
      "item": "https://fluxie.de/blog/lrs"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Silbentrennung – So lernen Kinder lesen",
      "item": "https://fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen"
    }
  ]
}
```

### Beispiel: Lesewelt-Story

```json
{
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
      "name": "Neue Fluxie Geschichten",
      "item": "https://fluxie.de/lesewelt/neue-fluxie-geschichten"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Herbert Hahn – Wer macht den größten Platscher?",
      "item": "https://fluxie.de/lesewelt/neue-fluxie-geschichten/herbert-hahn"
    }
  ]
}
```

---

## 📝 Article (Blog-Artikel)

Auf **allen Blog-Artikel-Seiten**:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Silbentrennung – So lernen Kinder lesen",
  "description": "Silbentrennung als Lesemethode: Was ist das, wie funktioniert es und wie können Eltern ihr Kind beim Lesen lernen unterstützen? Praktische Tipps.",
  "image": "https://fluxie.de/images/silbentrennung-article.jpg",
  "author": {
    "@type": "Person",
    "name": "Christian Gödde",
    "url": "https://fluxie.de/autor/christian-goedde"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Fluxie",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fluxie.de/logo.png"
    }
  },
  "datePublished": "2025-01-10T08:00:00Z",
  "dateModified": "2025-01-12T14:30:00Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen"
  },
  "articleSection": "LRS",
  "keywords": ["Silbentrennung", "Silbenmethode", "Lesen lernen", "LRS", "Leseförderung"],
  "wordCount": 1200,
  "timeRequired": "PT5M",
  "inLanguage": "de-DE"
}
```

**Variante: BlogPosting** (alternativ zu Article):

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Silbentrennung – So lernen Kinder lesen",
  "alternativeHeadline": "Wie die Silbenmethode Kindern beim Lesen lernen hilft",
  "description": "Silbentrennung als Lesemethode: Was ist das, wie funktioniert es und wie können Eltern ihr Kind beim Lesen lernen unterstützen?",
  "image": {
    "@type": "ImageObject",
    "url": "https://fluxie.de/images/silbentrennung-article.jpg",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@type": "Person",
    "name": "Christian Gödde"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Fluxie",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fluxie.de/logo.png",
      "width": 200,
      "height": 60
    }
  },
  "datePublished": "2025-01-10T08:00:00Z",
  "dateModified": "2025-01-12T14:30:00Z",
  "mainEntityOfPage": "https://fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen",
  "articleBody": "[Vollständiger Artikel-Text]"
}
```

---

## 📚 CreativeWork (Lesewelt-Stories)

Auf **allen Story-Seiten**:

```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": "https://fluxie.de/lesewelt/neue-fluxie-geschichten/herbert-hahn",
  "name": "Herbert Hahn – Wer macht den größten Platscher?",
  "alternativeHeadline": "Eine lustige Geschichte für Kinder",
  "description": "Herbert Hahn will den größten Platscher machen – ein spannendes Abenteuer für kleine Leser.",
  "image": "https://fluxie.de/wp-content/uploads/2025/10/HerbertKarteProduct.png",
  "author": {
    "@type": "Organization",
    "name": "Fluxie Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Fluxie",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fluxie.de/logo.png"
    }
  },
  "datePublished": "2025-01-15T10:00:00Z",
  "inLanguage": "de-DE",
  "genre": "Kindergeschichte",
  "audience": {
    "@type": "PeopleAudience",
    "suggestedMinAge": 4,
    "suggestedMaxAge": 8
  },
  "keywords": ["Kindergeschichte", "Vorlesen", "Abenteuer", "Herbert Hahn"],
  "isAccessibleForFree": true,
  "isPartOf": {
    "@type": "CreativeWorkSeries",
    "name": "Neue Fluxie Geschichten",
    "url": "https://fluxie.de/lesewelt/neue-fluxie-geschichten"
  },
  "associatedMedia": {
    "@type": "Product",
    "name": "Herbert Hahn Lesekarte",
    "url": "https://fluxie.de/produkt/herbert-hahn-wer-macht-den-groessten-platscher/"
  }
}
```

**Alternativ: Book** (für längere Stories):

```json
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Herbert Hahn – Wer macht den größten Platscher?",
  "author": {
    "@type": "Organization",
    "name": "Fluxie Team"
  },
  "bookFormat": "http://schema.org/EBook",
  "genre": "Kindergeschichte",
  "inLanguage": "de-DE",
  "audience": {
    "@type": "PeopleAudience",
    "suggestedMinAge": 4,
    "suggestedMaxAge": 8
  },
  "isAccessibleForFree": true
}
```

---

## 🔖 CollectionPage (Kategorie-Seiten)

Auf **Kategorie-Seiten** (Blog & Lesewelt):

### Beispiel: Blog-Kategorie "LRS"

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "LRS – Tipps zur Lese-Rechtschreib-Schwäche",
  "description": "Ratgeber zu LRS: Symptome erkennen, Förderung, Übungen und praktische Tipps für Eltern.",
  "url": "https://fluxie.de/blog/lrs",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://fluxie.de/blog/lrs/lrs-erkennen-symptome"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "url": "https://fluxie.de/blog/lrs/lrs-foerderung-zuhause"
      }
    ]
  },
  "breadcrumb": {
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
        "name": "Blog",
        "item": "https://fluxie.de/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "LRS",
        "item": "https://fluxie.de/blog/lrs"
      }
    ]
  }
}
```

### Beispiel: Lesewelt-Kategorie "Neue Fluxie Geschichten"

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Neue Fluxie Geschichten",
  "description": "Entdecke die neuesten Geschichten von Fluxie. Spannende Abenteuer für Kinder ab 4 Jahren.",
  "url": "https://fluxie.de/lesewelt/neue-fluxie-geschichten",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://fluxie.de/lesewelt/neue-fluxie-geschichten/herbert-hahn"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://fluxie.de/lesewelt/neue-fluxie-geschichten/luna-die-loewin"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "url": "https://fluxie.de/lesewelt/neue-fluxie-geschichten/bomo-und-die-kleine-welt"
      }
    ]
  }
}
```

---

## 🏠 WebSite (Hauptseiten)

Auf **Hauptseiten** (Blog-Index, Lesewelt-Index):

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Fluxie Blog",
  "url": "https://fluxie.de/blog",
  "description": "Expertentipps zu Leseförderung, LRS, Vorlesen und mehr. Praktische Ratschläge für Eltern von Leseanfängern.",
  "publisher": {
    "@type": "Organization",
    "name": "Fluxie",
    "logo": "https://fluxie.de/logo.png"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://fluxie.de/blog/suche?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "de-DE"
}
```

---

## 🔍 FAQPage (optional, für FAQ-Artikel)

Falls ein Artikel FAQs enthält:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist Silbentrennung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Silbentrennung ist eine Lesemethode, bei der Wörter in Silben zerlegt werden, um Kindern das Lesen zu erleichtern. Die Silben werden oft farblich markiert."
      }
    },
    {
      "@type": "Question",
      "name": "Ab welchem Alter eignet sich die Silbenmethode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Silbenmethode eignet sich für Leseanfänger ab ca. 5-6 Jahren, besonders für Kinder mit LRS oder Leseschwierigkeiten."
      }
    },
    {
      "@type": "Question",
      "name": "Wie übe ich Silbentrennung mit meinem Kind?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beginnen Sie mit kurzen, einfachen Wörtern. Klatschen Sie die Silben mit oder verwenden Sie farbige Markierungen. Üben Sie täglich 10-15 Minuten."
      }
    }
  ]
}
```

---

## ⭐ AggregateRating (falls Bewertungen vorhanden)

Für Artikel oder Stories mit Bewertungen:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Silbentrennung – So lernen Kinder lesen",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "42",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

---

## 🎓 HowTo (für Anleitungs-Artikel)

Für Step-by-Step Artikel:

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Wie übt man Silbentrennung mit Kindern?",
  "description": "Eine Schritt-für-Schritt-Anleitung zur Silbentrennung für Leseanfänger",
  "image": "https://fluxie.de/images/silbentrennung-howto.jpg",
  "totalTime": "PT15M",
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Lesebuch oder Lesekarten"
    },
    {
      "@type": "HowToSupply",
      "name": "Farbige Stifte (optional)"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Wort auswählen",
      "text": "Wählen Sie ein kurzes, einfaches Wort aus (z.B. 'Mama', 'Hund').",
      "url": "https://fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen#schritt-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Silben klatschen",
      "text": "Klatschen Sie die Silben gemeinsam: Ma-ma, Hund (1 Silbe).",
      "url": "https://fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen#schritt-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Silben markieren",
      "text": "Markieren Sie die Silben farbig (z.B. erste Silbe blau, zweite rot).",
      "url": "https://fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen#schritt-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Gemeinsam lesen",
      "text": "Lesen Sie die Silben einzeln vor, dann zusammen: Ma - ma → Mama.",
      "url": "https://fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen#schritt-4"
    }
  ]
}
```

---

## 🖼️ ImageObject (für Hero-Bilder)

Für wichtige Bilder (Hero, Featured):

```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://fluxie.de/images/silbentrennung-hero.jpg",
  "url": "https://fluxie.de/images/silbentrennung-hero.jpg",
  "caption": "Kind übt Silbentrennung mit Lesekarten",
  "width": 1200,
  "height": 630,
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "acquireLicensePage": "https://fluxie.de/lizenz"
}
```

---

## 📅 Event (falls Events/Workshops)

Für zukünftige Events (optional):

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Fluxie Leseförderungs-Workshop",
  "startDate": "2025-03-15T10:00:00+01:00",
  "endDate": "2025-03-15T12:00:00+01:00",
  "location": {
    "@type": "Place",
    "name": "Online",
    "address": {
      "@type": "VirtualLocation",
      "url": "https://fluxie.de/workshop"
    }
  },
  "description": "Kostenloser Online-Workshop zu Leseförderung für Eltern",
  "organizer": {
    "@type": "Organization",
    "name": "Fluxie",
    "url": "https://fluxie.de"
  },
  "isAccessibleForFree": true
}
```

---

## 🎬 VideoObject (falls Videos)

Für eingebettete Videos:

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Wie funktioniert Fluxie?",
  "description": "Erklärvideo zu den Fluxie Lesekarten",
  "thumbnailUrl": "https://fluxie.de/videos/fluxie-erklaerung-thumb.jpg",
  "uploadDate": "2025-01-10T08:00:00Z",
  "duration": "PT2M30S",
  "contentUrl": "https://fluxie.de/videos/fluxie-erklaerung.mp4",
  "embedUrl": "https://www.youtube.com/embed/xyz123",
  "publisher": {
    "@type": "Organization",
    "name": "Fluxie",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fluxie.de/logo.png"
    }
  }
}
```

---

## 🔗 Produkt-Verlinkung (Product Schema)

Falls Fluxie-Produkt-Boxen mit Product Schema:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Herbert Hahn Lesekarte",
  "image": "https://fluxie.de/wp-content/uploads/2025/10/HerbertKarteProduct.png",
  "description": "Interaktive Lesekarte mit der Geschichte von Herbert Hahn",
  "brand": {
    "@type": "Brand",
    "name": "Fluxie"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://fluxie.de/produkt/herbert-hahn-wer-macht-den-groessten-platscher/",
    "priceCurrency": "EUR",
    "price": "14.99",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "28"
  }
}
```

**Hinweis**: Diese Daten sollten primär auf den Produktseiten (WordPress) vorhanden sein, nicht im Blog/Lesewelt.

---

## 📝 Dynamische Schema-Generierung

### Code-Beispiel (JavaScript):

```javascript
function generateArticleSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "image": article.featuredImage,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fluxie",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fluxie.de/logo.png"
      }
    },
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    "mainEntityOfPage": article.url,
    "articleSection": article.category,
    "keywords": article.keywords
  };
}

// Verwendung:
const schema = generateArticleSchema({
  title: "Silbentrennung – So lernen Kinder lesen",
  metaDescription: "Praktische Tipps zur Silbentrennung...",
  featuredImage: "https://fluxie.de/images/silbentrennung.jpg",
  author: "Christian Gödde",
  publishedAt: "2025-01-10T08:00:00Z",
  updatedAt: "2025-01-12T14:30:00Z",
  url: "https://fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen",
  category: "LRS",
  keywords: ["Silbentrennung", "LRS", "Lesen lernen"]
});

// HTML einfügen:
<script type="application/ld+json">
{JSON.stringify(schema, null, 2)}
</script>
```

---

## ✅ Schema.org Checkliste (jede Seite)

### Alle Seiten:
- [ ] **Organization**: Fluxie-Daten
- [ ] **BreadcrumbList**: Navigations-Pfad

### Blog-Artikel:
- [ ] **Article** oder **BlogPosting**
- [ ] Author, Publisher, Dates
- [ ] Keywords, ArticleSection
- [ ] **FAQPage** (falls FAQs vorhanden)
- [ ] **HowTo** (falls Anleitung)

### Lesewelt-Stories:
- [ ] **CreativeWork** oder **Book**
- [ ] Author, Publisher, Dates
- [ ] Audience (Altersempfehlung)
- [ ] isPartOf (Kategorie/Serie)

### Kategorie-Seiten:
- [ ] **CollectionPage**
- [ ] **ItemList** (Liste der Artikel/Stories)

### Hauptseiten:
- [ ] **WebSite**
- [ ] **SearchAction** (falls Suche vorhanden)

---

## 🧪 Testing & Validierung

### Google Rich Results Test:
https://search.google.com/test/rich-results

### Schema.org Validator:
https://validator.schema.org/

### Testen mit:
```bash
curl -s "https://fluxie.de/blog/lrs/silbentrennung" | grep "application/ld+json"
```

---

**Nächster Schritt**: Sitemap-Struktur dokumentieren
