# 🚀 Nächste Schritte

Dieses Dokument beschreibt die nächsten Schritte nach Abschluss der Planung.

---

## ✅ Was ist bereits fertig?

Die **komplette SEO-Struktur** ist geplant und dokumentiert:

- ✅ [SEO-Struktur](/docs/SEO_STRUKTUR.md) - Alle Seiten, Content-Blöcke, SEO-Elemente
- ✅ [URL-Struktur](/docs/URL_STRUKTUR.md) - Routing, Slugs, beide Varianten
- ✅ [Content-Mapping](/docs/CONTENT_MAPPING.md) - Produkt-Boxen Zuordnung
- ✅ [Meta-Templates](/docs/META_TEMPLATES.md) - Title, Description, OG-Tags
- ✅ [Schema.org](/docs/SCHEMA_ORG.md) - Strukturierte Daten (JSON-LD)
- ✅ [Sitemap](/docs/SITEMAP.md) - XML Sitemap-Struktur
- ✅ [Interne Verlinkung](/docs/INTERNAL_LINKING.md) - Link-Strategie
- ✅ [Technologie-Entscheidung](/docs/TECHNOLOGIE_ENTSCHEIDUNG.md) - Framework-Vergleich

---

## 🎯 Phase 1: Technische Entscheidungen treffen

**Dauer**: 1-2 Tage

### Entscheidungen:

1. **URL-Struktur**
   - [ ] Unterverzeichnis (`fluxie.de/blog`) ⭐ Empfohlen
   - [ ] Subdomain (`blog.fluxie.de`)

2. **Frontend-Framework**
   - [ ] Next.js 15 ⭐ Empfohlen
   - [ ] Nuxt 3
   - [ ] Astro
   - [ ] Anderes

3. **Content Management**
   - [ ] Markdown-Files ⭐ Empfohlen für Start
   - [ ] Headless CMS (Strapi, Contentful)
   - [ ] WordPress API
   - [ ] Anderes

4. **Hosting**
   - [ ] Vercel ⭐ Empfohlen für Next.js
   - [ ] Netlify
   - [ ] Eigener Server
   - [ ] Anderes

5. **WordPress-Integration**
   - [ ] Gemeinsames Header/Footer übernehmen?
   - [ ] Eigenständiges Design?
   - [ ] Reverse Proxy Setup?

**Dokumentiere Entscheidungen** in diesem File:
```markdown
## Getroffene Entscheidungen

- **URL-Struktur**: Unterverzeichnis (fluxie.de/blog)
- **Framework**: Next.js 15
- **CMS**: Markdown-Files
- **Hosting**: Vercel
- **Integration**: Reverse Proxy via Cloudflare Workers
```

---

## 🏗️ Phase 2: Projekt-Setup

**Dauer**: 2-3 Tage

### 2.1 Repository initialisieren

```bash
# Next.js Projekt erstellen
npx create-next-app@latest fluxie-blog-lesewelt --typescript --app --tailwind

cd fluxie-blog-lesewelt

# Dependencies installieren
npm install gray-matter remark remark-html date-fns
```

### 2.2 Ordnerstruktur erstellen

