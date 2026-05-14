"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Send, Activity, MapPin, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
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

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    
    // Mock onSubmit function that console logs the payload
    console.log("Transmission Payload (Routing to n8n webhook):", payload);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Payload transmitted successfully. Check console.");
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 dark:bg-[#0B0E14] dark:text-slate-gray font-sans selection:bg-emerald-400/30 dark:selection:bg-amber/30 selection:text-slate-900 dark:selection:text-white pb-20">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#e0e7ff,#f8fafc)] dark:bg-[radial-gradient(circle_at_top_right,#1d1b4b,#0B0E14)] -z-10 transition-colors duration-500" />

      <main className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 lg:gap-24"
        >
          {/* Left Column: Intake Form */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <Link 
                href="/" 
                className="inline-flex items-center space-x-2 text-slate-500 hover:text-slate-900 dark:text-slate-gray/70 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3 transition-colors">
                <Activity className="w-8 h-8 text-amber-600 dark:text-amber" />
                {t("contact.header.headline")}
              </h1>
              
              <p className="text-lg text-slate-700 dark:text-slate-gray/90 leading-relaxed border-l-2 border-emerald-500/30 pl-4 py-1 transition-colors">
                {t("contact.header.subHeadline")}
              </p>
            </motion.div>

            <motion.form 
              variants={itemVariants} 
              onSubmit={handleSubmit}
              className="space-y-8 bg-white shadow-sm border border-slate-200 dark:shadow-none dark:bg-white/[0.01] dark:border-white/5 p-8 rounded-2xl relative overflow-hidden transition-colors"
            >
              {/* Form scanning line effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-[scan_3s_ease-in-out_infinite]" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-slate-400 dark:text-white/50 uppercase tracking-widest block transition-colors">
                    // {t("contact.form.name")}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500/50 focus:bg-white dark:bg-white/[0.02] dark:border-white/10 dark:text-white dark:focus:bg-white/[0.04] transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-mono text-slate-400 dark:text-white/50 uppercase tracking-widest block transition-colors">
                    // {t("contact.form.company")}
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500/50 focus:bg-white dark:bg-white/[0.02] dark:border-white/10 dark:text-white dark:focus:bg-white/[0.04] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono text-slate-400 dark:text-white/50 uppercase tracking-widest block transition-colors">
                  // {t("contact.form.email")}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500/50 focus:bg-white dark:bg-white/[0.02] dark:border-white/10 dark:text-white dark:focus:bg-white/[0.04] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="engagementType" className="text-xs font-mono text-slate-400 dark:text-white/50 uppercase tracking-widest block transition-colors">
                    // {t("contact.form.engagementType.label")}
                  </label>
                  <select 
                    id="engagementType" 
                    name="engagementType" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 appearance-none focus:outline-none focus:border-emerald-500/50 focus:bg-white dark:bg-white/[0.02] dark:border-white/10 dark:text-white dark:focus:bg-white/[0.04] transition-colors cursor-pointer"
                  >
                    <option value="" disabled selected className="bg-white dark:bg-[#0B0E14] text-slate-400">Select type...</option>
                    <option value="consulting" className="bg-white dark:bg-[#0B0E14] text-slate-900 dark:text-white">{t("contact.form.engagementType.options.consulting")}</option>
                    <option value="aiIntegration" className="bg-white dark:bg-[#0B0E14] text-slate-900 dark:text-white">{t("contact.form.engagementType.options.aiIntegration")}</option>
                    <option value="devops" className="bg-white dark:bg-[#0B0E14] text-slate-900 dark:text-white">{t("contact.form.engagementType.options.devops")}</option>
                    <option value="academic" className="bg-white dark:bg-[#0B0E14] text-slate-900 dark:text-white">{t("contact.form.engagementType.options.academic")}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-xs font-mono text-slate-400 dark:text-white/50 uppercase tracking-widest block transition-colors">
                    // {t("contact.form.budget.label")}
                  </label>
                  <select 
                    id="budget" 
                    name="budget" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 appearance-none focus:outline-none focus:border-emerald-500/50 focus:bg-white dark:bg-white/[0.02] dark:border-white/10 dark:text-white dark:focus:bg-white/[0.04] transition-colors cursor-pointer"
                  >
                    <option value="" disabled selected className="bg-white dark:bg-[#0B0E14] text-slate-400">Select range...</option>
                    <option value="research" className="bg-white dark:bg-[#0B0E14] text-slate-900 dark:text-white">{t("contact.form.budget.options.research")}</option>
                    <option value="discovery" className="bg-white dark:bg-[#0B0E14] text-slate-900 dark:text-white">{t("contact.form.budget.options.discovery")}</option>
                    <option value="deployment" className="bg-white dark:bg-[#0B0E14] text-slate-900 dark:text-white">{t("contact.form.budget.options.deployment")}</option>
                    <option value="enterprise" className="bg-white dark:bg-[#0B0E14] text-slate-900 dark:text-white">{t("contact.form.budget.options.enterprise")}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-slate-400 dark:text-white/50 uppercase tracking-widest block transition-colors">
                  // {t("contact.form.message")}
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={5}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500/50 focus:bg-white dark:bg-white/[0.02] dark:border-white/10 dark:text-white dark:focus:bg-white/[0.04] transition-colors resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-slate-200 dark:border-white/5 mt-4 gap-4 transition-colors">
                <span className="text-xs font-mono text-slate-500 dark:text-white/30 flex items-center gap-2 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-emerald-500/70 dark:text-emerald-400/50" />
                  E2E Encrypted Payload
                </span>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center space-x-2 bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 dark:hover:bg-emerald-500/20 px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="font-mono text-sm uppercase tracking-wider">{isSubmitting ? "Transmitting..." : t("contact.form.submit")}</span>
                  <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.form>
          </div>

          {/* Right Column: Operations & Logistics */}
          <motion.div variants={itemVariants} className="space-y-8 lg:pt-32">
            <h2 className="text-sm font-mono tracking-widest text-slate-400 dark:text-white/50 uppercase border-b border-slate-200 dark:border-white/10 pb-4 transition-colors">
              // {t("contact.operations.title")}
            </h2>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white shadow-sm border border-slate-200 rounded-lg dark:shadow-none dark:bg-white/5 dark:border-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse m-1" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-emerald-600 dark:text-emerald-400/80 mb-1 uppercase transition-colors">Status</span>
                  <span className="text-slate-800 dark:text-white/90 text-sm transition-colors">{t("contact.operations.status")}</span>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white shadow-sm border border-slate-200 rounded-lg dark:shadow-none dark:bg-white/5 dark:border-white/10 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-blue-600 dark:text-blue-400/80 mb-1 uppercase transition-colors">Base of Operations</span>
                  <span className="text-slate-800 dark:text-white/90 text-sm transition-colors">{t("contact.operations.base")}</span>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white shadow-sm border border-slate-200 rounded-lg dark:shadow-none dark:bg-white/5 dark:border-white/10 transition-colors">
                  <Clock className="w-4 h-4 text-amber-600 dark:text-amber" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-amber-600 dark:text-amber/80 mb-1 uppercase transition-colors">Timezone</span>
                  <span className="text-slate-800 dark:text-white/90 text-sm transition-colors">{t("contact.operations.timezone")}</span>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white shadow-sm border border-slate-200 rounded-lg dark:shadow-none dark:bg-white/5 dark:border-white/10 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-purple-600 dark:text-purple-400/80 mb-1 uppercase transition-colors">SLA</span>
                  <span className="text-slate-800 dark:text-white/90 text-sm transition-colors">{t("contact.operations.sla")}</span>
                </div>
              </li>
            </ul>

            <div className="pt-8 border-t border-slate-200 dark:border-white/10 space-y-4 transition-colors">
              <span className="block text-xs font-mono text-slate-400 dark:text-white/50 uppercase tracking-widest transition-colors">
                // {t("contact.operations.endpoints")}
              </span>
              <div className="flex gap-4">
                <a href="https://github.com/Jauysh" target="_blank" rel="noopener noreferrer" className="p-3 bg-white shadow-sm border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg dark:shadow-none dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-slate-gray dark:hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.05 5.05 0 0 0 19 5.32a5.05 5.05 0 0 0-.5-4.3s-1.5-.5-5 1.8A17.1 17.1 0 0 0 12 2a17.1 17.1 0 0 0-3 1.02c-3.5-2.3-5-1.8-5-1.8a5.05 5.05 0 0 0-.5 4.3 5.05 5.05 0 0 0 1.5 3.5c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 8 18v4"/><path d="M4 19.5A2.5 2.5 0 0 1 2 17"/></svg>
                </a>
                <a href="https://linkedin.com/in/azamat-jauysh" target="_blank" rel="noopener noreferrer" className="p-3 bg-white shadow-sm border border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg dark:shadow-none dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-slate-gray dark:hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <footer className="border-t border-slate-200 dark:border-white/10 mt-16 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-gray/60 transition-colors">
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
