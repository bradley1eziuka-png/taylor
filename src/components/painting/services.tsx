import { ArrowRight } from "lucide-react";

import { ALL_SERVICES, SERVICES } from "@/lib/services-data";
import { SectionHeading } from "./section-heading";
import { ctaButton } from "./buttons";
import { EstimateCta } from "./estimate-cta";

// Homepage services grid: all nine services as equal cards. Mowing, mulch, and
// seasonal cleanups come first. Each card preselects its service in the
// estimate form and links to the page that covers it.
export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Lawn Care & Property Maintenance Services"
          description="Everything your property needs, from weekly mowing to seasonal cleanups. Pick a service and request your free estimate."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {ALL_SERVICES.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_20px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.3)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
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
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <EstimateCta
                    serviceId={service.id}
                    className={ctaButton({ variant: "gold", size: "sm" })}
                  >
                    Get a Free Estimate
                  </EstimateCta>
                  <a
                    href={SERVICES[service.pageKey].path}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep transition-all hover:gap-2.5"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
