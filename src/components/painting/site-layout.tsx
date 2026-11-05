import { Header } from "./header";
import { Footer } from "./footer";
import type { ReactNode } from "react";

// Shared chrome (sticky header + footer) used by the homepage and every
// service page so the whole site feels like one cohesive template.
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
