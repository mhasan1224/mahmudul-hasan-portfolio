interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/**
 * Reusable SectionHeader component for consistent section headings.
 * Includes an emerald eyebrow tag, semantic h2 title, and optional description.
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCentered ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      }`}
    >
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
