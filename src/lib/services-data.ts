// ───────────────────────────────────────────────────────────────────────────
// Service content for Taylor LawnCare.
//
// Every service page is generated from this single source of truth so all
// pages share one voice, layout, and visual system. Nine services are grouped
// into five pages: Lawn Mowing, Mulch & Stone Installation, Seasonal Cleanups
// (incl. brush/yard waste removal and gutter cleaning), Garden Beds, Shrubs &
// Planting, and Lawn Aeration. No fabricated claims, reviews, or statistics.
//
// To hide a service page, remove its key from site.config.json →
// services.enabled. Its page then returns 404 and it disappears from the nav,
// footer, homepage, and form dropdown.
// ───────────────────────────────────────────────────────────────────────────

import { siteConfig, type ServiceKey } from "@/config";
import { IMAGES } from "./site-images";

export type ServiceStep = { number: string; title: string; description: string };
export type ServiceBenefit = { title: string; description: string };
export type ServiceFaq = { q: string; a: string };
export type GalleryItem = { src: string; alt: string; label: string };

export interface ServiceConfig {
  slug: string;
  path: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  explanation: { title: string; body: string };
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  gallery: GalleryItem[];
  faqs: ServiceFaq[];
  heroImage: string;
  heroAlt: string;
  // ALL_SERVICES id preselected when a visitor clicks an estimate button on this page.
  estimateId: string;
}

// The same simple, three-step path applies to every service.
const SHARED_PROCESS: ServiceStep[] = [
  {
    number: "01",
    title: "Tell Us About Your Property",
    description: "Call or fill out the estimate form and share what you'd like taken care of.",
  },
  {
    number: "02",
    title: "Get a Free Estimate",
    description:
      "We'll go over the details with you and provide a straightforward, no-obligation estimate.",
  },
  {
    number: "03",
    title: "We Take Care of It",
    description: "Once we have a plan, we do the work so you don't have to lift a finger.",
  },
];

