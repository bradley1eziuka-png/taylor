import type { ComponentProps, MouseEvent } from "react";

import { estimateHref, SELECT_SERVICE_EVENT } from "@/lib/estimate-select";

// An estimate link that preselects a service in the existing estimate form.
// On the homepage it updates the form in place and scrolls to it; elsewhere it
// falls back to a normal link ("/?service=<id>#estimate").
export function EstimateCta({
  serviceId,
  onClick,
  ...props
}: { serviceId: string } & Omit<ComponentProps<"a">, "href">) {
  function handle(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented || window.location.pathname !== "/") return;
    const form = document.getElementById("estimate");
    if (!form) return;
    e.preventDefault();
    window.dispatchEvent(new CustomEvent(SELECT_SERVICE_EVENT, { detail: { id: serviceId } }));
    window.history.replaceState(null, "", estimateHref(serviceId));
    form.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  return <a href={estimateHref(serviceId)} onClick={handle} {...props} />;
}
