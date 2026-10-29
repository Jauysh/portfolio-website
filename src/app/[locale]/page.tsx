"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Users,
  Cloud,
  Globe,
  Terminal,
  Sparkles,
  Server,
  ShieldCheck,
  Layers,
  ExternalLink,
  FileText,
  Cpu,
  Database,
  Network,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import {
  HERO_CONTENT,
  IMPACT_METRICS,
  STRATEGIC_BLOCKS,
} from "@/data/siteContent";
import { FEATURED_PROJECTS, ALL_PROJECTS } from "@/data/projectsData";
import { pickLocale } from "@/data/types";
import ArchitectureBenchmarks from "@/components/ArchitectureBenchmarks";
import ExecutivePortrait from "@/components/ExecutivePortrait";

export default function Home() {
  const locale = useLocale();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
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

  const terminalLines =
    HERO_CONTENT.terminalLines[locale as "kk" | "en" | "ru"] ??
    HERO_CONTENT.terminalLines.kk;

  const techGroups = [
    {
      icon: Sparkles,
      title:
        locale === "kk"
          ? "AI & Multi-Tenant SaaS"
          : locale === "ru"
          ? "AI и Multi-Tenant SaaS"
          : "AI & Multi-Tenant SaaS",
      items: [
        "Gemini 2.0 / 2.5 Flash Vision",
        "OpenAI GPT-4o (BYOK)",
        "Sharp 64-bit dHash Anti-Plagiarism",
        "HTML5 Canvas GDPR Privacy Shield",
        "Redis 7 + BullMQ Queues",
        "Wildcard Edge Middleware (*.omnicheck.kz)",
      ],
    },
    {
      icon: Cpu,
      title:
        locale === "kk"
          ? "Full-Stack & High-Load Web"
          : locale === "ru"
          ? "Full-Stack и High-Load Web"
          : "Full-Stack & High-Load Web",
      items: [
        "Next.js 14–16 (App Router / Standalone)",
        "React 19 + TypeScript + Tailwind v4",
        "PostgreSQL 16 (Serializable Locks / BYTEA)",
        "Prisma ORM + Supabase Realtime",
        "Socket.IO v4.8 + Custom Node Server",
        "PHP 8.4 CMS Bridge + MICB 3D-Secure",
      ],
    },
    {
      icon: Network,
      title:
        locale === "kk"
          ? "Network, Cloud & Security"
          : locale === "ru"
          ? "Сети, Облако и Безопасность"
          : "Network, Cloud & Security",
      items: [
        "MikroTik RouterOS v7 (CRS418 / RB4011)",
        "WireGuard SD-WAN (7 Campuses, ~7ms)",
        "CAPsMAN Wi-Fi 6 + FreeRADIUS 802.1X",
        "Proxmox VE (LXC CT 100–106) + 5-Layer DMZ",
        "Nginx WAF + Fail2Ban + chattr +i DR",
        "Google Cloud Run + 100 TB Workspace",
      ],
    },
    {
      icon: Database,
      title:
        locale === "kk"
          ? "ERP & Zero-IOPS Systems"
          : locale === "ru"
          ? "ERP и Zero-IOPS Системы"
          : "ERP & Zero-IOPS Systems",
      items: [
        "1C:Enterprise 8.3.25 Server (Linux)",
        "1C:EDT 2026.1 + Git XML Pipeline",
        "Postgres Pro 1C v16 + РИБ / СКД",
        "Python 3 + SQLite 3 WAL (~12 MB RAM)",
        "Ansible Nightly Router Vaults",
        "Google Workspace Admin SDK / LDAPS",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-[#0B0E14] dark:text-slate-gray font-sans selection:bg-emerald-400/30 dark:selection:bg-amber/30 selection:text-slate-900 dark:selection:text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#e0e7ff,#f8fafc)] dark:bg-[radial-gradient(circle_at_top_right,#1d1b4b,#0B0E14)] -z-10 transition-colors duration-500" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16 sm:space-y-24"
        >
          {/* 1. HERO SECTION */}
          <motion.section variants={itemVariants} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_420px] xl:grid-cols-[1.2fr_440px] gap-8 lg:gap-10 items-start">
              <div className="space-y-5 sm:space-y-6 min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-2xl sm:rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm max-w-full">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shrink-0" />
                    <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-emerald-700 dark:text-emerald-400 uppercase break-words">
                      {pickLocale(HERO_CONTENT.badge, locale)}
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono px-3 py-1.5 rounded-2xl sm:rounded-full border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-700 dark:text-amber max-w-full break-words">
                    {pickLocale(HERO_CONTENT.roleTitle, locale)}
                  </span>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  <h1 className="text-3xl sm:text-5xl lg:text-[50px] xl:text-[54px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] sm:leading-[1.12]">
                    {pickLocale(HERO_CONTENT.headline, locale)}
                  </h1>

                  <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-gray/90 leading-relaxed border-l-2 border-amber-500/60 dark:border-amber pl-4 sm:pl-5 py-1">
                    {pickLocale(HERO_CONTENT.subHeadline, locale)}
                  </p>
                </div>

                {/* Credibility Bar */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-200/70 dark:bg-white/5 border border-slate-300/60 dark:border-white/10">
                    🇲🇩 Chișinău · 🇰🇿 Almaty/Taraz
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-200/70 dark:bg-white/5 border border-slate-300/60 dark:border-white/10">
                    🏢 7–8 Campuses SD-WAN
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-200/70 dark:bg-white/5 border border-slate-300/60 dark:border-white/10">
                    🗣️ KK · RU · TR · EN · AR
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
                  <Link
                    href="/projects"
                    className="group inline-flex items-center justify-center space-x-2 bg-slate-900 text-white dark:bg-amber dark:text-slate-950 px-6 py-3.5 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-amber/90 transition-all shadow-lg shadow-slate-900/10 dark:shadow-amber/10 text-sm sm:text-base"
                  >
                    <span>{pickLocale(HERO_CONTENT.primaryCta, locale)}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/20 dark:text-emerald-300 transition-colors text-sm sm:text-base"
                  >
                    {pickLocale(HERO_CONTENT.secondaryCta, locale)}
                  </Link>

                  <Link
                    href="/about#cv"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs sm:text-sm border border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-white/10 dark:text-white dark:hover:bg-white/5 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-amber-600 dark:text-amber shrink-0" />
                    <span>{pickLocale(HERO_CONTENT.cvCta, locale)}</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Linear/Stripe Style Executive Architect Dossier */}
              <div className="w-full">
                <ExecutivePortrait locale={locale} />
              </div>
            </div>

            {/* Live Ecosystem Telemetry Terminal */}
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-900 dark:bg-black/60 p-4 sm:p-5 font-mono text-[11px] sm:text-sm text-slate-300 shadow-xl backdrop-blur-md overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 shrink-0" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shrink-0" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shrink-0" />
                  <span className="ml-1.5 text-[10px] sm:text-[11px] text-slate-400 truncate">
                    azamat@enterprise-core:~ (Telemetry)
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-emerald-400 flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  11 REPOS ACTIVE
                </span>
              </div>
              <div className="space-y-1.5 overflow-x-auto">
                {terminalLines.map((line, i) => (
                  <div key={i} className="text-amber-300/90 leading-relaxed break-words">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* 2. IMPACT METRICS (Сандармен дәлелдеу) */}
          <motion.section variants={itemVariants} className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase">
                //{" "}
                {locale === "kk"
                  ? "САНДАРМЕН ДӘЛЕЛДЕУ (IMPACT METRICS)"
                  : locale === "ru"
                  ? "ДОКАЗАТЕЛЬСТВО В ЦИФРАХ (IMPACT METRICS)"
                  : "PRODUCTION IMPACT METRICS"}
              </h2>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                End-to-End Architecture
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {IMPACT_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] hover:border-amber-500/40 dark:hover:border-amber/40 transition-all shadow-sm dark:shadow-none flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                        {metricIcon(metric.icon)}
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 dark:text-white/30">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white">
                      {pickLocale(metric.value, locale)}
                    </div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-amber">
                      {pickLocale(metric.title, locale)}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-gray mt-3 leading-relaxed">
                    {pickLocale(metric.detail, locale)}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 2.5 INTERACTIVE SANDBOX & B2B ROI BENCHMARKS */}
          <motion.section variants={itemVariants}>
            <ArchitectureBenchmarks locale={locale} />
          </motion.section>

          {/* 3. 4 STRATEGIC PORTFOLIO BLOCKS */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
              <div>
                <h2 className="text-xs font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase mb-2">
                  //{" "}
                  {locale === "kk"
                    ? "4 СТРАТЕГИЯЛЫҚ БАҒЫТ ( ИНЖЕНЕРЛІК БРЕНД + B2B ВИТРИНА )"
                    : locale === "ru"
                    ? "4 СТРАТЕГИЧЕСКИХ БЛОКА ( ИНЖЕНЕРНЫЙ БРЕНД + ВИТРИНА B2B )"
                    : "4 STRATEGIC ARCHITECTURE & B2B PRODUCT PILLARS"}
                </h2>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {locale === "kk"
                    ? "Мәселе → Архитектуралық шешім → Нақты нәтиже"
                    : locale === "ru"
                    ? "Проблема → Архитектурное решение → Измеримый результат"
                    : "Problem → Architectural Solution → Measured Outcome"}
                </p>
              </div>
              <Link
                href="/projects"
                className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>
                  {locale === "kk"
                    ? `Барлық ${ALL_PROJECTS.length} жобаны қарау`
                    : locale === "ru"
                    ? `Смотреть все ${ALL_PROJECTS.length} проектов`
                    : `View all ${ALL_PROJECTS.length} case studies`}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {STRATEGIC_BLOCKS.map((block) => {
                const count = ALL_PROJECTS.filter((p) => p.block === block.id).length;
                return (
                  <Link
                    key={block.id}
                    href={`/projects?block=${block.id}`}
                    className="group p-7 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50/80 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04] hover:border-amber-500/50 dark:hover:border-amber/50 transition-all flex flex-col justify-between shadow-sm dark:shadow-none"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-700 dark:text-amber border border-amber-500/20">
                          {pickLocale(block.badge, locale)}
                        </span>
                        <span className="text-xs font-mono text-slate-400 dark:text-white/40 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                          {count}{" "}
                          {locale === "kk"
                            ? "жоба →"
                            : locale === "ru"
                            ? "проекта →"
                            : "systems →"}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber transition-colors">
                          {pickLocale(block.title, locale)}
                        </h3>
                        <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1">
                          {pickLocale(block.subtitle, locale)}
                        </p>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-gray leading-relaxed">
                        {pickLocale(block.description, locale)}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.section>

          {/* 4. FLAGSHIP CASE STUDIES & B2B PRODUCTS SHOWCASE */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
              <div>
                <h2 className="text-xs font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase mb-2">
                  //{" "}
                  {locale === "kk"
                    ? "ТАҢДАУЛЫ ФЛАГМАНДЫҚ ЖОБАЛАР & B2B ӨНІМДЕР"
                    : locale === "ru"
                    ? "ФЛАГМАНСКИЕ КЕЙСЫ И ПРОДУКТОВАЯ ВИТРИНА B2B"
                    : "FLAGSHIP CASE STUDIES & B2B PRODUCT SUITE"}
                </h2>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {locale === "kk"
                    ? `Өндіріске енгізілген ${FEATURED_PROJECTS.length} негізгі платформа`
                    : locale === "ru"
                    ? `${FEATURED_PROJECTS.length} ключевых промышленных систем в продакшене`
                    : `${FEATURED_PROJECTS.length} Production-Tested Flagship Architectures`}
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-mono px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-800 dark:text-white"
              >
                <span>
                  {locale === "kk"
                    ? `Толық техникалық талдау (${ALL_PROJECTS.length} жоба)`
                    : locale === "ru"
                    ? `Полный технический разбор (${ALL_PROJECTS.length} проектов)`
                    : `Full Technical Breakdowns (${ALL_PROJECTS.length} Systems)`}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {FEATURED_PROJECTS.map((project, idx) => (
                <div
                  key={project.id}
                  className="group rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] p-6 sm:p-7 hover:border-amber-500/40 dark:hover:border-amber/40 transition-all flex flex-col justify-between shadow-sm dark:shadow-none"
                >
                  <div className="space-y-5">
                    {/* Top row */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                          // 0{idx + 1}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                          {pickLocale(project.domainOrPort, locale)}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber border border-amber-500/20">
                        {pickLocale(project.statusBadge, locale)}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber transition-colors">
                        {pickLocale(project.title, locale)}
                      </h3>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                        {pickLocale(project.subtitle, locale)}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-slate-600 dark:text-slate-gray leading-relaxed">
                      {pickLocale(project.summary, locale)}
                    </p>

                    {/* 4 Mini Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5"
                        >
                          <div className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                            {pickLocale(m.value, locale)}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                            {pickLocale(m.label, locale)}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 6).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-5 mt-6 border-t border-slate-200/80 dark:border-white/10">
                    <Link
                      href={`/projects#${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber transition-colors"
                    >
                      <span>
                        {locale === "kk"
                          ? "Архитектура & Кейс талдауы"
                          : locale === "ru"
                          ? "Архитектура и разбор кейса"
                          : "Architecture & Case Study"}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="flex items-center gap-3">
                      {project.b2bReady && (
                        <Link
                          href={`/contact?product=${project.slug}`}
                          className="text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                        >
                          {locale === "kk"
                            ? "B2B Демо сұрау"
                            : locale === "ru"
                            ? "Запросить B2B-демо"
                            : "Request B2B Demo"}
                        </Link>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-slate-400 hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-1"
                          title="Live Deployment"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 5. FULL-CYCLE TECH STACK MATRIX */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="border-b border-slate-200 dark:border-white/10 pb-4">
              <h2 className="text-xs font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase mb-2">
                //{" "}
                {locale === "kk"
                  ? "ТОЛЫҚ ЦИКЛДЫ ТЕХНОЛОГИЯЛЫҚ СТЕК (FULL-CYCLE STACK)"
                  : locale === "ru"
                  ? "ТЕХНОЛОГИЧЕСКИЙ СТЕК ПОЛНОГО ЦИКЛА"
                  : "END-TO-END ENGINEERING TECH MATRIX"}
              </h2>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {locale === "kk"
                  ? "ЖИ мен Веб-платформалардан MikroTik SD-WAN және 1C:Enterprise кластеріне дейін"
                  : locale === "ru"
                  ? "От мультимодального ИИ и веб-платформ до MikroTik SD-WAN и кластеров 1С"
                  : "From Multimodal Vision AI & Web SaaS to MikroTik SD-WAN & 1C Clusters"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {techGroups.map((group, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] space-y-4 shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <group.icon className="w-5 h-5 text-amber-600 dark:text-amber" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {group.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs font-mono text-slate-600 dark:text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 6. BOTTOM CTA BANNER */}
          <motion.section
            variants={itemVariants}
            className="rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xl"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>
                  {locale === "kk"
                    ? "B2B Өнімді Енгізу · Архитектуралық Консалтинг · Remote Engineering"
                    : locale === "ru"
                    ? "Внедрение B2B-продуктов · Архитектурный консалтинг · Remote Engineering"
                    : "B2B Product Licensing · Architectural Consulting · Remote Engineering"}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                {locale === "kk"
                  ? "Мектебіңізге дайын EdTech SaaS (OmniCheck, LuminaMath, SSP) керек пе, әлде күрделі IT/AI жүйені басынан аяғына дейін құрастыру қажет пе?"
                  : locale === "ru"
                  ? "Нужна готовая EdTech-платформа (OmniCheck, LuminaMath, SSP) для вашей сети школ или проектирование сложной AI/IT-инфраструктуры под ключ?"
                  : "Looking to deploy our B2B EdTech platforms (OmniCheck, LuminaMath, SSP) or architect a mission-critical AI & IT ecosystem from scratch?"}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full lg:w-auto shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber text-slate-950 font-semibold hover:bg-amber/90 transition-colors"
              >
                <span>
                  {locale === "kk"
                    ? "Байланысу & Демо сұрау"
                    : locale === "ru"
                    ? "Связаться и запросить демо"
                    : "Schedule Demo / Contact"}
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link
                href="/about#cv"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors font-mono text-xs sm:text-sm"
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
