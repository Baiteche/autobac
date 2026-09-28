import type { APIRoute } from 'astro';

// Généré au build : suit automatiquement l'URL définie dans astro.config.mjs (SITE_URL).
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://pneus-occasion-perpignan.fr');
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /thanks',
    '',
    `Sitemap: ${new URL('sitemap.xml', base).href}`,
    ''
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
