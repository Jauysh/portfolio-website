"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Users,
  Cloud,
  Globe,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { HERO_CONTENT, IMPACT_METRICS } from "@/data/siteContent";
import { ALL_PROJECTS } from "@/data/projectsData";
import { pickLocale } from "@/data/types";
import ArchitectureBenchmarks from "@/components/ArchitectureBenchmarks";
import ExecutivePortrait from "@/components/ExecutivePortrait";
import FlagshipBento from "@/components/FlagshipBento";

const CORE_STACK = [
  "Next.js 16 & React 19",
  "TypeScript & Python 3.12",
  "FastAPI & Pydantic v2",
  "Gemini 2.5 Vision & GPT-4o",
  "PostgreSQL 16 (Serializable)",
  "Redis 7 & BullMQ",
  "SQLite 3 WAL (~12MB RAM)",
  "Google Cloud Run",
  "MikroTik WireGuard SD-WAN",
  "Proxmox VE & 5-Layer DMZ",
  "Google Workspace Admin SDK",
  "1C:Enterprise 8.3 & Git/EDT",
];

export default function Home() {
  const locale = useLocale();

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  const metricIcon = (icon: string) => {
    switch (icon) {
      case "building":
        return <Building2 className="w-5 h-5 text-amber-500 dark:text-amber" />;
      case "users":
        return <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case "cloud":
        return <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      default:
        return <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-[#0B0E14] dark:text-slate-gray font-sans selection:bg-emerald-400/30 dark:selection:bg-amber/30 selection:text-slate-900 dark:selection:text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#e0e7ff,#f8fafc)] dark:bg-[radial-gradient(circle_at_top_right,#1d1b4b,#0B0E14)] -z-10 transition-colors duration-500" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 lg:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-14 sm:space-y-20"
        >
          {/* 1. CRISP HERO + DOSSIER */}
          <motion.section variants={itemVariants}>
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_420px] xl:grid-cols-[1.2fr_440px] gap-8 lg:gap-10 items-center">
              <div className="space-y-5 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shrink-0" />
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-emerald-700 dark:text-emerald-400 uppercase">
                      {pickLocale(HERO_CONTENT.badge, locale)}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-700 dark:text-amber">
                    {pickLocale(HERO_CONTENT.roleTitle, locale)}
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                    {pickLocale(HERO_CONTENT.headline, locale)}
                  </h1>

                  <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-gray/90 leading-relaxed border-l-2 border-amber-500/60 dark:border-amber pl-4 py-0.5 max-w-2xl">
                    {pickLocale(HERO_CONTENT.subHeadline, locale)}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-200/70 dark:bg-white/5 border border-slate-300/60 dark:border-white/10">
                    🇲🇩 Chișinău · 🇰🇿 Almaty/Taraz
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-200/70 dark:bg-white/5 border border-slate-300/60 dark:border-white/10">
                    ⚡ {ALL_PROJECTS.length} Prod Systems
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-200/70 dark:bg-white/5 border border-slate-300/60 dark:border-white/10">
                    🗣️ KK · RU · TR · EN · AR
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-1">
                  <Link
                    href="/projects"
                    className="group inline-flex items-center justify-center space-x-2 bg-slate-900 text-white dark:bg-amber dark:text-slate-950 px-6 py-3.5 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-amber/90 transition-all shadow-lg shadow-slate-900/10 dark:shadow-amber/10 text-sm sm:text-base"
                  >
                    <span>{pickLocale(HERO_CONTENT.primaryCta, locale)}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/20 dark:text-emerald-300 transition-colors text-sm sm:text-base"
                  >
                    {pickLocale(HERO_CONTENT.secondaryCta, locale)}
                  </Link>

                  <Link
                    href="/about#cv"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs sm:text-sm border border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-white/10 dark:text-white dark:hover:bg-white/5 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-amber-600 dark:text-amber shrink-0" />
                    <span>{pickLocale(HERO_CONTENT.cvCta, locale)}</span>
                  </Link>
                </div>
              </div>

              <div className="w-full">
                <ExecutivePortrait locale={locale} />
              </div>
            </div>
          </motion.section>

          {/* 2. 4 CRISP IMPACT TILES */}
          <motion.section variants={itemVariants}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {IMPACT_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] flex flex-col justify-between gap-2 shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      {metricIcon(metric.icon)}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-white/30">
                      0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white">
                      {pickLocale(metric.value, locale)}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-amber mt-0.5">
                      {pickLocale(metric.title, locale)}
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
                    {pickLocale(metric.detail, locale)}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 3. THE 3 FLAGSHIP ECOSYSTEMS (BENTO) */}
          <motion.section variants={itemVariants} className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <h2 className="text-xs font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase">
                  {"// "}
                  {locale === "kk"
                    ? "3 ФЛАГМАНДЫҚ ЭКОЖҮЙЕ (BENTO ARCHITECTURE)"
                    : locale === "ru"
                    ? "3 ФЛАГМАНСКИЕ ЭКОСИСТЕМЫ (BENTO ARCHITECTURE)"
                    : "3 FLAGSHIP PRODUCTION ECOSYSTEMS"}
                </h2>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                  {locale === "kk"
                    ? "GovTech AI, Agentic EdTech және 8-Кампустық Мектеп ОС"
                    : locale === "ru"
                    ? "GovTech AI, Agentic EdTech и школьная ОС 8 кампусов"
                    : "GovTech AI, Agentic EdTech & 8-Campus School OS"}
                </p>
              </div>
              <Link
                href="/projects"
                className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                <span>
                  {locale === "kk"
                    ? `Барлық ${ALL_PROJECTS.length} жүйені ашу`
                    : locale === "ru"
                    ? `Все ${ALL_PROJECTS.length} систем`
                    : `Browse all ${ALL_PROJECTS.length} systems`}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <FlagshipBento locale={locale} />
          </motion.section>

          {/* 4. INTERACTIVE ROI CALCULATOR + SLIM STACK STRIP */}
          <motion.section variants={itemVariants} className="space-y-5">
            <ArchitectureBenchmarks locale={locale} />

            <div className="p-5 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber mr-1">
                {"// CORE STACK:"}
              </span>
              {CORE_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          {/* 5. SLIM EXECUTIVE CTA */}
          <motion.section
            variants={itemVariants}
            className="rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white p-7 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>B2B Licensing · Turnkey Deployment · Architecture Advisory</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold leading-snug">
                {locale === "kk"
                  ? "Дайын B2B платформаны енгізу немесе күрделі AI / IT жүйені нөлден жобалау керек пе?"
                  : locale === "ru"
                  ? "Нужно внедрить готовую B2B-платформу или спроектировать сложную AI / ИТ-систему под ключ?"
                  : "Ready to license a B2B platform or architect a mission-critical AI & IT ecosystem?"}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber text-slate-950 font-semibold hover:bg-amber/90 transition-colors text-sm"
              >
                <span>
                  {locale === "kk"
                    ? "Демо & Консультация"
                    : locale === "ru"
                    ? "Запросить демо"
                    : "Schedule Demo"}
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link
                href="/about#cv"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors font-mono text-xs sm:text-sm"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>Engineering CV</span>
              </Link>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
}