```
/fluxie-blog-lesewelt
├── /app                    # Next.js App Router
│   ├── /blog
│   │   ├── page.tsx        # Blog-Hauptseite
│   │   ├── /[kategorie]
│   │   │   ├── page.tsx    # Kategorie-Seite
│   │   │   └── /[slug]
│   │   │       └── page.tsx # Artikel-Seite
│   │
│   ├── /lesewelt
│   │   ├── page.tsx        # Lesewelt-Hauptseite
│   │   ├── /[kategorie]
│   │   │   ├── page.tsx    # Kategorie-Seite
│   │   │   └── /[slug]
│   │   │       └── page.tsx # Story-Seite
│   │
│   ├── layout.tsx          # Root Layout
│   └── sitemap.ts          # Sitemap Generator
│
├── /components
│   ├── /seo
│   │   ├── SEOHead.tsx     # Meta-Tags Komponente
│   │   └── Schema.tsx      # Schema.org JSON-LD
│   ├── ProductBox.tsx      # Fluxie-Produkt-Box
│   ├── Breadcrumb.tsx
│   ├── RelatedArticles.tsx
│   └── Newsletter.tsx
│
├── /content
│   ├── /blog
│   │   ├── /lrs
│   │   │   └── silbentrennung-so-lernen-kinder-lesen.md
│   │   └── /vorlesen
│   │       └── leseecke-einrichten-tipps.md
│   │
│   └── /lesewelt
│       ├── /neue-fluxie-geschichten
│       │   └── herbert-hahn.md
│       └── /gutenachtgeschichten
│           └── schlafschafe.md
│
├── /lib
│   ├── markdown.ts         # Markdown Parser
│   ├── content.ts          # Content API
│   └── seo.ts              # SEO Utilities
│
├── /public
│   ├── /images
│   └── robots.txt
│
└── package.json
```

### 2.3 Content-Struktur (Markdown)

**Beispiel Frontmatter** (`/content/blog/lrs/silbentrennung.md`):

```markdown
---
title: "Silbentrennung – So lernen Kinder lesen"
slug: "silbentrennung-so-lernen-kinder-lesen"
category: "lrs"
description: "Silbentrennung als Lesemethode: Was ist das, wie funktioniert es und wie können Eltern ihr Kind beim Lesen lernen unterstützen?"
author: "Christian Gödde"
publishedAt: "2025-01-10"
updatedAt: "2025-01-12"
featuredImage: "/images/silbentrennung-hero.jpg"
tags: ["Silbentrennung", "LRS", "Lesen lernen", "Leseanfänger"]
focusKeyword: "Silbentrennung"
readingTime: 5
productBoxes:
  - position: "top"
    product: "kruemelbrandt"
    headline: "Silbentrennung spielerisch üben"
    text: "Krümelbrandt nutzt die Silbenmethode und macht Lesen lernen zum Abenteuer."
  - position: "mid"
    product: "pionierset"
    headline: "Das komplette Starter-Set"
    text: "3 Lesekarten, Lesegerät und spannende Geschichten für Leseanfänger."
---

# Silbentrennung – So lernen Kinder lesen

Silbentrennung ist eine bewährte Methode, um Kindern das Lesen beizubringen...

## Was ist Silbentrennung?

[Content...]

## Warum ist Silbentrennung wichtig?

[Content...]

## Methoden zum Üben

[Content...]
```

---

## 🎨 Phase 3: Design & Komponenten

**Dauer**: 3-5 Tage

### 3.1 Design-System

- [ ] Farben von fluxie.de übernehmen
- [ ] Typografie definieren
- [ ] Component Library (Buttons, Cards, etc.)
- [ ] Responsive Breakpoints

### 3.2 Kern-Komponenten

- [ ] **Header**: Navigation (Home, Blog, Lesewelt, Shop, Über Uns)
- [ ] **Footer**: Links, Newsletter, Social Media
- [ ] **Breadcrumb**: Navigations-Pfad
- [ ] **ProductBox**: Fluxie-Produkt-Boxen (3 Varianten)
- [ ] **RelatedArticles**: 3-4 Kacheln
- [ ] **Newsletter**: Anmeldung
- [ ] **SEOHead**: Meta-Tags Komponente
- [ ] **Schema**: JSON-LD Generator

### 3.3 Seiten-Templates

- [ ] **Blog-Index**: Hauptseite mit Featured Artikeln
- [ ] **Blog-Kategorie**: Artikel-Liste
- [ ] **Blog-Artikel**: Vollständiger Artikel
- [ ] **Lesewelt-Index**: Hauptseite mit Featured Stories
- [ ] **Lesewelt-Kategorie**: Story-Liste
- [ ] **Lesewelt-Story**: Vollständige Story

