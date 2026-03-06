import { LinkedInIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-navy text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Connect
        </span>
        <h2 className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 group/heading">
          <a href="#contact" title="Contact Dr. Michael Kurr — Fractional C-Level Advisory & Pharma Consulting" className="hover:text-white/80 transition-colors">
            Let&rsquo;s Connect
            <span className="text-gold/0 group-hover/heading:text-gold/60 transition-colors ml-2 text-2xl" aria-hidden="true">#</span>
          </a>
        </h2>
        <p className="fade-in text-white/80 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Looking for fractional C-level support, strategic advisory, or
          transformation leadership in Pharma &amp; Life Sciences? I&rsquo;m
          always open to meaningful conversations.
        </p>
        <div className="fade-in flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://www.linkedin.com/in/michaelkurr/"
            target="_blank"
            rel="noopener noreferrer"
            title="Connect with Dr. Michael Kurr on LinkedIn"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-navy font-semibold text-lg rounded-lg hover:bg-gold-light transition-colors duration-200 shadow-lg shadow-gold/20"
          >
            <LinkedInIcon className="w-6 h-6" />
            Connect on LinkedIn
          </a>
        </div>

        <div className="fade-in flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <a
            href="/contact/"
            title="Contact Dr. Michael Kurr"
            className="inline-flex items-center gap-2 text-white/80 hover:text-gold transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            info@michaelkurr.com
          </a>
          <a
            href="tel:+4915205235286"
            title="Call Dr. Michael Kurr"
            className="inline-flex items-center gap-2 text-white/80 hover:text-gold transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +49 1520 5235286
          </a>
        </div>
      </div>
    </section>
  );
}
