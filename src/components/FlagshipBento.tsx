"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Database,
  EyeOff,
  Eye,
  Tv,
  Network,
  Users,
  Trophy,
  Globe,
  BarChart3,
  BookOpen,
  Megaphone,
} from "lucide-react";
import { Link } from "@/i18n/routing";

export default function FlagshipBento({ locale }: { locale: string }) {
  const [piiMasked, setPiiMasked] = useState(true);

  const k12Modules = [
    {
      slug: "luminamath",
      icon: Trophy,
      title:
        locale === "kk"
          ? "LuminaMath Олимпиадасы"
          : locale === "ru"
          ? "Олимпиада LuminaMath"
          : "LuminaMath Olympiad",
      metric: "1,200 req/s · OMR PDF",
    },
    {
      slug: "hr-orizont",
      icon: Users,
      title:
        locale === "kk"
          ? "EduStaff HR & IAM"
          : locale === "ru"
          ? "EduStaff HR и IAM"
          : "EduStaff HR & IAM",
      metric: "582 IAM · QR Диплом",
    },
    {
      slug: "gm-app",
      icon: BarChart3,
      title:
        locale === "kk"
          ? "GM-App Қабылдау MIS"
          : locale === "ru"
          ? "GM-App Прием MIS"
          : "GM-App Admissions MIS",
      metric: "30 → 1 DB · 50+ Басшы",
    },
    {
      slug: "ssp",
      icon: BookOpen,
      title:
        locale === "kk"
          ? "SSP Элективтер Жүйесі"
          : locale === "ru"
          ? "SSP Выбор Элективов"
          : "SSP Elective Engine",
      metric: "0% Overbook · Socket.IO",
    },
    {
      slug: "corporate-web-cms",
      icon: Globe,
      title:
        locale === "kk"
          ? "3D-Secure Веб & CMS"
          : locale === "ru"
          ? "3D-Secure Портал и CMS"
          : "3D-Secure Web & CMS",
      metric: "30 Routes · 2,773 GDPR",
    },
    {
      slug: "media-os",
      icon: Megaphone,
      title:
        locale === "kk"
          ? "5-Agent AI Media OS"
          : locale === "ru"
          ? "5-Agent AI Media OS"
          : "5-Agent AI Media OS",
      metric: "29 Арна · SRT & CRM",
    },
    {
      slug: "smart-tv-signage",
      icon: Tv,
      title:
        locale === "kk"
          ? "CampusCast Smart TV"
          : locale === "ru"
          ? "CampusCast Smart TV"
          : "CampusCast Smart TV",
      metric: "7 Кампус · 310 Күн",
    },
    {
      slug: "school-it-infra",
      icon: Network,
      title:
        locale === "kk"
          ? "WireGuard SD-WAN & NOC"
          : locale === "ru"
          ? "WireGuard SD-WAN и NOC"
          : "WireGuard SD-WAN & NOC",
      metric: "41x TTFB · 5-Layer DMZ",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top 2 Commercial AI SaaS Flagships */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* FLAGSHIP 01: AUTO-TENDER */}
        <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111622] p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-sm dark:shadow-none hover:border-amber-500/40 dark:hover:border-amber/40 transition-all">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber border border-amber-500/25">
                {"01 · GOVTECH & SOURCING AI SAAS"}
              </span>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                5 Portals · 0% Ban Core
              </span>
            </div>

            <div>
              <Link href="/projects/auto-tender" className="group inline-block">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber transition-colors">
                  Auto-Tender Intelligence
                </h3>
              </Link>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                {locale === "kk"
                  ? "PDF спецификацияларды 4-қабатты нейро-символдық ЖИ арқылы тексеріп, РНУ қаупін, 6–12 айлық Pre-RFP жоспарларды және ҚР / 1688 / OEM таза маржасын есептейді."
                  : locale === "ru"
                  ? "Проверяет PDF-спецификации 4-уровневым ИИ без галлюцинаций, выявляет риски РНУ, прогнозирует планы за 6–12 мес. и считает маржу по ценам РК / 1688 / OEM."
                  : "Parses procurement PDFs with 4-layer neuro-symbolic AI verification, flags blacklist traps, forecasts 6–12 mo Pre-RFP budgets, and calculates net retail/1688/OEM ROI."}
              </p>
            </div>

            {/* Visual Terminal Snapshot */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-950 text-slate-200 p-4 font-mono text-xs space-y-2.5">
              <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-white/10 pb-2">
                <span>SPEC VERIFIER · TEMP=0.0 JUDGE</span>
                <span className="text-emerald-400 font-bold">ANTI-RNU: SAFE</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-0.5">
                <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[10px] text-slate-400">KZ Retail</div>
                  <div className="text-xs font-bold text-white mt-0.5">+18% ROI</div>
                </div>
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
                  <div className="text-[10px] text-emerald-300">1688 Factory</div>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5">+39% ROI</div>
                </div>
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/25">
                  <div className="text-[10px] text-amber-300">HS-Code OEM</div>
                  <div className="text-xs font-bold text-amber mt-0.5">411+ CRM</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] text-slate-300">
                <span className="px-2 py-0.5 rounded bg-white/5">0.005s Cache</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Reflexion Loop</span>
                <span className="px-2 py-0.5 rounded bg-white/5">6–12m Pre-RFP</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Zero-Trust Paywall</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200/80 dark:border-white/10">
            <Link
              href="/projects/auto-tender"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber transition-colors"
            >
              <span>
                {locale === "kk"
                  ? "Архитектура & Кейс"
                  : locale === "ru"
                  ? "Архитектура и кейс"
                  : "Architecture & Case Study"}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact?product=auto-tender"
              className="px-3.5 py-1.5 rounded-xl bg-amber text-slate-950 font-mono text-xs font-bold hover:bg-amber/90 transition-colors"
            >
              {locale === "kk"
                ? "B2B Демо"
                : locale === "ru"
                ? "B2B-демо"
                : "B2B Demo"}
            </Link>
          </div>
        </div>

        {/* FLAGSHIP 02: OMNICHECK AI */}
        <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111622] p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-sm dark:shadow-none hover:border-emerald-500/40 transition-all">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                {"02 · AGENTIC EDTECH SAAS"}
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                4 Modes · 6 Locales (RTL)
              </span>
            </div>

            <div>
              <Link href="/projects/omnicheck" className="group inline-block">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  OmniCheck Agentic AI
                </h3>
              </Link>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                {locale === "kk"
                  ? "Қолжазба дәптерлерді формуласына дейін тексеріп, «Concept Gap → Mastery Recovery → 5-мин Warm-up → Ата-ана брифингі» автономды циклін іске қосады."
                  : locale === "ru"
                  ? "Проверяет рукописные тетради вплоть до формул и запускает агентский цикл: пробел в теме → Mastery Recovery → разминка класса → брифинг родителям."
                  : "Grades handwritten STEM notebooks down to formulas and runs an autonomous Concept Gap → Mastery Recovery → Morning Warm-up → Parent Briefing loop."}
              </p>
            </div>

            {/* Interactive GDPR Shield + Agentic Loop Mini-Sandbox */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-950 text-slate-200 p-4 font-mono text-xs space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-[11px] truncate">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className={piiMasked ? "text-emerald-400 font-bold truncate" : "text-rose-400 truncate"}>
                    {piiMasked
                      ? "[CANVAS GDPR: TOP-7% PII MASKED]"
                      : "Оқушы: Әлихан С. · 9«А» · ID #402"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setPiiMasked(!piiMasked)}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-[10px] font-bold text-white flex items-center gap-1 shrink-0 cursor-pointer transition-colors"
                >
                  {piiMasked ? <EyeOff className="w-3 h-3 text-emerald-400" /> : <Eye className="w-3 h-3 text-rose-400" />}
                  <span>{piiMasked ? "GDPR ON" : "RAW OFF"}</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center pt-0.5">
                <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[10px] text-slate-400">dHash Check</div>
                  <div className="text-xs font-bold text-white mt-0.5">&lt; 1 sec</div>
                </div>
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
                  <div className="text-[10px] text-emerald-300">Socratic Loop</div>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5">Auto-Pilot</div>
                </div>
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/25">
                  <div className="text-[10px] text-amber-300">Class Starter</div>
                  <div className="text-xs font-bold text-amber mt-0.5">3-Prob Warmup</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] text-slate-300">
                <span className="px-2 py-0.5 rounded bg-white/5">Solo · Center · School · Network</span>
                <span className="px-2 py-0.5 rounded bg-white/5">BullMQ Vision</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200/80 dark:border-white/10">
            <Link
              href="/projects/omnicheck"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <span>
                {locale === "kk"
                  ? "Архитектура & Кейс"
                  : locale === "ru"
                  ? "Архитектура и кейс"
                  : "Architecture & Case Study"}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact?product=omnicheck"
              className="px-3.5 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-mono text-xs font-bold hover:bg-emerald-400 transition-colors"
            >
              {locale === "kk"
                ? "B2B Демо"
                : locale === "ru"
                ? "B2B-демо"
                : "B2B Demo"}
            </Link>
          </div>
        </div>
      </div>

      {/* FLAGSHIP 03: 8-CAMPUS UNIFIED K-12 DIGITAL OS */}
      <div className="rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111622] p-6 sm:p-8 space-y-6 shadow-sm dark:shadow-none">
        {/* Hub Header: Central Core SIS */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-slate-200 dark:border-white/10">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25">
                {"03 · 8-UNIT UNIFIED K-12 DIGITAL OS"}
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                PostgreSQL 16 Single Source of Truth · Proxmox CT 100–107
              </span>
            </div>

            <Link href="/projects/core-sis" className="group inline-flex items-center gap-2">
              <Database className="w-6 h-6 text-amber-500 shrink-0" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber transition-colors">
                {locale === "kk"
                  ? "Core SIS Ядросы және 8-Кампустық Бірыңғай Экожүйе"
                  : locale === "ru"
                  ? "Ядро Core SIS и единая экосистема 8 кампусов"
                  : "Core SIS Hub & 8-Campus Unified School Operating System"}
              </h3>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {locale === "kk"
                ? "481 қағаз/Excel формасын 9 модульдік орталық базаға жинап, олимпиада, HR/IAM, қабылдау MIS, элективтер, 3D-Secure төлем, AI маркетинг, Smart TV және SD-WAN желісін бір жүйеге біріктіреді."
                : locale === "ru"
                ? "Консолидирует 481 бумажную/Excel-форму в 9 модулей PostgreSQL 16 и связывает олимпиады, HR/IAM, квоты приема, элективы, эквайринг, ИИ-медиа, Smart TV и сеть SD-WAN."
                : "Replaces 481 fragmented forms with a 9-module PostgreSQL 16 core powering Olympiads, HR/IAM, Admissions MIS, Electives, 3D-Secure Web, AI Media, Smart TV, and SD-WAN."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/projects/core-sis"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-amber dark:text-slate-950 font-mono text-xs font-bold hover:opacity-90 transition-all"
            >
              <span>Core SIS Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/infrastructure"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/15 text-xs font-mono font-semibold text-slate-700 dark:text-slate-200 hover:border-amber-500/40 transition-colors"
            >
              <span>SD-WAN &amp; DMZ Картасы</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 8 Connected Satellite Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {k12Modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Link
                key={mod.slug}
                href={`/projects/${mod.slug}`}
                className="group p-4 rounded-2xl border border-slate-200/80 bg-slate-50/70 hover:bg-white dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.05] hover:border-amber-500/40 transition-all flex items-start justify-between gap-3"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber truncate transition-colors">
                      {mod.title}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 pl-6 truncate">
                    {mod.metric}
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500 shrink-0 mt-0.5 transition-colors" />
              </Link>
            );
          })}
        </div>

        {/* Additional ERP & Consumer PWA Strip */}
        <div className="pt-3 border-t border-slate-200/70 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2 text-slate-500 dark:text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>
              {locale === "kk"
                ? "Қосымша ERP & PWA жобалар:"
                : locale === "ru"
                ? "Дополнительные ERP и PWA системы:"
                : "Additional ERP & Consumer Systems:"}
            </span>
            <Link
              href="/projects/my-family"
              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber transition-colors"
            >
              «Береке» Family PWA →
            </Link>
            <Link
              href="/projects/1c-enterprise"
              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber transition-colors"
            >
              1C:Enterprise Linux Cluster →
            </Link>
          </div>

          <Link
            href="/projects"
            className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>
              {locale === "kk"
                ? "Барлық 13 кейс каталогы"
                : locale === "ru"
                ? "Весь каталог (13 систем)"
                : "View All 13 Case Studies"}
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
