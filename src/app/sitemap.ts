import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-05-19"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
