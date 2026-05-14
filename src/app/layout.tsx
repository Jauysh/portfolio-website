import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic", "latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["cyrillic", "latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Азамат Жауыш - AI & Automation Architect",
  description: "Интеллектуалды автоматтандыру және көп агентті жүйелер архитектурасы",
};

import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kk" className={`${inter.variable} ${jetBrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased text-slate-900 bg-slate-50 dark:text-slate-gray dark:bg-obsidian text-base transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
