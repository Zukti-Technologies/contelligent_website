/* eslint-disable @next/next/no-img-element */
/**
 * A logo as a light/dark pair. The CSS (.th-l / .th-d) shows the right one for the visitor's colour scheme.
 * Set `dark` to always show the white version (for dark backgrounds).
 */
export default function BrandLogo({ logo, className = "", dark = false }: {
  logo: { file: string; fileDark: string; alt: string }; className?: string; dark?: boolean;
}) {
  if (dark) return <img className={className} src={logo.fileDark} alt={logo.alt} />;
  return (
    <>
      <img className={`${className} th-l`} src={logo.file} alt={logo.alt} />
      <img className={`${className} th-d`} src={logo.fileDark} alt={logo.alt} />
    </>
  );
}
