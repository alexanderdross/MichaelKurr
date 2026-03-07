import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  personSchema,
  websiteSchema,
} from "@/data/schemas";
import ErrorBoundary from "@/components/ErrorBoundary";

import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const inter = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = localFont({
  src: [
    {
      path: "../fonts/playfair-display-latin-wght-normal.woff2",
      style: "normal",
    },
    {
      path: "../fonts/playfair-display-latin-wght-italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dr.michaelkurr.com"),
  title: "Dr. Michael Kurr — Operator & Transformation Leader | Pharma & Life Sciences",
  description:
    "Dr. Michael A. Kurr — Founder of Dr. Kurr Advisory. Fractional C-level executive and transformation leader with 20+ years of experience across Boehringer Ingelheim, Novartis, and global pharma. Published author and expert in building world-class organizations.",
  keywords: [
    "Dr. Michael Kurr",
    "Michael Kurr",
    "Dr. Kurr Advisory",
    "fractional C-level executive",
    "pharma transformation leader",
    "life sciences advisory",
    "corporate transformation",
    "process reengineering",
    "cooperation management",
    "global services delivery",
    "digital strategy pharma",
    "AI in pharmaceuticals",
    "Boehringer Ingelheim",
    "Novartis",
    "Lemna Bio",
    "THENA Capital",
    "fractional CCO",
    "pharmaceutical go-to-market",
    "content supply chain",
    "omnichannel pharma",
    "University of St. Gallen",
    "MIT Sloan",
    "published author",
    "leadership development",
  ],
  authors: [{ name: "Dr. Michael A. Kurr", url: "https://dr.michaelkurr.com" }],
  creator: "Dr. Michael A. Kurr",
  publisher: "Dr. Michael A. Kurr",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr. Michael Kurr — Operator & Transformation Leader",
    description:
      "Founder of Dr. Kurr Advisory. Fractional C-level executive in Pharma & Life Sciences with 20+ years transforming global organizations at Boehringer Ingelheim, Novartis, and beyond. Published author and expert in corporate transformation, digital strategy, and cooperation management.",
    type: "profile",
    url: "https://dr.michaelkurr.com",
    locale: "en_US",
    siteName: "Dr. Michael Kurr",
    firstName: "Michael",
    lastName: "Kurr",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Dr. Michael Kurr — professional headshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Michael Kurr — Operator & Transformation Leader",
    description:
      "Founder of Dr. Kurr Advisory. Fractional C-level executive in Pharma & Life Sciences with 20+ years transforming global organizations.",
    images: [
      {
        url: "/images/profile.jpg",
        alt: "Dr. Michael Kurr — professional headshot",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#1B2A4A" />
        <link
          rel="preload"
          as="image"
          type="image/webp"
          imageSrcSet="/images/profile-256.webp 256w, /images/profile-512.webp 512w, /images/profile.webp 800w"
          imageSizes="(max-width: 640px) 144px, (max-width: 1024px) 224px, 256px"
        />
        <link rel="manifest" href="/manifest.json" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personSchema,
              websiteSchema,
            ].flat()),
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-navy focus:px-4 focus:py-2 focus:rounded focus:font-semibold"
        >
          Skip to main content
        </a>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>

        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
