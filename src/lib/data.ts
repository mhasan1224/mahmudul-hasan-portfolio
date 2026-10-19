/**
 * Single source of truth for all portfolio content.
 *
 * HOW TO UPDATE YOUR SITE:
 * - Edit this file to change your name, bio, skills, projects, or links.
 * - No other files need to change for content updates.
 *
 * HONESTY RULE: Never invent experience, metrics, or achievements.
 * Only include real projects, real skills, and honest descriptions.
 */

import type { SiteConfig, SkillGroup, Project, SocialLink } from "@/types";

// ─── Site Configuration ───────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  name: "Mahmudul Hasan",
  role: "Frontend Developer",
  location: "Gazipur, Bangladesh",
  email: "mhassan.merit@gmail.com",
  github: "https://github.com/mhasan1224",
  linkedin: "https://linkedin.com/in/mahmudul-hasan-oasel",
  resumePath: "/resume.pdf", // Drop your resume PDF in the /public folder
  bio: [
    "I'm a junior frontend developer based in Gazipur, Bangladesh, passionate about building clean, accessible, and performant web experiences.",
    "I work with React and Next.js to craft modern UIs, and I'm actively expanding my skills into backend development with Node.js, Express.js, and MongoDB.",
    "I enjoy learning in public, contributing to open source, and turning ideas into real, working products.",
  ],
  currentlyLearning: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
};

// ─── Social Links ─────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: "Github",
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: "Linkedin",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: "Mail",
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    label: "Currently Learning",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "REST APIs" },
    ],
  },
  {
    label: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Figma (basics)" },
      { name: "npm / pnpm" },
      { name: "Vercel" },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
//
// Add your real GitHub projects here.
// Leave liveUrl undefined if the project is not deployed.
//
// Placeholder projects are included to demonstrate the layout.
// Replace them with your own work before publishing.

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js 16, TypeScript, and Tailwind CSS. Features a dark navy theme, smooth animations, and a focus on accessibility and performance.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/mhasan1224/mahmudul-hasan-portfolio",
    liveUrl: undefined,
  },
  {
    title: "Bazardor — বাজার দর",
    description:
      "A Bangla market price web application that allows users to explore product prices by category, view product details, and access their accounts using Google and GitHub authentication.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    githubUrl: "https://github.com/mhasan1224/bazardor",
    liveUrl: "https://bazardor-flame.vercel.app/",
  },
  {
    title: "FitLog — Workout Planner",
    description:
      "A workout planning application where users can browse workouts, view exercise details, create daily workout plans, save workouts for later, and manage their plans.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React Context", "Local Storage"],
    githubUrl: "https://github.com/mhasan1224/fit-log",
    liveUrl: "https://fit-log-amber-eight.vercel.app/",
  },
];
