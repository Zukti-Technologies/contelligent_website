import Link from "next/link";

/** Internal links use Next <Link>; external links open in a new tab. */
export default function SmartLink({
  href, external, className, children, onClick,
}: { href: string; external?: boolean; className?: string; children: React.ReactNode; onClick?: () => void }) {
  const isExternal = external || /^https?:\/\//.test(href) || href.startsWith("mailto:");
  if (isExternal) {
    const newTab = !href.startsWith("mailto:");
    return (
      <a href={href} className={className} onClick={onClick} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={className} onClick={onClick}>{children}</Link>;
}
