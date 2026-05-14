"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ru" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="w-8 h-8 flex items-center justify-center p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-gray dark:hover:text-white dark:hover:bg-white/10 transition-colors"
      aria-label="Toggle Language"
    >
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
        {locale === "en" ? "RU" : "EN"}
      </span>
    </button>
  );
}
