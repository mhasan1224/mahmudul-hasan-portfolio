/**
 * Shared TypeScript interfaces for the portfolio.
 * All profile data flows from lib/data.ts using these types.
 */

/** A single technology or tool in a skill group */
export interface Skill {
  name: string;
  /** Optional: icon name from Lucide (used in future milestones) */
  icon?: string;
}

/** A named group of related skills (e.g. "Frontend", "Tools") */
export interface SkillGroup {
  label: string;
  skills: Skill[];
}

/** A portfolio project card */
export interface Project {
  title: string;
  description: string;
  /** Tech stack tags shown on the card */
  tags: string[];
  githubUrl: string;
  /** Optional live demo URL — omit if not deployed */
  liveUrl?: string;
}

/** A social / contact link */
export interface SocialLink {
  label: string;
  href: string;
  /** Lucide icon name */
  icon: string;
}

/** Top-level site configuration */
export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  /** Path to resume PDF inside /public */
  resumePath: string;
  bio: string[];
  currentlyLearning: string[];
}
