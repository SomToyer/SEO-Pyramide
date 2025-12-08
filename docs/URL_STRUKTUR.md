# URL-Struktur: Blog & Lesewelt

## 📐 Zwei Varianten (Entscheidung noch offen)

### Variante A: Unterverzeichnis (Empfohlen für SEO)

**Vorteile:**
- ✅ Domain Authority bleibt zusammen
- ✅ Besseres SEO-Ranking
- ✅ Einfachere Analytics (eine Domain)
- ✅ Einheitliche Nutzererfahrung

**Technische Umsetzung:**
- Reverse Proxy in WordPress oder Server-Config
- Alle URLs unter `fluxie.de/*`

---

### Variante B: Subdomain

**Vorteile:**
- ✅ Technisch einfacher zu deployen
- ✅ Unabhängiges Hosting möglich
- ✅ Keine WordPress-Konfiguration nötig

**Nachteile:**
- ⚠️ SEO-Ranking wird getrennt behandelt
- ⚠️ Domain Authority wird nicht geteilt

---

## 🗂️ URL-Schema

### Lesewelt

| Seiten-Typ | Variante A (Unterverzeichnis) | Variante B (Subdomain) |
|------------|-------------------------------|------------------------|
| **Hauptseite** | `fluxie.de/lesewelt` | `lesewelt.fluxie.de` |
| **Kategorie** | `fluxie.de/lesewelt/[kategorie-slug]` | `lesewelt.fluxie.de/[kategorie-slug]` |
| **Story** | `fluxie.de/lesewelt/[kategorie-slug]/[story-slug]` | `lesewelt.fluxie.de/[kategorie-slug]/[story-slug]` |

#### Beispiele:

**Hauptseite:**
- A: `fluxie.de/lesewelt`
- B: `lesewelt.fluxie.de`

**Kategorie: "Neue Fluxie Geschichten"**
- A: `fluxie.de/lesewelt/neue-fluxie-geschichten`
- B: `lesewelt.fluxie.de/neue-fluxie-geschichten`

**Kategorie: "Gutenachtgeschichten"**
- A: `fluxie.de/lesewelt/gutenachtgeschichten`
- B: `lesewelt.fluxie.de/gutenachtgeschichten`

**Story: "Herbert Hahn"**
- A: `fluxie.de/lesewelt/neue-fluxie-geschichten/herbert-hahn`
- B: `lesewelt.fluxie.de/neue-fluxie-geschichten/herbert-hahn`

**Story: "Schlafschafe"**
- A: `fluxie.de/lesewelt/gutenachtgeschichten/schlafschafe`
- B: `lesewelt.fluxie.de/gutenachtgeschichten/schlafschafe`

---

### Blog

| Seiten-Typ | Variante A (Unterverzeichnis) | Variante B (Subdomain) |
|------------|-------------------------------|------------------------|
| **Hauptseite** | `fluxie.de/blog` | `blog.fluxie.de` |
| **Kategorie** | `fluxie.de/blog/[kategorie-slug]` | `blog.fluxie.de/[kategorie-slug]` |
| **Artikel** | `fluxie.de/blog/[kategorie-slug]/[artikel-slug]` | `blog.fluxie.de/[kategorie-slug]/[artikel-slug]` |

#### Beispiele:

**Hauptseite:**
- A: `fluxie.de/blog`
- B: `blog.fluxie.de`

**Kategorie: "LRS"**
- A: `fluxie.de/blog/lrs`
- B: `blog.fluxie.de/lrs`

**Kategorie: "Vorlesen"**
- A: `fluxie.de/blog/vorlesen`
- B: `blog.fluxie.de/vorlesen`

**Artikel: "Silbentrennung"**
- A: `fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen`
- B: `blog.fluxie.de/lrs/silbentrennung-so-lernen-kinder-lesen`

**Artikel: "Leseecke einrichten"**
- A: `fluxie.de/blog/vorlesen/leseecke-einrichten-tipps`
- B: `blog.fluxie.de/vorlesen/leseecke-einrichten-tipps`

