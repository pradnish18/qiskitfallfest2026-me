'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface EcosystemStripProps {
  /**
   * Optional callback for when the CTA is clicked.
   * Reserved for future smooth-scroll navigation to the Learn section.
   */
  onExploreClick?: () => void;
}

export function EcosystemStrip({ onExploreClick }: EcosystemStripProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Current phase: CTA is interactive but not yet linked to Learn section.
    // Clean interaction boundary reserved for future Learn section smooth navigation.
    if (onExploreClick) {
      onExploreClick();
    } else {
      // If Learn section is implemented later with id="section-02-learn",
      // it will smoothly scroll to it if found; otherwise keeps a clean no-op.
      const learnTarget = document.getElementById('section-02-learn');
      if (learnTarget) {
        learnTarget.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="experience-ecosystem-strip"
      aria-label="Quantum Ecosystem Partners and Editorial Mission"
      className="
        relative z-10 w-full overflow-hidden
        bg-gradient-to-r from-[#3A0B10] via-[#4A0E15] to-[#3A0B10]
        border-y border-[#521018] border-opacity-70 dark:border-white/10
        text-[#F5F3F0]
      "
    >
      {/* Subtle atmospheric ambient glow matching Fall Fest editorial aesthetic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(176,141,87,0.06),transparent_80%)]"
      />

      {/* Main Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-3.5 sm:py-4">
        {/* ============================================================ */}
        {/* DESKTOP & WIDE VIEWPORTS (Single Horizontal Row Layout)     */}
        {/* ============================================================ */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex items-center justify-between w-full"
        >
          {/* Left Cluster: Group 1, Group 2, Group 3 */}
          <div className="flex items-center flex-nowrap">
            {/* GROUP 1: POWERED BY + IBM Quantum Branding */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <span
                id="ecosystem-powered-by-label"
                className="text-[10px] xl:text-[11px] font-semibold tracking-[0.22em] text-[#C7C8CC] uppercase select-none font-mono"
              >
                POWERED BY
              </span>
              <div className="relative flex items-center h-7 xl:h-8">
                <Image
                  src="/images/branding/IBM_Quantum_logotype_rev_RGB.png"
                  alt="IBM Quantum"
                  width={196}
                  height={28}
                  className="h-6 xl:h-7 w-auto object-contain select-none"
                  priority
                />
              </div>
            </div>

            {/* Vertical Divider 1 */}
            <div
              aria-hidden="true"
              className="h-7 xl:h-8 w-px bg-[rgba(245,243,240,0.28)] mx-5 xl:mx-7 flex-shrink-0"
            />

            {/* GROUP 2: Qiskit Branding (Emblem + Logotype) */}
            <div className="flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
              <div className="relative h-7 w-7 xl:h-8 xl:w-8 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/branding/qiskit_white.png"
                  alt="Qiskit logo"
                  width={32}
                  height={32}
                  className="h-6 w-6 xl:h-7 xl:w-7 object-contain select-none"
                  priority
                />
              </div>
              <span className="text-[17px] xl:text-[19px] font-medium tracking-tight text-[#F5F3F0] select-none">
                Qiskit
              </span>
            </div>

            {/* Vertical Divider 2 */}
            <div
              aria-hidden="true"
              className="h-7 xl:h-8 w-px bg-[rgba(245,243,240,0.28)] mx-5 xl:mx-7 flex-shrink-0"
            />

            {/* GROUP 3: IBM Quantum Editorial Quote */}
            <div className="flex items-center flex-shrink-0">
              <p className="text-xs xl:text-[13px] text-[#F5F3F0] font-normal leading-[1.3] select-none">
                &ldquo;Open science. Real impact.
                <br />
                A global movement.&rdquo;
              </p>
              <span className="text-[11px] xl:text-xs text-[#C7C8CC] font-light tracking-wide ml-3 xl:ml-4 whitespace-nowrap select-none">
                — IBM Quantum
              </span>
            </div>
          </div>

          {/* Right Cluster: Vertical Divider 3 + GROUP 4: CTA */}
          <div className="flex items-center flex-shrink-0 pl-6">
            <div
              aria-hidden="true"
              className="h-7 xl:h-8 w-px bg-[rgba(245,243,240,0.28)] mr-6 xl:mr-8 flex-shrink-0"
            />

            <button
              id="cta-explore-ecosystem-desktop"
              type="button"
              onClick={handleCtaClick}
              data-future-target="learn-section"
              className="
                group relative inline-flex items-center gap-2.5 sm:gap-3
                px-3 py-1.5 -mx-3 -my-1.5
                text-xs xl:text-sm font-medium text-[#F5F3F0]
                hover:text-white transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]
                focus-visible:ring-offset-2 focus-visible:ring-offset-[#3A0B10]
                rounded cursor-pointer
              "
              aria-label="Explore the Qiskit ecosystem"
            >
              <span className="tracking-wide">Explore the Qiskit ecosystem</span>
              <ArrowRight
                aria-hidden="true"
                className="w-4 h-4 text-[#F5F3F0] group-hover:text-white transition-transform duration-200 ease-out group-hover:translate-x-1.5 flex-shrink-0"
              />
            </button>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* TABLET VIEWPORTS (Compact 2-Cluster Balanced Layout)         */}
        {/* ============================================================ */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex lg:hidden flex-col gap-3 w-full"
        >
          {/* Row 1: Logos and CTA */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              {/* Group 1: Powered by + IBM */}
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#C7C8CC] uppercase font-mono">
                  POWERED BY
                </span>
                <Image
                  src="/images/branding/IBM_Quantum_logotype_rev_RGB.png"
                  alt="IBM Quantum"
                  width={154}
                  height={22}
                  className="h-5 w-auto object-contain"
                />
              </div>

              {/* Divider */}
              <div
                aria-hidden="true"
                className="h-6 w-px bg-[rgba(245,243,240,0.28)]"
              />

              {/* Group 2: Qiskit */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/branding/qiskit_white.png"
                  alt="Qiskit logo"
                  width={24}
                  height={24}
                  className="h-5 w-5 object-contain"
                />
                <span className="text-base font-medium tracking-tight text-[#F5F3F0]">
                  Qiskit
                </span>
              </div>
            </div>

            {/* Group 4: CTA on Tablet */}
            <button
              id="cta-explore-ecosystem-tablet"
              type="button"
              onClick={handleCtaClick}
              data-future-target="learn-section"
              className="
                group inline-flex items-center gap-2
                px-2.5 py-1 text-xs font-medium text-[#F5F3F0]
                hover:text-white transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]
                focus-visible:ring-offset-2 focus-visible:ring-offset-[#3A0B10]
                rounded cursor-pointer
              "
              aria-label="Explore the Qiskit ecosystem"
            >
              <span className="tracking-wide">Explore the Qiskit ecosystem</span>
              <ArrowRight
                aria-hidden="true"
                className="w-3.5 h-3.5 text-[#F5F3F0] group-hover:text-white transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Row 2: Quote */}
          <div className="flex items-center justify-start pt-1 border-t border-[rgba(245,243,240,0.12)]">
            <p className="text-xs text-[#F5F3F0] font-normal leading-snug">
              &ldquo;Open science. Real impact. A global movement.&rdquo;
            </p>
            <span className="text-[11px] text-[#C7C8CC] font-light tracking-wide ml-3">
              — IBM Quantum
            </span>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* MOBILE VIEWPORTS (Clean, Touch-Optimized Layout)            */}
        {/* ============================================================ */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex md:hidden flex-col gap-3 w-full py-1"
        >
          {/* Row 1: Logos (POWERED BY + IBM Quantum & Qiskit) */}
          <div className="flex items-center justify-between flex-wrap gap-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-semibold tracking-[0.18em] text-[#C7C8CC] uppercase font-mono">
                POWERED BY
              </span>
              <Image
                src="/images/branding/IBM_Quantum_logotype_rev_RGB.png"
                alt="IBM Quantum"
                width={130}
                height={20}
                className="h-4.5 w-auto object-contain"
              />
            </div>

            <div className="flex items-center gap-1.5">
              <Image
                src="/images/branding/qiskit_white.png"
                alt="Qiskit logo"
                width={20}
                height={20}
                className="h-4.5 w-4.5 object-contain"
              />
              <span className="text-sm font-medium tracking-tight text-[#F5F3F0]">
                Qiskit
              </span>
            </div>
          </div>

          {/* Row 2: Quote */}
          <div className="pt-2 border-t border-[rgba(245,243,240,0.14)]">
            <p className="text-[11px] text-[#F5F3F0] font-normal leading-tight">
              &ldquo;Open science. Real impact. A global movement.&rdquo;{' '}
              <span className="text-[10px] text-[#C7C8CC] font-light italic whitespace-nowrap">
                — IBM Quantum
              </span>
            </p>
          </div>

          {/* Row 3: CTA */}
          <div className="pt-1">
            <button
              id="cta-explore-ecosystem-mobile"
              type="button"
              onClick={handleCtaClick}
              data-future-target="learn-section"
              className="
                group w-full min-h-[44px] flex items-center justify-between
                px-3.5 py-2.5 rounded bg-black/20 hover:bg-black/30 active:bg-black/40
                border border-white/10
                text-xs font-medium text-[#F5F3F0]
                transition-colors duration-150 cursor-pointer
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]
              "
              aria-label="Explore the Qiskit ecosystem"
            >
              <span className="tracking-wide">Explore the Qiskit ecosystem</span>
              <ArrowRight
                aria-hidden="true"
                className="w-4 h-4 text-[#F5F3F0] group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
