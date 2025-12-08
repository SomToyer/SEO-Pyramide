# Meta-Daten Templates: SEO-Tags

Dieses Dokument definiert die Meta-Tags für alle Seitentypen im Blog und in der Lesewelt.

---

## 🎯 Allgemeine Meta-Tag-Regeln

### Title Tag:
- **Länge**: 50-60 Zeichen (max. 70)
- **Format**: `[Seitentitel] | Fluxie`
- **Keywords**: Focus Keyword am Anfang
- **Unique**: Jede Seite hat eigenen Title

### Meta Description:
- **Länge**: 150-160 Zeichen (max. 170)
- **Format**: Kurze Beschreibung + Call-to-Action
- **Keywords**: Focus Keyword + LSI Keywords
- **Unique**: Jede Seite hat eigene Description

### Keywords:
- **Anzahl**: 3-5 Focus Keywords
- **Nicht im Tag**: `<meta name="keywords">` ist veraltet, NICHT verwenden
- **Verwendung**: In Content, Title, Description, H1, H2

---

## 📚 Lesewelt: Meta-Templates

### Hauptseite: `/lesewelt`

```html
<!-- Basic Meta Tags -->
<title>Lesewelt – Geschichten für Kinder | Fluxie</title>
<meta name="description" content="Entdecke spannende Geschichten für Kinder. Gutenachtgeschichten, Abenteuer und mehr – zum Lesen und Vorlesen." />

<!-- Open Graph (Facebook) -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://fluxie.de/lesewelt" />
<meta property="og:title" content="Lesewelt – Geschichten für Kinder | Fluxie" />
<meta property="og:description" content="Entdecke spannende Geschichten für Kinder. Gutenachtgeschichten, Abenteuer und mehr – zum Lesen und Vorlesen." />
<meta property="og:image" content="https://fluxie.de/images/lesewelt-og-image.jpg" />
<meta property="og:locale" content="de_DE" />
<meta property="og:site_name" content="Fluxie" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://fluxie.de/lesewelt" />
<meta name="twitter:title" content="Lesewelt – Geschichten für Kinder | Fluxie" />
<meta name="twitter:description" content="Entdecke spannende Geschichten für Kinder. Gutenachtgeschichten, Abenteuer und mehr – zum Lesen und Vorlesen." />
<meta name="twitter:image" content="https://fluxie.de/images/lesewelt-og-image.jpg" />

<!-- Canonical -->
<link rel="canonical" href="https://fluxie.de/lesewelt" />

<!-- Additional -->
<meta name="robots" content="index, follow" />
<meta name="author" content="Fluxie Team" />
```

**Focus Keywords**: `Kindergeschichten`, `Geschichten für Kinder`, `Vorlesegeschichten`

---

### Kategorie: `/lesewelt/neue-fluxie-geschichten`

```html
<!-- Basic Meta Tags -->
<title>Neue Fluxie Geschichten – Aktuelle Abenteuer | Fluxie</title>
<meta name="description" content="Entdecke die neuesten Geschichten von Fluxie. Spannende Abenteuer mit Herbert Hahn, Luna und mehr für Kinder ab 4 Jahren." />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://fluxie.de/lesewelt/neue-fluxie-geschichten" />
<meta property="og:title" content="Neue Fluxie Geschichten – Aktuelle Abenteuer | Fluxie" />
<meta property="og:description" content="Entdecke die neuesten Geschichten von Fluxie. Spannende Abenteuer mit Herbert Hahn, Luna und mehr für Kinder ab 4 Jahren." />
<meta property="og:image" content="https://fluxie.de/images/neue-geschichten-og.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Neue Fluxie Geschichten – Aktuelle Abenteuer | Fluxie" />
<meta name="twitter:description" content="Entdecke die neuesten Geschichten von Fluxie. Spannende Abenteuer mit Herbert Hahn, Luna und mehr für Kinder ab 4 Jahren." />
<meta name="twitter:image" content="https://fluxie.de/images/neue-geschichten-og.jpg" />

<!-- Canonical -->
<link rel="canonical" href="https://fluxie.de/lesewelt/neue-fluxie-geschichten" />

<!-- Breadcrumb -->
<script type="application/ld+json">
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
    }
  ]
}
</script>
```

