"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import type { NavItem, NavLink } from "@/lib/content";
import SmartLink from "./SmartLink";
import ButtonLink from "./ButtonLink";

function matches(pathname: string, href?: string) {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

/** A top-level item is active if its own link, any child, or any column (title or link) matches the current page. */
function isActive(pathname: string, item: NavItem) {
  if (matches(pathname, item.href)) return true;
  if (item.children?.some((c) => matches(pathname, c.href))) return true;
  return Boolean(item.columns?.some((col) => matches(pathname, col.href) || col.links.some((l) => matches(pathname, l.href))));
}

const hasMenu = (item: NavItem) => Boolean(item.children?.length || item.columns?.length);

export default function HeaderNav({ items, ctas }: { items: NavItem[]; ctas: NavLink[] }) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { setOpen(null); setMobile(false); }, [pathname]);
  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(null); setMobile(false); } };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, []);

  // Buttons without a `style` fall back to: last one = dark button, others = plain link.
  const fallback = (i: number): "dark" | "link" => (i === ctas.length - 1 ? "dark" : "link");
  const topCls = (active: boolean) =>
    `flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-mint-700 ${active ? "text-mint-700" : "text-ink-700"}`;

  return (
    <div ref={ref} className="flex flex-1 items-center justify-end">
      {/* Desktop */}
      <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-1 lg:flex">
        {items.map((item) => {
          const active = isActive(pathname, item);
          if (!hasMenu(item)) {
            return (
              <SmartLink key={item.label} href={item.href || "/"} external={item.external} className={topCls(active)}>
                {item.label}
              </SmartLink>
            );
          }
          const isOpen = open === item.label;
          const menuId = `menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
          return (
            <div key={item.label} className="relative" onMouseEnter={() => setOpen(item.label)} onMouseLeave={() => setOpen(null)}>
              <button type="button" aria-expanded={isOpen} aria-controls={menuId}
                onClick={() => setOpen(isOpen ? null : item.label)} className={topCls(active)}>
                {item.label}
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>

              {isOpen && item.columns?.length ? (
                /* Multi-column menu (e.g. Offerings: Products | Services) */
                <div id={menuId} className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                  <div className={`grid gap-2 rounded-2xl border border-ink-100 bg-white p-3 shadow-xl shadow-ink-900/10 ${item.columns.length > 1 ? "w-[34rem] grid-cols-2" : "w-72"}`}>
                    {item.columns.map((col, ci) => (
                      <div key={col.title} className={`p-2 ${ci > 0 ? "border-l border-ink-100 pl-4" : ""}`}>
                        {col.href ? (
                          <SmartLink href={col.href} className="mb-2 block px-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-300 hover:text-mint-700">{col.title}</SmartLink>
                        ) : (
                          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">{col.title}</p>
                        )}
                        <ul className="space-y-0.5">
                          {col.links.map((l) => (
                            <li key={l.href}>
                              <SmartLink href={l.href} external={l.external}
                                className={`block rounded-lg px-2 py-2 hover:bg-mint-50 ${matches(pathname, l.href) ? "bg-mint-50" : ""}`}>
                                <span className="block text-sm font-semibold text-ink-800">{l.label}</span>
                                {l.description && <span className="mt-0.5 block text-xs leading-snug text-ink-600">{l.description}</span>}
                              </SmartLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {isOpen && !item.columns?.length && item.children?.length ? (
                /* Simple dropdown */
                <div id={menuId} className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-2">
                  <div className="rounded-xl border border-ink-100 bg-white p-2 shadow-lg shadow-ink-900/5">
                    {item.href && (
                      <SmartLink href={item.href} className="block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider text-ink-300 hover:text-ink-700">
                        All {item.label.toLowerCase()}
                      </SmartLink>
                    )}
                    {item.children.map((c) => (
                      <SmartLink key={c.href} href={c.href} external={c.external}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-800 hover:bg-mint-50">
                        {c.label}
                      </SmartLink>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </nav>
      <div className="hidden items-center gap-3 lg:flex">
        {ctas.map((c, i) => <ButtonLink key={c.label} link={c} fallback={fallback(i)} className="whitespace-nowrap" />)}
      </div>

      {/* Mobile */}
      <button type="button" className="rounded-md p-2 text-ink-800 lg:hidden" aria-label={mobile ? "Close menu" : "Open menu"}
        aria-expanded={mobile} onClick={() => setMobile(!mobile)}>
        {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {mobile && (
        <div className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-ink-100 bg-white px-4 pb-10 pt-4 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {items.map((item) => (
              <div key={item.label} className="border-b border-ink-100 py-2">
                {item.href ? (
                  <SmartLink href={item.href} external={item.external} className="block py-2 text-base font-semibold text-ink-800">{item.label}</SmartLink>
                ) : (
                  <p className="py-2 text-base font-semibold text-ink-800">{item.label}</p>
                )}
                {item.columns?.map((col) => (
                  <div key={col.title} className="mb-2 pl-4">
                    {col.href ? (
                      <SmartLink href={col.href} className="block py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">{col.title}</SmartLink>
                    ) : (
                      <p className="py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">{col.title}</p>
                    )}
                    {col.links.map((l) => (
                      <SmartLink key={l.href} href={l.href} external={l.external} className="block py-1.5 pl-2 text-sm text-ink-700">{l.label}</SmartLink>
                    ))}
                  </div>
                ))}
                {item.children?.map((c) => (
                  <SmartLink key={c.href} href={c.href} external={c.external} className="block py-1.5 pl-4 text-sm text-ink-600">{c.label}</SmartLink>
                ))}
              </div>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            {ctas.map((c, i) => {
              const style = c.style ?? fallback(i);
              return <ButtonLink key={c.label} link={{ ...c, style: style === "link" ? "outline" : style }} className="w-full" />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
