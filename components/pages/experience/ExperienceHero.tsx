'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Play, X, ExternalLink } from 'lucide-react';
import { PlasmaRing } from '@/components/ui/plasma-ring';

const TRAILER_VIDEO_ID = 'EByii89QzVQ';
const TRAILER_YOUTUBE_URL = 'https://youtu.be/EByii89QzVQ?si=td8WOckyuKGbos_O';

// Exact burgundy, oxblood, silver and restrained ivory palette specified
const PLASMA_HERO_COLORS = ['#6C151E', '#3A0B10', '#521018', '#C7C8CC', '#E5E5E7'];

export function ExperienceHero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Close modal on Escape key and restore body scrolling
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };
    if (isVideoModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isVideoModalOpen]);

  const handleScrollToExplore = () => {
    const target = document.getElementById('experience-future-content');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="section-01-hero"
      aria-labelledby="experience-hero-title"
      className="
        relative isolate w-full overflow-hidden
        bg-[#F5F3F0] text-[#16171B]
        dark:bg-[#16171B] dark:text-[#F5F3F0]
        min-h-[calc(100svh-90px)]
        flex flex-col justify-center
        transition-colors duration-300
      "
    >
      {/* Background Engineering Graph Grid & Atmospheric Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Engineering technical grid pattern */}
        <div
          className="
            absolute inset-0 opacity-[0.45] dark:opacity-[0.20]
            bg-[linear-gradient(to_right,rgba(108,21,30,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(108,21,30,0.06)_1px,transparent_1px)]
            dark:bg-[linear-gradient(to_right,rgba(229,229,231,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,229,231,0.05)_1px,transparent_1px)]
            [background-size:52px_52px]
          "
        />

        {/* Ambient warm radial glow positioned behind the visual */}
        <div
          className="
            absolute
            right-[-10%] top-[5%]
            h-[420px] w-[420px]
            sm:h-[600px] sm:w-[600px]
            lg:right-[8%] lg:top-[8%]
            lg:h-[820px] lg:w-[820px]
            rounded-full
            bg-[radial-gradient(circle,rgba(108,21,30,0.12)_0%,rgba(58,11,16,0.04)_45%,transparent_70%)]
            dark:bg-[radial-gradient(circle,rgba(240,120,132,0.14)_0%,rgba(108,21,30,0.07)_50%,transparent_70%)]
            blur-3xl
          "
        />
      </div>

      {/* Main Content Container */}
      <div
        className="
          relative mx-auto w-full max-w-[1780px]
          px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24
          pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-14
          flex-1 flex items-center
        "
      >
        <div
          className="
            w-full grid grid-cols-1 lg:grid-cols-12
            items-center
            gap-8 sm:gap-10 lg:gap-6 xl:gap-10 2xl:gap-12
          "
        >
          {/* =========================================================
              LEFT COLUMN: EDITORIAL CONTENT & TYPOGRAPHY
          ========================================================== */}
          <div
            className="
              lg:col-span-6 xl:col-span-5
              flex flex-col justify-center
              z-10
            "
          >
            {/* Eyebrow: EXPERIENCES + Burgundy Horizontal Rule */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3.5 mb-4 sm:mb-6"
            >
              <span
                className="
                  text-[12px] sm:text-[13px]
                  font-bold uppercase
                  tracking-[0.24em]
                  text-[#6C151E] dark:text-[#F07A86]
                  font-sans
                "
              >
                EXPERIENCES
              </span>
              <span
                className="
                  w-12 sm:w-16 h-[1.5px]
                  bg-[#6C151E] dark:bg-[#F07A86]
                  opacity-90
                "
                aria-hidden="true"
              />
            </motion.div>

            {/* Headline: Learn. Build. Connect. */}
            <h1
              id="experience-hero-title"
              className="
                font-serif font-bold
                leading-[0.92] sm:leading-[0.90]
                tracking-[-0.035em]
                text-[clamp(44px,6.8vw,92px)]
                text-[#3A0B10] dark:text-[#FFF4F2]
                m-0
              "
            >
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  className="inline-block"
                  initial={{ y: shouldReduceMotion ? 0 : '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                >
                  Learn.
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  className="inline-block whitespace-normal sm:whitespace-nowrap"
                  initial={{ y: shouldReduceMotion ? 0 : '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  Build. Connect.
                </motion.span>
              </span>
            </h1>

            {/* Subheadline: Three paths. A global quantum community. */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="
                mt-4 sm:mt-6
                text-[18px] sm:text-[20px] lg:text-[22px]
                font-semibold font-sans
                leading-[1.3]
                tracking-[-0.015em]
                text-[#16171B] dark:text-[#F5F3F0]
              "
            >
              Three paths. A global quantum community.
            </motion.p>

            {/* Body Description */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.48 }}
              className="
                mt-3 sm:mt-4
                max-w-[490px]
                text-[14.5px] sm:text-[15.5px] lg:text-[16px]
                leading-[1.65]
                font-normal font-sans
                text-[#5A4D4B] dark:text-[#C7BCB9]
              "
            >
              Gain new skills, build real solutions, and connect with the people
              shaping the future of quantum computing.
            </motion.p>

            {/* Hero Actions Row: Watch Trailer + Scroll to explore */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.58 }}
              className="
                mt-7 sm:mt-10
                flex flex-wrap items-center
                gap-5 sm:gap-8
              "
            >
              {/* Watch Trailer Group with Thin Vertical Rule */}
              <div className="flex items-center gap-3.5 border-l-2 border-[#6C151E]/25 dark:border-[#F07A86]/30 pl-3.5 sm:pl-4">
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  aria-label="Watch Qiskit Fall Fest 2026 Trailer (2 minutes)"
                  className="
                    group relative flex h-10 w-10 sm:h-11 sm:w-11
                    items-center justify-center
                    rounded-full
                    border border-[#6C151E] dark:border-[#F07A86]
                    bg-[#6C151E]/5 hover:bg-[#6C151E]
                    dark:bg-[#F07A86]/10 dark:hover:bg-[#F07A86]
                    focus-visible:ring-2 focus-visible:ring-[#6C151E] dark:focus-visible:ring-[#F07A86]
                    transition-all duration-200
                    cursor-pointer shadow-sm hover:scale-105
                  "
                >
                  <Play
                    size={14}
                    className="
                      ml-0.5 fill-[#6C151E] text-[#6C151E]
                      group-hover:fill-white group-hover:text-white
                      dark:fill-[#F07A86] dark:text-[#F07A86]
                      dark:group-hover:fill-[#16171B] dark:group-hover:text-[#16171B]
                      transition-colors
                    "
                  />
                </button>
                <div className="flex flex-col text-left">
                  <button
                    type="button"
                    onClick={() => setIsVideoModalOpen(true)}
                    className="
                      text-[14.5px] sm:text-[15px] font-bold font-sans
                      text-[#16171B] dark:text-[#FFF4F2]
                      hover:text-[#6C151E] dark:hover:text-[#F07A86]
                      transition-colors text-left cursor-pointer
                      leading-tight outline-none focus-visible:underline
                    "
                  >
                    Watch Trailer
                  </button>
                  <span className="text-[12px] text-[#7A6D6B] dark:text-[#A89B99] font-mono mt-0.5">
                    2 min
                  </span>
                </div>
              </div>

              {/* Vertical Divider between actions on larger screens */}
              <div
                className="hidden sm:block h-8 w-[1px] bg-[#6C151E]/15 dark:bg-white/15"
                aria-hidden="true"
              />

              {/* Scroll to explore visual cue */}
              <button
                type="button"
                onClick={handleScrollToExplore}
                aria-label="Scroll to explore Experience section"
                className="
                  group inline-flex items-center gap-3
                  text-[#3D3032] dark:text-[#D5C8C6]
                  hover:text-[#6C151E] dark:hover:text-[#F07A86]
                  focus-visible:ring-2 focus-visible:ring-[#6C151E] dark:focus-visible:ring-[#F07A86]
                  rounded-md p-1
                  transition-colors cursor-pointer outline-none
                "
              >
                {/* Mouse Outline Pill with Animated Dot */}
                <div
                  className="
                    w-[18px] h-[28px] rounded-full
                    border border-[#521018]/60 dark:border-white/50
                    group-hover:border-[#6C151E] dark:group-hover:border-[#F07A86]
                    flex justify-center pt-1.5
                    transition-colors
                  "
                  aria-hidden="true"
                >
                  <div
                    className="
                      w-1 h-1.5 rounded-full
                      bg-[#521018] dark:bg-white/80
                      group-hover:bg-[#6C151E] dark:group-hover:bg-[#F07A86]
                      animate-bounce
                    "
                  />
                </div>
                <span className="text-[13.5px] sm:text-[14px] font-medium font-sans tracking-tight">
                  Scroll to explore
                </span>
              </button>
            </motion.div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: INTERACTIVE PLASMA RING & EDITORIAL ANNOTATIONS
          ========================================================== */}
          <div
            className="
              lg:col-span-6 xl:col-span-7
              relative
              flex items-center justify-center
              w-full
              h-[360px] sm:h-[460px] md:h-[540px] lg:h-[620px] xl:h-[700px] 2xl:h-[760px]
            "
          >
            {/* Upper-Right Editorial Text Block (PEOPLE, IDEAS, etc.) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="
                pointer-events-none absolute
                top-2 sm:top-6 right-0 sm:right-2 lg:right-2 xl:right-4
                z-20 flex flex-col items-start select-none
              "
              aria-label="People, Ideas, Technology, A Brighter Tomorrow"
            >
              <div
                className="
                  text-[10.5px] sm:text-[11px] lg:text-[11.5px] font-mono
                  tracking-[0.20em] uppercase leading-[1.65]
                  text-[#3D3032] dark:text-[#E2D6D4] font-medium
                "
              >
                <div>PEOPLE</div>
                <div>IDEAS</div>
                <div>TECHNOLOGY</div>
                <div>A BRIGHTER</div>
                <div>TOMORROW</div>
              </div>
              <div
                className="mt-2.5 w-9 sm:w-11 h-[2px] bg-[#6C151E] dark:bg-[#F07A86]"
                aria-hidden="true"
              />
            </motion.div>

            {/* Lower-Right Editorial Text Block (A DECADE OF PROGRESS, etc.) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="
                pointer-events-none absolute
                bottom-2 sm:bottom-6 right-0 sm:right-2 lg:right-2 xl:right-4
                z-20 flex flex-col items-start select-none
              "
              aria-label="A Decade of Progress, A Brighter Quantum Future"
            >
              <div
                className="
                  text-[10px] sm:text-[10.5px] lg:text-[11px] font-mono
                  tracking-[0.18em] uppercase leading-[1.65]
                  text-[#7A6D6B] dark:text-[#A89B99]
                "
              >
                <div>A DECADE</div>
                <div>OF PROGRESS.</div>
                <div>A BRIGHTER</div>
                <div>QUANTUM FUTURE.</div>
              </div>
            </motion.div>

            {/* Central Interactive PlasmaRing Visual Container */}
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="
                relative w-full h-full
                max-w-[760px] max-h-[760px]
                flex items-center justify-center
              "
              aria-hidden="true"
            >
              <PlasmaRing
                background="transparent"
                colors={PLASMA_HERO_COLORS}
                density={120}
                speed={85}
                waveHeight={22}
                centerOpacity={92}
                scale={38}
                dragSensitivity={100}
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ACCESSIBLE VIDEO MODAL FOR WATCH TRAILER
      ========================================================== */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-trailer-title"
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            p-4 sm:p-6 md:p-10
            bg-black/80 backdrop-blur-sm
          "
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="
              relative
              w-full max-w-4xl
              bg-[#161112] text-white
              rounded-xl
              border border-white/15
              shadow-[0_24px_50px_rgba(0,0,0,0.7)]
              overflow-hidden
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#EF7885]" aria-hidden="true" />
                <h3
                  id="modal-trailer-title"
                  className="text-sm font-semibold tracking-wide uppercase font-sans"
                >
                  Qiskit Fall Fest 2026 • Official Trailer
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={TRAILER_YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1.5
                    text-xs text-white/70 hover:text-white
                    transition-colors
                  "
                >
                  <span>Open on YouTube</span>
                  <ExternalLink size={13} />
                </a>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  aria-label="Close trailer modal"
                  className="
                    p-1.5 rounded-md
                    text-white/70 hover:text-white hover:bg-white/10
                    transition-colors cursor-pointer
                  "
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Video Player Embed */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${TRAILER_VIDEO_ID}?autoplay=1&rel=0`}
                title="Qiskit Fall Fest 2026 Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
