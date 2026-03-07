import { Metadata } from "next";
import Link from "next/link";
import ScrollAnimations from "@/components/ScrollAnimations";
import SubpageFAQ from "@/components/SubpageFAQ";
import { makeProductSchema, makeNavigationSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title:
    "The Transformation Circus — Big Pharma, Smart Machines, Same Old Chaos | Dr. Michael Kurr",
  description:
    "Leading the Transformation Circus in the Age of AI. Dr. Michael Kurr shares 15+ years of lessons on pharma transformation — taming chaos monkeys, building smart ape teams, leveraging AI agents, and surviving the lion tamers of corporate executive sponsorship.",
  keywords: [
    "pharma transformation",
    "corporate transformation",
    "AI in pharma",
    "change management",
    "transformation leadership",
    "Dr. Michael Kurr",
    "Boehringer Ingelheim",
    "pharma go-to-market",
    "digital transformation pharma",
    "organizational change",
    "executive sponsorship",
    "AI agents enterprise",
    "chaos management",
    "ringmaster leadership",
    "transformation circus",
    "smart apes leadership",
    "content supply chain pharma",
    "pharmaceutical operations",
    "corporate change management",
    "Dr. Kurr Advisory",
  ],
  authors: [{ name: "Dr. Michael A. Kurr", url: "https://michaelkurr.com" }],
  creator: "Dr. Michael A. Kurr",
  publisher: "Dr. Kurr Advisory",
  alternates: {
    canonical: "https://michaelkurr.com/transformation-circus/",
  },
  openGraph: {
    title: "The Transformation Circus — Dr. Michael Kurr",
    description:
      "Big Pharma, Smart Machines, Same Old Chaos. Leading the Transformation Circus in the Age of AI. Lessons from 15+ years of pharma transformation.",
    type: "article",
    url: "https://michaelkurr.com/transformation-circus/",
    locale: "en_US",
    siteName: "Dr. Michael Kurr",
    publishedTime: "2026-03-01T00:00:00Z",
    modifiedTime: "2026-03-06T00:00:00Z",
    authors: ["Dr. Michael A. Kurr"],
    tags: [
      "pharma transformation",
      "AI in pharma",
      "corporate transformation",
      "change management",
      "leadership",
    ],
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Dr. Michael Kurr — The Transformation Circus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Transformation Circus — Dr. Michael Kurr",
    description:
      "Big Pharma, Smart Machines, Same Old Chaos. 15+ years of pharma transformation lessons.",
    images: [
      {
        url: "/images/profile.jpg",
        alt: "Dr. Michael Kurr — The Transformation Circus",
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

/* ─── Ringmaster callout box (blue tinted, matching PDF style) ─── */
function RingmasterBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="mt-10 rounded-xl border border-navy/10 bg-navy/[0.04] p-6 sm:p-8">
      <p className="font-heading text-lg font-bold italic text-navy mb-4">
        {title}
      </p>
      <div className="space-y-3 text-[1.05rem] leading-relaxed text-charcoal">
        {children}
      </div>
    </aside>
  );
}

/* ─── Slide section — mirrors PDF left-image / right-content layout ─── */
function SlideSection({
  id,
  imagePlaceholder,
  imageAlt,
  children,
  reverse = false,
  bgClass = "bg-white",
}: {
  id?: string;
  imagePlaceholder: string;
  imageAlt: string;
  children: React.ReactNode;
  reverse?: boolean;
  bgClass?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${bgClass} ${id ? "scroll-mt-20" : ""}`}
    >
      <div
        className={`max-w-6xl mx-auto px-6 flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-10 lg:gap-14 items-start`}
      >
        {/* Image area */}
        <div className="w-full lg:w-[38%] shrink-0">
          <div
            className="rounded-2xl overflow-hidden bg-gradient-to-br from-navy/5 to-navy/10 aspect-[4/3] flex items-center justify-center"
            role="img"
            aria-label={imageAlt}
          >
            <span className="text-6xl sm:text-7xl select-none" aria-hidden="true">
              {imagePlaceholder}
            </span>
          </div>
        </div>
        {/* Content area */}
        <div className="w-full lg:w-[62%] fade-in">{children}</div>
      </div>
    </section>
  );
}

/* ─── Bullet item with emoji (matching PDF colored bullets) ─── */
function Bullet({
  emoji,
  children,
}: {
  emoji: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-lg shrink-0 mt-0.5 select-none" aria-hidden="true">
        {emoji}
      </span>
      <div className="text-[1.05rem] leading-relaxed text-charcoal">
        {children}
      </div>
    </div>
  );
}

/* ─── Character card (compact, used for apes/monkeys/agents grid) ─── */
function CharacterCard({
  emoji,
  name,
  subtitle,
  traits,
  accent = "amber",
}: {
  emoji: string;
  name: string;
  subtitle?: string;
  traits: string[];
  accent?: "amber" | "red" | "sky" | "emerald";
}) {
  const borderMap = {
    amber: "border-amber-400/40",
    red: "border-red-400/40",
    sky: "border-sky-400/40",
    emerald: "border-emerald-400/40",
  };
  const bgMap = {
    amber: "bg-amber-50",
    red: "bg-red-50",
    sky: "bg-sky-50",
    emerald: "bg-emerald-50",
  };
  return (
    <div
      className={`rounded-xl border-2 ${borderMap[accent]} ${bgMap[accent]} p-5 transition-transform hover:-translate-y-1 duration-200`}
    >
      <p className="text-3xl mb-2" aria-hidden="true">
        {emoji}
      </p>
      <h3 className="font-heading text-base font-bold text-navy mb-1">
        {name}
      </h3>
      {subtitle && (
        <p className="text-xs text-charcoal/70 italic mb-2">{subtitle}</p>
      )}
      <ul className="space-y-0.5 text-sm text-charcoal list-disc list-inside">
        {traits.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Section divider ─── */
function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2" aria-hidden="true">
      <div className="w-20 h-px bg-gray-200" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function TransformationCircusPage() {
  return (
    <>
      {/* JSON-LD: Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeProductSchema("https://michaelkurr.com/transformation-circus/", 183)),
        }}
      />

      {/* JSON-LD: SiteNavigationElement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeNavigationSchema("https://michaelkurr.com/transformation-circus/", "The Transformation Circus")),
        }}
      />

      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id":
              "https://michaelkurr.com/transformation-circus/#article",
            headline:
              "Big Pharma, Smart Machines, Same Old Chaos: Leading the Transformation Circus in the Age of AI",
            author: {
              "@type": "Person",
              "@id": "https://michaelkurr.com/#person",
              name: "Dr. Michael A. Kurr",
              url: "https://michaelkurr.com",
              jobTitle: "Founder & Fractional C-Level Executive",
              image: "https://michaelkurr.com/images/profile.jpg",
            },
            publisher: {
              "@type": "Organization",
              name: "Dr. Kurr Advisory",
              url: "https://michaelkurr.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-06",
            description:
              "Lessons from 15+ years of leading pharma transformation — taming chaos, building teams, and integrating AI without losing your mind.",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://michaelkurr.com/transformation-circus/",
            },
            image: "https://michaelkurr.com/images/profile.jpg",
            keywords: [
              "pharma transformation",
              "AI in pharma",
              "corporate transformation",
              "change management",
              "leadership",
              "executive sponsorship",
              "organizational design",
            ],
            articleSection: "Pharma Transformation",
            wordCount: 8500,
            articleBody:
              "Leading the Transformation Circus in the Age of AI. Corporate transformation in pharma is a high-wire act \u2014 you are simultaneously redesigning processes, building global teams, integrating AI agents, managing chaos monkeys (the disruptors who emerge during change), and keeping executive sponsors engaged as lion tamers who protect your mandate. Dr. Michael Kurr shares lessons from 15+ years of leading pharma transformation at Boehringer Ingelheim and Novartis. Key insights: structure follows process follows strategy; AI scales execution but your operating model decides what gets scaled; build the right team of smart apes \u2014 trusted, strategic, adaptable, collaborative; without executive sponsorship you are just an appetizer; and a billion-dollar business case means nothing without ownership.",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "[data-speakable]"],
            },
            inLanguage: "en",
            isPartOf: {
              "@id": "https://michaelkurr.com/#website",
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
                name: "Home",
                item: "https://michaelkurr.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "The Transformation Circus",
                item: "https://michaelkurr.com/transformation-circus/",
              },
            ],
          }),
        }}
      />

      {/* JSON-LD: FAQ for key questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the Transformation Circus?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Transformation Circus is a framework by Dr. Michael Kurr that uses the circus metaphor to explain corporate pharma transformation. It features Smart Apes (your success team), Chaos Monkeys (disruptors), AI Agents (new performers), Lion Tamers (executive sponsors), and the Ringmaster (transformation leader) — all navigating change in the age of AI.",
                },
              },
              {
                "@type": "Question",
                name: "How does AI fit into pharma transformation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AI agents accelerate execution — they route tasks, analyze data, draft content, and flag compliance issues. But they don't replace leadership. In pharma's highly regulated environment, AI must operate inside governed workflows, and accountability cannot be delegated to algorithms. Your operating model decides what gets scaled.",
                },
              },
              {
                "@type": "Question",
                name: "What are the key takeaways for leading corporate transformation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Six key takeaways: (1) AI won't tame the monkeys — manage disruption early, (2) Without executive sponsorship you're just an appetizer, (3) A billion-dollar business case means nothing without ownership, (4) Corporate transformation takes years — pace the change, (5) AI scales execution but your operating model decides what gets scaled, (6) Build the right team — trusted, strategic, adaptable, collaborative.",
                },
              },
            ],
          }),
        }}
      />

      {/* ── Top Nav ── */}
      <nav
        aria-label="Transformation Circus page navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            title="Dr. Michael Kurr — Home"
            className="font-heading text-xl font-bold text-navy tracking-wider"
          >
            MK
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/#about"
              title="About Dr. Michael Kurr"
              className="text-sm font-medium text-charcoal hover:text-navy transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/advisory/"
              title="Advisory Services"
              className="text-sm font-medium text-charcoal hover:text-navy transition-colors duration-200"
            >
              Advisory
            </Link>
            <Link
              href="/contact/"
              title="Get in touch with Dr. Michael Kurr"
              className="text-sm font-medium px-5 py-2 border border-navy text-navy rounded hover:bg-navy hover:text-white transition-all duration-200"
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
                  The Transformation Circus
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            SLIDE 1: HERO / TITLE
            ═══════════════════════════════════════════ */}
        <SlideSection
          imagePlaceholder="&#127914;"
          imageAlt="Ringmaster Dr. Michael Kurr in front of a colorful circus tent — The Transformation Circus"
        >
          <p className="text-navy/80 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            A Talk by Dr. Michael A. Kurr
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-[1.15]">
            Big Pharma, Smart Machines,{" "}
            <span className="italic">Same Old Chaos:</span>
          </h1>
          <p className="font-heading text-xl sm:text-2xl lg:text-3xl italic text-charcoal mb-6">
            Leading the Transformation Circus in the Age of AI
          </p>
          <p className="text-charcoal text-base mb-2">
            Your Ringmaster:{" "}
            <a href="/#about" className="text-navy font-bold hover:text-teal transition-colors underline underline-offset-2">Dr. Michael A. Kurr</a>, Chief
            Circus Officer
          </p>
          <p className="text-sm text-charcoal/80 mb-8">
            (Taming the Transformation Circus since 15+ Years.)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
            <a
              href="#showtime"
              className="px-6 py-3 bg-navy text-white font-semibold rounded hover:bg-navy-light transition-colors duration-200 text-center"
            >
              Enter the Ring
            </a>
            <a
              href="#takeaways"
              className="px-6 py-3 border border-navy/30 text-navy rounded hover:border-navy hover:bg-navy/5 transition-all duration-200 text-center"
            >
              Jump to Takeaways
            </a>
          </div>
          <p className="text-xs text-charcoal/80 italic mt-6">
            The views expressed are solely my own. All examples provided are
            purely hypothetical.
          </p>
        </SlideSection>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            SLIDE 2: WELCOME / SHOWTIME
            ═══════════════════════════════════════════ */}
        <SlideSection
          id="showtime"
          imagePlaceholder="&#127911;"
          imageAlt="Circus tent with performers, lions, and a captivated audience — It's Showtime"
          bgClass="bg-offwhite"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold italic text-navy mb-4">
            Welcome to the Transformation Circus — It&rsquo;s Showtime!
          </h2>
          <p className="text-charcoal text-lg mb-8">
            <strong>Pharma transformation</strong> is a full-blown circus. Where{" "}
            <strong>Primates</strong> swing, <strong>Lions</strong> prowl, and
            change is the main act.
          </p>

          <div className="space-y-4 mb-8">
            <Bullet emoji="&#127902;">
              <p>
                Step right up to witness the transformation act.{" "}
                <strong>No safety nets.</strong> No rehearsals. Just{" "}
                <strong>pure organizational evolution in action</strong>.
              </p>
            </Bullet>
          </div>

          <RingmasterBox title="RINGMASTER's Starting Point:">
            <Bullet emoji="&#129300;">
              <p>
                Pharma transformation isn&rsquo;t just about strategy &mdash;
                it&rsquo;s about <strong>managing chaos</strong>.
              </p>
            </Bullet>
            <Bullet emoji="&#9989;">
              <p>
                You can have the best business case and execution plan, but if
                you can&rsquo;t <strong>tame the Circus</strong>, you&rsquo;re
                doomed.
              </p>
            </Bullet>
            <Bullet emoji="&#128170;">
              <p>
                Learn what is needed to{" "}
                <strong>become a Ringmaster</strong> yourself &mdash; without
                losing your mind!
              </p>
            </Bullet>
          </RingmasterBox>
        </SlideSection>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            SLIDE 3: THE RINGMASTER
            ═══════════════════════════════════════════ */}
        <SlideSection
          imagePlaceholder="&#129464;"
          imageAlt="The Ringmaster in a white top hat commanding the circus stage — Master of Chaos"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold italic text-navy mb-3">
            The Ringmaster &mdash; Master of Chaos, Keeper of Sanity
          </h2>
          <p className="text-charcoal text-lg italic mb-8">
            You don&rsquo;t just wave a baton &mdash; you hold the tent up while
            everyone else sets it on fire.
          </p>

          <div className="space-y-5">
            <Bullet emoji="&#127919;">
              <p>
                <strong>Managing the Performers (i.e. the Smart Apes)</strong>
                <br />
                <span className="text-charcoal/80">
                  Your success team requires direction, motivation, and
                  occasional treats.
                </span>
              </p>
            </Bullet>
            <Bullet emoji="&#128168;">
              <p>
                <strong>Keeping Chaos Monkeys in Check</strong>
                <br />
                <span className="text-charcoal/80">
                  A little chaos creates energy. Too much? That&rsquo;s
                  career-ending.
                </span>
              </p>
            </Bullet>
            <Bullet emoji="&#128293;">
              <p>
                <strong>Not Getting Eaten by Lions</strong>
                <br />
                <span className="text-charcoal/80">
                  Senior executives respect confidence. Keep them fed with
                  progress reports.
                </span>
              </p>
            </Bullet>
            <Bullet emoji="&#128079;">
              <p>
                <strong>Winning Over the Audience</strong>
                <br />
                <span className="text-charcoal/80">
                  Stakeholders want entertainment and results. Deliver both,
                  consistently.
                </span>
              </p>
            </Bullet>
          </div>

          <RingmasterBox title="RINGMASTER's Job Description:">
            <Bullet emoji="&#127913;">
              <p>
                Every circus has a <strong>Ringmaster</strong>. And in
                transformation? That&rsquo;s <strong>YOU</strong>.
              </p>
            </Bullet>
            <Bullet emoji="&#129309;">
              <p>
                The one{" "}
                <strong>keeping the whole act together</strong>&hellip; or at
                least trying to.
              </p>
            </Bullet>
            <Bullet emoji="&#128073;">
              <p>
                But even the Ringmaster can&rsquo;t do it alone&hellip;
                let&rsquo;s <strong>meet the team</strong>!
              </p>
            </Bullet>
          </RingmasterBox>
        </SlideSection>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            SLIDE 4: THE SMART APES
            ═══════════════════════════════════════════ */}
        <section className="py-16 lg:py-24 bg-offwhite">
          <div className="max-w-6xl mx-auto px-6">
            <div className="fade-in mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold italic text-navy mb-3">
                Meet the Smart Apes &mdash; The Ones You Need to Lead the
                Transformation Circus
              </h2>
              <p className="text-charcoal text-lg">
                These Apes? They enable transformation. They are strategic,
                skilled, reliable. They drive, build, navigate, influence, and
                deliver.
              </p>
            </div>

            <div className="fade-in grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
              <CharacterCard
                emoji="&#129424;"
                name="Navigator Chimpanzee"
                traits={[
                  "Strategically minded",
                  "Sees the road ahead",
                  "Anticipates problems",
                ]}
                accent="amber"
              />
              <CharacterCard
                emoji="&#129447;"
                name="Engineer Orangutan"
                traits={[
                  "Master of design",
                  "Solves problems quietly",
                  "Builds scalable solutions",
                ]}
                accent="amber"
              />
              <CharacterCard
                emoji="&#9889;"
                name="Fixer Gibbon"
                traits={[
                  "Agile navigator",
                  "Cuts through bureaucracy",
                  "Gets sh*t done",
                ]}
                accent="amber"
              />
              <CharacterCard
                emoji="&#129445;"
                name="Performer Bonobo"
                traits={[
                  "Socially brilliant",
                  "Builds bridges",
                  "Rallies the crowd",
                ]}
                accent="amber"
              />
            </div>

            <div className="fade-in">
              <RingmasterBox title="RINGMASTER's Guiding Principles for the Success Team:">
                <Bullet emoji="&#127942;">
                  <p>
                    Transformation is a <strong>team sport</strong> &mdash; you
                    need the right performers in the ring.
                  </p>
                </Bullet>
                <Bullet emoji="&#129309;">
                  <p>
                    Make sure that your{" "}
                    <strong>team is trusted</strong>, strategic, adaptable and
                    collaborative &mdash; the smarter the cast, the{" "}
                    <strong>less banana drama</strong>.
                  </p>
                </Bullet>
                <Bullet emoji="&#128683;">
                  <p>
                    <strong>Avoid members</strong> that are distracting,
                    unpredictable, selfish and loud{" "}
                    <strong>without value</strong>.
                  </p>
                </Bullet>
              </RingmasterBox>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            SLIDE 5: AI AGENTS
            ═══════════════════════════════════════════ */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="fade-in mb-4">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold italic text-navy mb-3">
                Meet the New Performers: The AI Agents &mdash; they execute,
                they don&rsquo;t own the show
              </h2>
              <p className="text-charcoal text-lg mb-10">
                AI accelerates execution. It does not replace leadership &mdash;
                and it cannot compensate for its absence.
              </p>
            </div>

            <div className="fade-in grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
              <CharacterCard
                emoji="&#9881;&#65039;"
                name="Workflow Orchestrator"
                subtitle={`"Automation Engine"`}
                traits={[
                  "Routes tasks",
                  "Triggers actions",
                  "Reduces manual labor",
                  "Scales processing",
                ]}
                accent="sky"
              />
              <CharacterCard
                emoji="&#128200;"
                name="Insight Analyst"
                subtitle={`"Pattern Finder"`}
                traits={[
                  "Analyzes large data",
                  "Detects anomalies",
                  "Accelerates forecasts",
                  "Models scenarios",
                ]}
                accent="sky"
              />
              <CharacterCard
                emoji="&#128221;"
                name="Content Co-Pilot"
                subtitle={`"Drafting Machine"`}
                traits={[
                  "Drafts all content",
                  "Summarizes texts",
                  "Structures decks",
                  "Speeds documentation",
                ]}
                accent="sky"
              />
              <CharacterCard
                emoji="&#128737;"
                name="Compliance Sentinel"
                subtitle={`"Risk Scanner"`}
                traits={[
                  "Flags inconsistencies",
                  "Checks policies",
                  "Monitors data flows",
                  "Supports auditability",
                ]}
                accent="sky"
              />
            </div>

            <div className="fade-in">
              <RingmasterBox title="RINGMASTER's Agentic Watch-outs:">
                <Bullet emoji="&#128149;">
                  <p>
                    Easy to <strong>fall in love</strong> with &mdash; especially
                    when your organization <strong>feels slow</strong>.
                  </p>
                </Bullet>
                <Bullet emoji="&#128171;">
                  <p>
                    Tireless <strong>execution</strong> &mdash; they amplify
                    speed and scale.
                  </p>
                </Bullet>
                <Bullet emoji="&#9888;&#65039;">
                  <p>
                    <strong>BUT</strong>: no accountability, no political
                    capital,{" "}
                    <strong>no ownership of outcomes</strong> &mdash; they
                    execute, they don&rsquo;t sponsor.
                  </p>
                </Bullet>
              </RingmasterBox>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            SLIDE 6: CHAOS MONKEYS
            ═══════════════════════════════════════════ */}
        <section className="py-16 lg:py-24 bg-offwhite">
          <div className="max-w-6xl mx-auto px-6">
            <div className="fade-in mb-4">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold italic text-navy mb-3">
                Meet the Chaos Monkeys &mdash; The Trouble You Didn&rsquo;t Ask
                For
              </h2>
              <p className="text-charcoal text-lg mb-10">
                They don&rsquo;t just make transformation interesting&hellip;
                they turn it into a live improv act &mdash; without a script,
                without rehearsal, and always on your budget.
              </p>
            </div>

            <div className="fade-in grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
              <CharacterCard
                emoji="&#128680;"
                name="Silo Mandrill"
                traits={[
                  "Guards territory fiercely",
                  "Resists collaboration like it's a contagious disease",
                ]}
                accent="red"
              />
              <CharacterCard
                emoji="&#128584;"
                name="Denial Langur"
                traits={[
                  "No need to change",
                  "Clings to comfort zones with great determination",
                ]}
                accent="red"
              />
              <CharacterCard
                emoji="&#128054;"
                name="Mischievous Chimp"
                traits={[
                  "Energetic & impulsive",
                  "Starts everything, finishes nothing",
                  "Fun but disruptive",
                ]}
                accent="red"
              />
              <CharacterCard
                emoji="&#128227;"
                name="Juggling Howler"
                traits={[
                  "Multitasks everything, prioritizes nothing",
                  "Makes noise instead of progress",
                ]}
                accent="red"
              />
            </div>

            <div className="fade-in">
              <RingmasterBox title="RINGMASTER's Guiding Principles to Manage the Chaos Monkeys:">
                <Bullet emoji="&#128308;">
                  <p>
                    If you don&rsquo;t manage them,{" "}
                    <strong>
                      they&rsquo;ll run the circus and will redesign your
                      strategy
                    </strong>{" "}
                    in ways you did not approve.
                  </p>
                </Bullet>
                <Bullet emoji="&#128065;">
                  <p>
                    <strong>Spot them early</strong>, control their influence,
                    contain the damage.
                  </p>
                </Bullet>
                <Bullet emoji="&#128165;">
                  <p>
                    Let them near the levers, and you&rsquo;re in for a{" "}
                    <strong>flaming cannonball finale</strong>.
                  </p>
                </Bullet>
                <Bullet emoji="&#129302;">
                  <p>
                    &hellip;and <strong>adding AI</strong> won&rsquo;t eliminate
                    the chaos&hellip; it will just create{" "}
                    <strong>hyperproductive monkeys at scale</strong>.
                  </p>
                </Bullet>
              </RingmasterBox>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            SLIDE 7: LION TAMER
            ═══════════════════════════════════════════ */}
        <SlideSection
          imagePlaceholder="&#129409;"
          imageAlt="The Lion Tamer — a senior executive in a top hat standing confidently beside a lion"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold italic text-navy mb-3">
            The Lion Tamer (Senior Executive Sponsor)
          </h2>
          <p className="text-charcoal text-lg italic mb-8">
            They don&rsquo;t play by the same rules. But without them, you
            won&rsquo;t survive.
          </p>

          <div className="space-y-5 mb-8">
            <Bullet emoji="&#128737;">
              <p>
                <strong>Air Cover &amp; Political Protection</strong>
                <br />
                <span className="text-charcoal/80">
                  Your shield against organizational crossfire. They deflect
                  attacks that would otherwise derail you.
                </span>
              </p>
            </Bullet>
            <Bullet emoji="&#128081;">
              <p>
                <strong>Above the Primate Hierarchy</strong>
                <br />
                <span className="text-charcoal/80">
                  Not bound by tribal politics. They speak a language the Board
                  understands.
                </span>
              </p>
            </Bullet>
            <Bullet emoji="&#127919;">
              <p>
                <strong>Strategic Alignment</strong>
                <br />
                <span className="text-charcoal/80">
                  They keep the C-suite focused on your transformation&rsquo;s
                  value. No alignment, no success. They set the tone from the
                  top &mdash; and their voice makes or breaks your story.
                </span>
              </p>
            </Bullet>
          </div>

          <RingmasterBox title="RINGMASTER's Rules:">
            <Bullet emoji="&#128308;">
              <p>
                <strong>Without</strong> executive sponsorship,{" "}
                <strong>don&rsquo;t even step into the ring.</strong>
              </p>
            </Bullet>
            <Bullet emoji="&#129409;">
              <p>
                Lion Tamers keep the <strong>predators at bay</strong> while you
                manage the circus.
              </p>
            </Bullet>
            <Bullet emoji="&#128073;">
              <p>
                They <strong>don&rsquo;t do</strong> transformation &mdash; but
                they <strong>decide if you do</strong>.
              </p>
            </Bullet>
            <Bullet emoji="&#9888;&#65039;">
              <p>
                If they&rsquo;re not taming lions&hellip; the{" "}
                <strong>lions are taming you</strong>.
              </p>
            </Bullet>
          </RingmasterBox>
        </SlideSection>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            SLIDE 8: AI IN A REGULATED TENT
            ═══════════════════════════════════════════ */}
        <SlideSection
          imagePlaceholder="&#9878;&#65039;"
          imageAlt="AI in a highly regulated pharma tent — robots and compliance officers on stage"
          reverse
          bgClass="bg-offwhite"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold italic text-navy mb-3">
            AI in a Highly Regulated Tent
          </h2>
          <p className="text-charcoal text-lg italic mb-8">
            In pharma, the Regulator &mdash; and MLR &mdash; are the invisible
            lions in the ring.
          </p>

          <div className="space-y-5 mb-8">
            <Bullet emoji="&#128994;">
              <p>
                <strong>Speed &ne; Approval</strong>
                <br />
                <span className="text-charcoal/80">
                  Move fast if you like &mdash; MLR cycles don&rsquo;t disappear
                  because drafts got smarter.
                </span>
              </p>
            </Bullet>
            <Bullet emoji="&#128308;">
              <p>
                <strong>Automation &ne; Compliance</strong>
                <br />
                <span className="text-charcoal/80">
                  Just because a robot did it doesn&rsquo;t mean it&rsquo;s
                  approval-ready.
                </span>
              </p>
            </Bullet>
            <Bullet emoji="&#129302;">
              <p>
                <strong>AI must operate inside governed workflows</strong>
                <br />
                <span className="text-charcoal/80">
                  No sandbox magic &mdash; the tent has walls, and auditors know
                  where they are.
                </span>
              </p>
            </Bullet>
            <Bullet emoji="&#9997;&#65039;">
              <p>
                <strong>
                  Accountability can&rsquo;t be delegated to algorithms
                </strong>
                <br />
                <span className="text-charcoal/80">
                  When things go wrong, no one invites the algorithm to the
                  hearing.
                </span>
              </p>
            </Bullet>
          </div>

          <RingmasterBox title="RINGMASTER's Guardrails:">
            <Bullet emoji="&#9989;">
              <p>
                You can <strong>scale execution</strong>.
              </p>
            </Bullet>
            <Bullet emoji="&#10060;">
              <p>
                You <strong>can&rsquo;t outsource accountability</strong>.
              </p>
            </Bullet>
            <Bullet emoji="&#129302;">
              <p>
                The <strong>AI</strong> can draft.
              </p>
            </Bullet>
            <Bullet emoji="&#9997;&#65039;">
              <p>
                A <strong>human</strong> must decide &mdash;{" "}
                <strong>and sign their name</strong>.
              </p>
            </Bullet>
          </RingmasterBox>
        </SlideSection>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            CASE STUDIES
            ═══════════════════════════════════════════ */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="fade-in font-heading text-3xl sm:text-4xl font-bold italic text-navy mb-14 text-center">
              From the Ring: Case Studies
            </h2>

            <div className="space-y-20">
              {/* ── Case 1 (slide 9 + 10) ── */}
              <div className="fade-in">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
                  <div className="w-full lg:w-[38%] shrink-0">
                    <div
                      className="rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 aspect-[4/3] flex items-center justify-center"
                      role="img"
                      aria-label="Case 1: Ringmaster balancing on a tightrope with lions below"
                    >
                      <span
                        className="text-6xl sm:text-7xl select-none"
                        aria-hidden="true"
                      >
                        &#129409;&#128176;
                      </span>
                    </div>
                  </div>
                  <div className="w-full lg:w-[62%]">
                    <p className="text-navy/80 text-sm font-semibold tracking-[0.15em] uppercase mb-2">
                      Case 1
                    </p>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold italic text-navy mb-2">
                      The Billion-Dollar No-Brainer (That Nobody Wanted)
                    </h3>
                    <p className="text-charcoal text-lg italic mb-6">
                      A global transformation of MICE presented a clear
                      opportunity for 10-15% cost savings across &gt;$1B in
                      annual spend.
                    </p>

                    <div className="space-y-4 mb-6">
                      <Bullet emoji="&#128203;">
                        <p>
                          <strong>Demand Management</strong> &mdash; Optimizing
                          participation, strategic meeting objectives and
                          insights creation.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#128230;">
                        <p>
                          <strong>Logistics &amp; Procurement</strong> &mdash;
                          Centralizing sourcing and vendor management for better
                          rates.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#128220;">
                        <p>
                          <strong>Compliance &amp; Transparency</strong> &mdash;
                          Streamlined reporting and improved regulatory
                          compliance.
                        </p>
                      </Bullet>
                    </div>

                    <p className="text-charcoal text-[1.05rem] mb-6">
                      Even a perfect business case means nothing if nobody
                      actually wants it.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-offwhite rounded-lg border border-gray-200 p-5">
                        <p className="font-heading font-semibold text-navy mb-1">
                          &#10060; No stakeholder alignment?
                        </p>
                        <p className="text-sm text-charcoal">
                          Without key players on your side, your transformation
                          is dead before it starts.
                        </p>
                      </div>
                      <div className="bg-offwhite rounded-lg border border-gray-200 p-5">
                        <p className="font-heading font-semibold text-navy mb-1">
                          &#10060; No real business pain?
                        </p>
                        <p className="text-sm text-charcoal">
                          Leaders won&rsquo;t champion change unless it solves
                          their actual problems.
                        </p>
                      </div>
                      <div className="bg-offwhite rounded-lg border border-gray-200 p-5 sm:col-span-2">
                        <p className="font-heading font-semibold text-navy mb-1">
                          &#10060; No strong sponsor?
                        </p>
                        <p className="text-sm text-charcoal">
                          Your brilliant plan becomes just another meal for the
                          lions.
                        </p>
                      </div>
                    </div>

                    <RingmasterBox title="RINGMASTER's Missing Smart Apes:">
                      <Bullet emoji="&#129424;">
                        <p>
                          The <strong>Chimpanzee</strong> (Navigator): No one
                          really guiding the strategic alignment with the
                          business needs.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#129409;">
                        <p>
                          The <strong>Lion Tamer</strong> (Executive Sponsor): No
                          air-cover &mdash; hence the fiery escalation to HQ.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#129302;">
                        <p>
                          &hellip;and{" "}
                          <strong>AI would not have changed a thing</strong>.
                        </p>
                      </Bullet>
                    </RingmasterBox>
                  </div>
                </div>
              </div>

              {/* ── Case 2: Before ── */}
              <div className="fade-in">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
                  <div className="w-full lg:w-[38%] shrink-0">
                    <div
                      className="rounded-2xl overflow-hidden bg-gradient-to-br from-red-50 to-red-100 aspect-[4/3] flex items-center justify-center"
                      role="img"
                      aria-label="Case 2 Before: Chaotic circus scene with performers in disorder"
                    >
                      <span
                        className="text-6xl sm:text-7xl select-none"
                        aria-hidden="true"
                      >
                        &#127914;&#128165;
                      </span>
                    </div>
                  </div>
                  <div className="w-full lg:w-[62%]">
                    <p className="text-navy/80 text-sm font-semibold tracking-[0.15em] uppercase mb-2">
                      Case 2 &mdash; Before
                    </p>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold italic text-navy mb-2">
                      The Circus Act in Unscalable Disorder
                    </h3>
                    <p className="text-charcoal text-lg italic mb-6">
                      Market Access and Value Management was a high-wire act
                      without a safety net.
                    </p>

                    <div className="space-y-4 mb-6">
                      <Bullet emoji="&#128203;">
                        <p>
                          <strong>Mostly Outsourced</strong> &mdash; Significant
                          dependence on external agencies and consultants.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#128176;">
                        <p>
                          <strong>Excessive Spend</strong> &mdash; Premium rates
                          for specialized expertise we couldn&rsquo;t access
                          internally.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#128218;">
                        <p>
                          <strong>
                            Little centralized and proprietary Knowledge
                          </strong>{" "}
                          &mdash; Lack of institutional memory and shared
                          learnings across markets.
                        </p>
                      </Bullet>
                    </div>

                    <RingmasterBox title="RINGMASTER's Observations:">
                      <Bullet emoji="&#128054;">
                        <p>
                          The <strong>Mischievous Chimps</strong>: Early-stage
                          skeptics and noisy stakeholders, tamed through clarity
                          and transparency.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#9989;">
                        <p>
                          However, when the <strong>right Apes</strong> run the
                          tent, the <strong>Monkeys</strong> (and the{" "}
                          <strong>Lions</strong>){" "}
                          <strong>take their seats</strong>.
                        </p>
                      </Bullet>
                    </RingmasterBox>
                  </div>
                </div>
              </div>

              {/* ── Case 2: After ── */}
              <div className="fade-in">
                <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-14 items-start">
                  <div className="w-full lg:w-[38%] shrink-0">
                    <div
                      className="rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100 aspect-[4/3] flex items-center justify-center"
                      role="img"
                      aria-label="Case 2 After: Organized circus with performers in harmony under spotlight"
                    >
                      <span
                        className="text-6xl sm:text-7xl select-none"
                        aria-hidden="true"
                      >
                        &#127914;&#10024;
                      </span>
                    </div>
                  </div>
                  <div className="w-full lg:w-[62%]">
                    <p className="text-navy/80 text-sm font-semibold tracking-[0.15em] uppercase mb-2">
                      Case 2 &mdash; After
                    </p>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold italic text-navy mb-2">
                      The Circus Act That Actually Worked
                    </h3>
                    <p className="text-charcoal text-lg italic mb-6">
                      Instead of renting performers, we built our own
                      world-class show.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-4">
                        <span className="shrink-0 w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center mt-0.5">
                          1
                        </span>
                        <p className="text-[1.05rem] text-charcoal">
                          <strong>
                            Insourced Market Access and Value Management
                            Activities
                          </strong>
                          <br />
                          <span className="text-charcoal/80">
                            We built internal expertise instead of relying on
                            expensive vendors.
                          </span>
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="shrink-0 w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center mt-0.5">
                          2
                        </span>
                        <p className="text-[1.05rem] text-charcoal">
                          <strong>
                            Strategic Off- and Nearshoring incl. Last Mile
                            Optimization
                          </strong>
                          <br />
                          <span className="text-charcoal/80">
                            Heavy lifting went to India, white-glove service
                            moved to Dublin.
                          </span>
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="shrink-0 w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center mt-0.5">
                          3
                        </span>
                        <p className="text-[1.05rem] text-charcoal">
                          <strong>
                            Phased Transition with clear Stage-Gates
                          </strong>
                          <br />
                          <span className="text-charcoal/80">
                            Careful capability-building ensured sustainable
                            transformation.
                          </span>
                        </p>
                      </div>
                    </div>

                    <RingmasterBox title="RINGMASTER's Smart Apes (Your Transformation Heroes):">
                      <Bullet emoji="&#129447;">
                        <p>
                          The <strong>Orangutan</strong> (Engineer): Offshore
                          teams in India quietly building expert-level Market
                          Access capabilities.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#129445;">
                        <p>
                          The <strong>Bonobo</strong> (Performer): Europe hub
                          managing executive-facing interactions with polish and
                          empathy.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#129302;">
                        <p>
                          &hellip;and now <strong>AI</strong> is amplifying what
                          the <strong>operating model</strong> already enables.
                        </p>
                      </Bullet>
                    </RingmasterBox>
                  </div>
                </div>
              </div>

              {/* ── Case 3: Before ── */}
              <div className="fade-in">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
                  <div className="w-full lg:w-[38%] shrink-0">
                    <div
                      className="rounded-2xl overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 aspect-[4/3] flex items-center justify-center"
                      role="img"
                      aria-label="Case 3 Before: Travelling chaotic circus with monkeys and disarray"
                    >
                      <span
                        className="text-6xl sm:text-7xl select-none"
                        aria-hidden="true"
                      >
                        &#128054;&#127914;
                      </span>
                    </div>
                  </div>
                  <div className="w-full lg:w-[62%]">
                    <p className="text-navy/80 text-sm font-semibold tracking-[0.15em] uppercase mb-2">
                      Case 3 &mdash; Before
                    </p>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold italic text-navy mb-2">
                      The Travelling Chaos Circus
                    </h3>
                    <p className="text-charcoal text-lg italic mb-6">
                      A fast-growing product portfolio required the ComOps
                      function to step up, but the given setup wasn&rsquo;t
                      allowing them to.
                    </p>

                    <div className="space-y-4 mb-6">
                      <Bullet emoji="&#127916;">
                        <p>
                          <strong>Solo Acts Everywhere</strong> &mdash; Every
                          local team operated differently with no consistency,
                          competing with region.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#129312;">
                        <p>
                          <strong>Dropping the Ball</strong> &mdash; Too many
                          people juggled the same tasks with unpredictable
                          results.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#128176;">
                        <p>
                          <strong>Wasting Budget</strong> &mdash; Lack of spend
                          transparency for overlapping tasks and deliverables.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#128533;">
                        <p>
                          <strong>Confused Stakeholders</strong> &mdash; The
                          audience struggled to see the big picture, making
                          decision making hard.
                        </p>
                      </Bullet>
                    </div>

                    <RingmasterBox title="RINGMASTER's Chaos Monkeys:">
                      <Bullet emoji="&#128227;">
                        <p>
                          The <strong>Juggling Howlers</strong>: Too many
                          regional and local ComOps teams juggling overlapping
                          tasks.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#128680;">
                        <p>
                          The <strong>Silo Mandrills</strong>: Every country
                          doing its own thing &mdash; resisting centralization
                          and transparency.
                        </p>
                      </Bullet>
                    </RingmasterBox>
                  </div>
                </div>
              </div>

              {/* ── Case 3: After ── */}
              <div className="fade-in">
                <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-14 items-start">
                  <div className="w-full lg:w-[38%] shrink-0">
                    <div
                      className="rounded-2xl overflow-hidden bg-gradient-to-br from-sky-50 to-sky-100 aspect-[4/3] flex items-center justify-center"
                      role="img"
                      aria-label="Case 3 After: Cirque du Soleil-style performance with synchronized artists"
                    >
                      <span
                        className="text-6xl sm:text-7xl select-none"
                        aria-hidden="true"
                      >
                        &#10024;&#129464;
                      </span>
                    </div>
                  </div>
                  <div className="w-full lg:w-[62%]">
                    <p className="text-navy/80 text-sm font-semibold tracking-[0.15em] uppercase mb-2">
                      Case 3 &mdash; After
                    </p>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold italic text-navy mb-2">
                      The Cirque du Soleil Glow-Up
                    </h3>
                    <p className="text-charcoal text-lg italic mb-6">
                      A world-class transformation where every act is in perfect
                      sync. Even the Chaos Monkeys stopped throwing bananas for
                      a moment.
                    </p>

                    <div className="space-y-4 mb-6">
                      <Bullet emoji="&#128202;">
                        <p>
                          <strong>
                            Centralized analytics, forecasting, and brand
                            insights
                          </strong>
                          <br />
                          <span className="text-charcoal/80">
                            Everyone reading from the same script. No
                            improvisation, just precision.
                          </span>
                        </p>
                      </Bullet>
                      <Bullet emoji="&#128205;">
                        <p>
                          <strong>Last-mile execution kept local</strong>
                          <br />
                          <span className="text-charcoal/80">
                            Standardized where needed, flexible where required.
                            Perfect balance.
                          </span>
                        </p>
                      </Bullet>
                      <Bullet emoji="&#128736;">
                        <p>
                          <strong>Structured, scalable system</strong>
                          <br />
                          <span className="text-charcoal/80">
                            Built infrastructure to support our rapidly expanding
                            product portfolio.
                          </span>
                        </p>
                      </Bullet>
                      <Bullet emoji="&#128161;">
                        <p>
                          <strong>Unified Insights</strong>
                          <br />
                          <span className="text-charcoal/80">
                            Eliminated competing data sources with coordinated
                            insights creation.
                          </span>
                        </p>
                      </Bullet>
                    </div>

                    <RingmasterBox title="RINGMASTER's Smart Apes:">
                      <Bullet emoji="&#129424;">
                        <p>
                          The <strong>Chimpanzee</strong> (Navigator): Designed
                          the model and roadmap.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#129447;">
                        <p>
                          The <strong>Orangutan</strong> (Engineer): Delivered
                          scalable, centralized capability.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#9889;">
                        <p>
                          The <strong>Gibbon</strong> (Fixer): Enabling local
                          markets handling last-mile delivery.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#129409;">
                        <p>
                          The <strong>Lion Tamer</strong>: Executive sponsors
                          aligned across functions and levels.
                        </p>
                      </Bullet>
                      <Bullet emoji="&#129302;">
                        <p>
                          &hellip;and now <strong>AI</strong> is amplifying what
                          the <strong>operating model</strong> already enables.
                        </p>
                      </Bullet>
                    </RingmasterBox>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            SLIDE 15: 6 TAKEAWAYS
            ═══════════════════════════════════════════ */}
        <section
          id="takeaways"
          className="py-16 lg:py-24 bg-offwhite scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
              {/* Image */}
              <div className="w-full lg:w-[38%] shrink-0">
                <div
                  className="rounded-2xl overflow-hidden bg-gradient-to-br from-navy/5 to-navy/10 aspect-[4/3] flex items-center justify-center"
                  role="img"
                  aria-label="Two ringmasters shaking hands under golden circus lights"
                >
                  <span
                    className="text-6xl sm:text-7xl select-none"
                    aria-hidden="true"
                  >
                    &#129309;&#127914;
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="w-full lg:w-[62%] fade-in">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold italic text-navy mb-3">
                  6 Takeaways to Survive (and Love) the Circus
                </h2>
                <p className="text-charcoal mb-10">
                  How to lead the show &mdash; without getting mauled in Act I,
                  and still building a bigger tent.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  <div>
                    <Bullet emoji="&#128293;">
                      <div>
                        <p className="font-heading font-bold text-navy mb-1">
                          AI won&rsquo;t tame the monkeys. You still have to.
                        </p>
                        <p className="text-sm text-charcoal/80">
                          Manage disruption early before chaos takes centre
                          stage &mdash; or they&rsquo;ll turn your strategy into
                          a banana stand.
                        </p>
                      </div>
                    </Bullet>
                  </div>
                  <div>
                    <Bullet emoji="&#129409;">
                      <div>
                        <p className="font-heading font-bold text-navy mb-1">
                          Without a Lion Tamer, you&rsquo;re just an appetizer
                        </p>
                        <p className="text-sm text-charcoal/80">
                          Executive sponsorship is not an option, it is survival.
                        </p>
                      </div>
                    </Bullet>
                  </div>
                  <div>
                    <Bullet emoji="&#128176;">
                      <div>
                        <p className="font-heading font-bold text-navy mb-1">
                          A billion-dollar business case means nothing if nobody
                          owns it
                        </p>
                        <p className="text-sm text-charcoal/80">
                          Sell the problem first, then offer your solution.
                        </p>
                      </div>
                    </Bullet>
                  </div>
                  <div>
                    <Bullet emoji="&#9203;">
                      <div>
                        <p className="font-heading font-bold text-navy mb-1">
                          Corporate transformation takes time &mdash; usually
                          years
                        </p>
                        <p className="text-sm text-charcoal/80">
                          No one masters the trapeze on Day 1. Pace the change.
                        </p>
                      </div>
                    </Bullet>
                  </div>
                </div>

                {/* Highlighted AI box — matching PDF bottom box */}
                <div className="rounded-xl bg-navy p-6 text-white">
                  <Bullet emoji="&#129302;">
                    <div>
                      <p className="font-heading font-bold text-lg mb-1">
                        AI scales execution.
                      </p>
                      <p className="text-white/90">
                        Your <strong>operating model</strong> decides{" "}
                        <strong>what</strong> gets scaled. Get the model right
                        first.
                      </p>
                    </div>
                  </Bullet>
                  <div className="mt-4 pt-4 border-t border-white/15">
                    <Bullet emoji="&#129424;">
                      <p className="text-white/80">
                        <strong className="text-white">
                          Build the right team &mdash; the Smart Apes.
                        </strong>{" "}
                        Trusted, strategic, adaptable, collaborative. The
                        smarter the cast, the less banana drama.
                      </p>
                    </Bullet>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            SLIDE 16: CLOSING CTA
            ═══════════════════════════════════════════ */}
        <section className="py-16 lg:py-24 bg-white text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="fade-in font-heading text-3xl sm:text-4xl font-bold italic text-navy mb-4">
              Until the Next Greatest Show.
            </h2>
            <p className="fade-in text-charcoal text-lg mb-8">
              Want to discuss pharma transformation, AI strategy, or taming your
              own circus? Let&rsquo;s connect.
            </p>
            <div className="fade-in flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto">
              <a
                href="https://www.linkedin.com/in/michaelkurr/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Dr. Michael Kurr on LinkedIn"
                className="flex-1 px-8 py-3 bg-navy text-white font-semibold rounded hover:bg-navy-light transition-colors duration-200 text-center"
              >
                Connect on LinkedIn
              </a>
              <Link
                href="/contact/"
                className="flex-1 px-8 py-3 border border-navy text-navy font-semibold rounded hover:bg-navy hover:text-white transition-all duration-200 text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ — visible accordion matching FAQPage schema */}
        <SubpageFAQ
          slug="transformation-circus"
          title="The Transformation Circus"
          items={[
            {
              id: "what-is-the-transformation-circus",
              question: "What is the Transformation Circus?",
              answer: "The Transformation Circus is a framework by Dr. Michael Kurr that uses the circus metaphor to explain corporate pharma transformation. It features Smart Apes (your success team), Chaos Monkeys (disruptors), AI Agents (new performers), Lion Tamers (executive sponsors), and the Ringmaster (transformation leader) — all navigating change in the age of AI.",
            },
            {
              id: "how-does-ai-fit-into-pharma-transformation",
              question: "How does AI fit into pharma transformation?",
              answer: "AI agents accelerate execution — they route tasks, analyze data, draft content, and flag compliance issues. But they don't replace leadership. In pharma's highly regulated environment, AI must operate inside governed workflows, and accountability cannot be delegated to algorithms. Your operating model decides what gets scaled.",
            },
            {
              id: "key-takeaways-corporate-transformation",
              question: "What are the key takeaways for leading corporate transformation?",
              answer: "Six key takeaways: (1) AI won't tame the monkeys — manage disruption early, (2) Without executive sponsorship you're just an appetizer, (3) A billion-dollar business case means nothing without ownership, (4) Corporate transformation takes years — pace the change, (5) AI scales execution but your operating model decides what gets scaled, (6) Build the right team — trusted, strategic, adaptable, collaborative.",
            },
          ]}
        />

        {/* Disclaimer */}
        <div className="py-4 bg-gray-100 text-center">
          <p className="text-xs text-charcoal max-w-6xl mx-auto px-6">
            &copy; 2026 Dr. Kurr Advisory. All rights reserved. The views
            expressed are solely those of Dr. Michael A. Kurr. All examples
            provided are purely hypothetical. Some ideas were inspired by GenAI.
            Something weird? Blame the robot.
          </p>
        </div>
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
            <Link href="/advisory/" title="Advisory Services" className="hover:text-white transition-colors px-2">
              Advisory
            </Link>
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
