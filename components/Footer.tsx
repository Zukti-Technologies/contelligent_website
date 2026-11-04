import Link from "next/link";
import { getNavigation, getSite } from "@/lib/content";
import BrandLogo from "./BrandLogo";
import SmartLink from "./SmartLink";

export default function Footer() {
  const site = getSite();
  const nav = getNavigation();
  return (
    <footer><div className="wrap">
      <div className="fcols">
        <div>
          <Link className="brand" href="/" aria-label="Contelligent home"><BrandLogo logo={site.logo} /></Link>
          <p style={{ color: "var(--muted)", marginTop: 14, maxWidth: "22em" }}>{site.tagline}</p>
          <p className="f-product"><span>Our product</span><BrandLogo logo={site.caliperLogo} /></p>
        </div>
        {nav.footerColumns.map((c) => (
          <div key={c.title}>
            <h4>{c.title}</h4>
            <ul>{c.links.map((l) => <li key={l.label}><SmartLink href={l.href}>{l.label}</SmartLink></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="fbot">
        <span>© {site.copyrightYear} {site.companyName}. Caliper is a product of {site.companyName}.</span>
        {site.caliperSite && <span>{site.caliperSite}</span>}
      </div>
    </div></footer>
  );
}
