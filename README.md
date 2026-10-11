# DARTherapy ABA — Website (bilingual, static)

Static multi-page site (English + Spanish) ready to host on GitHub Pages / any static host.

## Structure
- `/` English site · `/es/` Spanish site (full parity, hreflang-linked)
- `assets/style.css`, `assets/main.js` — shared design system + nav JS
- `sitemap.xml`, `robots.txt`, `.htaccess` (legacy 301 redirects + HTTPS + 404)
- `REDIRECTS.md` — redirect list for non-Apache hosts
- 53 pages total (27 EN + 26 ES)

## Deploy
Serve the folder at the domain root (paths are root-relative, e.g. `/assets/style.css`).
On GitHub Pages use a custom domain (dartherapyaba.com) so root-relative links resolve.

## Still to wire on deploy (per build notes)
- Contact / Appointment / Upload-resume forms: set a form handler endpoint,
  email notification to daniel@dartherapyaba.com, spam protection & conversion tracking.
- Add GA4 / tracking snippet (not included).
- Optional: real photos (currently tasteful illustrations/placeholders).
- Migrate the 47 existing blog posts into `/blog/` (structure is in place).
