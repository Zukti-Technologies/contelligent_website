import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// All site copy lives in /content as markdown files.
// - Front matter (the YAML block between the --- lines) holds structured text: titles, lists, cards, FAQs.
// - The body below the front matter holds long-form prose and is rendered as HTML.
// Edit a file, run `npm run build`, and redeploy /out.

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
  email: string;
  address: string[];
  cin?: string;
  gstin?: string;
  linkedin?: string;
  caliperLinkedin?: string;
  calendlyUrl: string;
  portalUrl: string;
  signupUrl: string;
  logo: { file: string; fileLight?: string; alt: string };
  copyrightYear: number;
};

export function getSite(): SiteConfig {
  return getPage<SiteConfig>("site").data;
}

/** style: how a header/footer link is drawn. "primary" (mint button), "dark" (dark button), "outline" (outlined button), "link" (plain text). */
export type NavLink = { label: string; href: string; external?: boolean; description?: string; style?: "primary" | "dark" | "outline" | "link" };
export type NavColumn = { title: string; href?: string; links: NavLink[] };
/** A top-level menu item: a plain link, a simple dropdown (children) or a multi-column menu (columns). */
export type NavItem = { label: string; href?: string; external?: boolean; children?: NavLink[]; columns?: NavColumn[] };
export type Navigation = {
  main: NavItem[];
  headerCtas: NavLink[];
  footerColumns: { title: string; links: NavLink[] }[];
};

export function getNavigation(): Navigation {
  return getPage<Navigation>("navigation").data;
}

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author?: string;
  summary?: string;
  draft?: boolean;
  html: string;
};

const BLOG_DIR = path.join(CONTENT_DIR, "caliper", "blog");

/** Published posts only. Files starting with "_" and posts with `draft: true` are skipped. */
export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(BLOG_DIR, f), "utf8"));
      return {
        slug: f.replace(/\.md$/, ""),
        title: data.title ?? f,
        date: data.date ? String(data.date instanceof Date ? data.date.toISOString().slice(0, 10) : data.date) : "",
        author: data.author,
        summary: data.summary,
        draft: Boolean(data.draft),
        html: renderMarkdown(content),
      };
    })
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** True if a file exists under /public. Used to fall back to placeholders for missing images and logos. */
export function publicFileExists(publicPath?: string): boolean {
  if (!publicPath) return false;
  return fs.existsSync(path.join(process.cwd(), "public", publicPath.replace(/^\//, "")));
}
