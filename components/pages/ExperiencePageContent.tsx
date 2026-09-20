'use client';

import * as React from 'react';
import { ExperienceHero } from '@/components/pages/experience/ExperienceHero';
import { EcosystemStrip } from '@/components/pages/experience/EcosystemStrip';
import { LearnSection } from '@/components/pages/experience/LearnSection';
import { BuildSection } from '@/components/pages/experience/BuildSection';
import { ConnectSection } from '@/components/pages/experience/ConnectSection';
import { ExperienceSectionDivider } from '@/components/pages/experience/ExperienceSectionDivider';
import { Footer } from '@/components/shared/Footer';

export default function ExperiencePageContent() {
  return (
    <main className="relative w-full flex flex-col min-h-screen bg-[#F5F3F0] dark:bg-[#16171B] transition-colors duration-300">
      {/* Primary Hero Section of Experience Page */}
      <ExperienceHero />

      {/* Ecosystem & Partner Strip */}
      <EcosystemStrip />

      {/* 01 — LEARN Section (Scroll-Locked Chapter) */}
      <LearnSection />

      {/* Chapter Gap & Transition: 01 LEARN -> 02 BUILD (Light Ivory Canvas with Human Editorial Typography) */}
      <ExperienceSectionDivider
        id="gap-learn-to-build"
        fromTrackNumber="01"
        fromTrackTitle="LEARN"
        toTrackNumber="02"
        toTrackTitle="BUILD"
        headline="From Quantum Theory to Active System Engineering"
        subtitle="Translate fundamental mathematical principles into working quantum circuits, hybrid algorithms, and physical hardware demonstrations."
      />

      {/* 02 — BUILD Section (Scroll-Locked Chapter: Card Sheet sliding over the middle divider) */}
      <BuildSection />

      {/* Chapter Gap & Transition: 02 BUILD -> 03 CONNECT (Light Ivory Canvas with Human Editorial Typography) */}
      <ExperienceSectionDivider
        id="gap-build-to-connect"
        fromTrackNumber="02"
        fromTrackTitle="BUILD"
        toTrackNumber="03"
        toTrackTitle="CONNECT"
        headline="From Individual Engineering to Global Scientific Dialogue"
        subtitle="Connect with academic researchers, global quantum leaders, and student innovators shaping the future of computation."
      />

      {/* 03 — CONNECT Section (Scroll-Locked Chapter: Card Sheet sliding over the middle divider) */}
      <ConnectSection />

      {/* Clean boundary reserved for future Ready to Take Part / Extended content */}
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
