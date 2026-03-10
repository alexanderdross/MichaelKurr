import { Metadata } from "next";
import Link from "next/link";
import ScrollAnimations from "@/components/ScrollAnimations";
import SubpageFAQ from "@/components/SubpageFAQ";
import { makeProductSchema, makeNavigationSchema, howToEngageSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title:
    "Advisory Services — Fractional C-Level & Transformation Advisory | Dr. Michael Kurr",
  description:
    "Need a fractional CCO, CTO, or COO for your pharma organization? Dr. Kurr Advisory provides C-level leadership, transformation advisory, and operating model design for Pharma & Life Sciences — from a leader who built the #1 content supply chain in the industry.",
  keywords: [
    "fractional CCO",
    "fractional CTO",
    "fractional COO",
    "pharma advisory",
    "life sciences consulting",
    "Dr. Kurr Advisory",
    "Dr. Michael Kurr",
    "pharma transformation consulting",
    "commercial operations advisory",
    "go-to-market strategy pharma",
    "AI strategy pharma",
    "operating model design",
    "content supply chain",
    "global services delivery",
    "pharma digital transformation",
    "MedTech advisory",
    "biotech advisory",
    "organizational design pharma",
    "market access advisory",
    "MLR optimization",
  ],
  authors: [{ name: "Dr. Michael A. Kurr", url: "https://dr.michaelkurr.com" }],
  creator: "Dr. Michael A. Kurr",
  publisher: "Dr. Kurr Advisory",
  alternates: {
    canonical: "https://dr.michaelkurr.com/advisory/",
  },
  openGraph: {
    title: "Advisory Services — Dr. Kurr Advisory",
    description:
      "Fractional C-level leadership and transformation advisory for Pharma & Life Sciences. Strategic clarity, scalable operating models, and profitable growth.",
    type: "website",
    url: "https://dr.michaelkurr.com/advisory/",
    locale: "en_US",
    siteName: "Dr. Michael Kurr",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Dr. Michael Kurr — Advisory Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advisory Services — Dr. Kurr Advisory",
    description:
      "Fractional C-level leadership and transformation advisory for Pharma & Life Sciences.",
    images: [
      {
        url: "/images/profile.jpg",
        alt: "Dr. Michael Kurr — Advisory Services",
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

/* ─── SVG Icons ─── */
const iconClass = "w-10 h-10 text-navy";
const iconSmClass = "w-8 h-8 text-navy";

function BriefcaseIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M2 13h20" />
    </svg>
  );
}

function CogIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function CpuIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  );
}

function TargetIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function LinkIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function UsersIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function FlaskIcon({ className = iconSmClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M10 3v7.4a2 2 0 0 1-.6 1.4L4 17.2a2 2 0 0 0-.6 1.4V20a1 1 0 0 0 1 1h15.2a1 1 0 0 0 1-1v-1.4a2 2 0 0 0-.6-1.4l-5.4-5.4a2 2 0 0 1-.6-1.4V3" />
    </svg>
  );
}

function HeartPulseIcon({ className = iconSmClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.5 12.572l-7.5 7.428l-7.5-7.428A5 5 0 0 1 12 6.006a5 5 0 0 1 7.5 6.572" />
      <path d="M3 12h4l2-4 4 8 2-4h6" />
    </svg>
  );
}

function BuildingIcon({ className = iconSmClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
  );
}

