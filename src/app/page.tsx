/**
 * app/page.tsx — Root page (single-page portfolio layout).
 *
 * This Server Component composes all sections in order.
 * Sections are imported as Client Components where they need
 * interactivity or browser APIs.
 *
 * Milestone progress:
 *   ✅ M2: Navbar, Hero
 *   ⬜ M3: About, Skills, Projects
 *   ⬜ M4: Contact, Footer
 *
 * The empty section elements below act as scroll targets for
 * the Navbar and Hero CTA links (#about, #skills, #projects, #contact).
 * They will be replaced with real content in upcoming milestones.
 */

import Navbar from "@/components/Navbar";
import Hero   from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* ── M2: visible ─────────────────────────────────────────────────── */}
        <Hero />

        {/* ── M3: scroll anchor placeholders — will be filled in next ─────── */}
        <section
          id="about"
          aria-label="About"
          className="min-h-[40vh]"
        />
        <section
          id="skills"
          aria-label="Skills"
          className="min-h-[40vh]"
        />
        <section
          id="projects"
          aria-label="Projects"
          className="min-h-[40vh]"
        />

        {/* ── M4: scroll anchor placeholders ──────────────────────────────── */}
        <section
          id="contact"
          aria-label="Contact"
          className="min-h-[40vh]"
        />
      </main>
    </>
  );
}
