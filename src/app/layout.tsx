import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

/**
 * Inter — variable font, self-hosted via next/font.
 * No external request is made to Google at runtime.
 * The CSS variable --font-inter is consumed in globals.css.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Static metadata — improves SEO and social sharing.
 * All values come from the single source of truth in lib/data.ts.
 */
export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Frontend Developer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} is a junior frontend developer based in ${siteConfig.location}, specialising in React and Next.js, and currently learning backend development with Node.js, Express.js, and MongoDB.`,
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Junior Developer",
    "Mahmudul Hasan",
    "Bangladesh",
    "Web Developer",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${siteConfig.name} Portfolio`,
    title: `${siteConfig.name} — Frontend Developer`,
    description: `Junior frontend developer specialising in React & Next.js, based in ${siteConfig.location}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Frontend Developer`,
    description: `Junior frontend developer specialising in React & Next.js.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      {/*
       * body: min-h-full ensures the page fills the viewport even on short
       * content pages. flex + flex-col lets sections stack vertically.
       */}
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
