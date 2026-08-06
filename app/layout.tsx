import type { Metadata } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

/**
 * Font optimization (Performance §5):
 * next/font self-hosts Google Fonts at build time — no runtime request to
 * fonts.googleapis.com, no render-blocking <link>, automatic font-display: swap,
 * and zero layout shift from web-font swapping (Next.js injects size-adjusted
 * fallback metrics automatically).
 *
 * Only the weights actually used by the Design System type scale (§3) are
 * loaded — requesting unused weights is a common, easy-to-miss performance cost.
 */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const SITE_URL = "https://musascoconcepts.com"; // placeholder — see Developer Notes in chat response

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MUSASCO Concepts | Business Growth Company",
  description:
    "MUSASCO Concepts is a business growth company. We attract, convert, and scale your customers — through one system, not separate services.",
  openGraph: {
    title: "MUSASCO Concepts | Business Growth Company",
    description:
      "MUSASCO Concepts is a business growth company. We attract, convert, and scale your customers — through one system, not separate services.",
    url: SITE_URL,
    siteName: "MUSASCO Concepts",
    images: [{ url: "/og/homepage.png", width: 1200, height: 630, alt: "MUSASCO Concepts — Growth, Engineered." }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MUSASCO Concepts | Business Growth Company",
    description:
      "MUSASCO Concepts is a business growth company. We attract, convert, and scale your customers — through one system, not separate services.",
    images: ["/og/homepage.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

/**
 * Organization + WebSite JSON-LD, per Homepage Spec v2 §15.
 * Rendered as a script tag in <head> via the root layout so it's present on
 * every page without being redeclared — homepage-specific schema (if any)
 * is added directly in app/page.tsx instead.
 */
function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "MUSASCO Concepts",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        description:
          "Business growth company helping businesses attract, convert, and scale customers through the MUSASCO Growth System™.",
      },
      {
        "@type": "WebSite",
        name: "MUSASCO Concepts",
        url: SITE_URL,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${plexMono.variable}`}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="antialiased">
        {/* Skip link — WCAG 2.4.1 (Bypass Blocks). Visually hidden until
            focused, so keyboard users can jump past the header/mega-menu
            straight to <main id="main-content"> in page.tsx. Caught during
            the final accessibility review pass — every other page will need
            the same pattern, so it lives in the root layout, not per-page. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
