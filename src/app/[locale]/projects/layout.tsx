import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/data/types";
import { ALL_PROJECTS } from "@/data/projectsData";
import { BASE_URL, getAlternates, getLocalizedUrl } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = (routing.locales.includes(locale as Locale) ? locale : "kk") as Locale;
  const count = ALL_PROJECTS.length;

  const title =
    loc === "kk"
      ? `Жобалар мен B2B SaaS Каталогы (${count} Өндірістік Жүйе)`
      : loc === "ru"
      ? `Проекты и Каталог B2B SaaS (${count} Промышленных Систем)`
      : `Projects & B2B SaaS Catalog (${count} Production Systems)`;

  const description =
    loc === "kk"
      ? `Auto-Tender GovTech AI, OmniCheck Agentic AI, Core K-12 SIS, LuminaMath және 8-кампустық IT/AI экожүйесінің (${count} жүйе) архитектуралық кейстері.`
      : loc === "ru"
      ? `Архитектурный каталог ${count} промышленных систем: Auto-Tender AI, OmniCheck AI, Core K-12 SIS, LuminaMath, Smart TV Signage и SD-WAN.`
      : `Architectural case studies across ${count} production systems: Auto-Tender AI, OmniCheck Agentic AI, Core K-12 SIS, LuminaMath, Smart TV Signage, and SD-WAN.`;

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
