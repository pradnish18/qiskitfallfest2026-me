interface VenueSkeletonSection {
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

const VENUES_SECTIONS: VenueSkeletonSection[] = [
  {
    id: 'section-01-hero',
    orderNumber: '01',
    title: 'Hero',
    debugBg: 'bg-[#431407]', // Deep Amber Bronze
    debugBorder: 'border-amber-500',
    debugTextColor: 'text-amber-100',
    tagColor: 'bg-amber-500/30 text-amber-200 border-amber-400/50',
    purpose: 'Campus geography hero banner, spatial orientation, and SRM University-AP event site introduction.',
  },
  {
    id: 'section-02-event-stats-strip',
    orderNumber: '02',
    title: 'Event Stats / Strip',
    debugBg: 'bg-[#1e1b4b]', // Deep Indigo Slate
    debugBorder: 'border-indigo-400',
    debugTextColor: 'text-indigo-100',
    tagColor: 'bg-indigo-500/30 text-indigo-200 border-indigo-400/50',
    purpose: 'Key geospatial metrics: 6 Primary Zones, 3 Auditoriums, 4 Dedicated Quantum Labs, 1 Innovation Pavilion.',
  },
  {
    id: 'section-03-campus-map-navigate-the-fest',
    orderNumber: '03',
    title: 'Campus Map / Navigate the Fest',
    debugBg: 'bg-[#064e3b]', // Deep Emerald Forest
    debugBorder: 'border-emerald-400',
    debugTextColor: 'text-emerald-100',
    tagColor: 'bg-emerald-500/30 text-emerald-200 border-emerald-400/50',
    purpose: 'One major section housing the campus map visualizer, interactive venue markers, and selected venue details.',
  },
  {
    id: 'section-04-venue-directory-all-locations',
    orderNumber: '04',
    title: 'Venue Directory / All Locations',
    debugBg: 'bg-[#0f172a]', // Deep Slate Navy
    debugBorder: 'border-sky-400',
    debugTextColor: 'text-sky-100',
    tagColor: 'bg-sky-500/30 text-sky-200 border-sky-400/50',
    purpose: 'One major section containing the directory cards and comprehensive listing for all fest facilities.',
  },
  {
    id: 'section-05-getting-around-before-you-arrive',
    orderNumber: '05',
    title: 'Getting Around / Before You Arrive',
    debugBg: 'bg-[#3b0764]', // Deep Violet Velvet
    debugBorder: 'border-purple-400',
    debugTextColor: 'text-purple-100',
    tagColor: 'bg-purple-500/30 text-purple-200 border-purple-400/50',
    purpose: 'One major section containing transit options, campus entry gates, parking coordinates, and accessibility access.',
  },
  {
    id: 'section-06-plan-your-visit-be-part-of-something-bigger',
    orderNumber: '06',
    title: 'Plan Your Visit / Be Part of Something Bigger',
    debugBg: 'bg-[#581c87]', // Deep Royal Purple
    debugBorder: 'border-fuchsia-400',
    debugTextColor: 'text-fuchsia-100',
    tagColor: 'bg-fuchsia-500/30 text-fuchsia-200 border-fuchsia-400/50',
    purpose: 'Travel checklist, institutional visit guidelines, accommodation tips, and Unstop registration CTA.',
  },
];

import { Footer } from '@/components/shared/Footer';

export default function VenuesPage() {
  return (
    <div className="w-full flex flex-col">
      {VENUES_SECTIONS.map((section) => {
        // Special structural content for section 03 (Campus Map / Navigate the Fest)
        if (section.id === 'section-03-campus-map-navigate-the-fest') {
          return (
            <section
              key={section.id}
              id={section.id}
              aria-label={section.title}
              className={`w-full min-h-[480px] py-14 px-4 sm:px-6 lg:px-8 border-b-4 ${section.debugBg} ${section.debugBorder} ${section.debugTextColor} flex flex-col items-center justify-center`}
            >
              <div className="w-full max-w-6xl mx-auto space-y-6">
                {/* Major section header */}
                <div className="border-2 border-dashed border-white/30 rounded-lg p-6 text-center space-y-3 bg-black/20">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <span
                      className={`inline-flex items-center px-3 py-1 text-xs font-mono font-semibold tracking-wider uppercase rounded-full border ${section.tagColor}`}
                    >
                      Section {section.orderNumber}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-mono uppercase rounded-full border border-white/20 bg-black/30 text-white/90">
                      One Major Section with 3 Structural Inner Areas
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide font-sans">
                    {section.orderNumber}. {section.title}
                  </h2>
                  <p className="text-sm max-w-2xl mx-auto text-white/80 font-mono">
                    {section.purpose}
                  </p>
                </div>

                {/* Internal structural layout for Map + Markers + Selected Details */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  {/* Structural Area: Campus Map + Location Markers */}
                  <div
                    id="area-03a-campus-map-and-markers"
                    className="lg:col-span-7 border-2 border-dashed border-emerald-300/60 rounded-lg p-6 bg-emerald-950/40 flex flex-col justify-between space-y-4 min-h-[280px]"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between border-b border-emerald-400/30 pb-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-emerald-200 font-bold">
                          Inner Area: Campus Map Canvas & Location Markers
                        </span>
                        <span className="text-xs font-mono bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-200">
                          Interactive Spatial Stage
                        </span>
                      </div>
                      <p className="text-xs font-mono text-emerald-100/75 leading-relaxed">
                        Visual map representation of the SRM University-AP campus showing spatial orientation, walking corridors, and pinpoints for key fest facilities.
                      </p>
                    </div>

                    {/* Placeholder marker pins */}
                    <div className="border border-dashed border-emerald-400/40 rounded p-3 bg-black/30 space-y-2">
                      <div className="text-[11px] font-mono text-emerald-300 font-semibold uppercase">
                        Venue / Location Markers Placeholder:
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                        <span className="px-2 py-1 bg-emerald-800/60 rounded border border-emerald-500/40 text-center">
                          📍 Main Auditorium
                        </span>
                        <span className="px-2 py-1 bg-emerald-800/60 rounded border border-emerald-500/40 text-center">
                          📍 Quantum Lab A
                        </span>
                        <span className="px-2 py-1 bg-emerald-800/60 rounded border border-emerald-500/40 text-center">
                          📍 Hackathon Hall
                        </span>
                        <span className="px-2 py-1 bg-emerald-800/60 rounded border border-emerald-500/40 text-center">
                          📍 Seminar Hall 2
                        </span>
                        <span className="px-2 py-1 bg-emerald-800/60 rounded border border-emerald-500/40 text-center">
                          📍 Dining Complex
                        </span>
                        <span className="px-2 py-1 bg-emerald-800/60 rounded border border-emerald-500/40 text-center">
                          📍 Welcome Desk
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Structural Area: Selected Venue Information / Details */}
                  <div
                    id="area-03b-selected-venue-details"
                    className="lg:col-span-5 border-2 border-dashed border-emerald-300/60 rounded-lg p-6 bg-emerald-950/40 flex flex-col justify-between space-y-4 min-h-[280px]"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-emerald-400/30 pb-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-emerald-200 font-bold">
                          Inner Area: Selected Venue Details
                        </span>
                        <span className="text-xs font-mono bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-200">
                          Active Focus
                        </span>
                      </div>
                      <h4 className="text-base font-bold font-sans text-white">
                        Dr. APJ Abdul Kalam Auditorium (Sample Focus)
                      </h4>
                      <div className="text-xs font-mono space-y-1 text-emerald-100/80">
                        <div>Location: Block A, Level 1</div>
                        <div>Capacity: 650 Attendees</div>
                        <div>Primary Track: Inauguration, Keynotes & Grand Finals</div>
                      </div>
                      <p className="text-xs font-mono text-emerald-100/70 leading-relaxed">
                        High-acoustics auditorium equipped with dual projector displays, dedicated press row, and stage-side quantum circuit telemetry monitoring screens.
                      </p>
                    </div>

                    <div className="text-[11px] font-mono text-emerald-300/60 pt-2 border-t border-emerald-400/20 flex justify-between">
                      <span>Area ID: #area-03b</span>
                      <span>Single Major Section Containment</span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-white/50 text-center pt-2">
                  Block ID: #{section.id} • Campus Map / Navigate the Fest Container
                </div>
              </div>
            </section>
          );
        }

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
              <span>Venues Page Skeleton</span>
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
