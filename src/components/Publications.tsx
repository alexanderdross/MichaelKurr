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
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.045 18.02c.07-.116.157-.228.256-.323a.445.445 0 01.326-.136c.14 0 .28.04.4.116C2.67 18.6 4.5 19.4 6.48 19.83c1.98.43 4.02.55 6.07.37 2.05-.18 4.05-.7 5.93-1.55a.5.5 0 01.42 0c.15.07.26.2.3.35.04.16 0 .33-.1.45-2.1 1.05-4.4 1.7-6.75 1.92-2.35.22-4.7.06-6.93-.46-2.23-.52-4.3-1.42-6.1-2.63a.5.5 0 01-.2-.29zm6.55-5.52c0-.84.28-1.52.84-2.04.56-.52 1.3-.78 2.22-.78.98 0 1.75.31 2.29.92.55.62.82 1.44.82 2.48v.5c0 .84-.28 1.52-.84 2.04-.56.52-1.3.78-2.22.78-.98 0-1.74-.31-2.29-.92-.54-.62-.82-1.44-.82-2.48v-.5zm13.19 7.25c-.24-.18-.56-.2-.82-.05-2.1 1.25-4.5 1.9-6.95 1.9-3.28 0-6.24-1.21-8.48-3.2-.23-.2-.56-.18-.77.04-.2.23-.18.56.04.77 2.48 2.2 5.72 3.39 9.21 3.39 2.7 0 5.33-.72 7.65-2.1.27-.16.36-.5.2-.77l-.08.02z"/></svg>
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
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.045 18.02c.07-.116.157-.228.256-.323a.445.445 0 01.326-.136c.14 0 .28.04.4.116C2.67 18.6 4.5 19.4 6.48 19.83c1.98.43 4.02.55 6.07.37 2.05-.18 4.05-.7 5.93-1.55a.5.5 0 01.42 0c.15.07.26.2.3.35.04.16 0 .33-.1.45-2.1 1.05-4.4 1.7-6.75 1.92-2.35.22-4.7.06-6.93-.46-2.23-.52-4.3-1.42-6.1-2.63a.5.5 0 01-.2-.29zm6.55-5.52c0-.84.28-1.52.84-2.04.56-.52 1.3-.78 2.22-.78.98 0 1.75.31 2.29.92.55.62.82 1.44.82 2.48v.5c0 .84-.28 1.52-.84 2.04-.56.52-1.3.78-2.22.78-.98 0-1.74-.31-2.29-.92-.54-.62-.82-1.44-.82-2.48v-.5zm13.19 7.25c-.24-.18-.56-.2-.82-.05-2.1 1.25-4.5 1.9-6.95 1.9-3.28 0-6.24-1.21-8.48-3.2-.23-.2-.56-.18-.77.04-.2.23-.18.56.04.77 2.48 2.2 5.72 3.39 9.21 3.39 2.7 0 5.33-.72 7.65-2.1.27-.16.36-.5.2-.77l-.08.02z"/></svg>
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