const BASE_SERVICES = {
  mowing: {
    slug: "lawn-mowing",
    path: "/services/lawn-mowing",
    title: "Weekly & Bi-Weekly Lawn Mowing",
    eyebrow: "Lawn Mowing in Eagle, WI & Waukesha County",
    shortDescription:
      "Reliable weekly or bi-weekly mowing that keeps your lawn clean, even, and looking its best all season.",
    explanation: {
      title: "A Lawn That Always Looks Cared For",
      body: "Regular mowing is the foundation of a good-looking yard. Taylor LawnCare offers weekly and bi-weekly lawn mowing for homeowners in Eagle and throughout Waukesha County, so your lawn stays neat without you giving up your weekends. Consistent cutting keeps grass healthy and even, and the finished lawn makes the whole property look sharper.",
    },
    benefits: [
      {
        title: "Weekly or Bi-Weekly",
        description: "Choose the mowing schedule that fits your lawn and your preferences.",
      },
      {
        title: "A Clean, Even Cut",
        description:
          "Careful mowing leaves your lawn looking uniform and well kept, from the front yard to the back.",
      },
      {
        title: "Dependable Service",
        description:
          "Noah's goal is to earn your trust with work you can count on, visit after visit.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.mowing,
        alt: "A freshly mowed lawn with bright green stripes beside a gravel shoulder and mature trees",
        label: "Freshly Mowed Lawn",
      },
      {
        src: IMAGES.galleryMowingB,
        alt: "A large lawn mowed in a crisscross stripe pattern in front of a home and tree",
        label: "Crisscross Mowing Stripes",
      },
      {
        src: IMAGES.galleryMowingC,
        alt: "Mowing stripes curving across a sloped lawn under large oak trees",
        label: "Stripes on a Sloped Lawn",
      },
      {
        src: IMAGES.hero,
        alt: "A red mower cutting a large striped lawn in front of a home and evergreen trees",
        label: "Mowing in Progress",
      },
    ],
    faqs: [
      {
        q: "Should I choose weekly or bi-weekly mowing?",
        a: "It depends on your lawn and how you like it to look. Weekly mowing keeps things the tidiest, while bi-weekly can work well for some properties. We're happy to talk through which fits best.",
      },
      {
        q: "Do I need to be home during mowing?",
        a: "No. As long as we can access the lawn, we can take care of it while you go about your day.",
      },
    ],
    heroImage: IMAGES.mowing,
    heroAlt:
      "A freshly mowed lawn with bright green stripes beside a gravel shoulder and mature trees",
    estimateId: "mowing",
  },

  mulch: {
    slug: "mulch-stone-installation",
    path: "/services/mulch-stone-installation",
    title: "Mulch & Stone Installation",
    eyebrow: "Mulch Installation in Waukesha County",
    shortDescription:
      "Fresh mulch and stone that define your landscape beds, finish your yard, and boost curb appeal.",
    explanation: {
      title: "Finished Beds, Cleaner Curb Appeal",
      body: "Fresh mulch or stone gives landscape beds a clean, finished look and helps them stay tidy. Taylor LawnCare installs mulch and stone for homeowners in Eagle and across Waukesha County, leaving crisp bed lines and an even layer that makes trees, shrubs, and plantings stand out against the lawn.",
    },
    benefits: [
      {
        title: "Instant Curb Appeal",
        description:
          "A fresh layer of mulch or stone makes beds look clean, defined, and well cared for.",
      },
      {
        title: "Tidy, Even Coverage",
        description:
          "Careful installation leaves a uniform finish that complements your lawn and plantings.",
      },
      {
        title: "Mulch or Stone",
        description: "Choose the material that suits your landscape and the look you want.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.mulch,
        alt: "A curved landscape bed with dark mulch and stone edging in front of a two-story home",
        label: "Mulched Bed With Edging",
      },
      {
        src: IMAGES.galleryBedA,
        alt: "A large mulched garden bed with green plants and a stepping stone beside a deck",
        label: "Mulched Garden Bed",
      },
      {
        src: IMAGES.galleryBedB,
        alt: "A mulched landscape bed with young plants and daffodils along the side of a home",
        label: "Bed Along the Home",
      },
      {
        src: IMAGES.galleryMowingA,
        alt: "A freshly mowed striped lawn beside a landscaped property",
        label: "Fresh Lawn & Landscape",
      },
    ],
    faqs: [
      {
        q: "Can you install mulch and stone?",
        a: "Yes. Taylor LawnCare installs both mulch and stone. Tell us about your beds and the look you're after, and we'll put together a free estimate.",
      },
      {
        q: "When is a good time to refresh mulch?",
        a: "Many homeowners refresh mulch in spring so beds look sharp for the season, but it can be done at other times too. Give us a call and we'll help you plan.",
      },
    ],
    heroImage: IMAGES.mulch,
    heroAlt: "A curved landscape bed with dark mulch and stone edging in front of a two-story home",
    estimateId: "mulch",
  },

  cleanups: {
    slug: "seasonal-cleanups",
    path: "/services/seasonal-cleanups",
    title: "Seasonal Cleanups",
    eyebrow: "Seasonal Yard Cleanup in Waukesha County",
    shortDescription:
      "Spring and fall cleanups, brush and yard waste removal, and gutter cleaning to reset your property for the season.",
    explanation: {
      title: "A Fresh Start Every Season",
      body: "Leaves, branches, and debris pile up as the seasons change. Taylor LawnCare's seasonal cleanups clear your property so it's ready for what's next. We also handle brush and yard waste removal and gutter cleaning, so the whole property looks and works better, without you having to spend a weekend on it.",
    },
    benefits: [
      {
        title: "Leaves & Debris Cleared",
        description:
          "Get your lawn and beds cleaned up at the turn of the seasons so the property looks its best.",
      },
      {
        title: "Brush & Yard Waste Removal",
        description:
          "We haul away brush and yard waste so you're not left with a pile to deal with.",
      },
      {
        title: "Gutter Cleaning",
        description: "Clear out your gutters as part of a complete seasonal reset for your home.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.cleanups,
        alt: "A yard covered in fallen leaves with long tree shadows across the lawn",
        label: "Leaf-Covered Yard",
      },
      {
        src: IMAGES.galleryOpenLawn,
        alt: "An open backyard lawn with large trees and long shadows in early spring",
        label: "Open Lawn in Spring",
      },
      {
        src: IMAGES.mulch,
        alt: "A tidy landscape bed with dark mulch and stone edging beside a freshly mowed lawn",
        label: "Tidy Landscape Bed",
      },
      {
        src: IMAGES.galleryMowingD,
        alt: "A freshly mowed lawn with clean stripes beside a road",
        label: "Finished Lawn",
      },
    ],
    faqs: [
      {
        q: "What's included in a seasonal cleanup?",
        a: "Every property is different, but cleanups typically focus on clearing leaves and debris. We also offer brush and yard waste removal and gutter cleaning. Tell us what your property needs and we'll include it in your free estimate.",
      },
      {
        q: "Can you haul away yard waste?",
        a: "Yes. Brush and yard waste removal is one of our services, so you don't have to deal with the pile.",
      },
    ],
    heroImage: IMAGES.cleanups,
    heroAlt: "A yard covered in fallen leaves with long tree shadows across the lawn",
    estimateId: "cleanups",
  },

  gardenBeds: {
    slug: "garden-beds-shrubs-planting",
    path: "/services/garden-beds-shrubs-planting",
    title: "Garden Beds, Shrubs & Planting",
    eyebrow: "Landscape Bed Maintenance in Eagle, WI",
    shortDescription:
      "Garden bed maintenance, shrub and bush trimming, and planting of flowers, shrubs, and small trees.",
    explanation: {
      title: "Landscaping That Stays Looking Good",
      body: "Well-kept garden beds are what make a property feel finished. Taylor LawnCare handles garden bed maintenance, shrub and bush trimming, and the planting of flowers, shrubs, and small trees, so your landscaping stays neat and healthy-looking from season to season.",
    },
    benefits: [
      {
        title: "Garden Bed Maintenance",
        description:
          "Keep your beds clean, defined, and free of the clutter that builds up over time.",
      },
      {
        title: "Shrub & Bush Trimming",
        description: "Regular trimming keeps shrubs and bushes shaped, tidy, and in proportion.",
      },
      {
        title: "Flower, Shrub & Small Tree Planting",
        description: "Add color and structure to your property with new plantings.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.galleryBedA,
        alt: "A mulched garden bed filled with green plants beside a lawn and deck",
        label: "Garden Bed",
      },
      {
        src: IMAGES.galleryBedB,
        alt: "A landscape bed with spring plants and daffodils along the side of a home",
        label: "Spring Planting",
      },
      {
        src: IMAGES.mulch,
        alt: "A curved mulch bed with ornamental grasses and a small tree in a front yard",
        label: "Front Yard Bed",
      },
      {
        src: IMAGES.hero,
        alt: "A well-kept lawn with evergreens and landscaping in front of a home",
        label: "Complete Landscape",
      },
    ],
    faqs: [
      {
        q: "Do you trim shrubs and plants?",
        a: "Yes. Shrub and bush trimming is one of our services, and it pairs well with garden bed maintenance and seasonal cleanups.",
      },
      {
        q: "Can you plant new flowers, shrubs, or small trees?",
        a: "Yes. We plant flowers, shrubs, and small trees. Tell us what you have in mind and we'll include it in your free estimate.",
      },
    ],
    heroImage: IMAGES.gardenBeds,
    heroAlt: "A mulched garden bed filled with green plants beside a lawn and deck",
    estimateId: "bed-maintenance",
  },

  aeration: {
    slug: "lawn-aeration",
    path: "/services/lawn-aeration",
    title: "Lawn Aeration",
    eyebrow: "Lawn Aeration in Waukesha County",
    shortDescription:
      "Aeration to help your lawn breathe and stay healthy, as part of a complete lawn care routine.",
    explanation: {
      title: "Help Your Lawn Breathe",
      body: "Over time, soil can become compacted, making it harder for air, water, and nutrients to reach grass roots. Lawn aeration opens up the soil to help your lawn stay healthy. It's a simple addition to a regular mowing routine that supports a thicker, healthier-looking lawn.",
    },
    benefits: [
      {
        title: "Healthier Soil",
        description: "Aeration helps relieve compacted soil so grass roots can get what they need.",
      },
      {
        title: "Supports a Fuller Lawn",
        description: "A healthy lawn is easier to keep looking great season after season.",
      },
      {
        title: "Pairs With Mowing",
        description: "Add aeration to your regular mowing service for one trusted provider.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.galleryMowingA,
        alt: "A lush, freshly mowed lawn with bright green stripes under a cloudy sky",
        label: "Healthy Lawn",
      },
      {
        src: IMAGES.galleryMowingB,
        alt: "A thick green lawn mowed in a crisscross pattern in front of a home",
        label: "Lawn Care Results",
      },
      {
        src: IMAGES.galleryMowingC,
        alt: "A green sloped lawn with mowing stripes beneath mature oak trees",
        label: "Sloped Lawn",
      },
      {
        src: IMAGES.galleryEquipmentB,
        alt: "A red commercial mower on a trailer beside a freshly striped lawn",
        label: "Our Equipment",
      },
    ],
    faqs: [
      {
        q: "Why aerate a lawn?",
        a: "Aeration relieves compacted soil, helping air, water, and nutrients reach grass roots. Many homeowners add it to their regular lawn care.",
      },
      {
        q: "Can I combine aeration with mowing?",
        a: "Yes. Ask us about adding aeration to your mowing service and we'll include it in your free estimate.",
      },
    ],
    heroImage: IMAGES.aeration,
    heroAlt: "A lush, freshly mowed lawn with bright green stripes under a cloudy sky",
    estimateId: "aeration",
  },
} satisfies Record<string, ServiceConfig>;

