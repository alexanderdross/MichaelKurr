"use client";

import { useState, useEffect } from "react";

const faqs = [
  {
    id: "who-is-dr-michael-kurr",
    question: "Who is Dr. Michael Kurr?",
    title: "Learn about Dr. Michael Kurr — Founder of Dr. Kurr Advisory, Fractional CCO at Lemna Bio, and Fellow at THENA Capital",
    answer:
      "Dr. Michael A. Kurr is the Founder of Dr. Kurr Advisory, an independent platform for fractional C-level and advisory mandates in Pharma & Life Sciences. He also serves as Fractional Chief Commercial Officer at Lemna Bio and as a Fellow at THENA Capital. Previously, he was Global Head of Human Pharma Services at Boehringer Ingelheim (2019\u20132025), where he built the entire global services organization from scratch, scaling it tenfold within four years.",
  },
  {
    id: "dr-kurr-expertise",
    question: "What is Dr. Kurr\u2019s area of expertise?",
    title: "Dr. Michael Kurr\u2019s expertise in corporate transformation, AI strategy, and pharma operations across Boehringer Ingelheim, Novartis, and global pharma",
    answer:
      "Dr. Kurr specializes in corporate transformation, process reengineering, commercial and medical operations, cooperation management, digital and AI strategy, and people leadership. He has 20+ years of experience transforming global organizations in pharma and life sciences, including Boehringer Ingelheim, Novartis, Roche Diagnostics, Daimler, and Schott.",
  },
  {
    id: "dr-kurr-books-publications",
    question: "What books has Dr. Michael Kurr published?",
    title: "Published books by Dr. Michael Kurr — Prozessorientierte Reorganisation and Kooperationsmanagement (Carl Hanser Verlag)",
    answer:
      "Dr. Kurr co-authored two books published by Carl Hanser Verlag: \u2018Prozessorientierte Reorganisation: Reengineering-Projekte professionell gestalten und umsetzen\u2019 (2006, 204 pages, ISBN 978-3-446-40720-6) and \u2018Kooperationsmanagement: Systematische Vorbereitung \u2013 Gezielter Auf- und Ausbau \u2013 Entscheidende Erfolgsfaktoren\u2019 (2005, 207 pages, ISBN 978-3-446-40036-8), both with Prof. G\u00fcnther Schuh and Prof. Thomas Friedli.",
  },
  {
    id: "dr-kurr-education",
    question: "What is Dr. Kurr\u2019s educational background?",
    title: "Dr. Michael Kurr\u2019s education — University of St. Gallen, RWTH Aachen, MIT Sloan, and IMD Business School",
    answer:
      "Dr. Kurr holds a Doctorate (Dr. oec. HSG) and an Executive MBA from the University of St. Gallen, a Dipl.-Ing. from RWTH Aachen University in Production Management and Manufacturing Technology, an Executive Certificate in Digital Business from MIT Sloan School of Management (2024), and completed three programs at IMD Business School in digital transformation, strategy, and analytics.",
  },
  {
    id: "dr-kurr-advisory-services",
    question: "What services does Dr. Kurr Advisory offer?",
    title: "Dr. Kurr Advisory services — fractional C-level leadership, transformation consulting, AI readiness, and operating model design for Pharma & Life Sciences",
    answer:
      "Dr. Kurr Advisory provides strategic clarity, scalable operating model design, and profitable growth advisory for Pharma & Life Sciences organizations. Services include fractional C-level leadership (CCO, CTO, COO), corporate transformation consulting, go-to-market strategy, digital operations design, AI readiness, and organizational development.",
  },
  {
    id: "dr-kurr-boehringer-ingelheim",
    question: "What did Dr. Kurr achieve at Boehringer Ingelheim?",
    title: "Dr. Michael Kurr\u2019s achievements at Boehringer Ingelheim — building the #1 content supply chain in pharma from scratch",
    answer:
      "At Boehringer Ingelheim (2019\u20132025), Dr. Kurr built the Global Human Pharma Services organization from scratch over 4 years, expanding it tenfold to full geographical scale. The organization included a Global Services Delivery Unit, Digital Content Factory in India, Creative Factory, and a Global Service Layer. External benchmarking studies recognized it as one of the leading content supply chains in the pharmaceutical industry.",
  },
  {
    id: "dr-kurr-leadership-philosophy",
    question: "What is Dr. Kurr\u2019s leadership philosophy?",
    title: "Dr. Michael Kurr\u2019s leadership philosophy — Transparency, Respect, Empowerment, Fairness, and Vision",
    answer:
      "Dr. Kurr\u2019s leadership is anchored in five core traits: Transparency, Respect, Empowerment, Fairness, and Vision. His core equation is \u2018Structure follows process follows strategy,\u2019 anchored in the three pillars of People, Process, and Technology. He operates by three management rules: avoid assumptions, practice patience and strategic thinking, and stay current by embracing change proactively.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Handle deep-link to specific FAQ item via URL hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const idx = faqs.findIndex((f) => f.id === hash);
      if (idx !== -1) {
        setOpenIndex(idx);
        // Scroll to the FAQ item after a brief delay for render
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, []);

  function handleToggle(i: number) {
    const newIndex = openIndex === i ? null : i;
    setOpenIndex(newIndex);
    // Update URL hash without scrolling
    if (newIndex !== null) {
      window.history.replaceState(null, "", `#${faqs[newIndex].id}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }

  return (
    <section id="faq" className="py-24 lg:py-32 bg-offwhite">
      <div className="max-w-3xl mx-auto px-6">
        <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Questions
        </span>
        <h2 className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-16 group/heading">
          <a
            href="#faq"
            title="Frequently Asked Questions about Dr. Michael Kurr — expertise, advisory services, publications, education, and leadership philosophy"
            className="hover:text-navy/80 transition-colors"
          >
            Frequently Asked Questions
            <span
              className="text-gold/0 group-hover/heading:text-gold/60 transition-colors ml-2 text-2xl"
              aria-hidden="true"
            >
              #
            </span>
          </a>
        </h2>

        <dl className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className="fade-in border border-gray-200 rounded-xl bg-white overflow-hidden"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => handleToggle(i)}
                    title={faq.title}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="font-heading text-lg font-semibold text-navy">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 shrink-0 text-gold transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${faq.id}`}
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
                >
                  <p className="px-6 text-charcoal/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
