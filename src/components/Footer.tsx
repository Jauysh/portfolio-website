"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md pb-24 md:pb-8 pt-8 px-4 sm:px-6 z-10 print:hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-slate-950 font-black text-[10px] font-mono">
            AJ
          </span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            Azamat Jauysh
          </span>
          <span>·</span>
          <span className="font-mono text-[11px]">
            {locale === "kk"
              ? "Full-Cycle Engineer & IT Architect"
              : locale === "ru"
              ? "Full-Cycle Инженер и ИТ-Архитектор"
              : "Full-Cycle Engineer & IT Architect"}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-[11px]">
          <Link
            href="/projects"
            className="hover:text-cyan-500 transition-colors"
          >
            {locale === "kk"
              ? "11 Жоба"
              : locale === "ru"
              ? "11 Проектов"
              : "11 Case Studies"}
          </Link>
          <Link
            href="/about#cv"
            className="hover:text-cyan-500 transition-colors"
          >
            CV / Resume
          </Link>
          <a
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition-colors"
          >
            llms.txt
          </a>
          <a
            href="mailto:a.jauysh@gmail.com"
            className="hover:text-cyan-500 transition-colors"
          >
            a.jauysh@gmail.com
          </a>
          <span className="text-slate-400 dark:text-slate-600">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
