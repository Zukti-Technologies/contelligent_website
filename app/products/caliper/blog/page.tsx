import Link from "next/link";
import ComingSoon from "@/components/ComingSoon";
import { getBlogPosts, getPage } from "@/lib/content";
import { metaFrom } from "@/lib/seo";

export const metadata = metaFrom("caliper/blog/_index", "/products/caliper/blog/");

function formatDate(d: string) {
  if (!d) return "";
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? d : dt.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogIndex() {
  const { data } = getPage<{ title: string; intro?: string; emptyText: string }>("caliper/blog/_index");
  const posts = getBlogPosts();
  return (
    <>
      <section className="container-site pt-14 sm:pt-20">
        <p className="eyebrow">Caliper</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{data.title}</h1>
        {data.intro && <p className="mt-4 max-w-2xl text-lg text-ink-600">{data.intro}</p>}
      </section>
      {posts.length === 0 ? <ComingSoon text={data.emptyText} /> : (
        <section className="container-site grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/products/caliper/blog/${p.slug}/`} className="flex flex-col rounded-2xl border border-ink-100 p-6 hover:border-mint-300 hover:shadow-md">
              <p className="text-xs font-medium text-ink-300">{formatDate(p.date)}</p>
              <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
              {p.summary && <p className="mt-2 text-ink-600">{p.summary}</p>}
              <p className="mt-auto pt-4 text-sm font-semibold text-mint-700">Read →</p>
            </Link>
          ))}
        </section>
      )}
    </>
  );
}
