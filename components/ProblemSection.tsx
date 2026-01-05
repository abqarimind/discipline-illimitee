'use client';

import { motion } from 'framer-motion';

export default function ProblemSection() {
  const painPoints = [
    'Tu procrastines malgré des objectifs clairs',
    'Tu travailles dur, mais les résultats ne suivent pas',
    'Tu attends la motivation pour passer à l\'action',
    'Tu n\'as aucune structure claire pour avancer',
  ];

  return (
    <section className="bg-white text-black py-32">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2
              className="font-bebas text-[clamp(40px,6vw,72px)] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              TU TE RECONNAIS ?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Tu prends des résolutions. Tu te dis{' '}
              <strong className="text-black">
                &quot;cette fois, c&apos;est la bonne&quot;
              </strong>
              . Et quelques jours plus tard… tu reviens exactement au même point.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tu sais quoi faire. Mais tu ne le fais pas.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Le soir, tu culpabilises. Tu as l&apos;impression de gâcher ton
              potentiel. Et quand tu vois les autres avancer, tu te demandes :{' '}
              <strong className="text-black">
                &quot;Pourquoi eux… et pas moi ?&quot;
              </strong>
            </motion.p>

            <ul className="mt-10 space-y-0">
              {painPoints.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-4 py-5 border-b border-gray-200 text-[17px] last:border-b-0 transition-colors hover:bg-gray-50/50 px-4 -mx-4 rounded"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                >
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center font-semibold">
                    →
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute top-6 left-6 right-[-24px] bottom-[-24px] border border-gray-200 z-0"></div>
            <div className="relative z-10 p-10 bg-gray-100">
              <motion.div
                className="absolute top-[-40px] left-0 font-bebas text-[200px] text-gray-200 leading-none z-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                &quot;
              </motion.div>
              <motion.p
                className="relative z-10 text-2xl font-medium leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Le pire ? Ce n&apos;est pas de ne pas avancer. C&apos;est de savoir que tu pourrais faire beaucoup plus et de ne jamais t&apos;y tenir.
              </motion.p>
              <motion.cite
                className="not-italic text-sm text-gray-600 uppercase tracking-[0.1em]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                — Le vrai problème
              </motion.cite>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
