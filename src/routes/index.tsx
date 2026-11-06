import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { Hero } from "@/components/painting/hero";
import { Services } from "@/components/painting/services";
import { WhyChooseUs } from "@/components/painting/why-choose-us";
import { Gallery } from "@/components/painting/gallery";
import { Process } from "@/components/painting/process";
import { Trust } from "@/components/painting/trust";
import { Faq } from "@/components/painting/faq";
import { FinalCta } from "@/components/painting/final-cta";
import { ContactSection } from "@/components/painting/contact-section";
import { ServiceAreas } from "@/components/painting/service-areas";
import { Testimonials } from "@/components/painting/testimonials";
import { homeHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  // Keep ?service=<id> so estimate buttons on other pages can preselect a service.
  validateSearch: (search: Record<string, unknown>): { service?: string } =>
    typeof search["service"] === "string" ? { service: search["service"] } : {},
  head: () => homeHead(),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Process />
      <Trust />
      <Testimonials />
      <Faq />
      <ServiceAreas />
      <FinalCta />
      <ContactSection />
    </SiteLayout>
  );
}
