# GitHub Actions SFTP Deployment - Setup Abgeschlossen ✅

Automatisches Deployment für deine Lesewelt-Website ist jetzt eingerichtet!

## 🎯 Was wurde gemacht?

### 1. Next.js für statischen Export konfiguriert ✅
- **Datei:** `demo-site/next.config.js`
- **Änderung:** `output: 'export'` aktiviert
- **Ergebnis:** Build erstellt statische Dateien in `demo-site/out/`

### 2. GitHub Actions Workflow erstellt ✅
- **Datei:** `.github/workflows/deploy.yml`
- **Trigger:** Automatisch bei jedem Push auf `main` Branch
- **Ablauf:**
  1. Code auschecken
  2. Node.js 20 installieren
  3. Dependencies installieren (`npm ci`)
  4. Next.js builden (`npm run build`)
  5. Via SFTP nach Netcup deployen

### 3. Deployment-Ziel
- **Server:** Netcup Webhosting
- **Pfad:** `/wunschturm.de/httpdocs/lesewelt/`
- **URL:** `https://wunschturm.de/lesewelt/`

---

## 🚀 Nächste Schritte (WICHTIG!)

### Schritt 1: GitHub Secrets konfigurieren

Gehe zu deinem GitHub Repository:
**Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Erstelle folgende 3 Secrets:

| Secret Name | Wert | Beispiel |
|------------|------|----------|
| `FTP_SERVER` | Dein Netcup Server | `hosting157213.a2ef7.netcup.net` |
| `FTP_USERNAME` | Dein Hosting-Benutzername | `hosting157213` |
| `FTP_PASSWORD` | Dein Webspace-Passwort | `IhrSicheresPasswort` |

**Wo finde ich die Daten?**
- Netcup Customer Control Panel → **Webhosting** → **Anmeldedaten für Systembenutzer**

---

### Schritt 2: Deployment aktivieren

```bash
# Changes committen
git add .
git commit -m "feat: Add GitHub Actions SFTP deployment"

# Auf main Branch pushen
git push origin main
```

**Wichtig:** Der Workflow triggert nur bei Push auf `main` Branch!

---

### Schritt 3: Deployment überwachen

1. Gehe zu deinem GitHub Repository
2. Klicke auf **Actions** Tab
3. Du solltest einen laufenden Workflow sehen: "Deploy to Netcup via SFTP"
4. Warte bis er grün wird (✅) - dauert ca. 2-3 Minuten
5. Bei Fehlern (❌) klicke auf den Workflow für Details

---

## 🔧 Anpassungen & Konfiguration

### Branch ändern
Wenn dein Default-Branch nicht `main` heißt:

```yaml
# .github/workflows/deploy.yml
on:
  push:
    branches:
      - master  # oder 'develop', 'production', etc.
```

### Anderes Remote-Verzeichnis
Falls du in ein anderes Verzeichnis deployen möchtest:

```yaml
# .github/workflows/deploy.yml
remote_path: /wunschturm.de/httpdocs/DEIN-ORDNER/
```

### Base-Path für Unterverzeichnis
Falls deine App im Unterverzeichnis laufen soll:

```js
// demo-site/next.config.js
const nextConfig = {
  output: 'export',
  basePath: '/lesewelt',  // Entkommentieren falls nötig
  // ...
}
```

---

## 🧪 Lokalen Build testen

Bevor du pushst, kannst du den Build lokal testen:

```bash
cd demo-site
npm ci
npm run build

# Dateien sollten in demo-site/out/ liegen
ls -la out/
```

---

## ❗ Troubleshooting

### Fehler: "Authentication failed"
- ✅ Überprüfe GitHub Secrets (richtig geschrieben?)
- ✅ Teste SFTP-Zugangsdaten mit FileZilla
- ✅ Stelle sicher, dass SSH-Zugriff in Netcup aktiviert ist

### Fehler: "No such file or directory"
- ✅ Überprüfe `remote_path` in `.github/workflows/deploy.yml`
- ✅ Pfad muss mit `/` beginnen und enden
- ✅ Format: `/DOMAIN/httpdocs/VERZEICHNIS/`

### Fehler: "Build failed"
- ✅ Teste `npm run build` lokal
- ✅ Prüfe GitHub Actions Logs für Details
- ✅ Stelle sicher, dass alle Dependencies in `package.json` stehen

### WordPress überschrieben?
- ❌ **NIEMALS** `remote_path: /wunschturm.de/httpdocs/` verwenden!
- ✅ **IMMER** Unterverzeichnis: `/wunschturm.de/httpdocs/lesewelt/`

---

## 📊 Workflow-Status

Nach erfolgreichem Deployment:
- ✅ Dateien sind auf dem Server: `/wunschturm.de/httpdocs/lesewelt/`
- ✅ Website ist erreichbar: `https://wunschturm.de/lesewelt/`
- ✅ Automatisch bei jedem Push auf `main` Branch

---

## 🎉 Fertig!

Sobald du die GitHub Secrets eingerichtet hast und gepusht hast, läuft das Deployment automatisch!

**Viel Erfolg! 🚀**
