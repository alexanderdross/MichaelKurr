"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { SECTION_IDS, NAV_LINKS, NAV_FEATURED_LINKS } from "@/constants/sections";

const links = NAV_LINKS;
const featured = NAV_FEATURED_LINKS;

// Map section IDs to the nav hash they should highlight
const sectionToHash = (id: string): string => {
  if (id === "hero") return "";
  if (id === "featured") return "#recommendations";
  return `#${id}`;
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        }
        // Pick the first visible section in page order
        for (const id of SECTION_IDS) {
          if (visibleSections.has(id)) {
            setActiveHash(sectionToHash(id));
            return;
          }
        }
      },
      { threshold: 0.05, rootMargin: "-80px 0px -50% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Escape key and focus trap for mobile menu
  const handleMenuKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (e.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    []
  );

  useEffect(() => {
    if (!menuOpen) return;
    document.addEventListener("keydown", handleMenuKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleMenuKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen, handleMenuKeyDown]);

  const isActive = (href: string) => activeHash === href;

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="font-heading text-xl font-bold text-white tracking-wider"
          aria-label="Dr. Michael Kurr — Home"
          title="Dr. Michael Kurr — Back to top"
        >
          MK
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                title={link.title}
                aria-current={isActive(link.href) ? "true" : undefined}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-gold"
                    : "text-white/80 hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Separator */}
          <li aria-hidden="true" className="w-px h-5 bg-white/20" />

          {/* Featured page links — framed */}
          {featured.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  title={link.title}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-sm font-medium px-4 py-1.5 border border-gold/50 text-gold rounded hover:bg-gold hover:text-navy transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-3"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          className="md:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 mt-2"
        >
          <ul className="flex flex-col py-4 px-6 gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  title={link.title}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(link.href) ? "true" : undefined}
                  className={`block text-base transition-colors py-3 ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-white/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Featured page links — framed in mobile too */}
            <li aria-hidden="true" className="h-px bg-white/10 my-2" />
            <li className="flex gap-3">
              {featured.map((link) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    title={link.title}
                    onClick={() => setMenuOpen(false)}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex-1 text-center text-base px-5 py-3 border border-gold/50 text-gold rounded hover:bg-gold hover:text-navy transition-all"
                  >
                    {link.label}
                  </a>
                );
              })}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
