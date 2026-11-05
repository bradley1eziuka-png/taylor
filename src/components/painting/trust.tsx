import { ArrowRight } from "lucide-react";

import { COPY } from "@/lib/site-config";
import { IMAGES } from "@/lib/site-images";
import { SectionHeading } from "./section-heading";
import { ctaButton } from "./buttons";

export function Trust() {
  return (
    <section id="about" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
            <img
              src={IMAGES.about}
              alt="A red commercial mower on a trailer beside a freshly striped hillside lawn"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-primary px-6 py-5 shadow-xl sm:block">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {COPY.about.badgeTitle}
            </p>
            <p className="mt-1 text-sm text-white/80">{COPY.about.badgeText}</p>
          </div>
        </div>

        <div>
          <SectionHeading align="left" eyebrow={COPY.about.eyebrow} title={COPY.about.title} />
          {COPY.about.body.split("\n\n").map((para) => (
            <p
              key={para.slice(0, 24)}
              className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {para}
            </p>
          ))}
          <div className="mt-8">
            <a href="/#estimate" className={ctaButton({ variant: "solid", size: "md" })}>
              Get a Free Estimate
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
