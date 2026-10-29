"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import Lightbox, { type LightboxItem } from "./Lightbox";

/** Grid of product screenshots. Clicking one opens the full-screen lightbox at that image. */
export function ScreenshotGallery({ items, note }: { items: LightboxItem[]; note?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {items.map((s, i) => (
          <figure key={s.src} className={items.length % 2 === 1 && i === items.length - 1 ? "lg:col-span-2" : ""}>
            <ScreenshotButton item={s} onOpen={() => setOpen(i)} />
            {s.title && <figcaption className="mt-3 text-sm font-semibold text-ink-700">{s.title}</figcaption>}
          </figure>
        ))}
      </div>
      {note && <p className="mt-6 text-sm text-ink-600">{note}</p>}
      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  );
}

/**
 * A single clickable screenshot (used in the hero). Opens the lightbox on `items[start]`,
 * so visitors can carry on through the other screenshots.
 */
export function ScreenshotTrigger({ items, start = 0, dark = false }: { items: LightboxItem[]; start?: number; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const item = items[start];
  if (!item) return null;
  return (
    <>
      <ScreenshotButton item={item} dark={dark} onOpen={() => setOpen(start)} />
      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  );
}

function ScreenshotButton({ item, onOpen, dark = false }: { item: LightboxItem; onOpen: () => void; dark?: boolean }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${item.title ?? "screenshot"} full screen`}
      className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border text-left shadow-md transition-shadow hover:shadow-xl ${dark ? "border-white/10" : "border-ink-100"}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.thumb ?? item.src} alt={item.alt} loading="lazy" className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]" />
      <span className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" /> View full screen
      </span>
    </button>
  );
}
