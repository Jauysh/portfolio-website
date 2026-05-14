"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => setMounted(true), []);

  const links = [
    { href: "/", label: t("home") },
    { href: "/projects", label: t("projects") },
    { href: "/infrastructure", label: t("infrastructure") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <nav className="flex items-center gap-1 sm:gap-2 px-2 py-2 bg-white/80 dark:bg-[#0B0E14]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full shadow-2xl overflow-x-auto no-scrollbar">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                isActive ? "text-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-900 dark:text-slate-gray dark:hover:text-white"
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
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        )}
      </nav>
    </div>
  );
}
