'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import TruthSection from '@/components/TruthSection';
import SolutionSection from '@/components/SolutionSection';
import TransformationSection from '@/components/TransformationSection';
import AuthoritySection from '@/components/AuthoritySection';
import VideoSection from '@/components/VideoSection';
import MediaSection from '@/components/MediaSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import ChatModal from '@/components/ChatModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <main>
      <HeroSection onOpenModal={openModal} />
      <ProblemSection />
      <TruthSection />
      <SolutionSection />
      <TransformationSection />
      <AuthoritySection />
      <VideoSection />
      <MediaSection />
      <FAQSection />
      <FinalCTASection onOpenModal={openModal} />
      <Footer />
      <ChatModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
