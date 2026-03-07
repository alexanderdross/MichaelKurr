export default function Footer() {
  return (
    <footer className="py-10 bg-navy-dark text-white/75 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm"
        >
          <a
            href="#about"
            title="Learn about Dr. Michael Kurr's background"
            className="hover:text-white transition-colors px-2"
          >
            About
          </a>
          <span className="text-white/20" aria-hidden="true">·</span>
          <a
            href="/advisory/"
            title="Fractional C-Level & Transformation Advisory"
            className="hover:text-white transition-colors px-2"
          >
            Advisory
          </a>
          <span className="text-white/20" aria-hidden="true">·</span>
          <a
            href="/transformation-circus/"
            title="The Transformation Circus"
            className="hover:text-white transition-colors px-2"
          >
            Transformation Circus
          </a>
          <span className="text-white/20" aria-hidden="true">·</span>
          <a
            href="https://www.linkedin.com/in/michaelkurr/recent-activity/all/"
            title="Read Dr. Kurr's latest posts and articles on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors px-2"
          >
            Blog
          </a>
          <span className="text-white/20" aria-hidden="true">·</span>
          <a
            href="/contact/"
            title="Get in touch with Dr. Michael Kurr"
            className="hover:text-white transition-colors px-2"
          >
            Contact
          </a>
          <span className="text-white/20" aria-hidden="true">·</span>
          <a
            href="/imprint/"
            title="Legal notice (Impressum)"
            className="hover:text-white transition-colors px-2"
          >
            Imprint
          </a>
          <span className="text-white/20" aria-hidden="true">·</span>
          <a
            href="/privacy-policy/"
            title="Privacy policy"
            className="hover:text-white transition-colors px-2"
          >
            Privacy
          </a>
        </nav>
        <p className="text-xs text-white/60">
          &copy; {new Date().getFullYear()} Dr. Michael A. Kurr. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
