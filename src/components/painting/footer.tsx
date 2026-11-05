import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/config";
import { BUSINESS_EMAIL, BUSINESS_PHONE, BUSINESS_PHONE_TEL, COPY } from "@/lib/site-config";
import { SERVICE_LIST } from "@/lib/services-data";
import { Logo } from "./logo";

const EXPLORE_LINKS = [
  { label: "Home", href: "/#top" },
  { label: "Our Work", href: "/#our-work" },
  { label: "About", href: "/#about" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Contact", href: "/#contact" },
];

const SOCIAL_LABELS: Record<string, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  google: "Google",
  yelp: "Yelp",
  nextdoor: "Nextdoor",
  youtube: "YouTube",
};

// Optional details: each line renders only if the client provided it.
function ContactDetails() {
  const { address, hours, serviceAreas, social } = siteConfig.business;
  const addressLine = [
    address.street,
    [address.city, address.state].filter(Boolean).join(", "),
    address.zip,
  ]
    .filter(Boolean)
    .join(address.street ? ", " : " ")
    .trim();
  const socials = Object.entries(social).filter(([, url]) => url);
  if (!BUSINESS_EMAIL && !addressLine && !hours.length && !serviceAreas.length && !socials.length)
    return null;
  return (
    <div className="mt-6 space-y-3 text-sm text-white/70">
      {BUSINESS_EMAIL && (
        <a
          href={`mailto:${BUSINESS_EMAIL}`}
          className="flex items-center gap-2.5 transition-colors hover:text-accent"
        >
          <Mail className="size-4 text-accent" />
          {BUSINESS_EMAIL}
        </a>
      )}
      {addressLine && (
        <p className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
          {addressLine}
        </p>
      )}
      {serviceAreas.length > 0 && (
        <p>
          <span className="font-semibold text-white/85">Serving Waukesha County &amp; nearby:</span>{" "}
          {serviceAreas.join(", ")}
        </p>
      )}
      {hours.length > 0 && (
        <ul className="space-y-0.5">
          {hours.map((row) => (
            <li key={row.days}>
              <span className="font-semibold text-white/85">{row.days}:</span> {row.hours}
            </li>
          ))}
        </ul>
      )}
      {socials.length > 0 && (
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          {socials.map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/85 transition-colors hover:text-accent"
            >
              {SOCIAL_LABELS[key] ?? key}
            </a>
          ))}
        </p>
      )}
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-16" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {COPY.footerBlurb}
            </p>
            <a
              href={BUSINESS_PHONE_TEL}
              className="mt-6 inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/60 hover:bg-white/10"
            >
              <Phone className="size-4 text-accent" />
              {BUSINESS_PHONE}
            </a>
            <ContactDetails />
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LIST.map((service) => (
                <li key={service.slug}>
                  <a
                    href={service.path}
                    className="text-sm text-white/75 transition-colors hover:text-accent"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#estimate"
                  className="text-sm text-white/75 transition-colors hover:text-accent"
                >
                  Free Estimates
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-white/55 sm:text-left">
            © {year} Taylor LawnCare LLC. All rights reserved.
          </p>
          <p className="text-xs text-white/55">
            Lawn Care &amp; Property Maintenance · Eagle, Wisconsin
          </p>
        </div>
      </div>
    </footer>
  );
}
