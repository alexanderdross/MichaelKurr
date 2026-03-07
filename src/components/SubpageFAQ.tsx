"use client";

import { useState } from "react";

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

  function handleToggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id={`${slug}-faq`} className="py-16 lg:py-24 bg-offwhite border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="fade-in font-heading text-2xl sm:text-3xl font-bold text-navy mb-10">
          <a
            href={`#${slug}-faq`}
            title={`Frequently asked questions about ${title.toLowerCase()} — Dr. Kurr Advisory`}
            className="hover:text-navy/80 transition-colors"
          >
            Frequently Asked Questions
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
                    title={`${faq.question} — ${title} advisory by Dr. Michael Kurr`}
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
                  role="region"
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
