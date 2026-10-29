import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import SmartLink from "@/components/SmartLink";
import { getPage, getSite } from "@/lib/content";
import { metaFrom } from "@/lib/seo";
import { Icon } from "@/lib/icons";

export const metadata = metaFrom("contact", "/contact/");

type Contact = {
  eyebrow: string; title: string; intro: string;
  form: { title: string; note: string; fields: { name: string; email: string; company: string; message: string }; submit: string; subjectPrefix: string };
  demo: { title: string; body: string; cta: { label: string; href: string } };
};

export default function ContactPage() {
  const { data } = getPage<Contact>("contact");
  const site = getSite();
  return (
    <>
      <PageHero eyebrow={data.eyebrow} title={data.title} subtitle={data.intro} />
      <section className="container-site grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-ink-100 p-6 sm:p-10">
          <h2 className="text-2xl font-bold">{data.form.title}</h2>
          <div className="mt-6">
            <ContactForm to={site.email} labels={data.form.fields} submit={data.form.submit} note={data.form.note} subjectPrefix={data.form.subjectPrefix} />
          </div>
        </div>
        <aside className="space-y-5">
          <div className="rounded-2xl bg-paper p-6">
            <h2 className="text-lg font-semibold">Email</h2>
            <a href={`mailto:${site.email}`} className="mt-2 flex items-center gap-2 font-medium text-mint-700"><Icon name="mail" className="h-4 w-4" />{site.email}</a>
          </div>
          <div className="rounded-2xl bg-paper p-6">
            <h2 className="text-lg font-semibold">Office</h2>
            <address className="mt-2 not-italic leading-relaxed text-ink-600">
              {site.legalName}<br />{site.address.map((l) => <span key={l}>{l}<br /></span>)}
            </address>
          </div>
          <div className="rounded-2xl bg-ink-800 p-6 text-white">
            <h2 className="text-lg font-semibold text-white">{data.demo.title}</h2>
            <p className="mt-2 text-ink-100">{data.demo.body}</p>
            <SmartLink href={data.demo.cta.href} className="btn-primary mt-5">{data.demo.cta.label}</SmartLink>
          </div>
        </aside>
      </section>
    </>
  );
}
