// Runs before `npm run build`. Writes public/sitemap.xml and public/robots.txt.
// Both depend on seo.siteUrl in site.config.json: with no URL the site stays
// blocked from search (robots Disallow + noindex meta), so a mockup is never indexed.
//
// Sitemap URLs are built from the same service list the site renders, so adding a
// service to site.config.json adds it here. <lastmod> is omitted on purpose: the
// content lives in shared data files, so a per-URL date would be a guess.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const config = JSON.parse(readFileSync(join(root, "src/config/site.config.json"), "utf8"));
const siteUrl = (config.seo?.siteUrl ?? "").replace(/\/+$/, "");
const robotsPath = join(root, "public/robots.txt");

if (!siteUrl) {
  writeFileSync(
    robotsPath,
    "# No production domain configured: keep this site out of search indexes.\nUser-agent: *\nDisallow: /\n",
  );
  console.log("[seo] seo.siteUrl is empty: robots.txt blocks crawling, sitemap skipped.");
  process.exit(0);
}

// Route slug for each enabled service key (matches src/routes/services.*.tsx).
const SERVICE_PATHS = {
  mowing: "lawn-mowing",
  mulch: "mulch-stone-installation",
  cleanups: "seasonal-cleanups",
  aeration: "lawn-aeration",
  bedMaintenance: "garden-bed-maintenance",
  trimming: "shrub-bush-trimming",
  brushRemoval: "brush-yard-waste-removal",
  planting: "flower-shrub-small-tree-planting",
  gutterCleaning: "gutter-cleaning",
  gardenBeds: "garden-beds-shrubs-planting",
};
const urls = [
  `${siteUrl}/`,
  ...config.services.enabled.map((k) => {
    if (!SERVICE_PATHS[k]) throw new Error(`[seo] no route slug for service key "${k}"`);
    return `${siteUrl}/services/${SERVICE_PATHS[k]}`;
  }),
  `${siteUrl}/service-areas`,
];

writeFileSync(
  join(root, "public/sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>
`,
);
writeFileSync(robotsPath, `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`[seo] wrote sitemap.xml (${urls.length} URLs) and robots.txt for ${siteUrl}`);
