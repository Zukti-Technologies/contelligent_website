import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";
import CTABanner from "@/components/CTABanner";
import type { LogoItem } from "@/components/LogoGrid";
import { getPage, publicFileExists } from "@/lib/content";
import { metaFrom } from "@/lib/seo";

export const metadata = metaFrom("partners", "/partners/");

type Cta = { label: string; href: string };

export default function PartnersPage() {
  const { data } = getPage<{ eyebrow: string; title: string; intro?: string; comingSoon?: boolean; partners: LogoItem[]; becomePartner: { title: string; body: string; cta: Cta } }>("partners");
  return (
    <>
      <PageHero eyebrow={data.eyebrow} title={data.title} subtitle={data.intro} />
      {data.comingSoon ? <ComingSoon /> : (
        data.partners?.length > 0 && (
          <section className="container-site grid gap-5 py-16 md:grid-cols-3">
            {data.partners.map((p) => (
              <div key={p.name} className="rounded-2xl border border-ink-100 p-6">
                <div className="flex h-12 items-center">
                  {p.logo && publicFileExists(p.logo)
                    // eslint-disable-next-line @next/next/no-img-element
                    ? <img src={p.logo} alt={p.name} className="max-h-10 w-auto" />
                    : <h2 className="text-lg font-semibold">{p.name}</h2>}
                </div>
                {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-semibold text-mint-700">Visit website ↗</a>}
                {p.body && <p className="mt-4 text-ink-600">{p.body}</p>}
              </div>
            ))}
          </section>
        )
      )}
      {data.becomePartner?.title && <CTABanner title={data.becomePartner.title} body={data.becomePartner.body} primary={data.becomePartner.cta} />}
    </>
  );
}
