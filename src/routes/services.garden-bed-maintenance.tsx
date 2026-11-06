import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { servicePageHead } from "@/lib/seo";

const service = SERVICES.bedMaintenance;

export const Route = createFileRoute("/services/garden-bed-maintenance")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("bedMaintenance")) throw notFound();
  },
  head: () => servicePageHead(service),
  component: GardenBedMaintenancePage,
});

function GardenBedMaintenancePage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
