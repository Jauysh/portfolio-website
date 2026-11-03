import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Layers,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
} from "lucide-react";
import { Link, routing } from "@/i18n/routing";
import { ALL_PROJECTS } from "@/data/projectsData";
import { STRATEGIC_BLOCKS } from "@/data/siteContent";
import { pickLocale, pickLocaleArray, type Locale } from "@/data/types";
import ProductVisualPreview from "@/components/ProductVisualPreview";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://niaz.kz";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const project of ALL_PROJECTS) {
      params.push({ locale, slug: project.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = (routing.locales.includes(locale as Locale) ? locale : "kk") as Locale;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found | Azamat Jauysh" };
  }

  const title = `${pickLocale(project.title, loc)} — ${pickLocale(
    project.subtitle,
    loc
  )} | Azamat Jauysh`;
  const description = `${pickLocale(project.summary, loc)} ${pickLocale(
    project.b2bValue,
    loc
  )}`;

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords: [
      pickLocale(project.title, loc),
      ...project.techStack,
      "Azamat Jauysh",
      "Азамат Жауыш",
      "EdTech SaaS",
      "Enterprise IT Architecture",
    ],
    alternates: {
      canonical: `${BASE_URL}/${loc}/projects/${project.slug}`,
      languages: {
        kk: `${BASE_URL}/kk/projects/${project.slug}`,
        en: `${BASE_URL}/en/projects/${project.slug}`,
        ru: `${BASE_URL}/ru/projects/${project.slug}`,
        "x-default": `${BASE_URL}/kk/projects/${project.slug}`,
      },
    },
    openGraph: {
      type: "article",
      url: `${BASE_URL}/${loc}/projects/${project.slug}`,
      title,
      description,
      images: [
        {
          url: `/opengraph-image`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const projectIndex = ALL_PROJECTS.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) {
    notFound();
  }

  const project = ALL_PROJECTS[projectIndex];
  const prevProject =
    ALL_PROJECTS[(projectIndex - 1 + ALL_PROJECTS.length) % ALL_PROJECTS.length];
  const nextProject = ALL_PROJECTS[(projectIndex + 1) % ALL_PROJECTS.length];
  const blockInfo = STRATEGIC_BLOCKS.find((b) => b.id === project.block);
  const highlights = pickLocaleArray(project.highlights, locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${BASE_URL}/${locale}/projects/${project.slug}#software`,
        name: pickLocale(project.title, locale),
        headline: pickLocale(project.subtitle, locale),
        description: pickLocale(project.summary, locale),
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Cloud, Linux, iOS, Android",
        author: {
          "@type": "Person",
          name: "Azamat Jauysh",
          url: BASE_URL,
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          price: "0",
          description: pickLocale(project.b2bValue, locale),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "kk" ? "Басты бет" : locale === "ru" ? "Главная" : "Home",
            item: `${BASE_URL}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name:
              locale === "kk"
                ? "Жобалар & B2B"
                : locale === "ru"
                ? "Проекты и B2B"
                : "Projects & B2B",
            item: `${BASE_URL}/${locale}/projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pickLocale(project.title, locale),
            item: `${BASE_URL}/${locale}/projects/${project.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 dark:bg-[#0B0E14] dark:text-slate-gray font-sans pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#e2e8f0,#f8fafc)] dark:bg-[radial-gradient(circle_at_top_right,#1A2234,#0B0E14)] -z-10" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12 lg:py-28 space-y-12">
        {/* Back Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {locale === "kk"
                ? "Барлық 11 жоба мен B2B каталогқа оралу"
                : locale === "ru"
                ? "Назад ко всем 11 проектам и B2B каталогу"
                : "Back to all 11 Projects & B2B Suite"}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {blockInfo && (
              <span className="px-3 py-1 rounded-full text-xs font-mono border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03] text-slate-600 dark:text-slate-300">
                {pickLocale(blockInfo.title, locale)}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
              {pickLocale(project.statusBadge, locale)}
            </span>
          </div>
        </div>

        {/* Hero Header */}
        <section className="p-6 sm:p-10 rounded-3xl border border-slate-200/90 bg-white dark:border-white/10 dark:bg-[#111622]/90 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.b2bReady && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {locale === "kk"
                    ? "B2B Лицензиялауға & Енгізуге Дайын"
                    : locale === "ru"
                    ? "Готов к B2B Внедрению и Лицензированию"
                    : "B2B Licensing & Turnkey Deployment Ready"}
                </span>
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300">
              {pickLocale(project.domainOrPort, locale)}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              {pickLocale(project.title, locale)}
            </h1>
            <p className="text-lg sm:text-2xl font-medium text-amber-600 dark:text-amber-400">
              {pickLocale(project.subtitle, locale)}
            </p>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-200 leading-relaxed max-w-4xl">
            {pickLocale(project.summary, locale)}
          </p>

          {/* Primary Action Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href={`/contact?product=${project.slug}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-amber dark:text-slate-950 font-bold text-sm hover:opacity-90 transition-all shadow-lg"
            >
              <span>
                {locale === "kk"
                  ? "Осы жүйе бойынша B2B Демо / Енгізу сұрау"
                  : locale === "ru"
                  ? "Запросить B2B Демо / Внедрение системы"
                  : "Request B2B Demo / Deploy This System"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-white/[0.03] hover:border-amber-500/50 text-slate-800 dark:text-white font-semibold text-sm transition-all"
              >
                <span>
                  {locale === "kk"
                    ? "Тірі жүйені ашу"
                    : locale === "ru"
                    ? "Открыть живую систему"
                    : "Open Live Production"}
                </span>
                <ExternalLink className="w-4 h-4 text-amber-500" />
              </a>
            )}
          </div>
        </section>

        {/* Live Interactive System Console & Visual Preview */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {locale === "kk"
                ? "// ЖҮЙЕНІҢ ИНТЕРАКТИВТІ АРХИТЕКТУРАЛЫҚ КОНСОЛІ МЕН МЕТРИКАЛАРЫ"
                : locale === "ru"
                ? "// ИНТЕРАКТИВНАЯ АРХИТЕКТУРНАЯ КОНСОЛЬ И МЕТРИКИ СИСТЕМЫ"
                : "// INTERACTIVE ARCHITECTURE CONSOLE & LIVE METRICS"}
            </h2>
          </div>
          <ProductVisualPreview project={project} locale={locale} />
        </section>

        {/* Deep-Dive Engineering Breakdown (Challenge -> Solution -> Outcome -> B2B Value) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111622] space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-rose-600 dark:text-rose-400">
              <Terminal className="w-4 h-4" />
              <span>
                {locale === "kk"
                  ? "01 // Мәселе және Инженерлік Сынақ"
                  : locale === "ru"
                  ? "01 // Проблема и Инженерный Вызов"
                  : "01 // Engineering & Operational Challenge"}
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
              {pickLocale(project.challenge, locale)}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111622] space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-amber-600 dark:text-amber-400">
              <Cpu className="w-4 h-4" />
              <span>
                {locale === "kk"
                  ? "02 // Архитектуралық Шешім"
                  : locale === "ru"
                  ? "02 // Архитектурное Решение"
                  : "02 // Architectural Solution"}
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
              {pickLocale(project.solution, locale)}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111622] space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>
                {locale === "kk"
                  ? "03 // Өндірістік Нәтиже (Production Impact)"
                  : locale === "ru"
                  ? "03 // Промышленный Результат (Production Impact)"
                  : "03 // Verified Production Outcome"}
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
              {pickLocale(project.outcome, locale)}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-emerald-500/[0.05] dark:bg-emerald-500/[0.06] space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-emerald-700 dark:text-emerald-300 font-bold">
              <TrendingUp className="w-4 h-4" />
              <span>
                {locale === "kk"
                  ? "04 // B2B Коммерциялық Құндылығы"
                  : locale === "ru"
                  ? "04 // Коммерческая Ценность для B2B"
                  : "04 // B2B Commercial & ROI Value"}
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
              {pickLocale(project.b2bValue, locale)}
            </p>
          </div>
        </section>

        {/* Key Technical Highlights & Full Tech Stack */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111622] space-y-5">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>
                {locale === "kk"
                  ? "Негізгі Техникалық Ерекшеліктер"
                  : locale === "ru"
                  ? "Ключевые Технические Особенности"
                  : "Key Technical Capabilities"}
              </span>
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-200"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111622] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-500" />
                <span>
                  {locale === "kk"
                    ? "Қолданылған Технологиялық Стек"
                    : locale === "ru"
                    ? "Технологический Стек"
                    : "Production Technology Stack"}
                </span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.04] text-slate-800 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-amber-500/25 bg-amber-500/5 space-y-3">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {locale === "kk"
                  ? "Осы жүйені өз мектебіңізге, білім беру орталығыңызға немесе компанияңызға бейімдеп орнатқыңыз келе ме?"
                  : locale === "ru"
                  ? "Хотите развернуть или адаптировать эту систему для вашей школы, образовательного центра или компании?"
                  : "Want to license or deploy this architecture for your school network or enterprise?"}
              </p>
              <Link
                href={`/contact?product=${project.slug}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber text-slate-950 font-bold text-xs hover:bg-amber/90 transition-all"
              >
                <span>
                  {locale === "kk"
                    ? "Жеке Консультация & Демо алу"
                    : locale === "ru"
                    ? "Получить Консультацию и Демо"
                    : "Schedule Architecture Demo"}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Previous / Next Case Study Navigation */}
        <section className="pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group p-5 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] hover:border-amber-500/40 transition-all flex items-center justify-between gap-4"
          >
            <div className="min-w-0">
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>
                  {locale === "kk"
                    ? "Алдыңғы жоба"
                    : locale === "ru"
                    ? "Предыдущий проект"
                    : "Previous System"}
                </span>
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white truncate mt-1">
                {pickLocale(prevProject.title, locale)}
              </div>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group p-5 rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] hover:border-amber-500/40 transition-all flex items-center justify-between gap-4 text-right"
          >
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-mono text-slate-400 flex items-center justify-end gap-1">
                <span>
                  {locale === "kk"
                    ? "Келесі жоба"
                    : locale === "ru"
                    ? "Следующий проект"
                    : "Next System"}
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white truncate mt-1">
                {pickLocale(nextProject.title, locale)}
              </div>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
