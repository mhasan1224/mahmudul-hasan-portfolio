"use client";

/**
 * Footer — Responsive, accessible footer for Mahmudul Hasan's portfolio.
 *
 * Requirements met:
 * - Clean design consistent with the deep navy and emerald theme.
 * - Dynamic current year, developer name, and role tagline from lib/data.ts.
 * - Verified GitHub and LinkedIn links from data source.
 * - Functional back-to-top anchor link to #hero.
 * - Accessible markup and semantic role="contentinfo".
 * - No invented personal details.
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";

const FOOTER_NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const hasGithub = Boolean(siteConfig.github && siteConfig.github.trim() !== "");
  const hasLinkedin = Boolean(siteConfig.linkedin && siteConfig.linkedin.trim() !== "");

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="border-t border-border bg-surface/70 py-12 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-border/50">
          {/* ── Brand & Tagline ───────────────────────────────────────── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <Link
              href="#hero"
              className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label={`${siteConfig.name}, scroll to top`}
            >
              <span className="text-primary" aria-hidden="true">{"<"}</span>
              MH
              <span className="text-primary" aria-hidden="true">{"/>"}</span>
            </Link>
            <p className="text-xs sm:text-sm text-muted max-w-sm">
              {siteConfig.role} specializing in React &amp; Next.js. Expanding into full-stack development with Node.js and MongoDB.
            </p>
          </div>

          {/* ── Quick Section Links ───────────────────────────────────── */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted">
              {FOOTER_NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Socials & Back-to-Top ─────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {hasGithub && (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in new tab)"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all duration-200 hover:border-primary hover:text-primary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <GitHubIcon size={16} aria-hidden="true" />
              </a>
            )}

            {hasLinkedin && (
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in new tab)"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all duration-200 hover:border-primary hover:text-primary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <LinkedInIcon size={16} aria-hidden="true" />
              </a>
            )}

            <a
              href="#hero"
              aria-label="Back to top of page"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/50 px-3 py-2 text-xs font-medium text-muted transition-all duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span>Top</span>
              <ArrowUp size={13} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ── Bottom Copyright Notice ─────────────────────────────────── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted/80 gap-3 text-center sm:text-left">
          <p>
            © {currentYear} {siteConfig.name}. Designed &amp; built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
          <p className="text-muted/60">
            Based in {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
