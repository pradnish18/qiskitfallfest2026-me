interface ExperienceSkeletonSection {
  id: string;
  orderNumber: string;
  title: string;
  debugBg: string;
  debugBorder: string;
  debugTextColor: string;
  tagColor: string;
  purpose: string;
  isFooter?: boolean;
}

const EXPERIENCE_SECTIONS: ExperienceSkeletonSection[] = [
  {
    id: 'section-01-hero',
    orderNumber: '01',
    title: 'Hero',
    debugBg: 'bg-[#4a154b]', // Deep Plum Magenta
    debugBorder: 'border-fuchsia-400',
    debugTextColor: 'text-fuchsia-100',
    tagColor: 'bg-fuchsia-500/30 text-fuchsia-200 border-fuchsia-400/50',
    purpose: 'Hero display, immersion entry point, and experiential overview for Qiskit Fall Fest 2026.',
  },
  {
    id: 'section-02-learn',
    orderNumber: '02',
    title: 'Learn',
    debugBg: 'bg-[#0f3b4c]', // Deep Ocean Teal
    debugBorder: 'border-cyan-400',
    debugTextColor: 'text-cyan-100',
    tagColor: 'bg-cyan-500/30 text-cyan-200 border-cyan-400/50',
    purpose: 'Masterclasses, quantum circuit theory sessions, and fundamental Qiskit learning paths.',
  },
  {
    id: 'section-03-build',
    orderNumber: '03',
    title: 'Build',
    debugBg: 'bg-[#194d33]', // Deep Forest Green
    debugBorder: 'border-emerald-400',
    debugTextColor: 'text-emerald-100',
    tagColor: 'bg-emerald-500/30 text-emerald-200 border-emerald-400/50',
    purpose: 'Hands-on hackathon tracks, algorithm execution on real quantum backends, and technical mentoring.',
  },
  {
    id: 'section-04-connect',
    orderNumber: '04',
    title: 'Connect',
    debugBg: 'bg-[#5c2415]', // Deep Rust Terracotta
    debugBorder: 'border-orange-400',
    debugTextColor: 'text-orange-100',
    tagColor: 'bg-orange-500/30 text-orange-200 border-orange-400/50',
    purpose: 'Networking lounges, researcher meetups, student-industry roundtables, and cross-disciplinary exchanges.',
  },
  {
    id: 'section-05-ready-to-take-part',
    orderNumber: '05',
    title: 'Ready to Take Part?',
    debugBg: 'bg-[#2e1065]', // Deep Indigo Violet
    debugBorder: 'border-purple-400',
    debugTextColor: 'text-purple-100',
    tagColor: 'bg-purple-500/30 text-purple-200 border-purple-400/50',
    purpose: 'Primary call-to-action redirecting participants to the official Unstop registration gateway.',
  },
];

import { Footer } from '@/components/shared/Footer';

export default function ExperiencePage() {
  return (
    <div className="w-full flex flex-col">
      {EXPERIENCE_SECTIONS.map((section) => {
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
              <span>Experience Page Skeleton</span>
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
