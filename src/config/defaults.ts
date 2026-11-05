// ───────────────────────────────────────────────────────────────────────────
// Default copy for the Taylor LawnCare site. Any field can be overridden in
// site.config.json → content. Do not add unverified facts, years in
// business, ratings, or reviews here.
// ───────────────────────────────────────────────────────────────────────────

export const DEFAULT_CONTENT = {
  hero: {
    eyebrow: "Local Lawn Care & Property Maintenance",
    tagline: "Free estimates. Insured. Locally owned.",
    subheadline:
      "From routine lawn mowing to mulch installation and seasonal cleanups, we help homeowners keep their properties looking their best.",
  },
  about: {
    eyebrow: "Our Story",
    title: "Built From a Passion for Lawn Care. Driven by Pride in Every Property.",
    body: "Taylor LawnCare started with a simple dream during Noah Taylor's senior year of high school. What began as mowing a neighbor's lawn grew into a local property maintenance business built around hard work, dependable service, and lasting customer relationships.\n\nToday, Taylor LawnCare helps homeowners maintain beautiful outdoor spaces without the hassle. From regular mowing to seasonal property maintenance, Noah's goal is simple: deliver work customers can trust and results that put a smile on their faces.",
    badgeTitle: "Locally Owned",
    badgeText: "Eagle, Wisconsin",
  },
  faqs: [
    {
      q: "How do I get a free estimate?",
      a: "Fill out the estimate form on this page or call us during business hours. Tell us about your property and what you need, and we'll follow up with a straightforward, no-obligation estimate.",
    },
    {
      q: "Do you offer weekly and bi-weekly mowing?",
      a: "Yes. Both weekly and bi-weekly lawn mowing are available. Let us know which schedule fits your property and we'll go over the details with you.",
    },
    {
      q: "What other services do you offer besides mowing?",
      a: "We also handle mulch and stone installation, seasonal cleanups, lawn aeration, garden bed maintenance, shrub and plant trimming, brush and yard waste removal, flower, shrub and small tree planting, and gutter cleaning.",
    },
    {
      q: "Which areas do you serve?",
      a: "We're based in Eagle and serve homeowners throughout Waukesha County and surrounding communities, including Mukwonago, Oconomowoc, Delafield, Hartland, Brookfield, East Troy, and Elkhorn. Not sure if you're in our area? Give us a call.",
    },
    {
      q: "Is Taylor LawnCare insured?",
      a: "Yes, Taylor LawnCare is insured.",
    },
  ],
  footerBlurb:
    "Taylor LawnCare LLC is a locally owned lawn care and property maintenance company based in Eagle, Wisconsin, serving Waukesha County and surrounding communities.",
  finalCta: {
    title: "Ready for a Lawn You're Proud Of?",
    body: "Request a free, no-obligation estimate and let's talk about what your property needs.",
  },
  seo: {
    description:
      "Taylor LawnCare provides lawn mowing, mulch installation, seasonal cleanups, and property maintenance in Eagle, WI and throughout Waukesha County. Request a free estimate.",
  },
} as const;

export const DEFAULT_IMAGES = {
  hero: "/images/hero-striped-lawn-mower.webp",
  mowing: "/images/lawn-mowing-stripes-street.webp",
  mulch: "/images/mulch-bed-front-yard.webp",
  cleanups: "/images/leaf-covered-yard.webp",
  gardenBeds: "/images/garden-bed-mulch-plants.webp",
  aeration: "/images/lawn-mowing-stripes-field.webp",
  about: "/images/equipment-mower-on-trailer.webp",
  serviceMowing: "/images/lawn-mowing-featured.webp",
  serviceMulch: "/images/mulch-installation-featured.webp",
  serviceBedMaintenance: "/images/garden-bed-mulch-plants.webp",
  serviceTrimming: "/images/hero-striped-lawn-mower.webp",
  serviceBrush: "/images/open-lawn-spring.webp",
  servicePlanting: "/images/garden-bed-deck-corner.webp",
  serviceGutter: "/images/lawn-mowing-crosshatch-stripes.webp",
  galleryMowingA: "/images/lawn-mowing-stripes-field.webp",
  galleryMowingB: "/images/lawn-mowing-crosshatch-stripes.webp",
  galleryMowingC: "/images/lawn-mowing-hillside-stripes.webp",
  galleryMowingD: "/images/lawn-mowing-stripes-street.webp",
  galleryMulch: "/images/mulch-bed-front-yard.webp",
  galleryBedA: "/images/garden-bed-mulch-plants.webp",
  galleryBedB: "/images/garden-bed-deck-corner.webp",
  galleryCleanup: "/images/leaf-covered-yard.webp",
  galleryEquipment: "/images/equipment-mowers-street.webp",
  galleryEquipmentB: "/images/equipment-mower-on-trailer.webp",
  galleryOpenLawn: "/images/open-lawn-spring.webp",
} as const;
