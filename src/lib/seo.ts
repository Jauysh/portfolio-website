export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://niaz.kz";

/**
 * Builds the exact non-redirecting canonical URL matching next-intl's
 * `defaultLocale: 'kk'` + `localePrefix: 'as-needed'` configuration:
 * - kk + "" -> "https://niaz.kz"
 * - kk + "/projects" -> "https://niaz.kz/projects"
 * - en + "" -> "https://niaz.kz/en"
 * - en + "/projects" -> "https://niaz.kz/en/projects"
 */
export function getLocalizedUrl(locale: string, path: string = ""): string {
  const cleanPath =
    !path || path === "/"
      ? ""
      : path.startsWith("/")
      ? path
      : `/${path}`;

  if (locale === "kk") {
    return `${BASE_URL}${cleanPath}`;
  }
  return `${BASE_URL}/${locale}${cleanPath}`;
}

export function getAlternates(locale: string, path: string = "") {
  return {
    canonical: getLocalizedUrl(locale, path),
    languages: {
      kk: getLocalizedUrl("kk", path),
      en: getLocalizedUrl("en", path),
      ru: getLocalizedUrl("ru", path),
      "x-default": getLocalizedUrl("kk", path),
    },
  };
}
