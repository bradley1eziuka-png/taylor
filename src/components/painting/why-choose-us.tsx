import { ClipboardCheck, Handshake, MapPin, ShieldCheck, ThumbsUp } from "lucide-react";

import { SectionHeading } from "./section-heading";

const REASONS = [
  {
    icon: ClipboardCheck,
    title: "Free Estimates",
    description: "Straightforward estimates with no obligation.",
  },
  {
    icon: ShieldCheck,
    title: "Insured",
    description: "Taylor Lawn Care is insured.",
  },
  {
    icon: MapPin,
    title: "Locally Owned",
    description: "A local business that began with mowing neighbors' lawns.",
  },
  {
    icon: Handshake,
    title: "Personal Service",
    description: "Focused on building strong relationships and earning customer trust.",
  },
  {
    icon: ThumbsUp,
    title: "Pride in Every Job",
    description: "Committed to leaving customers happy with how their property looks.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-pad scroll-mt-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Lawn Care You Can Count On"
          description="Noah built Taylor Lawn Care on dependable service and relationships customers can trust."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_45px_-22px_rgba(0,0,0,0.25)]`}
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-accent shadow-sm transition-colors group-hover:bg-accent group-hover:text-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-primary">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
