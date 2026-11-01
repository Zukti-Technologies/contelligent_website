import SmartLink from "./SmartLink";
import ButtonLink from "./ButtonLink";
import type { NavLink } from "@/lib/content";

/** Sticky product section bar (Features, Benefits, ...) with action buttons on the right (from content). */
export default function SubNav({ title, base, items, actions, logo }: { title: string; base: string; items: NavLink[]; actions: NavLink[]; logo?: string }) {
  return (
    <div className="sticky top-[72px] z-40 border-b border-ink-100 bg-paper/95 backdrop-blur">
      <div className="container-site flex h-12 items-center gap-6 overflow-x-auto text-sm">
        <SmartLink href={base} className="flex shrink-0 items-center font-display font-bold text-ink-800" aria-label={`${title} overview`}>
          {logo
            // eslint-disable-next-line @next/next/no-img-element
            ? <img src={logo} alt={title} className="h-5 w-auto" />
            : title}
        </SmartLink>
        <nav aria-label={`${title} sections`} className="flex shrink-0 items-center gap-5">
          {items.map((i) => (
            <SmartLink key={i.label} href={i.href.startsWith("#") ? `${base}${i.href}` : i.href} external={i.external}
              className="whitespace-nowrap text-ink-600 hover:text-mint-700">{i.label}</SmartLink>
          ))}
        </nav>
        <div className="ml-auto hidden shrink-0 items-center gap-4 md:flex">
          {actions.map((a) => <ButtonLink key={a.label} link={a} size="sm" />)}
        </div>
      </div>
    </div>
  );
}
