import { ArrowRight, Clock, Mail, Phone } from "lucide-react";

import { BUSINESS_EMAIL, BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { ctaButton } from "./buttons";

// The homepage "Contact" section: a confident call-to-call block that points
// to the estimate form in the hero. The form itself lives in the hero so the
// page never shows two identical forms.
export function ContactSection() {
  return (
    <section id="contact" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Talk About Your Property"
          description="Share a few details about what you need and we'll follow up with a free, no-obligation estimate."
        />

        <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-border bg-secondary/50 p-8 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)]">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Prefer to talk it through?
          </p>
          <a
            href={BUSINESS_PHONE_TEL}
            className="mt-3 flex items-center justify-center gap-3 font-display text-3xl font-semibold tracking-tight text-primary transition-colors hover:text-gold-deep"
          >
            <Phone className="size-7 text-gold-deep" />
            {BUSINESS_PHONE}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Call Noah directly and we'll go over your property, answer your questions, and set up
            your free estimate.
          </p>
          <div className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
            {BUSINESS_EMAIL && (
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="flex items-center justify-center gap-2 font-medium text-primary transition-colors hover:text-gold-deep"
              >
                <Mail className="size-4 text-gold-deep" />
                {BUSINESS_EMAIL}
              </a>
            )}
            <p className="flex items-center justify-center gap-2">
              <Clock className="size-4 text-gold-deep" />
              Monday–Friday, 7 AM–7 PM
            </p>
          </div>
        </div>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/#estimate" className={ctaButton({ variant: "gold", size: "lg" })}>
            Get a Free Estimate
            <ArrowRight className="size-4" />
          </a>
          <a href={BUSINESS_PHONE_TEL} className={ctaButton({ variant: "solid", size: "lg" })}>
            <Phone className="size-4" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
