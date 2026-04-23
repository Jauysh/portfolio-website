'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Layers, Database, Cloud } from 'lucide-react';

const technologies = [
  {
    category: 'AI & Logic',
    icon: BrainCircuit,
    items: ['CrewAI', 'LangGraph', 'LLMs'],
  },
  {
    category: 'Infrastructure',
    icon: Layers,
    items: ['Docker', 'Kubernetes', 'Portainer', 'Linux'],
  },
  {
    category: 'Backend & Data',
    icon: Database,
    items: ['Python', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Cloud & Hosting',
    icon: Cloud,
    items: ['Hetzner', 'RunPod'],
  }
];

export default function TechStack() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Технологиялық Стек</h2>
        <div className="w-20 h-1 bg-amber rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber/30 transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <tech.icon className="w-8 h-8 text-amber" />
              <h3 className="text-lg font-bold text-white font-sans">{tech.category}</h3>
            </div>
            
            <div className="space-y-3">
              {tech.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="flex items-center space-x-2 text-slate-gray group-hover:text-slate-300 transition-colors"
                >
                  <div className="w-1 h-1 bg-amber/50 flex-shrink-0"></div>
                  <span className="font-mono text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
