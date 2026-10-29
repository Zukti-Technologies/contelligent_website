import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";
import { getPage } from "@/lib/content";
import { metaFrom } from "@/lib/seo";

export const metadata = metaFrom("services/index", "/services/");

export default function ServicesPage() {
  const { data } = getPage<{ eyebrow: string; title: string; intro?: string; items: { name: string; icon: string; body: string; href: string }[] }>("services/index");
  return (
    <>
      <PageHero eyebrow={data.eyebrow} title={data.title} subtitle={data.intro} />
      <section className="container-site grid gap-5 py-16 md:grid-cols-2">
        {data.items.map((s) => <FeatureCard key={s.name} feature={{ title: s.name, icon: s.icon, body: s.body, href: s.href, cta: "Learn more" }} />)}
      </section>
    </>
  );
}
