"use client";

import { useEffect, useRef, useState } from "react";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Calendly inline widget that sizes itself to its content, so the page scrolls instead of the widget.
 *
 * How the height is set:
 * 1. Calendly posts a `calendly.page_height` message from inside the iframe whenever its content height
 *    changes (event page, time slots, booking form, confirmation). We listen and set the container to that height.
 *    `data-resize="true"` asks Calendly's own script to do the same.
 * 2. Until the first message arrives (or if it never does), a starting height large enough for Calendly's
 *    usual views is used: taller on narrow screens, where Calendly stacks the calendar and time list.
 *
 * If the script fails (ad blocker, network), a message and a direct link are shown instead.
 */
export default function CalendlyEmbed({
  url, fallbackText, fallbackLinkLabel,
}: { url: string; fallbackText: string; fallbackLinkLabel: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const [height, setHeight] = useState<number | null>(null);
  const [fallbackHeight, setFallbackHeight] = useState(760);

  // Starting height from the available width (Calendly switches to a stacked layout on narrow embeds).
  useEffect(() => {
    const measure = () => {
      const w = boxRef.current?.clientWidth ?? window.innerWidth;
      setFallbackHeight(w < 650 ? 1150 : 760);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Follow Calendly's height reports.
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (!/^https:\/\/([a-z0-9-]+\.)*calendly\.com$/.test(e.origin)) return;
      const data = e.data as { event?: string; payload?: { height?: string | number } };
      if (data?.event !== "calendly.page_height") return;
      const h = parseInt(String(data.payload?.height ?? ""), 10);
      if (Number.isFinite(h) && h > 200) setHeight(h);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  // Load Calendly's script once.
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      // Script already on the page (client-side navigation back to this page): ask it to render again.
      (window as unknown as { Calendly?: { initInlineWidgets?: () => void } }).Calendly?.initInlineWidgets?.();
      return;
    }
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onerror = () => setFailed(true);
    document.body.appendChild(s);
  }, []);

  // Colours match the site: white background, ink text, mint buttons.
  const params = "hide_gdpr_banner=1&background_color=ffffff&text_color=012e36&primary_color=2eceae";
  const embedUrl = `${url}${url.includes("?") ? "&" : "?"}${params}`;

  return (
    <div>
      {failed ? (
        <div className="rounded-2xl border border-dashed border-ink-300 bg-paper p-10 text-center">
          <p className="text-ink-700">The booking calendar could not load here.</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn-dark mt-4">{fallbackLinkLabel}</a>
        </div>
      ) : (
        <div
          ref={boxRef}
          className="calendly-inline-widget w-full [&_iframe]:!h-full"
          data-url={embedUrl}
          data-resize="true"
          style={{ minWidth: 320, height: height ?? fallbackHeight, transition: "height 150ms ease-out" }}
        />
      )}
      <p className="mt-2 text-center text-sm text-ink-600">
        {fallbackText}{" "}
        <a href={url} target="_blank" rel="noopener noreferrer" className="font-semibold text-mint-700 underline-offset-2 hover:underline">{fallbackLinkLabel}</a>
      </p>
    </div>
  );
}
