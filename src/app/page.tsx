/**
 * app/page.tsx — Root page (single-page portfolio layout).
 *
 * Composes the portfolio sections in order:
 *   ✅ Navbar
 *   ✅ Hero
 *   ✅ About
 *   ✅ Skills
 *   ✅ Projects
 *   ✅ Contact
 *   ✅ Footer
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </>
  );
}
