"use client";

/**
 * Navbar — sticky, responsive navigation header.
 *
 * Behaviour:
 * - Transparent at page top; gains a frosted-glass background on scroll.
 * - Desktop: logo | nav links | resume button (all in one row).
 * - Mobile:  logo | hamburger button; menu slides in below the bar.
 * - Escape key and clicking a link both close the mobile menu.
 * - Framer Motion animations are skipped when the user prefers reduced motion.
 *
 * This is a Client Component because it uses:
 *   - useState (mobile menu toggle)
 *   - useEffect (scroll listener + Escape key handler)
 *   - useReducedMotion (from framer-motion)
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/data";

/** In-page anchor links — add/remove sections here to update the nav. */
const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]  = useState(false);
  const prefersReducedMotion         = useReducedMotion();

  /** Show/hide the blurred header background based on scroll position. */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Close the mobile menu when the user presses Escape. */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      {/* Accessible skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-background focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* ── Main bar ────────────────────────────────────────────────────────── */}
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo / Brand with circular avatar — navigates to top of page */}
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded text-base sm:text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`${siteConfig.name}, go to homepage`}
        >
          <span className="relative h-8 w-8 overflow-hidden rounded-full border border-primary/30 shrink-0">
            <Image
              src="/images/profile.jpg"
              alt={`Avatar of ${siteConfig.name}`}
              width={32}
              height={32}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span>
            <span className="text-primary" aria-hidden="true">{"<"}</span>
            {siteConfig.name}
            <span className="text-primary" aria-hidden="true">{"/>"}</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden gap-8 md:flex" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium text-muted transition-colors hover:text-primary
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop resume CTA */}
        <a
          href={siteConfig.resumePath}
          download
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary
                     px-5 py-2 text-sm font-semibold text-primary
                     transition-all hover:bg-primary hover:text-background
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="rounded p-2 text-muted transition-colors hover:text-primary md:hidden
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {isMenuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* ── Mobile dropdown ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation menu"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={prefersReducedMotion ? {}   : { opacity: 1, y:  0 }}
            exit={prefersReducedMotion    ? {}   : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-b border-border bg-surface px-6 pb-6 pt-2 md:hidden"
          >
            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="block rounded px-2 py-3 text-base font-medium text-muted
                               transition-colors hover:text-primary
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}

              <li className="mt-3 border-t border-border pt-4">
                <a
                  href={siteConfig.resumePath}
                  download
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center rounded-full border border-primary
                             px-5 py-2.5 text-sm font-semibold text-primary
                             transition-all hover:bg-primary hover:text-background
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