// Apply title/description overrides from site.config.json.
export const SERVICES = Object.fromEntries(
  Object.entries(BASE_SERVICES).map(([key, base]) => {
    const o = siteConfig.services.overrides[key as ServiceKey] ?? {};
    return [
      key,
      {
        ...base,
        ...(o.title ? { title: o.title } : {}),
        ...(o.shortDescription ? { shortDescription: o.shortDescription } : {}),
      },
    ];
  }),
) as Record<ServiceKey, ServiceConfig>;

export function isServiceEnabled(key: ServiceKey) {
  return siteConfig.services.enabled.includes(key);
}

// Ordered list for the header dropdown, footer links, and the home services grid.
// Only services enabled in site.config.json appear.
export const SERVICE_LIST: ServiceConfig[] = siteConfig.services.enabled.map((k) => SERVICES[k]);

// ───────────────────────────────────────────────────────────────────────────
// The nine services shown as cards on the homepage, listed in the navigation,
// and offered in the estimate form dropdown. `title` is the exact value used
// in the form, so keep one source of truth here. Services without their own
// page link to the page that covers them (`pageKey`). Swap a card photo by
// changing its key in site.config.json → branding.images.
// ───────────────────────────────────────────────────────────────────────────
export type OfferedService = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  pageKey: ServiceKey;
};

