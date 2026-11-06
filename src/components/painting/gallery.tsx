import { IMAGES } from "@/lib/site-images";
import { SectionHeading } from "./section-heading";

const GALLERY = [
  {
    src: IMAGES.galleryMowingA,
    alt: "A freshly mowed lawn with bright crisscross stripes under a cloudy sky",
    label: "Lawn Mowing",
  },
  {
    src: IMAGES.galleryMulch,
    alt: "A curved landscape bed with dark mulch and stone edging in front of a two-story home",
    label: "Mulch Installation",
  },
  {
    src: IMAGES.galleryMowingB,
    alt: "A large lawn mowed in a crisscross stripe pattern in front of a home and tree",
    label: "Lawn Mowing",
  },
  {
    src: IMAGES.galleryBedA,
    alt: "A mulched garden bed filled with green plants and a stepping stone beside a deck",
    label: "Landscape Bed Maintenance",
  },
  {
    src: IMAGES.galleryEquipment,
    alt: "Two red stand-on mowers parked on a residential street",
    label: "Lawn Care Equipment",
  },
  {
    src: IMAGES.galleryMowingC,
    alt: "Mowing stripes curving across a sloped lawn under large oak trees",
    label: "Lawn Mowing",
  },
  {
    src: IMAGES.galleryCleanup,
    alt: "A yard covered in fallen leaves with long tree shadows across the lawn",
    label: "Property Cleanups",
  },
  {
    src: IMAGES.galleryBedB,
    alt: "A mulched landscape bed with young plants and daffodils along the side of a home",
    label: "Landscape Bed Maintenance",
  },
  {
    src: IMAGES.galleryMowingD,
    alt: "A freshly mowed striped lawn beside a gravel shoulder and mature trees",
    label: "Lawn Mowing",
  },
];

export function Gallery() {
  return (
    <section id="our-work" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Our Work"
          title="Recent Jobs Around Waukesha County"
          description="A look at recent mowing stripes, fresh mulch, and cleaned-up beds from our customers' yards."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {GALLERY.map((item) => (
            <figure
              key={item.src}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-border shadow-[0_2px_20px_-14px_rgba(0,0,0,0.18)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/80 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="h-px w-6 bg-accent" />
                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
          Photos of Taylor LawnCare's work
        </p>
      </div>
    </section>
  );
}
