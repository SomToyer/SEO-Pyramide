# Technologie-Entscheidungsmatrix

Dieses Dokument hilft bei der Auswahl des richtigen Tech-Stacks für Blog & Lesewelt.

---

## 🎯 Offene Entscheidungen

### 1. URL-Struktur
### 2. Frontend-Framework
### 3. Content Management
### 4. Hosting & Deployment
### 5. WordPress-Integration

---

## 1️⃣ URL-Struktur

### Option A: Unterverzeichnis ⭐ (Empfohlen)

**URLs:**
- `fluxie.de/blog/...`
- `fluxie.de/lesewelt/...`

**Vorteile:**
- ✅ Domain Authority bleibt zusammen
- ✅ Beste SEO-Performance
- ✅ Einheitliche Analytics
- ✅ Bessere User Experience (eine Domain)
- ✅ Einfachere SSL-Verwaltung

**Nachteile:**
- ⚠️ Reverse Proxy in WordPress/Server nötig
- ⚠️ Komplexere Konfiguration

**Technische Umsetzung:**
- WordPress: Reverse Proxy Plugin oder `.htaccess`
- Nginx: `proxy_pass` Konfiguration
- Vercel/Netlify: Custom Routing

**Empfehlung**: ⭐⭐⭐⭐⭐ (5/5) - Beste Lösung für SEO

---

### Option B: Subdomain

**URLs:**
- `blog.fluxie.de`
- `lesewelt.fluxie.de`

**Vorteile:**
- ✅ Technisch einfacher
- ✅ Unabhängiges Hosting
- ✅ Keine WordPress-Config nötig

**Nachteile:**
- ⚠️ SEO: Separate Domain Authority
- ⚠️ Getrennte Analytics
- ⚠️ User verwirrt (mehrere Domains)
- ⚠️ SSL für jede Subdomain

**Empfehlung**: ⭐⭐⭐ (3/5) - Technisch ok, SEO-Nachteil

---

## 2️⃣ Frontend-Framework

### Option A: Next.js 15 (React) ⭐ (Empfohlen)

**Features:**
- React Server Components
- App Router (File-based Routing)
- Image Optimization
- Built-in SEO (Metadata API)
- Static Site Generation (SSG)
- Server-Side Rendering (SSR)
- Incremental Static Regeneration (ISR)

**Vorteile:**
- ✅ Beste SEO-Performance (SSR/SSG)
- ✅ Große Community
- ✅ Vercel Hosting (optimal integriert)
- ✅ Markdown-Support (MDX)
- ✅ TypeScript-Support
- ✅ Modernes Development

**Nachteile:**
- ⚠️ React-Kenntnisse erforderlich
- ⚠️ Learning Curve (App Router neu)

**Best for**: SEO-optimierte Websites mit dynamischem Content

**Empfehlung**: ⭐⭐⭐⭐⭐ (5/5)

---

### Option B: Nuxt 3 (Vue)

**Features:**
- Vue 3 Composition API
- Auto-Imports
- SSR/SSG
- File-based Routing
- SEO-Module

**Vorteile:**
- ✅ Einfacher als React (für Vue-Fans)
- ✅ Gute SEO-Performance
- ✅ TypeScript-Support
- ✅ Markdown-Support

**Nachteile:**
- ⚠️ Kleinere Community als Next.js
- ⚠️ Vue-Kenntnisse erforderlich

**Best for**: Teams mit Vue-Erfahrung

**Empfehlung**: ⭐⭐⭐⭐ (4/5)

---

### Option C: Astro

**Features:**
- Zero-JS by default
- Partial Hydration
- Multi-Framework (React, Vue, Svelte)
- Markdown/MDX native

**Vorteile:**
- ✅ Extrem schnell (kaum JS)
- ✅ Perfekt für Content-Websites
- ✅ Sehr gute SEO
- ✅ Einfach zu lernen

**Nachteile:**
- ⚠️ Weniger Interaktivität
- ⚠️ Kleinere Community
- ⚠️ Weniger Plugins

**Best for**: Statische Content-Websites (Blog)

**Empfehlung**: ⭐⭐⭐⭐ (4/5)

---

### Option D: Gatsby (React)

