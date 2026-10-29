import { Plus } from "lucide-react";
import { inline } from "@/lib/content";

export type FAQ = { question: string; answer: string };

/** Accessible accordion using native <details>; works without JavaScript. */
export default function FAQList({ items }: { items: FAQ[] }) {
  if (!items?.length) return null;
  return (
    <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
      {items.map((f, i) => (
        <details key={f.question} className="group px-6" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold text-ink-800 [&::-webkit-details-marker]:hidden">
            {f.question}
            <Plus className="h-5 w-5 shrink-0 text-mint-700 transition-transform group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className="pb-6 pr-10 leading-relaxed text-ink-600" dangerouslySetInnerHTML={{ __html: inline(f.answer) }} />
        </details>
      ))}
    </div>
  );
}
