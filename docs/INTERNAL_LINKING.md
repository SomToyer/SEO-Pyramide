# Interne Verlinkungsstrategie

Dieses Dokument definiert die Strategie für interne Links zwischen allen Seiten.

---

## 🔗 Warum interne Verlinkung?

**Vorteile:**
- ✅ Besseres SEO-Ranking (Link Juice Distribution)
- ✅ Längere Verweildauer (User verweilen länger)
- ✅ Niedrigere Bounce Rate
- ✅ Bessere Indexierung (Crawler entdecken mehr Seiten)
- ✅ Content-Cluster (Thematische Zusammenhänge)

**Ziel**: Jede Seite sollte **mindestens 2-3 interne Links** haben (eingehend + ausgehend)

---

## 🎯 Link-Hierarchie

### Top-Level (Homepage):
```
fluxie.de (WordPress)
├── /blog
├── /lesewelt
├── /shop
└── /ueber-uns
```

### Blog-Hierarchie:
```
/blog
├── /blog/lrs
│   ├── /blog/lrs/silbentrennung-so-lernen-kinder-lesen
│   ├── /blog/lrs/lrs-erkennen-symptome
│   └── /blog/lrs/lrs-foerderung-zuhause
│
└── /blog/vorlesen
    ├── /blog/vorlesen/leseecke-einrichten-tipps
    ├── /blog/vorlesen/vorlesen-warum-wichtig
    └── /blog/vorlesen/buecher-auswahl-alter
```

### Lesewelt-Hierarchie:
```
/lesewelt
├── /lesewelt/neue-fluxie-geschichten
│   ├── /lesewelt/neue-fluxie-geschichten/herbert-hahn
│   ├── /lesewelt/neue-fluxie-geschichten/luna-die-loewin
│   └── /lesewelt/neue-fluxie-geschichten/bomo-und-die-kleine-welt
│
└── /lesewelt/gutenachtgeschichten
    ├── /lesewelt/gutenachtgeschichten/schlafschafe
    └── /lesewelt/gutenachtgeschichten/sandmann
```

---

## 🔀 Link-Typen

### 1. Navigationslinks (Strukturell)
- **Header**: Home, Blog, Lesewelt, Shop, Über Uns
- **Footer**: Impressum, Datenschutz, Kontakt
- **Breadcrumb**: Home > Blog > LRS > Artikel

### 2. Kontext-Links (Im Content)
- Im Fließtext verlinkt
- Anchor-Text = Keyword
- Natürlich eingebunden

### 3. Verwandte Inhalte
- "Das könnte dich auch interessieren"
- 3-4 Kacheln am Ende des Artikels
- Automatisch basierend auf Kategorie/Tags

### 4. Fluxie-Produkt-Boxen
- Link zum WordPress-Shop
- Produkt-spezifisch

---

## 📝 Verlinkungsstrategie: Blog

### Blog-Hauptseite → Kategorien:
```
/blog → /blog/lrs
/blog → /blog/vorlesen
```

**Wo**: Kategorien-Grid auf der Hauptseite

---

### Blog-Hauptseite → Featured Artikel:
```
/blog → /blog/lrs/silbentrennung-so-lernen-kinder-lesen
/blog → /blog/vorlesen/leseecke-einrichten-tipps
```

**Wo**: Featured Artikel-Sektion (Hero/Top)

---

### Kategorie-Seite → Artikel:
```
/blog/lrs → /blog/lrs/silbentrennung-so-lernen-kinder-lesen
/blog/lrs → /blog/lrs/lrs-erkennen-symptome
/blog/lrs → /blog/lrs/lrs-foerderung-zuhause
```

**Wo**: Artikel-Grid auf Kategorie-Seite

---

### Artikel → Kategorie:
```
/blog/lrs/silbentrennung-so-lernen-kinder-lesen → /blog/lrs
```

**Wo**: Breadcrumb + "Mehr aus dieser Kategorie"

---

### Artikel → Verwandte Artikel (gleiche Kategorie):
```
/blog/lrs/silbentrennung-so-lernen-kinder-lesen
  → /blog/lrs/lrs-erkennen-symptome
  → /blog/lrs/lrs-foerderung-zuhause
  → /blog/lrs/uebungen-lrs-kinder
```

