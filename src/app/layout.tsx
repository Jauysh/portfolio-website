import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic", "latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["cyrillic", "latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Асқар Жауыш - AI & Automation Architect",
  description: "Интеллектуалды автоматтандыру және көп агентті жүйелер архитектурасы",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kk" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans antialiased text-slate-gray bg-obsidian text-base">
        {children}
      </body>
    </html>
  );
}
