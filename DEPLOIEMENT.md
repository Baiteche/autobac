# Déployer AutoBac66 sur Cloudflare

Le site est **100 % statique** : `npm run build` génère le dossier `dist` (3 pages — accueil, confirmation `/thanks`, 404 — 71 fichiers, 3,5 Mo, plus gros fichier 363 kB). Aucun serveur, aucune base de données à gérer.

---

## Option 1 — Git + déploiement automatique (recommandé)

Le dépôt Git local est déjà initialisé (branche `main`, premier commit fait). Il ne reste qu'à l'envoyer sur GitHub.

1. Crée un dépôt **privé** nommé `autobac66` sur <https://github.com/new> (ne coche rien d'autre : ni README, ni .gitignore).
2. Dans le dossier du projet :

   ```powershell
   git remote add origin https://github.com/TON-PSEUDO/autobac66.git
   git push -u origin main
   ```

3. Dans le tableau de bord Cloudflare : **Workers & Pages → Create application → Pages → Connect to Git**, autorise GitHub, choisis le dépôt `autobac66`.
4. Réglages de build :
   - **Framework preset** : `Astro`
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
   - **Root directory** : laisse vide
   - **Environment variable** : rien à définir — le domaine `https://pneus-occasion-perpignan.fr` est déjà la valeur par défaut du build
5. **Save and Deploy** → le site est en ligne en ~1 minute sur `https://autobac66.pages.dev` (URL de préversion), en attendant le domaine définitif.

Ensuite, chaque `git push` redéploie automatiquement le site.

> ⚠️ **À savoir avant de choisir** : un projet créé en « Direct Upload » (option 2) **ne peut pas** être converti en projet Git ensuite, et inversement. Si tu veux l'automatisation, choisis l'option 1 dès le départ.

---

## Option 2 — Sans compte Git : envoi direct

### 2a. En ligne de commande (Wrangler)

```powershell
npm run deploy
```

Cette commande fait `astro build` puis `npx wrangler pages deploy dist --project-name=autobac66`. Au premier lancement, Wrangler ouvre le navigateur pour te connecter à Cloudflare (OAuth) ; le projet `autobac66` est créé automatiquement s'il n'existe pas.

### 2b. Glisser-déposer (aucun terminal)

1. `npm run build` sur le poste.
2. Tableau de bord Cloudflare → **Workers & Pages → Create application → Get started → Drag and drop your files**.
3. Nom du projet : `autobac66`, puis glisse le **dossier `dist`** entier dans la zone d'upload.
4. **Deploy site** → `https://autobac66.pages.dev`.

Limite du glisser-déposer : 1 000 fichiers par envoi (nous en avons 71) et 25 Mio par fichier.

---

## Option 3 — Workers (la voie poussée par Cloudflare pour les nouveaux projets)

Crée un fichier `wrangler.jsonc` à la racine du projet :

```jsonc
{
  "name": "autobac66",
  "compatibility_date": "2026-09-28",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "404-page"
  }
}
```

Puis :

```powershell
npm run build
npx wrangler deploy
```

Tu peux aussi brancher un dépôt Git sur **Workers Builds** (build : `npm run build`, deploy : `npx wrangler deploy`). Pour un site vitrine comme celui-ci, Pages (option 1) reste plus simple et parfaitement supporté.

---

## Brancher le domaine `pneus-occasion-perpignan.fr`