**Features:**
- GraphQL Data Layer
- Static Site Generation
- Plugin-Ökosystem

**Vorteile:**
- ✅ Sehr schnell (SSG)
- ✅ Große Plugin-Bibliothek
- ✅ React-basiert

**Nachteile:**
- ⚠️ GraphQL Learning Curve
- ⚠️ Build-Zeit bei vielen Seiten
- ⚠️ Weniger aktiv als Next.js

**Best for**: Komplett statische Websites

**Empfehlung**: ⭐⭐⭐ (3/5) - Überholt von Next.js

---

## 3️⃣ Content Management

### Option A: Markdown-Files ⭐ (Empfohlen für Start)

**Content in**: `/content/blog/`, `/content/lesewelt/`

**Vorteile:**
- ✅ Kostenlos
- ✅ Versioniert (Git)
- ✅ Einfach zu migrieren
- ✅ Volle Kontrolle
- ✅ Schnell

**Nachteile:**
- ⚠️ Redakteure brauchen Git-Kenntnisse
- ⚠️ Keine Admin-UI (ohne Tools)
- ⚠️ Keine Kollaboration-Features

**Struktur:**
```
/content
├── /blog
│   ├── /lrs
│   │   ├── silbentrennung-so-lernen-kinder-lesen.md
│   │   └── lrs-erkennen-symptome.md
│   └── /vorlesen
│       └── leseecke-einrichten-tipps.md
└── /lesewelt
    ├── /neue-fluxie-geschichten
    │   ├── herbert-hahn.md
    │   └── luna-die-loewin.md
    └── /gutenachtgeschichten
        └── schlafschafe.md
```

**Best for**: MVP, kleine Teams, Developer-First

**Empfehlung**: ⭐⭐⭐⭐⭐ (5/5) - Perfekt für Start

---

### Option B: Headless CMS (Strapi, Contentful, Sanity)

**Content in**: Externe Datenbank

**Vorteile:**
- ✅ Admin-UI für Redakteure
- ✅ Kollaboration
- ✅ Workflow (Draft, Review, Publish)
- ✅ Medien-Management
- ✅ Rollen & Rechte

**Nachteile:**
- ⚠️ Zusätzliche Kosten (Hosting + Lizenz)
- ⚠️ Komplexer Setup
- ⚠️ API-Latenz (beim Fetch)

**Best for**: Größere Teams, viele Redakteure

**Empfehlung**: ⭐⭐⭐⭐ (4/5) - Gut für Scale

---

### Option C: WordPress als Headless CMS

**Content in**: WordPress (bestehend)

**Vorteile:**
- ✅ Alles an einem Ort
- ✅ Redakteure kennen WordPress
- ✅ Bereits vorhanden

**Nachteile:**
- ⚠️ WordPress Performance (API langsam)
- ⚠️ REST API Overhead
- ⚠️ Nicht ideal für moderne Frontends

**Best for**: Wenn WordPress bereits etabliert ist

**Empfehlung**: ⭐⭐⭐ (3/5) - Möglich, aber nicht optimal

---

### Option D: Notion / Google Docs (via API)

**Content in**: Notion, Google Docs

**Vorteile:**
- ✅ User-friendly für Redakteure
- ✅ Kostenlos (Notion Free Tier)
- ✅ Kollaboration eingebaut

**Nachteile:**
- ⚠️ API-Limits
- ⚠️ Nicht designed für CMS
- ⚠️ Migrations-Aufwand später

**Best for**: Schneller Prototyp

**Empfehlung**: ⭐⭐ (2/5) - Nur für Tests

---

## 4️⃣ Hosting & Deployment

### Option A: Vercel ⭐ (Empfohlen für Next.js)

**Features:**
- Next.js optimiert
- Auto-Deployment (Git Push)
- CDN global
- Preview-URLs
- Edge Functions
- Analytics

**Vorteile:**
- ✅ Zero-Config für Next.js
- ✅ Kostenlos (Hobby-Plan)
- ✅ Extrem schnell
- ✅ Einfaches Deployment

**Nachteile:**
- ⚠️ Vendor Lock-in
- ⚠️ Kosten bei Scale (Enterprise)

