/**
 * Ordered section IDs matching DOM order on the homepage.
 * Single source of truth for Navigation, ScrollAnimations, and redirects.
 */
export const SECTION_IDS = [
  "hero",
  "about",
  "expertise",
  "impact",
  "publications",
  "leadership",
  "featured",
  "recommendations",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

/** Navigation links shown in the main nav bar. */
export const NAV_LINKS = [
  { href: "#about", label: "About", title: "Learn about Dr. Michael Kurr's background and career" },
  { href: "#expertise", label: "Expertise", title: "View Dr. Kurr's areas of expertise" },
  { href: "#impact", label: "Impact", title: "See key achievements and career highlights" },
  { href: "#publications", label: "Publications", title: "Browse published books and academic works" },
  { href: "#leadership", label: "Leadership", title: "Discover Dr. Kurr's leadership philosophy" },
  { href: "#recommendations", label: "Testimonials", title: "Read LinkedIn recommendations and colleague testimonials" },
  { href: "/transformation-circus/", label: "Transformation Circus", title: "Leading the Transformation Circus in the Age of AI" },
] as const;

/** Sections used for redirects in next.config.ts (excludes hero, recommendations). */
export const REDIRECT_SECTIONS = [
  "about",
  "expertise",
  "impact",
  "publications",
  "leadership",
  "featured",
  "recommendations",
  "contact",
] as const;
