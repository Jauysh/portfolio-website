export type Locale = "kk" | "en" | "ru";

export type ProjectBlockId =
  | "ai-saas"
  | "edtech-enterprise"
  | "infra-devops"
  | "erp-consumer";

export interface LocalizedText {
  kk: string;
  en: string;
  ru: string;
}

export interface ProjectMetric {
  value: string | LocalizedText;
  label: LocalizedText;
}

export interface ProjectItem {
  id: string;
  slug: string;
  block: ProjectBlockId;
  featured?: boolean;
  b2bReady?: boolean;
  title: LocalizedText;
  subtitle: LocalizedText;
  domainOrPort: string | LocalizedText;
  repoUrl?: string;
  liveUrl?: string;
  statusBadge: LocalizedText;
  b2bValue: LocalizedText;
  summary: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  outcome: LocalizedText;
  highlights: {
    kk: string[];
    en: string[];
    ru: string[];
  };
  architectureFlow: string[];
  techStack: string[];
  metrics: ProjectMetric[];
}

export function pickLocale(
  text: string | LocalizedText,
  locale: string
): string {
  if (typeof text === "string") return text;
  if (locale === "en" || locale === "ru" || locale === "kk") {
    return text[locale];
  }
  return text.kk;
}

export function pickLocaleArray(
  arr: { kk: string[]; en: string[]; ru: string[] },
  locale: string
): string[] {
  if (locale === "en" || locale === "ru" || locale === "kk") {
    return arr[locale];
  }
  return arr.kk;
}
