import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  leadershipData,
  getLeadershipBySlug,
  getAllLeadershipSlugs,
} from "@/data/leadership";
import { LinkedInIcon } from "@/components/Icons";
import ScrollAnimations from "@/components/ScrollAnimations";
import { makeProductSchema, makeNavigationSchema, makeSpeakableSchema } from "@/data/schemas";

export function generateStaticParams() {
  return getAllLeadershipSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getLeadershipBySlug(slug);
  if (!item) return {};

  const description = `${item.tagline}. ${item.description.slice(0, 120)}...`;

  return {
    title: `${item.name} - Leadership Philosophy | Dr. Michael Kurr`,
    description,
    keywords: [
      item.name,
      "leadership philosophy",
      "Dr. Michael Kurr",
      "Dr. Kurr Advisory",
      "pharma leadership",
      "transformation leadership",
      "executive leadership",
    ],
    authors: [{ name: "Dr. Michael A. Kurr", url: "https://dr.michaelkurr.com" }],
    creator: "Dr. Michael A. Kurr",
    publisher: "Dr. Kurr Advisory",
    alternates: {
      canonical: `https://dr.michaelkurr.com/leadership/${item.slug}/`,
    },
    openGraph: {
      title: `${item.name} - Leadership Philosophy | Dr. Michael Kurr`,
      description,
      type: "article",
      url: `https://dr.michaelkurr.com/leadership/${item.slug}/`,
      siteName: "Dr. Michael Kurr",
      locale: "en_US",
      images: [
        {
          url: "/images/profile.jpg",
          width: 800,
          height: 800,
          alt: `Dr. Michael Kurr - ${item.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.name} - Leadership Philosophy | Dr. Michael Kurr`,
      description: item.tagline,
      images: [
        {
          url: "/images/profile.jpg",
          alt: `Dr. Michael Kurr - ${item.name}`,
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

export default async function LeadershipPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getLeadershipBySlug(slug);
  if (!item) notFound();

  const currentIndex = leadershipData.findIndex((t) => t.slug === slug);
  const prev = currentIndex > 0 ? leadershipData[currentIndex - 1] : null;
  const next =
    currentIndex < leadershipData.length - 1
      ? leadershipData[currentIndex + 1]
      : null;

  return (
    <>
      {/* JSON-LD: Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeProductSchema(`https://dr.michaelkurr.com/leadership/${item.slug}/`, 127)),
        }}
      />

      {/* JSON-LD: Speakable */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeSpeakableSchema(`https://dr.michaelkurr.com/leadership/${item.slug}/`, ["h1", "[data-speakable]"])),
        }}
      />

      {/* JSON-LD: SiteNavigationElement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeNavigationSchema(`https://dr.michaelkurr.com/leadership/${item.slug}/`, item.name)),
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
                  item: "https://dr.michaelkurr.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Leadership",
                  item: "https://dr.michaelkurr.com/#leadership",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: item.name,
                  item: `https://dr.michaelkurr.com/leadership/${item.slug}/`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: `${item.name} - Leadership Philosophy | Dr. Michael Kurr`,
              description: item.tagline,
              author: {
                "@id": "https://dr.michaelkurr.com/#person",
              },
              publisher: {
                "@id": "https://dr.michaelkurr.com/#person",
              },
              mainEntityOfPage: `https://dr.michaelkurr.com/leadership/${item.slug}/`,
              about: `${item.name} in Leadership`,
              articleSection: "Leadership Philosophy",
              inLanguage: "en",
            },
          ]),
        }}
      />

      {/* Top navigation bar */}
      <nav aria-label="Leadership page navigation" className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg py-3">
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
              href="/#leadership"
              title="View Dr. Kurr's leadership philosophy"
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200"
            >
              How I Lead
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
                  <Link href="/" title="Dr. Michael Kurr - Home" className="hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">/</li>
                <li>
                  <Link href="/#leadership" title="View Dr. Kurr's leadership philosophy" className="hover:text-gold transition-colors">
                    Leadership
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">/</li>
                <li aria-current="page" className="text-gold-light font-medium">
                  {item.name}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="pt-8 pb-16 lg:pb-24 bg-navy text-white">
          <div className="max-w-4xl mx-auto px-6">
            <span className="fade-in block text-gold-light text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Leadership Philosophy
            </span>
            <h1 className="fade-in font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {item.name}
            </h1>
            <p data-speakable className="fade-in text-xl sm:text-2xl text-white/80 font-light leading-relaxed max-w-3xl">
              {item.tagline}
            </p>
          </div>
        </section>

        {/* Quote bar */}
        {item.quote && (
          <section className="bg-navy-dark py-10">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <blockquote className="fade-in font-heading text-xl sm:text-2xl italic text-white/80 leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
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

        {/* Other traits navigation */}
        <section className="py-12 bg-offwhite border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-6">
            <h3 className="fade-in font-heading text-xl font-semibold text-navy mb-6">
              Other Leadership Traits
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {leadershipData
                .filter((t) => t.slug !== slug)
                .map((t) => (
                  <Link
                    key={t.slug}
                    href={`/leadership/${t.slug}/`}
                    title={`${t.name} - Dr. Kurr's leadership principle`}
                    className="fade-in group p-4 rounded-xl border border-gray-200 hover:border-gold/40 hover:shadow-md transition-all duration-300 bg-white text-center"
                  >
                    <span className="block font-heading text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                      {t.name}
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
                href={`/leadership/${prev.slug}/`}
                title={`Previous leadership trait: ${prev.name}`}
                className="fade-in flex-1 group p-6 rounded-xl border border-gray-200 hover:border-gold/40 hover:shadow-md transition-all duration-300"
              >
                <span className="text-xs font-semibold tracking-wider uppercase text-charcoal/65">
                  Previous
                </span>
                <span className="block font-heading text-lg font-semibold text-navy group-hover:text-gold transition-colors mt-1">
                  {prev.name}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {next ? (
              <Link
                href={`/leadership/${next.slug}/`}
                title={`Next leadership trait: ${next.name}`}
                className="fade-in flex-1 group p-6 rounded-xl border border-gray-200 hover:border-gold/40 hover:shadow-md transition-all duration-300 text-right"
              >
                <span className="text-xs font-semibold tracking-wider uppercase text-charcoal/65">
                  Next
                </span>
                <span className="block font-heading text-lg font-semibold text-navy group-hover:text-gold transition-colors mt-1">
                  {next.name}
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
              Interested in Dr. Kurr&rsquo;s leadership approach or exploring
              how he can support your organization?
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
            <a href="https://www.linkedin.com/in/michaelkurr/recent-activity/all/" title="Read Dr. Kurr's latest posts and articles on LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors px-2">
              Blog
            </a>
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
