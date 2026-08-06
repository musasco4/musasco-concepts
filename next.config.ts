import type { NextConfig } from "next";

/**
 * Performance §5 — image optimization is pre-wired for when real case-study
 * and industry photography lands (Suggested Imagery §9): AVIF/WebP first,
 * with a `remotePatterns` slot ready for the eventual CMS/asset host rather
 * than left unconfigured until someone hits an error adding the first
 * <Image> with a remote src.
 */
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Add the CMS/asset host here once a permanent photography source
      // is chosen (Homepage Spec v2 §9, §17) — Unsplash-hotlinked images
      // are fine for this stage but not a long-term production dependency.
    ],
  },
  compress: true,
};

export default nextConfig;
