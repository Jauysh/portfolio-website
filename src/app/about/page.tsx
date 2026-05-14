"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, BookOpen, Leaf, Globe, Hexagon } from "lucide-react";
import Link from "next/link";
import en from "@/dictionaries/en.json";

// Simulate translation function
const t = (key: string) => {
  const keys = key.split(".");
  let val: any = en;
  for (const k of keys) {
    if (val && val[k]) val = val[k];
    else return key;
  }
  return val;
};

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-[#0B0E14] dark:text-slate-gray font-sans selection:bg-emerald-400/30 dark:selection:bg-amber/30 selection:text-slate-900 dark:selection:text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#e0e7ff,#f8fafc)] dark:bg-[radial-gradient(circle_at_top_right,#1d1b4b,#0B0E14)] -z-10 transition-colors duration-500" />

      <main className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {/* Header & Mission */}
          <motion.div variants={itemVariants} className="space-y-12">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-slate-500 hover:text-slate-900 dark:text-slate-gray/70 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            <div className="space-y-8 max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-200 bg-white shadow-sm dark:shadow-none dark:border-white/10 dark:bg-white/5 backdrop-blur-sm transition-colors">
                <Hexagon className="w-3 h-3 text-amber-600 dark:text-amber" />
                <span className="text-xs font-mono tracking-wider text-amber-600 dark:text-amber/90 uppercase transition-colors">
                  {t("about.hero.badge")}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight transition-colors">
                {t("about.hero.title")}
              </h1>

              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-gray/90 leading-relaxed border-l-2 border-slate-300 dark:border-white/20 pl-6 py-2 transition-colors">
                {t("about.hero.mission")}
              </p>
            </div>
          </motion.div>

          {/* Bio / Systems Thinking */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-sm font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase border-b border-slate-200 dark:border-white/10 pb-4 transition-colors">
              // {t("about.bio.title")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-gray leading-relaxed max-w-3xl transition-colors">
              {t("about.bio.text")}
            </p>
          </motion.section>

          {/* Strategic Roadmap (Future Facing) */}
          <motion.section variants={itemVariants} className="space-y-8">
            <h2 className="text-sm font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase border-b border-slate-200 dark:border-white/10 pb-4 transition-colors">
              // Strategic Roadmap
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Academic Roadmap */}
              <div className="group relative p-8 rounded-2xl border border-blue-200 bg-white hover:bg-blue-50 dark:border-blue-500/20 dark:bg-blue-500/[0.02] dark:hover:bg-blue-500/[0.05] transition-all flex flex-col h-full shadow-sm dark:shadow-[inset_0_0_20px_rgba(59,130,246,0.02)] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-6 p-3 rounded-lg bg-blue-50 border border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/20 transition-colors w-fit">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 transition-colors">
                  {t("about.roadmapAcademic.title")}
                </h3>
                <div className="space-y-4 flex-grow">
                  <div>
                    <h4 className="text-xs font-mono text-blue-600 dark:text-blue-400/80 mb-2 uppercase tracking-wider transition-colors">Research Focus</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-gray leading-relaxed transition-colors">
                      {t("about.roadmapAcademic.focus")}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-blue-600 dark:text-blue-400/80 mb-2 uppercase tracking-wider transition-colors">Vision</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-gray leading-relaxed transition-colors">
                      {t("about.roadmapAcademic.vision")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Environmental Roadmap */}
              <div className="group relative p-8 rounded-2xl border border-emerald-200 bg-white hover:bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/[0.02] dark:hover:bg-emerald-500/[0.05] transition-all flex flex-col h-full shadow-sm dark:shadow-[inset_0_0_20px_rgba(16,185,129,0.02)] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-6 p-3 rounded-lg bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20 transition-colors w-fit">
                  <Leaf className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 transition-colors">
                  {t("about.roadmapEnvironment.title")}
                </h3>
                <div className="space-y-4 flex-grow">
                  <div>
                    <h4 className="text-xs font-mono text-emerald-600 dark:text-emerald-400/80 mb-2 uppercase tracking-wider transition-colors">Vision</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-gray leading-relaxed transition-colors">
                      {t("about.roadmapEnvironment.vision")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Global Operations */}
          <motion.section variants={itemVariants} className="pt-8">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm dark:shadow-none dark:border-white/10 dark:bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10 transition-colors">
                  <Globe className="w-6 h-6 text-amber-600 dark:text-amber" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1 transition-colors">
                    {t("about.global.title")}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-gray transition-colors">
                    {t("about.global.text")}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

        </motion.div>
      </main>

      <footer className="border-t border-slate-200 dark:border-white/10 mt-32 transition-colors">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-gray/60 transition-colors">
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
