import { defineConfig } from 'astro/config';

// URL publique du site, utilisée pour le canonical, robots.txt, sitemap.xml et le JSON-LD.
// En production : définir la variable d'environnement SITE_URL dans Cloudflare
// (ex. https://autobac66.fr) puis relancer un déploiement.
const siteUrl = (process.env.SITE_URL || 'https://autobac66.pages.dev').replace(/\/+$/, '');

export default defineConfig({
  site: siteUrl,
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
