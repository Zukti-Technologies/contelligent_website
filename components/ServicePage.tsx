import { getPage } from "@/lib/content";
import { Cards, Head, Hero, Steps, Ticks } from "./Blocks";
import Accordion, { type AccItem } from "./Accordion";
import CtaBand from "./CtaBand";

type Cta = { label: string; href: string };
export type ServiceData = {
  hero: { crumb: string; titleAccent: string; title: string; lede: string; primaryCta: Cta; secondaryCta: Cta; glance: { label: string; value: string }[] };
  what: { eyebrow: string; title: string; ticks?: string[]; panel?: { title: string; body: string }; cards?: { title: string; body: string }[]; note?: string };
  howItWorks: { eyebrow: string; title: string; steps: { title: string; body: string }[]; outcomeLead: string; outcomeStrong: string };
  detail: { anchor: string; eyebrow: string; title: string; intro: string; items: AccItem[] };
};

/** Shared layout for the four service pages. Content in content/services/<slug>.md. */
export default function ServicePage({ file }: { file: string }) {
  const { data: d } = getPage<ServiceData>(file);
  const w = d.what;
  return (
    <>
      <Hero {...d.hero} />

      {w.ticks ? (
        <section className="block"><div className="wrap split">
          <div className="lead"><div className="eyebrow">{w.eyebrow}</div><h2>{w.title}</h2><Ticks items={w.ticks} /></div>
          {w.panel && <div className="panel"><h3>{w.panel.title}</h3><p>{w.panel.body}</p></div>}
        </div></section>
      ) : (
        <section className="block"><div className="wrap">
          <Head eyebrow={w.eyebrow} title={w.title} />
          {w.cards && <Cards items={w.cards} cols={w.cards.length === 3 ? 3 : 2} />}
          {w.note && <p className="small">{w.note}</p>}
        </div></section>
      )}

      <section className="block alt"><div className="wrap">
        <Head eyebrow={d.howItWorks.eyebrow} title={d.howItWorks.title} />
        <Steps steps={d.howItWorks.steps} />
        <p className="outcome">{d.howItWorks.outcomeLead} <strong>{d.howItWorks.outcomeStrong}</strong></p>
      </div></section>

      <section className="block" id={d.detail.anchor}><div className="wrap">
        <Head eyebrow={d.detail.eyebrow} title={d.detail.title} intro={d.detail.intro} />
        <Accordion items={d.detail.items} />
      </div></section>

      <CtaBand />
    </>
  );
}
