import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

// Shared conversion-focused button styles used across the template.
export const ctaButton = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Gold primary: the conversion CTA on light and dark alike.
        gold: "bg-accent text-primary shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)] hover:brightness-105 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-14px_rgba(233,170,61,0.55)]",
        // Dark green solid: secondary on light backgrounds.
        solid:
          "bg-primary text-primary-foreground shadow-md hover:bg-navy-soft hover:-translate-y-0.5 hover:shadow-lg",
        // Light outline: secondary on dark green backgrounds.
        outlineLight:
          "border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10",
        // White solid: primary on dark backgrounds.
        white: "bg-white text-primary shadow-md hover:-translate-y-0.5 hover:shadow-lg",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "gold", size: "md" },
  },
);

type CtaButtonProps = ComponentProps<"a"> & VariantProps<typeof ctaButton>;

export function CtaButton({ className, variant, size, ...props }: CtaButtonProps) {
  return <a className={cn(ctaButton({ variant, size }), className)} {...props} />;
}