**Wo**: "Verwandte Artikel" am Ende (3-4 Kacheln)

**Logik**: Automatisch basierend auf:
1. Gleiche Kategorie
2. Gleiche Tags
3. Neueste zuerst

---

### Artikel → Andere Kategorien (Cross-Links):
```
/blog/lrs/silbentrennung-so-lernen-kinder-lesen
  → /blog/vorlesen/leseecke-einrichten-tipps (im Text erwähnt)
```

**Wo**: Im Fließtext (kontextuell)

**Beispiel**:
> "Neben Silbentrennung ist auch die **[richtige Leseumgebung](/blog/vorlesen/leseecke-einrichten-tipps)** wichtig."

---

### Artikel → Lesewelt-Stories:
```
/blog/lrs/silbentrennung-so-lernen-kinder-lesen
  → /lesewelt/neue-fluxie-geschichten/herbert-hahn (im Text oder Box)
```

**Wo**: Im Text oder als Link in Produkt-Box

**Beispiel**:
> "Die Geschichte **[Herbert Hahn](/lesewelt/neue-fluxie-geschichten/herbert-hahn)** nutzt die Silbenmethode."

---

### Artikel → WordPress Shop (Produkt-Boxen):
```
/blog/lrs/silbentrennung-so-lernen-kinder-lesen
  → https://fluxie.de/produkt/kruemelbrandt-der-backdrache/
```

**Wo**: Fluxie-Produkt-Boxen (2-3 pro Artikel)

---

## 📚 Verlinkungsstrategie: Lesewelt

### Lesewelt-Hauptseite → Kategorien:
```
/lesewelt → /lesewelt/neue-fluxie-geschichten
/lesewelt → /lesewelt/gutenachtgeschichten
```

**Wo**: Kategorien-Grid

---

### Lesewelt-Hauptseite → Featured Stories:
```
/lesewelt → /lesewelt/neue-fluxie-geschichten/herbert-hahn
/lesewelt → /lesewelt/gutenachtgeschichten/luna-die-loewin
```

**Wo**: Featured Content (neueste Geschichten)

---

### Kategorie-Seite → Stories:
```
/lesewelt/neue-fluxie-geschichten
  → /lesewelt/neue-fluxie-geschichten/herbert-hahn
  → /lesewelt/neue-fluxie-geschichten/luna-die-loewin
  → /lesewelt/neue-fluxie-geschichten/bomo-und-die-kleine-welt
```

**Wo**: Artikel-Liste/Grid

---

### Story → Kategorie:
```
/lesewelt/neue-fluxie-geschichten/herbert-hahn
  → /lesewelt/neue-fluxie-geschichten
```

**Wo**: Breadcrumb + "Mehr Geschichten aus dieser Kategorie"

---

### Story → Verwandte Stories (gleiche Kategorie):
```
/lesewelt/neue-fluxie-geschichten/herbert-hahn
  → /lesewelt/neue-fluxie-geschichten/luna-die-loewin
  → /lesewelt/neue-fluxie-geschichten/bomo-und-die-kleine-welt
  → /lesewelt/neue-fluxie-geschichten/kruemelbrandt
```

**Wo**: "Verwandte Geschichten" am Ende (3 Kacheln)

---

### Story → Andere Kategorien (Cross-Links):
```
/lesewelt/neue-fluxie-geschichten/herbert-hahn
  → /lesewelt/gutenachtgeschichten/luna-die-loewin (thematisch verwandt)
```

**Wo**: "Das könnte dir auch gefallen" (optional)

---

### Story → WordPress Shop (Produkt-Boxen):
```
/lesewelt/neue-fluxie-geschichten/herbert-hahn
  → https://fluxie.de/produkt/herbert-hahn-wer-macht-den-groessten-platscher/
```

**Wo**: Fluxie-Produkt-Box (top + mid-content)

---

## 🔀 Cross-Linking: Blog ↔ Lesewelt

