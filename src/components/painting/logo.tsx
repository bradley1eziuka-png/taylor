import { Leaf } from "lucide-react";

import { cn } from "@/lib/utils";
import { BUSINESS_NAME, LOGO } from "@/lib/site-config";

// Business logo mark. The official logo is a white wordmark on a green
// background, so it is shown as a rounded green tile (cropped, never stretched).
// With no logo set in site.config.json → branding.logo, a simple leaf mark shows.
export function Logo({ className }: { className?: string }) {
  if (LOGO.src) {
    return (
      <img
        src={LOGO.src}
        alt={LOGO.alt || `${BUSINESS_NAME} logo`}
        className={cn(
          "h-14 w-auto max-w-none shrink-0 rounded-md object-contain shadow-sm ring-1 ring-white/15",
          className,
        )}
      />
    );
  }
  return (
    <span
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary shadow-sm",
        className,
      )}
    >
      <Leaf className="size-5" />
    </span>
  );
}