**Focus Keywords**: `Fluxie Geschichten`, `neue Kindergeschichten`, `Abenteuergeschichten`

---

### Story: `/lesewelt/neue-fluxie-geschichten/herbert-hahn`

```html
<!-- Basic Meta Tags -->
<title>Herbert Hahn – Wer macht den größten Platscher? | Fluxie</title>
<meta name="description" content="Lies die Geschichte von Herbert Hahn, der den größten Platscher machen will. Eine lustige Vorlesegeschichte für Kinder ab 4 Jahren." />

<!-- Open Graph -->
<meta property="og:type" content="article" />
<meta property="og:url" content="https://fluxie.de/lesewelt/neue-fluxie-geschichten/herbert-hahn" />
<meta property="og:title" content="Herbert Hahn – Wer macht den größten Platscher? | Fluxie" />
<meta property="og:description" content="Lies die Geschichte von Herbert Hahn, der den größten Platscher machen will. Eine lustige Vorlesegeschichte für Kinder ab 4 Jahren." />
<meta property="og:image" content="https://fluxie.de/wp-content/uploads/2025/10/HerbertKarteProduct.png" />
<meta property="article:published_time" content="2025-01-15T10:00:00Z" />
<meta property="article:author" content="Fluxie Team" />
<meta property="article:section" content="Neue Fluxie Geschichten" />
<meta property="article:tag" content="Kindergeschichte" />
<meta property="article:tag" content="Vorlesen" />
<meta property="article:tag" content="Abenteuer" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Herbert Hahn – Wer macht den größten Platscher? | Fluxie" />
<meta name="twitter:description" content="Lies die Geschichte von Herbert Hahn, der den größten Platscher machen will. Eine lustige Vorlesegeschichte für Kinder ab 4 Jahren." />
<meta name="twitter:image" content="https://fluxie.de/wp-content/uploads/2025/10/HerbertKarteProduct.png" />

<!-- Canonical -->
<link rel="canonical" href="https://fluxie.de/lesewelt/neue-fluxie-geschichten/herbert-hahn" />

<!-- Additional -->
<meta name="author" content="Fluxie Team" />
<meta name="publish_date" property="og:publish_date" content="2025-01-15T10:00:00Z" />
```

**Focus Keywords**: `Herbert Hahn Geschichte`, `Vorlesegeschichte Kinder`, `Kindergeschichte Platscher`

---

## ✍️ Blog: Meta-Templates

### Hauptseite: `/blog`

```html
<!-- Basic Meta Tags -->
<title>Fluxie Blog – Tipps zur Leseförderung für Eltern | Fluxie</title>
<meta name="description" content="Expertentipps zu Leseförderung, LRS, Vorlesen und mehr. Praktische Ratschläge für Eltern von Leseanfängern." />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://fluxie.de/blog" />
<meta property="og:title" content="Fluxie Blog – Tipps zur Leseförderung für Eltern | Fluxie" />
<meta property="og:description" content="Expertentipps zu Leseförderung, LRS, Vorlesen und mehr. Praktische Ratschläge für Eltern von Leseanfängern." />
<meta property="og:image" content="https://fluxie.de/images/blog-og-image.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Fluxie Blog – Tipps zur Leseförderung für Eltern | Fluxie" />
<meta name="twitter:description" content="Expertentipps zu Leseförderung, LRS, Vorlesen und mehr. Praktische Ratschläge für Eltern von Leseanfängern." />
<meta name="twitter:image" content="https://fluxie.de/images/blog-og-image.jpg" />

<!-- Canonical -->
<link rel="canonical" href="https://fluxie.de/blog" />
```

**Focus Keywords**: `Leseförderung`, `Tipps Vorlesen`, `Lesen lernen`

---

