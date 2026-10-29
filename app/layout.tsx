import type { Metadata } from "next";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-3 focus:py-2">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
