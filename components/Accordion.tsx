/** Drill-down list used on the service pages and in the home page "Services in detail" tabs. */
export type AccItem = {
  title: string; summary: string; open?: boolean;
  columns?: { heading: string; points: string[] }[];
  questions?: string[]; body?: string; note?: string;
};

export default function Accordion({ items }: { items: AccItem[] }) {
  return (
    <div className="acc">
      {items.map((it) => (
        <details key={it.title} open={it.open}>
          <summary><span className="acc-t"><b>{it.title}</b><span>{it.summary}</span></span></summary>
          <div className="acc-b">
            {it.columns && (
              <div className="acc-grid">
                {it.columns.map((c) => (
                  <div key={c.heading}><h4>{c.heading}</h4><ul>{c.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
                ))}
              </div>
            )}
            {it.questions && <ul className="qs">{it.questions.map((q) => <li key={q}>{q}</li>)}</ul>}
            {it.body && <p>{it.body}</p>}
            {it.note && <p className="acc-note">{it.note}</p>}
          </div>
        </details>
      ))}
    </div>
  );
}
