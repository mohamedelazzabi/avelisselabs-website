import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F7F8FA",
    theme_color: "#FF7EB6",
    icons: [
      {
        src: "/icon",
        sizes: "96x96",
        type: "image/png",
      },
    ],
  };
}
