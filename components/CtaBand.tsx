import { getSite } from "@/lib/content";
import SmartLink from "./SmartLink";

/** Closing band at the bottom of every page except Contact. Text in content/site.md (ctaBand). */
export default function CtaBand() {
  const c = getSite().ctaBand;
  return (
    <section className="block" id="cta-band" style={{ paddingTop: 24 }}><div className="wrap"><div className="cta">
      <h2>{c.title}</h2><p>{c.body}</p>
      <div className="ctas">
        <SmartLink className="btn btn-solid" href={c.primary.href}>{c.primary.label}</SmartLink>
        <SmartLink className="btn btn-outline" href={c.secondary.href}>{c.secondary.label}</SmartLink>
      </div>
    </div></div></section>
  );
}
