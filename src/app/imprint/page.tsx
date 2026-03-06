import { Metadata } from "next";
import Link from "next/link";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Imprint — Dr. Michael Kurr",
  description:
    "Legal notice (Impressum) for michaelkurr.com — the personal website of Dr. Michael A. Kurr, Founder of Dr. Kurr Advisory.",
  alternates: {
    canonical: "https://michaelkurr.com/imprint/",
  },
  robots: { index: true, follow: true },
};

export default function ImprintPage() {
  return (
    <>
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
                item: "https://michaelkurr.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Imprint",
                item: "https://michaelkurr.com/imprint/",
              },
            ],
          }),
        }}
      />

      {/* Top navigation bar */}
      <nav
        aria-label="Imprint page navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg py-3"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            title="Dr. Michael Kurr — Home"
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
              href="/#contact"
              title="Get in touch with Dr. Michael Kurr"
              className="text-sm font-medium px-5 py-2 border border-gold text-gold rounded hover:bg-gold hover:text-navy transition-all duration-200"
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
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li>
                  <Link
                    href="/"
                    title="Dr. Michael Kurr — Home"
                    className="hover:text-gold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">
                  /
                </li>
                <li aria-current="page" className="text-gold font-medium">
                  Imprint
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="pt-8 pb-16 lg:pb-24 bg-navy text-white">
          <div className="max-w-4xl mx-auto px-6">
            <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Legal Notice
            </span>
            <h1 className="fade-in font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Imprint
            </h1>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 lg:py-24 bg-offwhite">
          <div className="max-w-3xl mx-auto px-6 space-y-12">
            {/* Information according to § 5 TMG */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                Information according to &sect; 5 TMG
              </h2>
              <address className="not-italic text-lg leading-relaxed text-charcoal/80">
                Dr. Michael A. Kurr
                <br />
                Dr. Kurr Advisory
                <br />
                Germany
              </address>
            </section>

            {/* Contact */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                Contact
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                Email:{" "}
                <a
                  href="mailto:info@michaelkurr.com"
                  title="Send an email to Dr. Michael Kurr"
                  className="text-teal hover:text-teal-light transition-colors"
                >
                  info@michaelkurr.com
                </a>
                <br />
                Phone:{" "}
                <a
                  href="tel:+4915205235286"
                  title="Call Dr. Michael Kurr"
                  className="text-teal hover:text-teal-light transition-colors"
                >
                  +49 1520 5235286
                </a>
              </p>
            </section>

            {/* Responsible for content */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                Responsible for Content (according to &sect; 55 Abs. 2 RSt)
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                Dr. Michael A. Kurr
                <br />
                Address as above
              </p>
            </section>

            {/* Professional information */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                Professional Information
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                Dr. Michael A. Kurr is an independent advisor and fractional
                C-level executive. The title &ldquo;Dr.&rdquo; (Dr. oec. HSG)
                was conferred by the University of St. Gallen, Switzerland.
              </p>
            </section>

            {/* Liability for content */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                Liability for Content
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                The contents of this website have been created with the utmost
                care. However, no guarantee can be given for the accuracy,
                completeness, or timeliness of the content. As a service
                provider, we are responsible for our own content on these pages
                in accordance with general legislation pursuant to &sect; 7
                Abs. 1 TMG. According to &sect;&sect; 8 to 10 TMG, however, we
                are not obliged as a service provider to monitor transmitted or
                stored third-party information or to investigate circumstances
                that indicate illegal activity. Obligations to remove or block
                the use of information under general law remain unaffected.
                However, liability in this regard is only possible from the
                point in time at which a concrete infringement of the law
                becomes known. If we become aware of any such infringement, we
                will remove the content in question immediately.
              </p>
            </section>

            {/* Liability for links */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                Liability for Links
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                This website contains links to external websites of third
                parties over whose content we have no influence. Therefore, we
                cannot assume any liability for these external contents. The
                respective provider or operator of the linked pages is always
                responsible for the content of those pages. The linked pages
                were checked for possible legal violations at the time of
                linking. Illegal contents were not recognizable at the time of
                linking. However, permanent monitoring of the content of the
                linked pages is not reasonable without concrete evidence of an
                infringement. If we become aware of any infringement, we will
                remove such links immediately.
              </p>
            </section>

            {/* Copyright */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                Copyright
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                The content and works created by the site operators on these
                pages are subject to German copyright law. The reproduction,
                editing, distribution, and any kind of exploitation outside the
                limits of copyright require the written consent of the
                respective author or creator. Downloads and copies of this site
                are only permitted for private, non-commercial use. Insofar as
                the content on this site was not created by the operator, the
                copyrights of third parties are respected. In particular,
                third-party content is identified as such. Should you
                nevertheless become aware of a copyright infringement, please
                inform us accordingly. If we become aware of any infringement,
                we will remove such content immediately.
              </p>
            </section>

            {/* Website Design & Concept */}
            <section className="fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                Website Design &amp; Concept
              </h2>
              <p className="text-lg leading-relaxed text-charcoal/80">
                Made with{" "}
                <span className="text-red-500" aria-label="love">
                  &hearts;
                </span>{" "}
                by{" "}
                <a
                  href="https://dross.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Dross:Media — Web Design & Development"
                  className="text-teal hover:text-teal-light font-semibold transition-colors"
                >
                  Dross:Media
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-navy-dark text-white/70 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Dr. Michael A. Kurr. All rights
            reserved.
          </p>
          <nav
            aria-label="Footer navigation"
            className="flex items-center gap-6 text-sm"
          >
            <Link
              href="/"
              title="Dr. Michael Kurr — Home"
              className="hover:text-white/80 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/privacy-policy/"
              title="Privacy Policy"
              className="hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/transformation-circus/"
              title="The Transformation Circus"
              className="hover:text-white/80 transition-colors"
            >
              Transformation Circus
            </Link>
          </nav>
        </div>
      </footer>

      <ScrollAnimations />
    </>
  );
}
