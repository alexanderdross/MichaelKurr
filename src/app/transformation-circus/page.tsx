import { Metadata } from "next";
import Link from "next/link";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title:
    "The Transformation Circus — Leading Pharma Transformation in the Age of AI | Dr. Michael Kurr",
  description:
    "Big Pharma, Smart Machines, Same Old Chaos. Dr. Michael Kurr shares lessons on leading corporate transformation in pharma — taming chaos monkeys, smart apes, AI agents, and lion tamers.",
  alternates: {
    canonical: "https://michaelkurr.com/transformation-circus/",
  },
  openGraph: {
    title: "The Transformation Circus — Dr. Michael Kurr",
    description:
      "Leading the Transformation Circus in the Age of AI. Lessons from 15+ years of pharma transformation.",
    type: "article",
    url: "https://michaelkurr.com/transformation-circus/",
  },
  robots: { index: true, follow: true },
};

/* ─── tiny helper ─── */
function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-4" aria-hidden="true">
      <span className="text-2xl tracking-[1em] text-amber-400/60 select-none">
        * * *
      </span>
    </div>
  );
}

/* ─── Ringmaster Box (the blue callout used in the PDF) ─── */
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
      <div className="space-y-3 text-[1.05rem] leading-relaxed text-charcoal/85">
        {children}
      </div>
    </aside>
  );
}

/* ─── Character card (Apes / Monkeys / AI Agents) ─── */
function CharacterCard({
  emoji,
  name,
  traits,
  accent = "amber",
}: {
  emoji: string;
  name: string;
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
      className={`rounded-xl border-2 ${borderMap[accent]} ${bgMap[accent]} p-5 sm:p-6 transition-transform hover:-translate-y-1 duration-200`}
    >
      <p className="text-3xl mb-2" aria-hidden="true">
        {emoji}
      </p>
      <h3 className="font-heading text-lg font-bold text-navy mb-3">
        {name}
      </h3>
      <ul className="space-y-1 text-sm text-charcoal/75 list-disc list-inside">
        {traits.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Case Study section ─── */
function CaseStudy({
  number,
  title,
  subtitle,
  intro,
  items,
  ringmasterTitle,
  ringmasterContent,
}: {
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  items: { label: string; text: string }[];
  ringmasterTitle: string;
  ringmasterContent: React.ReactNode;
}) {
  return (
    <div className="fade-in">
      <p className="text-amber-500 text-sm font-semibold tracking-[0.15em] uppercase mb-2">
        {number}
      </p>
      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-2">
        {title}
      </h3>
      <p className="text-lg text-charcoal/80 italic mb-8">{subtitle}</p>
      <p className="text-[1.05rem] leading-relaxed text-charcoal/80 mb-8">
        {intro}
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-lg border border-gray-200 p-5"
          >
            <p className="font-heading font-semibold text-navy mb-1">{item.label}</p>
            <p className="text-sm text-charcoal/80">{item.text}</p>
          </div>
        ))}
      </div>
      <RingmasterBox title={ringmasterTitle}>{ringmasterContent}</RingmasterBox>
    </div>
  );
}

