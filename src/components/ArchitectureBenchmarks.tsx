"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Zap,
  EyeOff,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

export default function ArchitectureBenchmarks({ locale }: { locale: string }) {
  const [privacyShieldActive, setPrivacyShieldActive] = useState(true);

  const comparisons = [
    {
      domain:
        locale === "kk"
          ? "Helpdesk & Live NOC Мониторингі"
          : locale === "ru"
          ? "Helpdesk и Live NOC Мониторинг"
          : "Helpdesk & Live NOC Monitoring",
      legacy:
        locale === "kk"
          ? "GLPI + Zabbix (~4 GB RAM, 978 ms TTFB, диск толып қалу)"
          : locale === "ru"
          ? "GLPI + Zabbix (~4 ГБ RAM, 978 мс TTFB, переполнение диска)"
          : "GLPI + Zabbix (~4 GB RAM, 978 ms TTFB, disk bloat)",
      custom:
        locale === "kk"
          ? "Python + SQLite 3 WAL (~12 MB RAM, 23.6 ms TTFB, Auto-Purge)"
          : locale === "ru"
          ? "Python + SQLite 3 WAL (~12 МБ RAM, 23.6 мс TTFB, Auto-Purge)"
          : "Python + SQLite 3 WAL (~12 MB RAM, 23.6 ms TTFB, Auto-Purge)",
      gain: "41x TTFB · 99% RAM Saved",
    },
    {
      domain:
        locale === "kk"
          ? "Қабылдау квотасы және Элективтер (7 кампус)"
          : locale === "ru"
          ? "Квоты приема и Элективы (7 кампусов)"
          : "7-Campus Enrollment & Elective Quotas",
      legacy:
        locale === "kk"
          ? "30 беттік Excel + Google Forms (орыннан асып кету, қақтығыстар)"
          : locale === "ru"
          ? "30-листовый Excel + Google Forms (овербукинг, рассинхрон)"
          : "30-Sheet Excel + Forms (seat overbooking & race conditions)",
      custom:
        locale === "kk"
          ? "GM-App & SSP (PostgreSQL Serializable Locks + WebSockets)"
          : locale === "ru"
          ? "GM-App & SSP (PostgreSQL Serializable Locks + WebSockets)"
          : "GM-App & SSP (PostgreSQL Serializable Locks + WebSockets)",
      gain: "0% Overbooking · 50+ Managers Live",
    },
    {
      domain:
        locale === "kk"
          ? "Корпоративтік Веб-портал & Онлайн Төлем"
          : locale === "ru"
          ? "Корпоративный портал и Эквайринг"
          : "Corporate School Web & Tuition Payments",
      legacy:
        locale === "kk"
          ? "4.1 GB WordPress (баяу 1.8s TTFB, плагин осалдықтары, касса кезегі)"
          : locale === "ru"
          ? "4.1 ГБ WordPress (медленный TTFB 1.8с, уязвимости, очереди в кассу)"
          : "4.1 GB WordPress (1.8s TTFB, plugin exploits, manual cashier)",
      custom:
        locale === "kk"
          ? "Next.js 16 + PHP 8.4 Bridge + Банктік 3D-Secure + llms.txt GEO"
          : locale === "ru"
          ? "Next.js 16 + PHP 8.4 Bridge + Банковский 3D-Secure + llms.txt GEO"
          : "Next.js 16 + PHP 8.4 Bridge + Bank 3D-Secure + llms.txt GEO",
      gain: "<50 ms Edge · 24/7 3D-Secure",
    },
    {
      domain:
        locale === "kk"
          ? "HR, Мұғалім CV-і және Google Workspace IAM"
          : locale === "ru"
          ? "HR, Портфолио и Google Workspace IAM"
          : "Faculty HR, Digital CV & Workspace IAM",
      legacy:
        locale === "kk"
          ? "Қолмен аккаунт ашу/жабу, шашыраңқы Word резюмелер (199 ms TTFB)"
          : locale === "ru"
          ? "Ручное управление 619 аккаунтами, разрозненные резюме (199 мс TTFB)"
          : "Manual 619-account provisioning & fragmented CVs (199 ms TTFB)",
      custom:
        locale === "kk"
          ? "EduStaff IAM (13.3 ms TTFB, 1 батырмамен Google Admin SDK Offboarding)"
          : locale === "ru"
          ? "EduStaff IAM (13.3 мс TTFB, оффбординг в 1 клик через Admin SDK)"
          : "EduStaff IAM (13.3 ms TTFB, 1-click Google Admin SDK Offboarding)",
      gain: "15x Faster · 619 IAM Synced",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left 7 Cols: B2B Legacy vs Custom Engineering ROI Table */}
      <div className="lg:col-span-7 p-5 sm:p-7 rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] space-y-5 shadow-sm dark:shadow-none">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber block">
              // B2B ARCHITECTURAL ROI BENCHMARKS
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
              {locale === "kk"
                ? "Ескі шешімдер (Legacy) vs Біздің Архитектура"
                : locale === "ru"
                ? "Типовые Legacy-решения vs Наша Архитектура"
                : "Standard Legacy Stack vs Our Custom Architecture"}
            </h3>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            Production Verified
          </span>
        </div>

        <div className="space-y-3">
          {comparisons.map((row, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 space-y-2"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {row.domain}
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-amber-500/15 text-amber-700 dark:text-amber border border-amber-500/25">
                  <Zap className="w-3 h-3 inline mr-1 -mt-0.5" />
                  {row.gain}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-rose-500/[0.05] border border-rose-500/15 text-slate-600 dark:text-slate-400 flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.legacy}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 text-slate-800 dark:text-slate-200 font-medium flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{row.custom}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right 5 Cols: Interactive OmniCheck GDPR Privacy Shield & Vision Demo */}
      <div className="lg:col-span-5 p-5 sm:p-7 rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] flex flex-col justify-between space-y-5 shadow-sm dark:shadow-none">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                // INTERACTIVE SANDBOX · OMNICHECK AI
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                {locale === "kk"
                  ? "Тірі демо: GDPR Privacy Shield & AI Тексеру"
                  : locale === "ru"
                  ? "Интерактивное демо: GDPR Privacy Shield"
                  : "Live Demo: Client-Side GDPR Privacy Shield"}
              </h3>
            </div>
            <button
              onClick={() => setPrivacyShieldActive(!privacyShieldActive)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                privacyShieldActive
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30"
              }`}
            >
              {privacyShieldActive ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>PII Masked (ON)</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>Raw PII (OFF)</span>
                </>
              )}
            </button>
          </div>

          {/* Simulated Student Notebook Canvas */}
          <div className="rounded-2xl border border-slate-300 dark:border-white/15 bg-[#f8fafc] dark:bg-[#0B0E14] p-4 font-mono text-xs space-y-3 relative overflow-hidden">
            {/* Top 7% PII Header Strip */}
            <div
              className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                privacyShieldActive
                  ? "bg-slate-900 text-emerald-400 border-emerald-500/40"
                  : "bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/30"
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                {privacyShieldActive ? (
                  <span className="truncate font-bold">
                    [HTML5 CANVAS MASK: TOP-7% STUDENT PII REDACTED]
                  </span>
                ) : (
                  <span className="truncate">
                    Оқушы: Әлихан Сейітов · 9 «А» сыныбы · ID #40291
                  </span>
                )}
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-black/30 shrink-0">
                Top 7%
              </span>
            </div>

            {/* Handwritten Math Steps Simulation */}
            <div className="space-y-2 pt-1 text-slate-700 dark:text-slate-300">
              <div className="p-2.5 rounded-lg bg-slate-200/60 dark:bg-white/[0.03] flex items-center justify-between">
                <span>1) x² - 5x + 6 = 0 → D = (-5)² - 4(1)(6) = 1</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                  ✓ Step 1 OK
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                <span>2) x₁ = (5 - 1)/2 = 2; x₂ = (5 + 1)/2 = 4 ❌</span>
                <span className="text-amber-600 dark:text-amber font-bold">
                  ⚠ Arithmetic
                </span>
              </div>
            </div>

            {/* Socratic AI Output */}
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-slate-800 dark:text-slate-200 space-y-1">
              <div className="flex items-center justify-between text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  GEMINI 2.5 FLASH SOCRATIC TUTOR
                </span>
                <span>dHash: 0x8f3a..c1 (Unique)</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {locale === "kk"
                  ? "«Дискриминантты (D = 1) өте дұрыс таптың! Енді x₂ = (5 + 1) / 2 өрнегіндегі 6-ны 2-ге бөлгенде неше шығатынын қайта есептеп көрші?»"
                  : locale === "ru"
                  ? "«Дискриминант (D = 1) найден верно! Но проверь вычисление x₂ = (5 + 1) / 2: сколько получится при делении 6 на 2?»"
                  : "“Great job finding D = 1! Now re-check step 2 where you wrote x₂ = (5 + 1) / 2: what is 6 divided by 2?”"}
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {locale === "kk"
            ? "Жоғарыдағы «PII Masked» батырмасын басып көріңіз: OmniCheck оқушының аты-жөнін серверге жібермей тұрып, браузердің өзінде HTML5 Canvas арқылы автоматты бүркемелейді (100% GDPR сәйкестігі)."
            : locale === "ru"
            ? "Нажмите кнопку «PII Masked» выше: OmniCheck автоматически закрашивает ФИО ученика в браузере через HTML5 Canvas еще до отправки фото в облако и ИИ (100% соответствие GDPR)."
            : "Toggle the 'PII Masked' button above: OmniCheck redacts the top 7% header of student notebooks in the browser via HTML5 Canvas before any image leaves the device."}
        </p>
      </div>
    </div>
  );
}
