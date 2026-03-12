"use client";

import { useState, useEffect } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface SubpageFAQProps {
  slug: string;
  title: string;
  items: FAQItem[];
}

export default function SubpageFAQ({ slug, title, items }: SubpageFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Deep-link: auto-open FAQ item matching URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const idx = items.findIndex((f) => f.id === hash);
      if (idx !== -1) {
        setOpenIndex(idx);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, [items]);

  function handleToggle(i: number) {
    const newIndex = openIndex === i ? null : i;
    setOpenIndex(newIndex);
    // Update URL hash without page scroll
    if (newIndex !== null) {
      window.history.replaceState(null, "", `#${items[newIndex].id}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }

  return (
    <section id={`${slug}-faq`} className="py-16 lg:py-24 bg-offwhite border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-6">
        <span className="fade-in block text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Questions
        </span>
        <h2 className="fade-in font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-10 group/heading">
          <a
            href={`#${slug}-faq`}
            title={`Frequently asked questions about ${title.toLowerCase()} - Dr. Michael Kurr`}
            className="hover:text-navy/80 transition-colors"
          >
            Frequently Asked Questions
            <span
              className="text-gold/0 group-hover/heading:text-gold/60 transition-colors ml-2 text-xl"
              aria-hidden="true"
            >
              #
            </span>
          </a>
        </h2>
        <dl className="space-y-4">
          {items.map((faq, i) => {
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
                    title={`${faq.question} - ${title} by Dr. Michael Kurr`}
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
