import { defineConfig } from 'astro/config';

// URL publique du site, utilisée pour le canonical, robots.txt, sitemap.xml et le JSON-LD.
// Domaine de production par défaut : https://pneus-occasion-perpignan.fr
// Pour construire avec un autre domaine (ex. préversion), définir la variable SITE_URL.
const siteUrl = (process.env.SITE_URL || 'https://pneus-occasion-perpignan.fr').replace(/\/+$/, '');

export default defineConfig({
  site: siteUrl,
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
