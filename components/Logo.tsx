import Link from "next/link";
import { getSite, publicFileExists } from "@/lib/content";

/**
 * Company logo. Uses the SVG set in content/site.md (logo.file) when that file exists in /public.
 * Falls back to a text wordmark so the site still builds before the logo is supplied.
 */
export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const site = getSite();
  const file = variant === "light" ? site.logo?.fileLight : site.logo?.file;
  const hasFile = publicFileExists(file);
  return (
    <Link href="/" className="flex items-center gap-2" aria-label={`${site.companyName} home`}>
      {hasFile ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={file} alt={site.logo.alt} className="h-7 w-auto sm:h-8" />
      ) : (
        <span className={`font-display text-xl font-bold tracking-tight ${variant === "light" ? "text-white" : "text-ink-800"}`}>
          {site.companyName}
          <span className="ml-0.5 inline-block h-2 w-2 bg-mint-500 align-baseline" aria-hidden="true" />
        </span>
      )}
    </Link>
  );
}
