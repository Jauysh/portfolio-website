import type { MetadataRoute } from "next";
import { ALL_PROJECTS } from "@/data/projectsData";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://niaz.kz";
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

  for (const project of ALL_PROJECTS) {
    const projectRoute = `/projects/${project.slug}`;
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}${projectRoute}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: project.featured ? 0.88 : 0.78,
        alternates: {
          languages: {
            kk: `${BASE_URL}/kk${projectRoute}`,
            en: `${BASE_URL}/en${projectRoute}`,
            ru: `${BASE_URL}/ru${projectRoute}`,
            "x-default": `${BASE_URL}/kk${projectRoute}`,
          },
        },
      });
    }
  }

  return entries;
}
