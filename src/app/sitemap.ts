import type { MetadataRoute } from "next";
import { ALL_PROJECTS } from "@/data/projectsData";
import { getAlternates, getLocalizedUrl } from "@/lib/seo";

const LOCALES = ["kk", "en", "ru"] as const;
const ROUTES = ["", "/projects", "/infrastructure", "/about", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of ROUTES) {
    for (const locale of LOCALES) {
      entries.push({
        url: getLocalizedUrl(locale, route),
        lastModified: now,
        changeFrequency: route === "" || route === "/projects" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/projects" ? 0.9 : 0.8,
        alternates: {
          languages: getAlternates(locale, route).languages,
        },
      });
    }
  }

  for (const project of ALL_PROJECTS) {
    const projectRoute = `/projects/${project.slug}`;
    for (const locale of LOCALES) {
      entries.push({
        url: getLocalizedUrl(locale, projectRoute),
        lastModified: now,
        changeFrequency: "weekly",
        priority: project.featured ? 0.88 : 0.78,
        alternates: {
          languages: getAlternates(locale, projectRoute).languages,
        },
      });
    }
  }

  return entries;
}
