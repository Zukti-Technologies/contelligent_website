import CalendlyEmbed from "@/components/CalendlyEmbed";
import { getPage, getSite } from "@/lib/content";
import { metaFrom } from "@/lib/seo";

export const metadata = metaFrom("caliper/demo", "/products/caliper/demo/");

export default function DemoPage() {
  const { data } = getPage<{ title: string; intro: string; fallbackText: string; fallbackLinkLabel: string }>("caliper/demo");
  const site = getSite();
  return (
    <section className="container-site py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Caliper</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{data.title}</h1>
        {data.intro && <p className="mt-4 text-lg text-ink-600">{data.intro}</p>}
      </div>
      <div className="mx-auto mt-10 max-w-4xl">
        <CalendlyEmbed url={site.calendlyUrl} fallbackText={data.fallbackText} fallbackLinkLabel={data.fallbackLinkLabel} />
      </div>
    </section>
  );
}
