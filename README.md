# Youngjae Cha's academic website

A static, multi-page academic website for youngjaecha.com.

## Pages
Home, Research, Publications, Teaching & Mentoring, About & Contact.

Public content intentionally excludes a CV, education timeline, personal phone number, recommendation letters, and private research materials.

## Development
- Node.js 22.13 or newer
- `npm ci`
- `npm run dev`
- `npm run build` exports public assets into `dist/client`.

The GitHub Actions workflow publishes only the static export to GitHub Pages. The live site does not need a server, database, cookies, or analytics.

Update published citations in `lib/publications.ts`. Research and teaching copy is in the respective `app/*/page.tsx` files.
