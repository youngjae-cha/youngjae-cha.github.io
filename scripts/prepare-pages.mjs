import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// GitHub Pages serves directory indexes for the site's readable /section/ URLs.
// Retain the flat exports as well so either URL form resolves.
const output = 'dist/client';
for (const route of ['about', 'publications', 'research', 'teaching']) {
  const source = join(output, route + '.html');
  if (!existsSync(source)) throw new Error('Missing static export: ' + route);
  mkdirSync(join(output, route), { recursive: true });
  copyFileSync(source, join(output, route, 'index.html'));
}
for (const required of ['index.html', '404.html', 'robots.txt', 'sitemap.xml']) {
  if (!existsSync(join(output, required))) throw new Error('Missing public file: ' + required);
}
console.log('All five pages and the 404 page are ready for GitHub Pages.');
