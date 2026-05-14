"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const projects = [
    { key: "clinicalAi", id: "clinicalAi" },
    { key: "tanymedu", id: "tanymedu" },
    { key: "gradingPipeline", id: "gradingPipeline" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-[#0B0E14] dark:text-slate-gray font-sans selection:bg-emerald-400/30 dark:selection:bg-amber/30 selection:text-slate-900 dark:selection:text-white">
      {/* Background subtle grid/gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#e0e7ff,#f8fafc)] dark:bg-[radial-gradient(circle_at_top_right,#1d1b4b,#0B0E14)] -z-10 transition-colors duration-500" />

      <main className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-slate-500 hover:text-slate-900 dark:text-slate-gray/70 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
              {t("projects.title")}
            </h1>
          </motion.div>

          {/* Projects List */}
          <div className="space-y-24">
            {projects.map((project, idx) => (
              <motion.article 
                key={project.key}
                id={project.id}
                variants={itemVariants}
                className="scroll-mt-32 border-t border-slate-200 dark:border-white/10 pt-16 relative group transition-colors"
              >
                <div className="absolute top-16 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
                  {/* Left Column: Title & Meta */}
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400/90 mb-4 transition-colors">
                      // 0{idx + 1}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white leading-tight transition-colors">
                      {t(`projects.${project.key}.title`)}
                    </h2>
                    <p className="font-mono text-sm text-slate-500 dark:text-slate-gray/60 uppercase tracking-wide transition-colors">
                      {t(`projects.${project.key}.subtitle`)}
                    </p>
                  </div>

                  {/* Right Column: Case Study */}
                  <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 transition-colors">
                    <div>
                      <h3 className="text-xs font-mono tracking-widest text-slate-400 dark:text-white/40 uppercase mb-3 transition-colors">
                        Executive Summary
                      </h3>
                      <p className="text-lg text-slate-700 dark:text-slate-gray/90 leading-relaxed transition-colors">
                        {t(`projects.${project.key}.summary`)}
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-slate-200 dark:border-white/5 transition-colors">
                      <div>
                        <h3 className="text-xs font-mono tracking-widest text-amber-600 dark:text-amber/60 uppercase mb-3 flex items-center gap-2 transition-colors">
                          <span className="w-1 h-1 rounded-full bg-amber-500 dark:bg-amber/60" />
                          The Challenge
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-gray leading-relaxed transition-colors">
                          {t(`projects.${project.key}.challenge`)}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400/60 uppercase mb-3 flex items-center gap-2 transition-colors">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 dark:bg-emerald-400/60" />
                          The Solution
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-gray leading-relaxed transition-colors">
                          {t(`projects.${project.key}.solution`)}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6 rounded-xl border transition-colors shadow-sm dark:shadow-none">
                      <h3 className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400/60 uppercase mb-3 flex items-center gap-2 transition-colors">
                        <span className="w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400/60" />
                        The Outcome
                      </h3>
                      <p className="text-sm text-slate-800 dark:text-white/80 leading-relaxed transition-colors">
                        {t(`projects.${project.key}.outcome`)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer minimal */}
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
