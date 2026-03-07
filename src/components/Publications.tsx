const academicWorks = [
  {
    title:
      "Potentialorientiertes Kooperationsmanagement in der Zulieferindustrie — Vom strategischen Kooperationspotential zur operativen Umsetzung",
    venue: "Dissertation, University of St. Gallen (HSG)",
    isThesis: true,
    href: "https://www.alexandria.unisg.ch/persons/247",
  },
  {
    title:
      "Success factors for collaboration management in manufacturing companies",
    venue:
      "International Journal of Services and Operations Management, Vol. 2(3), pp. 203–221, 2006",
    href: "https://www.inderscienceonline.com/doi/abs/10.1504/IJSOM.2006.009860",
  },
  {
    title:
      "Aufbau und Nutzen von Kooperationen: ApoKop — ein Erfahrungsbericht aus dem Gesundheitswesen",
    venue: "Schuh & Co. Komplexitätsmanagement, 2007",
    href: "https://www.researchgate.net/publication/265078042_Prozessorientierte_Reorganisation",
  },
  {
    title: "Netzwerke in Virtuellen Fabriken",
    venue:
      "SATW-Bulletin / Schweizerische Akademie der technischen Wissenschaften, 2004",
    href: "https://www.amazon.com/Michael-A.-Kurr/e/B004597QVS",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 lg:py-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Research
        </span>
        <h2 className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-16 group/heading">
          <a href="#publications" title="Published Books & Academic Papers by Dr. Michael Kurr" className="hover:text-navy/80 transition-colors">
            Published Works
            <span className="text-gold/0 group-hover/heading:text-gold/60 transition-colors ml-2 text-2xl" aria-hidden="true">#</span>
          </a>
        </h2>

        {/* Books */}
        <div className="space-y-12 mb-20">
          {/* Book 1 */}
          <article className="fade-in flex flex-col sm:flex-row gap-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="shrink-0 flex justify-center" aria-hidden="true">
              <div className="w-40 h-56 rounded-lg overflow-hidden shadow-md">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/images/book-reorganisation-160.webp 160w, /images/book-reorganisation-320.webp 320w"
                    sizes="160px"
                  />
                  <source
                    type="image/jpeg"
                    srcSet="/images/book-reorganisation-160.jpg 160w, /images/book-reorganisation-320.jpg 320w"
                    sizes="160px"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/book-reorganisation-160.jpg"
                    alt="Book cover: Prozessorientierte Reorganisation by Günther Schuh, Thomas Friedli, and Michael A. Kurr"
                    title="Prozessorientierte Reorganisation — Carl Hanser Verlag, 2006"
                    width={160}
                    height={224}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-semibold text-navy mb-1" lang="de">
                Prozessorientierte Reorganisation
              </h3>
              <p className="text-charcoal/80 text-sm mb-3" lang="de">
                Reengineering-Projekte professionell gestalten und umsetzen
              </p>
              <p className="text-gold font-medium text-sm mb-2">
                Günther Schuh, Thomas Friedli, Michael A. Kurr
              </p>
              <p className="text-charcoal/70 text-sm mb-4">
                Carl Hanser Verlag, 2006 · 204 pages
              </p>
              <p className="text-charcoal/75 leading-relaxed mb-6">
                A guide for process-oriented reorganization that combines the
                strengths of radical reengineering with the human factor and
                practical implementability. Features case studies from Schiesser,
                Alu Menziken, and Lista.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://amzn.to/4b4Ridf"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  title="Buy Prozessorientierte Reorganisation on Amazon — Reengineering-Projekte professionell gestalten und umsetzen by Schuh, Friedli & Kurr"
                  aria-label="Buy Prozessorientierte Reorganisation on Amazon"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-navy text-white text-sm font-medium rounded hover:bg-navy-light transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.3c0 34-30.1 81.8-62 81.4-16.5-.5-29.2-12.8-29.2-33.2 0-49.5 56.2-64 91.2-68.2v20zm136.9 151.8c-7.7 6.4-16 12.5-24.9 18C342 432.6 299.4 448 257.6 448c-100.2 0-173.5-53.3-173.5-53.3-4.2-2.5-6.6 1.6-3.8 5C115 438.5 171.2 512 304 512c70.6 0 120-50.6 120-97.5 0-29.2-14.3-38.5-29.9-13.7zM400 384c-1 .5-1.9 2.4.3 2.1 34.2-6.6 58.5 12.1 63.4 40.4.5 2.9 4.3 1.9 4.3-.5 0-29.4-25.7-59.5-68-42z"/></svg>
                  Buy on Amazon
                </a>
              </div>
            </div>
          </article>

          {/* Book 2 */}
          <article className="fade-in flex flex-col sm:flex-row gap-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="shrink-0 flex justify-center">
              <div className="w-40 h-56 rounded-lg bg-gradient-to-br from-navy to-navy-light flex items-center justify-center p-4 shadow-md">
                <span className="text-center font-heading text-white text-lg leading-snug">
                  Kooperations&shy;management
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-semibold text-navy mb-1" lang="de">
                Kooperationsmanagement
              </h3>
              <p className="text-charcoal/80 text-sm mb-3" lang="de">
                Systematische Vorbereitung – Gezielter Auf- und Ausbau –
                Entscheidende Erfolgsfaktoren
              </p>
              <p className="text-gold font-medium text-sm mb-2">
                Günther Schuh, Thomas Friedli, Michael A. Kurr
              </p>
              <p className="text-charcoal/70 text-sm mb-4">
                Carl Hanser Verlag, 2005 · 207 pages
              </p>
              <p className="text-charcoal/75 leading-relaxed mb-6">
                A step-by-step guide for building successful inter-company
                cooperations, covering systematic preparation, targeted
                development, and the critical success factors that determine
                long-term partnership viability.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://amzn.to/3OOyTdn"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  title="Buy Kooperationsmanagement on Amazon — Systematische Vorbereitung, Gezielter Auf- und Ausbau by Schuh, Friedli & Kurr"
                  aria-label="Buy Kooperationsmanagement on Amazon"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-navy text-white text-sm font-medium rounded hover:bg-navy-light transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.3c0 34-30.1 81.8-62 81.4-16.5-.5-29.2-12.8-29.2-33.2 0-49.5 56.2-64 91.2-68.2v20zm136.9 151.8c-7.7 6.4-16 12.5-24.9 18C342 432.6 299.4 448 257.6 448c-100.2 0-173.5-53.3-173.5-53.3-4.2-2.5-6.6 1.6-3.8 5C115 438.5 171.2 512 304 512c70.6 0 120-50.6 120-97.5 0-29.2-14.3-38.5-29.9-13.7zM400 384c-1 .5-1.9 2.4.3 2.1 34.2-6.6 58.5 12.1 63.4 40.4.5 2.9 4.3 1.9 4.3-.5 0-29.4-25.7-59.5-68-42z"/></svg>
                  Buy on Amazon
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Academic work */}
        <div className="fade-in">
          <h3 className="font-heading text-2xl font-semibold text-navy mb-8">
            Academic Work
          </h3>
          <ul className="space-y-6">
            {academicWorks.map((work, i) => (
              <li
                key={i}
                className="border-l-2 border-gold/40 pl-6 py-1"
              >
                {work.isThesis && (
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase text-gold mb-1">
                    Dissertation
                  </span>
                )}
                {work.href ? (
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Read: ${work.title}`}
                    className="block text-navy font-medium hover:text-teal transition-colors"
                  >
                    {work.title}
                  </a>
                ) : (
                  <p className="text-navy font-medium">{work.title}</p>
                )}
                <p className="text-charcoal/70 text-sm mt-1">{work.venue}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
