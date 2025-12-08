# Sitemap-Struktur

Dieses Dokument definiert die Sitemap-Strategie für Blog und Lesewelt.

---

## 🗺️ Was ist eine Sitemap?

Eine **XML Sitemap** ist eine Datei, die Suchmaschinen über alle URLs einer Website informiert.

**Vorteile:**
- ✅ Schnellere Indexierung neuer Inhalte
- ✅ Priorisierung wichtiger Seiten
- ✅ Angabe der Aktualisierungsfrequenz
- ✅ Besseres Crawling durch Bots

**Format**: XML (robots.txt verweist darauf)

---

## 📋 Sitemap-Strategie

### Option 1: Separate Sitemaps (Empfohlen)

**Struktur:**
```
/sitemap.xml (Sitemap-Index)
├── /sitemap-blog.xml (Blog-Artikel)
├── /sitemap-blog-kategorien.xml (Blog-Kategorien)
├── /sitemap-lesewelt.xml (Lesewelt-Stories)
└── /sitemap-lesewelt-kategorien.xml (Lesewelt-Kategorien)
```

**Vorteile:**
- ✅ Übersichtlicher
- ✅ Einfacher zu cachen
- ✅ Getrennte Update-Zyklen

### Option 2: Eine große Sitemap

**Struktur:**
```
/sitemap.xml (Alle URLs)
```

**Empfehlung**: Option 1 (separate Sitemaps) für bessere Wartbarkeit

---

## 🗂️ Sitemap-Index (`/sitemap.xml`)

Die Haupt-Sitemap verweist auf alle Unter-Sitemaps:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <sitemap>
    <loc>https://fluxie.de/sitemap-blog.xml</loc>
    <lastmod>2025-01-12T10:00:00Z</lastmod>
  </sitemap>

  <sitemap>
    <loc>https://fluxie.de/sitemap-blog-kategorien.xml</loc>
    <lastmod>2025-01-10T08:00:00Z</lastmod>
  </sitemap>

  <sitemap>
    <loc>https://fluxie.de/sitemap-lesewelt.xml</loc>
    <lastmod>2025-01-15T12:00:00Z</lastmod>
  </sitemap>

  <sitemap>
    <loc>https://fluxie.de/sitemap-lesewelt-kategorien.xml</loc>
    <lastmod>2025-01-10T08:00:00Z</lastmod>
  </sitemap>

</sitemapindex>
```

**Wichtig**: Bei Subdomain-Variante URLs anpassen:
- `https://blog.fluxie.de/sitemap-blog.xml`
- `https://lesewelt.fluxie.de/sitemap-lesewelt.xml`

---

## ✍️ Blog-Sitemap (`/sitemap-blog.xml`)

Alle **Blog-Artikel**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Hauptseite -->
  <url>
    <loc>https://fluxie.de/blog</loc>
    <lastmod>2025-01-12T10:00:00Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Artikel 1: Silbentrennung -->
  <url>
    <loc>https://fluxie.de/blog/lrs/silbentrennung-so-lernen-kinder-lesen</loc>
    <lastmod>2025-01-12T14:30:00Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://fluxie.de/images/silbentrennung-article.jpg</image:loc>
      <image:caption>Kind übt Silbentrennung mit Lesekarten</image:caption>
      <image:title>Silbentrennung lernen</image:title>
    </image:image>
  </url>

  <!-- Artikel 2: LRS erkennen -->
  <url>
    <loc>https://fluxie.de/blog/lrs/lrs-erkennen-symptome</loc>
    <lastmod>2025-01-10T09:00:00Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://fluxie.de/images/lrs-erkennen.jpg</image:loc>
      <image:caption>LRS Symptome bei Kindern erkennen</image:caption>
    </image:image>
  </url>

  <!-- Artikel 3: Leseecke einrichten -->
  <url>
    <loc>https://fluxie.de/blog/vorlesen/leseecke-einrichten-tipps</loc>
    <lastmod>2025-01-08T11:00:00Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>https://fluxie.de/images/leseecke.jpg</image:loc>
      <image:caption>Gemütliche Leseecke für Kinder</image:caption>
    </image:image>
  </url>

  <!-- Weitere Artikel... -->

