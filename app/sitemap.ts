import type { MetadataRoute } from "next";

/**
 * XML sitemap — PRD Global §2.33. Only "/" is real today; every other URL
 * referenced by the Header/Footer (per PRD §7 site architecture) is added
 * here the same week its page ships, not batched later.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://musascoconcepts.com";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
