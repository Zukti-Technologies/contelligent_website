import { getNavigation, getSite } from "@/lib/content";
import Logo from "./Logo";
import SmartLink from "./SmartLink";
import ButtonLink from "./ButtonLink";
import { Icon } from "@/lib/icons";

export default function Footer() {
  const site = getSite();
  const nav = getNavigation();
  return (
    <footer className="bg-ink-900 text-ink-100">
      <div className="h-4 ruler-ticks" aria-hidden="true" />
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="space-y-4">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-ink-300">{site.shortDescription}</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-mint-500" />
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-mint-500" />
              <address className="not-italic text-ink-300">{site.address.join(", ")}</address>
            </li>
            {[site.linkedin && { href: site.linkedin, label: "Contelligent on LinkedIn" },
              site.caliperLinkedin && { href: site.caliperLinkedin, label: "Caliper on LinkedIn" }]
              .filter(Boolean)
              .map((l) => l && (
                <li key={l.href} className="flex items-start gap-2">
                  <Icon name="linkedin" className="mt-0.5 h-4 w-4 shrink-0 text-mint-500" />
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">{l.label}</a>
                </li>
              ))}
          </ul>
        </div>
        {nav.footerColumns.map((col) => (
          <div key={col.title}>
            <h2 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white">{col.title}</h2>
            <ul className="space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label + l.href} className={l.style && l.style !== "link" ? "pt-2" : ""}>
                  {l.style && l.style !== "link"
                    ? <ButtonLink link={l} size="sm" />
                    : <SmartLink href={l.href} external={l.external} className="text-ink-300 hover:text-white">{l.label}</SmartLink>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-ink-300 sm:flex-row sm:justify-between">
          <p>© {site.copyrightYear} {site.legalName}</p>
          {site.cin && <p>CIN {site.cin}</p>}
        </div>
      </div>
    </footer>
  );
}
