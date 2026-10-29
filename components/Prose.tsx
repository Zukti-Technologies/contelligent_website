/** Renders markdown body HTML (from /content files) with consistent typography. */
export default function Prose({ html, className = "" }: { html: string; className?: string }) {
  if (!html) return null;
  return (
    <div
      className={`prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink-800 prose-p:text-ink-600 prose-a:text-mint-700 prose-strong:text-ink-800 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
