'use client';

import NodeAnimation from './NodeAnimation';
import TerminalEasterEgg from './TerminalEasterEgg';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 pt-20 pb-12">
      <NodeAnimation />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-start w-full">
        <div className="mb-4 inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-amber">
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
          <span>Жүйе онлайн</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          Интеллектуалды автоматтандыру және<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-orange-400">
            көп агентті жүйелер архитектурасы
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-gray max-w-2xl mb-10 leading-relaxed">
          Бизнес пен мекемелер үшін тұрақты жұмыс процестерін құру мақсатында DevOps, Agentic AI және масштабталатын инфрақұрылымды біріктіру.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-white text-obsidian font-medium rounded-md hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
          >
            Жобаларды көру
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-md hover:bg-white/5 transition-colors"
          >
            Байланысу
          </button>
        </div>
        
        <TerminalEasterEgg />
      </div>
    </section>
  );
}
