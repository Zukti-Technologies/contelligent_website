import { notFound } from "next/navigation";
import Link from "next/link";
import Prose from "@/components/Prose";
import { getBlogPosts } from "@/lib/content";

export const dynamicParams = false;

// Static export needs at least one param; a hidden placeholder keeps the build working while there are no posts.
const PLACEHOLDER = "__no-posts__";

export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: PLACEHOLDER }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPosts().find((p) => p.slug === slug);
  if (!post) return { title: "Caliper blog", robots: { index: false } };
  return { title: `${post.title} | Caliper blog`, description: post.summary, alternates: { canonical: `/products/caliper/blog/${slug}/` } };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPosts().find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <article className="container-site max-w-3xl py-14 sm:py-20">
      <Link href="/products/caliper/blog/" className="text-sm font-semibold text-mint-700">← All posts</Link>
      <h1 className="mt-6 text-4xl font-bold sm:text-5xl">{post.title}</h1>
      <p className="mt-4 text-sm text-ink-600">{[post.author, post.date].filter(Boolean).join(" · ")}</p>
      <Prose html={post.html} className="mt-10" />
    </article>
  );
}
