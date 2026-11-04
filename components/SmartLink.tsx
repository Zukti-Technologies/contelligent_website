import Link from "next/link";

/** Internal paths use Next.js links; in-page anchors, mailto and external links use a plain <a>. */
export default function SmartLink({ href, className, children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  if (href.startsWith("/")) return <Link href={href} className={className} {...rest}>{children}</Link>;
  const external = /^https?:/.test(href);
  return <a href={href} className={className} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>{children}</a>;
}
