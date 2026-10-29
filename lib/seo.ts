import type { Metadata } from "next";
import { getPage } from "./content";

export function metaFrom(relPath: string, canonical: string): Metadata {
  const { data } = getPage<{ seoTitle?: string; seoDescription?: string; title?: string }>(relPath);
  const title = data.seoTitle || data.title || "Contelligent";
  const description = data.seoDescription || undefined;
  return { title, description, alternates: { canonical }, openGraph: { title, description, url: canonical, siteName: "Contelligent", locale: "en_IN", type: "website" } };
}