---

## 📝 URL-Slug-Regeln

### Allgemeine Regeln:
- **Kleinbuchstaben**: Immer lowercase
- **Bindestriche**: Wörter mit `-` trennen
- **Keine Umlaute**: `ä` → `ae`, `ö` → `oe`, `ü` → `ue`, `ß` → `ss`
- **Keine Sonderzeichen**: Nur `a-z`, `0-9`, `-`
- **Kurz & prägnant**: Max. 3-5 Wörter
- **Keywords**: Focus Keyword enthalten

### Beispiele:

| Titel | URL-Slug |
|-------|----------|
| Neue Fluxie Geschichten | `neue-fluxie-geschichten` |
| Gutenachtgeschichten | `gutenachtgeschichten` |
| Herbert Hahn – Wer macht den größten Platscher? | `herbert-hahn` |
| LRS | `lrs` |
| Vorlesen | `vorlesen` |
| Silbentrennung – So lernen Kinder lesen | `silbentrennung-so-lernen-kinder-lesen` |
| Leseecke einrichten | `leseecke-einrichten-tipps` |
| Wie Tonies, aber fürs Lesen | `wie-tonies-aber-fuers-lesen` |

---

## 🔀 URL-Routing-Struktur

### Lesewelt

```
/lesewelt
│
├── /lesewelt (Hauptseite)
│
├── /lesewelt/neue-fluxie-geschichten (Kategorie)
│   ├── /lesewelt/neue-fluxie-geschichten/herbert-hahn (Story)
│   ├── /lesewelt/neue-fluxie-geschichten/luna-die-loewin (Story)
│   └── /lesewelt/neue-fluxie-geschichten/bomo-und-die-kleine-welt (Story)
│
├── /lesewelt/gutenachtgeschichten (Kategorie)
│   ├── /lesewelt/gutenachtgeschichten/schlafschafe (Story)
│   └── /lesewelt/gutenachtgeschichten/sandmann (Story)
│
└── /lesewelt/[weitere-kategorien]
    └── /lesewelt/[kategorie]/[story]
```

### Blog

```
/blog
│
├── /blog (Hauptseite)
│
├── /blog/lrs (Kategorie)
│   ├── /blog/lrs/silbentrennung-so-lernen-kinder-lesen (Artikel)
│   ├── /blog/lrs/lrs-erkennen-symptome (Artikel)
│   └── /blog/lrs/lrs-foerderung-zuhause (Artikel)
│
├── /blog/vorlesen (Kategorie)
│   ├── /blog/vorlesen/leseecke-einrichten-tipps (Artikel)
│   ├── /blog/vorlesen/vorlesen-warum-wichtig (Artikel)
│   └── /blog/vorlesen/buecher-auswahl-alter (Artikel)
│
└── /blog/[weitere-kategorien]
    └── /blog/[kategorie]/[artikel]
```

---

## 🌐 Canonical URLs

### Zweck:
- Duplicate Content vermeiden
- Suchmaschinen die "Haupt-URL" mitteilen

### Implementierung:
Jede Seite sollte ein `<link rel="canonical">` Tag haben:

```html
<link rel="canonical" href="https://fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen" />
```

**Bei Subdomain-Variante:**
```html
<link rel="canonical" href="https://blog.fluxie.de/lrs/silbentrennung-so-lernen-kinder-lesen" />
```

---

## 🔗 Redirects (301)

### Falls URLs ändern:
Alte URL → Neue URL mit 301 Redirect

**Beispiel:**
```
/lesewelt/herbert-hahn → /lesewelt/neue-fluxie-geschichten/herbert-hahn
```

### Trailing Slashes:
**Entscheidung treffen:**
- **Mit Slash**: `fluxie.de/blog/`
- **Ohne Slash**: `fluxie.de/blog`

**Wichtig**: Konsistent verwenden! Alle URLs entweder mit oder ohne Slash.

**Empfehlung**: Ohne Trailing Slash (moderner, kürzer)

---

