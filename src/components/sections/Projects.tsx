"use client";

/**
 * Projects — Section displaying Mahmudul Hasan's featured work and repositories.
 *
 * Requirements met:
 * - Direct mapping from lib/data.ts (projects array).
 * - Displays project title, description, technology stack tags, and links.
 * - Handles missing live links gracefully (no broken links).
 * - No invented metrics, stats, or fake client testimonials.
 * - Subtle hover effects and Framer Motion entrance respecting reduced-motion preferences.
 * - Accessible links with descriptive aria-labels and target="_blank" rel="noopener noreferrer".
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FolderGit2, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects, siteConfig } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { GitHubIcon } from "@/components/ui/BrandIcons";

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

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-20 md:py-28 px-6 border-t border-border/50"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Featured Work"
          title="Projects I've built & crafted"
          description="A selection of my recent codebases, personal projects, and learning experiments."
        />

        {/* ── Project Cards Grid ──────────────────────────────────────── */}
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={CONTAINER_VARIANTS}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {projects.map((project) => {
            const hasLiveUrl = Boolean(project.liveUrl);

            return (
              <motion.article
                key={project.title}
                variants={CARD_VARIANTS}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]"
              >
                <div>
                  {/* Top card row: Folder icon + External links */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                      <FolderGit2 size={24} aria-hidden="true" />
                    </div>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition-all duration-200 hover:border-primary hover:text-primary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <GitHubIcon size={18} aria-hidden="true" />
                        </a>
                      )}

                      {hasLiveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit live demo of ${project.title} (opens in new tab)`}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition-all duration-200 hover:border-primary hover:text-primary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <ExternalLink size={18} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Bottom row: Tech stack tags + Link status */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-background text-muted border border-border/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Accessible action footer */}
                  <div className="mt-5 flex items-center justify-between text-xs pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      <span>Explore Repository</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>

                    {hasLiveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-muted/70 italic text-[11px]">
                        Demo link coming soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ── More Projects on GitHub Callout ─────────────────────────── */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <GitHubIcon size={18} aria-hidden="true" />
            <span>See more repositories on GitHub</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