function MonitorIcon({ className = iconSmClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function CarIcon({ className = iconSmClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h14M3 11l1.5-5h15L21 11" />
      <rect x="3" y="11" width="18" height="6" rx="1" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function FactoryIcon({ className = iconSmClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20M4 20V10l4 2V8l4 2V6l4 2V4h4v16" />
      <path d="M6 16h.01M10 16h.01M14 16h.01M18 16h.01" />
    </svg>
  );
}

function ShoppingCartIcon({ className = iconSmClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function BankIcon({ className = iconSmClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 10h18M12 3l9 7H3l9-7z" />
      <path d="M5 10v8M9 10v8M15 10v8M19 10v8" />
    </svg>
  );
}

function CodeIcon({ className = iconSmClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ZapIcon({ className = iconSmClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function BoltIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function LightbulbIcon({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A7 7 0 1 0 7.5 11.5c.76.76 1.23 1.52 1.41 2.5" />
    </svg>
  );
}

/* ─── Service card (linked) ─── */
function ServiceCard({
  icon,
  title,
  slug,
  description,
  offerings,
}: {
  icon: React.ReactNode;
  title: string;
  slug: string;
  description: string;
  offerings: string[];
}) {
  return (
    <Link
      href={`/advisory/${slug}/`}
      title={`${title} — Dr. Kurr Advisory`}
      className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg hover:border-gold/40 transition-all duration-300 block"
    >
      <div className="mb-4" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-bold text-navy group-hover:text-gold transition-colors duration-200 mb-3">
        {title}
      </h3>
      <p className="text-charcoal/80 mb-5 leading-relaxed">{description}</p>
      <ul className="space-y-2 mb-6" aria-label={`${title} offerings`}>
        {offerings.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
            <svg className="w-4 h-4 text-gold-dark mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal group-hover:text-gold transition-colors duration-200">
        Learn more
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

/* ─── Industry card ─── */
function IndustryCard({
  icon,
  title,
  slug,
  examples,
}: {
  icon: React.ReactNode;
  title: string;
  slug: string;
  examples: string[];
}) {
  return (
    <Link
      href={`/industries/${slug}/`}
      title={`${title} — Dr. Kurr Advisory: Industry expertise and transformation services`}
      aria-label={`Learn more about Dr. Kurr's advisory services for ${title} organizations`}
      className="group bg-offwhite rounded-xl border border-gray-200 p-6 hover:border-gold/40 hover:shadow-md transition-all duration-300"
    >
      <div className="mb-3" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-200">
        {title}
      </h3>
      <ul className="space-y-1 text-sm text-charcoal">
        {examples.map((ex) => (
          <li key={ex}>{ex}</li>
        ))}
      </ul>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal group-hover:text-gold transition-colors duration-200 mt-4">
        Learn more
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function AdvisoryPage() {
  return (
    <>
      {/* JSON-LD: Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeProductSchema("https://dr.michaelkurr.com/advisory/", 217)),
        }}
      />

      {/* JSON-LD: SiteNavigationElement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeNavigationSchema("https://dr.michaelkurr.com/advisory/", "Advisory Services")),
        }}
      />

      {/* JSON-LD: Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://dr.michaelkurr.com/advisory/#service",
            name: "Dr. Kurr Advisory",
            description:
              "Fractional C-level leadership and transformation advisory for Pharma & Life Sciences organizations. Strategic clarity, scalable operating models, and profitable growth.",
            url: "https://dr.michaelkurr.com/advisory/",
            provider: {
              "@type": "Person",
              "@id": "https://dr.michaelkurr.com/#person",
              name: "Dr. Michael A. Kurr",
              url: "https://dr.michaelkurr.com",
              image: "https://dr.michaelkurr.com/images/profile.jpg",
            },
            areaServed: ["Europe", "Global"],
            serviceType: [
              "Fractional C-Level Leadership",
              "Corporate Transformation Advisory",
              "Operating Model Design",
              "AI & Digital Strategy",
              "Commercial Operations Consulting",
              "Organizational Design",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Advisory Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fractional C-Level Leadership",
                    description:
                      "Part-time CCO, CTO, or COO mandates for pharma and life sciences organizations.",
                    url: "https://dr.michaelkurr.com/advisory/fractional-c-level-leadership/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Global Operating Model Design",
                    description:
                      "Scalable operating models balancing centralization with local agility.",
                    url: "https://dr.michaelkurr.com/advisory/global-operating-model-design/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI & Digital Strategy for Regulated Industries",
                    description:
                      "Practical AI adoption within pharma compliance frameworks.",
                    url: "https://dr.michaelkurr.com/advisory/ai-digital-strategy/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial & Medical Operations Transformation",
                    description:
                      "Go-to-market and medical affairs operations redesign for efficiency and scale.",
                    url: "https://dr.michaelkurr.com/advisory/commercial-medical-operations/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Strategic Partnerships & Alliances",
                    description:
                      "Structuring, launching, and managing strategic cooperations and vendor ecosystems.",
                    url: "https://dr.michaelkurr.com/advisory/strategic-partnerships-alliances/",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Organizational Design & People Strategy",
                    description:
                      "Building high-performing global teams and designing organizations that scale.",
                    url: "https://dr.michaelkurr.com/advisory/organizational-design-people-strategy/",
                  },
                },
              ],
            },
          }),
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
                item: "https://dr.michaelkurr.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Advisory Services",
                item: "https://dr.michaelkurr.com/advisory/",
              },
            ],
          }),
        }}
      />

      {/* JSON-LD: FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What advisory services does Dr. Kurr offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dr. Kurr Advisory offers fractional C-level leadership (CCO, CTO, COO), corporate transformation advisory, global operating model design, AI and digital strategy for regulated industries, commercial and medical operations transformation, and organizational design and scaling — all focused on Pharma & Life Sciences.",
                },
              },
              {
                "@type": "Question",
                name: "What industries does Dr. Kurr Advisory serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dr. Kurr Advisory primarily serves Pharma & Biotech companies (large pharma, specialty pharma, emerging biotech), MedTech & Diagnostics organizations, Life Sciences Services companies (CROs, CDMOs, CCOs), and Healthcare Technology firms. Dr. Kurr has direct experience at Boehringer Ingelheim, Novartis, Roche Diagnostics, Daimler, and Schott.",
                },
              },
              {
                "@type": "Question",
                name: "What engagement models are available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dr. Kurr Advisory offers three engagement models: Fractional C-Level mandates (ongoing part-time executive leadership, typically 2-3 days per week), Transformation Sprints (focused 3-6 month engagements for specific challenges like operating model design or AI readiness), and Board & Strategic Advisory (periodic strategic counsel for boards, investors, and executive teams).",
                },
              },
            ],
          }),
        }}
      />

      {/* JSON-LD: HowTo — engagement process */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToEngageSchema),
        }}
      />

      {/* ── Top Nav ── */}
      <nav
        aria-label="Advisory page navigation"
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
              href="/transformation-circus/"
              title="The Transformation Circus"
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200"
            >
              Circus
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
                  Advisory
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            HERO
            ═══════════════════════════════════════════ */}
        <section className="relative pt-12 pb-20 lg:pb-28 bg-navy text-white overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/[0.04] blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="fade-in text-gold-light text-sm font-semibold tracking-[0.25em] uppercase mb-6">
                Dr. Kurr Advisory
              </p>
              <h1 className="fade-in font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.15]">
                Strategic Clarity.{" "}
                <span className="text-gold-light">Scalable Models.</span>{" "}
                Profitable Growth.
              </h1>
              <p className="fade-in text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                Fractional C-level leadership and transformation advisory for
                Pharma &amp; Life Sciences — from a leader who built one of the
                industry&rsquo;s leading service organizations from scratch.
              </p>
              <div className="fade-in flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center min-w-[220px] px-7 py-3 bg-gold-light text-navy font-semibold rounded hover:bg-gold transition-colors duration-200"
                >
                  Explore Services
                </a>
                <a
                  href="https://www.linkedin.com/in/michaelkurr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Connect with Dr. Michael Kurr on LinkedIn"
                  className="inline-flex items-center justify-center min-w-[220px] px-7 py-3 border border-white/30 text-white rounded hover:border-gold hover:text-gold transition-all duration-200"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WHY DR. KURR
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-offwhite">
          <div className="max-w-6xl mx-auto px-6">
            <div className="fade-in max-w-3xl mb-14">
              <span className="block text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Why Dr. Kurr
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
                Built From Experience, Not Theory
              </h2>
              <p className="text-lg text-charcoal leading-relaxed">
                Most advisors consult. I&rsquo;ve{" "}
                <strong>built and operated</strong> the organizations I now
                advise on. Every recommendation comes from having done it —
                at scale, under pressure, in regulated environments.
              </p>
            </div>

            <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-navy mb-2">
                  10x
                </p>
                <p className="text-sm text-charcoal">
                  Organization growth at Boehringer Ingelheim — built from zero
                  to full global scale
                </p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-navy mb-2">
                  20+
                </p>
                <p className="text-sm text-charcoal">
                  Years of corporate transformation across pharma, automotive,
                  and manufacturing
                </p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-navy mb-2">
                  #1
                </p>
                <p className="text-sm text-charcoal">
                  Content supply chain in the industry per external benchmarking
                  studies
                </p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-navy mb-2">
                  5
                </p>
                <p className="text-sm text-charcoal">
                  Major global organizations transformed — BI, Novartis, Roche,
                  Daimler, Schott
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ADVISORY SERVICES
            ═══════════════════════════════════════════ */}
        <section id="services" className="py-20 lg:py-28 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="fade-in text-center mb-14">
              <span className="block text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Advisory Services
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                Where I Can Help
              </h2>
              <p className="text-lg text-charcoal max-w-2xl mx-auto">
                Six areas where 20+ years of hands-on transformation experience
                translates directly into value for your organization.
              </p>
            </div>

            <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<BriefcaseIcon />}
                title="Fractional C-Level Leadership"
                slug="fractional-c-level-leadership"
                description="Part-time CCO, CTO, or COO for organizations that need senior executive bandwidth without the full-time commitment. Ideal for scale-ups, portfolio companies, and organizations in transition."
                offerings={[
                  "Fractional Chief Commercial Officer (CCO)",
                  "Fractional Chief Transformation Officer (CTO)",
                  "Fractional Chief Operating Officer (COO)",
                  "Interim leadership during executive transitions",
                  "C-suite coaching and executive sparring",
                ]}
              />
              <ServiceCard
                icon={<CogIcon />}
                title="Global Operating Model Design"
                slug="global-operating-model-design"
                description="Designing and implementing scalable operating models that balance centralization with local agility — including shared services, offshoring, and nearshoring strategies."
                offerings={[
                  "Insource vs. outsource strategy",
                  "Off- and nearshoring center design",
                  "Shared services center build-out",
                  "Vendor and partner ecosystem optimization",
                  "Stage-gate transition planning",
                ]}
              />
              <ServiceCard
                icon={<CpuIcon />}
                title="AI & Digital Strategy for Regulated Industries"
                slug="ai-digital-strategy"
                description="Practical AI adoption that works within pharma compliance frameworks. No hype — just AI that fits governed workflows, accelerates execution, and respects accountability."
                offerings={[
                  "AI readiness assessment and roadmap",
                  "Agentic AI strategy for commercial operations",
                  "MLR workflow optimization with AI",
                  "Content supply chain automation",
                  "Human-in-the-loop governance design",
                ]}
              />
              <ServiceCard
                icon={<TargetIcon />}
                title="Commercial & Medical Operations Transformation"
                slug="commercial-medical-operations"
                description="Redesigning go-to-market and medical affairs operations for efficiency, scale, and omnichannel engagement — the same approach that built an industry-leading service organization."
                offerings={[
                  "Go-to-market operating model redesign",
                  "Content factory and creative services build",
                  "Omnichannel engagement strategy",
                  "Medical affairs services optimization",
                  "Market access and value management",
                ]}
              />
              <ServiceCard
                icon={<LinkIcon />}
                title="Strategic Partnerships & Alliances"
                slug="strategic-partnerships-alliances"
                description="Structuring, launching, and managing strategic cooperations — from vendor partnerships to industry alliances. Based on published research and 20+ years of partnership management."
                offerings={[
                  "Strategic partner selection and due diligence",
                  "Partnership governance design",
                  "Vendor consolidation and optimization",
                  "Joint venture and alliance structuring",
                  "Partnership performance management",
                ]}
              />
              <ServiceCard
                icon={<UsersIcon />}
                title="Organizational Design & People Strategy"
                slug="organizational-design-people-strategy"
                description="Building high-performing global teams from the ground up. Designing organizations that attract talent, empower leaders, and scale without losing culture."
                offerings={[
                  "Organization design and restructuring",
                  "Global team build-out and scaling",
                  "Talent strategy for transformation programs",
                  "Change management and adoption",
                  "Leadership development and team coaching",
                ]}
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WHO THIS IS FOR — Industries
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-offwhite">
          <div className="max-w-6xl mx-auto px-6">
            <div className="fade-in text-center mb-14">
              <span className="block text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Industries Served
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                Who This Is For
              </h2>
              <p className="text-lg text-charcoal max-w-2xl mx-auto">
                Deep domain expertise across Pharma &amp; Life Sciences — with
                cross-industry perspective from automotive, diagnostics, and
                manufacturing.
              </p>
            </div>

            {/* Core: Pharma & Life Sciences */}
            <h3 className="fade-in font-heading text-xl font-semibold text-navy mb-4">
              Pharma &amp; Life Sciences
            </h3>
            <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <IndustryCard
                icon={<FlaskIcon />}
                title="Pharma & Biotech"
                slug="pharma-biotech"
                examples={[
                  "Large pharma transformations",
                  "Specialty pharma scale-up",
                  "Emerging biotech commercialization",
                  "Go-to-market redesign",
                ]}
              />
              <IndustryCard
                icon={<HeartPulseIcon />}
                title="MedTech & Diagnostics"
                slug="medtech-diagnostics"
                examples={[
                  "Commercial operations optimization",
                  "Digital health strategy",
                  "Device company scaling",
                  "Market access and reimbursement",
                ]}
              />
              <IndustryCard
                icon={<BuildingIcon />}
                title="Life Sciences Services"
                slug="life-sciences-services"
                examples={[
                  "CRO / CDMO optimization",
                  "Contract commercialization (CCO)",
                  "Service delivery transformation",
                  "Global capability build-out",
                ]}
              />
              <IndustryCard
                icon={<MonitorIcon />}
                title="HealthTech & Digital Health"
                slug="healthtech-digital-health"
                examples={[
                  "Enterprise AI adoption",
                  "Platform go-to-market strategy",
                  "Regulatory technology strategy",
                  "Health data analytics operations",
                ]}
              />
            </div>

            {/* Cross-Industry */}
            <h3 className="fade-in font-heading text-xl font-semibold text-navy mb-4">
              Cross-Industry
            </h3>
            <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <IndustryCard
                icon={<CarIcon />}
                title="Automotive & Mobility"
                slug="automotive-mobility"
                examples={[
                  "Operating model redesign",
                  "Supply chain cooperation management",
                  "Shared services & GBS design",
                  "Content & digital operations",
                ]}
              />
              <IndustryCard
                icon={<FactoryIcon />}
                title="Industrial Manufacturing"
                slug="industrial-manufacturing"
                examples={[
                  "Process-oriented reorganization",
                  "Complexity management",
                  "Industry 4.0 strategy",
                  "Strategic alliance advisory",
                ]}
              />
              <IndustryCard
                icon={<ShoppingCartIcon />}
                title="Consumer Goods (CPG)"
                slug="consumer-goods"
                examples={[
                  "Content supply chain design",
                  "Digital content factory setup",
                  "Omnichannel content strategy",
                  "Agency-to-in-house transition",
                ]}
              />
              <IndustryCard
                icon={<BankIcon />}
                title="Financial Services"
                slug="financial-services"
                examples={[
                  "GBS design & optimization",
                  "Operating model transformation",
                  "Process reengineering for compliance",
                  "Fintech partnership governance",
                ]}
              />
              <IndustryCard
                icon={<CodeIcon />}
                title="Technology & SaaS"
                slug="technology-saas"
                examples={[
                  "Fractional COO/CCO for scale-ups",
                  "Go-to-market operations design",
                  "Partnership & alliance strategy",
                  "Organizational design for scale",
                ]}
              />
              <IndustryCard
                icon={<ZapIcon />}
                title="Energy & Chemicals"
                slug="energy-chemicals"
                examples={[
                  "Energy transition transformation",
                  "Joint venture & alliance advisory",
                  "Shared services optimization",
                  "Change management at scale",
                ]}
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TYPICAL SCENARIOS
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="fade-in text-center mb-14">
              <span className="block text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                When to Engage
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                Typical Scenarios
              </h2>
              <p className="text-lg text-charcoal max-w-2xl mx-auto">
                Situations where a fractional executive or transformation
                advisor delivers outsized value.
              </p>
            </div>

            <div className="fade-in grid sm:grid-cols-2 gap-5">
              <div className="bg-offwhite rounded-xl border border-gray-200 p-6">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  &ldquo;We need to build a global services organization — but
                  we&rsquo;ve never done it.&rdquo;
                </h3>
                <p className="text-sm text-charcoal">
                  You need someone who has built one from scratch, scaled it
                  10x, and achieved full global coverage in 4 years. That&rsquo;s
                  what I did at Boehringer Ingelheim.
                </p>
              </div>
              <div className="bg-offwhite rounded-xl border border-gray-200 p-6">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  &ldquo;Our content supply chain is broken — we&rsquo;re slow,
                  expensive, and inconsistent.&rdquo;
                </h3>
                <p className="text-sm text-charcoal">
                  Content operations at scale require the right mix of people,
                  process, technology, and offshore leverage. I built what
                  external benchmarks called the #1 content supply chain in
                  pharma.
                </p>
              </div>
              <div className="bg-offwhite rounded-xl border border-gray-200 p-6">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  &ldquo;We want to adopt AI — but we&rsquo;re in a regulated
                  industry and don&rsquo;t know where to start.&rdquo;
                </h3>
                <p className="text-sm text-charcoal">
                  AI in pharma requires compliance-first thinking. I help
                  organizations find the practical use cases that deliver value
                  inside governed workflows — without the hype.
                </p>
              </div>
              <div className="bg-offwhite rounded-xl border border-gray-200 p-6">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  &ldquo;We have a great strategy — but our operating model
                  can&rsquo;t execute it.&rdquo;
                </h3>
                <p className="text-sm text-charcoal">
                  Structure follows process follows strategy. If your operating
                  model doesn&rsquo;t fit your strategy, you&rsquo;re burning
                  budget. I redesign models that actually work.
                </p>
              </div>
              <div className="bg-offwhite rounded-xl border border-gray-200 p-6">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  &ldquo;We&rsquo;re a biotech scaling to commercial — we need
                  C-level experience without a full-time hire.&rdquo;
                </h3>
                <p className="text-sm text-charcoal">
                  Fractional leadership gives you seasoned executive guidance
                  2-3 days per week — the strategic depth of a full-time hire at
                  a fraction of the cost. Currently serving as Fractional CCO at
                  Lemna Bio.
                </p>
              </div>
              <div className="bg-offwhite rounded-xl border border-gray-200 p-6">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  &ldquo;Our board needs a pharma-experienced advisor for
                  portfolio company oversight.&rdquo;
                </h3>
                <p className="text-sm text-charcoal">
                  As a Fellow at THENA Capital (UK MedTech investor), I provide
                  strategic counsel to boards and investors evaluating or
                  supporting pharma and MedTech companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ENGAGEMENT MODELS
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-navy text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="fade-in text-center mb-14">
              <span className="block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                How We Work Together
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Engagement Models
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Flexible formats designed around your needs — not mine.
              </p>
            </div>

            <div className="fade-in grid sm:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-2xl border border-white/10 p-8 text-center">
                <div className="flex justify-center mb-4" aria-hidden="true">
                  <BriefcaseIcon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  Fractional C-Level
                </h3>
                <p className="text-gold-light text-sm font-medium mb-4">
                  Ongoing &middot; 2-3 days/week
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Embedded executive leadership on a part-time basis. Board-level
                  presence, strategic ownership, and hands-on team guidance.
                  Ideal for scale-ups and organizations in transition.
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl border border-white/10 p-8 text-center">
                <div className="flex justify-center mb-4" aria-hidden="true">
                  <BoltIcon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  Transformation Sprint
                </h3>
                <p className="text-gold-light text-sm font-medium mb-4">
                  3-6 months &middot; Focused engagement
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Intensive advisory for a specific challenge: operating model
                  redesign, AI readiness, content factory build, or commercial
                  transformation. Defined scope, clear deliverables.
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl border border-white/10 p-8 text-center">
                <div className="flex justify-center mb-4" aria-hidden="true">
                  <LightbulbIcon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  Board &amp; Strategic Advisory
                </h3>
                <p className="text-gold-light text-sm font-medium mb-4">
                  Periodic &middot; As needed
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Strategic counsel for boards, investors, and executive teams.
                  Portfolio company oversight, due diligence support, and
                  transformation readiness assessment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CURRENT MANDATES
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-offwhite">
          <div className="max-w-6xl mx-auto px-6">
            <div className="fade-in text-center mb-14">
              <span className="block text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Current Roles
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                Active Mandates
              </h2>
            </div>

            <div className="fade-in grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-navy mb-1">
                  Lemna Bio
                </h3>
                <p className="text-gold-dark text-sm font-medium mb-3">
                  Fractional CCO &middot; Strategy &amp; Partnerships
                </p>
                <p className="text-sm text-charcoal leading-relaxed">
                  Computational drug design company in Lausanne developing
                  complex mini-protein therapeutics. Leading commercial strategy
                  and partnership development.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-navy mb-1">
                  THENA Capital
                </h3>
                <p className="text-gold-dark text-sm font-medium mb-3">
                  Fellow &middot; MedTech Investment
                </p>
                <p className="text-sm text-charcoal leading-relaxed">
                  UK-based specialist MedTech investor focused on early-stage
                  digital and device companies improving patient outcomes.
                  Providing strategic advisory to the portfolio.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-navy mb-1">
                  Dr. Kurr Advisory
                </h3>
                <p className="text-gold-dark text-sm font-medium mb-3">
                  Founder &middot; Independent Advisory
                </p>
                <p className="text-sm text-charcoal leading-relaxed">
                  Independent platform for fractional C-level and advisory
                  mandates in Pharma &amp; Life Sciences. Open for new
                  engagements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — visible accordion matching FAQPage schema */}
        <SubpageFAQ
          slug="advisory"
          title="Advisory Services"
          items={[
            {
              id: "what-advisory-services-does-dr-kurr-offer",
              question: "What advisory services does Dr. Kurr offer?",
              answer: "Dr. Kurr Advisory offers fractional C-level leadership (CCO, CTO, COO), corporate transformation advisory, global operating model design, AI and digital strategy for regulated industries, commercial and medical operations transformation, and organizational design and scaling — all focused on Pharma & Life Sciences.",
            },
            {
              id: "what-industries-does-dr-kurr-advisory-serve",
              question: "What industries does Dr. Kurr Advisory serve?",
              answer: "Dr. Kurr Advisory primarily serves Pharma & Biotech companies (large pharma, specialty pharma, emerging biotech), MedTech & Diagnostics organizations, Life Sciences Services companies (CROs, CDMOs, CCOs), and Healthcare Technology firms. Dr. Kurr has direct experience at Boehringer Ingelheim, Novartis, Roche Diagnostics, Daimler, and Schott.",
            },
            {
              id: "what-engagement-models-are-available",
              question: "What engagement models are available?",
              answer: "Dr. Kurr Advisory offers three engagement models: Fractional C-Level mandates (ongoing part-time executive leadership, typically 2-3 days per week), Transformation Sprints (focused 3-6 month engagements for specific challenges like operating model design or AI readiness), and Board & Strategic Advisory (periodic strategic counsel for boards, investors, and executive teams).",
            },
          ]}
        />

        {/* ═══════════════════════════════════════════
            CTA
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 bg-white text-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="fade-in max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
                Let&rsquo;s Talk
              </h2>
              <p className="text-lg text-charcoal mb-8 leading-relaxed">
                Looking for fractional C-level support, transformation advisory,
                or strategic counsel? I&rsquo;m always open to a conversation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a
                  href="https://www.linkedin.com/in/michaelkurr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Connect with Dr. Michael Kurr on LinkedIn"
                  className="px-8 py-3 bg-navy text-white font-semibold rounded hover:bg-navy-light transition-colors duration-200"
                >
                  Connect on LinkedIn
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                <a
                  href="/contact/"
                  title="Contact Dr. Michael Kurr"
                  className="inline-flex items-center gap-2 text-charcoal/70 hover:text-navy transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@michaelkurr.com
                </a>
                <a
                  href="tel:+4915205235286"
                  title="Call Dr. Michael Kurr"
                  className="inline-flex items-center gap-2 text-charcoal/70 hover:text-navy transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +49 1520 5235286
                </a>
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
            <Link href="/" title="Dr. Michael Kurr — Home" className="hover:text-white transition-colors px-2">
              Home
            </Link>
            <span className="text-white/20" aria-hidden="true">·</span>
            <Link href="/transformation-circus/" title="The Transformation Circus" className="hover:text-white transition-colors px-2">
              Transformation Circus
            </Link>
            <span className="text-white/20" aria-hidden="true">·</span>
            <a href="https://www.linkedin.com/in/michaelkurr/recent-activity/all/" title="Read Dr. Kurr's latest posts and articles on LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors px-2">
              Blog
            </a>
            <span className="text-white/20" aria-hidden="true">·</span>
            <Link href="/contact/" title="Get in touch with Dr. Michael Kurr" className="hover:text-white transition-colors px-2">
              Contact
            </Link>
            <span className="text-white/20" aria-hidden="true">·</span>
            <Link href="/imprint/" title="Imprint" className="hover:text-white transition-colors px-2">
              Imprint
            </Link>
            <span className="text-white/20" aria-hidden="true">·</span>
            <Link href="/privacy-policy/" title="Privacy Policy" className="hover:text-white transition-colors px-2">
              Privacy Policy
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
