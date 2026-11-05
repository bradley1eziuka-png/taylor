import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { BUSINESS_NAME, LOCATION_LABEL } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

const service = SERVICES.mowing;

export const Route = createFileRoute("/services/lawn-mowing")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("mowing")) throw notFound();
  },
  head: () =>
    pageHead({
      title: `${service.title}${LOCATION_LABEL ? ` in ${LOCATION_LABEL}` : ""} | ${BUSINESS_NAME}`,
      description: service.shortDescription,
      path: service.path,
      image: service.heroImage,
    }),
  component: LawnMowingPage,
});

function LawnMowingPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
