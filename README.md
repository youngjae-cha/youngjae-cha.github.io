# Youngjae Cha's academic website

A static, multi-page academic website for youngjaecha.com.

## Pages
Home, Research, Publications, Teaching & Mentoring, Reading, About & Contact.

Public content intentionally excludes a CV, education timeline, personal phone number, and recommendation letters. Manuscript abstracts reproduce author-provided text. Author-supplied Zenodo draft preview links are included only for the three manuscripts selected for sharing; no manuscript files are hosted in this repository.

## Development
- Node.js 22.13 or newer
- `npm ci`
- `npm run dev`
- `npm run build` exports public assets into `dist/client`.

The GitHub Actions workflow publishes only the static export to GitHub Pages. The live site does not need a server, database, cookies, or analytics.

Update published citations in `lib/publications.ts` and current manuscripts in `lib/preprints.ts`. Omit abstract or preprint fields when none have been supplied; the page shows only available actions. Stable manuscript IDs connect Research and Teaching to the relevant citation. Research and teaching copy is in the respective `app/*/page.tsx` files.
