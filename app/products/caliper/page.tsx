import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard, { type Feature } from "@/components/FeatureCard";
import ImageOrPlaceholder from "@/components/ImageOrPlaceholder";
import FAQList, { type FAQ } from "@/components/FAQList";
import CTABanner from "@/components/CTABanner";
import LogoGrid, { type LogoItem } from "@/components/LogoGrid";
import SmartLink from "@/components/SmartLink";
import { getPage, publicFileExists } from "@/lib/content";
import { ScreenshotGallery, ScreenshotTrigger } from "@/components/ScreenshotGallery";
import type { LightboxItem } from "@/components/Lightbox";
import { metaFrom } from "@/lib/seo";
import { Icon } from "@/lib/icons";
import { ArrowRight, Check, X, CircleCheck } from "lucide-react";

export const metadata = metaFrom("caliper/caliper", "/products/caliper/");

type Cta = { label: string; href: string; external?: boolean };
type CaliperData = {
  hero: { eyebrow: string; title: string; subtitle: string; tagline?: string; chips?: string[]; primaryCta: Cta; secondaryCta: Cta; image: string; imageAlt: string };
  trustedBy: { title: string; logos: LogoItem[] };
  problem: { eyebrow: string; title: string; body: string; chain: string[] };
  solution: { eyebrow: string; title: string; body: string; flow: { title: string; caption: string; icon: string; highlight?: boolean }[]; promises: string[] };
  features: { eyebrow: string; title: string; intro?: string; items: Feature[] };
  screens: { eyebrow: string; title: string; note?: string; items: { title: string; image: string; thumb?: string; alt: string }[] };
  benefits: { eyebrow: string; title: string; intro?: string; columns: { label: string; before: string; after: string }; rows: { label: string; before: string; after: string }[] };
  audiences: { eyebrow: string; title: string; items: Feature[] };
  security: { eyebrow: string; title: string; intro?: string; items: Feature[]; cta?: Cta };
  integrations: {
    eyebrow: string; title: string; intro: string;
    available: { label: string; name: string; points: string[] };
    plannedLabel: string; planned: { name: string; type: string }[]; plannedStatus: string; disclaimer?: string;
  };
  getStarted: { eyebrow: string; title: string; steps: { title: string; body: string }[] };
  faqSection: { eyebrow: string; title: string };
  cta: { title: string; body: string; primary: Cta; secondary: Cta };
};

