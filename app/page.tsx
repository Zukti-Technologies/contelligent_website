/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getPage, getSite } from "@/lib/content";
import { metaFrom } from "@/lib/seo";
import { Cards, Head, Ticks } from "@/components/Blocks";
import BrandLogo from "@/components/BrandLogo";
import CtaBand from "@/components/CtaBand";
import TourPlayer from "@/components/TourPlayer";
import ServiceTabs from "@/components/ServiceTabs";
import type { AccItem } from "@/components/Accordion";

export const metadata = metaFrom("home", "/");

type Cta = { label: string; href: string };
type Home = {
  hero: { titleAccent: string; title: string; lede: string; primaryCta: Cta; secondaryCta: Cta; reassure: string; reassureAccent: string };
  player: { title: string; subtitle: string; badge: string; chapters: string[]; slides: { chapter: string; title: string; sub: string; image: string }[] };
  customers: { title: string; logos: { name: string; logo: string; height?: number; background?: string }[] };
  whatWeDo: {
    eyebrow: string; title: string; intro: string;
    journey: { step: string; title: string; body: string; cta: string; href: string; product?: boolean }[];
    bands: { title: string; body: string; cta: string; href: string }[];
  };
  servicesDetail: { eyebrow: string; title: string; intro: string; services: { label: string; file: string; href: string }[]; fullPageLabel: string };
  product: { eyebrow: string; title: string; body: string; ticks: string[]; cta: Cta; image: string; imageAlt: string };
  whoWeServe: { eyebrow: string; title: string; items: { title: string; tagline: string; body: string }[] };
  vision: { eyebrow: string; quote: string; sub: string; cta: Cta };
  trust: { eyebrow: string; title: string; items: { title: string; body: string }[] };
};

export default function HomePage() {
  const { data: d } = getPage<Home>("home");
  const site = getSite();
  const services = d.servicesDetail.services.map((s) => ({
    label: s.label, href: s.href,
    items: getPage<{ detail: { items: AccItem[] } }>(s.file).data.detail.items,
  }));

  return (
    <>
      <section className="hero"><div className="wrap">
        <h1><span className="grad">{d.hero.titleAccent}</span>{d.hero.title}</h1>
        <p className="lede">{d.hero.lede}</p>
        <div className="ctas">
          <Link className="btn btn-solid" href={d.hero.primaryCta.href}>{d.hero.primaryCta.label}</Link>
          <Link className="btn btn-outline" href={d.hero.secondaryCta.href}>{d.hero.secondaryCta.label}</Link>
        </div>
        <p className="reassure">{d.hero.reassure}<i aria-hidden="true" /><span>{d.hero.reassureAccent}</span></p>
        <TourPlayer {...d.player} logo={site.caliperLogo.fileDark} />
      </div></section>

      <div className="logos" id="home-customers"><div className="wrap">
        <p>{d.customers.title}</p>
        <div className="logo-row">
          {d.customers.logos.map((l) => (
            <div key={l.name} className={`logo-tile${l.background ? "" : " lt-white"}`} style={l.background ? { background: l.background } : undefined}>
              <img src={l.logo} alt={l.name} style={l.height ? { height: l.height } : undefined} />
            </div>
          ))}
        </div>
      </div></div>

      <section className="block"><div className="wrap">
        <Head eyebrow={d.whatWeDo.eyebrow} title={d.whatWeDo.title} intro={d.whatWeDo.intro} />
        <div className="journey">
          {d.whatWeDo.journey.map((j, k) => (
            <div key={j.step} className="q" style={{ gridColumn: k + 1 }}><i>{k + 1}</i>{j.step}</div>
          ))}
          {d.whatWeDo.journey.map((j) => (
            <Link key={j.href} className={`card${j.product ? " product" : ""}`} href={j.href}>
              <h3>
                {j.product && <><img className="card-logo" src={site.caliperLogo.fileDark} alt="" /><span className="sr">Caliper</span> </>}
                {j.title}
              </h3>
              <p>{j.body}</p><span className="go">{j.cta}</span>
            </Link>
          ))}
        </div>
        {d.whatWeDo.bands.map((b) => (
          <div key={b.title} className="band"><b>{b.title}</b><span>{b.body}</span><Link href={b.href}>{b.cta}</Link></div>
        ))}
      </div></section>

      <section className="block alt" id="home-services"><div className="wrap">
        <Head eyebrow={d.servicesDetail.eyebrow} title={d.servicesDetail.title} intro={d.servicesDetail.intro} />
        <ServiceTabs services={services} fullPageLabel={d.servicesDetail.fullPageLabel} />
      </div></section>

      <section className="block"><div className="wrap split">
        <div className="lead">
          <div className="eyebrow">{d.product.eyebrow}</div>
          <BrandLogo logo={site.caliperLogo} className="sec-logo" />
          <h2>{d.product.title}</h2>
          <p>{d.product.body}</p>
          <Ticks items={d.product.ticks} />
          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btn-solid" href={d.product.cta.href}>{d.product.cta.label}</Link>
          </div>
        </div>
        <div className="shot"><img src={d.product.image} alt={d.product.imageAlt} loading="lazy" /></div>
      </div></section>

      <section className="block alt" id="home-who"><div className="wrap">
        <Head eyebrow={d.whoWeServe.eyebrow} title={d.whoWeServe.title} />
        <Cards items={d.whoWeServe.items} cols={4} />
      </div></section>

      <section className="block vision-band" id="home-vision"><div className="wrap">
        <div className="eyebrow">{d.vision.eyebrow}</div>
        <p className="vb-quote">{d.vision.quote}</p>
        <p className="vb-sub">{d.vision.sub}</p>
        <Link className="btn btn-outline" href={d.vision.cta.href}>{d.vision.cta.label}</Link>
      </div></section>

      <section className="block alt"><div className="wrap">
        <Head eyebrow={d.trust.eyebrow} title={d.trust.title} />
        <Cards items={d.trust.items} cols={4} />
      </div></section>

      <CtaBand />
    </>
  );
}