---

## 📝 Phase 4: Content erstellen

**Dauer**: 2-4 Wochen (parallel zu Entwicklung)

### 4.1 Blog-Content

**Priorität 1** (Launch-Content):
- [ ] 2-3 LRS-Artikel
  - [ ] Silbentrennung – So lernen Kinder lesen
  - [ ] LRS erkennen: Symptome bei Kindern
  - [ ] LRS-Förderung zu Hause
- [ ] 2-3 Vorlesen-Artikel
  - [ ] Leseecke einrichten: Tipps für Eltern
  - [ ] Warum Vorlesen so wichtig ist
  - [ ] Bücher-Auswahl nach Alter

**Priorität 2** (Post-Launch):
- [ ] 5-10 weitere Artikel pro Kategorie

### 4.2 Lesewelt-Content

**Priorität 1** (Launch-Content):
- [ ] 3-4 Stories pro Kategorie
  - [ ] Herbert Hahn – Wer macht den größten Platscher?
  - [ ] Luna – Die Löwin mit der leisen Stimme
  - [ ] Bomo und die Kleine Welt
  - [ ] Schlafschafe (Gutenachtgeschichte)

**Priorität 2** (Post-Launch):
- [ ] Weitere Stories hinzufügen (1-2 pro Monat)

---

## 🔧 Phase 5: SEO-Implementierung

**Dauer**: 3-5 Tage

### 5.1 On-Page SEO

- [ ] Meta-Tags (Title, Description) auf allen Seiten
- [ ] Open Graph Tags
- [ ] Twitter Card Tags
- [ ] Canonical URLs
- [ ] Alt-Texte für alle Bilder
- [ ] H1-H6 Hierarchie korrekt
- [ ] Breadcrumbs mit Schema.org

### 5.2 Schema.org (JSON-LD)

- [ ] Organization (Fluxie)
- [ ] BreadcrumbList (alle Seiten)
- [ ] Article (Blog-Artikel)
- [ ] CreativeWork (Lesewelt-Stories)
- [ ] CollectionPage (Kategorien)
- [ ] WebSite (Hauptseiten)

### 5.3 Sitemap & robots.txt

- [ ] `/sitemap.xml` (Sitemap-Index)
- [ ] `/sitemap-blog.xml`
- [ ] `/sitemap-blog-kategorien.xml`
- [ ] `/sitemap-lesewelt.xml`
- [ ] `/sitemap-lesewelt-kategorien.xml`
- [ ] `/robots.txt` mit Sitemap-Verweis

### 5.4 Performance

- [ ] Image Optimization (WebP, Lazy Loading)
- [ ] Core Web Vitals optimieren
- [ ] Lighthouse Score > 90

---

## 🔗 Phase 6: WordPress-Integration

**Dauer**: 2-3 Tage

### 6.1 Reverse Proxy Setup

**Option A: Cloudflare Workers**
```javascript
// Cloudflare Worker
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/blog')) {
      return fetch('https://blog-app.vercel.app' + url.pathname);
    }

    if (url.pathname.startsWith('/lesewelt')) {
      return fetch('https://lesewelt-app.vercel.app' + url.pathname);
    }

    // Fallback zu WordPress
    return fetch('https://fluxie.de' + url.pathname);
  }
}
```

**Option B: Nginx**
```nginx
location /blog {
    proxy_pass https://blog-app.vercel.app;
    proxy_set_header Host $host;
}

location /lesewelt {
    proxy_pass https://lesewelt-app.vercel.app;
    proxy_set_header Host $host;
}
```

### 6.2 Header/Footer Integration

- [ ] Entscheidung: Gleich oder unterschiedlich?
- [ ] Falls gleich: WordPress Header/Footer API
- [ ] Navigation-Links anpassen

### 6.3 Produkt-Box Links

- [ ] Alle Produkt-Boxen verlinken zu WordPress-Shop
- [ ] UTM-Parameter für Tracking

