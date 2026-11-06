import { Quote } from "lucide-react";

import { COPY } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { GoogleReviewsStrip } from "./google-reviews";

// Written testimonials render only when real reviews are added to
// site.config.json → content.testimonials. The Google rating band below
// links to the business's Google Business Profile instead of copying reviews.
export function Testimonials() {
  const items = COPY.testimonials;
  if (items.length === 0) return <GoogleReviewsStrip />;
  return (
    <section id="reviews" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Customer Reviews" title="What Our Customers Say" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((t) => (
            <figure
              key={`${t.author}-${t.quote.slice(0, 24)}`}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)]"
            >
              <Quote className="size-7 text-gold-deep" />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-display text-sm font-semibold text-primary">{t.author}</p>
                {t.detail && <p className="mt-0.5 text-xs text-muted-foreground">{t.detail}</p>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