### Blog → Lesewelt (Stories als Beispiele):
```
/blog/lrs/silbentrennung-so-lernen-kinder-lesen
  → /lesewelt/neue-fluxie-geschichten/kruemelbrandt

/blog/vorlesen/gutenachtgeschichten-tipps
  → /lesewelt/gutenachtgeschichten/luna-die-loewin
```

**Wo**: Im Fließtext oder als Empfehlung

**Beispiel**:
> "Perfekt für die Silbenmethode eignet sich die **[Krümelbrandt-Geschichte](/lesewelt/neue-fluxie-geschichten/kruemelbrandt)**."

---

### Lesewelt → Blog (Ratgeber-Tipps):
```
/lesewelt/neue-fluxie-geschichten/herbert-hahn
  → /blog/vorlesen/vorlesen-tipps-kinder

/lesewelt/gutenachtgeschichten/luna-die-loewin
  → /blog/vorlesen/gutenachtgeschichten-tipps
```

**Wo**: Am Ende der Story oder in Sidebar

**Beispiel**:
> "Tipps zum Vorlesen dieser Geschichte findest du in unserem **[Vorlese-Ratgeber](/blog/vorlesen/vorlesen-tipps-kinder)**."

---

## 🏠 Verlinkung WordPress ↔ Blog/Lesewelt

### WordPress Homepage → Blog/Lesewelt:
```
fluxie.de → /blog
fluxie.de → /lesewelt
```

**Wo**: Hauptmenü (Header)

---

### WordPress Shop → Lesewelt (Stories zu Produkten):
```
https://fluxie.de/produkt/herbert-hahn/
  → /lesewelt/neue-fluxie-geschichten/herbert-hahn
```

**Wo**: Produktseite (Tab oder Sektion "Geschichte lesen")

---

### WordPress Shop → Blog (Ratgeber):
```
https://fluxie.de/produkt/kruemelbrandt/
  → /blog/lrs/silbentrennung-so-lernen-kinder-lesen
```

**Wo**: Produktseite ("Tipps zur Nutzung")

---

### WordPress "Über Uns" → Blog:
```
https://fluxie.de/ueber-uns
  → /blog
```

**Wo**: Im Text ("Mehr über Leseförderung in unserem Blog")

---

## 📊 Anchor-Text-Strategie

### Best Practices:
- **Keyword-reich**: Anchor-Text enthält relevante Keywords
- **Natürlich**: Klingt nicht erzwungen
- **Variabel**: Nicht immer gleicher Text für gleichen Link
- **Beschreibend**: User weiß, was ihn erwartet

### Beispiele (gut):
✅ "Tipps zur **[Silbentrennung beim Lesen lernen](/blog/lrs/silbentrennung)**"
✅ "Die **[Herbert Hahn Geschichte](/lesewelt/neue-fluxie-geschichten/herbert-hahn)** ist perfekt für Leseanfänger"
✅ "Mehr über **[LRS-Symptome bei Kindern](/blog/lrs/lrs-erkennen-symptome)**"

### Beispiele (schlecht):
❌ "**[Klicke hier](/blog/lrs/silbentrennung)**"
❌ "**[Mehr erfahren](/lesewelt/neue-fluxie-geschichten/herbert-hahn)**"
❌ "**[Link](/blog/lrs/lrs-erkennen-symptome)**"

---

## 🎯 Content-Cluster-Strategie

### Cluster 1: LRS-Thema

**Pillar-Page (Haupt-Artikel)**:
- `/blog/lrs/lrs-komplett-guide` (umfassender Artikel)

**Cluster-Artikel (detaillierte Artikel)**:
- `/blog/lrs/silbentrennung-so-lernen-kinder-lesen`
- `/blog/lrs/lrs-erkennen-symptome`
- `/blog/lrs/lrs-foerderung-zuhause`
- `/blog/lrs/uebungen-lrs-kinder`

**Alle Cluster-Artikel verlinken zur Pillar-Page**:
> "Dieser Artikel ist Teil unseres **[LRS-Komplett-Guides](/blog/lrs/lrs-komplett-guide)**."

**Pillar-Page verlinkt zu allen Cluster-Artikeln**:
> "Mehr Details zur **[Silbentrennung](/blog/lrs/silbentrennung-so-lernen-kinder-lesen)**"

