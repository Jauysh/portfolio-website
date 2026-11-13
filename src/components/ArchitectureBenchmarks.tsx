"use client";

import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function ArchitectureBenchmarks({ locale }: { locale: string }) {
  const [students, setStudents] = useState(1500);
  const [teachers, setTeachers] = useState(110);
  const [campuses, setCampuses] = useState(3);

  const savedHoursPerYear = Math.round(teachers * 36 * 1.25);
  const automatedPapersPerYear = Math.round(students * 28);
  const annualSavingsUsd = Math.round(campuses * 4200 + students * 6.5);

  return (
    <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111622] shadow-sm dark:shadow-none space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>{"// B2B EDTECH & INFRASTRUCTURE ROI CALCULATOR"}</span>
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
            {locale === "kk"
              ? "Білім желісі немесе мектеп үшін жылдық үнем калькуляторы"
              : locale === "ru"
              ? "Калькулятор годовой экономии для школы или сети кампусов"
              : "Annual Time & Cost Savings Calculator for School Networks"}
          </h3>
        </div>
        <Link
          href="/contact?product=omnicheck"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber text-slate-950 font-mono font-bold text-xs hover:bg-amber/90 transition-all shrink-0 self-start sm:self-center"
        >
          <span>
            {locale === "kk"
              ? "Есеппен Демо сұрау"
              : locale === "ru"
              ? "Запросить демо"
              : "Request Demo"}
          </span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Compact Sliders */}
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-600 dark:text-slate-300">
                {locale === "kk"
                  ? "Оқушы саны:"
                  : locale === "ru"
                  ? "Учеников:"
                  : "Students:"}
              </span>
              <span className="font-bold text-slate-900 dark:text-amber">
                {students.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={100}
              max={10000}
              step={100}
              value={students}
              onChange={(e) => setStudents(Number(e.target.value))}
              aria-label="Students"
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-600 dark:text-slate-300">
                {locale === "kk"
                  ? "Мұғалім саны:"
                  : locale === "ru"
                  ? "Учителей:"
                  : "Teachers:"}
              </span>
              <span className="font-bold text-slate-900 dark:text-amber">
                {teachers}
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={800}
              step={10}
              value={teachers}
              onChange={(e) => setTeachers(Number(e.target.value))}
              aria-label="Teachers"
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-600 dark:text-slate-300">
                {locale === "kk"
                  ? "Кампус саны:"
                  : locale === "ru"
                  ? "Кампусов:"
                  : "Campuses:"}
              </span>
              <span className="font-bold text-slate-900 dark:text-amber">
                {campuses}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={15}
              step={1}
              value={campuses}
              onChange={(e) => setCampuses(Number(e.target.value))}
              aria-label="Campuses"
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>
        </div>

        {/* 3 Crisp Calculated Outcomes */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] space-y-1">
            <div className="text-[10px] font-mono uppercase text-emerald-700 dark:text-emerald-400">
              {locale === "kk"
                ? "Үнемделген сағат"
                : locale === "ru"
                ? "Часов в год"
                : "Hours Saved / Yr"}
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
              {savedHoursPerYear.toLocaleString()}h
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-300">
              OmniCheck + OMR
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-amber-500/25 bg-amber-500/[0.06] space-y-1">
            <div className="text-[10px] font-mono uppercase text-amber-700 dark:text-amber">
              {locale === "kk"
                ? "Тексерілген жұмыс"
                : locale === "ru"
                ? "Работ в год"
                : "Graded Works / Yr"}
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
              {automatedPapersPerYear.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-300">
              STEM · OMR · Essays
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-cyan-500/25 bg-cyan-500/[0.06] space-y-1">
            <div className="text-[10px] font-mono uppercase text-cyan-700 dark:text-cyan-300">
              {locale === "kk"
                ? "Жылдық IT үнемі"
                : locale === "ru"
                ? "ИТ-экономия / год"
                : "Annual IT Savings"}
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
              ${annualSavingsUsd.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-300">
              Multi-Tenant + NOC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
