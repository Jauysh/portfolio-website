import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ALL_PROJECTS } from "@/data/projectsData";
import type { Locale } from "@/data/types";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "cyrillic-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jauysh.dev";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0e1a" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const SEO_BY_LOCALE: Record<
  Locale,
  { title: string; description: string; ogLocale: string }
> = {
  kk: {
    title:
      "Азамат Жауыш — Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect",
    description:
      "7 оқу кампусының цифрлық экожүйесін, жоғары жүктемелі веб-платформаларын (LuminaMath, SSP, GM-App, EduStaff IAM), мультимодальды ЖИ EdTech SaaS (OmniCheck) өнімдерін және 100 TB+ корпоративтік инфрақұрылымын басынан аяғына дейін құрастырушы.",
    ogLocale: "kk_KZ",
  },
  en: {
    title:
      "Azamat Jauysh — Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect",
    description:
      "End-to-end architect of multimodal AI EdTech SaaS (OmniCheck), high-concurrency Olympiad & school MIS platforms (LuminaMath, SSP, GM-App, EduStaff IAM), and 7-campus network & 100 TB+ cloud infrastructure.",
    ogLocale: "en_US",
  },
  ru: {
    title:
      "Азамат Жауыш — Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect",
    description:
      "End-to-End архитектор цифровой экосистемы сети из 7 кампусов: мультимодальный ИИ EdTech SaaS (OmniCheck), высоконагруженные платформы (LuminaMath, SSP, GM-App, EduStaff IAM) и корпоративная сеть / 100 ТБ+ облако.",
    ogLocale: "ru_RU",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = (["kk", "en", "ru"].includes(locale) ? locale : "kk") as Locale;
  const seo = SEO_BY_LOCALE[loc];

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: seo.title,
      template: `%s | Azamat Jauysh`,
    },
    description: seo.description,
    applicationName: "Azamat Jauysh Portfolio & B2B Showcase",
    authors: [{ name: "Azamat Jauysh", url: BASE_URL }],
    creator: "Azamat Jauysh",
    publisher: "Azamat Jauysh",
    keywords: [
      "Azamat Jauysh",
      "Азамат Жауыш",
      "Full-Stack Engineer",
      "AI Product Engineer",
      "EdTech SaaS Architect",
      "OmniCheck",
      "LuminaMath",
      "EduStaff IAM",
      "IT Infrastructure Architect",
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "MikroTik CAPsMAN",
      "Google Workspace Enterprise",
      "1C Enterprise EDT",
    ],
    alternates: {
      canonical: `${BASE_URL}/${loc}`,
      languages: {
        kk: `${BASE_URL}/kk`,
        en: `${BASE_URL}/en`,
        ru: `${BASE_URL}/ru`,
        "x-default": `${BASE_URL}/kk`,
      },
    },
    openGraph: {
      type: "website",
      locale: seo.ogLocale,
      alternateLocale: ["kk_KZ", "en_US", "ru_RU"].filter(
        (l) => l !== seo.ogLocale
      ),
      url: `${BASE_URL}/${loc}`,
      siteName: "Azamat Jauysh — Engineering & B2B Portfolio",
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: `/opengraph-image`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "ai-content-declaration": `${BASE_URL}/llms-full.txt`,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "kk" | "en" | "ru")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const loc = locale as Locale;
  const seo = SEO_BY_LOCALE[loc];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "Azamat Jauysh",
        alternateName: "Азамат Жауыш",
        jobTitle:
          "Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect",
        url: `${BASE_URL}/${loc}`,
        email: "mailto:a.jauysh@gmail.com",
        sameAs: ["https://github.com/jauysh", "https://t.me/jauysh"],
        knowsLanguage: ["kk", "ru", "tr", "en", "ar"],
        knowsAbout: [
          "Next.js",
          "TypeScript",
          "Multimodal AI Systems",
          "EdTech SaaS Architecture",
          "PostgreSQL & Prisma",
          "Google Cloud Run",
          "MikroTik RouterOS & CAPsMAN",
          "VLAN & WireGuard VPN",
          "Google Workspace Enterprise Administration",
          "1C:Enterprise ERP & EDT",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Azamat Jauysh — Full-Cycle Engineer & B2B Product Showcase",
        description: seo.description,
        inLanguage: ["kk", "en", "ru"],
        publisher: { "@id": `${BASE_URL}/#person` },
      },
      {
        "@type": "ItemList",
        "@id": `${BASE_URL}/#products`,
        name: "B2B Software Products & Production Case Studies",
        numberOfItems: ALL_PROJECTS.length,
        itemListElement: ALL_PROJECTS.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.title[loc],
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Cloud, Linux, iOS, Android",
            description: project.summary[loc],
            author: { "@id": `${BASE_URL}/#person` },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "USD",
              price: "0",
              description: project.b2bValue[loc],
            },
          },
        })),
      },
    ],
  };

  return (
    <html
      lang={locale}
      className={`${jakarta.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-cyan-500 selection:text-white min-h-screen flex flex-col w-full max-w-[100vw] overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="ambient-glow" />
            <Navigation />
            <main className="flex-grow z-10 pb-24 md:pb-0 w-full max-w-[100vw] overflow-x-hidden min-w-0">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
