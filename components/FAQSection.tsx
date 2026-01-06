'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "C'est quoi Discipline Illimitée exactement ?",
      answer:
        "Ce n'est pas une formation motivante. C'est un cadre structuré basé sur les sciences cognitives pour reprendre le contrôle de ton temps, de ton énergie et de ta trajectoire. Tu apprends à reprogrammer ton cerveau pour que la discipline devienne ton état par défaut.",
    },
    {
      question: 'Est-ce que ça fonctionne vraiment ?',
      answer:
        "La méthode est basée sur des principes de neurosciences validés. J'ai utilisé cette méthode pour passer du 95 à Princeton. J'ai formé plus de 2000 élèves. La seule variable inconnue, c'est toi. Si tu appliques, ça marche.",
    },
    {
      question: "J'ai déjà essayé plein de méthodes...",
      answer:
        "La plupart des méthodes se focalisent sur la motivation. Le problème : la motivation est une ressource épuisable. Ici, on installe un système qui ne dépend pas de ton humeur. On travaille sur ton environnement et tes automatismes, pas sur ta volonté.",
    },
    {
      question: 'Combien de temps pour voir des résultats ?',
      answer:
        "Les premiers changements sont visibles en quelques jours. Tu ressens une clarté mentale et une capacité d'action que tu n'avais pas avant. Les résultats concrets (notes, projets, physique) suivent dans les semaines qui viennent.",
    },
    {
      question: "C'est adapté à mon profil ?",
      answer:
        "C'est précisément pour ça qu'on commence par un diagnostic. Réponds à quelques questions, et tu recevras l'outil le plus adapté à ton niveau, à tes besoins et à tes moyens. Pas de solution générique.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-32">
      <div className="container max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bebas text-[clamp(40px,6vw,64px)]">
            QUESTIONS FRÉQUENTES
          </h2>
        </motion.div>

        <div className="max-w-[800px] mx-auto">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className={`border-b border-gray-200 transition-colors ${
                activeIndex === idx ? 'bg-gray-50/50 border-l-2 border-l-black pl-4 -ml-4' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <motion.button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center py-6 text-left text-lg font-medium hover:text-gray-600 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span>{faq.question}</span>
                <motion.span
                  className="text-2xl"
                  animate={{
                    rotate: activeIndex === idx ? 45 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  +
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -10 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      className="pb-6 text-gray-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