export default function CaliperPage() {
  const { data: d } = getPage<CaliperData>("caliper/caliper");
  const { data: faqs } = getPage<{ items: FAQ[] }>("caliper/faqs");

  // Screenshots that exist in /public open in the full-screen lightbox (hero + "What you see").
  const shots: LightboxItem[] = d.screens.items
    .filter((s) => publicFileExists(s.image))
    .map((s) => ({ src: s.image, thumb: s.thumb && publicFileExists(s.thumb) ? s.thumb : undefined, alt: s.alt, title: s.title }));
  const heroIndex = shots.findIndex((s) => s.src === d.hero.image);

  return (
    <>
      {/* Hero (deck p.1) */}
      <PageHero size="lg" eyebrow={d.hero.eyebrow} title={d.hero.title} subtitle={d.hero.subtitle}
        primaryCta={d.hero.primaryCta} secondaryCta={d.hero.secondaryCta}>
        <div>
          {d.hero.tagline && <p className="mb-4 font-display text-lg font-semibold text-mint-300">{d.hero.tagline}</p>}
          {heroIndex >= 0
            ? <ScreenshotTrigger items={shots} start={heroIndex} dark />
            : <ImageOrPlaceholder src={d.hero.image} alt={d.hero.imageAlt} dark />}
          {d.hero.chips?.length ? (
            <ul className="mt-5 flex flex-wrap gap-2">
              {d.hero.chips.map((c) => (
                <li key={c} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-ink-100">{c}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </PageHero>

      {/* Trusted by (deck p.10) */}
      {d.trustedBy.logos?.length > 0 && (
        <section className="border-b border-ink-100 py-12">
          <div className="container-site">
            <p className="mb-8 text-center font-display text-lg font-semibold text-ink-700">{d.trustedBy.title}</p>
            <LogoGrid items={d.trustedBy.logos} columns={4} />
          </div>
        </section>
      )}

      {/* Problem (deck p.2) */}
      {d.problem.title && (
        <section className="container-site grid items-center gap-10 py-20 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading eyebrow={d.problem.eyebrow} title={d.problem.title} intro={d.problem.body} />
          </div>
          <ol className="space-y-3">
            {d.problem.chain.map((c, i) => (
              <li key={c} className={`flex items-center justify-between rounded-xl px-5 py-4 text-sm font-semibold uppercase tracking-wider ${i === 0 ? "bg-ink-800 text-white" : "border border-ink-800 text-ink-800"}`}>
                {c}
                {i < d.problem.chain.length - 1 && <ArrowRight className="h-4 w-4 rotate-90 text-mint-500" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Solution (deck p.3) */}
      {d.solution.title && (
        <section id="how-it-works" className="bg-paper py-20 sm:py-24">
          <div className="container-site">
            <SectionHeading eyebrow={d.solution.eyebrow} title={d.solution.title} intro={d.solution.body} />
            <div className="mt-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              {d.solution.flow.map((f, i) => (
                <div key={f.title} className="contents">
                  <div className={`flex flex-col items-center rounded-2xl p-8 text-center ${f.highlight ? "bg-ink-800 text-white shadow-lg" : "border border-ink-100 bg-white"}`}>
                    <span className={`flex h-14 w-14 items-center justify-center rounded-full ${f.highlight ? "bg-white/10 text-mint-300" : "bg-mint-50 text-mint-700"}`}>
                      <Icon name={f.icon} className="h-6 w-6" />
                    </span>
                    <h3 className={`mt-5 text-xl font-semibold ${f.highlight ? "text-white" : ""}`}>{f.title}</h3>
                    <p className={`mt-2 text-sm ${f.highlight ? "text-mint-300" : "text-ink-600"}`}>{f.caption}</p>
                  </div>
                  {i < d.solution.flow.length - 1 && (
                    <div className="flex items-center justify-center" aria-hidden="true">
                      <ArrowRight className="h-5 w-5 rotate-90 text-mint-700 md:rotate-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {d.solution.promises.map((p) => (
                <li key={p} className="flex items-center justify-center gap-2 rounded-xl border border-ink-100 bg-white px-4 py-4 font-semibold text-ink-800">
                  <CircleCheck className="h-5 w-5 text-mint-700" aria-hidden="true" />{p}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Features (deck p.4) */}
      <section id="features" className="container-site py-20 sm:py-24">
        <SectionHeading eyebrow={d.features.eyebrow} title={d.features.title} intro={d.features.intro} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {d.features.items.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
        </div>
      </section>

      {/* What you see (deck p.5) */}
      {d.screens.title && (
        <section id="product" className="bg-paper py-20 sm:py-24">
          <div className="container-site">
            <SectionHeading eyebrow={d.screens.eyebrow} title={d.screens.title} />
            <ScreenshotGallery items={shots} note={d.screens.note} />
          </div>
        </section>
      )}

      {/* Benefits: comparison (deck p.6) */}
      <section id="benefits" className="container-site py-20 sm:py-24">
        <SectionHeading eyebrow={d.benefits.eyebrow} title={d.benefits.title} intro={d.benefits.intro} />
        <div className="mt-12 overflow-hidden rounded-2xl border border-ink-100">
          <div className="hidden grid-cols-[1fr_1.6fr_1.6fr] text-xs font-semibold uppercase tracking-[0.14em] md:grid">
            <div className="bg-white px-6 py-4 text-ink-300">{d.benefits.columns.label}</div>
            <div className="bg-white px-6 py-4 text-ink-600">{d.benefits.columns.before}</div>
            <div className="bg-ink-800 px-6 py-4 text-mint-300">{d.benefits.columns.after}</div>
          </div>
          {d.benefits.rows.map((r) => (
            <div key={r.label} className="grid border-t border-ink-100 md:grid-cols-[1fr_1.6fr_1.6fr]">
              <div className="bg-white px-6 pt-5 font-semibold text-ink-800 md:py-5">{r.label}</div>
              <div className="flex gap-3 bg-white px-6 py-3 text-ink-600 md:py-5">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-label={d.benefits.columns.before} />{r.before}
              </div>
              <div className="flex gap-3 bg-mint-50 px-6 py-3 font-medium text-ink-800 md:py-5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-700" aria-label={d.benefits.columns.after} />{r.after}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for (deck p.7) */}
      {d.audiences.title && (
        <section id="who-its-for" className="bg-paper py-20 sm:py-24">
          <div className="container-site">
            <SectionHeading eyebrow={d.audiences.eyebrow} title={d.audiences.title} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {d.audiences.items.map((a) => <FeatureCard key={a.title} feature={a} />)}
            </div>
          </div>
        </section>
      )}

      {/* Data security (deck p.8) */}
      <section id="security" className="container-site py-20 sm:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={d.security.eyebrow} title={d.security.title} intro={d.security.intro} />
          {d.security.cta && <SmartLink href={d.security.cta.href} className="btn-outline shrink-0">{d.security.cta.label}</SmartLink>}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {d.security.items.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-mint-100 bg-mint-50/60 p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-mint-700">{String(i + 1).padStart(2, "0")}</span>
                <Icon name={s.icon} className="h-6 w-6 text-mint-700" />
              </div>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.12em]">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations / roadmap (deck p.9) */}
      <section id="integrations" className="bg-ink-900 py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading tone="dark" eyebrow={d.integrations.eyebrow} title={d.integrations.title} intro={d.integrations.intro} />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.8fr]">
            <div className="rounded-2xl border border-mint-500/60 bg-white/5 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mint-300">{d.integrations.available.label}</p>
              <p className="mt-6 font-display text-5xl font-bold text-white">{d.integrations.available.name}</p>
              <ul className="mt-6 space-y-2">
                {d.integrations.available.points.map((p) => (
                  <li key={p} className="flex gap-2 text-ink-100"><Check className="mt-1 h-4 w-4 shrink-0 text-mint-500" aria-hidden="true" />{p}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-300">{d.integrations.plannedLabel}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {d.integrations.planned.map((it) => (
                  <div key={it.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="font-display text-2xl font-semibold text-white">{it.name}</p>
                    <p className="mt-1 text-sm text-ink-300">{it.type} <span className="mx-1.5 text-white/20">|</span> {d.integrations.plannedStatus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {d.integrations.disclaimer && <p className="mt-6 text-xs text-ink-300">{d.integrations.disclaimer}</p>}
        </div>
      </section>

      {/* Getting started (deck p.11) */}
      {d.getStarted.title && (
        <section className="container-site py-20 sm:py-24">
          <SectionHeading eyebrow={d.getStarted.eyebrow} title={d.getStarted.title} />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {d.getStarted.steps.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl border border-ink-100 p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-800 font-display text-sm font-bold text-mint-500">{i + 1}</span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-ink-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* FAQs */}
      <section id="faqs" className="bg-paper py-20 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow={d.faqSection.eyebrow} title={d.faqSection.title} />
          <FAQList items={faqs.items} />
        </div>
      </section>

      <CTABanner {...d.cta} />
    </>
  );
}
