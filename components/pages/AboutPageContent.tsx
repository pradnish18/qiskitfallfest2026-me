import React from 'react';
import { Footer } from '@/components/shared/Footer';

interface AboutSkeletonSection {
  id: string;
  orderNumber: string;
  title: string;
  debugBg: string;
  debugBorder: string;
  debugTextColor: string;
  tagColor: string;
  purpose: string;
}

const ABOUT_SECTIONS: AboutSkeletonSection[] = [
  {
    id: 'section-01-hero',
    orderNumber: '01',
    title: 'Hero',
    debugBg: 'bg-[#5c1319]', // Deep Crimson
    debugBorder: 'border-rose-400',
    debugTextColor: 'text-rose-100',
    tagColor: 'bg-rose-500/30 text-rose-200 border-rose-400/50',
    purpose: 'Hero display, event identity, and thematic introduction for Qiskit Fall Fest 2026.',
  },
  {
    id: 'section-02-the-matter',
    orderNumber: '02',
    title: 'The Matter',
    debugBg: 'bg-[#1e3a8a]', // Deep Navy Blue
    debugBorder: 'border-blue-400',
    debugTextColor: 'text-blue-100',
    tagColor: 'bg-blue-500/30 text-blue-200 border-blue-400/50',
    purpose: 'Explaining why quantum computing matters now and the core educational mission.',
  },
  {
    id: 'section-03-our-host',
    orderNumber: '03',
    title: 'Our Host',
    debugBg: 'bg-[#064e3b]', // Deep Emerald
    debugBorder: 'border-emerald-400',
    debugTextColor: 'text-emerald-100',
    tagColor: 'bg-emerald-500/30 text-emerald-200 border-emerald-400/50',
    purpose: 'SRM University-AP Andhra Pradesh institutional stewardship and quantum research legacy.',
  },
  {
    id: 'section-04-our-pillars',
    orderNumber: '04',
    title: 'Our Pillars',
    debugBg: 'bg-[#78350f]', // Deep Amber
    debugBorder: 'border-amber-400',
    debugTextColor: 'text-amber-100',
    tagColor: 'bg-amber-500/30 text-amber-200 border-amber-400/50',
    purpose: 'Core tenets anchoring the festival: scientific rigor, open quantum accessibility, and interdisciplinary collaboration.',
  },
  {
    id: 'section-05-global-movement',
    orderNumber: '05',
    title: 'Global Movement',
    debugBg: 'bg-[#581c87]', // Deep Violet
    debugBorder: 'border-purple-400',
    debugTextColor: 'text-purple-100',
    tagColor: 'bg-purple-500/30 text-purple-200 border-purple-400/50',
    purpose: 'Worldwide IBM Quantum community reach, collegiate network, and global fest scale.',
  },
];

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col">
      {ABOUT_SECTIONS.map((section) => {
        const Content = (
          <div className="w-full max-w-5xl mx-auto border-2 border-dashed border-white/30 rounded-lg p-6 sm:p-10 flex flex-col items-center justify-center text-center space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span
                className={`inline-flex items-center px-3 py-1 text-xs font-mono font-semibold tracking-wider uppercase rounded-full border ${section.tagColor}`}
              >
                Section {section.orderNumber}
              </span>
              <span className="inline-flex items-center px-3 py-1 text-xs font-mono uppercase rounded-full border border-white/20 bg-black/30 text-white/90">
                Structure / Cross-Verification
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide font-sans">
              {section.orderNumber}. {section.title}
            </h2>

            <p className="text-sm sm:text-base max-w-2xl text-white/80 font-mono leading-relaxed">
              {section.purpose}
            </p>

            <div className="text-[11px] font-mono text-white/50 pt-2 border-t border-white/10 w-full flex flex-wrap justify-between items-center gap-2">
              <span>Block ID: #{section.id}</span>
              <span>About Page Skeleton</span>
            </div>
          </div>
        );

        return (
          <section
            key={section.id}
            id={section.id}
            aria-label={section.title}
            className={`w-full min-h-[280px] sm:min-h-[320px] py-14 px-4 sm:px-6 lg:px-8 border-b-4 ${section.debugBg} ${section.debugBorder} ${section.debugTextColor} flex items-center justify-center`}
          >
            {Content}
          </section>
        );
      })}
      
      <Footer />
    </div>
  );
}
