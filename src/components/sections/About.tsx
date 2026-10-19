"use client";

/**
 * About — Section presenting Mahmudul Hasan's background, current focus,
 * and working philosophy as a junior frontend developer.
 *
 * Requirements met:
 * - Honest junior/fresher positioning (no exaggerated experience or metrics).
 * - Highlights active learning of Node.js, Express.js, and MongoDB.
 * - Responsive 2-column layout (stacks cleanly on mobile/tablet).
 * - Accessible markup with semantic headings and reduced-motion support.
 * - Sourced directly from lib/data.ts.
 */

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { MapPin, Code2, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const CARD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = {
    initial: prefersReducedMotion ? (false as const) : "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-80px" },
    variants: CARD_VARIANTS,
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-20 md:py-28 px-6 border-t border-border/50"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About Me"
          title="Building with curiosity, code, and care"
          description="A look into my journey as a junior frontend developer and where I'm headed next."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* ── Left Column: Profile Card ────────────────────────────── */}
          <motion.div
            {...motionProps}
            className="lg:col-span-5 flex flex-col justify-between h-full rounded-2xl border border-border bg-surface p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Subtle emerald corner glow */}
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-primary/10 blur-2xl pointer-events-none"
            />

            <div>
              {/* Profile Photo at top of card */}
              <div className="relative mb-6 h-48 w-40 sm:h-56 sm:w-44 overflow-hidden rounded-2xl border border-primary/20 bg-primary/10 shadow-sm shrink-0">
                <Image
                  src="/images/profile.jpg"
                  alt={`Profile photo of ${siteConfig.name}`}
                  fill
                  sizes="180px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Name, Role, Location below photo */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {siteConfig.name}
                </h3>
                <p className="text-sm sm:text-base text-primary font-medium mt-1">
                  {siteConfig.role}
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-xs sm:text-sm text-muted">
                  <MapPin size={14} className="text-primary shrink-0" aria-hidden="true" />
                  <span>{siteConfig.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm border-t border-border/60 pt-5 mt-auto">
              <div>
                <span className="text-xs uppercase tracking-wider text-muted font-semibold block mb-1">
                  Primary Focus
                </span>
                <p className="text-foreground font-medium">
                  Modern Frontend with React & Next.js
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-muted font-semibold block mb-1">
                  Expanding Into
                </span>
                <p className="text-foreground font-medium">
                  Backend Foundations (Node.js, Express, MongoDB)
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-muted font-semibold block mb-1">
                  Current Status
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                  Open to junior roles & internships
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Bio & Core Values ──────────────────────── */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              {...motionProps}
              className="space-y-4 text-base sm:text-lg text-muted leading-relaxed"
            >
              {siteConfig.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>

            {/* Value cards showing honest, junior-developer strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <motion.div
                {...motionProps}
                className="rounded-xl border border-border/70 bg-surface/60 p-5 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                    <Code2 size={18} />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">
                    Clean & Modular Code
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-normal">
                  Writing readable, reusable React components with TypeScript type safety and semantic HTML.
                </p>
              </motion.div>

              <motion.div
                {...motionProps}
                className="rounded-xl border border-border/70 bg-surface/60 p-5 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                    <BookOpen size={18} />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">
                    Continuous Learning
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-normal">
                  Actively studying full-stack patterns, building practice projects, and reading official documentation.
                </p>
              </motion.div>

              <motion.div
                {...motionProps}
                className="rounded-xl border border-border/70 bg-surface/60 p-5 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                    <Layers size={18} />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">
                    Responsive & Accessible
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-normal">
                  Ensuring fluid layouts across devices, accessible keyboard navigation, and reduced-motion support.
                </p>
              </motion.div>

              <motion.div
                {...motionProps}
                className="rounded-xl border border-border/70 bg-surface/60 p-5 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                    <CheckCircle2 size={18} />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">
                    Team Player & Adaptable
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-normal">
                  Eager to receive code reviews, absorb engineering best practices, and contribute collaboratively.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
