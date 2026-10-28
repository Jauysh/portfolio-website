import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["cyrillic", "latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["cyrillic", "latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Азамат Жауыш (Azamat Jauysh) — Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect",
  description:
    "7–8 филиалы бар халықаралық білім беру желісінің цифрлық экожүйесін, жоғары жүктемелі веб-платформаларын, мультимодальды ЖИ EdTech SaaS өнімдерін (OmniCheck) және корпоративтік желілік инфрақұрылымын (End-to-End) құрастырушы.",
};

import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${jetBrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased text-slate-900 bg-slate-50 dark:text-slate-gray dark:bg-obsidian text-base transition-colors duration-300">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <Navigation />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
