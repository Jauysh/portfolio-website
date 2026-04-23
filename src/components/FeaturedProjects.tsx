'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Клиникалық AI басқару жүйесі',
    concept: 'Денсаулық сақтау операцияларына арналған көп агентті автономды фреймворк.',
    stack: ['CrewAI', 'LangGraph', 'Python'],
    architecture: 'Мекемені басқаруды оңтайландыруға арналған көп агентті жүйе әзірленді. Бұл архитектура күрделі операциялық логиканы өңдеу үшін әртүрлі AI агенттерін пайдаланады, кесте құруды, емделушілер деректерін бағыттауды және ішкі байланыс процестерін адамның тұрақты қатысуынсыз автоматтандырады.',
  },
  {
    title: 'Tanymedu.kz білім беру инфрақұрылымы',
    concept: 'Оқу орталығына арналған сабаққа қатысуды және бағалауды орталықтандырылған басқару (backend).',
    stack: ['n8n', 'PostgreSQL', 'Webhooks'],
    architecture: 'Орта мектеп оқушыларына бағытталған оқу орталығының операциялық бэкенді жасалды. Оқушылардың сабаққа қатысуын қадағалайтын, бағалау деректерін өңдейтін және нәтижелерді тарататын автоматтандырылған жұмыс процестері әзірленіп, енгізілді. Бұл әкімшілік жүктемені азайтып, қызметкерлер мен ата-аналар үшін деректердің нақты уақыттағы дәлдігін қамтамасыз етеді.',
  },
  {
    title: 'Орта мектептің ішкі автоматтандыру жүйесі',
    concept: 'Орта білім берудегі әкімшілік және сыныптан тыс жұмыс процестерін автоматтандыру.',
    stack: ['n8n', 'API Integrations', 'Database Management'],
    architecture: 'Мектептің ішкі әкімшілігін, соның ішінде оқушылар деректерін жинауды және үйірмелерге қабылдау процестерін оңтайландыру үшін жеке серверде (self-hosted) автоматтандыру инфрақұрылымы әзірленді. Жүйе маңызды ақпаратты автоматты түрде бағыттап, мұғалімдер мен әкімшіліктің деректерді қолмен енгізу жұмысын айтарлықтай азайтты.',
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Таңдаулы Жобалар</h2>
          <div className="w-20 h-1 bg-amber rounded-full"></div>
        </div>
        <p className="text-slate-gray max-w-md">Өндіріске енгізілген автоматтандыру және AI шешімдерінің кейстері.</p>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white/5 rounded-2xl border border-white/10 p-6 md:p-10 hover:border-amber/50 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none text-9xl font-bold font-mono text-white/50 -mt-10 -mr-4 select-none">
              0{index + 1}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-amber/90 font-medium text-sm mb-6">{project.concept}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-3 py-1 bg-obsidian border border-white/10 rounded font-mono text-xs text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col justify-center">
                <div className="bg-obsidian/50 rounded-xl p-6 border border-white/5">
                  <h4 className="text-sm font-mono text-slate-gray mb-3 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-slate-gray mr-2"></span>
                    Архитектура
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
