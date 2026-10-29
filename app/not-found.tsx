import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site flex flex-col items-center py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-bold">This page doesn&apos;t exist</h1>
      <p className="mt-4 text-ink-600">The link may be old, or the page may have moved.</p>
      <Link href="/" className="btn-dark mt-8">Go to the home page</Link>
    </section>
  );
}
