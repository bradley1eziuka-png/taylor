// SEO helpers: per-page head tags (title, description, canonical, Open Graph,
// Twitter) and JSON-LD structured data, all driven by site.config.json.
//
// Structured data only states facts the client supplied: no street address,
// coordinates, social profiles, or review/rating markup.
import { DEFAULT_CONTENT } from "@/config/defaults";
import { siteConfig } from "@/config";
import { BUSINESS_NAME, BUSINESS_PHONE_TEL, LOCATION_LABEL, SITE_URL } from "./site-config";
import { IMAGES } from "./site-images";
import { ALL_SERVICES, type ServiceConfig } from "./services-data";

const { business, seo } = siteConfig;

// Legal / brand name used in titles and structured data.
export const BRAND = "Taylor Lawn Care LLC";

function absolute(pathOrUrl: string) {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return SITE_URL ? `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}` : pathOrUrl;
}

// Canonical URL: root keeps its trailing slash, every other page has none.
export function canonicalUrl(path: string) {
  return SITE_URL ? `${SITE_URL}${path === "/" ? "/" : path}` : "";
}

export const HOME_TITLE =
  seo.title || `Lawn Care${LOCATION_LABEL ? ` in ${LOCATION_LABEL}` : ""} | ${BRAND}`;
export const HOME_DESCRIPTION = seo.description || DEFAULT_CONTENT.seo.description;

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// JSON-LD goes into a <script>: escape "<" so page text can never close the tag.
function ld(graph: unknown[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
    /</g,
    "\\u003c",
  );
}

function pageHead({
  title,
  description,
  path,
  graph,
}: {
  title: string;
  description: string;
  path: string;
  graph?: unknown[] | undefined;
}) {
  const ogImage = absolute(seo.ogImage || IMAGES.hero);
  const url = canonicalUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `${BRAND}: professional lawn care in Eagle, WI` },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: BRAND },
      { property: "og:locale", content: seo.locale },
      ...(url ? [{ property: "og:url", content: url }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: url ? [{ rel: "canonical", href: url }] : [],
    scripts: graph ? [{ type: "application/ld+json", children: ld(graph) }] : [],
  };
}

const areaServed = () =>
  business.serviceAreas.map((name) => ({
    "@type": "City",
    name: `${name}, ${business.address.state}`,
  }));

function businessNode() {
  const a = business.address;
  const hasAddress = Boolean(a.street || a.city || a.state || a.zip);
  // Google's short share links are not stable profile URLs, so they stay out of sameAs.
  const sameAs = Object.entries(business.social)
    .filter(([key, url]) => url && key !== "google")
    .map(([, url]) => url);
  return {
    "@type": "LandscapingBusiness",
    "@id": BUSINESS_ID,
    name: BRAND,
    alternateName: BUSINESS_NAME,
    url: `${SITE_URL}/`,
    description: HOME_DESCRIPTION,
    telephone: BUSINESS_PHONE_TEL.replace("tel:", ""),
    ...(business.email && { email: business.email }),
    image: absolute(seo.ogImage || IMAGES.hero),
    logo: absolute(siteConfig.branding.logo.src),
    ...(hasAddress && {
      address: {
        "@type": "PostalAddress",
        ...(a.street && { streetAddress: a.street }),
        ...(a.city && { addressLocality: a.city }),
        ...(a.state && { addressRegion: a.state }),
        ...(a.zip && { postalCode: a.zip }),
        addressCountry: "US",
      },
    }),
    ...(business.hours.length > 0 && {
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "19:00",
        },
      ],
    }),
    ...(business.serviceAreas.length > 0 && { areaServed: areaServed() }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lawn care and property maintenance services",
      itemListElement: ALL_SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
      })),
    },
    ...(sameAs.length > 0 && { sameAs }),
  };
}

const providerRef = () => ({
  "@type": "LandscapingBusiness",
  "@id": BUSINESS_ID,
  name: BRAND,
  url: `${SITE_URL}/`,
});

function breadcrumb(path: string, name: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl(path)}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name, item: canonicalUrl(path) },
    ],
  };
}

export function homeHead() {
  return pageHead({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    path: "/",
    graph: SITE_URL
      ? [
          businessNode(),
          {
            "@type": "WebSite",
            "@id": WEBSITE_ID,
            url: `${SITE_URL}/`,
            name: BRAND,
            publisher: { "@id": BUSINESS_ID },
          },
          {
            "@type": "WebPage",
            "@id": `${canonicalUrl("/")}#webpage`,
            url: canonicalUrl("/"),
            name: HOME_TITLE,
            description: HOME_DESCRIPTION,
            isPartOf: { "@id": WEBSITE_ID },
            about: { "@id": BUSINESS_ID },
          },
        ]
      : undefined,
  });
}

export function servicePageHead(service: ServiceConfig) {
  const title = `${service.seoTitle} | ${BRAND}`;
  const url = canonicalUrl(service.path);
  return pageHead({
    title,
    description: service.seoDescription,
    path: service.path,
    graph: SITE_URL
      ? [
          {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: title,
            description: service.seoDescription,
            isPartOf: { "@id": WEBSITE_ID },
            breadcrumb: { "@id": `${url}#breadcrumb` },
            primaryImageOfPage: absolute(service.heroImage),
          },
          breadcrumb(service.path, service.title),
          {
            "@type": "Service",
            "@id": `${url}#service`,
            name: service.title,
            serviceType: service.title,
            description: service.shortDescription,
            url,
            provider: providerRef(),
            areaServed: areaServed(),
          },
        ]
      : undefined,
  });
}

export const AREAS_PATH = "/service-areas";
export const AREAS_TITLE = `Lawn Care Service Areas near Eagle, WI | ${BRAND}`;
export const AREAS_DESCRIPTION =
  "Taylor Lawn Care serves Eagle, Mukwonago, Oconomowoc, Delafield, Hartland and other Waukesha County communities, plus nearby Palmyra, East Troy and Elkhorn.";

export function areasHead() {
  const url = canonicalUrl(AREAS_PATH);
  return pageHead({
    title: AREAS_TITLE,
    description: AREAS_DESCRIPTION,
    path: AREAS_PATH,
    graph: SITE_URL
      ? [
          {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: AREAS_TITLE,
            description: AREAS_DESCRIPTION,
            isPartOf: { "@id": WEBSITE_ID },
            breadcrumb: { "@id": `${url}#breadcrumb` },
            about: { "@id": BUSINESS_ID },
          },
          breadcrumb(AREAS_PATH, "Service Areas"),
        ]
      : undefined,
  });
}