## 📋 URL-Parameter (Query Strings)

### Vermeiden für Content-Seiten:
- ❌ `fluxie.de/blog?category=lrs`
- ✅ `fluxie.de/blog/lrs`

### Erlaubt für Features:
- **Pagination**: `?page=2`
- **Suche**: `?q=silbentrennung`
- **Filter**: `?tag=leseanfaenger`

**SEO-Tipp**: Bei Pagination `rel="next"` und `rel="prev"` verwenden

---

## 🗺️ Breadcrumb-URLs

Breadcrumbs sollten exakt der URL-Struktur folgen:

**Beispiel: Blog-Artikel**
```
Home > Blog > LRS > Silbentrennung

Links:
Home     → fluxie.de (WordPress)
Blog     → fluxie.de/blog
LRS      → fluxie.de/blog/lrs
Silbentrennung → fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen (aktuelle Seite)
```

**Beispiel: Lesewelt-Story**
```
Home > Lesewelt > Neue Fluxie Geschichten > Herbert Hahn

Links:
Home     → fluxie.de (WordPress)
Lesewelt → fluxie.de/lesewelt
Neue Fluxie Geschichten → fluxie.de/lesewelt/neue-fluxie-geschichten
Herbert Hahn → fluxie.de/lesewelt/neue-fluxie-geschichten/herbert-hahn (aktuelle Seite)
```

---

## 🔒 HTTPS

**Pflicht**: Alle URLs müssen HTTPS verwenden
- ✅ `https://fluxie.de/blog`
- ❌ `http://fluxie.de/blog`

---

## 📊 URL-Performance

### Best Practices:
- **Kurz**: Max. 75 Zeichen
- **Lesbar**: Menschen können URL verstehen
- **Keyword-reich**: Focus Keyword enthalten
- **Statisch**: Keine dynamischen IDs (`/artikel/12345` ❌)

---

## 🚀 Technische Umsetzung (technologie-unabhängig)

### Datei-basiertes Routing (z.B. Next.js):
```
pages/
├── lesewelt/
│   ├── index.tsx                    → /lesewelt
│   ├── [kategorie]/
│   │   ├── index.tsx                → /lesewelt/[kategorie]
│   │   └── [slug].tsx               → /lesewelt/[kategorie]/[slug]
│
├── blog/
│   ├── index.tsx                    → /blog
│   ├── [kategorie]/
│   │   ├── index.tsx                → /blog/[kategorie]
│   │   └── [slug].tsx               → /blog/[kategorie]/[slug]
```

### Config-basiertes Routing:
```javascript
// routes.config.js
{
  '/lesewelt': 'LeseweltIndex',
  '/lesewelt/:kategorie': 'LeseweltCategory',
  '/lesewelt/:kategorie/:slug': 'LeseweltStory',
  '/blog': 'BlogIndex',
  '/blog/:kategorie': 'BlogCategory',
  '/blog/:kategorie/:slug': 'BlogArticle'
}
```

---

## 📝 Content-Daten: URL-Mapping

### Lesewelt-Kategorien:
```json
{
  "kategorien": [
    {
      "id": "neue-fluxie-geschichten",
      "name": "Neue Fluxie Geschichten",
      "slug": "neue-fluxie-geschichten",
      "url": "/lesewelt/neue-fluxie-geschichten"
    },
    {
      "id": "gutenachtgeschichten",
      "name": "Gutenachtgeschichten",
      "slug": "gutenachtgeschichten",
      "url": "/lesewelt/gutenachtgeschichten"
    }
  ]
}
```

### Lesewelt-Stories:
```json
{
  "stories": [
    {
      "id": "herbert-hahn",
      "title": "Herbert Hahn – Wer macht den größten Platscher?",
      "slug": "herbert-hahn",
      "kategorie": "neue-fluxie-geschichten",
      "url": "/lesewelt/neue-fluxie-geschichten/herbert-hahn"
    }
  ]
}
```

---

**Nächster Schritt**: Content-Mapping für Produkt-Boxen
