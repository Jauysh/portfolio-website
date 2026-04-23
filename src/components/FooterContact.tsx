'use client';

import { motion } from 'framer-motion';

import { Send } from 'lucide-react';
import { useState } from 'react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 3.8 5 4.2 5 4.2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 11.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    <path d="M9 20a5 5 0 0 1-4-1" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function FooterContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call or webhook payload
    console.log('[Webhook Payload]', formData);

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <footer id="contact" className="border-t border-white/10 bg-obsidian relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-amber/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto py-24 px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Бірге жасаймыз</h2>
            <p className="text-slate-gray mb-12 max-w-md text-lg">
              Инфрақұрылымдық автоматтандыру, көп агентті жүйелерді жобалау немесе зерттеу жөніндегі серіктестіктер үшін хабарласыңыз.
            </p>

            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-amber hover:text-obsidian hover:border-amber transition-all duration-300 text-white">
                <GithubIcon size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-amber hover:text-obsidian hover:border-amber transition-all duration-300 text-white">
                <LinkedinIcon size={24} />
              </a>
            </div>

            <div className="mt-16 text-sm text-slate-gray/60 font-mono">
              &copy; {new Date().getFullYear()} Азамат Жауыш. Барлық құқықтар қорғалған.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-slate-gray mb-2">Аты</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/50 transition-colors font-sans"
                  placeholder="Сіздің атыңыз"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-slate-gray mb-2">Электрондық пошта</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/50 transition-colors font-sans"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-slate-gray mb-2">Хабарлама</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber/50 focus:ring-1 focus:ring-amber/50 transition-colors font-sans resize-none"
                  placeholder="Жобаңыз туралы қысқаша мәлімет..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-amber text-obsidian font-bold py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-orange-400 transition-colors disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <span>Жіберілуде...</span>
                ) : status === 'success' ? (
                  <span>Сәтті жіберілді!</span>
                ) : (
                  <>
                    <span>Жіберу</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
