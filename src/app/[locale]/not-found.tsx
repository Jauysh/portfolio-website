import { ArrowLeft, Compass, Layers } from "lucide-react";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";

export default async function NotFoundPage() {
  const locale = await getLocale();

  const title =
    locale === "kk"
      ? "Бет табылмады (404)"
      : locale === "ru"
      ? "Страница не найдена (404)"
      : "Page Not Found (404)";

  const description =
    locale === "kk"
      ? "Сіз іздеген сілтеме өзгертілген, жойылған немесе қате терілген болуы мүмкін. Негізгі бөлімдерге төмендегі батырмалар арқылы өте аласыз."
      : locale === "ru"
      ? "Запрошенный адрес был перемещён, удалён или введён с ошибкой. Перейдите к основным разделам платформы ниже."
      : "The requested route may have moved, been retired, or mistyped. Use the links below to return to the platform.";

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 pt-24 pb-16">
      <div className="max-w-xl w-full rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111622] p-8 sm:p-10 text-center space-y-6 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-mono font-bold text-amber-700 dark:text-amber">
          <Compass className="w-4 h-4" />
          <span>{"// HTTP 404 · ROUTE NOT FOUND"}</span>
        </div>

        <div className="space-y-2.5">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white dark:bg-amber dark:text-slate-950 font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {locale === "kk"
                ? "Басты бетке оралу"
                : locale === "ru"
                ? "На главную"
                : "Return Home"}
            </span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-white/15 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 font-mono text-xs sm:text-sm transition-colors"
          >
            <Layers className="w-4 h-4 text-emerald-500" />
            <span>
              {locale === "kk"
                ? "12 Жоба & B2B Витрина"
                : locale === "ru"
                ? "12 Проектов и B2B"
                : "12 Case Studies & B2B"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
