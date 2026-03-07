import Link from "next/link";

const cards = [
  {
    slug: "corporate-transformation",
    title: "Corporate Transformation",
    desc: "Building and scaling organizations from the ground up across global markets",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10" aria-hidden="true">
        <path d="M24 4L4 14l20 10 20-10L24 4z" />
        <path d="M4 24l20 10 20-10" />
        <path d="M4 34l20 10 20-10" />
      </svg>
    ),
  },
  {
    slug: "process-reengineering",
    title: "Process Reengineering",
    desc: "Designing process-oriented enterprises that balance radical change with the human factor",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="20" />
        <path d="M14 24h20M24 14v20" />
        <path d="M17 17l14 14M31 17L17 31" />
      </svg>
    ),
  },
  {
    slug: "commercial-medical-operations",
    title: "Commercial & Medical Operations",
    desc: "Building scalable operating models for content, omnichannel, analytics, and digital operations",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10" aria-hidden="true">
        <circle cx="14" cy="14" r="8" />
        <circle cx="34" cy="14" r="8" />
        <circle cx="14" cy="34" r="8" />
        <circle cx="34" cy="34" r="8" />
        <path d="M22 14h4M14 22v4M34 22v4M22 34h4" />
      </svg>
    ),
  },
  {
    slug: "cooperation-management",
    title: "Cooperation Management",
    desc: "Orchestrating strategic alliances and inter-company partnerships",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10" aria-hidden="true">
        <path d="M8 24a16 16 0 0132 0" />
        <path d="M8 24a16 16 0 0016 16" />
        <path d="M40 24a16 16 0 01-16 16" />
        <circle cx="8" cy="24" r="4" />
        <circle cx="40" cy="24" r="4" />
        <circle cx="24" cy="40" r="4" />
      </svg>
    ),
  },
  {
    slug: "digital-ai-strategy",
    title: "Digital & AI Strategy",
    desc: "Leveraging AI, data science, and digital technologies for competitive advantage",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="4" />
        <path d="M16 28l6-8 5 6 5-10" />
        <circle cx="36" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    slug: "people-leadership",
    title: "People & Leadership",
    desc: "Developing high-performing global teams through empowerment, trust, and vision",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="14" r="8" />
        <path d="M10 40c0-7.732 6.268-14 14-14s14 6.268 14 14" />
        <path d="M24 30v6M20 33l4 3 4-3" />
      </svg>
    ),
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Capabilities
        </span>
        <h2 className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-16 group/heading">
          <a href="#expertise" title="Dr. Michael Kurr's Areas of Expertise in Pharma Transformation & Digital Strategy" className="hover:text-navy/80 transition-colors">
            Areas of Expertise
            <span className="text-gold/0 group-hover/heading:text-gold/60 transition-colors ml-2 text-2xl" aria-hidden="true">#</span>
          </a>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="fade-in">
              <Link
                href={`/expertise/${card.slug}/`}
                title={`${card.title} — Dr. Michael Kurr's expertise in ${card.desc.toLowerCase()}`}
                className="group block p-8 rounded-xl border border-gray-200 hover:border-gold/40 hover:shadow-lg transition-all duration-300 bg-offwhite/50 h-full"
              >
                <div className="text-navy/60 group-hover:text-gold transition-colors duration-300 mb-5">
                  {card.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                  {card.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">{card.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-teal group-hover:text-gold transition-colors duration-200">
                  Learn more
                  <span className="sr-only"> about {card.title}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
