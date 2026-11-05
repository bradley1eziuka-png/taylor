import { MapPin } from "lucide-react";

import { siteConfig } from "@/config";
import { SectionHeading } from "./section-heading";

// Eagle, Mukwonago, Oconomowoc, Delafield, Hartland, Brookfield, Wales, North
// Prairie, Genesee, Dousman and Big Bend are in Waukesha County. Palmyra
// (Jefferson Co.), East Troy and Elkhorn (Walworth Co.) are neighboring
// communities, so they are listed separately to keep the geography accurate.
const NEARBY = ["Palmyra", "East Troy", "Elkhorn"];

export function ServiceAreas() {
  const areas = siteConfig.business.serviceAreas;
  if (areas.length === 0) return null;
  const waukesha = areas.filter((a) => !NEARBY.includes(a));
  const nearby = areas.filter((a) => NEARBY.includes(a));

  return (
    <section id="service-areas" className="section-pad scroll-mt-24 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Service Areas"
          title="Lawn Care Near Eagle, WI"
          description="Based in Eagle, Taylor LawnCare serves homeowners throughout Waukesha County and nearby communities."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <AreaCard title="Waukesha County" areas={waukesha} />
          {nearby.length > 0 && <AreaCard title="Nearby Communities" areas={nearby} />}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don't see your town? Call or send us a message and we're happy to let you know if we can
          help.
        </p>
      </div>
    </section>
  );
}

function AreaCard({ title, areas }: { title: string; areas: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)]">
      <h3 className="font-display text-lg font-semibold tracking-tight text-primary">{title}</h3>
      <ul className="mt-5 flex flex-wrap gap-2.5">
        {areas.map((area) => (
          <li
            key={area}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-sm font-medium text-primary"
          >
            <MapPin className="size-3.5 text-gold-deep" />
            {area}
          </li>
        ))}
      </ul>
    </div>
  );
}
