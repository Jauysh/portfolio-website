"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  Home,
  Layers,
  Network,
  UserCheck,
  Send,
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => setMounted(true), []);

  const links = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/projects", label: t("projects"), icon: Layers },
    { href: "/infrastructure", label: t("infrastructure"), icon: Network },
    { href: "/about", label: t("about"), icon: UserCheck },
    { href: "/contact", label: t("contact"), icon: Send },
  ];

  const activeLink =
    links.find(
      (l) => l.href === pathname || (l.href !== "/" && pathname.startsWith(l.href))
    ) || links[0];

  return (
    <>
      {/* Desktop Floating Glass Navigation (md and up) */}
      <header className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 print:hidden">
        <nav
          aria-label="Primary Navigation"
          className="flex items-center gap-1.5 px-3 py-2 bg-white/85 dark:bg-[#0B0E14]/85 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full shadow-2xl"
        >
          <Link
            href="/"
            className="flex items-center gap-2 pr-2 mr-1 border-r border-slate-200 dark:border-white/10"
          >
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-emerald-500 flex items-center justify-center text-slate-950 font-black text-xs font-mono">
              AJ
            </span>
          </Link>

          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs lg:text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-gray dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-slate-200 dark:bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}

          <div className="w-[1px] h-6 bg-slate-200 dark:bg-white/10 mx-1" />
          <LanguageSwitcher />
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-gray dark:hover:text-white dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          )}
        </nav>
      </header>

      {/* Mobile Top Compact Bar (< md) */}
      <header className="flex md:hidden fixed top-3 inset-x-3 z-50 print:hidden">
        <div className="w-full px-3.5 py-2 rounded-2xl bg-white/90 dark:bg-[#0B0E14]/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-xl flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-2.5 min-w-0">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-emerald-500 flex items-center justify-center text-slate-950 font-black text-xs font-mono shrink-0 shadow-sm">
              AJ
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold tracking-tight text-slate-900 dark:text-white truncate">
                Azamat Jauysh
              </span>
              <span className="text-[10px] font-mono text-amber-600 dark:text-amber truncate">
                // {activeLink.label}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-1.5 shrink-0">
            <LanguageSwitcher />
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 bg-slate-100 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Bottom App Dock (< md) */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="flex md:hidden fixed bottom-3 inset-x-3 z-50 print:hidden"
      >
        <div className="w-full px-2 py-1.5 rounded-2xl bg-white/95 dark:bg-[#0B0E14]/95 backdrop-blur-md border border-slate-200 dark:border-white/15 shadow-2xl grid grid-cols-5 gap-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
                  isActive
                    ? "bg-amber-500/15 text-amber-600 dark:text-amber font-bold"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Icon
                  className={`w-4 h-4 mb-0.5 ${
                    isActive ? "stroke-[2.5]" : "stroke-[1.75]"
                  }`}
                />
                <span className="text-[10px] leading-tight truncate max-w-full">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
