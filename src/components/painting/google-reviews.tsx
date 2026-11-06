import { ArrowUpRight, Star } from "lucide-react";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

const { rating, count, url } = siteConfig.business.googleReviews;

// Client-supplied Google Business Profile rating. Renders nothing unless a
// rating, count, and profile link are all configured. Display only: this is
// intentionally not emitted as review structured data.
export const HAS_GOOGLE_REVIEWS = Boolean(rating && count > 0 && url);

export function googleReviewsLabel() {
  return `${rating} Stars on Google · ${count} ${count === 1 ? "Review" : "Reviews"}`;
}

function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("flex gap-0.5 text-accent", className)} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
    </span>
  );
}

// Small inline link used in the hero.
export function GoogleReviewsBadge({ className }: { className?: string }) {
  if (!HAS_GOOGLE_REVIEWS) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2.5 text-sm font-medium transition-colors hover:text-accent",
        className,
      )}
    >
      <Stars />
      <span>{googleReviewsLabel()}</span>
    </a>
  );
}

// Slim homepage band that links out to the Google Business Profile.
export function GoogleReviewsStrip() {
  if (!HAS_GOOGLE_REVIEWS) return null;
  return (
    <section id="reviews" className="scroll-mt-24 bg-secondary/40 py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <Stars />
            <p className="font-display text-lg font-semibold tracking-tight text-primary">
              {googleReviewsLabel()}
            </p>
          </div>
          <p className="mt-2 text-[0.95rem] text-muted-foreground">
            See what customers say about Taylor Lawn Care on our Google Business Profile.
          </p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-primary/25 bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-gold-deep"
        >
          Read Our Google Reviews
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
