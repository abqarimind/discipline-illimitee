interface FinalCTASectionProps {
  onOpenModal: () => void;
}

export default function FinalCTASection({ onOpenModal }: FinalCTASectionProps) {
  return (
    <section className="text-center py-40 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gray-600"></div>

      <h2 className="font-bebas text-[clamp(40px,8vw,100px)] mb-8">
        DISCIPLINE ILLIMITÉE™
      </h2>
      <p className="text-2xl text-white max-w-[800px] mx-auto mb-6">
        Une méthode claire pour arrêter de te battre contre toi-même,
      </p>
      <p className="text-2xl text-gray-300 max-w-[800px] mx-auto mb-6">
        installer une discipline durable
      </p>
      <p className="text-2xl text-gray-400 max-w-[800px] mx-auto mb-16">
        et avancer avec constance, sans dépendre de la motivation.
      </p>
      <button
        onClick={onOpenModal}
        className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-semibold text-base uppercase tracking-[0.1em] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all group"
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
