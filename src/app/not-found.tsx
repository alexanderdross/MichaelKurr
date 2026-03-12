import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found - Dr. Michael Kurr",
  description:
    "The page you are looking for could not be found. Visit dr.michaelkurr.com to learn about Dr. Michael Kurr's advisory services, expertise, and publications.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { href: "/#about", label: "About", desc: "Background & career" },
  { href: "/#expertise", label: "Expertise", desc: "Areas of focus" },
  { href: "/#publications", label: "Publications", desc: "Books & papers" },
  { href: "/#leadership", label: "Leadership", desc: "Philosophy & values" },
  { href: "/contact/", label: "Contact", desc: "Get in touch" },
];

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="min-h-screen flex items-center justify-center bg-navy text-white"
    >
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        {/* Decorative line */}
        <div className="w-12 h-1 bg-gold mx-auto mb-8 rounded-full" />

        <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Page Not Found
        </p>
        <h1 className="font-heading text-6xl sm:text-7xl font-bold mb-4">
          404
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-md mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved. Here are some helpful links instead:
        </p>

        {/* Quick links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center p-4 rounded-xl border border-white/10 hover:border-gold/40 hover:bg-white/5 transition-all duration-200"
            >
              <span className="text-sm font-semibold text-white group-hover:text-gold transition-colors duration-200">
                {link.label}
              </span>
              <span className="text-xs text-white/60 mt-0.5">{link.desc}</span>
            </Link>
          ))}
        </div>

        {/* Primary CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors duration-200"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Footer note */}
        <p className="text-white/50 text-xs mt-16">
          dr.michaelkurr.com &mdash; Dr. Michael Kurr
        </p>
      </div>
    </main>
  );
}
