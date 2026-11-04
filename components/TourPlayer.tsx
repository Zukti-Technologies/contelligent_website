"use client";
/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

type Slide = { chapter: string; title: string; sub: string; image: string };
const HOLD = 4500; // ms each screenshot stays on screen

/**
 * Auto-playing Caliper product tour in the home page hero.
 * Pauses when off screen, when the tab is hidden, on the pause button, and by default for reduced-motion users.
 */
export default function TourPlayer({ title, subtitle, badge, chapters, slides, logo }: {
  title: string; subtitle: string; badge: string; chapters: string[]; slides: Slide[]; logo: string;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState(() => new Set([0, 1]));
  const bar = useRef<HTMLElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const state = useRef({ t0: 0, visible: true, paused: false, i: 0 });

  const show = useCallback((n: number) => {
    const k = (n + slides.length) % slides.length;
    state.current.i = k; state.current.t0 = performance.now();
    setI(k);
    setLoaded((s) => { const x = new Set(s); x.add(k); x.add((k + 1) % slides.length); return x; });
    if (bar.current) bar.current.style.width = "0%";
  }, [slides.length]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setPaused(true); state.current.paused = true; }
    state.current.t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const st = state.current;
      if (!st.paused && st.visible) {
        let p = (now - st.t0) / HOLD;
        if (p >= 1) { show(st.i + 1); p = 0; }
        if (bar.current) bar.current.style.width = `${p * 100}%`;
      } else if (bar.current) {
        st.t0 = now - (parseFloat(bar.current.style.width || "0") / 100) * HOLD;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const io = "IntersectionObserver" in window && root.current
      ? new IntersectionObserver((e) => { state.current.visible = e[0].isIntersecting; }) : null;
    if (io && root.current) io.observe(root.current);
    const onVis = () => { state.current.visible = !document.hidden; };
    document.addEventListener("visibilitychange", onVis);
    return () => { cancelAnimationFrame(raf); io?.disconnect(); document.removeEventListener("visibilitychange", onVis); };
  }, [show]);

  const toggle = () => { const v = !paused; setPaused(v); state.current.paused = v; };
  const s = slides[i];

  return (
    <div className={`frame${paused ? " paused" : ""}`} ref={root} aria-roledescription="carousel" aria-label="Caliper product tour">
      <div className="frame-bar">
        <img className="fb-logo" src={logo} alt="Caliper" />
        <div className="fb-txt"><b>{title}</b><small>{subtitle}</small></div>
        <button className="pp" type="button" onClick={toggle} aria-label={paused ? "Play product tour" : "Pause product tour"}>
          {paused ? <Play width={18} height={18} aria-hidden="true" /> : <Pause width={18} height={18} aria-hidden="true" />}
        </button>
      </div>
      <div className="frame-tabs" aria-label="Jump to module">
        {chapters.map((c) => {
          const first = slides.findIndex((x) => x.chapter === c);
          return (
            <button key={c} className="ftab" type="button" aria-pressed={s.chapter === c} onClick={() => first >= 0 && show(first)}>{c}</button>
          );
        })}
      </div>
      <div className="frame-shot">
        <div className="stage" aria-live="off">
          {slides.map((x, k) => (
            <img key={x.image} className={`slide${k === i ? " on" : ""}`} src={loaded.has(k) ? x.image : undefined}
              alt={`${x.title}: ${x.sub} (demo company data)`} decoding="async" aria-hidden={k !== i} />
          ))}
        </div>
        <div className="ccap">
          <span className="demo">{badge}</span><b>{s.title}</b><span>{s.sub}</span><i>{i + 1} / {slides.length}</i>
        </div>
        <div className="prog"><i ref={bar} /></div>
      </div>
    </div>
  );
}
