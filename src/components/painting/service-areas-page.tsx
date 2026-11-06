import { ArrowRight, ChevronRight, Phone } from "lucide-react";

import { siteConfig } from "@/config";
import { ALL_SERVICES, SERVICES } from "@/lib/services-data";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { AreaCard, NEARBY } from "./service-areas";
import { SectionHeading } from "./section-heading";
import { ctaButton } from "./buttons";

// Dedicated service area page: one useful page, not one thin page per town.
export function ServiceAreasPage() {
  const areas = siteConfig.business.serviceAreas;
  const waukesha = areas.filter((a) => !NEARBY.includes(a));
  const nearby = areas.filter((a) => NEARBY.includes(a));

  return (
    <>
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-4xl px-6 pb-14 pt-32 text-center sm:pb-16 sm:pt-36">
          <nav aria-label="Breadcrumb">
            <ol className="mb-6 flex items-center justify-center gap-1.5 text-sm text-white/70">
              <li>
                <a href="/" className="font-medium text-white hover:text-accent">
                  Home
                </a>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3.5" />
              </li>
              <li aria-current="page">Service Areas</li>
            </ol>
          </nav>
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            Lawn Care Service Areas Near Eagle, WI
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            Taylor Lawn Care is locally owned and based in Eagle, Wisconsin. We serve homeowners
            across Waukesha County and the communities around it.
          </p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Where We Work"
            title="Communities We Serve"
            description="Eagle is home base. These are the communities we serve."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <AreaCard title="Waukesha County" areas={waukesha} />
            {nearby.length > 0 && <AreaCard title="Nearby Communities" areas={nearby} />}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Don't see your town? Call {BUSINESS_PHONE} or send us a message and we'll let you know
            whether we can help.
          </p>
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Our Services"
            title="What We Offer Near You"
            description="Ask about any of these when you request an estimate and we'll confirm availability for your address."
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_SERVICES.map((service) => (
              <li key={service.id}>
                <a
                  href={SERVICES[service.pageKey].path}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold text-primary shadow-[0_2px_16px_-12px_rgba(0,0,0,0.14)] transition-colors hover:border-accent/50 hover:text-gold-deep"
                >
                  {service.title}
                  <ArrowRight className="size-4 shrink-0 text-gold-deep transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            eyebrow="Getting Started"
            title="Request a Free Estimate"
            description="Tell us your address or town and what you need done. We'll follow up with a straightforward, no-obligation estimate."
          />
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/#estimate" className={ctaButton({ variant: "gold", size: "lg" })}>
              Get a Free Estimate
              <ArrowRight className="size-4" />
            </a>
            <a href={BUSINESS_PHONE_TEL} className={ctaButton({ variant: "solid", size: "lg" })}>
              <Phone className="size-4" />
              {BUSINESS_PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
