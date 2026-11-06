import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServiceAreasPage } from "@/components/painting/service-areas-page";
import { areasHead } from "@/lib/seo";

export const Route = createFileRoute("/service-areas")({
  head: () => areasHead(),
  component: ServiceAreasRoute,
});

function ServiceAreasRoute() {
  return (
    <SiteLayout>
      <ServiceAreasPage />
    </SiteLayout>
  );
}
