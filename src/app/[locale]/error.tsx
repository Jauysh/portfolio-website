"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export default function SegmentError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  const locale = useLocale();

  useEffect(() => {
    console.error("Segment runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 pt-24 pb-16">
      <div className="max-w-lg w-full rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111622] p-8 sm:p-10 text-center space-y-6 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
          <AlertTriangle className="w-4 h-4" />
          <span>{"// RUNTIME BOUNDARY"}</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {locale === "kk"
              ? "Күтпеген қате орын алды"
              : locale === "ru"
              ? "Произошла непредвиденная ошибка"
              : "Something went wrong"}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {locale === "kk"
              ? "Бетті қайта жүктеп көріңіз немесе басты бетке оралыңыз."
              : locale === "ru"
              ? "Попробуйте обновить сегмент страницы или вернитесь на главную."
              : "Please try rendering this section again or return to the home page."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <button
            onClick={() => retry()}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber text-slate-950 font-semibold text-sm hover:bg-amber/90 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>
              {locale === "kk"
                ? "Қайта көру"
                : locale === "ru"
                ? "Повторить"
                : "Try Again"}
            </span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-200 dark:border-white/15 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 font-mono text-xs sm:text-sm transition-colors"
          >
            {locale === "kk"
              ? "Басты бетке"
              : locale === "ru"
              ? "На главную"
              : "Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
