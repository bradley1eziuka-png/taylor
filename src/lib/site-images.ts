// Centralized imagery. Defaults live in /public/images (local, no external
// hosting). Override any key per client in site.config.json → branding.images.
import { DEFAULT_IMAGES } from "@/config/defaults";
import { siteConfig, type ImageKey } from "@/config";

export const IMAGES = { ...DEFAULT_IMAGES, ...siteConfig.branding.images } as Record<
  ImageKey,
  string
>;

// Full-bleed service page heroes: phones get an 800px copy of the photo instead of the
// full-size file. Widths are those of the full-size files in /public/images.
const FULL_WIDTH: Record<string, number> = {
  "lawn-mowing-stripes-street": 1600,
  "mulch-bed-front-yard": 1600,
  "leaf-covered-yard": 1200,
  "garden-bed-mulch-plants": 1600,
  "lawn-mowing-stripes-field": 1200,
  "garden-bed-cleanup-featured": 1400,
  "garden-bed-deck-corner": 1600,
  "brush-yard-waste-removal-featured": 1200,
  "flower-shrub-small-tree-planting-featured": 1400,
};

export function responsiveSrcSet(src: string): string | undefined {
  const name = /^\/images\/([^/]+)\.webp$/.exec(src)?.[1];
  const width = name ? FULL_WIDTH[name] : undefined;
  return name && width ? `/images/${name}-800.webp 800w, ${src} ${width}w` : undefined;
}