**Pricing**:
- **Free**: 100 GB Bandwidth/Monat
- **Pro**: $20/Monat (1 TB Bandwidth)

**Empfehlung**: ⭐⭐⭐⭐⭐ (5/5) - Perfekt für Next.js

---

### Option B: Netlify

**Features:**
- Static Site Hosting
- Edge Functions
- Form Handling
- CDN

**Vorteile:**
- ✅ Kostenlos (Starter)
- ✅ Einfach
- ✅ Gut für Astro, Gatsby

**Nachteile:**
- ⚠️ Nicht optimal für Next.js (SSR limitiert)

**Empfehlung**: ⭐⭐⭐⭐ (4/5) - Gut für SSG

---

### Option C: Eigener Server (VPS)

**Anbieter**: Hetzner, DigitalOcean, AWS

**Vorteile:**
- ✅ Volle Kontrolle
- ✅ Günstig bei Scale
- ✅ Keine Vendor Lock-in

**Nachteile:**
- ⚠️ Setup & Wartung
- ⚠️ Keine CDN (außer Cloudflare)
- ⚠️ DevOps-Know-how nötig

**Empfehlung**: ⭐⭐⭐ (3/5) - Nur bei DevOps-Team

---

## 5️⃣ WordPress-Integration

### Option A: Reverse Proxy (Unterverzeichnis)

**Technologie**: Nginx, Apache, Cloudflare Workers

**Setup**:
```nginx
# Nginx Config
location /blog {
    proxy_pass https://blog-app.vercel.app;
    proxy_set_header Host $host;
}

location /lesewelt {
    proxy_pass https://lesewelt-app.vercel.app;
    proxy_set_header Host $host;
}
```

**Vorteile:**
- ✅ Eine Domain (fluxie.de)
- ✅ Beste SEO

**Nachteile:**
- ⚠️ Server-Config nötig

**Empfehlung**: ⭐⭐⭐⭐⭐ (5/5)

---

### Option B: Subdomain (DNS)

**Setup**:
- `blog.fluxie.de` → CNAME zu Vercel
- `lesewelt.fluxie.de` → CNAME zu Vercel

**Vorteile:**
- ✅ Einfach (nur DNS)

**Nachteile:**
- ⚠️ SEO-Nachteil

**Empfehlung**: ⭐⭐⭐ (3/5)

---

### Option C: iFrame-Einbindung

**Setup**: WordPress-Seite mit iFrame zu externer App

**Vorteile:**
- ✅ Keine Server-Config

**Nachteile:**
- ❌ Katastrophal für SEO
- ❌ Schlechte UX
- ❌ Performance-Probleme

**Empfehlung**: ⭐ (1/5) - NICHT EMPFOHLEN

---

## 🏆 Finale Empfehlung

### Für **Fluxie** (Blog + Lesewelt):

**Tech-Stack:**
1. **Framework**: Next.js 15 (React, App Router)
2. **CMS**: Markdown-Files (Start), später Strapi
3. **Hosting**: Vercel
4. **URL-Struktur**: Unterverzeichnis (`fluxie.de/blog`, `fluxie.de/lesewelt`)
5. **Integration**: Reverse Proxy (Nginx oder Cloudflare Workers)

**Warum?**
- ✅ Beste SEO-Performance
- ✅ Moderne Entwicklung
- ✅ Einfach zu starten
- ✅ Skalierbar
- ✅ Kostenlos (anfangs)

---

## 📊 Vergleichstabelle

| Kriterium | Next.js + Vercel | Nuxt 3 + Netlify | Astro + Netlify | WordPress Headless |
|-----------|------------------|------------------|-----------------|---------------------|
| **SEO** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Entwicklung** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Kosten** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Community** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **CMS-freundlich** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## ✅ Nächste Schritte

Nach der Entscheidung:
1. Repository Setup
2. Next.js Projekt initialisieren
3. Markdown-Struktur erstellen
4. Erste Test-Artikel schreiben
5. SEO-Komponenten entwickeln
6. Deployment auf Vercel
7. WordPress-Integration testen

---

**Zusammenfassung**: Next.js + Vercel + Markdown ist die beste Kombination für Fluxie. Später kann auf Strapi migriert werden, wenn mehr Redakteure involviert sind.
