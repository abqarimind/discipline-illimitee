'use client';

import { motion } from 'framer-motion';

export default function SolutionSection() {
  const pillars = [
    {
      number: '01',
      title: 'REPROGRAMMATION',
      subtitle: 'Éliminer la procrastination à la source.',
      description:
        'Tu apprends à reprogrammer tes automatismes mentaux pour agir sans lutte interne. On travaille avec ton cerveau — pas contre lui.',
      result: 'Résultat : tu passes à l\'action sans te forcer.',
    },
    {
      number: '02',
      title: 'STRUCTURE',
      subtitle: 'Créer un système qui te fait avancer par défaut.',
      description:
        'Tu mets en place une structure claire qui transforme la discipline en automatisme, même les jours de fatigue ou de doute.',
      result: 'Résultat : tu avances avec stabilité, sans dépendre de la motivation.',
    },
    {
      number: '03',
      title: 'EXÉCUTION',
      subtitle: 'Passer à l\'action avec précision.',
      description:
        'Tu apprends à prioriser, à exécuter moins mais mieux, et à transformer chaque action en investissement rentable.',
      result: 'Résultat : chaque effort compte. Rien n\'est gaspillé.',
    },
  ];

  return (
    <section className="bg-white text-black py-32">
      <div className="container max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bebas text-[clamp(40px,6vw,80px)] mb-6">
            CE QUE TU VAS METTRE EN PLACE
          </h2>
        </motion.div>

        <div className="space-y-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              className="border-t border-gray-200 pt-12 transition-all hover:-translate-y-1 hover:bg-gray-50/30 px-6 -mx-6 rounded-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">
                <motion.div
                  className="font-bebas text-[80px] text-gray-200 leading-none"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.15 + 0.2 }}
                >
                  {pillar.number}
                </motion.div>
                <div>
                  <motion.h3
                    className="font-bebas text-[32px] mb-2 relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 + 0.3 }}
                  >
                    {pillar.title}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-black"
                      initial={{ width: 0 }}
                      whileInView={{ width: "60px" }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: idx * 0.15 + 0.5 }}
                    />
                  </motion.h3>
                  <motion.p
                    className="text-xl font-semibold text-gray-800 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 + 0.4 }}
                  >
                    {pillar.subtitle}
                  </motion.p>
                  <motion.p
                    className="text-base text-gray-600 leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 + 0.5 }}
                  >
                    {pillar.description}
                  </motion.p>
                  <motion.p
                    className="text-base font-semibold text-black"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 + 0.6 }}
                  >
                    {pillar.result}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
