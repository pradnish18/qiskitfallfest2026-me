'use client';

import * as React from 'react';
import { ExperienceHero } from '@/components/pages/experience/ExperienceHero';
import { EcosystemStrip } from '@/components/pages/experience/EcosystemStrip';
import { Footer } from '@/components/shared/Footer';

export default function ExperiencePageContent() {
  return (
    <main className="relative w-full flex flex-col min-h-screen bg-[#F5F3F0] dark:bg-[#16171B] transition-colors duration-300">
      {/* Primary Hero Section of Experience Page */}
      <ExperienceHero />

      {/* Ecosystem & Partner Strip */}
      <EcosystemStrip />

      {/* Clean boundary reserved for future Learn, Build, and Connect tracks */}
      <div
        id="experience-future-content"
        className="w-full border-t border-[#6C151E]/10 dark:border-white/10"
        aria-hidden="true"
      />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
