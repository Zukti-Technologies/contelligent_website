import { getPage, getSite } from "@/lib/content";
import { metaFrom } from "@/lib/seo";
import { Glance, Head, Steps } from "@/components/Blocks";
import BrandLogo from "@/components/BrandLogo";
import SmartLink from "@/components/SmartLink";
import CtaBand from "@/components/CtaBand";
import TourTabs from "@/components/TourTabs";

export const metadata = metaFrom("caliper/caliper", "/products/caliper/");

type Cta = { label: string; href: string };
type Caliper = {
  hero: { crumb: string; title: string; lede: string; primaryCta: Cta; secondaryCta: Cta; reassure: string[]; glance: { label: string; value: string }[] };
  howItWorks: { eyebrow: string; title: string; intro: string; steps: { title: string; body: string }[] };
  tour: { eyebrow: string; title: string; intro: string; tabs: { title: string; tagline: string; image: string; alt: string }[]; badge: string; caption: string; modules: { name: string; badge?: "beta" | "soon"; badgeLabel?: string }[] };
  compare: { eyebrow: string; title: string; columns: { label: string; before: string; after: string }; rows: { label: string; before: string; after: string }[] };
  integrations: { eyebrow: string; title: string; intro: string; available: { label: string; name: string; points: string[] }; planned: { name: string; type: string }[]; disclaimer: string };
};

export default function CaliperPage() {
  const { data: d } = getPage<Caliper>("caliper/caliper");
  const site = getSite();
  const last = d.hero.reassure.length - 1;
  return (
    <>
      <section className="hero"><div className="wrap">
        <span className="crumb">{d.hero.crumb}</span>
        <h1><BrandLogo logo={site.caliperLogo} className="h1-logo" />{d.hero.title}</h1>
        <p className="lede">{d.hero.lede}</p>
        <div className="ctas">
          <SmartLink className="btn btn-solid" href={d.hero.primaryCta.href}>{d.hero.primaryCta.label}</SmartLink>
          <SmartLink className="btn btn-outline" href={d.hero.secondaryCta.href}>{d.hero.secondaryCta.label}</SmartLink>
        </div>
        <p className="reassure">
          {d.hero.reassure.map((r, k) => (
            <span key={r} style={k === last ? undefined : { color: "inherit" }}>{r}{k < last && <i aria-hidden="true" />}</span>
          ))}
        </p>
        <Glance items={d.hero.glance} />
      </div></section>

      <section className="block"><div className="wrap">
        <Head eyebrow={d.howItWorks.eyebrow} title={d.howItWorks.title} intro={d.howItWorks.intro} />
        <Steps steps={d.howItWorks.steps} columns={3} />
      </div></section>

      <section className="block alt" id="caliper-tour"><div className="wrap">
        <Head eyebrow={d.tour.eyebrow} title={d.tour.title} intro={d.tour.intro} />
        <TourTabs tabs={d.tour.tabs} badge={d.tour.badge} caption={d.tour.caption} />
        <div className="mods">
          {d.tour.modules.map((m) => <span key={m.name}>{m.name}{m.badge && <em className={m.badge}>{m.badgeLabel}</em>}</span>)}
        </div>
      </div></section>

      <section className="block"><div className="wrap">
        <Head eyebrow={d.compare.eyebrow} title={d.compare.title} />
        <div className="compare"><table>
          <thead><tr>
            <th scope="col"><span style={{ position: "absolute", left: -9999 }}>{d.compare.columns.label}</span></th>
            <th scope="col">{d.compare.columns.before}</th>
            <th scope="col" className="c">{d.compare.columns.after}</th>
          </tr></thead>
          <tbody>
            {d.compare.rows.map((r) => <tr key={r.label}><td>{r.label}</td><td>{r.before}</td><td className="c">{r.after}</td></tr>)}
          </tbody>
        </table></div>
      </div></section>

      <section className="block alt" id="caliper-integrations"><div className="wrap">
        <Head eyebrow={d.integrations.eyebrow} title={d.integrations.title} intro={d.integrations.intro} />
        <div className="road">
          <div className="panel">
            <div className="eyebrow">{d.integrations.available.label}</div>
            <strong style={{ fontSize: 48, color: "var(--accent)", margin: "8px 0 10px" }}>{d.integrations.available.name}</strong>
            {d.integrations.available.points.map((p, k) => <p key={p} style={{ margin: k ? "4px 0 0" : 0 }}>{p}</p>)}
          </div>
          <div className="later">
            {d.integrations.planned.map((p) => <div key={p.name}><strong>{p.name}</strong>{p.type}</div>)}
          </div>
        </div>
        <p className="small">{d.integrations.disclaimer}</p>
      </div></section>

      <CtaBand />
    </>
  );
}
