"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Cloud, Globe } from "lucide-react";
import Link from "next/link";
import en from "@/dictionaries/en.json";

// Simulate translation function for the current scope
const t = (key: string) => {
  const keys = key.split(".");
  let val: any = en;
  for (const k of keys) {
    if (val && val[k]) val = val[k];
    else return key;
  }
  return val;
};

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-[#0B0E14] dark:text-slate-gray font-sans selection:bg-emerald-400/30 dark:selection:bg-amber/30 selection:text-slate-900 dark:selection:text-white">
      {/* Background subtle grid/gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#e0e7ff,#f8fafc)] dark:bg-[radial-gradient(circle_at_top_right,#1d1b4b,#0B0E14)] -z-10 transition-colors duration-500" />
      
      <main className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-32"
        >
          {/* 1. Hero Section */}
          <motion.section variants={itemVariants} className="space-y-8 max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm transition-colors">
              <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400/90 uppercase">
                {t("home.hero.badge")}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-colors">
              {t("home.hero.headline")}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-gray/90 max-w-2xl leading-relaxed transition-colors">
              {t("home.hero.subHeadline")}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                href="/projects" 
                className="group relative inline-flex items-center space-x-2 bg-slate-900 text-white dark:bg-white dark:text-obsidian px-6 py-3 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
              >
                <span>{t("home.hero.primaryCta")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-white/10 dark:text-white dark:hover:bg-white/5 transition-colors"
              >
                {t("home.hero.secondaryCta")}
              </Link>
            </div>
          </motion.section>

          {/* 2. Core Infrastructure Pillars (Bento Grid) */}
          <motion.section variants={itemVariants} className="space-y-12">
            <h2 className="text-sm font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase transition-colors">
              // {t("home.coreAreas.title")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group relative p-8 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04] transition-colors flex flex-col h-full shadow-sm dark:shadow-none">
                <div className="mb-6 p-3 rounded-lg bg-slate-100 w-fit border border-slate-200 group-hover:border-emerald-300 dark:bg-white/5 dark:border-white/5 dark:group-hover:border-white/20 transition-colors">
                  <Terminal className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors">
                  {t("home.coreAreas.agenticAi.title")}
                </h3>
                <p className="text-slate-600 dark:text-slate-gray leading-relaxed text-sm flex-grow transition-colors">
                  {t("home.coreAreas.agenticAi.description")}
                </p>
              </div>

              {/* Card 2 */}
              <div className="group relative p-8 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04] transition-colors flex flex-col h-full shadow-sm dark:shadow-none">
                <div className="mb-6 p-3 rounded-lg bg-slate-100 w-fit border border-slate-200 group-hover:border-amber dark:bg-white/5 dark:border-white/5 dark:group-hover:border-white/20 transition-colors">
                  <Cpu className="w-6 h-6 text-amber" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors">
                  {t("home.coreAreas.enterpriseAutomation.title")}
                </h3>
                <p className="text-slate-600 dark:text-slate-gray leading-relaxed text-sm flex-grow transition-colors">
                  {t("home.coreAreas.enterpriseAutomation.description")}
                </p>
              </div>

              {/* Card 3 */}
              <div className="group relative p-8 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04] transition-colors flex flex-col h-full shadow-sm dark:shadow-none">
                <div className="mb-6 p-3 rounded-lg bg-slate-100 w-fit border border-slate-200 group-hover:border-blue-400 dark:bg-white/5 dark:border-white/5 dark:group-hover:border-white/20 transition-colors">
                  <Cloud className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors">
                  {t("home.coreAreas.selfHosted.title")}
                </h3>
                <p className="text-slate-600 dark:text-slate-gray leading-relaxed text-sm flex-grow transition-colors">
                  {t("home.coreAreas.selfHosted.description")}
                </p>
              </div>
            </div>
          </motion.section>

          {/* 3. System Deployments (Preview List) */}
          <motion.section variants={itemVariants} className="space-y-10">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 transition-colors">
              <h2 className="text-sm font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase transition-colors">
                // {t("home.recentArchitectures.title")}
              </h2>
              <Link href="/projects" className="text-xs font-mono text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors flex items-center gap-1">
                {t("home.recentArchitectures.link")}
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { key: "clinicalAi", type: "HealthTech" },
                { key: "tanymedu", type: "EdTech Backend" },
                { key: "gradingPipeline", type: "ML Pipeline" },
              ].map((item) => (
                <Link 
                  key={item.key}
                  href={`/projects#${item.key}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl border border-transparent hover:border-slate-200 hover:bg-white dark:hover:border-white/10 dark:hover:bg-white/[0.02] transition-all shadow-none hover:shadow-sm dark:hover:shadow-none"
                >
                  <span className="text-lg text-slate-800 dark:text-white group-hover:text-amber transition-colors">
                    {t(`home.recentArchitectures.items.${item.key}`)}
                  </span>
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-gray/50 mt-2 sm:mt-0 transition-colors">
                    [{item.type}]
                  </span>
                </Link>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>

      {/* 4. Footer */}
      <footer className="border-t border-slate-200 dark:border-white/10 mt-20 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-gray/60 transition-colors">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span>{t("home.footer.status")}</span>
          </div>
          <div className="flex items-center gap-6">
            <span>{t("home.footer.languages")}</span>
            <span className="text-slate-300 dark:text-white/20">|</span>
            <span>{t("home.footer.copyright")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