---

### Cluster 2: Vorlesen-Thema

**Pillar-Page**:
- `/blog/vorlesen/vorlesen-komplett-guide`

**Cluster-Artikel**:
- `/blog/vorlesen/leseecke-einrichten-tipps`
- `/blog/vorlesen/vorlesen-warum-wichtig`
- `/blog/vorlesen/buecher-auswahl-alter`
- `/blog/vorlesen/gutenachtgeschichten-tipps`

---

### Cluster 3: Geschichten-Thema (Lesewelt)

**Pillar-Page**:
- `/lesewelt/neue-fluxie-geschichten` (Kategorie-Seite)

**Cluster-Seiten**:
- `/lesewelt/neue-fluxie-geschichten/herbert-hahn`
- `/lesewelt/neue-fluxie-geschichten/luna-die-loewin`
- `/lesewelt/neue-fluxie-geschichten/bomo-und-die-kleine-welt`

---

## 🔢 Link-Anzahl pro Seite

### Empfehlungen:

| Seiten-Typ | Ausgehende Links (intern) | Eingehende Links (intern) |
|------------|---------------------------|---------------------------|
| **Homepage** | 10-15 (Menü, Featured) | Viele (von allen Seiten) |
| **Blog-Hauptseite** | 20-30 (Kategorien, Featured, Grid) | 5-10 |
| **Kategorie-Seite** | 10-20 (Artikel-Liste) | 5-10 |
| **Blog-Artikel** | 5-10 (verwandte, Produkt-Boxen) | 2-5 |
| **Lesewelt-Hauptseite** | 15-25 (Kategorien, Featured) | 5-10 |
| **Story** | 5-8 (verwandte, Produkt-Boxen) | 2-5 |

**Wichtig**: Nicht übertreiben! Zu viele Links = Dilution (Link Juice wird verteilt)

---

## 🧭 Breadcrumb-Links

**Auf jeder Seite** (außer Homepage):

### Blog-Artikel:
```html
<nav aria-label="Breadcrumb">
  <a href="/">Home</a> >
  <a href="/blog">Blog</a> >
  <a href="/blog/lrs">LRS</a> >
  <span>Silbentrennung – So lernen Kinder lesen</span>
</nav>
```

### Lesewelt-Story:
```html
<nav aria-label="Breadcrumb">
  <a href="/">Home</a> >
  <a href="/lesewelt">Lesewelt</a> >
  <a href="/lesewelt/neue-fluxie-geschichten">Neue Fluxie Geschichten</a> >
  <span>Herbert Hahn</span>
</nav>
```

**SEO-Bonus**: Breadcrumbs erscheinen in Google-Suchergebnissen

---

## 🔗 Footer-Links

**Global Footer** (auf allen Seiten):

