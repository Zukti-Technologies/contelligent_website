"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import type { Navigation } from "@/lib/content";
import BrandLogo from "./BrandLogo";

/** Sticky header with dropdown menus (desktop) and a drawer (mobile). */
export default function HeaderClient({ nav, logo }: { nav: Navigation; logo: { file: string; fileDark: string; alt: string } }) {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [drawer, setDrawer] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);

  // Close everything on navigation, outside click and Escape.
  useEffect(() => { setOpenMenu(null); setDrawer(false); }, [pathname]);
  useEffect(() => {
    const onClick = (e: MouseEvent) => { if (!(e.target as Element).closest?.(".dd, [data-dd]")) setOpenMenu(null); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpenMenu(null); setDrawer(false); } };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("click", onClick); document.removeEventListener("keydown", onKey); };
  }, []);
  const close = () => { setOpenMenu(null); setDrawer(false); };

  return (
    <header ref={ref}>
      <div className={`wrap nav${drawer ? " open" : ""}`}>
        <Link className="brand" href="/" aria-label="Contelligent home"><BrandLogo logo={logo} /></Link>
        <ul className="menu" role="list">
          {nav.menus.map((m, i) => (
            <li key={m.label}>
              <button type="button" data-dd aria-expanded={openMenu === i} aria-controls={`dd-${i}`}
                onClick={() => setOpenMenu(openMenu === i ? null : i)}>
                {m.label}<ChevronDown aria-hidden="true" />
              </button>
              <div className={`dd${openMenu === i ? " open" : ""}`} id={`dd-${i}`} style={m.narrow ? { minWidth: 260 } : undefined}>
                {m.links.map((l) => (
                  <Link key={l.label} href={l.href} className={l.all ? "dd-all" : undefined} onClick={close}
                    aria-current={l.page && l.page === pathname ? "page" : undefined}>
                    <b>{l.label}</b>{l.description && <span>{l.description}</span>}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div className="actions">
          <Link className="link" href={nav.headerLink.href}>{nav.headerLink.label}</Link>
          <Link className="btn btn-solid btn-sm" href={nav.headerButton.href}>{nav.headerButton.label}</Link>
        </div>
        <button className="burger" type="button" aria-expanded={drawer} aria-controls="drawer" aria-label={drawer ? "Close menu" : "Open menu"}
          onClick={() => setDrawer(!drawer)}>
          {drawer ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav className="drawer" id="drawer" aria-label="Mobile">
        {nav.mobile.map((l) => (
          <Link key={l.label} href={l.href} className={l.sub ? "sub" : undefined} onClick={close}>{l.label}</Link>
        ))}
        <Link className="btn btn-solid" href={nav.headerButton.href} onClick={close}>{nav.headerButton.label}</Link>
      </nav>
    </header>
  );
}
