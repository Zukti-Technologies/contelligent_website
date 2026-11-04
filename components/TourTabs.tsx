"use client";
/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";

type Tab = { title: string; tagline: string; image: string; alt: string };

/** Caliper page product tour: module tabs on the left, screenshot on the right. Arrow keys move between tabs. */
export default function TourTabs({ tabs, badge, caption }: { tabs: Tab[]; badge: string; caption: string }) {
  const [sel, setSel] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: React.KeyboardEvent, j: number) => {
    let n: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") n = (j + 1) % tabs.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = (j - 1 + tabs.length) % tabs.length;
    if (n !== null) { e.preventDefault(); setSel(n); refs.current[n]?.focus(); }
  };
  const t = tabs[sel];
  return (
    <div className="tour">
      <div className="tabs" role="tablist" aria-label="Caliper modules">
        {tabs.map((x, j) => (
          <button key={x.title} ref={(el) => { refs.current[j] = el; }} className="tab" role="tab" type="button"
            aria-selected={j === sel} tabIndex={j === sel ? 0 : -1} onClick={() => setSel(j)} onKeyDown={(e) => onKey(e, j)}>
            <b>{x.title}</b><span>{x.tagline}</span>
          </button>
        ))}
      </div>
      <figure className="shot" role="tabpanel">
        <img src={t.image} alt={t.alt} />
        <figcaption className="cap"><span className="demo">{badge}</span><span>{caption}</span></figcaption>
      </figure>
    </div>
  );
}
