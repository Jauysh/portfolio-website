"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Server, Shield, Cpu, Activity, Box, Database } from "lucide-react";
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

export default function InfrastructurePage() {
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
          {/* Header & Philosophy */}
          <motion.div variants={itemVariants} className="space-y-12">
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-slate-500 hover:text-slate-900 dark:text-slate-gray/70 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
                {t("infra.philosophy.title")}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-gray/90 leading-relaxed max-w-3xl transition-colors">
                {t("infra.philosophy.description")}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {/* Orchestration & Routing */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div className="border-b border-slate-200 dark:border-white/10 pb-4 transition-colors">
                <h2 className="text-sm font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase transition-colors">
                  // {t("infra.orchestration.title")}
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-gray transition-colors">
                {t("infra.orchestration.summary")}
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white shadow-sm border-slate-200 dark:shadow-none dark:bg-white/5 rounded-lg border dark:border-white/10 shrink-0 transition-colors">
                    <Box className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-emerald-600/80 dark:text-emerald-400/80 mb-1 transition-colors">VIRTUALIZATION</span>
                    <span className="text-slate-700 dark:text-white/90 text-sm leading-relaxed transition-colors">{t("infra.orchestration.virtualization")}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white shadow-sm border-slate-200 dark:shadow-none dark:bg-white/5 rounded-lg border dark:border-white/10 shrink-0 transition-colors">
                    <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-blue-600/80 dark:text-blue-400/80 mb-1 transition-colors">SECURITY</span>
                    <span className="text-slate-700 dark:text-white/90 text-sm leading-relaxed transition-colors">{t("infra.orchestration.security")}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white shadow-sm border-slate-200 dark:shadow-none dark:bg-white/5 rounded-lg border dark:border-white/10 shrink-0 transition-colors">
                    <Server className="w-4 h-4 text-amber-600 dark:text-amber" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-amber-600/80 dark:text-amber/80 mb-1 transition-colors">COMPUTE</span>
                    <span className="text-slate-700 dark:text-white/90 text-sm leading-relaxed transition-colors">{t("infra.orchestration.compute")}</span>
                  </div>
                </li>
              </ul>
            </motion.section>

            {/* Agentic Runtime */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div className="border-b border-slate-200 dark:border-white/10 pb-4 transition-colors">
                <h2 className="text-sm font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase transition-colors">
                  // {t("infra.runtime.title")}
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-gray transition-colors">
                {t("infra.runtime.summary")}
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white shadow-sm border-slate-200 dark:shadow-none dark:bg-white/5 rounded-lg border dark:border-white/10 shrink-0 transition-colors">
                    <Activity className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-purple-600/80 dark:text-purple-400/80 mb-1 transition-colors">STATEFUL LOGIC</span>
                    <span className="text-slate-700 dark:text-white/90 text-sm leading-relaxed transition-colors">{t("infra.runtime.statefulLogic")}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white shadow-sm border-slate-200 dark:shadow-none dark:bg-white/5 rounded-lg border dark:border-white/10 shrink-0 transition-colors">
                    <Database className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-orange-600/80 dark:text-orange-400/80 mb-1 transition-colors">QUEUE PROCESSING</span>
                    <span className="text-slate-700 dark:text-white/90 text-sm leading-relaxed transition-colors">{t("infra.runtime.queueProcessing")}</span>
                  </div>
                </li>
              </ul>
            </motion.section>
          </div>

          {/* Hardware & Edge Integration (Grid Layout) */}
          <motion.section variants={itemVariants} className="space-y-8 pt-12 border-t border-slate-200 dark:border-white/10 transition-colors">
            <h2 className="text-sm font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase transition-colors">
              // {t("infra.hardware.title")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 shadow-sm dark:shadow-none dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04] transition-colors">
                <Cpu className="w-5 h-5 text-slate-400 dark:text-slate-gray mb-4 transition-colors" />
                <h3 className="text-xs font-mono text-slate-500 dark:text-white/60 mb-2 transition-colors">COMPUTE CLUSTERS</h3>
                <p className="text-sm text-slate-800 dark:text-white/90 leading-relaxed transition-colors">{t("infra.hardware.compute")}</p>
              </div>
              <div className="p-6 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 shadow-sm dark:shadow-none dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04] transition-colors">
                <Box className="w-5 h-5 text-slate-400 dark:text-slate-gray mb-4 transition-colors" />
                <h3 className="text-xs font-mono text-slate-500 dark:text-white/60 mb-2 transition-colors">EDGE NODES</h3>
                <p className="text-sm text-slate-800 dark:text-white/90 leading-relaxed transition-colors">{t("infra.hardware.edgeNodes")}</p>
              </div>
              <div className="p-6 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 shadow-sm dark:shadow-none dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04] transition-colors">
                <Activity className="w-5 h-5 text-slate-400 dark:text-slate-gray mb-4 transition-colors" />
                <h3 className="text-xs font-mono text-slate-500 dark:text-white/60 mb-2 transition-colors">DIAGNOSTICS</h3>
                <p className="text-sm text-slate-800 dark:text-white/90 leading-relaxed transition-colors">{t("infra.hardware.diagnostics")}</p>
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
