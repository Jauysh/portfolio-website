"use client";

import { useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { ALL_PROJECTS } from "@/data/projectsData";
import { STRATEGIC_BLOCKS } from "@/data/siteContent";
import { ProjectBlockId, pickLocale } from "@/data/types";

export default function ProjectsPage() {
  const locale = useLocale();
  const [blockOverride, setBlockOverride] = useState<ProjectBlockId | "all" | null>(null);
  const [b2bOnly, setB2bOnly] = useState(false);

  const urlSearch = useSyncExternalStore(
    () => () => {},
    () => window.location.search,
    () => ""
  );

  const urlBlock = (() => {
    const blockParam = new URLSearchParams(urlSearch).get("block") as ProjectBlockId | null;
    return blockParam &&
      ["ai-saas", "edtech-enterprise", "infra-devops", "erp-consumer"].includes(blockParam)
      ? blockParam
      : "all";
  })();

  const selectedBlock = blockOverride ?? urlBlock;
  const b2bCount = ALL_PROJECTS.filter((p) => p.b2bReady).length;

  const filteredProjects = ALL_PROJECTS.filter((project) => {
    if (selectedBlock !== "all" && project.block !== selectedBlock) return false;
    if (b2bOnly && !project.b2bReady) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-[#0B0E14] dark:text-slate-gray font-sans selection:bg-emerald-400/30 dark:selection:bg-amber/30 selection:text-slate-900 dark:selection:text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#e0e7ff,#f8fafc)] dark:bg-[radial-gradient(circle_at_top_right,#1d1b4b,#0B0E14)] -z-10 transition-colors duration-500" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 lg:py-28 space-y-10">
        {/* Crisp Header */}
        <div className="space-y-5">
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

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <div className="space-y-2.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-700 dark:text-amber">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>
                  {locale === "kk"
                    ? `${ALL_PROJECTS.length} ӨНДІРІСТІК ЖҮЙЕ · B2B & ENTERPRISE КАТАЛОГЫ`
                    : locale === "ru"
                    ? `${ALL_PROJECTS.length} ПРОМЫШЛЕННЫХ СИСТЕМ · КАТАЛОГ B2B`
                    : `${ALL_PROJECTS.length} PRODUCTION SYSTEMS · CASE STUDIES & B2B SUITE`}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                {locale === "kk"
                  ? "Архитектуралық Кейстер Каталогы"
                  : locale === "ru"
                  ? "Каталог Архитектурных Кейсов"
                  : "Production Architecture Catalog"}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-gray/90 leading-relaxed">
                {locale === "kk"
                  ? "Әр карточканы ашып, толық «Мәселе → Архитектуралық шешім → Тірі конвейер» техникалық талдауын көріңіз."
                  : locale === "ru"
                  ? "Откройте любой кейс для просмотра глубокого разбора «Проблема → Архитектура → Живой конвейер»."
                  : "Select any system to inspect its full Challenge → Architecture → Interactive Pipeline breakdown."}
              </p>
            </div>

            <button
              onClick={() => setB2bOnly(!b2bOnly)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold border transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                b2bOnly
                  ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20"
                  : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-emerald-500/40"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>
                {locale === "kk"
                  ? `B2B Дайын (${b2bCount})`
                  : locale === "ru"
                  ? `B2B-продукты (${b2bCount})`
                  : `B2B-Ready (${b2bCount})`}
              </span>
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-1 border-b border-slate-200 dark:border-white/10 pb-4">
            <button
              onClick={() => setBlockOverride("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                selectedBlock === "all"
                  ? "bg-slate-900 text-white dark:bg-amber dark:text-slate-950"
                  : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-amber/40"
              }`}
            >
              {locale === "kk"
                ? `Барлығы (${ALL_PROJECTS.length})`
                : locale === "ru"
                ? `Все (${ALL_PROJECTS.length})`
                : `All (${ALL_PROJECTS.length})`}
            </button>

            {STRATEGIC_BLOCKS.map((block) => {
              const count = ALL_PROJECTS.filter((p) => p.block === block.id).length;
              const active = selectedBlock === block.id;
              return (
                <button
                  key={block.id}
                  onClick={() => setBlockOverride(block.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-slate-900 text-white dark:bg-amber dark:text-slate-950"
                      : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-amber/40"
                  }`}
                >
                  {pickLocale(block.badge, locale)} · {pickLocale(block.title, locale)} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Sleek 2-Column Bento Catalog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => {
            const blockMeta = STRATEGIC_BLOCKS.find((b) => b.id === project.block);

            return (
              <motion.article
                key={project.id}
                id={project.slug}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="group scroll-mt-28 rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111622] p-6 sm:p-7 flex flex-col justify-between gap-5 shadow-sm dark:shadow-none hover:border-amber-500/40 dark:hover:border-amber/40 transition-all"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {`// ${idx + 1 < 10 ? `0${idx + 1}` : idx + 1}`}
                      </span>
                      {blockMeta && (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber border border-amber-500/20">
                          {pickLocale(blockMeta.badge, locale)}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300">
                      {pickLocale(project.statusBadge, locale)}
                    </span>
                  </div>

                  {/* Title & Crisp 1-Sentence Summary */}
                  <div className="space-y-1.5">
                    <Link href={`/projects/${project.slug}`}>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber transition-colors leading-snug">
                        {pickLocale(project.title, locale)}
                      </h2>
                    </Link>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pickLocale(project.summary, locale)}
                    </p>
                  </div>

                  {/* 4 Crisp Metric Chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {project.metrics.slice(0, 4).map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/5"
                      >
                        <div className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                          {pickLocale(metric.value, locale)}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                          {pickLocale(metric.label, locale)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Top 5 Stack Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 font-mono text-[11px] text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions (Strictly Internal) */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200/80 dark:border-white/10">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber transition-colors"
                  >
                    <span>
                      {locale === "kk"
                        ? "Толық Архитектура & Кейс"
                        : locale === "ru"
                        ? "Архитектура и разбор кейса"
                        : "Architecture & Case Study"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.b2bReady && (
                    <Link
                      href={`/contact?product=${project.slug}`}
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 font-mono text-xs font-semibold hover:bg-emerald-500/20 transition-colors"
                    >
                      {locale === "kk"
                        ? "B2B Демо"
                        : locale === "ru"
                        ? "B2B-демо"
                        : "B2B Demo"}
                    </Link>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
