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
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import ExecutivePortrait from "@/components/ExecutivePortrait";

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
          initial={{ opacity: 0, y: 16 }}
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

            <div className="relative flex items-center justify-center shrink-0 mx-auto md:mx-0 py-2">
              <ExecutivePortrait alt="Azamat Jauysh" size="about" />
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
                  ? "Идея мен бизнес-логикадан бастап мульти-тенанттық архитектураға (*.omnicheck.kz), мультимодальды ЖИ конвейерлеріне (Gemini Vision / GPT-4o + BullMQ), транзакциялық ДҚБЖ блоктауларына (PostgreSQL Serializable) және B2B төлем шлюздеріне дейін толық циклде әзірлеу."
                  : locale === "ru"
                  ? "Полный цикл создания коммерческих и внутренних платформ: от бизнес-логики и мультитенантного роутинга (*.omnicheck.kz) до асинхронных очередей Vision LLM (BullMQ), транзакций PostgreSQL Serializable и платежных шлюзов."
                  : "Full-lifecycle ownership from domain modeling and wildcard multi-tenancy (*.omnicheck.kz) to asynchronous Vision LLM pipelines, PostgreSQL Serializable locking, and payment gateway integration."}
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
              //{" "}
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
              //{" "}
              {locale === "kk"
                ? "02. ӨНДІРІСКЕ ЕНГІЗІЛГЕН НЕГІЗГІ ЖОБАЛАР МЕН АРХИТЕКТУРАЛАР"
                : locale === "ru"
                ? "02. КЛЮЧЕВЫЕ ПРОМЫШЛЕННЫЕ СИСТЕМЫ И АРХИТЕКТУРЫ"
                : "02. CORE PRODUCTION SYSTEMS & ARCHITECTURAL DELIVERABLES"}
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <div className="flex flex-wrap justify-between gap-2 font-bold text-slate-900 dark:text-white">
                  <span>1. OmniCheck (*.omnicheck.kz) — Multi-Tenant AI Grading & Socratic Tutor SaaS</span>
                  <span className="font-mono text-xs text-amber-600 dark:text-amber">
                    Next.js 14 · Gemini 2.0 Vision · Redis/BullMQ · Sharp dHash
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  {locale === "kk"
                    ? "Wildcard поддомендік мульти-тенанттық архитектура, 6-деңгейлі RBAC, браузердегі HTML5 Canvas Top-7% PII Privacy Shield (GDPR), <1 секундта көшіруді анықтайтын 64-bit perceptual dHash антиплагиат және 6 тілдік динамикалық локализация (RTL қоса)."
                    : locale === "ru"
                    ? "Мультитенантность на поддоменах, 6 ролей RBAC, браузерная маскировка персональных данных HTML5 Canvas Top-7% (GDPR), антиплагиат 64-bit dHash (<1 сек) и локализация на 6 языков (включая RTL)."
                    : "Wildcard subdomain multi-tenancy, 6-tier RBAC, client-side HTML5 Canvas Top-7% PII Privacy Shield (GDPR), sub-second 64-bit perceptual dHash anti-plagiarism, and 6-language dynamic i18n (including RTL Arabic)."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <div className="flex flex-wrap justify-between gap-2 font-bold text-slate-900 dark:text-white">
                  <span>2. LuminaMath (luminamath.orizont.md) & SSP (Subject Selection Platform)</span>
                  <span className="font-mono text-xs text-amber-600 dark:text-amber">
                    Google Cloud Run · PostgreSQL Serializable · Socket.IO
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  {locale === "kk"
                    ? "LuminaMath: 1,200 параллель сұранысты көтеретін serverless олимпиада платформасы, атомарлы 6-таңбалы ID генераторы және PostgreSQL BYTEA OMR PDF тарату (<1мс B-Tree іздеу). SSP: Prisma Serializable транзакциялық оқшаулауы (0% overbooking) және WebSocket арқылы тікелей квота көрсету."
                    : locale === "ru"
                    ? "LuminaMath: серверлесс-платформа олимпиады (до 1 200 параллельных запросов), атомарный 6-значный ID и выдача OMR PDF из PostgreSQL BYTEA (<1 мс поиск B-Tree). SSP: 3-этапный выбор предметов с блокировками Prisma Serializable (0% овербукинга) и живыми квотами через WebSockets."
                    : "LuminaMath: 1,200-concurrency serverless Olympiad platform with atomic 6-digit ID generation and stateless PostgreSQL BYTEA OMR PDF streaming (<1ms B-Tree lookup). SSP: 3-stage curriculum engine with Prisma Serializable locking (0% seat overbooking) & real-time WebSocket quota bars."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <div className="flex flex-wrap justify-between gap-2 font-bold text-slate-900 dark:text-white">
                  <span>3. GM-App (7-Campus MIS), EduStaff HR/IAM, Enterprise Media OS & Corporate Web CMS</span>
                  <span className="font-mono text-xs text-amber-600 dark:text-amber">
                    Next.js 14 · PHP 8.4 Bridge · Google Workspace SDK · 3D-Secure
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  {locale === "kk"
                    ? "30 беттік Excel орнына 50+ менеджерге арналған тірі PostgreSQL MIS; 619 Google Workspace аккаунтын біріктірген 239 мұғалім портфолиосы (13.3мс TTFB, 1 батырмамен IAM offboarding); 29 арналы Zero-Password AI медиа-хаб; 4.1 ГБ WordPress орнына жасалған 30 маршруттық гибридтік CMS, банктік 3D-Secure эквайринг және llms.txt GEO/AEO."
                    : locale === "ru"
                    ? "Замена 30-листового Excel на живую PostgreSQL MIS для 50+ руководителей; консолидация 619 аккаунтов Google Workspace в 239 профилей педагогов (13.3 мс TTFB, оффбординг в 1 клик); объединение 29 соцсетей под ИИ-модерацией; миграция с 4.1 ГБ WordPress на 30-маршрутную гибридную CMS с 3D-Secure эквайрингом и llms.txt."
                    : "Replaced 30-sheet Excel with live PostgreSQL MIS for 50+ managers; consolidated 619 Google Workspace IAM accounts into 239 faculty profiles (13.3ms TTFB, 1-click IAM offboarding); unified 29 social channels under AI ethical moderation; engineered 30-route hybrid CMS with bank 3D-Secure tuition payments & llms.txt GEO/AEO."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <div className="flex flex-wrap justify-between gap-2 font-bold text-slate-900 dark:text-white">
                  <span>4. 7-Campus WireGuard SD-WAN, 5-Layer DMZ, Zero-IOPS NOC/Helpdesk & 1C:Enterprise 8.3</span>
                  <span className="font-mono text-xs text-amber-600 dark:text-amber">
                    MikroTik RouterOS v7 · Proxmox VE · Python/SQLite WAL · Postgres Pro 1C 16
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  {locale === "kk"
                    ? "MikroTik CRS418/RB4011 SD-WAN (~7мс RTT), CAPsMAN Wi-Fi 6 (65+ AP), FreeRADIUS 802.1X; ауыр GLPI/Zabbix орнына 12 МБ RAM тұтынатын кастомды Python/SQLite WAL Helpdesk & NOC (TTFB 41 есе жылдам, Zero-Space Auto-Purge); түнгі Ansible DR мен chattr +i өшірілмейтін бэкаптар; Linux 1C 8.3.25 + Git/EDT кластері."
                    : locale === "ru"
                    ? "Магистраль MikroTik CRS418/RB4011 SD-WAN (~7 мс RTT), CAPsMAN Wi-Fi 6 (65+ точек), FreeRADIUS 802.1X; замена тяжелых GLPI/Zabbix на кастомные сервисы Python/SQLite WAL (12 МБ RAM, ускорение TTFB в 41 раз, Zero-Space Auto-Purge); ночной DR через Ansible и неизменяемые бэкапы chattr +i; кластер 1С 8.3.25 на Linux + Git/EDT."
                    : "MikroTik CRS418/RB4011 SD-WAN (~7ms RTT), CAPsMAN Wi-Fi 6 (65+ APs), FreeRADIUS 802.1X; retired heavy GLPI/Zabbix for custom 12 MB RAM Python/SQLite WAL Helpdesk & NOC (41x faster TTFB, Zero-Space Auto-Purge); Ansible nightly DR & chattr +i immutable backups; Linux 1C 8.3.25 + Git/EDT cluster."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
