import { siteConfig } from "@/lib/site";

export function structuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.supportEmail,
      address: {
        "@type": "PostalAddress",
        streetAddress: "30 N Gould St Ste R",
        addressLocality: "Sheridan",
        addressRegion: "WY",
        addressCountry: "US",
      },
      sameAs: [
        siteConfig.social.x,
        siteConfig.social.instagram,
        siteConfig.social.facebook,
        "https://apps.avelisselabs.com",
        "https://support.avelisselabs.com",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.shortName,
      url: siteConfig.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.url}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Pregnancy Calculator & Tracker",
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS, Android",
      description:
        "A pregnancy tracking app in development from Avelisse Labs, with baby growth, journal, kick counter, weight tracker, mood tracking, and AI assistant features.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@type": "Organization", name: siteConfig.name },
    },
  ];
}
