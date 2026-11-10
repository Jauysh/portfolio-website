import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/data/types";
import { BASE_URL, getAlternates, getLocalizedUrl } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = (routing.locales.includes(locale as Locale) ? locale : "kk") as Locale;

  const title =
    loc === "kk"
      ? "Жобалар мен B2B SaaS Витринасы (12 Өндірістік Жүйе)"
      : loc === "ru"
      ? "Проекты и Витрина B2B SaaS (12 Промышленных Систем)"
      : "Projects & B2B SaaS Product Suite (12 Production Systems)";

  const description =
    loc === "kk"
      ? "OmniCheck AI, TenderScan.kz (Auto-Tender), LuminaMath, GM-App, SSP және 7–8 кампустық IT/AI экожүйесінің толық техникалық архитектурасы мен B2B шешімдері."
      : loc === "ru"
      ? "Полный архитектурный разбор 12 промышленных систем: OmniCheck AI, TenderScan.kz, LuminaMath, GM-App, SSP и корпоративные EdTech/GovTech решения."
      : "Complete architectural case studies of 12 production systems: OmniCheck AI, TenderScan.kz, LuminaMath, GM-App, SSP, and enterprise B2B SaaS platforms.";

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: getAlternates(loc, "/projects"),
    openGraph: {
      title,
      description,
      url: getLocalizedUrl(loc, "/projects"),
    },
  };
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
