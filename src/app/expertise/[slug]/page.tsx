import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  expertiseData,
  getExpertiseBySlug,
  getAllExpertiseSlugs,
} from "@/data/expertise";
import { LinkedInIcon } from "@/components/Icons";
import ScrollAnimations from "@/components/ScrollAnimations";
import { makeProductSchema, makeNavigationSchema } from "@/data/schemas";

export function generateStaticParams() {
  return getAllExpertiseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getExpertiseBySlug(slug);
  if (!item) return {};

  const description = `${item.tagline}. ${item.description.slice(0, 120)}...`;

  return {
    title: `${item.title} — Dr. Michael Kurr | Expertise`,
    description,
    keywords: [
      item.title,
      "Dr. Michael Kurr",
      "pharma transformation",
      "life sciences advisory",
      ...item.title.toLowerCase().split(/\s+&?\s*/),
    ],
    alternates: {
      canonical: `https://michaelkurr.com/expertise/${item.slug}/`,
    },
    openGraph: {
      title: `${item.title} — Dr. Michael Kurr`,
      description,
      type: "article",
      url: `https://michaelkurr.com/expertise/${item.slug}/`,
      siteName: "Dr. Michael Kurr",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} — Dr. Michael Kurr`,
      description: item.tagline,
    },
  };
}

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getExpertiseBySlug(slug);
  if (!item) notFound();

  const currentIndex = expertiseData.findIndex((e) => e.slug === slug);
  const prev = currentIndex > 0 ? expertiseData[currentIndex - 1] : null;
  const next =
    currentIndex < expertiseData.length - 1
      ? expertiseData[currentIndex + 1]
      : null;

  return (
    <>
      {/* JSON-LD: Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeProductSchema(`https://michaelkurr.com/expertise/${item.slug}/`, 156)),
        }}
      />

      {/* JSON-LD: SiteNavigationElement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeNavigationSchema(`https://michaelkurr.com/expertise/${item.slug}/`, item.title)),
        }}
      />

      {/* BreadcrumbList + Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
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
                  name: "Expertise",
                  item: "https://michaelkurr.com/#expertise",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: item.title,
                  item: `https://michaelkurr.com/expertise/${item.slug}/`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: `${item.title} — Dr. Michael Kurr`,
              description: item.tagline,
              author: {
                "@id": "https://michaelkurr.com/#person",
              },
              publisher: {
                "@id": "https://michaelkurr.com/#person",
              },
              mainEntityOfPage: `https://michaelkurr.com/expertise/${item.slug}/`,
              about: item.title,
              articleSection: "Expertise",
              inLanguage: "en",
            },
          ]),
        }}
      />

      {/* Top navigation bar */}
      <nav aria-label="Expertise page navigation" className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg py-3">
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
              href="/#expertise"
              title="View all areas of expertise"
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200"
            >
              All Expertise
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
                  <Link href="/" title="Dr. Michael Kurr — Home" className="hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">/</li>
                <li>
                  <Link href="/#expertise" title="View all areas of expertise" className="hover:text-gold transition-colors">
                    Expertise
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">/</li>
                <li aria-current="page" className="text-gold-light font-medium">
                  {item.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="pt-8 pb-16 lg:pb-24 bg-navy text-white">
          <div className="max-w-4xl mx-auto px-6">
            <span className="fade-in block text-gold-light text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Expertise
            </span>
            <h1 className="fade-in font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {item.title}
            </h1>
            <p className="fade-in text-xl sm:text-2xl text-white/80 font-light leading-relaxed max-w-3xl">
              {item.tagline}
            </p>
          </div>
        </section>

        {/* Highlights bar */}
        {item.highlights.length > 0 && (
          <section className="bg-navy-dark py-10">
            <div className="max-w-4xl mx-auto px-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {item.highlights.map((h) => (
                  <div key={h.label} className="fade-in text-center">
                    <div className="text-3xl sm:text-4xl font-heading font-bold text-gold-light mb-1">
                      {h.value}
                    </div>
                    <p className="text-white/75 text-sm">{h.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Introduction */}
        <section className="py-16 lg:py-24 bg-offwhite">
          <div className="max-w-3xl mx-auto px-6">
            <p className="fade-in text-xl leading-relaxed text-charcoal/80">
              {item.description}
            </p>
          </div>
        </section>

        {/* Content sections */}
        <article className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">
            {item.sections.map((section, i) => (
              <section key={i} className="fade-in">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-6">
                  {section.heading}
                </h2>
                <p className="text-lg leading-relaxed text-charcoal/80">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </article>

        {/* Related links */}
        {item.relatedLinks.length > 0 && (
          <section className="py-12 bg-offwhite border-t border-gray-200">
            <div className="max-w-3xl mx-auto px-6">
              <h3 className="fade-in font-heading text-xl font-semibold text-navy mb-6">
                Further Reading
              </h3>
              <ul className="space-y-3">
                {item.relatedLinks.map((link) => (
                  <li key={link.href} className="fade-in">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Read: ${link.label}`}
                      className="inline-flex items-center gap-2 text-teal hover:text-teal-light font-medium transition-colors"
                    >
                      {link.label}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Prev / Next navigation */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-stretch gap-4">
            {prev ? (
              <Link
                href={`/expertise/${prev.slug}/`}
                title={`Previous expertise: ${prev.title}`}
                className="fade-in flex-1 group p-6 rounded-xl border border-gray-200 hover:border-gold/40 hover:shadow-md transition-all duration-300"
              >
                <span className="text-xs font-semibold tracking-wider uppercase text-charcoal/65">
                  Previous
                </span>
                <span className="block font-heading text-lg font-semibold text-navy group-hover:text-gold transition-colors mt-1">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {next ? (
              <Link
                href={`/expertise/${next.slug}/`}
                title={`Next expertise: ${next.title}`}
                className="fade-in flex-1 group p-6 rounded-xl border border-gray-200 hover:border-gold/40 hover:shadow-md transition-all duration-300 text-right"
              >
                <span className="text-xs font-semibold tracking-wider uppercase text-charcoal/65">
                  Next
                </span>
                <span className="block font-heading text-lg font-semibold text-navy group-hover:text-gold transition-colors mt-1">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="fade-in font-heading text-3xl sm:text-4xl font-bold mb-6">
              Let&rsquo;s Connect
            </h2>
            <p className="fade-in text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Interested in discussing {item.title.toLowerCase()} or exploring
              how Dr. Kurr can support your organization?
            </p>
            <div className="fade-in">
              <a
                href="https://www.linkedin.com/in/michaelkurr/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Dr. Michael Kurr on LinkedIn"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-navy font-semibold text-lg rounded-lg hover:bg-gold-light transition-colors duration-200 shadow-lg shadow-gold/20"
              >
                <LinkedInIcon className="w-6 h-6" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 bg-navy-dark text-white/75 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm"
          >
            <Link href="/#about" title="Learn about Dr. Michael Kurr's background" className="hover:text-white transition-colors px-2">
              About
            </Link>
            <span className="text-white/20" aria-hidden="true">&middot;</span>
            <Link href="/advisory/" title="Fractional C-Level & Transformation Advisory" className="hover:text-white transition-colors px-2">
              Advisory
            </Link>
            <span className="text-white/20" aria-hidden="true">&middot;</span>
            <Link href="/transformation-circus/" title="The Transformation Circus" className="hover:text-white transition-colors px-2">
              Transformation Circus
            </Link>
            <span className="text-white/20" aria-hidden="true">&middot;</span>
            <Link href="/contact/" title="Get in touch with Dr. Michael Kurr" className="hover:text-white transition-colors px-2">
              Contact
            </Link>
            <span className="text-white/20" aria-hidden="true">&middot;</span>
            <Link href="/imprint/" title="Legal notice (Impressum)" className="hover:text-white transition-colors px-2">
              Imprint
            </Link>
            <span className="text-white/20" aria-hidden="true">&middot;</span>
            <Link href="/privacy-policy/" title="Privacy policy" className="hover:text-white transition-colors px-2">
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
