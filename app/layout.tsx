import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import { BackToTop } from "@/components/layout/BackToTop";
import { FloatingContactMenu } from "@/components/layout/FloatingContactMenu";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const SITE_URL = "https://musascoconcepts.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Musasco | Business Growth Company",

  description:
    "Musasco is a business growth company. We attract, convert, and scale your customers — through one system, not separate services.",

  icons: {
    icon: [
      {
        url: "/m-mark-color.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/m-mark-color.svg",
    apple: "/m-mark-color.svg",
  },

  openGraph: {
    title: "Musasco | Business Growth Company",
    description:
      "Musasco is a business growth company. We attract, convert, and scale your customers — through one system, not separate services.",
    url: SITE_URL,
    siteName: "Musasco",
    images: [
      {
        url: "/og/homepage.png",
        width: 1200,
        height: 630,
        alt: "Musasco — Growth, Engineered.",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Musasco | Business Growth Company",
    description:
      "Musasco is a business growth company. We attract, convert, and scale your customers — through one system, not separate services.",
    images: ["/og/homepage.png"],
  },

  alternates: {
    canonical: SITE_URL,
  },
};

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Musasco",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        description:
          "Business growth company helping businesses attract, convert, and scale customers through the Musasco Growth System™.",
      },
      {
        "@type": "WebSite",
        name: "Musasco",
        url: SITE_URL,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <OrganizationSchema />

        {children}

        {/* Global floating controls */}
        <FloatingContactMenu />
        <BackToTop />
      </body>
    </html>
  );
}