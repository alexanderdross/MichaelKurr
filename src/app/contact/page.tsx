import { Metadata } from "next";
import Link from "next/link";
import ScrollAnimations from "@/components/ScrollAnimations";
import ContactForm from "./ContactForm";
import { makeProductSchema, makeNavigationSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title: "Contact — Dr. Michael Kurr",
  description:
    "Get in touch with Dr. Michael A. Kurr for fractional C-level mandates, transformation advisory, or strategic counsel in Pharma & Life Sciences.",
  keywords: [
    "contact Dr. Michael Kurr",
    "pharma advisory contact",
    "fractional C-level inquiry",
    "transformation advisory inquiry",
  ],
  alternates: {
    canonical: "https://michaelkurr.com/contact/",
  },
  openGraph: {
    title: "Contact — Dr. Michael Kurr",
    description:
      "Get in touch with Dr. Michael A. Kurr for fractional C-level mandates, transformation advisory, or strategic counsel in Pharma & Life Sciences.",
    type: "website",
    url: "https://michaelkurr.com/contact/",
    siteName: "Dr. Michael Kurr",
    locale: "en_US",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Dr. Michael Kurr — Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Dr. Michael Kurr",
    description:
      "Get in touch for fractional C-level mandates, transformation advisory, or strategic counsel in Pharma & Life Sciences.",
    images: [
      {
        url: "/images/profile.jpg",
        alt: "Dr. Michael Kurr — Contact",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD: Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeProductSchema("https://michaelkurr.com/contact/", 94)),
        }}
      />

      {/* JSON-LD: SiteNavigationElement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeNavigationSchema("https://michaelkurr.com/contact/", "Contact")),
        }}
      />

      {/* JSON-LD: BreadcrumbList */}
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
                name: "Contact",
                item: "https://michaelkurr.com/contact/",
              },
            ],
          }),
        }}
      />

      {/* ── Top Nav ── */}
      <nav
        aria-label="Contact page navigation"
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
              title="About Dr. Michael Kurr"
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/advisory/"
              title="Advisory Services"
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200"
            >
              Advisory
            </Link>
            <Link
              href="/transformation-circus/"
              title="The Transformation Circus"
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200"
            >
              Circus
            </Link>
          </div>
        </div>
      </nav>

      <main id="main-content">
        {/* ── Breadcrumb ── */}
        <div className="pt-20 bg-navy">
          <div className="max-w-6xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="py-3">
              <ol className="flex items-center gap-2 text-sm text-white/80">
                <li>
                  <Link
                    href="/"
                    title="Home"
                    className="hover:text-gold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">
                  /
                </li>
                <li aria-current="page" className="text-gold-light font-medium">
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="relative pt-12 pb-16 lg:pb-20 bg-navy text-white overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/[0.04] blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <p className="fade-in text-gold-light text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="fade-in font-heading text-4xl sm:text-5xl font-bold mb-6">
              Let&rsquo;s Talk
            </h1>
            <p className="fade-in text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Looking for fractional C-level support, transformation advisory,
              or strategic counsel in Pharma &amp; Life Sciences? I&rsquo;m
              always open to a conversation.
            </p>
          </div>
        </section>

        {/* ── Contact Form + Info ── */}
        <section className="py-16 lg:py-24 bg-offwhite">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="fade-in bg-white rounded-2xl border border-gray-100 p-8 sm:p-10 shadow-sm">
                  <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                    Send a Message
                  </h2>
                  <ContactForm />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-8">
                <div className="fade-in">
                  <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                    Other Ways to Connect
                  </h2>

                  <div className="space-y-6">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/michaelkurr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Connect with Dr. Michael Kurr on LinkedIn"
                      className="flex items-start gap-4 group"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                        <svg className="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-navy group-hover:text-gold transition-colors">
                          LinkedIn
                        </p>
                        <p className="text-sm text-charcoal/70">
                          Connect and message directly
                        </p>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:info@michaelkurr.com"
                      title="Email Dr. Michael Kurr"
                      className="flex items-start gap-4 group"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                        <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-navy group-hover:text-gold transition-colors">
                          Email
                        </p>
                        <p className="text-sm text-charcoal/70">
                          info@michaelkurr.com
                        </p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href="tel:+4915205235286"
                      title="Call Dr. Michael Kurr"
                      className="flex items-start gap-4 group"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                        <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-navy group-hover:text-gold transition-colors">
                          Phone
                        </p>
                        <p className="text-sm text-charcoal/70">
                          +49 1520 5235286
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="fade-in bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-navy mb-3">
                    Based in Germany
                  </h3>
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    Serving clients across Europe and globally. Open to remote
                    engagements and on-site work as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="py-10 bg-navy-dark text-white/75 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm"
          >
            <Link href="/" className="hover:text-white transition-colors px-2">
              Home
            </Link>
            <span className="text-white/20" aria-hidden="true">·</span>
            <Link href="/advisory/" className="hover:text-white transition-colors px-2">
              Advisory
            </Link>
            <span className="text-white/20" aria-hidden="true">·</span>
            <Link href="/transformation-circus/" className="hover:text-white transition-colors px-2">
              Transformation Circus
            </Link>
            <span className="text-white/20" aria-hidden="true">·</span>
            <Link href="/imprint/" className="hover:text-white transition-colors px-2">
              Imprint
            </Link>
            <span className="text-white/20" aria-hidden="true">·</span>
            <Link href="/privacy-policy/" className="hover:text-white transition-colors px-2">
              Privacy
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
