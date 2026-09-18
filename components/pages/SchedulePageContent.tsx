'use client';

import * as React from 'react';
import { Footer } from '@/components/shared/Footer';

// Minimal structural representations for schedule skeleton state
interface SessionItem {
  id: string;
  time: string;
  title: string;
  track: 'Workshop' | 'Keynote' | 'Hackathon' | 'Panel' | 'Networking';
  speaker: string;
  description: string;
}

interface DaySchedule {
  dayId: string;
  dayLabel: string;
  date: string;
  theme: string;
  sessions: SessionItem[];
}

const SCHEDULE_DATA: DaySchedule[] = [
  {
    dayId: 'day-01',
    dayLabel: 'Day 01',
    date: 'Oct 14, 2026',
    theme: 'Arrival, Keynotes & Quantum Foundations',
    sessions: [
      {
        id: 'session-d1-01',
        time: '09:00 - 10:30',
        title: 'Opening Ceremony & Inaugural Keynote',
        track: 'Keynote',
        speaker: 'Dr. IBM Quantum Leadership & SRM AP Dignitaries',
        description:
          'Welcome addresses from SRM University-AP leadership and IBM Quantum executives, setting the scientific vision for Qiskit Fall Fest 2026.',
      },
      {
        id: 'session-d1-02',
        time: '11:00 - 12:45',
        title: 'Qiskit 1.0 Fundamentals & QPU Architecture',
        track: 'Workshop',
        speaker: 'Lead IBM Quantum Technical Advocate',
        description:
          'Deep dive into primitive execution, circuit optimization, and transpile pipelines on 100+ qubit systems.',
      },
      {
        id: 'session-d1-03',
        time: '14:00 - 15:30',
        title: 'Panel: The State of Quantum Advantage in Asia-Pacific',
        track: 'Panel',
        speaker: 'Distinguished Academic & Industry Panelists',
        description:
          'Cross-institutional discussions on scalable quantum algorithms, research commercialization, and talent incubation.',
      },
    ],
  },
  {
    dayId: 'day-02',
    dayLabel: 'Day 02',
    date: 'Oct 15, 2026',
    theme: 'Algorithms, Error Mitigation & Advanced Qiskit',
    sessions: [
      {
        id: 'session-d2-01',
        time: '09:30 - 11:15',
        title: 'Error Mitigation & Noise Characterization Workshop',
        track: 'Workshop',
        speaker: 'Quantum Research Scientists',
        description:
          'Hands-on laboratory implementing zero-noise extrapolation and probabilistic error cancellation techniques.',
      },
      {
        id: 'session-d2-02',
        time: '11:45 - 13:00',
        title: 'Variational Quantum Algorithms & Chemistry Applications',
        track: 'Keynote',
        speaker: 'Visiting Computational Quantum Chemist',
        description:
          'Molecular simulation algorithms and VQE benchmarking on near-term noisy quantum hardware.',
      },
      {
        id: 'session-d2-03',
        time: '14:30 - 16:30',
        title: 'Hackathon Track Reveal & Team Ideation Lounge',
        track: 'Hackathon',
        speaker: 'Hackathon Mentors & Technical Leads',
        description:
          'Official briefing on problem statements, datasets, and API access tokens for the 48-hour challenge.',
      },
    ],
  },
  {
    dayId: 'day-03',
    dayLabel: 'Day 03',
    date: 'Oct 16, 2026',
    theme: 'Hands-on Hackathon Kickoff & Quantum Labs',
    sessions: [
      {
        id: 'session-d3-01',
        time: '09:00 - 12:00',
        title: '48-Hour Quantum Hackathon Sprint Begins',
        track: 'Hackathon',
        speaker: 'Hackathon Organizing Committee',
        description:
          'Teams begin prototyping quantum algorithms, software tools, and application pipelines with live QPU queue prioritization.',
      },
      {
        id: 'session-d3-02',
        time: '13:30 - 15:00',
        title: 'Mentor Office Hours: Quantum Hardware Troubleshooting',
        track: 'Networking',
        speaker: 'SRM AP & IBM Mentorship Squad',
        description:
          'Direct one-on-one debugging sessions for hardware transpilation bugs and circuit depth compression.',
      },
      {
        id: 'session-d3-03',
        time: '16:00 - 17:30',
        title: 'Industry Perspectives: Quantum in Finance & Optimization',
        track: 'Panel',
        speaker: 'Financial Engineering & Logistics Executives',
        description:
          'Exploring quadratic unconstrained binary optimization (QUBO) and quantum portfolio optimization workflows.',
      },
    ],
  },
  {
    dayId: 'day-04',
    dayLabel: 'Day 04',
    date: 'Oct 17, 2026',
    theme: 'Hackathon Sprint & Midpoint Code Reviews',
    sessions: [
      {
        id: 'session-d4-01',
        time: '10:00 - 13:00',
        title: 'Hackathon Midpoint Check-in & Architecture Audits',
        track: 'Hackathon',
        speaker: 'Technical Evaluation Jury',
        description:
          'Teams present progress benchmarks, algorithm efficiency metrics, and repository milestones to reviewers.',
      },
      {
        id: 'session-d4-02',
        time: '14:30 - 16:00',
        title: 'Masterclass: Quantum Machine Learning (QML) Paradigms',
        track: 'Workshop',
        speaker: 'Quantum AI Researcher',
        description:
          'Parameterized quantum circuits, quantum kernels, and classification pipelines using Qiskit Machine Learning.',
      },
      {
        id: 'session-d4-03',
        time: '17:00 - 18:30',
        title: 'Community Exchange & Global Chapter Networking',
        track: 'Networking',
        speaker: 'Student Chapter Ambassadors',
        description:
          'Casual evening roundtable connecting collegiate quantum clubs from across the Indian subcontinent.',
      },
    ],
  },
  {
    dayId: 'day-05',
    dayLabel: 'Day 05',
    date: 'Oct 18, 2026',
    theme: 'Final Pitches, Valedictory & Awards',
    sessions: [
      {
        id: 'session-d5-01',
        time: '09:00 - 12:30',
        title: 'Grand Finalist Pitches & Live Demonstrations',
        track: 'Hackathon',
        speaker: 'Top 10 Finalist Teams',
        description:
          'Shortlisted teams deliver 8-minute pitches and live code executions before the grand jury.',
      },
      {
        id: 'session-d5-02',
        time: '14:00 - 15:30',
        title: 'Valedictory Address & Future Roadmap for Quantum at SRM AP',
        track: 'Keynote',
        speaker: 'University Deans & Distinguished Guests',
        description:
          'Reflections on festival accomplishments, publication opportunities, and multi-year quantum research centers.',
      },
      {
        id: 'session-d5-03',
        time: '16:00 - 17:30',
        title: 'Awards Ceremony & Festival Closing Celebration',
        track: 'Networking',
        speaker: 'Awards Committee',
        description:
          'Announcement of hackathon champions, IBM Qiskit vouchers, merit awards, and ceremonial send-off.',
      },
    ],
  },
];

