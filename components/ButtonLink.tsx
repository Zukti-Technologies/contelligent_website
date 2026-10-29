import SmartLink from "./SmartLink";
import type { NavLink } from "@/lib/content";

const STYLES: Record<NonNullable<NavLink["style"]>, string> = {
  primary: "btn-primary",
  dark: "btn-dark",
  outline: "btn-outline",
  link: "text-sm font-medium text-ink-700 hover:text-mint-700",
};

/** Renders a NavLink as a button or plain link according to its `style` (set in the content files). */
export default function ButtonLink({ link, fallback = "link", size = "md", className = "" }: { link: NavLink; fallback?: NonNullable<NavLink["style"]>; size?: "sm" | "md"; className?: string }) {
  const style = link.style ?? fallback;
  const small = size === "sm" && style !== "link" ? "!px-3.5 !py-1.5 !text-xs" : "";
  return (
    <SmartLink href={link.href} external={link.external} className={`${STYLES[style]} ${small} ${className}`}>
      {link.label}
    </SmartLink>
  );
}
