import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero" style={{ paddingBottom: 96 }}><div className="wrap">
      <span className="crumb">404</span>
      <h1>This page doesn&apos;t exist</h1>
      <p className="lede">The link may be old, or the page may have moved.</p>
      <div className="ctas"><Link className="btn btn-solid" href="/">Go to the home page</Link></div>
    </div></section>
  );
}
