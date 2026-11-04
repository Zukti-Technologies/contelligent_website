import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// All site copy lives in /content as markdown files.
// - Front matter (the YAML block between the --- lines) holds structured text: titles, lists, cards, FAQs.
// - The body below the front matter holds long-form prose and is rendered as HTML.
// Edit a file, commit and push: Vercel rebuilds the site.

const CONTENT_DIR = path.join(process.cwd(), "content");

export type Page<T = Record<string, any>> = { data: T; html: string };

export function getPage<T = Record<string, any>>(relPath: string): Page<T> {
  const file = path.join(CONTENT_DIR, relPath.endsWith(".md") ? relPath : `${relPath}.md`);
  if (!fs.existsSync(file)) {
    throw new Error(`Content file missing: content/${relPath}. Create it or fix the path.`);
  }
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { data: data as T, html: renderMarkdown(content) };
}

export function renderMarkdown(md: string): string {
  if (!md || !md.trim()) return "";
  return marked.parse(md, { async: false }) as string;
}

/** Inline markdown (bold, links) for short strings in front matter. */
export function inline(md?: string): string {
  if (!md) return "";
  return marked.parseInline(md, { async: false }) as string;
}

export type SiteConfig = {
  companyName: string;
  legalName: string;
  shortDescription: string;
  tagline: string;
  email: string;
  phone?: string;
  address: string[];
  headquarters?: string;
  caliperSite?: string;
  cin?: string;
  gstin?: string;
  logo: { file: string; fileDark: string; alt: string };
  caliperLogo: { file: string; fileDark: string; alt: string };
  ctaBand: { title: string; body: string; primary: Cta; secondary: Cta };
  copyrightYear: number;
};

export type Cta = { label: string; href: string };

export function getSite(): SiteConfig {
  return getPage<SiteConfig>("site").data;
}

export type NavLink = { label: string; href: string; description?: string; page?: string; all?: boolean; sub?: boolean };
export type NavMenu = { label: string; narrow?: boolean; links: NavLink[] };
export type Navigation = {
  menus: NavMenu[];
  headerLink: Cta;
  headerButton: Cta;
  mobile: NavLink[];
  footerColumns: { title: string; links: NavLink[] }[];
};

export function getNavigation(): Navigation {
  return getPage<Navigation>("navigation").data;
}

/** True if a file exists under /public. */
export function publicFileExists(publicPath?: string): boolean {
  if (!publicPath) return false;
  return fs.existsSync(path.join(process.cwd(), "public", publicPath.replace(/^\//, "")));
}
