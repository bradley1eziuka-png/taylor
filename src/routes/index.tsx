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
import { HOME_DESCRIPTION, HOME_TITLE, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" }),
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
