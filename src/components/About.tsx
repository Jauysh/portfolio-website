'use client';

import { motion } from 'framer-motion';

const languages = ['Ағылшын', 'Орыс', 'Қазақ', 'Түрік', 'Араб'];

export default function About() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Мен туралы</h2>
        <div className="w-20 h-1 bg-amber rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8"
        >
          <div className="prose prose-invert max-w-none prose-p:text-slate-gray prose-p:leading-relaxed prose-p:text-lg">
            <p>
              Мен күрделі техникалық мәселелерді оңтайландырылған, өзін-өзі қамтамасыз ететін жүйелерге айналдырамын. Менің тәжірибем толық стекке (full-stack) негізделген — жергілікті аппараттық құралдардың механикалық шектеулерін баптаудан бастап, бұлтта бөлінген, GPU талап ететін AI жүктемелерін орналастыруға дейін.
            </p>
            <p className="mt-4">
              Қазіргі уақытта деректерді жай ғана өңдеп қоймай, автономды, контекстке мән беретін шешімдер қабылдайтын жүйелерді құра отырып, Agentic AI инженериясы бойынша өндіріске бағытталған PhD докторантурасына түсуді жоспарлап отырмын.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
            <h3 className="text-white font-bold mb-6 font-sans">Жұмыс тілдері</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-obsidian text-slate-100 rounded-full text-sm font-medium border border-white/10"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
