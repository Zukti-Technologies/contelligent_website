import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";
import LogoGrid, { type LogoItem } from "@/components/LogoGrid";
import { getPage } from "@/lib/content";
import { metaFrom } from "@/lib/seo";

export const metadata = metaFrom("customers", "/customers/");

type Story = { name: string; role?: string; company?: string; quote: string };

export default function CustomersPage() {
  const { data } = getPage<{ eyebrow: string; title: string; intro?: string; comingSoon?: boolean; logos: LogoItem[]; stories: Story[] }>("customers");
  return (
    <>
      <PageHero eyebrow={data.eyebrow} title={data.title} subtitle={data.intro} />
      {data.comingSoon ? <ComingSoon /> : (
        <>
          {data.logos?.length > 0 && <section className="container-site py-16"><LogoGrid items={data.logos} columns={4} /></section>}
          {data.stories?.length > 0 && (
            <section className="container-site grid gap-6 pb-16 md:grid-cols-2">
              {data.stories.map((s) => (
                <figure key={s.name + s.company} className="rounded-2xl border border-ink-100 bg-paper p-8">
                  <blockquote className="text-lg leading-relaxed text-ink-700">“{s.quote}”</blockquote>
                  <figcaption className="mt-5 text-sm"><span className="font-semibold text-ink-800">{s.name}</span>{s.role && `, ${s.role}`}{s.company && `, ${s.company}`}</figcaption>
                </figure>
              ))}
            </section>
          )}
        </>
      )}
    </>
  );
}
