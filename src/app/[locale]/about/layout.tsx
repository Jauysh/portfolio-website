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
      ? "Азамат Жауыш — Инженерлік Профиль және 1-Беттік CV (Түйіндеме)"
      : loc === "ru"
      ? "Азамат Жауыш — Инженерный Профиль и Резюме (CV PDF)"
      : "Azamat Jauysh — Full-Cycle Engineering Profile & Printable CV";

  const description =
    loc === "kk"
      ? "Азамат Жауыш — Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect. Тәжірибесі, құзыреттілігі және басып шығаруға дайын 1 беттік инженерлік резюме."
      : loc === "ru"
      ? "Азамат Жауыш — Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect. Профессиональный опыт, ключевые компетенции и инженерное резюме на 1 странице."
      : "Azamat Jauysh — Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect. Career timeline, core engineering pillars, and 1-page printable CV.";

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: getAlternates(loc, "/about"),
    openGraph: {
      title,
      description,
      url: getLocalizedUrl(loc, "/about"),
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
