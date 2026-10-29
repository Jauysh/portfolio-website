"use client";

import {
  ArrowUpRight,
  Mail,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { Link } from "@/i18n/routing";

export default function ExecutivePortrait({
  locale = "kk",
}: {
  locale?: string;
}) {
  const name = locale === "kk" ? "Азамат Жауыш" : "Azamat Jauysh";
  const role =
    locale === "kk"
      ? "Full-Cycle Engineer & IT Architect"
      : locale === "ru"
      ? "Full-Cycle Инженер и ИТ-Архитектор"
      : "Full-Cycle Engineer & IT Architect";

  const systems = [
    {
      name: "OmniCheck AI SaaS",
      meta: "Gemini Vision · dHash · Canvas GDPR",
      badge: "B2B Flagship",
      href: "/projects#omnicheck",
    },
    {
      name: "LuminaMath Olympiad",
      meta: "Cloud Run · 1,200 req/s · OMR PDF",
      badge: "700+ Peak",
      href: "/projects#luminamath",
    },
    {
      name: "GM-App & SSP Engines",
      meta: "PostgreSQL Serializable · 0% Overbook",
      badge: "7 Campuses",
      href: "/projects#ssp",
    },
    {
      name: "SD-WAN & 5-Layer DMZ",
      meta: "MikroTik · Proxmox · 12MB RAM NOC",
      badge: "41x TTFB",
      href: "/infrastructure",
    },
  ];

  return (
    <div className="w-full rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#111622] shadow-xl shadow-slate-900/5 dark:shadow-2xl overflow-hidden">
      {/* 1. Large Editorial Cover Portrait (Apple / Forbes / Stripe Founder Bento Style) */}
      <div className="relative w-full h-72 sm:h-80 bg-[#0B0E14] overflow-hidden">
        <img
          src="/avatar.jpg?v=5"
          alt={name}
          width={640}
          height={640}
          className="w-full h-full object-cover object-[50%_8%]"
        />

        {/* Top Status Pill */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-emerald-500/35 text-[10px] font-mono font-bold text-emerald-300 uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {locale === "kk"
                ? "B2B & Жобаларға Ашық"
                : locale === "ru"
                ? "Открыт для B2B и Проектов"
                : "Available for B2B & Advisory"}
            </span>
          </div>

          <span className="px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-slate-300 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>niaz.kz</span>
          </span>
        </div>

        {/* Smooth Bottom Gradient Dissolve into Card Body */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/75 to-transparent flex flex-col justify-end p-5">
          <div className="flex items-end justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none">
                {name}
              </h2>
              <p className="text-xs font-mono text-amber mt-1.5">
                {role}
              </p>
            </div>
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mb-0.5" />
          </div>
        </div>
      </div>

      {/* 2. Dossier Body */}
      <div className="p-5 space-y-4">
        {/* Key Impact Metrics Strip */}
        <div className="grid grid-cols-3 gap-2.5 text-center font-mono">
          <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5">
            <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              11
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">
              {locale === "kk"
                ? "Өндірістік жүйе"
                : locale === "ru"
                ? "Систем в проде"
                : "Live Systems"}
            </div>
          </div>
          <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5">
            <div className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400">
              7–8
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">
              {locale === "kk"
                ? "Оқу кампусы"
                : locale === "ru"
                ? "Кампусов"
                : "Campuses"}
            </div>
          </div>
          <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5">
            <div className="text-sm sm:text-base font-bold text-amber-600 dark:text-amber">
              100 TB+
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">
              {locale === "kk"
                ? "Бұлт & Деректер"
                : locale === "ru"
                ? "Облако и БД"
                : "Cloud & DB"}
            </div>
          </div>
        </div>

        {/* Live Ecosystem Architecture Nodes */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-white/40 px-1">
            <span>
              //{" "}
              {locale === "kk"
                ? "НЕГІЗГІ ЭКОЖҮЙЕ (PRODUCTION)"
                : locale === "ru"
                ? "КЛЮЧЕВЫЕ СИСТЕМЫ (PRODUCTION)"
                : "CORE PRODUCTION ECOSYSTEM"}
            </span>
            <span className="text-emerald-600 dark:text-emerald-400">
              99.98% SLA
            </span>
          </div>

          <div className="space-y-1.5">
            {systems.map((sys) => (
              <Link
                key={sys.name}
                href={sys.href}
                className="group flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-white/[0.02] dark:hover:bg-white/[0.05] border border-slate-200/60 dark:border-white/5 transition-all"
              >
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="truncate">{sys.name}</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate pl-3">
                    {sys.meta}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber border border-amber-500/20">
                    {sys.badge}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Direct Executive Endpoints */}
        <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-2 text-[11px] font-mono">
          <a
            href="mailto:a.jauysh@gmail.com"
            className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors truncate"
          >
            <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="truncate">a.jauysh@gmail.com</span>
          </a>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://t.me/jauysh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 transition-colors"
            >
              Telegram
            </a>
            <a
              href="https://github.com/Jauysh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
