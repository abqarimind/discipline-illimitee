'use client';

import { useState } from 'react';

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
        "La méthode est basée sur des principes de neurosciences validés. J'ai utilisé cette méthode pour passer du 93 à Princeton. J'ai formé plus de 2000 élèves. La seule variable inconnue, c'est toi. Si tu appliques, ça marche.",
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
        <div className="text-center mb-16">
          <h2 className="font-bebas text-[clamp(40px,6vw,64px)]">
            QUESTIONS FRÉQUENTES
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center py-6 text-left text-lg font-medium hover:text-gray-600 transition-colors"
              >
                <span>{faq.question}</span>
                <span
                  className={`text-2xl transition-transform ${
                    activeIndex === idx ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === idx ? 'max-h-[300px]' : 'max-h-0'
                }`}
              >
                <p className="pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
