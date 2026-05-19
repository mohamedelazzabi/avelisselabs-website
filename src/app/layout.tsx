import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/lib/site";
import { structuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Avelisse Labs | Smart Mobile Apps for Everyday Wellness",
    template: "%s | Avelisse Labs",
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name }],
  keywords: [
    "Avelisse Labs",
    "pregnancy tracker app",
    "fitness apps",
    "calorie counter app",
    "period tracker app",
    "health apps",
    "wellness apps",
    "family apps",
    "AI pregnancy assistant",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon",
    apple: "/icon",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: "Avelisse Labs | Smart Mobile Apps for Everyday Wellness",
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avelisse Labs",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F8FA" },
    { media: "(prefers-color-scheme: dark)", color: "#10111A" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          {children}
          {structuredData().map((schema) => (
            <script
              key={schema["@type"]}
              type="application/ld+json"
              suppressHydrationWarning
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))}
        </Providers>
      </body>
    </html>
  );
}
