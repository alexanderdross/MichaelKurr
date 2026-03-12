import Link from "next/link";

const traits = [
  {
    slug: "transparency",
    name: "Transparency",
    desc: "Clear communication that fosters trust, especially in uncertain environments",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <circle cx="16" cy="16" r="14" />
        <path d="M16 8v8l6 4" />
      </svg>
    ),
  },
  {
    slug: "respect",
    name: "Respect",
    desc: "Conveyed through the quality of every interaction and communication",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <path d="M6 16c0-5.523 4.477-10 10-10s10 4.477 10 10" />
        <path d="M6 16c0 5.523 4.477 10 10 10s10-4.477 10-10" />
        <circle cx="16" cy="16" r="3" />
      </svg>
    ),
  },
  {
    slug: "empowerment",
    name: "Empowerment",
    desc: "Enabling teams to make decisions with accountability - no micromanagement",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <path d="M16 4v12" />
        <path d="M10 10l6 6 6-6" />
        <path d="M6 20v6h20v-6" />
      </svg>
    ),
  },
  {
    slug: "fairness",
    name: "Fairness",
    desc: '"One of the most important things in life" - the foundation of everything',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <path d="M4 16h24" />
        <path d="M16 4v24" />
        <rect x="8" y="8" width="16" height="16" rx="2" />
      </svg>
    ),
  },
  {
    slug: "vision",
    name: "Vision",
    desc: "Providing a North Star and compelling direction that goes beyond strategy",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <path d="M16 4l4 8h8l-6 5 2 9-8-5-8 5 2-9-6-5h8z" />
      </svg>
    ),
  },
];

const rules = [
  "Avoid assumptions - reality always looks different.",
  "Practice patience and strategic thinking in corporate environments.",
  "Stay current and relevant by embracing change proactively.",
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Philosophy
        </span>
        <h2 className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-16 group/heading">
          <a href="#leadership" title="Leadership Philosophy - Transparency, Respect, Empowerment, Fairness & Vision" className="hover:text-navy/80 transition-colors">
            How I Lead
            <span className="text-gold/0 group-hover/heading:text-gold/60 transition-colors ml-2 text-2xl" aria-hidden="true">#</span>
          </a>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {traits.map((trait) => (
            <div key={trait.name} className="fade-in">
              <Link
                href={`/leadership/${trait.slug}/`}
                title={`${trait.name} - Dr. Kurr's leadership principle: ${trait.desc.toLowerCase()}`}
                className="group block p-7 rounded-xl bg-offwhite border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="text-gold mb-4">{trait.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-navy mb-2">
                  {trait.name}
                </h3>
                <p className="text-charcoal/70 leading-relaxed text-sm mb-3">
                  {trait.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-teal group-hover:text-gold transition-colors duration-200">
                  Read more
                  <span className="sr-only"> about {trait.name}</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
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
          {/* Extra cell for visual balance on 3-col */}
          <div className="fade-in p-7 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
            <p className="font-heading text-xl italic text-white/80 text-center leading-relaxed">
              &ldquo;Structure follows process follows strategy&rdquo;
            </p>
          </div>
        </div>

        {/* Management rules */}
        <div className="fade-in max-w-3xl mx-auto">
          <h3 className="font-heading text-2xl font-semibold text-navy mb-8 text-center">
            Three Management Rules
          </h3>
          <div className="space-y-6">
            {rules.map((rule, i) => (
              <div key={i} className="flex items-start gap-5">
                <span className="shrink-0 text-3xl font-heading font-bold text-gold/60">
                  0{i + 1}
                </span>
                <blockquote className="text-lg text-charcoal/80 font-heading italic leading-relaxed pt-1">
                  &ldquo;{rule}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
