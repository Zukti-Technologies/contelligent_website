"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

export type LightboxItem = { src: string; alt: string; title?: string; thumb?: string };

/**
 * Full-screen image viewer.
 * - Opens in the browser's full-screen mode where allowed; otherwise covers the whole window.
 * - Esc / close button / click on the backdrop closes it. Arrow keys and buttons move between images.
 * - "Zoom" (button, Z key or click on the image) switches between fit-to-screen and actual size,
 *   so HD screenshots can be read at full resolution; scroll or drag to pan when zoomed.
 */
export default function Lightbox({
  items, index, onClose, onIndexChange,
}: { items: LightboxItem[]; index: number | null; onClose: () => void; onIndexChange: (i: number) => void }) {
  const open = index !== null && items.length > 0;
  const [zoomed, setZoomed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; sl: number; st: number; moved: boolean } | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback((d: number) => {
    if (index === null) return;
    onIndexChange((index + d + items.length) % items.length);
  }, [index, items.length, onIndexChange]);

  const close = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    onClose();
  }, [onClose]);

  // Enter full-screen mode, lock page scroll, and focus the close button while open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const el = rootRef.current;
    if (el?.requestFullscreen && !document.fullscreenElement) el.requestFullscreen().catch(() => { /* not allowed: overlay still fills the window */ });
    closeRef.current?.focus();
    return () => { document.body.style.overflow = prevOverflow; };
  }, [open]);

  // Reset zoom when the image changes.
  useEffect(() => { setZoomed(false); setLoaded(false); }, [index]);

  // Keyboard controls.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); close(); }
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key.toLowerCase() === "z") setZoomed((z) => !z);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go, close]);

  if (!open || index === null) return null;
  const item = items[index];
  const many = items.length > 1;

  const btn = "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white";

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label={item.title ? `${item.title} screenshot` : "Screenshot"}
      className="fixed inset-0 z-[100] flex flex-col bg-black/95"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 px-4 py-3 text-white sm:px-6">
        <p className="truncate text-sm font-medium">
          {item.title}
          {many && <span className="ml-3 text-white/50">{index + 1} / {items.length}</span>}
        </p>
        <div className="flex items-center gap-2">
          <button type="button" className={btn} onClick={() => setZoomed((z) => !z)} aria-pressed={zoomed}
            aria-label={zoomed ? "Fit to screen" : "View actual size"} title={zoomed ? "Fit to screen (Z)" : "Actual size (Z)"}>
            {zoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
          </button>
          <button ref={closeRef} type="button" className={btn} onClick={close} aria-label="Close" title="Close (Esc)">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Image area. Clicking the dark backdrop (not the image) closes the viewer. */}
      <div
        ref={scrollRef}
        className={`relative flex-1 ${zoomed ? "cursor-grab overflow-auto active:cursor-grabbing" : "flex items-center justify-center overflow-hidden px-4 pb-20 sm:px-20 sm:pb-6"}`}
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        onMouseDown={(e) => {
          if (!zoomed || !scrollRef.current) return;
          drag.current = { x: e.clientX, y: e.clientY, sl: scrollRef.current.scrollLeft, st: scrollRef.current.scrollTop, moved: false };
        }}
        onMouseMove={(e) => {
          const d = drag.current; const el = scrollRef.current;
          if (!d || !el) return;
          const dx = e.clientX - d.x, dy = e.clientY - d.y;
          if (Math.abs(dx) + Math.abs(dy) > 4) d.moved = true;
          el.scrollLeft = d.sl - dx; el.scrollTop = d.st - dy;
        }}
        onMouseUp={() => { setTimeout(() => { drag.current = null; }, 0); }}
        onMouseLeave={() => { drag.current = null; }}
        onTouchStart={(e) => { const t = e.touches[0]; touch.current = { x: t.clientX, y: t.clientY }; }}
        onTouchEnd={(e) => {
          // Swipe left/right to change image (only when not zoomed, where touch scrolling pans instead).
          const s = touch.current; touch.current = null;
          if (!s || zoomed || items.length < 2) return;
          const t = e.changedTouches[0]; const dx = t.clientX - s.x, dy = t.clientY - s.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
        }}
      >
        {!loaded && <div className="absolute inset-0 flex items-center justify-center text-sm text-white/60">Loading…</div>}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          onLoad={() => setLoaded(true)}
          onClick={() => { if (!drag.current?.moved) setZoomed((z) => !z); }}
          draggable={false}
          className={zoomed
            ? "m-auto block max-w-none cursor-zoom-out select-none"
            : "max-h-full max-w-full cursor-zoom-in select-none rounded-lg object-contain shadow-2xl"}
          style={zoomed ? undefined : { maxHeight: "calc(100vh - 7rem)" }}
        />
      </div>

      {many && (
        <>
          <button type="button" className={`${btn} absolute bottom-5 left-[calc(50%-3.5rem)] sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2`} onClick={() => go(-1)} aria-label="Previous screenshot">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button type="button" className={`${btn} absolute bottom-5 right-[calc(50%-3.5rem)] sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2`} onClick={() => go(1)} aria-label="Next screenshot">
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
    </div>
  );
}
