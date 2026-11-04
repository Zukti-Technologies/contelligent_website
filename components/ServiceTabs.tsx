"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Accordion, { type AccItem } from "./Accordion";

type Service = { label: string; href: string; items: AccItem[] };

/** Home page "Services in detail": one tab per service, each showing that service's drill-down list. */
export default function ServiceTabs({ services, fullPageLabel }: { services: Service[]; fullPageLabel: string }) {
  const [sel, setSel] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: React.KeyboardEvent, j: number) => {
    let n: number | null = null;
    if (e.key === "ArrowRight") n = (j + 1) % services.length;
    if (e.key === "ArrowLeft") n = (j - 1 + services.length) % services.length;
    if (n !== null) { e.preventDefault(); setSel(n); refs.current[n]?.focus(); }
  };
  const s = services[sel];
  return (
    <>
      <div className="svc-tabs" role="tablist" aria-label="Services">
        {services.map((x, j) => (
          <button key={x.label} ref={(el) => { refs.current[j] = el; }} role="tab" type="button" aria-selected={j === sel}
            aria-controls="svc-panel" tabIndex={j === sel ? 0 : -1} onClick={() => setSel(j)} onKeyDown={(e) => onKey(e, j)}>{x.label}</button>
        ))}
      </div>
      <div id="svc-panel" role="tabpanel"><Accordion key={s.label} items={s.items} /></div>
      <p className="small" style={{ marginTop: 22 }}>
        <Link href={s.href} style={{ color: "var(--accent)", fontWeight: 500 }}>{fullPageLabel.replace("{service}", s.label)}</Link>
      </p>
    </>
  );
}
