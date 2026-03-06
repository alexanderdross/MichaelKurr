export default function Footer() {
  return (
    <footer className="py-8 bg-navy-dark text-white/70 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dr. Michael A. Kurr. All rights
          reserved.
        </p>
        <nav aria-label="Footer navigation" className="flex items-center gap-6 text-sm">
          <a
            href="#about"
            title="Learn about Dr. Michael Kurr's background"
            className="hover:text-white/80 transition-colors"
          >
            About
          </a>
          <a
            href="#publications"
            title="View Dr. Kurr's published books and academic works"
            className="hover:text-white/80 transition-colors"
          >
            Publications
          </a>
          <a
            href="/transformation-circus/"
            title="The Transformation Circus — Leading Pharma Transformation in the Age of AI"
            className="hover:text-white/80 transition-colors"
          >
            Transformation Circus
          </a>
          <a
            href="/imprint/"
            title="Legal notice (Impressum) for michaelkurr.com"
            className="hover:text-white/80 transition-colors"
          >
            Imprint
          </a>
          <a
            href="/privacy-policy/"
            title="Privacy policy for michaelkurr.com"
            className="hover:text-white/80 transition-colors"
          >
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
}
