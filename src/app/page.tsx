/**
 * app/page.tsx — Milestone 1 placeholder
 *
 * This file will be replaced in Milestone 2 with the full single-page layout
 * (Navbar + Hero + About + Skills + Projects + Contact + Footer).
 *
 * For now it renders a themed page that confirms:
 *   ✓ Inter font is loaded
 *   ✓ Navy background + emerald accent colours are working
 *   ✓ Tailwind v4 utility classes (bg-background, text-primary, etc.) compile
 *   ✓ The layout fills the full viewport
 */

import { siteConfig } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      {/* Emerald accent dot — visual check that the primary colour is applied */}
      <span
        className="inline-block h-3 w-3 rounded-full bg-primary"
        aria-hidden="true"
      />

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {siteConfig.name}
      </h1>

      <p className="text-lg text-muted max-w-md">
        {siteConfig.role} — Milestone 1 scaffold complete.
        <br />
        Full portfolio coming in the next milestone.
      </p>

      {/* Theme swatch grid — confirms all colour tokens are resolving */}
      <div
        className="mt-8 grid grid-cols-3 gap-3 text-xs"
        aria-label="Theme colour swatches"
      >
        {[
          { label: "background", cls: "bg-background border border-border" },
          { label: "surface",    cls: "bg-surface" },
          { label: "primary",    cls: "bg-primary" },
          { label: "primary-dark", cls: "bg-primary-dark" },
          { label: "foreground", cls: "bg-foreground" },
          { label: "muted",      cls: "bg-muted" },
        ].map(({ label, cls }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div className={`h-10 w-16 rounded ${cls}`} />
            <span className="text-muted">{label}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
