import { Metadata } from "next";
import Link from "next/link";
import ScrollAnimations from "@/components/ScrollAnimations";
import { makeProductSchema, makeNavigationSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title: "Privacy Policy - Dr. Michael Kurr",
  description:
    "Privacy policy for dr.michaelkurr.com - learn how Dr. Michael A. Kurr handles your data and protects your privacy.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR",
    "Dr. Michael Kurr",
    "dr.michaelkurr.com",
  ],
  alternates: {
    canonical: "https://dr.michaelkurr.com/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy - Dr. Michael Kurr",
    description:
      "Privacy policy for dr.michaelkurr.com - learn how Dr. Michael A. Kurr handles your data and protects your privacy.",
    type: "website",
    url: "https://dr.michaelkurr.com/privacy-policy/",
    siteName: "Dr. Michael Kurr",
    locale: "en_US",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Dr. Michael Kurr - Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Dr. Michael Kurr",
    description:
      "Privacy policy for dr.michaelkurr.com - data protection and GDPR compliance.",
    images: [
      {
        url: "/images/profile.jpg",
        alt: "Dr. Michael Kurr - Privacy Policy",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* JSON-LD: Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeProductSchema("https://dr.michaelkurr.com/privacy-policy/", 90)),
        }}
      />

      {/* JSON-LD: SiteNavigationElement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeNavigationSchema("https://dr.michaelkurr.com/privacy-policy/", "Privacy Policy")),
        }}
      />

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Dr. Michael Kurr",
                item: "https://dr.michaelkurr.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Privacy Policy",
                item: "https://dr.michaelkurr.com/privacy-policy/",
              },
            ],
          }),
        }}
      />

      {/* Top navigation bar */}
      <nav
        aria-label="Privacy policy page navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg py-3"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            title="Dr. Michael Kurr - Home"
            className="font-heading text-xl font-bold text-white tracking-wider"
          >
            MK
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/#about"
              title="Learn about Dr. Michael Kurr"
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact/"
              title="Get in touch with Dr. Michael Kurr"
              className="text-sm font-medium px-5 py-2 border border-gold-light text-gold-light rounded hover:bg-gold hover:text-navy transition-all duration-200"
            >
              Connect
            </Link>
          </div>
        </div>
      </nav>

      <main id="main-content">
        {/* Breadcrumb */}
        <div className="pt-20 bg-navy">
          <div className="max-w-4xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="py-3">
              <ol className="flex items-center gap-2 text-sm text-white/75">
                <li>
                  <Link
                    href="/"
                    title="Dr. Michael Kurr - Home"
                    className="hover:text-gold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">
                  /
                </li>
                <li aria-current="page" className="text-gold-light font-medium">
                  Privacy Policy
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="pt-8 pb-16 lg:pb-24 bg-navy text-white">
          <div className="max-w-4xl mx-auto px-6">
            <span className="fade-in block text-gold-light text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Data Protection
            </span>
            <h1 className="fade-in font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Privacy Policy
            </h1>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 lg:py-24 bg-offwhite">
          <div className="max-w-3xl mx-auto px-6 space-y-12">
            {/* Overview */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                1. Overview
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                The protection of your personal data is of particular concern to
                us. This privacy policy informs you about how we handle your
                personal data when you visit our website dr.michaelkurr.com. We
                process your data in compliance with the applicable data
                protection laws, in particular the EU General Data Protection
                Regulation (GDPR) and the German Federal Data Protection Act
                (BDSG).
              </p>
            </section>

            {/* Controller */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                2. Controller
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                The controller responsible for data processing on this website
                is:
              </p>
              <address className="not-italic text-lg leading-relaxed text-charcoal/80 mt-2">
                Dr. Michael A. Kurr
                <br />
                Dr. Kurr Advisory
                <br />
                Germany
                <br />
                Email:{" "}
                <a
                  href="mailto:info@dr.michaelkurr.com"
                  title="Send an email to Dr. Michael Kurr"
                  className="text-teal hover:text-teal-light transition-colors"
                >
                  info@dr.michaelkurr.com
                </a>
              </address>
            </section>

            {/* Data collection */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                3. Data Collection on This Website
              </h2>
              <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                Server Log Files
              </h3>
              <p className="text-lg leading-relaxed text-charcoal/80 mb-4">
                The hosting provider of this website automatically collects and
                stores information in so-called server log files, which your
                browser automatically transmits. These include:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed text-charcoal/80 space-y-1 mb-4">
                <li>Browser type and version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>Hostname of the accessing computer</li>
                <li>Time of the server request</li>
                <li>IP address (anonymized)</li>
              </ul>
              <p className="text-lg leading-relaxed text-charcoal/80">
                This data is not merged with other data sources. The collection
                of this data is based on Art. 6 (1) (f) GDPR. The website
                operator has a legitimate interest in the technically error-free
                presentation and optimization of the website &mdash; for this
                purpose, server log files must be collected.
              </p>
            </section>

            {/* Cookies */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                4. Cookies
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                This website does not use cookies for tracking or analytics
                purposes. No personal data is collected through cookies. The
                website is a static site that does not require user sessions or
                cookie-based functionality.
              </p>
            </section>

            {/* Analytics */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                5. Analytics
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                This website does not use any third-party analytics or tracking
                tools. No data is shared with third parties for advertising or
                analytics purposes.
              </p>
            </section>

            {/* External links */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                6. External Links
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                This website contains links to external websites (e.g.,
                LinkedIn, Amazon, publisher websites). When you click on such
                links, you leave our website and are subject to the privacy
                policies of those external sites. We have no control over their
                data collection practices and accept no responsibility for them.
              </p>
            </section>

            {/* External content */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                7. External Content &amp; CDN
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                This website may load images from external content delivery
                networks (CDNs). When these resources are loaded, the CDN
                provider may receive your IP address and browser information.
                This is necessary for the technical delivery of the content and
                is based on our legitimate interest in an efficient and secure
                website (Art. 6 (1) (f) GDPR).
              </p>
            </section>

            {/* Your rights */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                8. Your Rights
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80 mb-4">
                Under the GDPR, you have the following rights regarding your
                personal data:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed text-charcoal/80 space-y-1 mb-4">
                <li>
                  Right of access (Art. 15 GDPR) &mdash; You have the right to
                  request information about your personal data processed by us.
                </li>
                <li>
                  Right to rectification (Art. 16 GDPR) &mdash; You have the
                  right to request correction of inaccurate personal data.
                </li>
                <li>
                  Right to erasure (Art. 17 GDPR) &mdash; You have the right to
                  request deletion of your personal data.
                </li>
                <li>
                  Right to restriction (Art. 18 GDPR) &mdash; You have the
                  right to request restriction of processing.
                </li>
                <li>
                  Right to data portability (Art. 20 GDPR) &mdash; You have the
                  right to receive your data in a structured, commonly used
                  format.
                </li>
                <li>
                  Right to object (Art. 21 GDPR) &mdash; You have the right to
                  object to the processing of your personal data.
                </li>
              </ul>
              <p className="text-lg leading-relaxed text-charcoal/80">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:info@dr.michaelkurr.com"
                  title="Contact Dr. Michael Kurr about data protection"
                  className="text-teal hover:text-teal-light transition-colors"
                >
                  info@dr.michaelkurr.com
                </a>
                . You also have the right to lodge a complaint with a
                supervisory authority.
              </p>
            </section>

            {/* SSL/TLS */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                9. SSL/TLS Encryption
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                This website uses SSL/TLS encryption for security reasons and to
                protect the transmission of confidential content. You can
                recognize an encrypted connection by the &ldquo;https://&rdquo;
                prefix in the address bar of your browser and the lock icon.
              </p>
            </section>

            {/* Changes */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                We reserve the right to update this privacy policy to reflect
                changes in our practices or for legal, regulatory, or
                operational reasons. The current version is always available on
                this page.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/80 mt-4">
                Last updated: February 2026
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-10 bg-navy-dark text-white/75 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm"
          >
            <Link
              href="/#about"
              title="Learn about Dr. Michael Kurr's background"
              className="hover:text-white transition-colors px-2"
            >
              About
            </Link>
            <span className="text-white/20" aria-hidden="true">&middot;</span>
            <Link
              href="/advisory/"
              title="Fractional C-Level & Transformation Advisory"
              className="hover:text-white transition-colors px-2"
            >
              Advisory
            </Link>
            <span className="text-white/20" aria-hidden="true">&middot;</span>
            <Link
              href="/transformation-circus/"
              title="The Transformation Circus"
              className="hover:text-white transition-colors px-2"
            >
              Transformation Circus
            </Link>
            <span className="text-white/20" aria-hidden="true">&middot;</span>
            <a
              href="https://www.linkedin.com/in/michaelkurr/recent-activity/all/"
              title="Read Dr. Kurr's latest posts and articles on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors px-2"
            >
              Blog
            </a>
            <span className="text-white/20" aria-hidden="true">&middot;</span>
            <Link
              href="/contact/"
              title="Get in touch with Dr. Michael Kurr"
              className="hover:text-white transition-colors px-2"
            >
              Contact
            </Link>
            <span className="text-white/20" aria-hidden="true">&middot;</span>
            <Link
              href="/imprint/"
              title="Legal notice (Impressum)"
              className="hover:text-white transition-colors px-2"
            >
              Imprint
            </Link>
          </nav>
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Dr. Michael A. Kurr. All rights reserved.
          </p>
        </div>
      </footer>

      <ScrollAnimations />
    </>
  );
}
