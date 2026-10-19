import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

/**
 * Inter — variable font, self-hosted via next/font.
 * No external network request is made to Google at runtime.
 * The CSS variable --font-inter is consumed in globals.css.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Viewport configuration for responsive mobile devices and dark theme styling.
 */
export const viewport: Viewport = {
  themeColor: "#0a0f1e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/**
 * Static metadata for SEO and social discoverability.
 * Accurately represents Mahmudul Hasan's junior/fresher developer profile
 * without inventing metrics, credentials, or mock preview assets.
 */
export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Junior Frontend Developer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} is a junior frontend developer based in ${siteConfig.location}, building clean, accessible web applications with React, Next.js, and TypeScript, and actively expanding into backend development with Node.js, Express.js, and MongoDB.`,
  keywords: [
    "Mahmudul Hasan",
    "Junior Frontend Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer Bangladesh",
    "Gazipur",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: `${siteConfig.name} Portfolio`,
    title: `${siteConfig.name} | Junior Frontend Developer`,
    description: `Junior frontend developer based in ${siteConfig.location}, crafting clean web experiences with React & Next.js, and learning Node.js & MongoDB.`,
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} | Junior Frontend Developer`,
    description: `Junior frontend developer specializing in React & Next.js, learning Node.js & MongoDB.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
