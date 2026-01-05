'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

interface StickyCTAProps {
  onOpenModal: () => void;
}

export default function StickyCTA({ onOpenModal }: StickyCTAProps) {
  const { scrollY } = useScroll();

  // Afficher le CTA sticky après 800px de scroll
  const opacity = useTransform(scrollY, [800, 1000], [0, 1]);
  const y = useTransform(scrollY, [800, 1000], [100, 0]);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none"
      style={{ opacity, y }}
    >
      <div className="bg-black/95 backdrop-blur-md border-t border-gray-800 py-4 px-6 pointer-events-auto">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="font-semibold text-white text-sm">
              Prêt à reprendre le contrôle ?
            </p>
            <p className="text-gray-400 text-xs">
              Accède au diagnostic gratuit maintenant
            </p>
          </div>
          <motion.button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold text-sm uppercase tracking-[0.1em] flex-shrink-0"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 20px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Diagnostic gratuit
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
