"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { ALL_PROJECTS } from "@/data/projectsData";
import { STRATEGIC_BLOCKS } from "@/data/siteContent";
import {
  ProjectBlockId,
  pickLocale,
  pickLocaleArray,
} from "@/data/types";

export default function ProjectsPage() {
  const locale = useLocale();
  const [selectedBlock, setSelectedBlock] = useState<ProjectBlockId | "all">("all");
  const [b2bOnly, setB2bOnly] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const blockParam = params.get("block") as ProjectBlockId | null;
      if (
        blockParam &&
        ["ai-saas", "edtech-enterprise", "infra-devops", "erp-consumer"].includes(
          blockParam
        )
      ) {
        setSelectedBlock(blockParam);
      }
    }
  }, []);

  const filteredProjects = ALL_PROJECTS.filter((project) => {
    if (selectedBlock !== "all" && project.block !== selectedBlock) return false;
    if (b2bOnly && !project.b2bReady) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-[#0B0E14] dark:text-slate-gray font-sans selection:bg-emerald-400/30 dark:selection:bg-amber/30 selection:text-slate-900 dark:selection:text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#e0e7ff,#f8fafc)] dark:bg-[radial-gradient(circle_at_top_right,#1d1b4b,#0B0E14)] -z-10 transition-colors duration-500" />

      <main className="max-w-6xl mx-auto px-6 py-24 lg:py-32 space-y-14">
        {/* Page Header */}
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-slate-500 hover:text-slate-900 dark:text-slate-gray/70 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">
              {locale === "kk"
                ? "Басты бетке оралу"
                : locale === "ru"
                ? "На главную"
                : "Back to Home"}
            </span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-700 dark:text-amber">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {locale === "kk"
                    ? `${ALL_PROJECTS.length} ӨНДІРІСТІК ЖОБА · ENGINEERING CASE STUDIES + B2B ВИТРИНА`
                    : locale === "ru"
                    ? `${ALL_PROJECTS.length} ПРОМЫШЛЕННЫХ СИСТЕМ · ENGINEERING CASE STUDIES + ВИТРИНА B2B`
                    : `${ALL_PROJECTS.length} PRODUCTION ARCHITECTURES · CASE STUDIES & B2B SHOWCASE`}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                {locale === "kk"
                  ? "Архитектуралық Кейстер және B2B Өнімдер Портфелі"
                  : locale === "ru"
                  ? "Архитектурные кейсы и портфель B2B-продуктов"
                  : "Architectural Case Studies & B2B Product Portfolio"}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-gray/90 leading-relaxed">
                {locale === "kk"
                  ? "Әрбір жоба «Мәселе → Архитектуралық шешім → Сандық нәтиже» форматында және басқа мектептер мен компанияларға B2B өнім ретінде енгізуге дайын күйде сипатталған."
                  : locale === "ru"
                  ? "Каждый проект представлен в формате «Проблема → Архитектурное решение → Измеримый результат» с описанием ценности для B2B-внедрения."
                  : "Every system is documented using the Problem → Architectural Solution → Measured Outcome framework, complete with B2B deployment specifications."}
              </p>
            </div>

            {/* B2B Filter Toggle */}
            <button
              onClick={() => setB2bOnly(!b2bOnly)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold border transition-all shrink-0 flex items-center gap-2 ${
                b2bOnly
                  ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20"
                  : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-emerald-500/40"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>
                {locale === "kk"
                  ? "Тек B2B дайын өнімдер (10)"
                  : locale === "ru"
                  ? "Только готовые B2B-продукты (10)"
                  : "B2B-Ready Products Only (10)"}
              </span>
            </button>
          </div>

          {/* 4 Strategic Block Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-b border-slate-200 dark:border-white/10 pb-5">
            <button
              onClick={() => setSelectedBlock("all")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                selectedBlock === "all"
                  ? "bg-slate-900 text-white dark:bg-amber dark:text-slate-950"
                  : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-amber/40"
              }`}
            >
              {locale === "kk"
                ? `Барлық жобалар (${ALL_PROJECTS.length})`
                : locale === "ru"
                ? `Все проекты (${ALL_PROJECTS.length})`
                : `All Systems (${ALL_PROJECTS.length})`}
            </button>

            {STRATEGIC_BLOCKS.map((block) => {
              const count = ALL_PROJECTS.filter((p) => p.block === block.id).length;
              const active = selectedBlock === block.id;
              return (
                <button
                  key={block.id}
                  onClick={() => setSelectedBlock(block.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                    active
                      ? "bg-slate-900 text-white dark:bg-amber dark:text-slate-950"
                      : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-amber/40"
                  }`}
                >
                  {pickLocale(block.badge, locale)}: {pickLocale(block.title, locale)} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => {
            const highlights = pickLocaleArray(project.highlights, locale);
            const blockMeta = STRATEGIC_BLOCKS.find(
              (b) => b.id === project.block
            );

            return (
              <motion.article
                key={project.id}
                id={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] p-6 sm:p-10 space-y-8 shadow-sm dark:shadow-none"
              >
                {/* Top Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-slate-200/80 dark:border-white/10 pb-6">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        // {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      {blockMeta && (
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber border border-amber-500/20">
                          {pickLocale(blockMeta.badge, locale)} · {pickLocale(blockMeta.title, locale)}
                        </span>
                      )}
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                        {pickLocale(project.domainOrPort, locale)}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                        {pickLocale(project.statusBadge, locale)}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                      {pickLocale(project.title, locale)}
                    </h2>

                    <p className="font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {pickLocale(project.subtitle, locale)}
                    </p>
                  </div>

                  {/* External & B2B Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    {project.b2bReady && (
                      <Link
                        href={`/contact?product=${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber text-slate-950 text-xs font-mono font-bold hover:bg-amber/90 transition-colors"
                      >
                        <span>
                          {locale === "kk"
                            ? "B2B Демо / Енгізу"
                            : locale === "ru"
                            ? "B2B Демо / Внедрение"
                            : "Request B2B Deployment"}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                      >
                        <span>Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                      >
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* 4 Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5"
                    >
                      <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white">
                        {pickLocale(metric.value, locale)}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {pickLocale(metric.label, locale)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Executive Summary & B2B Value Proposition */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5 space-y-2">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-white/50">
                      //{" "}
                      {locale === "kk"
                        ? "ҚЫСҚАША СИПАТТАМАСЫ (EXECUTIVE SUMMARY)"
                        : locale === "ru"
                        ? "КРАТКОЕ ОПИСАНИЕ (EXECUTIVE SUMMARY)"
                        : "EXECUTIVE SUMMARY"}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                      {pickLocale(project.summary, locale)}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-amber-500/[0.06] border border-amber-500/20 space-y-2">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber">
                      //{" "}
                      {locale === "kk"
                        ? "B2B ЖӘНЕ КОРПОРАТИВТІК ҚҰНДЫЛЫҒЫ"
                        : locale === "ru"
                        ? "ЦЕННОСТЬ ДЛЯ B2B И КОРПОРАТИВНЫХ ЗАКАЗЧИКОВ"
                        : "B2B & ENTERPRISE VALUE PROPOSITION"}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                      {pickLocale(project.b2bValue, locale)}
                    </p>
                  </div>
                </div>

                {/* Problem -> Architectural Solution -> Measured Outcome */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 rounded-2xl border border-rose-500/20 bg-rose-500/[0.03] space-y-2.5">
                    <div className="text-xs font-mono font-semibold text-rose-600 dark:text-rose-400 uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      {locale === "kk"
                        ? "1. Мәселе (The Challenge)"
                        : locale === "ru"
                        ? "1. Проблема (Challenge)"
                        : "1. The Challenge"}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pickLocale(project.challenge, locale)}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] space-y-2.5">
                    <div className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      {locale === "kk"
                        ? "2. Архитектуралық шешім"
                        : locale === "ru"
                        ? "2. Архитектурное решение"
                        : "2. Architectural Solution"}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pickLocale(project.solution, locale)}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-blue-500/20 bg-blue-500/[0.03] space-y-2.5">
                    <div className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      {locale === "kk"
                        ? "3. Нақты нәтиже (Outcome)"
                        : locale === "ru"
                        ? "3. Результат (Outcome)"
                        : "3. Measured Outcome"}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pickLocale(project.outcome, locale)}
                    </p>
                  </div>
                </div>

                {/* Architecture Flow Pipeline */}
                <div className="p-5 rounded-2xl bg-slate-900 dark:bg-black/40 border border-slate-800 dark:border-white/10 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>
                      {locale === "kk"
                        ? "Архитектуралық конвейер (Request & Data Flow)"
                        : locale === "ru"
                        ? "Архитектурный конвейер (Поток данных)"
                        : "System Architecture Pipeline"}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.architectureFlow.map((node, nIdx) => (
                      <div key={nIdx} className="flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white">
                          {node}
                        </span>
                        {nIdx < project.architectureFlow.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Standout Engineering Features (Техникалық фишкалары) */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-white/50 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-500" />
                    <span>
                      {locale === "kk"
                        ? "Техникалық фишкалары (Рекрутерлер, CTO және Инженерлер бағалайтын тұстары)"
                        : locale === "ru"
                        ? "Ключевые инженерные решения (Для CTO, рекрутеров и архитекторов)"
                        : "Key Engineering Highlights (For CTOs, Recruiters & Systems Architects)"}
                    </span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {highlights.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/70 dark:border-white/5">
                  <span className="text-xs font-mono text-slate-400 mr-1">
                    STACK:
                  </span>
                  {project.techStack.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-800 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