/* ─── Takeaway card ─── */
function TakeawayCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <h3 className="font-heading text-base font-bold text-navy mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-charcoal/80 leading-relaxed">{text}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function TransformationCircusPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Big Pharma, Smart Machines, Same Old Chaos: Leading the Transformation Circus in the Age of AI",
            author: {
              "@type": "Person",
              name: "Dr. Michael A. Kurr",
              url: "https://michaelkurr.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Dr. Kurr Advisory",
            },
            datePublished: "2026-03-01",
            description:
              "Lessons from 15+ years of leading pharma transformation — taming chaos, building teams, and integrating AI without losing your mind.",
          }),
        }}
      />

      {/* ── Top Nav ── */}
      <nav
        aria-label="Transformation Circus page navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-[#1a1225]/95 backdrop-blur-md shadow-lg py-3"
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
              className="text-sm font-medium text-white/80 hover:text-amber-400 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/#contact"
              title="Get in touch with Dr. Michael Kurr"
              className="text-sm font-medium px-5 py-2 border border-amber-400 text-amber-400 rounded hover:bg-amber-400 hover:text-[#1a1225] transition-all duration-200"
            >
              Connect
            </Link>
          </div>
        </div>
      </nav>

      <main id="main-content">
        {/* ── Breadcrumb ── */}
        <div className="pt-20 bg-[#1a1225]">
          <div className="max-w-6xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="py-3">
              <ol className="flex items-center gap-2 text-sm text-white/80">
                <li>
                  <Link
                    href="/"
                    title="Home"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">
                  /
                </li>
                <li aria-current="page" className="text-amber-400 font-medium">
                  The Transformation Circus
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            HERO
            ═══════════════════════════════════════════ */}
        <section className="relative pt-12 pb-20 lg:pb-28 bg-[#1a1225] text-white overflow-hidden">
          {/* Decorative gradient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-amber-500/[0.06] blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <p className="fade-in text-amber-400 text-sm font-semibold tracking-[0.25em] uppercase mb-6">
              A Talk by Dr. Michael A. Kurr
            </p>
            <h1 className="fade-in font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.15]">
              Big Pharma, Smart Machines,{" "}
              <span className="text-amber-400">Same Old Chaos</span>
            </h1>
            <p className="fade-in font-heading text-xl sm:text-2xl lg:text-3xl italic text-white/80 mb-8">
              Leading the Transformation Circus in the Age of AI
            </p>
            <p className="fade-in text-white/80 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Your Ringmaster:{" "}
              <strong className="text-white/90">
                Dr. Michael A. Kurr
              </strong>
              , Chief Circus Officer
              <br />
              <span className="text-sm">
                Taming the Transformation Circus since 15+ years.
              </span>
            </p>
            <div className="fade-in flex flex-wrap justify-center gap-4">
              <a
                href="#showtime"
                className="px-6 py-3 bg-amber-500 text-[#1a1225] font-semibold rounded hover:bg-amber-400 transition-colors duration-200"
              >
                Enter the Ring
              </a>
              <a
                href="#takeaways"
                className="px-6 py-3 border border-white/30 text-white/80 rounded hover:border-amber-400 hover:text-amber-400 transition-all duration-200"
              >
                Jump to Takeaways
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SHOWTIME — Welcome
            ═══════════════════════════════════════════ */}
        <section
          id="showtime"
          className="py-20 lg:py-28 bg-offwhite scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="fade-in font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Welcome to the Transformation Circus &mdash; It&rsquo;s Showtime!
            </h2>
            <p className="fade-in text-lg text-charcoal/80 italic mb-10">
              Pharma transformation is a full-blown circus. Where Primates
              swing, Lions prowl, and change is the main act.
            </p>
            <div className="fade-in space-y-5 text-[1.05rem] leading-relaxed text-charcoal/80">
              <p>
                Step right up to witness the transformation act.{" "}
                <strong>No safety nets.</strong> No rehearsals. Just{" "}
                <strong>pure organizational evolution in action</strong>.
              </p>
            </div>

            <RingmasterBox title="Ringmaster's Starting Point:">
              <p>
                Pharma transformation isn&rsquo;t just about strategy &mdash;
                it&rsquo;s about <strong>managing chaos</strong>.
              </p>
              <p>
                You can have the best business case and execution plan, but if
                you can&rsquo;t <strong>tame the Circus</strong>, you&rsquo;re
                doomed.
              </p>
              <p>
                Learn what is needed to{" "}
                <strong>become a Ringmaster</strong> yourself &mdash; without
                losing your mind!
              </p>
            </RingmasterBox>
          </div>
        </section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            THE RINGMASTER
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="fade-in font-heading text-3xl sm:text-4xl font-bold text-navy mb-3">
              The Ringmaster &mdash; Master of Chaos, Keeper of Sanity
            </h2>
            <p className="fade-in text-lg text-charcoal/80 italic mb-10">
              You don&rsquo;t just wave a baton &mdash; you hold the tent up
              while everyone else sets it on fire.
            </p>

            <div className="fade-in grid sm:grid-cols-2 gap-5">
              <div className="bg-offwhite rounded-lg p-5 border border-gray-200">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  Managing the Performers (i.e. the Smart Apes)
                </h3>
                <p className="text-sm text-charcoal/80">
                  Your success team requires direction, motivation, and
                  occasional treats.
                </p>
              </div>
              <div className="bg-offwhite rounded-lg p-5 border border-gray-200">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  Keeping Chaos Monkeys in Check
                </h3>
                <p className="text-sm text-charcoal/80">
                  A little chaos creates energy. Too much? That&rsquo;s
                  career-ending.
                </p>
              </div>
              <div className="bg-offwhite rounded-lg p-5 border border-gray-200">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  Not Getting Eaten by Lions
                </h3>
                <p className="text-sm text-charcoal/80">
                  Senior executives respect confidence. Keep them fed with
                  progress reports.
                </p>
              </div>
              <div className="bg-offwhite rounded-lg p-5 border border-gray-200">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  Winning Over the Audience
                </h3>
                <p className="text-sm text-charcoal/80">
                  Stakeholders want entertainment and results. Deliver both,
                  consistently.
                </p>
              </div>
            </div>

            <RingmasterBox title="Ringmaster's Job Description:">
              <p>
                Every circus has a <strong>Ringmaster</strong>. And in
                transformation? That&rsquo;s <strong>YOU</strong>.
              </p>
              <p>
                The one{" "}
                <strong>keeping the whole act together</strong>&hellip; or at
                least trying to.
              </p>
              <p>
                But even the Ringmaster can&rsquo;t do it alone&hellip;
                let&rsquo;s <strong>meet the team</strong>!
              </p>
            </RingmasterBox>
          </div>
        </section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            THE SMART APES
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-offwhite">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="fade-in font-heading text-3xl sm:text-4xl font-bold text-navy mb-3">
              Meet the Smart Apes
            </h2>
            <p className="fade-in text-lg text-charcoal/80 mb-4">
              The Ones You Need to Lead the Transformation Circus
            </p>
            <p className="fade-in text-[1.05rem] text-charcoal/80 mb-10">
              These Apes? They enable transformation. They are strategic,
              skilled, reliable. They drive, build, navigate, influence, and
              deliver.
            </p>

            <div className="fade-in grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
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
                  "Gets things done",
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

            <RingmasterBox title="Ringmaster's Guiding Principles for the Success Team:">
              <p>
                Transformation is a <strong>team sport</strong> &mdash; you need
                the right performers in the ring.
              </p>
              <p>
                Make sure that your{" "}
                <strong>team is trusted</strong>, strategic, adaptable and
                collaborative &mdash; the smarter the cast, the{" "}
                <strong>less banana drama</strong>.
              </p>
              <p>
                <strong>Avoid members</strong> that are distracting,
                unpredictable, selfish and loud{" "}
                <strong>without value</strong>.
              </p>
            </RingmasterBox>
          </div>
        </section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            AI AGENTS
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="fade-in font-heading text-3xl sm:text-4xl font-bold text-navy mb-3">
              Meet the New Performers: The AI Agents
            </h2>
            <p className="fade-in text-lg text-charcoal/80 italic mb-10">
              They execute, they don&rsquo;t own the show.
            </p>

            <div className="fade-in grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              <CharacterCard
                emoji="&#9881;&#65039;"
                name="Workflow Orchestrator"
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
                traits={[
                  "Flags inconsistencies",
                  "Checks policies",
                  "Monitors data flows",
                  "Supports auditability",
                ]}
                accent="sky"
              />
            </div>

            <RingmasterBox title="Ringmaster's Agentic Watch-outs:">
              <p>
                Easy to <strong>fall in love</strong> with &mdash; especially
                when your organization <strong>feels slow</strong>.
              </p>
              <p>
                Tireless <strong>execution</strong> &mdash; they amplify speed
                and scale.
              </p>
              <p>
                <strong>BUT</strong>: no accountability, no political capital,{" "}
                <strong>no ownership of outcomes</strong> &mdash; they execute,
                they don&rsquo;t sponsor.
              </p>
            </RingmasterBox>
          </div>
        </section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            CHAOS MONKEYS
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-offwhite">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="fade-in font-heading text-3xl sm:text-4xl font-bold text-navy mb-3">
              Meet the Chaos Monkeys
            </h2>
            <p className="fade-in text-lg text-charcoal/80 mb-4">
              The Trouble You Didn&rsquo;t Ask For
            </p>
            <p className="fade-in text-[1.05rem] text-charcoal/80 mb-10">
              They don&rsquo;t just make transformation interesting&hellip; they
              turn it into a live improv act &mdash; without a script, without
              rehearsal, and always on your budget.
            </p>

            <div className="fade-in grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              <CharacterCard
                emoji="&#128680;"
                name="Silo Mandrill"
                traits={[
                  "Guards territory fiercely",
                  "Resists collaboration like it's contagious",
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

            <RingmasterBox title="Ringmaster's Guiding Principles to Manage the Chaos Monkeys:">
              <p>
                If you don&rsquo;t manage them,{" "}
                <strong>
                  they&rsquo;ll run the circus and will redesign your strategy
                </strong>{" "}
                in ways you did not approve.
              </p>
              <p>
                <strong>Spot them early</strong>, control their influence,
                contain the damage.
              </p>
              <p>
                Let them near the levers, and you&rsquo;re in for a{" "}
                <strong>flaming cannonball finale</strong>.
              </p>
              <p>
                &hellip;and <strong>adding AI</strong> won&rsquo;t eliminate the
                chaos&hellip; it will just create{" "}
                <strong>hyperproductive monkeys at scale</strong>.
              </p>
            </RingmasterBox>
          </div>
        </section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            LION TAMER
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="fade-in font-heading text-3xl sm:text-4xl font-bold text-navy mb-3">
              The Lion Tamer (Senior Executive Sponsor)
            </h2>
            <p className="fade-in text-lg text-charcoal/80 italic mb-10">
              They don&rsquo;t play by the same rules. But without them, you
              won&rsquo;t survive.
            </p>

            <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="bg-offwhite rounded-lg p-6 border border-gray-200">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  Air Cover &amp; Political Protection
                </h3>
                <p className="text-sm text-charcoal/80">
                  Your shield against organizational crossfire. They deflect
                  attacks that would otherwise derail you.
                </p>
              </div>
              <div className="bg-offwhite rounded-lg p-6 border border-gray-200">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  Above the Primate Hierarchy
                </h3>
                <p className="text-sm text-charcoal/80">
                  Not bound by tribal politics. They speak a language the Board
                  understands.
                </p>
              </div>
              <div className="bg-offwhite rounded-lg p-6 border border-gray-200 sm:col-span-2 lg:col-span-1">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  Strategic Alignment
                </h3>
                <p className="text-sm text-charcoal/80">
                  They keep the C-suite focused on your transformation&rsquo;s
                  value. No alignment, no success. They set the tone from the
                  top &mdash; and their voice makes or breaks your story.
                </p>
              </div>
            </div>

            <RingmasterBox title="Ringmaster's Rules:">
              <p>
                <strong>Without</strong> executive sponsorship,{" "}
                <strong>don&rsquo;t even step into the ring.</strong>
              </p>
              <p>
                Lion Tamers keep the <strong>predators at bay</strong> while you
                manage the circus.
              </p>
              <p>
                They <strong>don&rsquo;t do</strong> transformation &mdash; but
                they <strong>decide if you do</strong>.
              </p>
              <p>
                If they&rsquo;re not taming lions&hellip; the{" "}
                <strong>lions are taming you</strong>.
              </p>
            </RingmasterBox>
          </div>
        </section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            AI IN A REGULATED TENT
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-offwhite">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="fade-in font-heading text-3xl sm:text-4xl font-bold text-navy mb-3">
              AI in a Highly Regulated Tent
            </h2>
            <p className="fade-in text-lg text-charcoal/80 italic mb-10">
              In pharma, the Regulator &mdash; and MLR &mdash; are the invisible
              lions in the ring.
            </p>

            <div className="fade-in grid sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  Speed &ne; Approval
                </h3>
                <p className="text-sm text-charcoal/80">
                  Move fast if you like &mdash; MLR cycles don&rsquo;t
                  disappear because drafts got smarter.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  Automation &ne; Compliance
                </h3>
                <p className="text-sm text-charcoal/80">
                  Just because a robot did it doesn&rsquo;t mean it&rsquo;s
                  approval-ready.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  AI must operate inside governed workflows
                </h3>
                <p className="text-sm text-charcoal/80">
                  No sandbox magic &mdash; the tent has walls, and auditors know
                  where they are.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-heading font-semibold text-navy mb-2">
                  Accountability can&rsquo;t be delegated to algorithms
                </h3>
                <p className="text-sm text-charcoal/80">
                  When things go wrong, no one invites the algorithm to the
                  hearing.
                </p>
              </div>
            </div>

            <RingmasterBox title="Ringmaster's Guardrails:">
              <p>
                You can <strong>scale execution</strong>.
              </p>
              <p>
                You <strong>can&rsquo;t outsource accountability</strong>.
              </p>
              <p>
                The <strong>AI</strong> can draft. A <strong>human</strong> must
                decide &mdash; <strong>and sign their name</strong>.
              </p>
            </RingmasterBox>
          </div>
        </section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            CASE STUDIES
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="fade-in font-heading text-3xl sm:text-4xl font-bold text-navy mb-12 text-center">
              From the Ring: Case Studies
            </h2>

            <div className="space-y-20">
              {/* Case 1 */}
              <CaseStudy
                number="Case 1"
                title="The Billion-Dollar No-Brainer (That Nobody Wanted)"
                subtitle="A global transformation of MICE presented a clear opportunity for 10-15% cost savings across >$1B in annual spend."
                intro="Even a perfect business case means nothing if nobody actually wants it."
                items={[
                  {
                    label: "Demand Management",
                    text: "Optimizing participation, strategic meeting objectives and insights creation.",
                  },
                  {
                    label: "Logistics & Procurement",
                    text: "Centralizing sourcing and vendor management for better rates.",
                  },
                  {
                    label: "Compliance & Transparency",
                    text: "Streamlined reporting and improved regulatory compliance.",
                  },
                  {
                    label: "No stakeholder alignment?",
                    text: "Without key players on your side, your transformation is dead before it starts.",
                  },
                ]}
                ringmasterTitle="Ringmaster's Missing Smart Apes:"
                ringmasterContent={
                  <>
                    <p>
                      Without buy-in, any case is worthless. Align the{" "}
                      <strong>Lions</strong> first.
                    </p>
                    <p>
                      The <strong>Chimpanzee</strong> (Navigator): No one really
                      guiding the strategic alignment with the business needs.
                    </p>
                    <p>
                      The <strong>Lion Tamer</strong> (Executive Sponsor): No
                      air-cover &mdash; hence the fiery escalation to HQ.
                    </p>
                    <p>
                      &hellip;and <strong>AI would not have changed a thing</strong>.
                    </p>
                  </>
                }
              />

              {/* Case 2 Before */}
              <CaseStudy
                number="Case 2 &mdash; Before"
                title="The Circus Act in Unscalable Disorder"
                subtitle="Market Access and Value Management was a high-wire act without a safety net."
                intro="Significant dependence on external agencies, excessive spend, and little centralized knowledge across markets."
                items={[
                  {
                    label: "Mostly Outsourced",
                    text: "Significant dependence on external agencies and consultants.",
                  },
                  {
                    label: "Excessive Spend",
                    text: "Premium rates for specialized expertise we couldn't access internally.",
                  },
                  {
                    label: "Little Centralized Knowledge",
                    text: "Lack of institutional memory and shared learnings across markets.",
                  },
                  {
                    label: "Mischievous Chimps",
                    text: "Early-stage skeptics and noisy stakeholders, tamed through clarity and transparency.",
                  },
                ]}
                ringmasterTitle="Ringmaster's Observations:"
                ringmasterContent={
                  <p>
                    However, when the <strong>right Apes</strong> run the tent,
                    the <strong>Monkeys</strong> (and the{" "}
                    <strong>Lions</strong>) <strong>take their seats</strong>.
                  </p>
                }
              />

              {/* Case 2 After */}
              <CaseStudy
                number="Case 2 &mdash; After"
                title="The Circus Act That Actually Worked"
                subtitle="Instead of renting performers, we built our own world-class show."
                intro="We insourced capabilities, deployed strategic off- and nearshoring, and executed a phased transition with clear stage-gates."
                items={[
                  {
                    label: "Insourced Market Access Activities",
                    text: "We built internal expertise instead of relying on expensive vendors.",
                  },
                  {
                    label: "Strategic Off- and Nearshoring",
                    text: "Heavy lifting went to India, white-glove service moved to Dublin.",
                  },
                  {
                    label: "Phased Transition",
                    text: "Careful capability-building with clear stage-gates ensured sustainable transformation.",
                  },
                  {
                    label: "AI Amplification",
                    text: "Now AI is amplifying what the operating model already enables.",
                  },
                ]}
                ringmasterTitle="Ringmaster's Smart Apes:"
                ringmasterContent={
                  <>
                    <p>
                      The <strong>Orangutan</strong> (Engineer): Offshore teams
                      in India quietly building expert-level Market Access
                      capabilities.
                    </p>
                    <p>
                      The <strong>Bonobo</strong> (Performer): Europe hub
                      managing executive-facing interactions with polish and
                      empathy.
                    </p>
                  </>
                }
              />

              {/* Case 3 Before */}
              <CaseStudy
                number="Case 3 &mdash; Before"
                title="The Travelling Chaos Circus"
                subtitle="A fast-growing product portfolio required the ComOps function to step up, but the given setup wasn't allowing them to."
                intro="Solo acts everywhere, too many people juggling the same tasks with unpredictable results, lack of spend transparency, and confused stakeholders."
                items={[
                  {
                    label: "Solo Acts Everywhere",
                    text: "Every local team operated differently with no consistency, competing with region.",
                  },
                  {
                    label: "Dropping the Ball",
                    text: "Too many people juggled the same tasks with unpredictable results.",
                  },
                  {
                    label: "Wasting Budget",
                    text: "Lack of spend transparency for overlapping tasks and deliverables.",
                  },
                  {
                    label: "Confused Stakeholders",
                    text: "The audience struggled to see the big picture, making decision making hard.",
                  },
                ]}
                ringmasterTitle="Ringmaster's Chaos Monkeys:"
                ringmasterContent={
                  <>
                    <p>
                      The <strong>Juggling Howlers</strong>: Too many regional
                      and local ComOps teams juggling overlapping tasks.
                    </p>
                    <p>
                      The <strong>Silo Mandrills</strong>: Every country doing
                      its own thing &mdash; resisting centralization and
                      transparency.
                    </p>
                  </>
                }
              />

              {/* Case 3 After */}
              <CaseStudy
                number="Case 3 &mdash; After"
                title="The Cirque du Soleil Glow-Up"
                subtitle="A world-class transformation where every act is in perfect sync. Even the Chaos Monkeys stopped throwing bananas for a moment."
                intro="We centralized analytics, kept last-mile execution local, and built a structured, scalable system with unified insights."
                items={[
                  {
                    label: "Centralized Analytics & Insights",
                    text: "Everyone reading from the same script. No improvisation, just precision.",
                  },
                  {
                    label: "Last-Mile Execution Kept Local",
                    text: "Standardized where needed, flexible where required. Perfect balance.",
                  },
                  {
                    label: "Structured, Scalable System",
                    text: "Built infrastructure to support our rapidly expanding product portfolio.",
                  },
                  {
                    label: "Unified Insights",
                    text: "Eliminated competing data sources with coordinated insights creation.",
                  },
                ]}
                ringmasterTitle="Ringmaster's Smart Apes:"
                ringmasterContent={
                  <>
                    <p>
                      The <strong>Chimpanzee</strong> (Navigator): Designed the
                      model and roadmap.
                    </p>
                    <p>
                      The <strong>Orangutan</strong> (Engineer): Delivered
                      scalable, centralized capability.
                    </p>
                    <p>
                      The <strong>Gibbon</strong> (Fixer): Enabling local
                      markets handling last-mile delivery.
                    </p>
                    <p>
                      The <strong>Lion Tamer</strong>: Executive sponsors
                      aligned across functions and levels.
                    </p>
                    <p>
                      &hellip;and now <strong>AI</strong> is amplifying what the{" "}
                      <strong>operating model</strong> already enables.
                    </p>
                  </>
                }
              />
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════
            6 TAKEAWAYS
            ═══════════════════════════════════════════ */}
        <section
          id="takeaways"
          className="py-20 lg:py-28 bg-[#1a1225] text-white scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="fade-in font-heading text-3xl sm:text-4xl font-bold mb-3 text-center">
              6 Takeaways to Survive (and Love) the Circus
            </h2>
            <p className="fade-in text-white/80 text-center max-w-2xl mx-auto mb-12">
              How to lead the show &mdash; without getting mauled in Act I, and
              still building a bigger tent.
            </p>

            <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <TakeawayCard
                title="AI won't tame the monkeys. You still have to."
                text="Manage disruption early before chaos takes centre stage. Or they'll turn your strategy into a banana stand."
              />
              <TakeawayCard
                title="Without a Lion Tamer, you're just an appetizer"
                text="Executive sponsorship is not an option, it is survival."
              />
              <TakeawayCard
                title="A billion-dollar business case means nothing if nobody owns it"
                text="Sell the problem first, then offer your solution."
              />
              <TakeawayCard
                title="Corporate transformation takes time — usually years"
                text="No one masters the trapeze on Day 1. Pace the change."
              />
              <TakeawayCard
                title="AI scales execution"
                text="Your operating model decides what gets scaled. Get the model right first."
              />
              <TakeawayCard
                title="Build the right team — the Smart Apes"
                text="Trusted, strategic, adaptable, collaborative. The smarter the cast, the less banana drama."
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CLOSING CTA
            ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 bg-offwhite text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="fade-in font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Until the Next Greatest Show.
            </h2>
            <p className="fade-in text-charcoal/80 text-lg mb-8">
              Want to discuss pharma transformation, AI strategy, or taming your
              own circus? Let&rsquo;s connect.
            </p>
            <div className="fade-in flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/michaelkurr/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Dr. Michael Kurr on LinkedIn"
                className="px-8 py-3 bg-navy text-white font-semibold rounded hover:bg-navy-light transition-colors duration-200"
              >
                Connect on LinkedIn
              </a>
              <Link
                href="/#contact"
                className="px-8 py-3 border border-navy text-navy font-semibold rounded hover:bg-navy hover:text-white transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="py-4 bg-gray-100 text-center">
          <p className="text-xs text-charcoal/80 max-w-6xl mx-auto px-6">
            &copy; 2026 Dr. Kurr Advisory. All rights reserved. The views
            expressed are solely those of Dr. Michael A. Kurr. All examples
            provided are purely hypothetical. Some ideas were inspired by GenAI.
            Something weird? Blame the robot.
          </p>
        </div>
      </main>

      {/* ── Footer ── */}
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
              href="/imprint/"
              title="Imprint"
              className="hover:text-white/80 transition-colors"
            >
              Imprint
            </Link>
            <Link
              href="/privacy-policy/"
              title="Privacy Policy"
              className="hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>

      <ScrollAnimations />
    </>
  );
}
