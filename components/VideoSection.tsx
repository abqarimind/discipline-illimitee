'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Section Vidéo */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-black mb-4">
              DÉCOUVRE LA MÉTHODE EN VIDÉO
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pierre te dévoile les secrets de la discipline et de l'excellence académique
            </p>
          </div>

          {/* Miniature vidéo avec effet noir et blanc */}
          <div className="relative max-w-4xl mx-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl cursor-pointer"
            >
              {/* Image avec effet grayscale → color au survol */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/video-thumbnail.jpg"
                  alt="Pierre Amougou - Vidéo de présentation"
                  fill
                  className="object-cover transition-all duration-500 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                  priority
                />

                {/* Overlay sombre */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />

                {/* Bouton Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-black ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            {/* Badge "NOUVEAU" (optionnel) */}
            <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 font-bebas text-lg">
              NOUVEAU
            </div>
          </div>
        </div>
      </section>

      {/* Modal Vidéo */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Vidéo YouTube - Remplacer VIDEO_ID par l'ID de votre vidéo */}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
              title="Vidéo de présentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
