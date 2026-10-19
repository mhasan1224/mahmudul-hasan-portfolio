"use client";

/**
 * Contact — Section encouraging recruiters, hiring managers, and collaborators
 * to reach out directly via verified email and professional social channels.
 *
 * Requirements met:
 * - Direct mailto: link using siteConfig.email (mhassan.merit@gmail.com).
 * - GitHub and LinkedIn links displayed only when valid URLs exist.
 * - One-click "Copy Email" action with accessible feedback (no fake nonfunctional forms).
 * - Clear, welcoming junior developer positioning.
 * - Accessible markup and reduced-motion support.
 */

import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Mail, Copy, Check, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";

const CARD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(false);
    }
  };

  const hasGithub = Boolean(siteConfig.github && siteConfig.github.trim() !== "");
  const hasLinkedin = Boolean(siteConfig.linkedin && siteConfig.linkedin.trim() !== "");

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 md:py-28 px-6 border-t border-border/50"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's build something meaningful"
          description="I'm actively looking for junior frontend roles, React/Next.js developer opportunities, and collaborative projects."
        />

        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={CARD_VARIANTS}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12 shadow-[0_0_40px_rgba(16,185,129,0.03)]"
        >
          {/* Subtle ambient emerald glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Message to recruiters & hiring managers */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 border border-primary/20">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                Available for hire
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Have a role, an idea, or feedback?
              </h3>

              <p className="text-muted text-base leading-relaxed">
                Whether you are a recruiter looking for a dedicated junior frontend developer, an engineer open to reviewing code, or someone wanting to discuss tech—my inbox is always open.
              </p>

              {/* Location indicator */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted pt-2">
                <MapPin size={16} className="text-primary shrink-0" aria-hidden="true" />
                <span>Based in {siteConfig.location} — Open to remote & on-site opportunities</span>
              </div>
            </div>

            {/* Right: Direct contact actions */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Primary: mailto email CTA */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center justify-between gap-3 rounded-2xl bg-primary px-6 py-4 text-background font-semibold text-base transition-all duration-200 hover:opacity-95 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg shadow-primary/20"
              >
                <div className="flex items-center gap-3">
                  <Mail size={20} aria-hidden="true" />
                  <span>Send an Email</span>
                </div>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>

              {/* Copy Email Button with visual feedback */}
              <div className="flex items-center justify-between gap-2 rounded-2xl border border-border bg-background/60 px-4 py-3 text-xs sm:text-sm text-muted">
                <span className="truncate font-mono text-foreground font-medium">
                  {siteConfig.email}
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={copied ? "Email address copied" : "Copy email address to clipboard"}
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-primary" aria-hidden="true" />
                      <span className="text-primary font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Professional Social Links */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {hasGithub && (
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile (opens in new tab)"
                    className="flex items-center justify-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-medium text-muted transition-all duration-200 hover:border-primary hover:text-primary hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <GitHubIcon size={16} aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                )}

                {hasLinkedin && (
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile (opens in new tab)"
                    className="flex items-center justify-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-medium text-muted transition-all duration-200 hover:border-primary hover:text-primary hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <LinkedInIcon size={16} aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