export const ALL_SERVICES: OfferedService[] = [
  {
    id: "mowing",
    title: "Weekly & Bi-Weekly Lawn Mowing",
    description:
      "Reliable weekly or bi-weekly mowing that keeps your lawn clean, even, and looking its best all season.",
    image: IMAGES.serviceMowing,
    alt: "A large, freshly mowed lawn with bright green mowing stripes, spruce trees, and homes in the distance",
    pageKey: "mowing",
  },
  {
    id: "mulch",
    title: "Mulch & Stone Installation",
    description:
      "Fresh mulch and stone that define your landscape beds, finish your yard, and boost curb appeal.",
    image: IMAGES.serviceMulch,
    alt: "A landscaped garden bed with fresh dark mulch and green shrubs beside a deck and home",
    pageKey: "mulch",
  },
  {
    id: "cleanups",
    title: "Seasonal Cleanups",
    description:
      "Spring and fall cleanups that clear leaves and debris and reset your property for the season.",
    image: IMAGES.cleanups,
    alt: "A yard covered in fallen leaves with long tree shadows across the lawn",
    pageKey: "cleanups",
  },
  {
    id: "aeration",
    title: "Lawn Aeration",
    description:
      "Aeration to relieve compacted soil and help your lawn stay healthy as part of a complete routine.",
    image: IMAGES.aeration,
    alt: "A lush, freshly mowed lawn with bright green stripes under a cloudy sky",
    pageKey: "aeration",
  },
  {
    id: "bed-maintenance",
    title: "Garden Bed Maintenance",
    description:
      "Keep your garden beds clean, defined, and free of the clutter that builds up over time.",
    image: IMAGES.serviceBedMaintenance,
    alt: "A worker in gloves raking dead leaves from a mulched garden bed beside trimmed shrubs and a debris bag",
    pageKey: "gardenBeds",
  },
  {
    id: "trimming",
    title: "Shrub & Bush Trimming",
    description:
      "Regular trimming keeps shrubs and bushes shaped, tidy, and in proportion with your property.",
    image: IMAGES.serviceTrimming,
    alt: "Hands in work gloves trimming a green hedge with a red hedge trimmer",
    pageKey: "gardenBeds",
  },
  {
    id: "brush-removal",
    title: "Brush & Yard Waste Removal",
    description: "We haul away brush and yard waste so you're not left with a pile to deal with.",
    image: IMAGES.serviceBrush,
    alt: "A large pile of leaves and yard debris on a lawn beside a trailer and pickup truck",
    pageKey: "cleanups",
  },
  {
    id: "planting",
    title: "Flower, Shrub & Small Tree Planting",
    description:
      "Add color and structure to your property with new flowers, shrubs, and small trees.",
    image: IMAGES.servicePlanting,
    alt: "A mulched landscape bed with pink and white hydrangeas, hostas, shrubs, and a small Japanese maple beside a lawn",
    pageKey: "gardenBeds",
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    description: "Clear out your gutters as part of a complete seasonal reset for your home.",
    image: IMAGES.serviceGutter,
    alt: "A gloved hand clearing dead leaves from a rain gutter beside a ladder",
    pageKey: "cleanups",
  },
];

export const ESTIMATE_OTHER_OPTION = "Other / Not Sure Yet";
export const ESTIMATE_SERVICE_OPTIONS = [
  ...ALL_SERVICES.map((s) => s.title),
  ESTIMATE_OTHER_OPTION,
];
