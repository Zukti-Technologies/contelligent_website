import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { getPage, getSite } from "@/lib/content";
import { metaFrom } from "@/lib/seo";
import { Cards, Head, Hero, Ticks } from "@/components/Blocks";
import CtaBand from "@/components/CtaBand";

export const metadata = metaFrom("about", "/about/");

type Block = { label: string; title: string; body: string };
type About = {
  hero: { crumb: string; titleAccent: string; title: string; lede: string; glance: { label: string; value: string }[] };
  visionMission: { eyebrow: string; title: string; vision: Block; mission: Block };
  deliver: { eyebrow: string; title: string; steps: { title: string; layer: string; offering: string; href: string }[]; note: string };
  story: {
    eyebrow: string; title: string; paragraphs: { text: string; style?: "belief" | "pivot" }[];
    glanceTitle: string; glance: string[]; stakeholdersTitle: string; stakeholders: { title: string; body: string }[]; close: string;
  };
  leadership: {
    eyebrow: string; title: string; intro: string;
    people: { name: string; initials: string; role: string; bio: string[]; tags: string[] }[];
    backingStrong: string; backingRest: string;
  };
};

export default function AboutPage() {
  const { data: d } = getPage<About>("about");
  const site = getSite();
  const glance = d.story.glance.map((g) => g.replace("{headquarters}", site.headquarters ?? ""));
  return (
    <>
      <Hero {...d.hero} />

      <section className="block" id="about-vision"><div className="wrap">
        <Head eyebrow={d.visionMission.eyebrow} title={d.visionMission.title} />
        <div className="vm">
          {([["v", d.visionMission.vision], ["m", d.visionMission.mission]] as const).map(([k, b]) => (
            <article key={k} className={k}><span className="lab">{b.label}</span><h3>{b.title}</h3><p>{b.body}</p></article>
          ))}
        </div>
      </div></section>

      <section className="block alt" id="about-d2d"><div className="wrap">
        <Head eyebrow={d.deliver.eyebrow} title={d.deliver.title} />
        <div className="d2d">
          {d.deliver.steps.map((s, k) => (
            <div key={s.title} style={{ display: "contents" }}>
              <Link className={`d2d-step${k === 1 ? " mid" : ""}`} href={s.href}>
                <span className="d2d-n">{k + 1}</span><b>{s.title}</b>
                <span className="d2d-layer">{s.layer}</span><span className="d2d-off">{s.offering}</span>
              </Link>
              {k < d.deliver.steps.length - 1 && <div className="d2d-arr" aria-hidden="true"><ArrowRight width={28} height={28} /></div>}
            </div>
          ))}
        </div>
        <p className="d2d-note">{d.deliver.note}</p>
      </div></section>

      <section className="block" id="about-story"><div className="wrap">
        <div className="story">
          <div className="story-text">
            <div className="eyebrow">{d.story.eyebrow}</div>
            <h2>{d.story.title}</h2>
            {d.story.paragraphs.map((p) => (
              <p key={p.text} className={p.style ? `story-${p.style}` : undefined}>{p.text}</p>
            ))}
          </div>
          <aside className="panel story-side"><h3>{d.story.glanceTitle}</h3><Ticks items={glance} /></aside>
        </div>
        <h3 className="story-sub">{d.story.stakeholdersTitle}</h3>
        <div className="story-cards"><Cards items={d.story.stakeholders} cols={4} /></div>
        <p className="story-close">{d.story.close}</p>
      </div></section>

      <section className="block alt" id="about-leadership"><div className="wrap">
        <Head eyebrow={d.leadership.eyebrow} title={d.leadership.title} intro={d.leadership.intro} />
        <div className="founders">
          {d.leadership.people.map((p) => (
            <article key={p.name} className="founder">
              <div className="f-top">
                <span className="f-av" aria-hidden="true">{p.initials}</span>
                <div><h3>{p.name}</h3><span className="f-role">{p.role}</span></div>
              </div>
              {p.bio.map((b) => <p key={b}>{b}</p>)}
              <div className="f-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="backing">
          <span className="b-ic" aria-hidden="true"><Building2 width={20} height={20} /></span>
          <p><b>{d.leadership.backingStrong}</b> {d.leadership.backingRest}</p>
        </div>
      </div></section>

      <CtaBand />
    </>
  );
}
