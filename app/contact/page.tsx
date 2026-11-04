import { getPage, getSite } from "@/lib/content";
import { metaFrom } from "@/lib/seo";
import { Hero } from "@/components/Blocks";
import ContactForm from "@/components/ContactForm";

export const metadata = metaFrom("contact", "/contact/");

type Contact = {
  hero: { crumb: string; titleAccent: string; title: string; lede: string };
  form: React.ComponentProps<typeof ContactForm>["text"];
  next: { title: string; steps: string[] };
};

export default function ContactPage() {
  const { data: d } = getPage<Contact>("contact");
  const site = getSite();
  const glance = [
    { label: "Email", value: <a href={`mailto:${site.email}`}>{site.email}</a> },
    ...(site.phone ? [{ label: "Phone", value: <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a> }] : []),
    { label: "Office", value: <>{site.address.map((l, k) => <span key={l} style={{ display: "block" }}>{l}{k === 0 ? "," : ""}</span>)}</> },
  ];
  return (
    <>
      <Hero {...d.hero} glance={glance}
        glanceStyle={{ gridTemplateColumns: `repeat(${glance.length},1fr)`, maxWidth: glance.length === 2 ? 720 : 800 }} />
      <section className="block"><div className="wrap split" style={{ alignItems: "start" }}>
        <ContactForm to={site.email} text={d.form} />
        <div className="panel"><h3>{d.next.title}</h3>
          <ol className="steps" style={{ gridTemplateColumns: "1fr", marginTop: 18, gap: 12 }}>
            {d.next.steps.map((s) => <li key={s}><b style={{ marginTop: 10 }}>{s}</b></li>)}
          </ol>
        </div>
      </div></section>
    </>
  );
}
