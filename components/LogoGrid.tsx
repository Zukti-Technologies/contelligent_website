import { publicFileExists } from "@/lib/content";

/** background: optional tile colour for logos made for a coloured background (e.g. "#000"). */
export type LogoItem = { name: string; logo?: string; url?: string; body?: string; background?: string };

const COLS: Record<number, string> = {
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
};

/** Logo wall for customers/partners/"trusted by". Shows the name as text if the logo file is missing. */
export default function LogoGrid({ items, tone = "light", columns = 5 }: { items: LogoItem[]; tone?: "light" | "dark"; columns?: 3 | 4 | 5 }) {
  if (!items?.length) return null;
  return (
    <ul className={`grid gap-4 ${COLS[columns]}`}>
      {items.map((it) => {
        const inner = it.logo && publicFileExists(it.logo)
          // eslint-disable-next-line @next/next/no-img-element
          ? <img src={it.logo} alt={it.name} className={`max-h-16 max-w-[80%] object-contain sm:max-h-20 ${tone === "dark" ? "brightness-0 invert opacity-80" : ""}`} />
          : <span className={`text-sm font-semibold ${tone === "dark" ? "text-ink-100" : "text-ink-600"}`}>{it.name}</span>;
        return (
          <li key={it.name} style={it.background ? { backgroundColor: it.background } : undefined}
            className={`flex h-24 items-center justify-center overflow-hidden rounded-xl px-4 sm:h-28 ${it.background ? "" : tone === "dark" ? "border border-white/10" : "border border-ink-100 bg-white"}`}>
            {it.url ? <a href={it.url} target="_blank" rel="noopener noreferrer" className="flex h-full w-full items-center justify-center">{inner}</a> : inner}
          </li>
        );
      })}
    </ul>
  );
}
