import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { servicePageHead } from "@/lib/seo";

const service = SERVICES.brushRemoval;

export const Route = createFileRoute("/services/brush-yard-waste-removal")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("brushRemoval")) throw notFound();
  },
  head: () => servicePageHead(service),
  component: BrushYardWasteRemovalPage,
});

function BrushYardWasteRemovalPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