### Kategorie: `/blog/lrs`

```html
<!-- Basic Meta Tags -->
<title>LRS – Tipps zur Lese-Rechtschreib-Schwäche | Fluxie Blog</title>
<meta name="description" content="Ratgeber zu LRS: Symptome erkennen, Förderung, Übungen und praktische Tipps für Eltern von Kindern mit Lese-Rechtschreib-Schwäche." />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://fluxie.de/blog/lrs" />
<meta property="og:title" content="LRS – Tipps zur Lese-Rechtschreib-Schwäche | Fluxie Blog" />
<meta property="og:description" content="Ratgeber zu LRS: Symptome erkennen, Förderung, Übungen und praktische Tipps für Eltern von Kindern mit Lese-Rechtschreib-Schwäche." />
<meta property="og:image" content="https://fluxie.de/images/lrs-category-og.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="LRS – Tipps zur Lese-Rechtschreib-Schwäche | Fluxie Blog" />
<meta name="twitter:description" content="Ratgeber zu LRS: Symptome erkennen, Förderung, Übungen und praktische Tipps für Eltern von Kindern mit Lese-Rechtschreib-Schwäche." />
<meta name="twitter:image" content="https://fluxie.de/images/lrs-category-og.jpg" />

<!-- Canonical -->
<link rel="canonical" href="https://fluxie.de/blog/lrs" />
```

**Focus Keywords**: `LRS`, `Lese-Rechtschreib-Schwäche`, `LRS Förderung`, `Legasthenie`

---

### Artikel: `/blog/lrs/silbentrennung-so-lernen-kinder-lesen`

```html
<!-- Basic Meta Tags -->
<title>Silbentrennung – So lernen Kinder lesen | Fluxie Blog</title>
<meta name="description" content="Silbentrennung als Lesemethode: Was ist das, wie funktioniert es und wie können Eltern ihr Kind beim Lesen lernen unterstützen? Praktische Tipps." />

<!-- Open Graph -->
<meta property="og:type" content="article" />
<meta property="og:url" content="https://fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen" />
<meta property="og:title" content="Silbentrennung – So lernen Kinder lesen | Fluxie Blog" />
<meta property="og:description" content="Silbentrennung als Lesemethode: Was ist das, wie funktioniert es und wie können Eltern ihr Kind beim Lesen lernen unterstützen? Praktische Tipps." />
<meta property="og:image" content="https://fluxie.de/images/silbentrennung-article.jpg" />
<meta property="article:published_time" content="2025-01-10T08:00:00Z" />
<meta property="article:modified_time" content="2025-01-12T14:30:00Z" />
<meta property="article:author" content="Christian Gödde" />
<meta property="article:section" content="LRS" />
<meta property="article:tag" content="Silbentrennung" />
<meta property="article:tag" content="LRS" />
<meta property="article:tag" content="Leseanfänger" />
<meta property="article:tag" content="Leseförderung" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Silbentrennung – So lernen Kinder lesen | Fluxie Blog" />
<meta name="twitter:description" content="Silbentrennung als Lesemethode: Was ist das, wie funktioniert es und wie können Eltern ihr Kind beim Lesen lernen unterstützen? Praktische Tipps." />
<meta name="twitter:image" content="https://fluxie.de/images/silbentrennung-article.jpg" />

<!-- Canonical -->
<link rel="canonical" href="https://fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen" />

<!-- Additional -->
<meta name="author" content="Christian Gödde" />
<meta name="publish_date" property="og:publish_date" content="2025-01-10T08:00:00Z" />
```

**Focus Keywords**: `Silbentrennung`, `Silbenmethode`, `Lesen lernen`, `Leseanfänger`
**LSI Keywords**: `LRS`, `Leseförderung`, `Erstleser`, `Lesen üben`, `Silben lesen`

---

## 🖼️ Open Graph Images

### Anforderungen:
- **Format**: JPG oder PNG
- **Größe**: 1200 x 630 px (optimal für Facebook/LinkedIn)
- **Dateigröße**: < 1 MB
- **Alt-Format**: 1200 x 1200 px (für Instagram)

