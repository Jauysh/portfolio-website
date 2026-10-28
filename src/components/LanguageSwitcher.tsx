"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

const LOCALES = [
  { code: "kk", label: "KK" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (nextLocale: "kk" | "en" | "ru") => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="inline-flex items-center gap-0.5 p-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
      {LOCALES.map((item) => {
        const active = locale === item.code;
        return (
          <button
            key={item.code}
            onClick={() => switchLocale(item.code)}
            className={`px-2 py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold tracking-wider transition-all ${
              active
                ? "bg-slate-900 text-white dark:bg-amber dark:text-slate-950 shadow-sm"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`}
            aria-label={`Switch language to ${item.label}`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
