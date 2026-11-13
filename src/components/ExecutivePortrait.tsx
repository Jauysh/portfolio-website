"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { ALL_PROJECTS } from "@/data/projectsData";

export default function ExecutivePortrait({
  locale = "kk",
}: {
  locale?: string;
}) {
  const name = locale === "kk" ? "Азамат Жауыш" : "Azamat Jauysh";
  const role =
    locale === "kk"
      ? "Full-Cycle AI & IT Architect"
      : locale === "ru"
      ? "Full-Cycle AI и ИТ-Архитектор"
      : "Full-Cycle AI & IT Architect";

  const systems = [
    {
      name: "Auto-Tender GovTech AI",
      meta: "4-Layer AI · Kaspi/1688/OEM ROI",
      badge: "0.005s Cache",
      href: "/projects/auto-tender",
    },
    {
      name: "OmniCheck Agentic AI",
      meta: "4 Modes · Mastery Loop · GDPR",
      badge: "B2B SaaS",
      href: "/projects/omnicheck",
    },
    {
      name: "Core K-12 SIS & API",
      meta: "PostgreSQL 16 · 9 Modules · SSO",
      badge: "481 → 1 DB",
      href: "/projects/core-sis",
    },
    {
      name: "SD-WAN, NOC & Smart TV",
      meta: "MikroTik · Proxmox · SQLite WAL",
      badge: "41x TTFB",
      href: "/projects/school-it-infra",
    },
  ];

  return (
    <div className="w-full rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#111622] shadow-xl shadow-slate-900/5 dark:shadow-2xl overflow-hidden">
      {/* Cover Portrait */}
      <div className="relative w-full h-64 sm:h-72 bg-[#0B0E14] overflow-hidden">
        <Image
          src="/avatar.jpg"
          alt={name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 440px"
          className="object-cover object-[50%_8%]"
        />

        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-emerald-500/35 text-[10px] font-mono font-bold text-emerald-300 uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {locale === "kk"
                ? "B2B & Консалтингке Ашық"
                : locale === "ru"
                ? "Открыт для B2B"
                : "Open for B2B & Advisory"}
            </span>
          </div>

          <span className="px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-slate-300 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>niaz.kz</span>
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/75 to-transparent flex flex-col justify-end p-5">
          <div className="flex items-end justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none">
                {name}
              </h2>
              <p className="text-xs font-mono text-amber mt-1.5">{role}</p>
            </div>
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mb-0.5" />
          </div>
        </div>
      </div>

      {/* Compact Dossier Body */}
      <div className="p-4 sm:p-5 space-y-3.5">
        <div className="grid grid-cols-3 gap-2 text-center font-mono">
          <div className="p-2 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5">
            <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              {ALL_PROJECTS.length}
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">
              {locale === "kk"
                ? "Өндірістік жүйе"
                : locale === "ru"
                ? "Систем в проде"
                : "Prod Systems"}
            </div>
          </div>
          <div className="p-2 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5">
            <div className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400">
              8
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">
              {locale === "kk"
                ? "Кампус & HQ"
                : locale === "ru"
                ? "Кампусов и HQ"
                : "Campus Units"}
            </div>
          </div>
          <div className="p-2 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5">
            <div className="text-sm sm:text-base font-bold text-amber-600 dark:text-amber">
              100 TB+
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">
              {locale === "kk"
                ? "Деректер & Бұлт"
                : locale === "ru"
                ? "Облако и БД"
                : "Cloud & DB"}
            </div>
          </div>
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

        <div className="pt-2.5 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-2 text-[11px] font-mono">
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
