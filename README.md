# Taylor Lawn Care: website mockup

Mockup website for Taylor Lawn Care LLC (Eagle, WI), built from the master contractor template.
**Not production-ready**: no domain, no live form endpoint (see below).

```bash
npm install
npm run dev        # preview
npm run build      # production build (runs sitemap script first)
npm run typecheck && npm run lint && npm run check
```

- Business info, services enabled, hero copy, SEO, form provider: `src/config/site.config.json`
- Default copy (about, FAQs, CTA): `src/config/defaults.ts`
- Service page content: `src/lib/services-data.ts`
- Images: `public/images/` (originals preserved in `../Images/`)
- Colors: `src/styles.css`

## Before launch
- Set `seo.siteUrl` once the domain exists (adds canonical URLs + sitemap, and removes the `noindex` tag).
- `public/robots.txt` currently disallows all crawlers: restore `Allow: /` at launch.
- Connect the estimate form (`form.provider` → `formspree` or `ghl-webhook`); it is in demo mode and never reports a request as delivered.
