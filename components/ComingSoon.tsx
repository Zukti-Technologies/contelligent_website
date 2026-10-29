import { Ruler } from "lucide-react";

export default function ComingSoon({ text = "Content coming soon." }: { text?: string }) {
  return (
    <section className="container-site py-20">
      <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-dashed border-ink-100 bg-paper px-6 py-14 text-center">
        <Ruler className="h-8 w-8 text-mint-700" aria-hidden="true" />
        <p className="mt-4 text-lg font-medium text-ink-700">{text}</p>
      </div>
    </section>
  );
}
