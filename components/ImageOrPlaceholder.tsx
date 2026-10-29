import { publicFileExists } from "@/lib/content";
import { ImageIcon } from "lucide-react";

/**
 * Shows the image if the file exists in /public; otherwise a labelled placeholder
 * telling the editor which file to add. Keeps the build green while assets are pending.
 */
export default function ImageOrPlaceholder({ src, alt, className = "", dark = false }: { src?: string; alt: string; className?: string; dark?: boolean }) {
  if (src && publicFileExists(src)) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`w-full rounded-2xl border ${dark ? "border-white/10" : "border-ink-100"} shadow-xl ${className}`} />;
  }
  return (
    <div role="img" aria-label={alt}
      className={`flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed p-6 text-center ${dark ? "border-white/20 bg-white/5 text-ink-100" : "border-ink-300 bg-paper text-ink-600"} ${className}`}>
      <ImageIcon className="h-8 w-8 opacity-60" aria-hidden="true" />
      <p className="text-sm font-medium">Product screenshot</p>
      {src && <p className="font-mono text-xs opacity-70">Add file: public{src}</p>}
    </div>
  );
}
