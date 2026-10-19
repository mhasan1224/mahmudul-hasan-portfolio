/**
 * app/page.tsx — Root page (single-page portfolio layout).
 *
 * Composes the portfolio sections in order:
 *   ✅ Navbar
 *   ✅ Hero
 *   ✅ About
 *   ✅ Skills
 *   ⬜ Projects (Upcoming)
 *   ⬜ Contact (Upcoming)
 *   ⬜ Footer (Upcoming)
 *
 * Remaining empty sections preserve scroll anchor targets (#projects, #contact)
 * for the Navbar and Hero CTA buttons until they are implemented.
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

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

        {/* ── Upcoming Sections (Anchor Placeholders) ────────────────────── */}
        <section
          id="projects"
          aria-label="Projects"
          className="min-h-[40vh]"
        />

        <section
          id="contact"
          aria-label="Contact"
          className="min-h-[40vh]"
        />
      </main>
    </>
  );
}
