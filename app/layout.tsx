import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { BackToTop } from "@/components/layout/BackToTop";
import { FloatingContactMenu } from "@/components/layout/FloatingContactMenu";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const SITE_URL = "https://musascoconcepts.com";

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
    images: [
      {
        url: "/og/homepage.png",
        width: 1200,
        height: 630,
        alt: "MUSASCO Concepts — Growth, Engineered.",
      },
    ],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body>
        <OrganizationSchema />
        {children}
        <BackToTop />
        <FloatingContactMenu />
      </body>
    </html>
  );
}