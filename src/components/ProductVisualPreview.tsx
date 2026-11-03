"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Cpu,
  Activity,
  Database,
  CheckCircle2,
  Layers,
  Terminal,
  Lock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { ProjectItem, pickLocale, pickLocaleArray } from "@/data/types";

export default function ProductVisualPreview({
  project,
  locale,
}: {
  project: ProjectItem;
  locale: string;
}) {
  const [activeNode, setActiveNode] = useState(0);
  const domain = pickLocale(project.domainOrPort, locale);
  const highlights = pickLocaleArray(project.highlights, locale);

  return (
    <div className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-slate-950 text-white shadow-2xl overflow-hidden">
      {/* macOS / Browser Window Top Bar */}
      <div className="px-4 py-3 border-b border-white/10 bg-white/[0.03] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>

        <div className="flex-1 max-w-md mx-auto px-3 py-1 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center gap-2 text-[11px] font-mono text-slate-300 truncate">
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate">{domain}</span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>LIVE TELEMETRY</span>
        </div>
      </div>

      {/* Main Interactive Console Preview */}
      <div className="p-5 sm:p-7 space-y-6 bg-[radial-gradient(circle_at_top_right,#1e293b,#090d16)]">
        {/* Top System Telemetry Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {project.metrics.slice(0, 4).map((m, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase">
                <span>NODE_0{idx + 1}</span>
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-lg sm:text-xl font-bold font-mono text-amber-400 mt-1.5">
                {pickLocale(m.value, locale)}
              </div>
              <div className="text-[11px] text-slate-300 leading-snug mt-0.5">
                {pickLocale(m.label, locale)}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive End-to-End Architecture Pipeline */}
        <div className="p-5 rounded-2xl border border-white/10 bg-black/40 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>
                {locale === "kk"
                  ? "Интерактивті Архитектуралық Конвейер (Түйінді басып көріңіз)"
                  : locale === "ru"
                  ? "Интерактивный Архитектурный Конвейер (Нажмите на узел)"
                  : "Interactive Architecture Pipeline (Click any stage)"}
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              {project.architectureFlow.length}{" "}
              {locale === "kk" ? "қабат" : locale === "ru" ? "этапов" : "stages"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {project.architectureFlow.map((step, idx) => {
              const isSelected = activeNode === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveNode(idx)}
                  className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                    isSelected
                      ? "border-amber-400/70 bg-amber-400/10 shadow-lg shadow-amber-500/5"
                      : "border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? "bg-amber-400 text-slate-950"
                        : "bg-white/10 text-slate-300"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-mono font-semibold text-white leading-snug">
                      {step}
                    </div>
                    <div className="text-[10px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>ACTIVE · VERIFIED</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Inspector Console */}
          <div className="p-4 rounded-xl border border-emerald-500/25 bg-emerald-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <Terminal className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs font-mono text-slate-200">
                <span className="text-emerald-400 font-bold">
                  [STAGE_0{activeNode + 1}]
                </span>{" "}
                {project.architectureFlow[activeNode]} —{" "}
                <span className="text-slate-400">
                  {highlights[activeNode % highlights.length] ||
                    pickLocale(project.solution, locale)}
                </span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono shrink-0 self-start sm:self-center">
              STATUS: 200 OK
            </span>
          </div>
        </div>

        {/* Project-Specific Live Simulation Card for Flagships */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white">
                {locale === "kk"
                  ? "Қауіпсіздік & Оқшаулау"
                  : locale === "ru"
                  ? "Безопасность и Изоляция"
                  : "Security & Isolation"}
              </div>
              <p className="text-slate-400 mt-1 leading-relaxed">
                {project.slug === "omnicheck"
                  ? "GDPR Zero-PII Canvas Crop · dHash 64-bit Cache · RBAC"
                  : project.slug === "gm-app"
                  ? "PostgreSQL Serializable Lock · 0% Double-Booking"
                  : "Zero-Trust DMZ · Strict Rate-Limiting · Automated Audit"}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] flex items-start gap-3">
            <Cpu className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white">
                {locale === "kk"
                  ? "Негізгі Қозғалтқыш"
                  : locale === "ru"
                  ? "Ядро Системы"
                  : "Core Engine Stack"}
              </div>
              <p className="text-slate-400 mt-1 leading-relaxed font-mono text-[11px]">
                {project.techStack.slice(0, 5).join(" · ")}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] flex items-start gap-3">
            <Database className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white flex items-center gap-1.5">
                <span>B2B Production SLA</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <p className="text-slate-400 mt-1 leading-relaxed">
                {pickLocale(project.statusBadge, locale)} ·{" "}
                <ArrowRight className="inline w-3 h-3" /> 99.98% Uptime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
