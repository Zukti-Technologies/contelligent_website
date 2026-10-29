import SmartLink from "./SmartLink";

type Cta = { label: string; href: string; external?: boolean };

/** Dark hero band used at the top of every page. */
export default function PageHero({
  eyebrow, title, subtitle, primaryCta, secondaryCta, size = "md", children,
}: {
  eyebrow?: string; title: string; subtitle?: string; primaryCta?: Cta; secondaryCta?: Cta;
  size?: "md" | "lg"; children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div className="absolute inset-0 grid-faint" aria-hidden="true" />
      <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-mint-500/10 blur-3xl" aria-hidden="true" />
      <div className={`container-site relative ${size === "lg" ? "py-20 sm:py-28" : "py-14 sm:py-20"}`}>
        <div className={children ? "grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]" : ""}>
          <div className="max-w-3xl">
            {eyebrow && <p className="eyebrow text-mint-300">{eyebrow}</p>}
            <h1 className={`mt-4 font-bold text-white ${size === "lg" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-4xl sm:text-5xl"}`}>{title}</h1>
            {subtitle && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-100">{subtitle}</p>}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCta && <SmartLink href={primaryCta.href} external={primaryCta.external} className="btn-primary">{primaryCta.label}</SmartLink>}
                {secondaryCta && <SmartLink href={secondaryCta.href} external={secondaryCta.external} className="btn-outline-light">{secondaryCta.label}</SmartLink>}
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
      <div className="relative h-4 ruler-ticks" aria-hidden="true" />
    </section>
  );
}
