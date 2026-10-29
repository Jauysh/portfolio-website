"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import {
  Search,
  X,
  Layers,
  Network,
  FileText,
  Send,
  Globe,
  ArrowRight,
  Sparkles,
  Home,
} from "lucide-react";
import { ALL_PROJECTS } from "@/data/projectsData";
import { pickLocale } from "@/data/types";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onCustomOpen = () => setOpen(true);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onCustomOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onCustomOpen);
    };
  }, []);

  const quickActions = useMemo(
    () => [
      {
        id: "nav-home",
        label:
          locale === "kk"
            ? "Басты бетке өту"
            : locale === "ru"
            ? "Перейти на Главную"
            : "Go to Home Overview",
        sub: "Navigation · /",
        icon: Home,
        action: () => router.push("/"),
      },
      {
        id: "nav-projects",
        label:
          locale === "kk"
            ? "Барлық 11 Жоба және B2B Өнімдер"
            : locale === "ru"
            ? "Все 11 Проектов и B2B-витрина"
            : "All 11 Case Studies & B2B Products",
        sub: "Case Studies · /projects",
        icon: Layers,
        action: () => router.push("/projects"),
      },
      {
        id: "nav-infra",
        label:
          locale === "kk"
            ? "SD-WAN, Proxmox & 5-Layer DMZ Инфрақұрылымы"
            : locale === "ru"
            ? "Инфраструктура SD-WAN, Proxmox и 5-Layer DMZ"
            : "SD-WAN, Proxmox & 5-Layer DMZ Architecture",
        sub: "Infrastructure · /infrastructure",
        icon: Network,
        action: () => router.push("/infrastructure"),
      },
      {
        id: "nav-cv",
        label:
          locale === "kk"
            ? "1-беттік Инженерлік Түйіндеме (CV PDF)"
            : locale === "ru"
            ? "Инженерное резюме на 1 стр. (CV PDF)"
            : "1-Page Printable Engineering CV (PDF)",
        sub: "Resume · /about#cv",
        icon: FileText,
        action: () => router.push("/about#cv"),
      },
      {
        id: "nav-contact",
        label:
          locale === "kk"
            ? "B2B Демо сұрау / Telegram-ға жазу"
            : locale === "ru"
            ? "Запросить B2B-демо / Связаться в Telegram"
            : "Request B2B Demo / Direct Telegram Contact",
        sub: "SLA < 24h · /contact",
        icon: Send,
        action: () => router.push("/contact"),
      },
      {
        id: "lang-kk",
        label: "Тілді Қазақшаға (KK) ауыстыру",
        sub: "Language · KK",
        icon: Globe,
        action: () => router.replace(pathname, { locale: "kk" }),
      },
      {
        id: "lang-en",
        label: "Switch Language to English (EN)",
        sub: "Language · EN",
        icon: Globe,
        action: () => router.replace(pathname, { locale: "en" }),
      },
      {
        id: "lang-ru",
        label: "Переключить язык на Русский (RU)",
        sub: "Language · RU",
        icon: Globe,
        action: () => router.replace(pathname, { locale: "ru" }),
      },
    ],
    [locale, pathname, router]
  );

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => {
      const title = pickLocale(p.title, locale).toLowerCase();
      const sub = pickLocale(p.subtitle, locale).toLowerCase();
      const sum = pickLocale(p.summary, locale).toLowerCase();
      const stack = p.techStack.join(" ").toLowerCase();
      return (
        title.includes(q) ||
        sub.includes(q) ||
        sum.includes(q) ||
        stack.includes(q)
      );
    });
  }, [query, locale]);

  const filteredActions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return quickActions;
    return quickActions.filter(
      (a) =>
        a.label.toLowerCase().includes(q) || a.sub.toLowerCase().includes(q)
    );
  }, [query, quickActions]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] bg-slate-950/75 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-6 print:hidden"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#0E131D] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-white/10">
          <Search className="w-5 h-5 text-amber-500 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              locale === "kk"
                ? "Жобаны, технологияны (Next.js, MikroTik, 1C, Redis) немесе бөлімді іздеу..."
                : locale === "ru"
                ? "Поиск проекта, технологии (Next.js, MikroTik, 1C, Redis) или раздела..."
                : "Search projects, stack (Next.js, MikroTik, 1C, Redis) or actions..."
            }
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
          />
          <button
            onClick={() => setOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5"
            aria-label="Close Command Palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[68vh] overflow-y-auto p-3 space-y-5">
          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div className="space-y-1.5">
              <div className="px-2.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-white/40 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>
                  {locale === "kk"
                    ? `Жобалар мен B2B Өнімдер (${filteredProjects.length})`
                    : locale === "ru"
                    ? `Проекты и B2B-продукты (${filteredProjects.length})`
                    : `Case Studies & B2B Products (${filteredProjects.length})`}
                </span>
              </div>
              <div className="space-y-1">
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      setOpen(false);
                      router.push(`/projects#${proj.slug}`);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors flex items-center justify-between gap-3 group"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber truncate">
                        {pickLocale(proj.title, locale)}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
                        {proj.techStack.slice(0, 5).join(" · ")}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          {filteredActions.length > 0 && (
            <div className="space-y-1.5">
              <div className="px-2.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-white/40">
                //{" "}
                {locale === "kk"
                  ? "Жылдам әрекеттер"
                  : locale === "ru"
                  ? "Быстрые действия"
                  : "Quick Actions"}
              </div>
              <div className="space-y-1">
                {filteredActions.map((act) => {
                  const Icon = act.icon;
                  return (
                    <button
                      key={act.id}
                      onClick={() => {
                        setOpen(false);
                        act.action();
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 truncate">
                          {act.label}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 shrink-0">
                        {act.sub}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="px-4 py-2.5 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/30 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>ESC — Close</span>
          <span>⌘K / Ctrl+K — Quick Search</span>
        </div>
      </div>
    </div>
  );
}
