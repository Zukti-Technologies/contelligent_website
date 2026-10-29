/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes plain HTML/CSS/JS to /out.
  // Upload /out to any static host (OCI Object Storage, GitHub Pages, Netlify, Nginx).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
