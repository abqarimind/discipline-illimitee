'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function MediaSection() {
  const [showAll, setShowAll] = useState(false);

  const mediaItems = [
    {
      title: 'Sud Radio',
      image: '/images/media/sud-radio.png',
      url: 'https://www.dailymotion.com/video/x9s34lu',
      type: 'Interview',
    },
    {
      title: 'Le Guide de l\'Étudiant Ambitieux',
      image: '/images/media/livre.jpg',
      url: 'https://www.amazon.com/Guide-l%C3%89tudiant-Ambitieux-LExcellence-port%C3%A9e/dp/B0DM6HXL7T',
      type: 'Livre',
    },
    {
      title: 'Sqool TV - Parcoursup',
      image: '/images/media/sqool-tv.jpg',
      url: 'https://youtu.be/eIVxKnymHlE?si=05vYh6jLxpTxNP40',
      type: 'Vidéo',
    },
    {
      title: 'Le Figaro Étudiant',
      image: '/images/media/figaro.webp',
      url: 'https://etudiant.lefigaro.fr/vos-etudes/magazine/44632-pierre-ens/',
      type: 'Article',
    },
    {
      title: 'Le Parisien Étudiant',
      image: '/images/media/le-parisien.jpg',
      url: 'https://www.leparisien.fr/etudiant/orientation/ma-mere-ma-explique-une-chose-tres-simple-cest-par-lecole-que-jallais-pouvoir-changer-ma-condition-sociale-XIKZEBSJ3JDVNBLQPW4QG7L6WE.php',
      type: 'Article',
    },
    {
      title: 'Fondation Vocation',
      image: '/images/media/fondation-vocation.jpg',
      url: 'https://youtu.be/G2CUsqsHFA8?si=OU1PbxLOeFEcZZjI',
      type: 'Vidéo',
    },
    {
      title: 'France 3',
      image: '/images/media/france-3.jpg',
      url: 'https://www.linkedin.com/posts/pierre-filidabo-amougou_reportage-sur-france-3-paris-%C3%AEle-de-france-activity-7330858214609084416-69pf',
      type: 'Reportage',
    },
    {
      title: 'Meet My Mentor',
      image: '/images/media/meet-my-mentor.jpg',
      url: 'https://www.meetmymentor.fr/leaders/pierre-amougou',
      type: 'Profil',
    },
    {
      title: 'Ma Bourse',
      image: '/images/media/ma-bourse.jpg',
      url: 'https://mabourse.fr/temoignage-inspirant-dune-ascension-sociale-de-la-banlieue-aux-grandes-ecoles/',
      type: 'Témoignage',
    },
    {
      title: 'Le Parisien - Parcoursup',
      image: '/images/media/le-parisien-2.jpg',
      url: 'https://www.linkedin.com/posts/pierre-filidabo-amougou_parcoursup-m%C3%AAme-si-on-se-trompe-ce-n-activity-7303444283028623360-SKp0',
      type: 'Article',
    },
    {
      title: '20 Minutes TV',
      image: '/images/media/20-min-tv.jpg',
      url: 'https://tv-programme.com/l-invite-20-minutes-tv-emission/pierre-filidabo-amougou-e978080',
      type: 'Interview TV',
    },
    {
      title: 'Europe 1',
      image: '/images/media/europe-1.jpg',
      url: 'https://www.europe1.fr/emissions/La-libre-antenne/brillant-etudiant-issu-des-quartiers-pierre-encourage-les-jeunes-a-rever-plus-grand-747279',
      type: 'Radio',
    },
    {
      title: 'Closer Magazine',
      image: '/images/media/closer.jpg',
      url: 'https://www.pressreader.com/france/closer-france-2872/20251219/283433492875991',
      type: 'Magazine',
    },
  ];

  const displayedItems = showAll ? mediaItems : mediaItems.slice(0, 5);

  return (
    <section className="py-32 bg-black text-white">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-bebas text-[clamp(40px,6vw,72px)] mb-6">
            APPARITIONS MÉDIAS
          </h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
            Retrouvez Pierre dans les médias nationaux et découvrez son parcours
            inspirant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedItems.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gray-800 border border-gray-700 hover:border-white transition-all hover:-translate-y-1"
            >
              {/* Image placeholder - remplacez par vos vraies images */}
              <div className="relative aspect-video bg-gray-700 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm uppercase tracking-wider">
                  {item.title}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-white/10 text-xs uppercase tracking-wider mb-3">
                  {item.type}
                </span>
                <h3 className="font-bebas text-xl mb-2 group-hover:text-gray-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  Voir le contenu
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </p>
              </div>
            </a>
          ))}
        </div>

        {!showAll && mediaItems.length > 5 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-semibold text-base uppercase tracking-[0.1em] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all group"
            >
              Voir plus
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5 group-hover:translate-y-1 transition-transform"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-3 px-12 py-5 border border-white text-white font-semibold text-base uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-all group"
            >
              Voir moins
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
              >
                <path d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
