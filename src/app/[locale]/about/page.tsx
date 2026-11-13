"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Globe,
  Hexagon,
  Printer,
  Mail,
  MapPin,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function AboutPage() {
  const locale = useLocale();

  const handlePrintCv = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const workingLanguages =
    locale === "kk"
      ? [
          "Қазақша (KK · Ана тілі)",
          "Русский (RU · Еркін)",
          "Türkçe (TR · Еркін)",
          "English (EN · Кәсіби)",
          "العربية (AR · Базалық)",
        ]
      : locale === "ru"
      ? [
          "Қазақша (KK · Родной)",
          "Русский (RU · Свободно)",
          "Türkçe (TR · Свободно)",
          "English (EN · Профессиональный)",
          "العربية (AR · Базовый)",
        ]
      : [
          "Kazakh (KK · Native)",
          "Russian (RU · Fluent)",
          "Turkish (TR · Fluent)",
          "English (EN · Professional)",
          "Arabic (AR · Basic)",
        ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-[#0B0E14] dark:text-slate-gray font-sans selection:bg-emerald-400/30 dark:selection:bg-amber/30 selection:text-slate-900 dark:selection:text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#e0e7ff,#f8fafc)] dark:bg-[radial-gradient(circle_at_top_right,#1d1b4b,#0B0E14)] -z-10 transition-colors duration-500 print:hidden" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 lg:py-32 space-y-14 sm:space-y-20 print:py-4 print:px-0 print:space-y-6">
        {/* Top Navigation (Hidden in Print) */}
        <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
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

          <button
            onClick={handlePrintCv}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber text-slate-950 font-mono text-xs sm:text-sm font-bold hover:bg-amber/90 transition-colors shadow-lg shadow-amber/10"
          >
            <Printer className="w-4 h-4" />
            <span>
              {locale === "kk"
                ? "1-беттік Engineering CV (PDF сақтау)"
                : locale === "ru"
                ? "Скачать / Печать 1-стр. Engineering CV (PDF)"
                : "Print / Save 1-Page Engineering CV (PDF)"}
            </span>
          </button>
        </div>

        {/* 1. EXECUTIVE POSITIONING & WHY FULL-CYCLE */}
        <motion.section
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 print:hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10">
                <Hexagon className="w-3.5 h-3.5 text-amber-600 dark:text-amber" />
                <span className="text-xs font-mono tracking-wider text-amber-700 dark:text-amber uppercase">
                  Full-Cycle Engineer & IT Architect
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                {locale === "kk" ? "Азамат Жауыш" : "Azamat Jauysh"}
              </h1>

              <p className="text-base sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed border-l-2 border-amber-500 pl-5 py-1">
                {locale === "kk"
                  ? "Нарықтағы мамандардың 90%-ы не тек код жазады (бірақ шынайы желілік инфрақұрылым мен бизнес процесті білмейді), не тек желі мен сервер баптайды (бірақ заманауи AI SaaS пен жоғары жүктемелі веб-платформа жасай алмайды). Менің профилім — осы екі әлемді басынан аяғына дейін (End-to-End) біріктіретін Full-Cycle Product & Infrastructure Architect."
                  : locale === "ru"
                  ? "90% специалистов на рынке либо только пишут код (не понимая реальной сетевой инфраструктуры и бизнес-процессов), либо только администрируют сети и серверы (не умея создавать современные AI SaaS и высоконагруженные платформы). Мой профиль объединяет оба мира: от проектирования MikroTik SD-WAN и кластеров Proxmox/1С до мультимодальных AI SaaS-продуктов."
                  : "90% of engineers either only write application code (without understanding physical networks, security, and enterprise operations) or only administer infrastructure (without building modern AI SaaS products). I bridge both worlds End-to-End as a Full-Cycle Product & Infrastructure Architect."}
              </p>
            </div>

            <div className="shrink-0">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-white/15 shadow-2xl bg-[#0B0E14]">
                <Image
                  src="/avatar.jpg"
                  alt="Azamat Jauysh"
                  fill
                  priority
                  sizes="(max-width: 640px) 192px, 224px"
                  className="object-cover object-[50%_20%]"
                />
              </div>
            </div>
          </div>

          {/* Core Architectural Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] space-y-3">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {locale === "kk"
                    ? "End-to-End Product & AI SaaS Инженериясы"
                    : locale === "ru"
                    ? "End-to-End разработка продуктов и AI SaaS"
                    : "End-to-End Product & AI SaaS Engineering"}
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {locale === "kk"
                  ? "Идея мен бизнес-логикадан бастап мульти-тенанттық архитектураға, агенттік мультимодальды ЖИ конвейерлеріне (Gemini 2.5 Vision / GPT-4o + BullMQ), транзакциялық ДҚБЖ блоктауларына (PostgreSQL Serializable) және B2B төлем шлюздеріне дейін толық циклде әзірлеу."
                  : locale === "ru"
                  ? "Полный цикл создания коммерческих и корпоративных платформ: от бизнес-логики и мультитенантного роутинга до агентских конвейеров Vision LLM (BullMQ), транзакций PostgreSQL Serializable и платежных шлюзов."
                  : "Full-lifecycle ownership from domain modeling and multi-tenancy to agentic Vision LLM pipelines, PostgreSQL Serializable locking, and B2B payment gateway integration."}
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] space-y-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {locale === "kk"
                    ? "Enterprise Желі, Қауіпсіздік және Zero-IOPS Серверлер"
                    : locale === "ru"
                    ? "Корпоративные сети, DMZ-безопасность и Zero-IOPS"
                    : "Enterprise SD-WAN, DMZ Security & Zero-IOPS Infra"}
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {locale === "kk"
                  ? "Көп филиалды ұйымдардың физикалық және виртуалды инфрақұрылымын жобалау: MikroTik WireGuard SD-WAN, CAPsMAN Wi-Fi 6, Proxmox VE виртуализациясы, 5-деңгейлі DMZ изоляциясы, 12 МБ RAM тұтынатын кастомды Python/SQLite WAL сервистері және Linux 1С кластерлері."
                  : locale === "ru"
                  ? "Проектирование защищенного фундамента многофилиальных организаций: MikroTik WireGuard SD-WAN, CAPsMAN Wi-Fi 6, виртуализация Proxmox VE, 5-уровневая DMZ, сверхлегкие сервисы Python/SQLite WAL (12 МБ RAM) и серверные кластеры 1С на Linux."
                  : "Designing resilient multi-campus foundations: MikroTik WireGuard SD-WAN, CAPsMAN Wi-Fi 6, Proxmox VE LXC consolidation, 5-Layer DMZ hardening, 12 MB RAM Python/SQLite WAL daemons, and Linux 1C clusters."}
              </p>
            </div>
          </div>

          {/* Languages & Global Reach */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-emerald-500 shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  {locale === "kk"
                    ? "Жұмыс тілдері (Working Languages)"
                    : locale === "ru"
                    ? "Рабочие языки (Working Languages)"
                    : "Cross-Border Working Languages"}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {locale === "kk"
                    ? "ТМД, Шығыс Еуропа, Түркия және халықаралық командалармен тікелей жұмыс"
                    : locale === "ru"
                    ? "Прямая коммуникация с командами и заказчиками в СНГ, Восточной Европе, Турции и международных проектах"
                    : "Direct engineering & executive communication across CIS, Eastern Europe, Turkey & global teams"}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {workingLanguages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 2. 1-PAGE PRINTABLE ENGINEERING CV (#cv) */}
        <section
          id="cv"
          className="scroll-mt-28 rounded-3xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#11151F] p-8 sm:p-12 shadow-xl print:shadow-none print:border-none print:p-0 space-y-8 text-slate-900 dark:text-slate-100"
        >
          {/* CV Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-slate-200 dark:border-white/10 pb-6">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber">
                {locale === "kk"
                  ? "ИНЖЕНЕРЛІК ТҮЙІНДЕМЕ (EXECUTIVE ENGINEERING CV)"
                  : locale === "ru"
                  ? "ИНЖЕНЕРНОЕ РЕЗЮМЕ (EXECUTIVE ENGINEERING CV)"
                  : "EXECUTIVE ENGINEERING CURRICULUM VITAE"}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {locale === "kk" ? "Азамат Жауыш (Azamat Jauysh)" : "Azamat Jauysh (Азамат Жауыш)"}
              </h2>
              <p className="font-mono text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
                Full-Stack & AI Product Engineer | EdTech & IT Infrastructure Architect
              </p>
            </div>

            <div className="text-xs font-mono space-y-1.5 text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>a.jauysh@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>
                  {locale === "kk"
                    ? "Кишинёв, Молдова · Алматы / Тараз, Қазақстан"
                    : locale === "ru"
                    ? "Кишинев, Молдова · Алматы / Тараз, Казахстан"
                    : "Chișinău, Moldova · Almaty / Taraz, Kazakhstan"}
                </span>
              </div>
              <div>GitHub: github.com/Jauysh · LinkedIn: in/azamat-jauysh</div>
              <div>
                {locale === "kk"
                  ? "Тілдер: KK (Ана тілі) · RU (Еркін) · TR (Еркін) · EN (Кәсіби) · AR (Базалық)"
                  : locale === "ru"
                  ? "Языки: KK (Родной) · RU (Свободно) · TR (Свободно) · EN (Проф.) · AR (Базовый)"
                  : "Languages: KK (Native) · RU (Fluent) · TR (Fluent) · EN (Pro) · AR (Basic)"}
              </div>
            </div>
          </div>

          {/* CV Executive Summary & Key Impact Metrics */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {"// "}
              {locale === "kk"
                ? "01. ҚЫСҚАША ПРОФИЛЬ ЖӘНЕ НЕГІЗГІ КӨРСЕТКІШТЕР"
                : locale === "ru"
                ? "01. ПРОФИЛЬ И КЛЮЧЕВЫЕ ПОКАЗАТЕЛИ"
                : "01. EXECUTIVE PROFILE & IMPACT METRICS"}
            </h3>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {locale === "kk"
                ? "7–8 филиалы бар халықаралық білім беру желісінің (2 978 оқушы, 619 қызметкер) цифрлық экожүйесін, жоғары жүктемелі веб-платформаларын, мультимодальды ЖИ-негізіндегі EdTech SaaS өнімдерін және корпоративтік желілік инфрақұрылымын басынан аяғына дейін (End-to-End) құрастырушы."
                : locale === "ru"
                ? "End-to-End архитектор цифровой экосистемы международной образовательной сети из 8 кампусов (2 978 учеников, 619 сотрудников): от мультимодальных AI SaaS-продуктов и высоконагруженных веб-платформ до сети MikroTik WireGuard SD-WAN и кластеров Proxmox/1С."
                : "End-to-End architect of the digital ecosystem for an 8-campus international K-12 educational network (2,978 students, 619 staff), delivering multimodal AI EdTech SaaS platforms, high-concurrency web engines, and carrier-grade MikroTik SD-WAN / Proxmox cloud infrastructure."}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <strong className="block text-base text-slate-900 dark:text-white">
                  {locale === "kk" ? "7–8 Кампус" : locale === "ru" ? "7–8 Кампусов" : "7–8 Campuses"}
                </strong>
                <span>
                  {locale === "kk" ? "SD-WAN, Proxmox & Порталдар" : locale === "ru" ? "SD-WAN, Proxmox и Порталы" : "SD-WAN, Proxmox & Portals"}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <strong className="block text-base text-slate-900 dark:text-white">
                  {locale === "kk" ? "3,000+ Қолданушы" : locale === "ru" ? "3 000+ Юзеров" : "3,000+ Users"}
                </strong>
                <span>
                  {locale === "kk" ? "700+ пик олимпиада жүктемесі" : locale === "ru" ? "700+ пиковый онлайн" : "700+ Peak Olympiad Load"}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <strong className="block text-base text-slate-900 dark:text-white">
                  {locale === "kk" ? "41x Жылдамдату" : locale === "ru" ? "Ускорение в 41x" : "41x Speedup"}
                </strong>
                <span>978ms → 23.6ms TTFB</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <strong className="block text-base text-slate-900 dark:text-white">
                  {locale === "kk" ? "100 TB+ Деректер" : locale === "ru" ? "100 ТБ+ Данных" : "100 TB+ Data"}
                </strong>
                <span>Google Workspace & DMZ</span>
              </div>
            </div>
          </div>

          {/* CV Selected Production Systems */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {"// "}
              {locale === "kk"
                ? "02. ӨНДІРІСКЕ ЕНГІЗІЛГЕН НЕГІЗГІ ЖОБАЛАР МЕН АРХИТЕКТУРАЛАР"
                : locale === "ru"
                ? "02. КЛЮЧЕВЫЕ ПРОМЫШЛЕННЫЕ СИСТЕМЫ И АРХИТЕКТУРЫ"
                : "02. CORE PRODUCTION SYSTEMS & ARCHITECTURAL DELIVERABLES"}
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <div className="flex flex-wrap justify-between gap-2 font-bold text-slate-900 dark:text-white">
                  <span>1. Auto-Tender GovTech AI &amp; OmniCheck Agentic EdTech SaaS</span>
                  <span className="font-mono text-xs text-amber-600 dark:text-amber">
                    FastAPI · Next.js · Gemini 2.5 Vision · BullMQ · Sharp dHash
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  {locale === "kk"
                    ? "Auto-Tender: 5 тендер порталы, 4-қабатты нейро-символдық AI спецификация верификаторы (0.005с кэш, 0% бан), 6–12 айлық Pre-RFP болжамы және ҚР/1688/OEM таза маржасы. OmniCheck: 4 Workspace режимі, Concept Gap → Mastery Recovery → Morning Warm-up агенттік циклі, HTML5 Canvas GDPR Privacy Shield және <1с 64-bit dHash."
                    : locale === "ru"
                    ? "Auto-Tender: 5 тендерных площадок, 4-уровневая самопроверка ИИ (кэш 0.005с, 0% бана), прогноз планов за 6–12 мес. и расчет маржи РК/1688/OEM. OmniCheck: 4 режима Workspace, агентский цикл Mastery Recovery, браузерная маскировка ФИО (Canvas GDPR) и 64-bit dHash (<1 сек)."
                    : "Auto-Tender: 5 procurement portals, 4-layer neuro-symbolic AI spec/price verifier (0.005s cache, 0% ban risk), 6–12 mo Pre-RFP forecast, and retail/1688/OEM ROI. OmniCheck: 4 Workspace Modes, autonomous Mastery Recovery pedagogical loop, client-side Canvas Top-7% GDPR Shield, and <1s 64-bit dHash."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <div className="flex flex-wrap justify-between gap-2 font-bold text-slate-900 dark:text-white">
                  <span>2. Core K-12 SIS (481→1 DB), LuminaMath Olympiad &amp; SSP Electives</span>
                  <span className="font-mono text-xs text-amber-600 dark:text-amber">
                    PostgreSQL 16 · Google Cloud Run · Serializable Locks · Socket.IO
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  {locale === "kk"
                    ? "Core SIS: 8 бөлімшенің 481 қағаз/Excel формасын біріктірген 9-модульдік PostgreSQL 16 ядросы және REST API шлюзі. LuminaMath: 1,200 параллель сұранысты көтеретін олимпиада платформасы және BYTEA OMR PDF тарату (<1мс B-Tree). SSP: Prisma Serializable (0% overbooking) және WebSocket тірі квоталары."
                    : locale === "ru"
                    ? "Core SIS: 9-модульное ядро PostgreSQL 16 (оцифровка 481 формы 8 подразделений) и единый REST API-шлюз. LuminaMath: серверлесс-олимпиада (1 200 параллельных запросов) и потоковая выдача OMR PDF из BYTEA (<1 мс). SSP: выбор элективов на Prisma Serializable (0% овербукинга) и Socket.IO."
                    : "Core SIS: 9-module PostgreSQL 16 Single Source of Truth replacing 481 forms across 8 units + REST API Gateway. LuminaMath: 1,200-concurrency Cloud Run Olympiad engine with BYTEA OMR PDF streaming (<1ms). SSP: Prisma Serializable elective locking (0% overbooking) & live WebSockets."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <div className="flex flex-wrap justify-between gap-2 font-bold text-slate-900 dark:text-white">
                  <span>3. GM-App MIS, EduStaff HR/IAM (582), 5-Agent Media OS &amp; 3D-Secure CMS</span>
                  <span className="font-mono text-xs text-amber-600 dark:text-amber">
                    Next.js · PHP 8.4 Bridge · Google Workspace SDK · 3D-Secure
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  {locale === "kk"
                    ? "30 беттік Excel орнына 50+ менеджерге арналған тірі PostgreSQL MIS; 582 қызметкердің IAM жазбасы, QR олимпиада дипломдары мен 239 мұғалім портфолиосы (13.3мс TTFB); 29 арналы 5-агенттік AI маркетинг хабы (SRT субтитр, Ad Spy, Lead CRM); 30 маршруттық гибридтік CMS және 3D-Secure эквайринг."
                    : locale === "ru"
                    ? "Замена 30-листового Excel на живую PostgreSQL MIS для 50+ руководителей; 582 записи IAM сотрудников и реестр QR-дипломов олимпиад (13.3 мс TTFB); 5-агентный ИИ-маркетинг на 29 каналов (SRT, Ad Spy, Lead CRM); 30-маршрутная гибридная CMS с 3D-Secure эквайрингом."
                    : "Replaced 30-sheet Excel with live PostgreSQL MIS for 50+ managers; unified 582 staff IAM records & QR-verified Olympiad diplomas (13.3ms TTFB); 5-Agent AI Marketing OS across 29 channels (SRT subtitles, Ad Spy, Lead CRM); 30-route hybrid CMS with bank 3D-Secure tuition acquiring."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <div className="flex flex-wrap justify-between gap-2 font-bold text-slate-900 dark:text-white">
                  <span>4. 7-Campus WireGuard SD-WAN, 5-Layer DMZ, CampusCast TV &amp; 1C Cluster</span>
                  <span className="font-mono text-xs text-amber-600 dark:text-amber">
                    MikroTik RouterOS v7 · Proxmox VE · Python/SQLite WAL · Postgres Pro 1C 16
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  {locale === "kk"
                    ? "MikroTik CRS418/RB4011 SD-WAN (~7мс RTT), CAPsMAN Wi-Fi 6 (65+ AP), 802.1X; 12 МБ RAM тұтынатын кастомды Python/SQLite WAL Helpdesk, Live NOC (TTFB 41 есе жылдам) және 7 кампустың Smart TV эфирі; түнгі Ansible DR мен chattr +i бэкаптары; Linux 1C 8.3 + Git/EDT кластері."
                    : locale === "ru"
                    ? "Магистраль MikroTik CRS418/RB4011 SD-WAN (~7 мс RTT), CAPsMAN Wi-Fi 6 (65+ точек), 802.1X; кастомные сервисы Python/SQLite WAL (12 МБ RAM, TTFB в 41 раз быстрее) и вещание Smart TV 7 кампусов; ночной DR Ansible и бэкапы chattr +i; кластер 1С 8.3 на Linux + Git/EDT."
                    : "MikroTik CRS418/RB4011 SD-WAN (~7ms RTT), CAPsMAN Wi-Fi 6 (65+ APs), 802.1X; custom 12 MB RAM Python/SQLite WAL Helpdesk, Live NOC (41x faster TTFB) & 7-campus Smart TV broadcast engine; Ansible nightly DR & chattr +i immutable backups; Linux 1C 8.3 + Git/EDT cluster."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
