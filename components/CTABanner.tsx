import SmartLink from "./SmartLink";

type Cta = { label: string; href: string; external?: boolean };

export default function CTABanner({ title, body, primary, secondary }: { title: string; body?: string; primary?: Cta; secondary?: Cta }) {
  return (
    <section className="container-site py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-ink-800 px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="absolute inset-0 grid-faint" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-4 ruler-ticks" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          {body && <p className="mt-4 text-lg text-ink-100">{body}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {primary && <SmartLink href={primary.href} external={primary.external} className="btn-primary">{primary.label}</SmartLink>}
            {secondary && <SmartLink href={secondary.href} external={secondary.external} className="btn-outline-light">{secondary.label}</SmartLink>}
          </div>
        </div>
      </div>
    </section>
  );
}
