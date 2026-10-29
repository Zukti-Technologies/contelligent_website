export default function SectionHeading({
  eyebrow, title, intro, align = "left", tone = "light",
}: { eyebrow?: string; title: string; intro?: string; align?: "left" | "center"; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow ${dark ? "text-mint-300" : ""}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${dark ? "text-white" : ""}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-ink-100" : "text-ink-600"}`}>{intro}</p>}
    </div>
  );
}
