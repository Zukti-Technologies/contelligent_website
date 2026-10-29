import PageHero from "./PageHero";
import FeatureCard, { type Feature } from "./FeatureCard";
import CTABanner from "./CTABanner";
import ComingSoon from "./ComingSoon";
import Prose from "./Prose";
import { getPage } from "@/lib/content";

type Cta = { label: string; href: string; external?: boolean };
type ServiceData = { eyebrow: string; title: string; intro?: string; comingSoon?: boolean; offerings: Feature[]; cta: { title: string; body?: string; primary: Cta } };

/** Shared template for /services/business-plan and /services/consulting, driven by content/services/<slug>.md */
export default function ServicePage({ slug }: { slug: string }) {
  const { data, html } = getPage<ServiceData>(`services/${slug}`);
  const strippedHtml = html.replace(/<!--[\s\S]*?-->/g, "").trim();
  return (
    <>
      <PageHero eyebrow={data.eyebrow} title={data.title} subtitle={data.intro} />
      {data.comingSoon ? <ComingSoon /> : (
        <>
          {strippedHtml && <section className="container-site max-w-3xl py-16"><Prose html={strippedHtml} /></section>}
          {data.offerings?.length > 0 && (
            <section className="container-site grid gap-5 pb-16 sm:grid-cols-2 lg:grid-cols-3">
              {data.offerings.map((o) => <FeatureCard key={o.title} feature={o} />)}
            </section>
          )}
        </>
      )}
      <CTABanner title={data.cta.title} body={data.cta.body} primary={data.cta.primary} />
    </>
  );
}
