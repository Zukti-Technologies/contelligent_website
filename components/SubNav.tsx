import SmartLink from "./SmartLink";
import ButtonLink from "./ButtonLink";
import type { NavLink } from "@/lib/content";

/** Sticky product section bar (Features, Benefits, ...) with action buttons on the right (from content). */
export default function SubNav({ title, base, items, actions }: { title: string; base: string; items: NavLink[]; actions: NavLink[] }) {
  return (
    <div className="sticky top-16 z-40 border-b border-ink-100 bg-paper/95 backdrop-blur">
      <div className="container-site flex h-12 items-center gap-6 overflow-x-auto text-sm">
        <SmartLink href={base} className="shrink-0 font-display font-bold text-ink-800">{title}</SmartLink>
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
