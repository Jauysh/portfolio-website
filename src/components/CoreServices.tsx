'use client';

import { motion } from 'framer-motion';
import { Network, GitMerge, Server } from 'lucide-react';

const services = [
  {
    title: 'Agentic AI инженериясы',
    description: 'Күрделі, шешім қабылдауды талап ететін операциялық логиканы автоматтандыру үшін CrewAI және LangGraph көмегімен көп агентті фреймворктерді жобалау.',
    icon: Network,
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Корпоративті автоматтандыру',
    description: 'API, деректер қорлары мен байланыс арналарын біріктіретін, жоғары өткізу қабілеті бар, кезекке негізделген автоматтандыру жүйелерін құру.',
    icon: GitMerge,
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'DevOps және жеке хостинг',
    description: 'Шеткі (edge) құрылғылардан бастап бұлтты GPU кластерлеріне дейінгі қауіпсіз, масштабталатын контейнерленген орталарды орналастыру және басқару.',
    icon: Server,
    className: 'md:col-span-1 md:row-span-1',
  }
];

export default function CoreServices() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Негізгі Қызметтер</h2>
        <div className="w-20 h-1 bg-amber rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className={`
              relative group overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 
              hover:border-amber/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300
              flex flex-col
              ${service.className}
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="bg-obsidian w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 mb-6 group-hover:border-amber/30 transition-colors">
              <service.icon className="w-6 h-6 text-amber" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 font-sans">{service.title}</h3>
            <p className="text-slate-gray leading-relaxed font-sans">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
