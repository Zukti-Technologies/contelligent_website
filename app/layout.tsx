import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSite } from "@/lib/content";

const site = getSite();

export const metadata: Metadata = {
  metadataBase: new URL("https://contelligent.in"),
  title: { default: site.companyName, template: `%s` },
  description: site.shortDescription,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },   // black C; turns white in dark-mode browsers
      { url: "/favicon.ico", sizes: "48x48" },          // fallback for older browsers
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
