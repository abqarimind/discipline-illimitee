'use client';

import { useState } from 'react';

interface HeroSectionProps {
  onOpenModal: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const playVideo = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gray-600"></div>

      <h1 className="font-bebas text-[clamp(48px,10vw,120px)] mb-8 opacity-0 animate-[fadeInUp_0.8s_ease_forwards_0.2s]">
        DISCIPLINE ILLIMITÉE™
      </h1>

      <p className="text-2xl md:text-3xl font-semibold text-white max-w-[700px] mb-6 opacity-0 animate-[fadeInUp_0.8s_ease_forwards_0.4s]">
        Arrête de dépendre de la motivation.
      </p>

      <p className="text-xl md:text-2xl text-gray-300 max-w-[800px] mb-8 opacity-0 animate-[fadeInUp_0.8s_ease_forwards_0.6s]">
        Construis un système qui te fait avancer, même quand tu as la flemme.
      </p>

      <p className="text-base md:text-lg text-gray-400 max-w-[700px] mb-16 opacity-0 animate-[fadeInUp_0.8s_ease_forwards_0.8s]">
        Un système de discipline structuré pour reprendre le contrôle de ton temps et de ton énergie en accord avec le fonctionnement de ton cerveau 🧠
      </p>

      {/* Video */}
      <div className="w-full max-w-[800px] mx-auto mb-12 opacity-0 animate-[fadeInUp_0.8s_ease_forwards_0.8s]">
        <div className="relative pb-[56.25%] bg-gray-800 border border-gray-600">
          {!videoLoaded ? (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors"
              onClick={playVideo}
            >
              <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mb-4 hover:scale-110 hover:bg-white transition-all group">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-white ml-1 group-hover:fill-black transition-colors"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
              <span className="text-sm tracking-[0.1em] uppercase text-gray-400">
                Regarder la vidéo
              </span>
            </div>
          ) : (
            <iframe
              src="YOUR_VIDEO_URL"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>

      <button
        onClick={onOpenModal}
        className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-semibold text-base uppercase tracking-[0.1em] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all opacity-0 animate-[fadeInUp_0.8s_ease_forwards_1s] group"
      >
        Accéder au diagnostic gratuit
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
