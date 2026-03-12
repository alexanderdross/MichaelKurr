import Image from "next/image";
import { LinkedInIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 flex flex-col lg:flex-row items-center gap-6 sm:gap-10 lg:gap-16 py-16 sm:py-24 pb-20 sm:pb-32 lg:pb-24">
        {/* Photo */}
        <div className="shrink-0">
          <div className="relative w-36 h-36 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-gold/30 shadow-2xl">
            <Image
              src="/images/profile.jpg"
              alt="Dr. Michael Kurr - professional headshot"
              width={800}
              height={800}
              sizes="(max-width: 640px) 144px, (max-width: 1024px) 224px, 256px"
              priority
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <p className="fade-in text-gold font-body text-sm sm:text-lg tracking-[0.15em] uppercase mb-0 sm:mb-1">
            Dr.
          </p>
          <h1 className="fade-in font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-6 leading-tight">
            <span className="sr-only">Dr. </span>Michael Kurr
          </h1>
          <p className="fade-in text-base sm:text-xl text-white/80 font-light max-w-2xl mb-4 sm:mb-8 leading-relaxed">
            Operator &amp; Transformation Leader{" "}
            <span className="text-gold">·</span> Fractional C-Level{" "}
            <span className="text-gold">·</span> Pharma &amp; Life Sciences
          </p>
          <blockquote className="fade-in text-lg sm:text-2xl font-light italic text-white/70 max-w-xl mb-8 sm:mb-12">
            &ldquo;Building organizations from the ground up that redefine
            industry standards.&rdquo;
          </blockquote>
          <div className="fade-in flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="https://www.linkedin.com/in/michaelkurr/"
              target="_blank"
              rel="noopener noreferrer"
              title="Connect with Dr. Michael Kurr on LinkedIn"
              className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-gold-light text-navy font-semibold rounded hover:bg-gold transition-colors duration-200 text-sm sm:text-base"
            >
              <LinkedInIcon className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="#publications"
              title="View published books and academic works by Dr. Kurr"
              className="inline-flex items-center px-5 sm:px-7 py-2.5 sm:py-3 border border-white/30 text-white rounded hover:border-gold hover:text-gold transition-colors duration-200 text-sm sm:text-base"
            >
              Publications
            </a>
            <a
              href="/contact/"
              title="Get in touch with Dr. Michael Kurr"
              className="inline-flex items-center px-5 sm:px-7 py-2.5 sm:py-3 border border-white/30 text-white rounded hover:border-gold hover:text-gold transition-colors duration-200 text-sm sm:text-base"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on small screens to avoid overlap */}
      <a
        href="#about"
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-white/60 hover:text-white/80 transition-colors duration-200 cursor-pointer"
        aria-label="Scroll down to About section"
      >
        <span className="text-xs tracking-widest uppercase text-white/70">
          Scroll to explore
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </a>
    </section>
  );
}
