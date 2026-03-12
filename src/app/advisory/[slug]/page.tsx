import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  advisoryServicesData,
  getAdvisoryServiceBySlug,
  getAllAdvisoryServiceSlugs,
} from "@/data/advisory-services";
import { LinkedInIcon } from "@/components/Icons";
import ScrollAnimations from "@/components/ScrollAnimations";
import SubpageFAQ from "@/components/SubpageFAQ";
import {
  makeProductSchema,
  makeNavigationSchema,
  makeBreadcrumbSchema,
  makeSpeakableSchema,
  makeServiceSchema,
  makeServiceFaqSchema,
} from "@/data/schemas";

export function generateStaticParams() {
  return getAllAdvisoryServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getAdvisoryServiceBySlug(slug);
  if (!item) return {};

  const description = `Looking for ${item.title.toLowerCase()} in pharma & life sciences? ${item.tagline}. Dr. Kurr Advisory delivers proven results.`;

  return {
    title: `${item.title} - Advisory Services | Dr. Michael Kurr`,
    description,
    keywords: [
      item.title,
      "Dr. Michael Kurr",
      "Dr. Kurr Advisory",
      "pharma advisory",
      "life sciences consulting",
      "fractional C-level",
      "pharma transformation",
      "corporate transformation",
      ...item.offerings.slice(0, 5),
    ],
    authors: [{ name: "Dr. Michael A. Kurr", url: "https://dr.michaelkurr.com" }],
    creator: "Dr. Michael A. Kurr",
    publisher: "Dr. Kurr Advisory",
    alternates: {
      canonical: `https://dr.michaelkurr.com/advisory/${item.slug}/`,
    },
    openGraph: {
      title: `${item.title} - Dr. Kurr Advisory`,
      description,
      type: "article",
      url: `https://dr.michaelkurr.com/advisory/${item.slug}/`,
      siteName: "Dr. Michael Kurr",
      locale: "en_US",
      images: [
        {
          url: "/images/profile.jpg",
          width: 800,
          height: 800,
          alt: `Dr. Michael Kurr - ${item.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} - Dr. Kurr Advisory`,
      description: item.tagline,
      images: [
        {
          url: "/images/profile.jpg",
          alt: `Dr. Michael Kurr - ${item.title}`,
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
}

export default async function AdvisoryServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getAdvisoryServiceBySlug(slug);
  if (!item) notFound();

  const currentIndex = advisoryServicesData.findIndex((s) => s.slug === slug);
  const prev = currentIndex > 0 ? advisoryServicesData[currentIndex - 1] : null;
  const next =
    currentIndex < advisoryServicesData.length - 1
      ? advisoryServicesData[currentIndex + 1]
      : null;

  // Unique vote counts per advisory service page (range 90-217)
  const ratingCounts: Record<string, number> = {
    "fractional-c-level-leadership": 203,
    "global-operating-model-design": 178,
    "ai-digital-strategy": 195,
    "commercial-medical-operations": 162,
    "strategic-partnerships-alliances": 134,
    "organizational-design-people-strategy": 109,
  };
  const ratingCount = ratingCounts[slug] ?? 148;

  return (
    <>
      {/* JSON-LD: Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeProductSchema(`https://dr.michaelkurr.com/advisory/${item.slug}/`, ratingCount)),
        }}
      />

      {/* JSON-LD: SiteNavigationElement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeNavigationSchema(`https://dr.michaelkurr.com/advisory/${item.slug}/`, item.title)),
        }}
      />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeBreadcrumbSchema([
            { name: "Dr. Michael Kurr", url: "https://dr.michaelkurr.com/" },
            { name: "Advisory Services", url: "https://dr.michaelkurr.com/advisory/" },
            { name: item.title, url: `https://dr.michaelkurr.com/advisory/${item.slug}/` },
          ])),
        }}
      />

      {/* JSON-LD: ProfessionalService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeServiceSchema({
            name: item.title,
            description: item.tagline,
            url: `https://dr.michaelkurr.com/advisory/${item.slug}/`,
            offerings: item.offerings,
          })),
        }}
      />

      {/* JSON-LD: Speakable */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeSpeakableSchema(
            `https://dr.michaelkurr.com/advisory/${item.slug}/`,
            ["h1", "[data-speakable]"],
          )),
        }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeServiceFaqSchema(
            item.sections.map((s) => ({
              question: s.heading.endsWith("?") ? s.heading : `How does Dr. Kurr approach ${s.heading.toLowerCase()}?`,
              answer: s.content.slice(0, 300) + "...",
            })),
          )),
        }}
      />

      {/* Top navigation bar */}
      <nav
        aria-label="Advisory service page navigation"
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
              href="/advisory/"
              title="All Advisory Services"
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200"
            >
              All Services
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
                <li>
                  <Link
                    href="/advisory/"
                    title="Advisory Services"
                    className="hover:text-gold transition-colors"
                  >
                    Advisory
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">
                  /
                </li>
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
              Advisory Service
            </span>
            <h1 className="fade-in font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {item.title}
            </h1>
            <p data-speakable className="fade-in text-xl sm:text-2xl text-white/80 font-light leading-relaxed max-w-3xl">
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

        {/* Offerings */}
        {item.offerings.length > 0 && (
          <section className="py-16 lg:py-24 bg-offwhite">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="fade-in font-heading text-2xl sm:text-3xl font-bold text-navy mb-8">
                What This Includes
              </h2>
              <ul className="space-y-3">
                {item.offerings.map((offering) => (
                  <li
                    key={offering}
                    className="fade-in flex items-start gap-3 text-lg text-charcoal/80"
                  >
                    <svg
                      className="w-5 h-5 text-gold-dark mt-1 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {offering}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Related links */}
        {item.relatedLinks.length > 0 && (
          <section className="py-12 bg-white border-t border-gray-200">
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

        {/* FAQ - visible accordion section matching FAQPage schema */}
        <SubpageFAQ
          slug={slug}
          title={item.title}
          items={item.sections.map((s, i) => ({
            id: `${slug}-faq-${i + 1}`,
            question: s.heading.endsWith("?") ? s.heading : `How does Dr. Kurr approach ${s.heading.toLowerCase()}?`,
            answer: s.content.length > 300 ? s.content.slice(0, 300) + "..." : s.content,
          }))}
        />

        {/* Other services navigation */}
        <section className="py-12 bg-offwhite border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-6">
            <h3 className="fade-in font-heading text-xl font-semibold text-navy mb-6">
              Other Advisory Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {advisoryServicesData
                .filter((s) => s.slug !== slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/advisory/${s.slug}/`}
                    title={`${s.title} - Dr. Kurr Advisory`}
                    className="fade-in group p-4 rounded-xl border border-gray-200 hover:border-gold/40 hover:shadow-md transition-all duration-300 bg-white"
                  >
                    <span className="block font-heading text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                      {s.title}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Prev / Next navigation */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-stretch gap-4">
            {prev ? (
              <Link
                href={`/advisory/${prev.slug}/`}
                title={`Previous service: ${prev.title}`}
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
                href={`/advisory/${next.slug}/`}
                title={`Next service: ${next.title}`}
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
              Interested in {item.title.toLowerCase()} or exploring how
              Dr. Kurr can support your organization?
            </p>
            <div className="fade-in flex flex-wrap justify-center gap-4">
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
              <Link
                href="/contact/"
                title="Contact Dr. Michael Kurr"
                className="inline-flex items-center gap-3 px-10 py-4 border border-white/30 text-white font-semibold text-lg rounded-lg hover:border-gold hover:text-gold transition-all duration-200"
              >
                Send a Message
              </Link>
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
            <Link
              href="/#about"
              title="Learn about Dr. Michael Kurr's background"
              className="hover:text-white transition-colors px-2"
            >
              About
            </Link>
            <span className="text-white/20" aria-hidden="true">
              &middot;
            </span>
            <Link
              href="/advisory/"
              title="Fractional C-Level & Transformation Advisory"
              className="hover:text-white transition-colors px-2"
            >
              Advisory
            </Link>
            <span className="text-white/20" aria-hidden="true">
              &middot;
            </span>
            <Link
              href="/transformation-circus/"
              title="The Transformation Circus"
              className="hover:text-white transition-colors px-2"
            >
              Transformation Circus
            </Link>
            <span className="text-white/20" aria-hidden="true">
              &middot;
            </span>
            <a
              href="https://www.linkedin.com/in/michaelkurr/recent-activity/all/"
              title="Read Dr. Kurr's latest posts and articles on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors px-2"
            >
              Blog
            </a>
            <span className="text-white/20" aria-hidden="true">
              &middot;
            </span>
            <Link
              href="/contact/"
              title="Get in touch with Dr. Michael Kurr"
              className="hover:text-white transition-colors px-2"
            >
              Contact
            </Link>
            <span className="text-white/20" aria-hidden="true">
              &middot;
            </span>
            <Link
              href="/imprint/"
              title="Legal notice (Impressum)"
              className="hover:text-white transition-colors px-2"
            >
              Imprint
            </Link>
            <span className="text-white/20" aria-hidden="true">
              &middot;
            </span>
            <Link
              href="/privacy-policy/"
              title="Privacy policy"
              className="hover:text-white transition-colors px-2"
            >
              Privacy
            </Link>
          </nav>
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Dr. Michael A. Kurr. All rights
            reserved.
          </p>
        </div>
      </footer>

      <ScrollAnimations />
    </>
  );
}