</urlset>
```

### Prioritäten (Blog):
- **Hauptseite** (`/blog`): `1.0`
- **Featured Artikel**: `0.9`
- **Reguläre Artikel**: `0.7-0.8`
- **Ältere Artikel**: `0.6`

### Changefreq (Blog):
- **Hauptseite**: `daily` (neue Artikel)
- **Artikel**: `monthly` (bei Updates)
- **Archiv**: `yearly`

---

## 📂 Blog-Kategorien-Sitemap (`/sitemap-blog-kategorien.xml`)

Alle **Blog-Kategorien**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Kategorie: LRS -->
  <url>
    <loc>https://fluxie.de/blog/lrs</loc>
    <lastmod>2025-01-12T10:00:00Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Kategorie: Vorlesen -->
  <url>
    <loc>https://fluxie.de/blog/vorlesen</loc>
    <lastmod>2025-01-10T08:00:00Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Weitere Kategorien... -->

</urlset>
```

### Prioritäten (Kategorien):
- **Hauptkategorien**: `0.9`
- **Unterkategorien**: `0.7`

---

## 📚 Lesewelt-Sitemap (`/sitemap-lesewelt.xml`)

Alle **Lesewelt-Stories**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Hauptseite -->
  <url>
    <loc>https://fluxie.de/lesewelt</loc>
    <lastmod>2025-01-15T12:00:00Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Story 1: Herbert Hahn -->
  <url>
    <loc>https://fluxie.de/lesewelt/neue-fluxie-geschichten/herbert-hahn</loc>
    <lastmod>2025-01-15T10:00:00Z</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://fluxie.de/wp-content/uploads/2025/10/HerbertKarteProduct.png</image:loc>
      <image:caption>Herbert Hahn – Wer macht den größten Platscher?</image:caption>
      <image:title>Herbert Hahn Geschichte</image:title>
    </image:image>
  </url>

  <!-- Story 2: Luna die Löwin -->
  <url>
    <loc>https://fluxie.de/lesewelt/gutenachtgeschichten/luna-die-loewin</loc>
    <lastmod>2025-01-12T09:00:00Z</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://fluxie.de/wp-content/uploads/2025/08/4-2-1.png</image:loc>
      <image:caption>Luna – Die Löwin mit der leisen Stimme</image:caption>
    </image:image>
  </url>

  <!-- Story 3: Bomo und die Kleine Welt -->
  <url>
    <loc>https://fluxie.de/lesewelt/neue-fluxie-geschichten/bomo-und-die-kleine-welt</loc>
    <lastmod>2025-01-10T14:00:00Z</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>https://fluxie.de/wp-content/uploads/2025/08/Product_shots_bomo.png</image:loc>
      <image:caption>Bomo und die Kleine Welt</image:caption>
    </image:image>
  </url>

  <!-- Weitere Stories... -->

</urlset>
```

### Prioritäten (Lesewelt):
- **Hauptseite** (`/lesewelt`): `1.0`
- **Neue Stories**: `0.8`
- **Ältere Stories**: `0.6-0.7`

### Changefreq (Lesewelt):
- **Hauptseite**: `daily` (neue Stories)
- **Stories**: `yearly` (statischer Content)

---

## 📁 Lesewelt-Kategorien-Sitemap (`/sitemap-lesewelt-kategorien.xml`)

Alle **Lesewelt-Kategorien**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Kategorie: Neue Fluxie Geschichten -->
  <url>
    <loc>https://fluxie.de/lesewelt/neue-fluxie-geschichten</loc>
    <lastmod>2025-01-15T10:00:00Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Kategorie: Gutenachtgeschichten -->
  <url>
    <loc>https://fluxie.de/lesewelt/gutenachtgeschichten</loc>
    <lastmod>2025-01-12T09:00:00Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Weitere Kategorien... -->

</urlset>
```

---

## 📏 Sitemap-Limits

**Technische Limits:**
- Max. **50.000 URLs** pro Sitemap
- Max. **50 MB** Dateigröße (unkomprimiert)
- Bei Überschreitung: Mehrere Sitemaps erstellen

**Best Practices:**
- Gzip-Kompression verwenden (`.xml.gz`)
- Sitemaps regelmäßig aktualisieren
- Nur indexierbare URLs einbinden

---

## 🤖 robots.txt Integration

Die Sitemap muss in `robots.txt` verlinkt werden:

```
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://fluxie.de/sitemap.xml
Sitemap: https://fluxie.de/sitemap-blog.xml
Sitemap: https://fluxie.de/sitemap-lesewelt.xml

# Optional: WordPress Sitemaps
Sitemap: https://fluxie.de/wp-sitemap.xml
```

**Bei Subdomain-Variante:**

Separate `robots.txt` für jede Subdomain:

