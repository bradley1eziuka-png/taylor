// Connects "Get a Free Estimate" buttons to the single estimate form.
// On the homepage the click preselects the service in place (custom event);
// from any other page the link loads "/?service=<id>#estimate" and the form
// reads the id on mount. One form, no backend changes.
export const SELECT_SERVICE_EVENT = "estimate:select-service";

export function estimateHref(serviceId: string) {
  return `/?service=${encodeURIComponent(serviceId)}#estimate`;
}