---

## 🚀 Phase 7: Deployment & Launch

**Dauer**: 1-2 Tage

### 7.1 Deployment

- [ ] Vercel-Account erstellen
- [ ] Repository verknüpfen
- [ ] Domain-Setup (`fluxie.de/blog`, `fluxie.de/lesewelt`)
- [ ] SSL-Zertifikat
- [ ] Environment Variables

### 7.2 Testing

- [ ] Alle Links funktionieren
- [ ] SEO-Tags korrekt
- [ ] Sitemap validiert
- [ ] Mobile Responsive
- [ ] Performance-Test
- [ ] Cross-Browser-Test

### 7.3 Google Search Console

- [ ] Property hinzufügen (`fluxie.de`)
- [ ] Sitemap einreichen
- [ ] Index-Coverage prüfen

### 7.4 Analytics

- [ ] Google Analytics 4 einrichten
- [ ] Conversion-Tracking (Produkt-Box Klicks)
- [ ] Vercel Analytics (optional)

---

## 📊 Phase 8: Monitoring & Optimierung

**Laufend**

### 8.1 SEO-Monitoring

- [ ] Google Search Console (wöchentlich)
- [ ] Rankings überwachen (monatlich)
- [ ] Backlinks tracken
- [ ] Core Web Vitals prüfen

### 8.2 Content-Updates

- [ ] Neue Artikel/Stories (1-2 pro Woche)
- [ ] Bestehende Artikel aktualisieren
- [ ] Interne Links pflegen

### 8.3 Performance

- [ ] Lighthouse-Score monatlich prüfen
- [ ] Broken Links fixen
- [ ] Image Optimization überprüfen

---

## 📋 Checkliste: Launch-Readiness

### Technik:
- [ ] Alle Seiten erreichbar
- [ ] SEO-Tags korrekt
- [ ] Sitemap funktioniert
- [ ] robots.txt korrekt
- [ ] Performance > 90 (Lighthouse)
- [ ] Mobile Responsive
- [ ] Cross-Browser getestet

### Content:
- [ ] Min. 5 Blog-Artikel
- [ ] Min. 5 Lesewelt-Stories
- [ ] Alle Bilder optimiert
- [ ] Alle Alt-Texte gesetzt
- [ ] Produkt-Boxen verlinkt

### SEO:
- [ ] Google Search Console setup
- [ ] Sitemap eingereicht
- [ ] Analytics eingerichtet
- [ ] Schema.org implementiert

### Integration:
- [ ] WordPress-Links funktionieren
- [ ] Header/Footer integriert
- [ ] Reverse Proxy läuft

---

## 🎯 Timeline (geschätzt)

| Phase | Dauer | Start | Ende |
|-------|-------|-------|------|
| 1. Technische Entscheidungen | 1-2 Tage | Tag 1 | Tag 2 |
| 2. Projekt-Setup | 2-3 Tage | Tag 3 | Tag 5 |
| 3. Design & Komponenten | 3-5 Tage | Tag 6 | Tag 10 |
| 4. Content erstellen | 2-4 Wochen | Tag 6 | Tag 34 |
| 5. SEO-Implementierung | 3-5 Tage | Tag 11 | Tag 15 |
| 6. WordPress-Integration | 2-3 Tage | Tag 16 | Tag 18 |
| 7. Deployment & Launch | 1-2 Tage | Tag 19 | Tag 20 |
| **TOTAL** | **ca. 4-6 Wochen** | - | - |

**Hinweis**: Content-Erstellung kann parallel zur Entwicklung laufen

---

## 🆘 Support & Ressourcen

### Dokumentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Schema.org](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)

### Tools:
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Google Search Console](https://search.google.com/search-console)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## ✅ Ready to Start!

Die Planung ist abgeschlossen. Sobald die technischen Entscheidungen getroffen sind, kann mit der Umsetzung begonnen werden.

**Viel Erfolg! 🚀**