```
# blog.fluxie.de/robots.txt
User-agent: *
Allow: /
Sitemap: https://blog.fluxie.de/sitemap.xml

# lesewelt.fluxie.de/robots.txt
User-agent: *
Allow: /
Sitemap: https://lesewelt.fluxie.de/sitemap.xml
```

---

## 🔄 Automatische Sitemap-Generierung

### Next.js Beispiel:

```javascript
// pages/sitemap.xml.js
export async function getServerSideProps({ res }) {
  const blogArticles = await fetchAllBlogArticles();
  const leseweltStories = await fetchAllStories();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Blog Hauptseite -->
  <url>
    <loc>https://fluxie.de/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Blog Artikel -->
  ${blogArticles.map(article => `
  <url>
    <loc>https://fluxie.de/blog/${article.category}/${article.slug}</loc>
    <lastmod>${article.updatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}

  <!-- Lesewelt Stories -->
  ${leseweltStories.map(story => `
  <url>
    <loc>https://fluxie.de/lesewelt/${story.category}/${story.slug}</loc>
    <lastmod>${story.publishedAt}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}

</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
}

export default function Sitemap() {
  return null;
}
```

### Dynamisches lastmod:

```javascript
function getLastMod(content) {
  return content.updatedAt || content.publishedAt || new Date().toISOString();
}
```

---

## 📡 Sitemap bei Google einreichen

### 1. Google Search Console:
1. https://search.google.com/search-console
2. "Sitemaps" → "Neue Sitemap hinzufügen"
3. URL eingeben: `https://fluxie.de/sitemap.xml`
4. "Senden"

### 2. Bing Webmaster Tools:
1. https://www.bing.com/webmasters
2. "Sitemaps" → "Sitemap übermitteln"
3. URL eingeben: `https://fluxie.de/sitemap.xml`

### 3. Automatisch per Ping:

```bash
# Google
curl "https://www.google.com/ping?sitemap=https://fluxie.de/sitemap.xml"

# Bing
curl "https://www.bing.com/ping?sitemap=https://fluxie.de/sitemap.xml"
```

---

## 📊 Sitemap-Monitoring

### Überwachen:
- [ ] Anzahl indexierter URLs (Google Search Console)
- [ ] Fehlerhafte URLs
- [ ] Sitemap-Status (erfolgreich verarbeitet?)
- [ ] Letzte Aktualisierung

### Regelmäßig prüfen:
- Sitemap nach neuen Artikeln/Stories aktualisieren
- Gelöschte URLs aus Sitemap entfernen
- 404-Fehler beheben

---

## 🧪 Sitemap testen

### Validierung:
- https://www.xml-sitemaps.com/validate-xml-sitemap.html
- https://technicalseo.com/tools/sitemap-validator/

### Manuell testen:
```bash
# Sitemap abrufen
curl https://fluxie.de/sitemap.xml

# Validieren
xmllint --noout --schema http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd sitemap.xml
```

---

## 📝 Sitemap-Generierung: Checkliste

- [ ] **Sitemap-Index** erstellt (`/sitemap.xml`)
- [ ] **Blog-Sitemap** erstellt (`/sitemap-blog.xml`)
- [ ] **Blog-Kategorien-Sitemap** erstellt (`/sitemap-blog-kategorien.xml`)
- [ ] **Lesewelt-Sitemap** erstellt (`/sitemap-lesewelt.xml`)
- [ ] **Lesewelt-Kategorien-Sitemap** erstellt (`/sitemap-lesewelt-kategorien.xml`)
- [ ] **robots.txt** verlinkt auf Sitemaps
- [ ] **Prioritäten** korrekt gesetzt
- [ ] **Changefreq** realistisch
- [ ] **lastmod** aktuell
- [ ] **Image-Tags** für wichtige Bilder
- [ ] Bei Google Search Console eingereicht
- [ ] Bei Bing Webmaster Tools eingereicht
- [ ] Automatische Updates implementiert

---

## 🔄 Update-Strategie

### Wann Sitemap aktualisieren?
- **Neue Artikel/Stories**: Sofort
- **Aktualisierte Inhalte**: Bei Publish
- **Gelöschte Inhalte**: Sofort entfernen

### Automatisierung:
- Bei Deployment automatisch regenerieren
- Bei CMS: Hook nach Publish/Update
- Fallback: Täglicher Cron-Job

---

**Nächster Schritt**: Interne Verlinkungsstrategie definieren
