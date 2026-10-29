import PageHero from "@/components/PageHero";
import SmartLink from "@/components/SmartLink";
import { getPage } from "@/lib/content";
import { metaFrom } from "@/lib/seo";

export const metadata = metaFrom("products", "/products/");

export default function ProductsPage() {
  const { data } = getPage<{ eyebrow: string; title: string; intro?: string; items: { name: string; logo: string; body: string; href: string; cta: string }[] }>("products");
  return (
    <>
      <PageHero eyebrow={data.eyebrow} title={data.title} subtitle={data.intro} />
      <section className="container-site grid gap-6 py-16 md:grid-cols-2">
        {data.items.map((p) => (
          <SmartLink key={p.name} href={p.href} className="flex flex-col rounded-2xl border border-ink-100 p-8 hover:border-mint-300 hover:shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.logo} alt={p.name} className="h-10 w-auto self-start" />
            <p className="mt-5 text-lg text-ink-600">{p.body}</p>
            <p className="mt-6 text-sm font-semibold text-mint-700">{p.cta} →</p>
          </SmartLink>
        ))}
      </section>
    </>
  );
}
