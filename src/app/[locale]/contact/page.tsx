"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Send,
  Activity,
  MapPin,
  Clock,
  ShieldCheck,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { FormEvent, useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { B2B_PRODUCTS } from "@/data/projectsData";
import { pickLocale } from "@/data/types";
import { trackGAEvent } from "@/components/GoogleAnalytics";

export default function ContactPage() {
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mailtoFallbackUrl, setMailtoFallbackUrl] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState("general-consulting");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const prod = params.get("product");
      if (prod) {
        setSelectedProduct(prod);
      }
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      organization: String(formData.get("organization") || ""),
      contact: String(formData.get("contact") || ""),
      productOrService: String(formData.get("productOrService") || ""),
      message: String(formData.get("message") || ""),
      website_hp: String(formData.get("website_hp") || ""),
      locale,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      trackGAEvent("generate_lead", {
        product_or_service: payload.productOrService,
        locale,
        delivery_mode: data.mode || "mailto",
      });

      const subject = encodeURIComponent(
        `[Portfolio / B2B] ${payload.productOrService} — ${payload.name}`
      );
      const bodyText = encodeURIComponent(
        `Name: ${payload.name}\nOrganization: ${payload.organization}\nContact: ${payload.contact}\nScope: ${payload.productOrService}\n\nMessage:\n${payload.message}`
      );
      const mailto = `mailto:a.jauysh@gmail.com?subject=${subject}&body=${bodyText}`;
      setMailtoFallbackUrl(mailto);

      if (data.mode !== "telegram" && data.mode !== "filtered" && typeof window !== "undefined") {
        window.location.href = mailto;
      }
    } catch {
      // Fallback if offline
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-[#0B0E14] dark:text-slate-gray font-sans selection:bg-emerald-400/30 dark:selection:bg-amber/30 selection:text-slate-900 dark:selection:text-white pb-20">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#e0e7ff,#f8fafc)] dark:bg-[radial-gradient(circle_at_top_right,#1d1b4b,#0B0E14)] -z-10 transition-colors duration-500" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-14">
          {/* Left Column: B2B Demo & Consulting Form */}
          <div className="space-y-10">
            <div className="space-y-5">
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

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                <Activity className="w-8 h-8 text-amber-600 dark:text-amber shrink-0" />
                <span>
                  {locale === "kk"
                    ? "B2B Демо, Енгізу және Консалтинг"
                    : locale === "ru"
                    ? "Запрос B2B-демо, внедрения и консалтинга"
                    : "B2B Product Demo & Architecture Inquiry"}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-gray/90 leading-relaxed border-l-2 border-emerald-500/40 pl-4 py-1">
                {locale === "kk"
                  ? "EdTech SaaS өнімдерін (OmniCheck, LuminaMath, SSP, GM-App, EduStaff IAM) мектебіңізге немесе оқу орталығыңызға B2B ретінде қосу, корпоративтік желі/AI архитектурасын жобалау не халықаралық жобалар бойынша ұсыныс жіберіңіз."
                  : locale === "ru"
                  ? "Оставьте заявку на пилотное внедрение B2B EdTech-продуктов (OmniCheck, LuminaMath, SSP, GM-App, EduStaff IAM) в вашей школе, аудит ИТ/SD-WAN инфраструктуры или разработку AI-систем под ключ."
                  : "Request a live B2B product pilot (OmniCheck, LuminaMath, SSP, GM-App, EduStaff IAM) for your institution, schedule an enterprise infrastructure audit, or discuss Senior/Principal engineering engagements."}
              </p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white shadow-sm border border-slate-200 dark:shadow-none dark:bg-white/[0.02] dark:border-white/10 p-5 sm:p-9 rounded-3xl"
            >
              <input
                type="text"
                name="website_hp"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>
                      {locale === "kk"
                        ? "Сұранысыңыз дайындалды! Тікелей Telegram немесе Email арқылы жіберілді."
                        : locale === "ru"
                        ? "Ваш запрос сформирован и направлен через Telegram / Email."
                        : "Your inquiry has been routed via Telegram / Email."}
                    </span>
                  </div>
                  {mailtoFallbackUrl && (
                    <a
                      href={mailtoFallbackUrl}
                      className="text-xs font-mono underline shrink-0"
                    >
                      a.jauysh@gmail.com
                    </a>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 dark:text-white/50 uppercase tracking-widest block">
                    //{" "}
                    {locale === "kk"
                      ? "Аты-жөніңіз"
                      : locale === "ru"
                      ? "Ваше имя"
                      : "Full Name"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={
                      locale === "kk"
                        ? "Мысалы: Ерлан Сәтбаев"
                        : locale === "ru"
                        ? "Иван Петров"
                        : "Alex Morgan"
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-amber-500 dark:bg-white/[0.03] dark:border-white/10 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 dark:text-white/50 uppercase tracking-widest block">
                    //{" "}
                    {locale === "kk"
                      ? "Мектеп / Компания / Ұйым"
                      : locale === "ru"
                      ? "Школа / Компания / Холдинг"
                      : "School / Company / Organization"}
                  </label>
                  <input
                    type="text"
                    name="organization"
                    placeholder={
                      locale === "kk"
                        ? "Оқу орталығы / Мектеп желісі / IT компания"
                        : locale === "ru"
                        ? "Образовательный центр / Сеть школ / IT-компания"
                        : "Academy / School Network / Enterprise"
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-amber-500 dark:bg-white/[0.03] dark:border-white/10 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 dark:text-white/50 uppercase tracking-widest block">
                    // Email / Telegram
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    placeholder="email@domain.com / @telegram"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-amber-500 dark:bg-white/[0.03] dark:border-white/10 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 dark:text-white/50 uppercase tracking-widest block">
                    //{" "}
                    {locale === "kk"
                      ? "Таңдалған B2B Өнім немесе Қызмет"
                      : locale === "ru"
                      ? "Выбранный B2B-продукт или услуга"
                      : "Selected B2B Product or Engagement"}
                  </label>
                  <select
                    name="productOrService"
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-amber-500 dark:bg-[#11151F] dark:border-white/10 dark:text-white"
                  >
                    <option value="general-consulting">
                      {locale === "kk"
                        ? "Инженерлік Консалтинг / Full-Stack & AI Role"
                        : locale === "ru"
                        ? "Инженерный консалтинг / Full-Stack & AI Role"
                        : "Engineering Consulting / Senior & Principal Role"}
                    </option>
                    {B2B_PRODUCTS.map((prod) => (
                      <option key={prod.slug} value={prod.slug}>
                        B2B Demo: {pickLocale(prod.title, locale)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 dark:text-white/50 uppercase tracking-widest block">
                  //{" "}
                  {locale === "kk"
                    ? "Жоба сипаттамасы немесе сұраныс"
                    : locale === "ru"
                    ? "Описание задачи или параметры внедрения"
                    : "Project Specifications / Deployment Scope"}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={
                    locale === "kk"
                      ? "Филиалдар саны, оқушы/қызметкер саны немесе техникалық тапсырма туралы қысқаша жазыңыз..."
                      : locale === "ru"
                      ? "Укажите количество филиалов/учеников или опишите техническую задачу..."
                      : "Describe your campus count, user scale, or technical architecture requirements..."
                  }
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-amber-500 dark:bg-white/[0.03] dark:border-white/10 dark:text-white resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs font-mono text-slate-500 dark:text-white/40 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Telegram Bot / Email Route · SLA &lt; 24h
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber text-slate-950 font-mono text-xs sm:text-sm font-bold hover:bg-amber/90 transition-all disabled:opacity-50"
                >
                  <span>
                    {isSubmitting
                      ? "..."
                      : locale === "kk"
                      ? "Сұранысты жіберу ->"
                      : locale === "ru"
                      ? "Отправить запрос ->"
                      : "Transmit Inquiry ->"}
                  </span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.form>
          </div>

          {/* Right Column: Direct Endpoints & Logistics */}
          <div className="space-y-8 lg:pt-16">
            <div className="p-7 rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02] space-y-6">
              <h2 className="text-xs font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase border-b border-slate-200 dark:border-white/10 pb-3">
                //{" "}
                {locale === "kk"
                  ? "ТІКЕЛЕЙ БАЙЛАНЫС ЖӘНЕ ЛОГИСТИКА"
                  : locale === "ru"
                  ? "ПРЯМЫЕ КОНТАКТЫ И ЛОГИСТИКА"
                  : "DIRECT ENDPOINTS & LOGISTICS"}
              </h2>

              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-slate-400 uppercase">
                      {locale === "kk"
                        ? "Жеке Email"
                        : locale === "ru"
                        ? "Личный Email"
                        : "Direct Email"}
                    </span>
                    <a
                      href="mailto:a.jauysh@gmail.com"
                      className="text-slate-900 dark:text-white hover:text-amber font-mono block"
                    >
                      a.jauysh@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-slate-400 uppercase">
                      {locale === "kk"
                        ? "Орналасқан жері / Локация"
                        : locale === "ru"
                        ? "База операций / Локация"
                        : "Base of Operations"}
                    </span>
                    <span className="text-slate-900 dark:text-white">
                      {locale === "kk"
                        ? "Кишинёв, Молдова · Алматы / Тараз, ҚР"
                        : locale === "ru"
                        ? "Кишинев, Молдова · Алматы / Тараз, РК"
                        : "Chișinău, Moldova · Almaty / Taraz, KZ"}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-slate-400 uppercase">
                      {locale === "kk"
                        ? "Уақыт белдеуі және Жұмыс тілдері"
                        : locale === "ru"
                        ? "Часовой пояс и Рабочие языки"
                        : "Timezone & Working Languages"}
                    </span>
                    <span className="text-slate-900 dark:text-white block">
                      EET/EEST (UTC+2/UTC+3) · Astana (UTC+5)
                    </span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                      {locale === "kk"
                        ? "KK · RU · TR · EN · AR (Базалық)"
                        : locale === "ru"
                        ? "KK · RU · TR · EN · AR (Базовый)"
                        : "KK · RU · TR · EN · AR (Basic)"}
                    </span>
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Jauysh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-white hover:border-amber transition-colors"
                >
                  GitHub: @Jauysh
                </a>
                <a
                  href="https://linkedin.com/in/azamat-jauysh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-white hover:border-amber transition-colors"
                >
                  LinkedIn: azamat-jauysh
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
