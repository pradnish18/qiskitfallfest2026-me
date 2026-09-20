'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ExternalLink, Calendar, MapPin, Sparkles, Tag, ArrowRight } from 'lucide-react';
import { HeroCarousel } from '@/components/ui/hero-carousel';
import type { ExperienceEvent } from '@/data/experience-events';

export interface ExperienceEventGalleryProps {
  sectionId: string;
  sectionNumber: string;
  sectionTitle: string;
  heading: string;
  supportingCopy: string;
  events: ExperienceEvent[];
}

export function ExperienceEventGallery({
  sectionId,
  sectionNumber,
  sectionTitle,
  heading,
  supportingCopy,
  events,
}: ExperienceEventGalleryProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Safety fallback if empty events array
  if (!events || events.length === 0) {
    return null;
  }

  const selectedEvent = events[activeIndex] || events[0];

  return (
    <section
      id={sectionId}
      aria-labelledby={`${sectionId}-heading`}
      className="
        relative isolate w-full overflow-hidden
        py-16 sm:py-20 lg:py-24
        bg-[#F5F3F0] text-[#16171B]
        dark:bg-[#16171B] dark:text-[#F5F3F0]
        transition-colors duration-300
      "
    >
      {/* Dynamic Background Image Transition with Accent Color Grading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={selectedEvent.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.18 }}
            exit={{ opacity: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.8, ease: 'easeInOut' }
            }
            className="absolute inset-0"
          >
            <Image
              src={selectedEvent.image}
              alt=""
              fill
              className="object-cover filter blur-md scale-105"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Accent color grading layer derived from selected event */}
        <motion.div
          animate={{
            background: `radial-gradient(ellipse 90% 70% at 50% 20%, ${selectedEvent.accent}33, transparent 75%)`,
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.6, ease: 'easeOut' }
          }
          className="absolute inset-0 -z-10"
        />

        {/* Subtle grid and readability scrim overlay */}
        <div
          className="
            absolute inset-0 -z-10
            bg-[#F5F3F0]/90 dark:bg-[#16171B]/92
            backdrop-blur-xl transition-colors duration-300
          "
        />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-8 sm:gap-12">
        {/* ============================================================ */}
        {/* TOP ROW: Category Header (Left) + Selected Event Info (Right) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Category Identity & Copy */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* Eyebrow / Section Number */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span
                id={`${sectionId}-eyebrow`}
                className="
                  text-[11px] sm:text-xs font-mono font-semibold tracking-[0.24em] uppercase
                  text-[#6C151E] dark:text-[#B08D57]
                "
              >
                {sectionNumber} — {sectionTitle}
              </span>
            </div>

            {/* Category Heading */}
            <h2
              id={`${sectionId}-heading`}
              className="
                text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight
                text-[#16171B] dark:text-[#F5F3F0] mb-4
              "
            >
              {heading}
            </h2>

            {/* Supporting Category Copy */}
            <p className="text-sm sm:text-base text-[#16171B]/75 dark:text-[#C7C8CC] leading-relaxed max-w-lg">
              {supportingCopy}
            </p>
          </motion.div>

          {/* Right Column (Desktop): Synchronized Selected Event Details */}
          <div className="hidden lg:flex lg:col-span-7 flex-col justify-between min-h-[160px] pl-4 border-l border-[#6C151E]/15 dark:border-white/15">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEvent.id}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex flex-col gap-3"
              >
                {/* Meta badges & credit */}
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="
                      inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium
                      bg-[#6C151E]/10 dark:bg-[#6C151E]/30 text-[#6C151E] dark:text-[#B08D57]
                      border border-[#6C151E]/20 dark:border-white/10
                    "
                  >
                    <Sparkles className="w-3 h-3" />
                    {selectedEvent.credit || 'Qiskit Fall Fest 2026'}
                  </span>

                  {selectedEvent.meta?.map((tag, i) => (
                    <span
                      key={i}
                      className="
                        inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono
                        bg-black/5 dark:bg-white/5 text-[#16171B]/70 dark:text-[#C7C8CC]
                      "
                    >
                      {i === 2 && <Calendar className="w-3 h-3 opacity-60 mr-0.5" />}
                      {i === 3 && <MapPin className="w-3 h-3 opacity-60 mr-0.5" />}
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Selected Event Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#16171B] dark:text-[#F5F3F0] tracking-tight">
                  {selectedEvent.title}
                </h3>

                {/* Selected Event Description */}
                <p className="text-sm sm:text-[15px] text-[#16171B]/80 dark:text-[#C7C8CC] leading-relaxed max-w-2xl">
                  {selectedEvent.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MIDDLE ROW: Horizontal Event Filmstrip Carousel              */}
        {/* ============================================================ */}
        <div className="w-full">
          <HeroCarousel
            events={events}
            activeIndex={activeIndex}
            onActiveIndexChange={setActiveIndex}
          />
        </div>

        {/* ============================================================ */}
        {/* MOBILE DETAILS (Displayed Below Carousel on Mobile)          */}
        {/* ============================================================ */}
        <div className="flex lg:hidden flex-col gap-4 pt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEvent.id}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2.5 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10"
            >
              {/* Meta Tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono text-[#6C151E] dark:text-[#B08D57] font-semibold uppercase">
                  {selectedEvent.credit || 'Qiskit Fall Fest'}
                </span>
                {selectedEvent.meta?.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono text-[#16171B]/60 dark:text-[#C7C8CC]/70"
                  >
                    • {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#16171B] dark:text-[#F5F3F0] leading-snug">
                {selectedEvent.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#16171B]/80 dark:text-[#C7C8CC] leading-relaxed">
                {selectedEvent.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM ROW: Register Now CTA + Progress Indicators           */}
        {/* ============================================================ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-[#6C151E]/10 dark:border-white/10">
          {/* Progress Indicator */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-medium text-[#16171B]/60 dark:text-[#C7C8CC]/70">
              0{activeIndex + 1} / 0{events.length}
            </span>

            {/* Clickable Progress Segment Dots */}
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Slide selector">
              {events.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Go to event ${i + 1}`}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    h-2 rounded-full transition-all duration-300 cursor-pointer
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]
                    ${
                      i === activeIndex
                        ? 'w-8 bg-[#6C151E] dark:bg-[#B08D57]'
                        : 'w-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {/* Selected Event Registration CTA */}
          <div className="w-full sm:w-auto flex items-center justify-end">
            {selectedEvent.registrationUrl ? (
              <a
                id={`${sectionId}-registration-cta`}
                href={selectedEvent.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-3
                  px-6 py-2.5 rounded-lg
                  bg-[#6C151E] hover:bg-[#521018] text-[#F5F3F0]
                  shadow-[0_4px_16px_rgba(108,21,30,0.25)]
                  transition-all duration-200 cursor-pointer
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]
                  focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F3F0] dark:focus-visible:ring-offset-[#16171B]
                "
              >
                <span className="text-sm font-semibold tracking-wide">
                  {selectedEvent.registrationLabel || 'Register Now'}
                </span>
                <ExternalLink
                  aria-hidden="true"
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ) : (
              <button
                id={`${sectionId}-registration-cta-disabled`}
                type="button"
                disabled
                className="
                  w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2
                  px-6 py-2.5 rounded-lg
                  bg-black/10 dark:bg-white/10 text-[#16171B]/40 dark:text-[#C7C8CC]/40
                  border border-black/5 dark:border-white/10
                  cursor-not-allowed text-sm font-medium
                "
              >
                <span>Registration Opening Soon</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
