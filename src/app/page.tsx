import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Impact from "@/components/Impact";
import Publications from "@/components/Publications";
import Leadership from "@/components/Leadership";
import Featured from "@/components/Featured";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Expertise />
        <Impact />
        <Publications />
        <Leadership />
        <Featured />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  );
}
