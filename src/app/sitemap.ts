import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jauysh.dev";
const LOCALES = ["kk", "en", "ru"] as const;
const ROUTES = ["", "/projects", "/infrastructure", "/about", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of ROUTES) {
    for (const locale of LOCALES) {
      const url = `${BASE_URL}/${locale}${route}`;
      entries.push({
        url,
        lastModified: now,
        changeFrequency: route === "" || route === "/projects" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/projects" ? 0.9 : 0.8,
        alternates: {
          languages: {
            kk: `${BASE_URL}/kk${route}`,
            en: `${BASE_URL}/en${route}`,
            ru: `${BASE_URL}/ru${route}`,
            "x-default": `${BASE_URL}/kk${route}`,
          },
        },
      });
    }
  }

  return entries;
}
