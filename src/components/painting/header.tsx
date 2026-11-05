import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { ALL_SERVICES, SERVICES } from "@/lib/services-data";
import { ctaButton } from "./buttons";
import { Logo } from "./logo";

// Top-level nav links (absolute hashes so they resolve correctly from any
// route, including the service pages).
const NAV_LINKS = [
  { label: "Home", href: "/#top" },
  { label: "Our Work", href: "/#our-work" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        // No backdrop blur while the mobile menu is open: backdrop-filter would turn the
        // header into the containing block for the fixed menu overlay and clip it to 80px.
        open
          ? "bg-background"
          : solid
            ? "bg-background/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)] backdrop-blur-md"
            : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6">
        <a href="/#top" className="flex items-center gap-3" aria-label={`${BUSINESS_NAME} home`}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="/#top"
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              solid ? "text-foreground/80" : "text-white/90",
            )}
          >
            Home
          </a>

          {/* Services dropdown: desktop */}
          <div className="group relative">
            <button
              type="button"
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent",
                solid ? "text-foreground/80" : "text-white/90",
              )}
            >
              Services
              <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-border bg-card p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.3)]">
                {ALL_SERVICES.map((service) => (
                  <a
                    key={service.id}
                    href={SERVICES[service.pageKey].path}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-gold-deep"
                  >
                    {service.title}
                  </a>
                ))}
                <a
                  href="/#services"
                  className="mt-1 block rounded-lg border-t border-border px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary hover:text-gold-deep"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>

          {NAV_LINKS.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                solid ? "text-foreground/80" : "text-white/90",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={BUSINESS_PHONE_TEL}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold transition-colors",
              solid ? "text-primary hover:text-gold-deep" : "text-white hover:text-accent",
            )}
          >
            <Phone className="size-4 text-accent" />
            {BUSINESS_PHONE}
          </a>
          <a href="/#estimate" className={ctaButton({ variant: "gold", size: "sm" })}>
            Get a Free Estimate
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-lg transition-colors lg:hidden",
            solid ? "text-primary hover:bg-secondary" : "text-white hover:bg-white/10",
          )}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-primary/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-background shadow-2xl">
            <div className="flex h-20 items-center justify-between border-b border-border px-6">
              <span className="flex items-center gap-3">
                <Logo />
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-secondary"
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 overflow-y-auto px-4 py-6">
              <a
                href="/#top"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3.5 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                Home
              </a>

              {/* Services dropdown: mobile (expandable) */}
              <div>
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "size-5 transition-transform duration-200",
                      servicesOpen && "rotate-180",
                    )}
                  />
                </button>
                {servicesOpen && (
                  <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
                    {ALL_SERVICES.map((service) => (
                      <a
                        key={service.id}
                        href={SERVICES[service.pageKey].path}
                        onClick={() => {
                          setServicesOpen(false);
                          setOpen(false);
                        }}
                        className="block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-foreground/75 transition-colors hover:bg-secondary hover:text-gold-deep"
                      >
                        {service.title}
                      </a>
                    ))}
                    <a
                      href="/#services"
                      onClick={() => {
                        setServicesOpen(false);
                        setOpen(false);
                      }}
                      className="block rounded-lg px-3 py-2.5 text-[0.95rem] font-semibold text-primary transition-colors hover:bg-secondary"
                    >
                      View All Services
                    </a>
                  </div>
                )}
              </div>

              {NAV_LINKS.slice(1).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3.5 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto border-t border-border p-6">
              <a
                href={BUSINESS_PHONE_TEL}
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary py-3.5 text-base font-semibold text-primary"
              >
                <Phone className="size-5 text-gold-deep" />
                {BUSINESS_PHONE}
              </a>
              <a
                href="/#estimate"
                onClick={() => setOpen(false)}
                className={cn(ctaButton({ variant: "gold", size: "md" }), "mt-3 w-full")}
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
