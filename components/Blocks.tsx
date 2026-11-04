import SmartLink from "./SmartLink";

type Cta = { label: string; href: string };

/** Centred page hero: crumb, two-line title (first line in the green gradient), lede, buttons, glance strip. */
export function Hero({ crumb, titleAccent, title, lede, primaryCta, secondaryCta, glance, glanceStyle, before, children }: {
  crumb?: string; titleAccent?: string; title: string; lede?: string; primaryCta?: Cta; secondaryCta?: Cta;
  glance?: { label: string; value: React.ReactNode }[]; glanceStyle?: React.CSSProperties; before?: React.ReactNode; children?: React.ReactNode;
}) {
  return (
    <section className="hero"><div className="wrap">
      {crumb && <span className="crumb">{crumb}</span>}
      <h1>{before}{titleAccent && <span className="grad">{titleAccent}</span>}{title}</h1>
      {lede && <p className="lede">{lede}</p>}
      {(primaryCta || secondaryCta) && (
        <div className="ctas">
          {primaryCta && <SmartLink className="btn btn-solid" href={primaryCta.href}>{primaryCta.label}</SmartLink>}
          {secondaryCta && <SmartLink className="btn btn-outline" href={secondaryCta.href}>{secondaryCta.label}</SmartLink>}
        </div>
      )}
      {children}
      {glance && <Glance items={glance} style={glanceStyle} />}
    </div></section>
  );
}

export function Glance({ items, style }: { items: { label: string; value: React.ReactNode }[]; style?: React.CSSProperties }) {
  return (
    <dl className="glance" style={style}>
      {items.map((g) => <div key={g.label}><dt>{g.label}</dt><dd>{g.value}</dd></div>)}
    </dl>
  );
}

/** Centred section heading. */
export function Head({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="head">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export function Ticks({ items }: { items: string[] }) {
  return <ul className="ticks">{items.map((t) => <li key={t}>{t}</li>)}</ul>;
}

/** Numbered step cards. */
export function Steps({ steps, columns }: { steps: { title: string; body?: string }[]; columns?: number }) {
  return (
    <ol className="steps" style={columns ? { gridTemplateColumns: `repeat(${columns},1fr)` } : undefined}>
      {steps.map((s) => <li key={s.title}><b>{s.title}</b>{s.body && <span>{s.body}</span>}</li>)}
    </ol>
  );
}

export function Cards({ items, cols }: { items: { title: string; tagline?: string; body: string }[]; cols: 2 | 3 | 4 }) {
  return (
    <div className={`cards c${cols}`}>
      {items.map((c) => (
        <div className="card" key={c.title}>
          <h3>{c.title}</h3>{c.tagline && <div className="tl">{c.tagline}</div>}<p>{c.body}</p>
        </div>
      ))}
    </div>
  );
}
