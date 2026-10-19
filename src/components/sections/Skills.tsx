"use client";

/**
 * Skills — Section presenting technical capabilities categorized into:
 * 1. Frontend (Core proficiency)
 * 2. Currently Learning (Node.js, Express.js, MongoDB, REST APIs)
 * 3. Tools & Workflow
 *
 * Requirements met:
 * - Direct mapping from lib/data.ts (skillGroups).
 * - Honest junior framing with NO fake skill meters, percentages, or invented proficiency.
 * - Prominent "In Progress" indicator on the Currently Learning category.
 * - Responsive 3-column / 1-column grid.
 * - Framer Motion animations respecting reduced-motion preferences.
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Code2, Sparkles, Wrench, ArrowUpRight } from "lucide-react";
import { skillGroups } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const CARD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  // Helper to choose the group icon and description
  const getGroupMeta = (label: string) => {
    switch (label) {
      case "Frontend":
        return {
          icon: <Code2 className="text-primary" size={22} aria-hidden="true" />,
          subtitle: "Core stack for crafting responsive, interactive user interfaces.",
          badge: null,
        };
      case "Currently Learning":
        return {
          icon: <Sparkles className="text-primary" size={22} aria-hidden="true" />,
          subtitle: "Actively studying backend architecture and database integration.",
          badge: "Actively Learning",
        };
      case "Tools & Workflow":
      default:
        return {
          icon: <Wrench className="text-primary" size={22} aria-hidden="true" />,
          subtitle: "Version control, development tools, and deployment platforms.",
          badge: null,
        };
    }
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-20 md:py-28 px-6 border-t border-border/50"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills & Toolkit"
          title="Technologies I work with & explore"
          description="Honest snapshot of my current frontend competencies and the backend technologies I am expanding into."
        />

        {/* ── Skills Grid ────────────────────────────────────────────── */}
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={CONTAINER_VARIANTS}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {skillGroups.map((group) => {
            const meta = getGroupMeta(group.label);
            const isLearningGroup = group.label === "Currently Learning";

            return (
              <motion.div
                key={group.label}
                variants={CARD_VARIANTS}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 bg-surface transition-all duration-300 hover:border-primary/40 ${
                  isLearningGroup
                    ? "border-primary/30 shadow-[0_0_24px_rgba(16,185,129,0.05)]"
                    : "border-border"
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                        {meta.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {group.label}
                      </h3>
                    </div>

                    {meta.badge && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 border border-primary/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                        {meta.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-muted mb-6 leading-relaxed">
                    {meta.subtitle}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                          isLearningGroup
                            ? "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                            : "bg-background text-foreground border border-border/80 hover:border-primary/40 hover:text-primary"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle card bottom accent */}
                <div className="mt-6 pt-4 border-t border-border/50 text-xs text-muted flex items-center justify-between">
                  <span>
                    {group.skills.length} {group.skills.length === 1 ? "skill" : "technologies"}
                  </span>
                  {isLearningGroup && (
                    <span className="text-primary font-medium">In progress</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Learning in Public Banner ───────────────────────────────── */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-border bg-gradient-to-r from-surface via-surface to-primary/5 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div className="space-y-1.5 max-w-xl">
            <h4 className="text-lg font-bold text-foreground">
              Learning in Public & Solidifying Fundamentals
            </h4>
            <p className="text-sm text-muted leading-relaxed">
              I believe in transparent growth. Every week, I build hands-on code examples, read through Next.js and React docs, and expand into full-stack concepts with practical Node.js and MongoDB experiments.
            </p>
          </div>

          <a
            href="https://github.com/mhasan1224"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-background shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Explore on GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