### Hauptbereiche:
- [Home](/)
- [Blog](/blog)
- [Lesewelt](/lesewelt)
- [Shop](https://fluxie.de/shop)
- [Über Uns](https://fluxie.de/ueber-uns)

### Blog-Kategorien:
- [LRS](/blog/lrs)
- [Vorlesen](/blog/vorlesen)

### Lesewelt-Kategorien:
- [Neue Geschichten](/lesewelt/neue-fluxie-geschichten)
- [Gutenachtgeschichten](/lesewelt/gutenachtgeschichten)

### Legal:
- [Impressum](https://fluxie.de/impressum)
- [Datenschutz](https://fluxie.de/datenschutz)
- [Kontakt](https://fluxie.de/kontakt)

---

## 📝 Verwandte Artikel/Stories: Automatisierung

### Logik für "Verwandte Artikel":

```javascript
function getRelatedArticles(currentArticle, allArticles, limit = 3) {
  return allArticles
    .filter(a => a.id !== currentArticle.id) // Nicht aktuellen Artikel
    .map(a => ({
      article: a,
      score: calculateRelevanceScore(currentArticle, a)
    }))
    .sort((a, b) => b.score - a.score) // Höchster Score zuerst
    .slice(0, limit) // Top 3
    .map(item => item.article);
}

function calculateRelevanceScore(article1, article2) {
  let score = 0;

  // Gleiche Kategorie: +10 Punkte
  if (article1.category === article2.category) {
    score += 10;
  }

  // Gemeinsame Tags: +5 Punkte pro Tag
  const commonTags = article1.tags.filter(tag =>
    article2.tags.includes(tag)
  );
  score += commonTags.length * 5;

  // Neuere Artikel bevorzugen: +1 Punkt pro Woche
  const weeksDiff = Math.floor(
    (new Date() - new Date(article2.publishedAt)) / (7 * 24 * 60 * 60 * 1000)
  );
  score += Math.max(0, 10 - weeksDiff);

  return score;
}
```

---

## 🎨 Darstellung: Verwandte Inhalte

### Komponente (Card-Grid):

```html
<section class="related-articles">
  <h2>Das könnte dich auch interessieren</h2>
  <div class="card-grid">

    <article class="card">
      <a href="/blog/lrs/lrs-erkennen-symptome">
        <img src="/images/lrs-erkennen.jpg" alt="LRS erkennen" />
        <h3>LRS erkennen: Symptome bei Kindern</h3>
        <p>Wie du Lese-Rechtschreib-Schwäche früh erkennst...</p>
        <span class="read-more">Weiterlesen →</span>
      </a>
    </article>

    <article class="card">
      <a href="/blog/lrs/lrs-foerderung-zuhause">
        <img src="/images/lrs-foerderung.jpg" alt="LRS Förderung" />
        <h3>LRS-Förderung zu Hause</h3>
        <p>Praktische Übungen für den Alltag...</p>
        <span class="read-more">Weiterlesen →</span>
      </a>
    </article>

    <article class="card">
      <a href="/blog/lrs/uebungen-lrs-kinder">
        <img src="/images/lrs-uebungen.jpg" alt="LRS Übungen" />
        <h3>Effektive Übungen bei LRS</h3>
        <p>Spielerische Methoden zur Förderung...</p>
        <span class="read-more">Weiterlesen →</span>
      </a>
    </article>

  </div>
</section>
```

---

## ✅ Checkliste: Interne Verlinkung

### Für jede Seite:
- [ ] **Breadcrumb**: Vorhanden und korrekt
- [ ] **Header-Navigation**: Home, Blog, Lesewelt verlinkt
- [ ] **Footer-Links**: Hauptbereiche, Kategorien, Legal
- [ ] **Verwandte Inhalte**: 3-4 Links am Ende
- [ ] **Kontextuelle Links**: 2-5 Links im Fließtext
- [ ] **Produkt-Boxen**: 1-3 Links zum Shop
- [ ] **Anchor-Texte**: Keyword-reich & beschreibend
- [ ] **Kategorie-Links**: Von Artikel zu Kategorie
- [ ] **Cross-Links**: Blog ↔ Lesewelt (wo sinnvoll)

### Für das gesamte Projekt:
- [ ] **Content-Cluster**: Definiert und verlinkt
- [ ] **Pillar-Pages**: Erstellt und verlinkt
- [ ] **Automatische Verwandte-Artikel**: Implementiert
- [ ] **Link-Monitoring**: Broken Links prüfen (monatlich)
- [ ] **Link-Analytics**: Tracking welche Links geklickt werden

---

## 🔍 Broken Link Monitoring

### Tools:
- Google Search Console (automatisch)
- https://www.deadlinkchecker.com/
- https://ahrefs.com/broken-link-checker

### Regelmäßig prüfen:
- [ ] Interne 404-Fehler
- [ ] Externe Links (zu WordPress)
- [ ] Redirects (301) korrekt?

---

## 📊 Link Analytics (optional)

### Tracking:
- Welche internen Links werden am häufigsten geklickt?
- Welche verwandten Artikel performen gut?
- Welche Produkt-Boxen konvertieren?

### Tools:
- Google Analytics (Event Tracking)
- Heatmaps (Hotjar, Crazy Egg)

---

**Zusammenfassung**: Eine starke interne Verlinkung ist essentiell für SEO und User Experience. Verwandte Artikel, kontextuelle Links und Breadcrumbs helfen sowohl Nutzern als auch Suchmaschinen, die Struktur der Website zu verstehen.
