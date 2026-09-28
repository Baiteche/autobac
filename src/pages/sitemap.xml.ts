import type { APIRoute } from 'astro';

// Généré au build : suit automatiquement l'URL définie dans astro.config.mjs (SITE_URL).
export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://pneus-occasion-perpignan.fr')).href.replace(/\/$/, '');
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${base}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