### Bilder erstellen für:
- [ ] Lesewelt Hauptseite
- [ ] Blog Hauptseite
- [ ] Jede Kategorie (LRS, Vorlesen, Neue Geschichten, etc.)
- [ ] Fallback-Bild (generisch Fluxie)

**Für Story/Artikel-Seiten**: Produktbild oder Hero-Bild verwenden

---

## 📱 Mobile Meta-Tags

```html
<!-- Viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Mobile Web App -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="Fluxie" />

<!-- Theme Color -->
<meta name="theme-color" content="#667eea" />
<meta name="msapplication-TileColor" content="#667eea" />
```

---

## 🔍 Robots Meta-Tags

### Standard (index, follow):
```html
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />
```

### Noindex (z.B. für Testseiten):
```html
<meta name="robots" content="noindex, nofollow" />
```

### Spezielle Regeln:
```html
<!-- Max. Snippet-Länge -->
<meta name="robots" content="max-snippet:160" />

<!-- Max. Image Preview -->
<meta name="robots" content="max-image-preview:large" />

<!-- Max. Video Preview -->
<meta name="robots" content="max-video-preview:30" />
```

---

## 🌍 Hreflang (falls mehrsprachig)

```html
<!-- Deutsch (Standard) -->
<link rel="alternate" hreflang="de" href="https://fluxie.de/blog/lrs/silbentrennung" />

<!-- Englisch (falls vorhanden) -->
<link rel="alternate" hreflang="en" href="https://fluxie.de/en/blog/lrs/syllable-separation" />

<!-- x-default (Fallback) -->
<link rel="alternate" hreflang="x-default" href="https://fluxie.de/blog/lrs/silbentrennung" />
```

---

## 📊 Dynamische Meta-Tags: Template-Variablen

### Story-Template:
```javascript
{
  title: `${story.title} | Fluxie`,
  description: `${story.teaser}`, // Erste 160 Zeichen
  ogImage: story.heroImage || story.productImage,
  ogType: 'article',
  canonical: `https://fluxie.de/lesewelt/${story.category}/${story.slug}`,
  publishDate: story.publishedAt,
  author: story.author || 'Fluxie Team',
  keywords: [story.category, 'Kindergeschichte', ...story.tags]
}
```

### Blog-Artikel-Template:
```javascript
{
  title: `${article.title} | Fluxie Blog`,
  description: article.metaDescription || article.teaser.substring(0, 160),
  ogImage: article.featuredImage,
  ogType: 'article',
  canonical: `https://fluxie.de/blog/${article.category}/${article.slug}`,
  publishDate: article.publishedAt,
  modifiedDate: article.updatedAt,
  author: article.author,
  keywords: [article.focusKeyword, ...article.lsiKeywords, ...article.tags],
  readingTime: article.readingTime
}
```

---

## 📝 Meta-Tag Checkliste (jede Seite)

- [ ] **Title**: 50-60 Zeichen, unique, Keyword
- [ ] **Description**: 150-160 Zeichen, unique, CTA
- [ ] **Canonical**: Korrekte URL
- [ ] **OG: Title, Description, Image, URL, Type**
- [ ] **Twitter: Card, Title, Description, Image**
- [ ] **Robots**: index, follow (oder noindex)
- [ ] **Author**: Angegeben (bei Artikeln)
- [ ] **Publish Date**: ISO-8601 Format
- [ ] **Breadcrumb**: JSON-LD Schema

---

## 🎨 Meta-Tags Generierung (Code-Beispiel)

### React/Next.js Head Component:

```jsx
import Head from 'next/head';

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  publishDate,
  author
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article-specific */}
      {ogType === 'article' && (
        <>
          <meta property="article:published_time" content={publishDate} />
          <meta property="article:author" content={author} />
        </>
      )}
    </Head>
  );
}
```

---

**Nächster Schritt**: Schema.org strukturierte Daten definieren