1. Achète le domaine chez un registrar : OVH, Gandi, Ionos… (ou Cloudflare Registrar s'il propose le `.fr`). Un `.fr` coûte environ 8 à 12 € par an.
2. **Si le domaine n'est pas encore dans ton compte Cloudflare** : tableau de bord → **Add a site** → saisis `pneus-occasion-perpignan.fr` → choisis le plan **Free**. Cloudflare te donne 2 serveurs DNS (ex. `xxx.ns.cloudflare.com`) : remplace les serveurs DNS actuels chez ton registrar par ceux-là. Aucun transfert de domaine n'est nécessaire, seulement le changement de DNS (comptez de quelques minutes à 24 h de propagation).
3. Pages → ton projet → **Custom domains → Set up a custom domain** → saisis `pneus-occasion-perpignan.fr`, puis recommence pour `www.pneus-occasion-perpignan.fr`. Cloudflare crée les enregistrements DNS et le certificat SSL automatiquement.
4. **Rien d'autre à configurer côté code** : le canonical, `og:url`, `robots.txt`, `sitemap.xml` et le JSON-LD utilisent déjà `https://pneus-occasion-perpignan.fr` (valeur par défaut dans `astro.config.mjs`). La variable `SITE_URL` ne sert que si tu construis volontairement avec une autre URL.
5. Facultatif mais recommandé : **Rules → Redirect Rules** pour rediriger `www.pneus-occasion-perpignan.fr/*` vers `https://pneus-occasion-perpignan.fr/$1` (le site déclare l'apex comme adresse canonique), et **SSL/TLS → Edge Certificates → HSTS** activé (avec `max-age`, sans `includeSubDomains` au début).

Test en local avec une autre URL (par exemple l'URL `.pages.dev`) :

```powershell
$env:SITE_URL="https://autobac66.pages.dev"; npm run build; npm run preview
```

---

## Checklist après la mise en ligne

- [ ] `https://pneus-occasion-perpignan.fr/` : page complète (photos, avis, formulaire) et rapide
- [ ] `https://pneus-occasion-perpignan.fr/robots.txt` → contient `Sitemap: https://pneus-occasion-perpignan.fr/sitemap.xml`
- [ ] `https://pneus-occasion-perpignan.fr/sitemap.xml` → `<loc>https://pneus-occasion-perpignan.fr/</loc>`
- [ ] Page en ligne → « Afficher le code source » → `<link rel="canonical" href="https://pneus-occasion-perpignan.fr/">` (et non `.pages.dev`)
- [ ] `https://pneus-occasion-perpignan.fr/page-inexistante` → page 404 « Cette page a pris une crevaison »
- [ ] `https://pneus-occasion-perpignan.fr/thanks` → accessible mais bien en `noindex` (`<meta name="robots" content="noindex">`)
- [ ] `www.pneus-occasion-perpignan.fr` redirige bien vers l'apex (redirect rule) et le cadenas SSL s'affiche
- [ ] **Formulaire** : envoie une vraie demande de test (tu la recevras) — le récapitulatif s'affiche dans la page, l'email arrive via Formspree. Vérifie aussi l'adresse de réception dans ton compte Formspree (`formspree.io/f/mqpagwbn`).
- [ ] **Google Search Console** : ajoute la propriété (type « Préfixe d'URL »), valide, puis soumets `sitemap.xml`
- [ ] **Mesure d'audience** : Cloudflare Web Analytics (gratuit, sans cookie, aucun bandeau de consentement à ajouter) est plus simple que GA4, qui impose un bandeau cookies conforme CNIL/RGPD.
- [ ] Contenus à remplacer quand tu les as : photos réelles de l'atelier, avis clients réels, liens Instagram/Facebook (`src/data/site.ts`)

---

## Limites du plan gratuit Cloudflare Pages

| Ressource | Limite gratuite |
| --- | --- |
| Builds par mois | 500 (1 build à la fois) |
| Bande passante / requêtes | Illimitées |
| Domaine personnalisé + SSL | Inclus (100 domaines par projet) |
| Fichiers par site | 20 000 (25 Mio max par fichier) |
| Envoi par glisser-déposer | 1 000 fichiers par envoi |

---

## Ce qui, dans le projet, concerne le déploiement

| Fichier | Rôle |
| --- | --- |
| `astro.config.mjs` | `site` = variable `SITE_URL` (défaut : `https://pneus-occasion-perpignan.fr`) |
| `public/_headers` | Cache long (1 an) sur `/_astro/*` et `/fonts/*` + en-têtes de sécurité |
| `.node-version` | Node 22 (l'image de build Cloudflare utilise Node 22.16 par défaut) |
| `package.json` | Script `npm run deploy` (build + upload Wrangler) |
| `src/pages/robots.txt.ts` | `robots.txt` généré au build, `Disallow: /thanks` inclus |
| `src/pages/sitemap.xml.ts` | `sitemap.xml` généré au build avec l'URL réelle |
| `src/pages/404.astro` | Page 404 de marque (reprise par Cloudflare) |
| `.gitignore` | `dist/` et `node_modules/` exclus du dépôt (Cloudflare reconstruit) |

