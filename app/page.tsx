import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import CTABanner from "@/components/CTABanner";
import Prose from "@/components/Prose";
import SmartLink from "@/components/SmartLink";
import { getPage } from "@/lib/content";
import { metaFrom } from "@/lib/seo";
import { Icon } from "@/lib/icons";
import { Check } from "lucide-react";

export const metadata = metaFrom("home", "/");

type Cta = { label: string; href: string; external?: boolean };
type Home = {
  hero: { eyebrow: string; title: string; subtitle: string; primaryCta: Cta; secondaryCta: Cta };
  about: { eyebrow: string; title: string };
  name: { eyebrow: string; title: string; items: { heading: string; icon: string; body: string }[]; footnote: string };
  vision: { title: string; body: string };
  mission: { title: string; body: string; pointsTitle: string; points: string[] };
  offerings: {
    eyebrow: string; title: string;
    products: { name: string; logo: string; body: string; href: string; cta: string }[];
    services: { name: string; icon: string; body: string; href: string }[];
  };
  cta: { title: string; body: string; primary: Cta; secondary: Cta };
};

export default function HomePage() {
  const { data: d, html } = getPage<Home>("home");
  return (
    <>
      <PageHero size="lg" {...d.hero} />

      <section className="container-site grid gap-10 py-20 sm:py-24 lg:grid-cols-[1fr_1.3fr]">
        <SectionHeading eyebrow={d.about.eyebrow} title={d.about.title} />
        <Prose html={html} />
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow={d.name.eyebrow} title={d.name.title} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {d.name.items.map((it) => (
              <div key={it.heading} className="rounded-2xl border border-ink-100 bg-white p-8">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-4xl font-bold text-mint-700">{it.heading}</h3>
                  <Icon name={it.icon} className="h-5 w-5 text-ink-300" />
                </div>
                <p className="mt-4 leading-relaxed text-ink-600">{it.body}</p>
              </div>
            ))}
          </div>
          {d.name.footnote && <p className="mt-8 max-w-3xl text-ink-600">{d.name.footnote}</p>}
        </div>
      </section>

      <section className="container-site grid gap-6 py-20 sm:py-24">
        <div className="rounded-2xl bg-ink-800 p-8 sm:p-10">
          <p className="eyebrow text-mint-300">{d.vision.title}</p>
          <p className="mt-4 max-w-4xl font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">{d.vision.body}</p>
        </div>
        <div className="rounded-2xl border border-ink-100 p-8 sm:p-10">
          <p className="eyebrow">{d.mission.title}</p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-ink-700">{d.mission.body}</p>
          <p className="mt-6 text-sm font-semibold text-ink-800">{d.mission.pointsTitle}</p>
          <ul className="mt-3 grid gap-x-10 gap-y-2.5 lg:grid-cols-2">
            {d.mission.points.map((p) => (
              <li key={p} className="flex gap-3 text-ink-600">
                <Check className="mt-1 h-4 w-4 shrink-0 text-mint-700" aria-hidden="true" />{p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow={d.offerings.eyebrow} title={d.offerings.title} />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            {d.offerings.products.map((p) => (
              <SmartLink key={p.name} href={p.href} className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-8 hover:border-mint-300 hover:shadow-md">
                <p className="eyebrow">Product</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logo} alt={p.name} className="mt-5 h-10 w-auto self-start" />
                <p className="mt-5 text-lg leading-relaxed text-ink-600">{p.body}</p>
                <p className="mt-auto pt-6 text-sm font-semibold text-mint-700">{p.cta} →</p>
              </SmartLink>
            ))}
            <div className="grid gap-5">
              {d.offerings.services.map((s) => (
                <FeatureCard key={s.name} feature={{ title: s.name, icon: s.icon, body: s.body, href: s.href, cta: "Learn more" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner {...d.cta} />
    </>
  );
}
