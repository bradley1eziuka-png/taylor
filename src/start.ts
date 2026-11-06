import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Vercel also serves every deployment on its own *.vercel.app address. Those copies must
// never be indexed, so answer them with a noindex header (canonical tags already point at
// the production domain). Only hosts ending in ".vercel.app" match: the custom domain
// taylorlawncarewi.com is never affected.
const previewNoindexMiddleware = createMiddleware().server(async ({ next, request }) => {
  const host = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "")
    .split(",")[0]!
    .trim()
    .split(":")[0]!
    .toLowerCase();
  const result = await next();
  if (host.endsWith(".vercel.app"))
    result.response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return result;
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, previewNoindexMiddleware, csrfMiddleware],
}));
