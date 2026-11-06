import { useEffect, useState, type FormEvent } from "react";
import { Info, Phone } from "lucide-react";

import { FORM_IS_DEMO, submitEstimate } from "@/lib/form-submit";
import { siteConfig } from "@/config";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { ctaButton } from "./buttons";
import { SELECT_SERVICE_EVENT } from "@/lib/estimate-select";
import { ALL_SERVICES, ESTIMATE_SERVICE_OPTIONS } from "@/lib/services-data";

const SERVICE_OPTIONS = ESTIMATE_SERVICE_OPTIONS;

type Values = {
  name: string;
  phone: string;
  service: string;
  email: string;
  location: string;
  details: string;
};

const EMPTY: Values = { name: "", phone: "", service: "", email: "", location: "", details: "" };

// Premium white estimate form card. Used in the hero on the homepage.
// Delivery is handled by src/lib/form-submit.ts (Formspree, GHL webhook, or
// demo). The success state only appears after the provider confirms receipt.
export function EstimateFormCard({ id, className }: { id?: string; className?: string }) {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "demo" | "error">(
    "idle",
  );
  const [honeypot, setHoneypot] = useState("");

  // Preselect the service when an estimate button is clicked (same page) or
  // when the page loads from "/?service=<id>#estimate" (other pages).
  useEffect(() => {
    function select(id: string | null) {
      const match = ALL_SERVICES.find((s) => s.id === id);
      if (!match) return;
      setStatus((st) => (st === "success" || st === "demo" ? "idle" : st));
      setValues((v) => ({ ...v, service: match.title }));
      setErrors(({ service: _drop, ...rest }) => rest);
    }
    select(new URLSearchParams(window.location.search).get("service"));
    const onSelect = (e: Event) => select((e as CustomEvent<{ id: string }>).detail?.id ?? null);
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect);
  }, []);

  function update<K extends keyof Values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof Values, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your full name.";
    if (values.phone.replace(/\D/g, "").length < 7)
      next.phone = "Please enter a valid phone number.";
    if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.service) next.service = "Please select a service.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return; // ignore repeat submits while one is in flight
    if (!validate()) return;
    setStatus("submitting");
    const result = await submitEstimate(values, honeypot);
    if (result.status === "success") {
      setStatus("success");
      setValues(EMPTY);
    } else if (result.status === "demo") {
      setStatus("demo");
    } else {
      setStatus("error");
    }
  }

  const fieldBase =
    "h-11 w-full rounded-lg border bg-white px-3.5 text-[0.95rem] text-foreground transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/35";
  const fieldOk = "border-border focus:border-accent";
  const fieldErr = "border-destructive focus:border-destructive";

  return (
    <div
      id={id}
      className={
        "rounded-3xl border border-border bg-white p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)] sm:p-6" +
        (className ? ` ${className}` : "")
      }
    >
      <div className="mb-3.5">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">
          Free Estimate
        </span>
        <h2 className="mt-2.5 font-display text-2xl font-semibold tracking-tight text-primary">
          Request an Estimate
        </h2>
        <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
          Tell us a little about your property and what you need. It's free, with no obligation.
        </p>
      </div>

      {status === "demo" ? (
        <div
          role="status"
          className="flex flex-col items-center rounded-2xl border border-border bg-secondary/50 px-6 py-10 text-center"
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-accent/15 text-gold-deep">
            <Info className="size-8" />
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-primary">
            Demo Mode: Not Sent
          </h3>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
            This preview form isn't connected to an inbox yet, so your request was not delivered.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-semibold text-gold-deep hover:underline"
          >
            Back to the form
          </button>
        </div>
      ) : status === "success" ? (
        <div
          role="status"
          className="success-card flex flex-col items-center rounded-2xl border border-[#bfdcc9] bg-[#f2f9f4] px-6 py-8 text-center"
        >
          <span className="success-badge flex size-16 items-center justify-center rounded-full bg-[#2e7d4f] text-white shadow-[0_8px_20px_-8px_rgba(46,125,79,0.6)]">
            <svg viewBox="0 0 24 24" className="size-8" fill="none" aria-hidden="true">
              <path
                className="success-check"
                d="M5 12.5l4.5 4.5L19 7.5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="success-text">
            <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-primary sm:text-[1.7rem]">
              Your Request Is On Its Way!
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-foreground/80">
              Thanks for reaching out! We've received your estimate request and will be in touch
              soon.
            </p>
            <p className="mt-5 text-sm text-muted-foreground">
              Need to reach us sooner?{" "}
              <a
                href={BUSINESS_PHONE_TEL}
                className="whitespace-nowrap font-semibold text-primary hover:text-[#2e7d4f]"
              >
                Call {BUSINESS_PHONE}
              </a>
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-5 text-sm font-semibold text-[#2e7d4f] underline-offset-4 hover:underline"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="relative space-y-3">
          {/* Honeypot: hidden from people, tempting to bots. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="est-website">Leave this field empty</label>
            <input
              id="est-website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="est-name" className="mb-1 block text-sm font-semibold text-primary">
                Full Name <span className="text-gold-deep">*</span>
              </label>
              <input
                id="est-name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your full name"
                className={`${fieldBase} ${errors.name ? fieldErr : fieldOk}`}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs font-medium text-destructive">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="est-phone" className="mb-1 block text-sm font-semibold text-primary">
                Phone Number <span className="text-gold-deep">*</span>
              </label>
              <input
                id="est-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="(262) 555-1234"
                className={`${fieldBase} ${errors.phone ? fieldErr : fieldOk}`}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs font-medium text-destructive">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="est-service" className="mb-1 block text-sm font-semibold text-primary">
              Service Needed <span className="text-gold-deep">*</span>
            </label>
            <select
              id="est-service"
              value={values.service}
              onChange={(e) => update("service", e.target.value)}
              className={`${fieldBase} ${errors.service ? fieldErr : fieldOk} cursor-pointer`}
              aria-invalid={!!errors.service}
            >
              <option value="" disabled>
                Select a service…
              </option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1.5 text-xs font-medium text-destructive">{errors.service}</p>
            )}
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            <div>
              <label htmlFor="est-email" className="mb-1 block text-sm font-semibold text-primary">
                Email (optional)
              </label>
              <input
                id="est-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                className={`${fieldBase} ${errors.email ? fieldErr : fieldOk}`}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-destructive">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="est-location"
                className="mb-1 block text-sm font-semibold text-primary"
              >
                Project Location (optional)
              </label>
              <input
                id="est-location"
                type="text"
                autoComplete="address-level2"
                value={values.location}
                onChange={(e) => update("location", e.target.value)}
                placeholder="City or address"
                className={`${fieldBase} ${fieldOk}`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="est-details" className="mb-1 block text-sm font-semibold text-primary">
              Project Details (optional)
            </label>
            <textarea
              id="est-details"
              rows={2}
              value={values.details}
              onChange={(e) => update("details", e.target.value)}
              placeholder="Tell us about your property, what you'd like done, and any timing you have in mind."
              className="w-full resize-none rounded-lg border bg-white px-3.5 py-2.5 text-[0.95rem] text-foreground transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/35 focus:border-accent border-border"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className={ctaButton({ variant: "solid", size: "md" }) + " w-full"}
          >
            {status === "submitting" ? "Sending…" : "Request My Free Estimate"}
          </button>

          {status === "error" && (
            <p className="text-center text-sm font-medium text-destructive">
              We couldn't send your request. Please try again or call us at{" "}
              <a href={BUSINESS_PHONE_TEL} className="underline">
                {BUSINESS_PHONE}
              </a>
              .
            </p>
          )}

          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
            <Phone className="size-3.5 text-gold-deep" />
            Free estimates • No obligation
          </p>
          {FORM_IS_DEMO && siteConfig.form.showDemoNotice && (
            <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
              Demo mode: form not connected
            </p>
          )}
        </form>
      )}
    </div>
  );
}
