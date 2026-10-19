"use client";

/**
 * Hero — the full-viewport introductory section.
 *
 * Design:
 * - Centred layout with a subtle radial emerald glow behind the text.
 * - Animated badge → name → role → learning line → bio → CTAs → socials.
 * - Staggered Framer Motion entrance; immediately visible when reduced-motion
 *   is preferred (initial={false} disables mount animations globally).
 * - "View Projects" scrolls to #projects; "Download Resume" triggers PDF download.
 * - Social icon buttons link to GitHub and LinkedIn in a new tab.
 * - A bouncing arrow at the bottom prompts the user to scroll to #about.
 *   The bounce animation is automatically suppressed by the globals.css
 *   prefers-reduced-motion media query.
 *
 * Content comes from lib/data.ts — never hardcoded in JSX.
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/lib/data";

// ── Animation variants ──────────────────────────────────────────────────────

/** Parent container: staggers children by 0.13 s each */
const CONTAINER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

/** Each child: fades up 20 px over 0.55 s */
const ITEM: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

// ── Component ───────────────────────────────────────────────────────────────

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  /**
   * When reduced motion is preferred:
   *   - initial={false} makes Framer skip mount animations entirely.
   *   - variants are still set so the DOM structure is identical.
   */
  const containerProps = {
    variants: CONTAINER,
    initial:  prefersReducedMotion ? (false as const) : "hidden",
    animate:  "visible",
  };

  const itemProps = { variants: ITEM };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Decorative background glow — pure CSS, no image dependency */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[520px] w-[520px] rounded-full bg-primary opacity-[0.06] blur-[130px]" />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        {...containerProps}
      >

        {/* Availability badge */}
        <motion.div {...itemProps} className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border
                           bg-surface px-4 py-2 text-sm font-medium text-muted">
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-primary"
              aria-hidden="true"
            />
            Open to junior / fresher opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...itemProps}
          id="hero-heading"
          className="mb-5 text-4xl font-extrabold tracking-tight text-foreground
                     sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-primary">Mahmudul Hasan</span>
        </motion.h1>

        {/* Role line */}
        <motion.p
          {...itemProps}
          className="mb-3 text-lg font-semibold text-muted sm:text-xl"
        >
          Frontend Developer{" "}
          <span className="mx-1 text-border" aria-hidden="true">|</span>{" "}
          React &amp; Next.js
        </motion.p>

        {/* Currently learning */}
        <motion.p {...itemProps} className="mb-8 text-sm text-muted sm:text-base">
          Currently learning{" "}
          {siteConfig.currentlyLearning.map((tech, i, arr) => (
            <span key={tech}>
              <span className="font-semibold text-primary">{tech}</span>
              {i < arr.length - 2 && ", "}
              {i === arr.length - 2 && " & "}
            </span>
          ))}
        </motion.p>

        {/* Bio — first paragraph only in the Hero; full bio in About */}
        <motion.p
          {...itemProps}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {siteConfig.bio[0]}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...itemProps}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary — scroll to projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary
                       px-7 py-3 text-sm font-semibold text-background
                       transition-all duration-200 hover:opacity-90 hover:scale-105
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            View Projects
            <ArrowDown size={15} aria-hidden="true" />
          </a>

          {/* Secondary — resume PDF download */}
          <a
            href={siteConfig.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border
                       bg-surface px-7 py-3 text-sm font-semibold text-foreground
                       transition-all duration-200 hover:border-primary hover:text-primary hover:scale-105
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Download Resume
            <Download size={15} aria-hidden="true" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...itemProps}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border
                       text-muted transition-all duration-200 hover:border-primary hover:text-primary hover:scale-110
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <GitHubIcon size={18} aria-hidden="true" />
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border
                       text-muted transition-all duration-200 hover:border-primary hover:text-primary hover:scale-110
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <LinkedInIcon size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll prompt — bounce animation disabled automatically by the
          globals.css prefers-reduced-motion media query */}
      <motion.a
        href="#about"
        aria-label="Scroll down to About section"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={prefersReducedMotion ? {}   : { opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted
                   transition-colors hover:text-primary
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
      >
        <ArrowDown size={20} className="animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
