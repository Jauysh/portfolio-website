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
      ? "Көп Кампустық SD-WAN, Proxmox Cloud & 5-Layer DMZ Инфрақұрылымы"
      : loc === "ru"
      ? "Мультикампусная Инфраструктура SD-WAN, Proxmox Cloud и 5-Layer DMZ"
      : "Multi-Campus SD-WAN, Proxmox Cloud & 5-Layer DMZ Architecture";

  const description =
    loc === "kk"
      ? "7–8 оқу кампусын біріктіретін MikroTik RouterOS WireGuard SD-WAN, CAPsMAN Wi-Fi 6, Proxmox LXC кластері, 12MB RAM NOC мониторингі және 100 TB+ бұлттық қауіпсіздік."
      : loc === "ru"
      ? "Архитектура сети из 8 кампусов: MikroTik WireGuard SD-WAN, CAPsMAN Wi-Fi 6, кластер Proxmox LXC, 5-уровневая DMZ, NOC-мониторинг (12 МБ RAM) и 100 ТБ+ облако."
      : "Enterprise network & cloud blueprint across 8 campuses: MikroTik WireGuard SD-WAN, CAPsMAN Wi-Fi 6, Proxmox LXC cluster, 5-Layer DMZ, and 100 TB+ Workspace IAM.";

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: getAlternates(loc, "/infrastructure"),
    openGraph: {
      title,
      description,
      url: getLocalizedUrl(loc, "/infrastructure"),
    },
  };
}

export default function InfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
