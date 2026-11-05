import { ArrowRight, Check } from "lucide-react";

import { SERVICE_LIST } from "@/lib/services-data";
import { SectionHeading } from "./section-heading";

// Homepage services grid: the first three enabled services, each linking to
// its own dedicated service page via "Learn More".
// All nine services Taylor LawnCare offers (grouped onto five service pages).
const ALL_SERVICES = [
  "Weekly & Bi-Weekly Lawn Mowing",
  "Mulch & Stone Installation",
  "Seasonal Cleanups",
  "Lawn Aeration",
  "Garden Bed Maintenance",
  "Shrub & Plant Trimming",
  "Brush & Yard Waste Removal",
  "Flower, Shrub & Small Tree Planting",
  "Gutter Cleaning",
];

const FEATURED = SERVICE_LIST.slice(0, 3);

export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Lawn Care & Property Maintenance Services"
          description="Mowing, mulch, and seasonal cleanups are what we do most. We also take care of the other outdoor jobs that keep your property looking its best."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {FEATURED.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_20px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.3)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.heroImage}
                  alt={service.heroAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-semibold tracking-tight text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>
                <a
                  href={service.path}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep transition-all hover:gap-2.5"
                >
                  Learn More
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-secondary/50 p-7 sm:p-9">
          <h3 className="text-center font-display text-lg font-semibold tracking-tight text-primary">
            Everything We Offer
          </h3>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_SERVICES.map((name) => (
              <li key={name} className="flex items-start gap-2.5 text-[0.95rem] text-foreground/80">
                <Check className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
