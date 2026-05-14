import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["cyrillic", "latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["cyrillic", "latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Азамат Жауыш - AI & Automation Architect",
  description: "Интеллектуалды автоматтандыру және көп агентті жүйелер архитектурасы",
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
