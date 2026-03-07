const timeline = [
  {
    date: "2026 – Present",
    dateTime: "2026",
    title: "Founder — Dr. Kurr Advisory",
    org: "Fractional C-Level & Advisory | Pharma & Life Sciences",
    href: "/advisory/",
    titleAttr: "Dr. Michael Kurr – Founder of Dr. Kurr Advisory, Fractional C-Level Consulting in Pharma & Life Sciences",
  },
  {
    date: "2026 – Present",
    dateTime: "2026",
    title: "Fractional CCO, Lemna Bio",
    org: "Strategy & Partnerships | Computational Drug Design",
    href: "https://www.lemnabio.com/",
    titleAttr: "Michael Kurr – Fractional Chief Commercial Officer at Lemna Bio, Computational Drug Design",
  },
  {
    date: "2026 – Present",
    dateTime: "2026",
    title: "Fellow — THENA Capital",
    org: "MedTech Investment | Early-Stage Digital & Device Companies",
    href: "https://www.thenacapital.com/",
    titleAttr: "Michael Kurr – Fellow at THENA Capital, MedTech Investment & Early-Stage Digital Health",
  },
  {
    date: "2019 – 2025",
    dateTime: "2019/2025",
    title: "Global Head, Human Pharma Services",
    org: "Boehringer Ingelheim",
    href: "https://www.boehringer-ingelheim.com/",
    titleAttr: "Michael Kurr – Global Head of Human Pharma Services at Boehringer Ingelheim (2019–2025)",
  },
  {
    date: "2013 – 2019",
    dateTime: "2013/2019",
    title: "Head of Business Service Excellence & Senior Global Program Lead",
    org: "Novartis",
    href: "https://www.novartis.com/",
    titleAttr: "Michael Kurr – Head of Business Service Excellence & Senior Global Program Lead at Novartis (2013–2019)",
  },
  {
    date: "Earlier",
    dateTime: undefined,
    title: "Management Consultant",
    org: "Schuh & Co. GmbH",
    href: "https://www.schuh-group.com/",
    titleAttr: "Michael Kurr – Management Consultant at Schuh & Co. GmbH, Manufacturing & Process Consulting",
  },
  {
    date: "Doctorate",
    dateTime: "2000/2003",
    title: "Dr. oec. HSG — University of St. Gallen",
    org: "Economics, Technology Management",
    href: "https://www.unisg.ch/",
    titleAttr: "Dr. Michael Kurr – Doctorate in Economics & Technology Management, University of St. Gallen (HSG)",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Background
        </span>
        <h2 className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-16 max-w-3xl group/heading">
          <a href="#about" title="About Dr. Michael Kurr — Two Decades of Global Corporate Transformation" className="hover:text-navy/80 transition-colors">
            Two Decades of Transforming Global Organizations
            <span className="text-gold/0 group-hover/heading:text-gold/60 transition-colors ml-2 text-2xl" aria-hidden="true">#</span>
          </a>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio text */}
          <div className="space-y-6">
            <p className="fade-in text-lg leading-relaxed text-charcoal/80">
              Dr. Michael A. Kurr is the{" "}
              <strong className="text-charcoal">Founder of Dr. Kurr Advisory</strong>,
              an independent platform for fractional C-level and advisory mandates
              in Pharma &amp; Life Sciences. He also serves as{" "}
              <strong className="text-charcoal">
                Fractional Chief Commercial Officer
              </strong>{" "}
              at <strong className="text-charcoal">Lemna Bio</strong> and as a{" "}
              <strong className="text-charcoal">Fellow</strong> at{" "}
              <strong className="text-charcoal">THENA Capital</strong>, a
              UK-based specialist MedTech investor.
            </p>
            <p className="fade-in text-lg leading-relaxed text-charcoal/80">
              Previously, he served as{" "}
              <strong className="text-charcoal">
                Global Head of Human Pharma Services
              </strong>{" "}
              at <strong className="text-charcoal">Boehringer Ingelheim</strong>{" "}
              (2019–2025), where he built the entire global services organization
              from scratch — scaling it tenfold to full geographical coverage
              within four years. Before that, he spent eight years at{" "}
              <strong className="text-charcoal">Novartis</strong> in senior
              leadership roles across global business services and product
              lifecycle services.
            </p>
            <p className="fade-in text-lg leading-relaxed text-charcoal/80">
              His academic foundation includes a{" "}
              <strong className="text-charcoal">Doctorate</strong> and{" "}
              <strong className="text-charcoal">Executive MBA</strong> from the{" "}
              <strong className="text-charcoal">University of St. Gallen</strong>,
              a <strong className="text-charcoal">Dipl.-Ing.</strong> from{" "}
              <strong className="text-charcoal">RWTH Aachen University</strong>,
              and executive programs at{" "}
              <strong className="text-charcoal">MIT Sloan</strong> and{" "}
              <strong className="text-charcoal">IMD</strong> in digital
              transformation and AI.
            </p>
            <p className="fade-in text-xl font-heading italic text-navy/70 border-l-4 border-gold pl-6 mt-8">
              &ldquo;Structure follows process follows strategy&rdquo; — anchored
              in the three pillars of <strong>People, Process, and Technology</strong>.
            </p>
          </div>

          {/* Timeline */}
          <div className="fade-in">
            <ol className="relative pl-8 border-l-2 border-navy/15 space-y-10 list-none">
              {timeline.map((item, i) => (
                <li key={i} className="relative">
                  <div className="absolute -left-[calc(2rem+5px)] w-3 h-3 rounded-full bg-gold border-2 border-offwhite" aria-hidden="true" />
                  {item.dateTime ? (
                    <time dateTime={item.dateTime} className="text-xs font-semibold tracking-wider uppercase text-gold">
                      {item.date}
                    </time>
                  ) : (
                    <span className="text-xs font-semibold tracking-wider uppercase text-gold">
                      {item.date}
                    </span>
                  )}
                  <h3 className="font-heading text-lg font-semibold text-navy mt-1">
                    <a
                      href={item.href}
                      title={item.titleAttr}
                      {...(item.href.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                      className="hover:text-gold transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-charcoal/65 text-sm">{item.org}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