const TRACK_OPTIONS = ['All', 'Workshop', 'Keynote', 'Hackathon', 'Panel', 'Networking'] as const;
type TrackFilter = (typeof TRACK_OPTIONS)[number];

export default function SchedulePage() {
  // Core state requirements:
  // 1. selectedDay
  // 2. selectedSession
  // 3. selectedFilter / filters
  const [selectedDayId, setSelectedDayId] = React.useState<string>('day-01');
  const [selectedFilter, setSelectedFilter] = React.useState<TrackFilter>('All');
  const [filterDropdownOpen, setFilterDropdownOpen] = React.useState<boolean>(false);

  // Active day object
  const activeDay = React.useMemo(() => {
    return SCHEDULE_DATA.find((d) => d.dayId === selectedDayId) || SCHEDULE_DATA[0];
  }, [selectedDayId]);

  // Filtered session list
  const filteredSessions = React.useMemo(() => {
    if (selectedFilter === 'All') {
      return activeDay.sessions;
    }
    return activeDay.sessions.filter((s) => s.track === selectedFilter);
  }, [activeDay, selectedFilter]);

  // Selected session state:
  // Defaults to first session of Day 01 ("Opening Ceremony")
  const [selectedSessionId, setSelectedSessionId] = React.useState<string>(
    SCHEDULE_DATA[0].sessions[0].id
  );

  // When day changes, automatically select the first session of that day
  const handleSelectDay = (dayId: string) => {
    setSelectedDayId(dayId);
    const targetDay = SCHEDULE_DATA.find((d) => d.dayId === dayId);
    if (targetDay && targetDay.sessions.length > 0) {
      setSelectedSessionId(targetDay.sessions[0].id);
    }
  };

  // Currently selected session object
  const activeSession = React.useMemo(() => {
    // Look in current activeDay first, fallback to any session in the entire festival
    const currentFound = activeDay.sessions.find((s) => s.id === selectedSessionId);
    if (currentFound) return currentFound;
    for (const d of SCHEDULE_DATA) {
      const match = d.sessions.find((s) => s.id === selectedSessionId);
      if (match) return match;
    }
    return activeDay.sessions[0];
  }, [activeDay, selectedSessionId]);

  return (
    <div className="w-full flex flex-col">
      {/* ============================================================ */}
      {/* 01 HERO                                                      */}
      {/* ============================================================ */}
      <section
        id="section-01-hero"
        aria-label="01. Hero"
        className="w-full min-h-[300px] py-14 px-4 sm:px-6 lg:px-8 border-b-4 bg-[#4a121a] border-rose-400 text-rose-100 flex items-center justify-center"
      >
        <div className="w-full max-w-5xl mx-auto border-2 border-dashed border-white/30 rounded-lg p-6 sm:p-10 flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center px-3 py-1 text-xs font-mono font-semibold tracking-wider uppercase rounded-full border bg-rose-500/30 text-rose-200 border-rose-400/50">
              Section 01
            </span>
            <span className="inline-flex items-center px-3 py-1 text-xs font-mono uppercase rounded-full border border-white/20 bg-black/30 text-white/90">
              Structure / Cross-Verification
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide font-sans">
            01. Hero
          </h2>
          <p className="text-sm sm:text-base max-w-2xl text-white/80 font-mono leading-relaxed">
            Festival schedule portal hero, five-day timeline overview, and thematic program guide.
          </p>
          <div className="text-[11px] font-mono text-white/50 pt-2 border-t border-white/10 w-full flex flex-wrap justify-between items-center gap-2">
            <span>Block ID: #section-01-hero</span>
            <span>Schedule Page Skeleton</span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02 EVENT STATS / STRIP                                       */}
      {/* ============================================================ */}
      <section
        id="section-02-event-stats-strip"
        aria-label="02. Event Stats / Strip"
        className="w-full min-h-[260px] py-12 px-4 sm:px-6 lg:px-8 border-b-4 bg-[#142850] border-blue-400 text-blue-100 flex items-center justify-center"
      >
        <div className="w-full max-w-5xl mx-auto border-2 border-dashed border-white/30 rounded-lg p-6 sm:p-10 flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center px-3 py-1 text-xs font-mono font-semibold tracking-wider uppercase rounded-full border bg-blue-500/30 text-blue-200 border-blue-400/50">
              Section 02
            </span>
            <span className="inline-flex items-center px-3 py-1 text-xs font-mono uppercase rounded-full border border-white/20 bg-black/30 text-white/90">
              Structure / Cross-Verification
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide font-sans">
            02. Event Stats / Strip
          </h2>
          <p className="text-sm sm:text-base max-w-2xl text-white/80 font-mono leading-relaxed">
            High-density horizontal telemetry strip: 5 Days, 25+ Sessions, 48-Hour Hackathon, 500+ Participants.
          </p>
          <div className="text-[11px] font-mono text-white/50 pt-2 border-t border-white/10 w-full flex flex-wrap justify-between items-center gap-2">
            <span>Block ID: #section-02-event-stats-strip</span>
            <span>Schedule Page Skeleton</span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03 EXPLORE THE SCHEDULE (ONE Major section with TWO inner)   */}
      {/* ============================================================ */}
      <section
        id="section-03-explore-the-schedule"
        aria-label="03. Explore the Schedule"
        className="w-full min-h-[500px] py-14 px-4 sm:px-6 lg:px-8 border-b-4 bg-[#0a3622] border-emerald-400 text-emerald-100 flex flex-col items-center justify-center"
      >
        <div className="w-full max-w-6xl mx-auto space-y-8">
          {/* Header block for 03 */}
          <div className="border-2 border-dashed border-white/30 rounded-lg p-6 text-center space-y-3 bg-black/20">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center px-3 py-1 text-xs font-mono font-semibold tracking-wider uppercase rounded-full border bg-emerald-500/30 text-emerald-200 border-emerald-400/50">
                Major Section 03
              </span>
              <span className="inline-flex items-center px-3 py-1 text-xs font-mono uppercase rounded-full border border-white/20 bg-black/30 text-white/90">
                One Major Section with Two Inner Areas
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide font-sans">
              03. Explore the Schedule
            </h2>
            <p className="text-sm max-w-2xl mx-auto text-white/80 font-mono">
              Coordinates Day Navigation (03A) and Schedule Content (03B) containing the active timeline and selected session details.
            </p>
          </div>

          {/* 03A. Day Navigation */}
          <div
            id="area-03a-day-navigation"
            className="w-full border-2 border-dashed border-emerald-300/60 rounded-lg p-5 bg-emerald-950/50 space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-400/30 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-xs font-mono font-semibold uppercase bg-emerald-500/20 text-emerald-200 border border-emerald-400/40 rounded">
                  03A
                </span>
                <h3 className="text-base sm:text-lg font-bold font-sans">Day Navigation</h3>
              </div>
              <span className="text-xs font-mono text-emerald-300/80">
                Active: <strong className="text-white">{activeDay.dayLabel}</strong> ({activeDay.date})
              </span>
            </div>

            {/* 5 Days Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {SCHEDULE_DATA.map((day) => {
                const isSelected = day.dayId === selectedDayId;
                return (
                  <button
                    key={day.dayId}
                    type="button"
                    onClick={() => handleSelectDay(day.dayId)}
                    className={`p-3 rounded border text-left transition-colors font-mono cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500 text-black border-white font-bold shadow-md'
                        : 'bg-black/30 text-white/90 border-emerald-500/30 hover:bg-emerald-900/40'
                    }`}
                  >
                    <div className="text-xs uppercase tracking-wider">{day.dayLabel}</div>
                    <div className="text-[11px] opacity-80">{day.date}</div>
                  </button>
                );
              })}
            </div>
            <div className="text-xs font-mono text-emerald-200/70 italic">
              Theme: {activeDay.theme}
            </div>
          </div>

          {/* 03B. Schedule Content (Two-column layout on Desktop, responsive flow on Mobile/Tablet) */}
          <div
            id="area-03b-schedule-content"
            className="w-full border-2 border-dashed border-teal-300/60 rounded-lg p-5 bg-teal-950/50 space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-400/30 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-xs font-mono font-semibold uppercase bg-teal-500/20 text-teal-200 border border-teal-400/40 rounded">
                  03B
                </span>
                <h3 className="text-base sm:text-lg font-bold font-sans">Schedule Content</h3>
              </div>
              <span className="text-xs font-mono text-teal-200/80">
                Filter Applied: <span className="font-semibold text-white">{selectedFilter}</span>
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Timeline / Session List */}
              <div className="lg:col-span-6 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-teal-300/90 font-semibold">
                  Session List / Timeline ({activeDay.dayLabel})
                </div>
                {filteredSessions.length === 0 ? (
                  <div className="p-4 rounded border border-dashed border-teal-400/30 text-sm font-mono text-center text-teal-200/70">
                    No sessions match track filter &ldquo;{selectedFilter}&rdquo; on this day.
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {filteredSessions.map((session) => {
                      const isSessionSelected = session.id === activeSession.id;
                      return (
                        <div
                          key={session.id}
                          onClick={() => setSelectedSessionId(session.id)}
                          className={`p-3.5 rounded border text-left cursor-pointer transition-all ${
                            isSessionSelected
                              ? 'bg-teal-400 text-black border-white shadow font-semibold'
                              : 'bg-black/30 border-teal-500/30 text-white/90 hover:bg-teal-900/40'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 text-xs font-mono mb-1">
                            <span>{session.time}</span>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono ${
                                isSessionSelected
                                  ? 'bg-black text-teal-200'
                                  : 'bg-teal-500/20 text-teal-200 border border-teal-400/30'
                              }`}
                            >
                              {session.track}
                            </span>
                          </div>
                          <div className="text-sm font-sans">{session.title}</div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Selected Session Details Area */}
              <div className="lg:col-span-6 border border-teal-400/40 rounded-lg p-5 bg-black/40 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-teal-300 font-semibold">
                      Selected Session Details
                    </span>
                    <span className="px-2 py-0.5 text-xs font-mono bg-teal-500/20 text-teal-200 border border-teal-400/40 rounded">
                      {activeSession.track}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-teal-300/80">
                    Time: {activeSession.time} • {activeDay.dayLabel}
                  </div>

                  <h4 className="text-lg font-bold text-white font-sans">
                    {activeSession.title}
                  </h4>

                  <p className="text-sm font-mono text-white/80 leading-relaxed">
                    {activeSession.description}
                  </p>

                  <div className="text-xs font-mono text-teal-200/90 pt-2">
                    <span className="text-white/50">Lead Speaker/Facilitator:</span>{' '}
                    <span className="font-semibold text-white">{activeSession.speaker}</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-white/40 pt-3 border-t border-white/10 flex justify-between">
                  <span>Session ID: {activeSession.id}</span>
                  <span>In-page Interactive State</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-white/50 text-center">
            Block ID: #section-03-explore-the-schedule • Explore the Schedule Structural Container
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 04 FILTER BY TRACK                                           */}
      {/* ============================================================ */}
      <section
        id="section-04-filter-by-track"
        aria-label="04. Filter by Track"
        className="w-full min-h-[300px] py-14 px-4 sm:px-6 lg:px-8 border-b-4 bg-[#4a2e05] border-amber-400 text-amber-100 flex items-center justify-center relative"
      >
        <div className="w-full max-w-5xl mx-auto border-2 border-dashed border-white/30 rounded-lg p-6 sm:p-10 flex flex-col items-center justify-center text-center space-y-5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center px-3 py-1 text-xs font-mono font-semibold tracking-wider uppercase rounded-full border bg-amber-500/30 text-amber-200 border-amber-400/50">
              Section 04
            </span>
            <span className="inline-flex items-center px-3 py-1 text-xs font-mono uppercase rounded-full border border-white/20 bg-black/30 text-white/90">
              Structure / Cross-Verification
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide font-sans">
            04. Filter by Track
          </h2>

          <p className="text-sm sm:text-base max-w-2xl text-white/80 font-mono leading-relaxed">
            Separate structural section immediately following Explore and preceding Next Phase. Represents a filter/search control that opens an overlay/dropdown interaction without expanding the whole page layout.
          </p>

          {/* Trigger button for overlay / dropdown */}
          <div className="relative inline-block text-left w-full max-w-xs">
            <button
              type="button"
              onClick={() => setFilterDropdownOpen((prev) => !prev)}
              className="w-full px-5 py-3 rounded border border-amber-300 bg-black/40 text-amber-100 font-mono text-sm font-semibold flex items-center justify-between cursor-pointer hover:bg-amber-950/60 transition-colors"
            >
              <span>Track Filter: {selectedFilter}</span>
              <span className="text-xs bg-amber-500/30 px-2 py-0.5 rounded">
                {filterDropdownOpen ? '▲ Close' : '▼ Open'}
              </span>
            </button>

            {/* Dropdown / Overlay placeholder */}
            {filterDropdownOpen && (
              <div className="absolute left-0 right-0 mt-2 p-3 bg-stone-900 border-2 border-amber-400 rounded-lg shadow-2xl z-30 space-y-2 text-left">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold border-b border-amber-400/30 pb-1">
                  Select Filter Track:
                </div>
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  {TRACK_OPTIONS.map((track) => {
                    const isTrackActive = selectedFilter === track;
                    return (
                      <button
                        key={track}
                        type="button"
                        onClick={() => {
                          setSelectedFilter(track);
                          setFilterDropdownOpen(false);
                        }}
                        className={`px-2.5 py-1.5 text-xs font-mono rounded text-left transition-colors cursor-pointer ${
                          isTrackActive
                            ? 'bg-amber-400 text-black font-bold'
                            : 'bg-black/40 text-white/90 hover:bg-amber-900/40'
                        }`}
                      >
                        {track}
                      </button>
                    );
                  })}
                </div>
                <div className="text-[10px] font-mono text-white/50 pt-1 border-t border-white/10">
                  Touch-friendly dropdown applied directly to Explore timeline above.
                </div>
              </div>
            )}
          </div>

          <div className="text-[11px] font-mono text-white/50 pt-2 border-t border-white/10 w-full flex flex-wrap justify-between items-center gap-2">
            <span>Block ID: #section-04-filter-by-track</span>
            <span>Filter by Track Structural Skeleton</span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 05 NEXT PHASE / ON-CAMPUS                                    */}
      {/* ============================================================ */}
      <section
        id="section-05-next-phase-on-campus"
        aria-label="05. Next Phase / On-Campus"
        className="w-full min-h-[280px] py-14 px-4 sm:px-6 lg:px-8 border-b-4 bg-[#3b0764] border-purple-400 text-purple-100 flex items-center justify-center"
      >
        <div className="w-full max-w-5xl mx-auto border-2 border-dashed border-white/30 rounded-lg p-6 sm:p-10 flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center px-3 py-1 text-xs font-mono font-semibold tracking-wider uppercase rounded-full border bg-purple-500/30 text-purple-200 border-purple-400/50">
              Section 05
            </span>
            <span className="inline-flex items-center px-3 py-1 text-xs font-mono uppercase rounded-full border border-white/20 bg-black/30 text-white/90">
              Structure / Cross-Verification
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide font-sans">
            05. Next Phase / On-Campus
          </h2>
          <p className="text-sm sm:text-base max-w-2xl text-white/80 font-mono leading-relaxed">
            Transition guidelines from virtual workshops to the physical SRM University-AP campus phase.
          </p>
          <div className="text-[11px] font-mono text-white/50 pt-2 border-t border-white/10 w-full flex flex-wrap justify-between items-center gap-2">
            <span>Block ID: #section-05-next-phase-on-campus</span>
            <span>Schedule Page Skeleton</span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 06 PLAN AHEAD / CTA                                          */}
      {/* ============================================================ */}
      <section
        id="section-06-plan-ahead-cta"
        aria-label="06. Plan Ahead / CTA"
        className="w-full min-h-[280px] py-14 px-4 sm:px-6 lg:px-8 border-b-4 bg-[#083344] border-cyan-400 text-cyan-100 flex items-center justify-center"
      >
        <div className="w-full max-w-5xl mx-auto border-2 border-dashed border-white/30 rounded-lg p-6 sm:p-10 flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center px-3 py-1 text-xs font-mono font-semibold tracking-wider uppercase rounded-full border bg-cyan-500/30 text-cyan-200 border-cyan-400/50">
              Section 06
            </span>
            <span className="inline-flex items-center px-3 py-1 text-xs font-mono uppercase rounded-full border border-white/20 bg-black/30 text-white/90">
              Structure / Cross-Verification
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide font-sans">
            06. Plan Ahead / CTA
          </h2>
          <p className="text-sm sm:text-base max-w-2xl text-white/80 font-mono leading-relaxed">
            Calendar sync links, travel planning checklist, and external Unstop registration gateway action.
          </p>
          <div className="text-[11px] font-mono text-white/50 pt-2 border-t border-white/10 w-full flex flex-wrap justify-between items-center gap-2">
            <span>Block ID: #section-06-plan-ahead-cta</span>
            <span>Schedule Page Skeleton</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
