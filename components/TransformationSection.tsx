'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TransformationSection() {
  const forWho = [
    {
      text: 'tu sais quoi faire, mais tu repousses',
      icon: '/images/illustrations/procrastination.png',
    },
    {
      text: 'tu démarres fort puis tu t\'éparpilles',
      icon: '/images/illustrations/scattered.png',
    },
    {
      text: 'tu veux une discipline durable, pas des coups de motivation',
      icon: '/images/illustrations/durable.png',
    },
    {
      text: 'tu veux arrêter de lutter contre toi-même',
      icon: '/images/illustrations/internal-conflict.png',
    },
  ];

  const after = [
    {
      text: 'Tu sais exactement quoi faire chaque jour',
      icon: '/images/illustrations/clarity.png',
    },
    {
      text: 'Tu avances même quand tu n\'as pas envie',
      icon: '/images/illustrations/progress.png',
    },
    {
      text: 'Tu construis une discipline solide et durable',
      icon: '/images/illustrations/foundation.png',
    },
    {
      text: 'Tu reprends le contrôle de ton temps et de ton énergie',
      icon: '/images/illustrations/control.png',
    },
  ];

  return (
    <section className="py-32">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* À qui s'adresse - Fond noir */}
        <div className="mb-32">
          <motion.h2
            className="font-bebas text-[clamp(40px,6vw,72px)] mb-12 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            À QUI S'ADRESSE CETTE FORMATION
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 mb-16 text-center max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Cette formation est faite pour toi si :
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
            {forWho.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Illustration */}
                <motion.div
                  className="w-32 h-32 mb-6 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                </motion.div>

                {/* Texte */}
                <p className="text-lg text-gray-300 font-medium leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Après Discipline Illimitée - Fond blanc */}
        <motion.div
          className="bg-white text-black p-12 md:p-20 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="font-bebas text-[clamp(40px,6vw,72px)] mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            APRÈS DISCIPLINE ILLIMITÉE™
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-[1000px] mx-auto mt-16">
            {after.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              >
                {/* Illustration */}
                <motion.div
                  className="w-32 h-32 mb-6 relative"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                </motion.div>

                {/* Texte */}
                <p className="text-lg text-black font-semibold leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
