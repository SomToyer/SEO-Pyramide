# Fluxie Demo-Website

Demo-Implementierung der SEO-Struktur für Blog & Lesewelt.

## 🚀 Schnellstart

### Entwicklungsserver starten:

```powershell
cd demo-site
npm run dev
```

Die Website ist dann erreichbar unter: **http://localhost:3000**

---

## 📁 Struktur

### Lesewelt:
- **Hauptseite**: `/lesewelt`
- **Kategorie**: `/lesewelt/gutenachtgeschichten`
- **Unterkategorie**: `/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden`
- **Artikel**: `/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden/wuffi-und-die-schlafschafe`

### Blog:
- **Hauptseite**: `/blog`
- **Kategorie**: `/blog/vorlesen`
- **Artikel**: `/blog/vorlesen/leseecke-einrichten-tipps`

---

## 🎨 Features

✅ Next.js 16 App Router
✅ TypeScript
✅ Tailwind CSS für Styling
✅ Breadcrumb-Navigation auf allen Seiten
✅ Fluxie-Produkt-Boxen (verlinkt zu fluxie.de)
✅ Responsive Design
✅ SEO-freundliche URLs

---

## 📝 Befehle

```powershell
# Entwicklung
npm run dev

# Production Build
npm run build

# Production Server starten
npm run start
```

---

## 🔗 Navigation

1. Start: http://localhost:3000
2. Lesewelt: http://localhost:3000/lesewelt
3. Wuffi-Geschichte: http://localhost:3000/lesewelt/gutenachtgeschichten/gutenachtgeschichten-mit-hunden/wuffi-und-die-schlafschafe
4. Blog: http://localhost:3000/blog
5. Leseecke-Artikel: http://localhost:3000/blog/vorlesen/leseecke-einrichten-tipps

---

## 💡 Nächste Schritte

Diese Demo zeigt die Grundstruktur. Für die vollständige Umsetzung:

1. Weitere Kategorien und Artikel hinzufügen
2. CMS integrieren (z.B. Markdown-Files)
3. SEO-Meta-Tags optimieren
4. Schema.org JSON-LD implementieren
5. Sitemap generieren
6. WordPress-Integration (Reverse Proxy)

Details siehe `/docs` im Hauptverzeichnis.
