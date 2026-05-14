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
    <div className="min-h-screen bg-[#0B0E14] text-slate-gray font-sans selection:bg-amber/30 selection:text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#1d1b4b,#0B0E14)] -z-10" />

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
              className="inline-flex items-center space-x-2 text-slate-gray/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                {t("infra.philosophy.title")}
              </h1>
              <p className="text-xl text-slate-gray/90 leading-relaxed max-w-3xl">
                {t("infra.philosophy.description")}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {/* Orchestration & Routing */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div className="border-b border-white/10 pb-4">
                <h2 className="text-sm font-mono tracking-widest text-white/50 uppercase">
                  // {t("infra.orchestration.title")}
                </h2>
              </div>
              <p className="text-slate-gray">
                {t("infra.orchestration.summary")}
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
                    <Box className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-emerald-400/80 mb-1">VIRTUALIZATION</span>
                    <span className="text-white/90 text-sm leading-relaxed">{t("infra.orchestration.virtualization")}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
                    <Shield className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-blue-400/80 mb-1">SECURITY</span>
                    <span className="text-white/90 text-sm leading-relaxed">{t("infra.orchestration.security")}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
                    <Server className="w-4 h-4 text-amber" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-amber/80 mb-1">COMPUTE</span>
                    <span className="text-white/90 text-sm leading-relaxed">{t("infra.orchestration.compute")}</span>
                  </div>
                </li>
              </ul>
            </motion.section>

            {/* Agentic Runtime */}
            <motion.section variants={itemVariants} className="space-y-8">
              <div className="border-b border-white/10 pb-4">
                <h2 className="text-sm font-mono tracking-widest text-white/50 uppercase">
                  // {t("infra.runtime.title")}
                </h2>
              </div>
              <p className="text-slate-gray">
                {t("infra.runtime.summary")}
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
                    <Activity className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-purple-400/80 mb-1">STATEFUL LOGIC</span>
                    <span className="text-white/90 text-sm leading-relaxed">{t("infra.runtime.statefulLogic")}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
                    <Database className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-orange-400/80 mb-1">QUEUE PROCESSING</span>
                    <span className="text-white/90 text-sm leading-relaxed">{t("infra.runtime.queueProcessing")}</span>
                  </div>
                </li>
              </ul>
            </motion.section>
          </div>

          {/* Hardware & Edge Integration (Grid Layout) */}
          <motion.section variants={itemVariants} className="space-y-8 pt-12 border-t border-white/10">
            <h2 className="text-sm font-mono tracking-widest text-white/50 uppercase">
              // {t("infra.hardware.title")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <Cpu className="w-5 h-5 text-slate-gray mb-4" />
                <h3 className="text-xs font-mono text-white/60 mb-2">COMPUTE CLUSTERS</h3>
                <p className="text-sm text-white/90 leading-relaxed">{t("infra.hardware.compute")}</p>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <Box className="w-5 h-5 text-slate-gray mb-4" />
                <h3 className="text-xs font-mono text-white/60 mb-2">EDGE NODES</h3>
                <p className="text-sm text-white/90 leading-relaxed">{t("infra.hardware.edgeNodes")}</p>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <Activity className="w-5 h-5 text-slate-gray mb-4" />
                <h3 className="text-xs font-mono text-white/60 mb-2">DIAGNOSTICS</h3>
                <p className="text-sm text-white/90 leading-relaxed">{t("infra.hardware.diagnostics")}</p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>

      <footer className="border-t border-white/10 mt-32">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-gray/60">
          <div className="flex items-center gap-6">
            <span>{t("home.footer.languages")}</span>
            <span className="text-white/20">|</span>
            <span>{t("home.footer.copyright")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
