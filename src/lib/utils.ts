/**
 * Utility helpers for the portfolio.
 */

/**
 * Merges class strings, filtering out falsy values.
 * Lightweight alternative to clsx for this project.
 *
 * @example cn("base", isActive && "active", undefined) → "base active"
 */
export function cn(
  ...classes: (string | undefined | false | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}
