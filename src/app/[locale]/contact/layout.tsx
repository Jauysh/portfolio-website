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
      ? "B2B Демо Сұрау, Лицензиялау және Архитектуралық Консалтинг"
      : loc === "ru"
      ? "Запросить B2B-Демо, Лицензирование и Архитектурный Консалтинг"
      : "Request B2B Demo, SaaS Licensing & Architectural Consulting";

  const description =
    loc === "kk"
      ? "OmniCheck AI, TenderScan.kz, LuminaMath немесе мектептер мен компанияларға арналған IT/AI инфрақұрылым бойынша тікелей байланыс және демо-сессияға жазылу."
      : loc === "ru"
      ? "Прямая связь с Азаматом Жауышем: запрос B2B-демо OmniCheck AI, TenderScan.kz, LuminaMath и проектирование корпоративной ИТ/ИИ-инфраструктуры."
      : "Direct contact with Azamat Jauysh for B2B product licensing (OmniCheck AI, TenderScan.kz, LuminaMath), turnkey deployment, and engineering consulting.";

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: getAlternates(loc, "/contact"),
    openGraph: {
      title,
      description,
      url: getLocalizedUrl(loc, "/contact"),
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
