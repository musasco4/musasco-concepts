import type { MetadataRoute } from "next";

/**
 * robots.txt — PRD Global §2.33. Only the Homepage exists in this build, so
 * there's nothing to disallow yet beyond the standard exclusions. As other
 * pages ship, add their gated/thank-you equivalents here (e.g. a future
 * /audit/thank-you confirmation page should never be indexed).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://musascoconcepts.com/sitemap.xml",
  };
}
