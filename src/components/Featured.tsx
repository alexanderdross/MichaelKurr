import RecommendationsCarousel from "./RecommendationsCarousel";

const features = [
  {
    name: "CIOLook Magazine",
    desc: "Feature Article",
    href: "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
  },
  {
    name: "Hanser Verlag",
    desc: "Published Author",
    href: "https://www.hanser-elibrary.com/doi/10.3139/9783446410817",
  },
  {
    name: "University of St. Gallen",
    desc: "Research Profile",
    href: "https://www.alexandria.unisg.ch/persons/247",
  },
  {
    name: "ResearchGate",
    desc: "Academic Publications",
    href: "https://www.researchgate.net/publication/265078042_Prozessorientierte_Reorganisation",
  },
  {
    name: "Google Knowledge Graph",
    desc: "Verified Entity",
    href: "https://share.google/5Cq7JCmzDsnMDtf1W",
  },
];

export default function Featured() {
  return (
    <section id="featured" className="py-24 lg:py-32 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Recognition
        </span>
        <h2 className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-16 group/heading">
          <a href="#featured" title="Dr. Michael Kurr - Featured in CIOLook, Hanser Verlag & Google Knowledge Graph" className="hover:text-navy/80 transition-colors">
            As Featured In
            <span className="text-gold/0 group-hover/heading:text-gold/60 transition-colors ml-2 text-2xl" aria-hidden="true">#</span>
          </a>
        </h2>

        <div className="fade-in grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-24">
          {features.map((f) => (
            <a
              key={f.name}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Dr. Michael Kurr featured on ${f.name} - ${f.desc}`}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-gold/40 hover:shadow-md transition-all duration-300 text-center min-h-[120px]"
            >
              <span className="font-heading text-lg font-semibold text-navy group-hover:text-gold transition-colors duration-200">
                {f.name}
              </span>
              <span className="text-xs text-charcoal/70 mt-1">{f.desc}</span>
            </a>
          ))}
        </div>

        {/* Recommendations */}
        <div id="recommendations">
          <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3 text-center">
            LinkedIn Recommendations
          </span>
          <h3 className="fade-in font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-12 text-center group/heading">
            <a href="#recommendations" title="LinkedIn Recommendations & Colleague Testimonials for Dr. Michael Kurr" className="hover:text-navy/80 transition-colors">
              What Colleagues Say
              <span className="text-gold/0 group-hover/heading:text-gold/60 transition-colors ml-2 text-xl" aria-hidden="true">#</span>
            </a>
          </h3>

          <div className="fade-in">
            <RecommendationsCarousel />
          </div>

          <div className="fade-in text-center mt-8">
            <a
              href="https://www.linkedin.com/in/michaelkurr/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              title="View all LinkedIn recommendations for Dr. Michael Kurr"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:text-gold transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              View all recommendations on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
