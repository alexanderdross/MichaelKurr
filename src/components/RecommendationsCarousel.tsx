"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const recommendations = [
  {
    name: "Vishal K.",
    title: "Enabling Digital Transformation | Commercial Excellence",
    relationship: "Partner",
    quote:
      "Michael is exactly the kind of systems thinker you want in that environment: he sees the full ecosystem\u2014people, process, data, governance\u2014and translates it into pragmatic actions that actually scale. What I\u2019ve valued most is the openness and candor in how we work together: high trust, constructive sparring\u2014always leading back to clarity and progress.",
  },
  {
    name: "C\u00e9sar Nieto",
    title: "Managing Director (GM) in Life Sciences",
    relationship: "Colleague at Boehringer Ingelheim",
    quote:
      "Michael brings structure without rigidity, ambition without ego, and detail without losing sight of the big picture. He creates an environment where teams feel empowered to deliver their best. Simply put, Michael is the kind of leader every organization wants\u2014visionary, grounded, and a genuine pleasure to work with.",
  },
  {
    name: "Marco Andre",
    title: "Vice-President, AI Literacy @ Johnson & Johnson",
    relationship: "Collaborator & Speaker",
    quote:
      "What stands out is his continuous evolution. The Transformation Circus exemplifies this\u2014a thoughtful reframing of pharma transformation that combines depth, humor, and truth in ways that make people listen and engage. I value Michael as a speaker and transformation leader, who combines substance with presence and has the courage to do things differently.",
  },
  {
    name: "Dr. Tushar Shah",
    title: "Human Pharma Services at Boehringer Ingelheim",
    relationship: "Direct Report",
    quote:
      "He has an amazing ability to build high performing teams and organizations from the ground up. He stands out most with his blend of vision, execution excellence, and empathy. He is an asset to any organization\u2014impactful, forward thinking, and deeply committed to building teams that succeed for years to come.",
  },
  {
    name: "Dr. Christian Langel\u00fcddecke",
    title: "Head of Global HP Service Layer Organization at Boehringer Ingelheim",
    relationship: "Direct Report",
    quote:
      "Michael is brilliant in building diverse teams and picking the right talent for the right place. He has his own and unique way to address empowerment which is a distinguishing factor, that allows his staff to flourish and grow in an ever changing economy and environment.",
  },
  {
    name: "Camiel Haagmans",
    title: "Multicultural Life Sciences Executive | Pharmaceutical Commercial Operations Leader",
    relationship: "Direct Report",
    quote:
      "Michael has been an extraordinary leader taking impediments out of the way, challenging decisions with an open mind and frequently showing up in person to build a positive culture for the broader team. He put trust and responsibility in my hands. After I left into a new role he remained a friend and a loyal mentor.",
  },
  {
    name: "Srirangaraj V",
    title: "Life Science Account Management \u2013 Customer Experience & Value Delivery",
    relationship: "Client",
    quote:
      "Michael leads with humility, integrity, and deep respect for people, while bringing strong clarity to complex global operating models. I value him deeply not only as a leader and partner, but also as a person.",
  },
  {
    name: "Alexander Dross",
    title: "Global Capability Owner for Web & (AI) Search Strategy at Boehringer Ingelheim",
    relationship: "Direct Report",
    url: "https://dross.net/alexander/",
    quote:
      "Michael possesses a rare combination of strategic vision and hands-on execution capability. His establishment of Human Pharma Services and the Delivery Unit in Sant Cugat, Spain\u2014built entirely from the ground up\u2014stands as a testament to his ability to transform ambitious concepts into fully operational, high-performing organizations.",
  },
  {
    name: "Timmo Rousku Andersen",
    title: "Experienced C-level Pharma Executive",
    relationship: "Senior Colleague",
    quote:
      "Building, scaling and delivering are 3 very distinct tasks\u2014but in a service delivery universe Michael has managed to do all three. Leveraging a unique experience base Michael translates his skills into well articulated, sequenced and logical plans that his teams follow and execute.",
  },
  {
    name: "Vignesh Dhandapani",
    title: "Senior Director and Global Client Partner, Life Sciences Germany at Cognizant",
    relationship: "Client",
    quote:
      "Beyond his strategic clarity, outcome focused leadership, what truly stood out was the way he treated us as genuine partners. I wholeheartedly recommend Dr. Michael Kurr as a senior leader who not only sets a compelling vision, but also creates the conditions for partners and teams to succeed.",
  },
  {
    name: "Alyssa Fenoglio",
    title: "Founder & Strategic Advisor, The Human Algorithm\u2122",
    relationship: "Collaborator",
    quote:
      "Michael cuts through theory, leads with conviction, and focuses relentlessly on what works inside complex organizations to drive real results. Strategic, curious, and purpose driven, he is a respected industry leader and a valued collaborator.",
  },
];

export default function RecommendationsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const regionRef = useRef<HTMLDivElement>(null);

  const total = recommendations.length;

  const goTo = useCallback(
    (index: number, dir: "next" | "prev") => {
      setDirection(dir);
      setCurrent((index + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1, "next"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "prev"), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    },
    [next, prev]
  );

  const rec = recommendations[current];
  const animClass = direction === "next" ? "animate-fade-slide-next" : "animate-fade-slide-prev";

  return (
    <div
      ref={regionRef}
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Colleague recommendations carousel"
      aria-roledescription="carousel"
      tabIndex={0}
    >
      {/* Card */}
      <div
        className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-sm min-h-[280px] flex flex-col justify-between"
        role="group"
        aria-label={`Recommendation ${current + 1} of ${total}`}
        aria-live="polite"
        aria-atomic="true"
      >
        <div>
          {/* Quote icon */}
          <svg
            className="w-10 h-10 text-gold/60 mb-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          {/* Quote text */}
          <blockquote
            key={`${current}-${direction}`}
            className={`text-lg text-charcoal/80 leading-relaxed font-heading italic mb-6 ${animClass}`}
          >
            &ldquo;{rec.quote}&rdquo;
          </blockquote>
        </div>

        {/* Attribution */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <cite className="text-base font-semibold text-navy not-italic block">
              {rec.url ? (
                <a
                  href={rec.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${rec.name} - ${rec.title}`}
                  className="hover:text-gold transition-colors duration-200 underline decoration-gold/30 underline-offset-2"
                >
                  {rec.name}
                </a>
              ) : (
                rec.name
              )}
            </cite>
            <span className="text-sm text-charcoal/80 block leading-snug mt-0.5">
              {rec.title}
            </span>
            <span className="text-xs text-gold font-medium mt-1 block">
              {rec.relationship}
            </span>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous recommendation"
              className="p-2 rounded-full border border-gray-200 hover:border-gold/60 hover:bg-gold/5 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 text-navy"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next recommendation"
              className="p-2 rounded-full border border-gray-200 hover:border-gold/60 hover:bg-gold/5 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 text-navy"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5 mt-6" role="group" aria-label="Recommendation indicators">
        {recommendations.map((r, i) => (
          <button
            key={i}
            aria-label={`Go to recommendation by ${r.name} (${i + 1} of ${total})`}
            aria-current={i === current ? "true" : undefined}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 h-2 bg-gold"
                : "w-2 h-2 bg-gray-300 hover:bg-gold/40"
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-center text-xs text-charcoal/65 mt-3" aria-hidden="true">
        {current + 1} / {total}
      </p>
    </div>
  );
}
