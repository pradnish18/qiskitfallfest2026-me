'use client';

import * as React from 'react';
import { HeroCarousel } from '@/components/ui/hero-carousel';
import { ExperienceHeroItem } from '@/data/experience-events';

export interface ExperienceSectionProps {
  id: string;
  sectionNumber: string;
  sectionTitle: string;
  sectionSubtitle?: string;
  items: ExperienceHeroItem[];
  prevSectionId?: string;
  nextSectionId?: string;
  prevLabel?: string;
  nextLabel?: string;
}

/**
 * Scroll-locked, viewport-pinned event showcase section.
 *
 * 1. Fits flush below the sticky navbar so all controls, filmstrip cards,
 *    descriptions, and "Register" CTAs are 100% visible on a single screen.
 * 2. Flush edge-to-edge layout: Rectangular full-width boundaries eliminate any
 *    corner gaps or color mismatches between sections.
 * 3. Elevation & layering: With z-20 and an elevated top shadow, it slides smoothly
 *    over the light middle divider during scroll.
 * 4. Once docked below the navbar, it locks in place; continued scrolling scrubs
 *    smoothly across the sequence of events.
 * 5. After the final event, the lock releases naturally into the next chapter gap.
 */
export function ExperienceSection({
  id,
  sectionNumber,
  sectionTitle,
  items,
  prevSectionId,
  nextSectionId,
  prevLabel = 'Prev',
  nextLabel = 'Next',
}: ExperienceSectionProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const isManualNavRef = React.useRef(false);

  // Measure top offset dynamically based on responsive Navbar height:
  // mobile (<640px) = 78px, sm/md/lg (640-1279px) = 84px, xl (>=1280px) = 90px
  const getNavbarOffset = React.useCallback(() => {
    if (typeof window === 'undefined') return 84;
    if (window.innerWidth >= 1280) return 90;
    if (window.innerWidth >= 640) return 84;
    return 78;
  }, []);

  // Update card index smoothly as user scrolls through the pinned container
  React.useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!containerRef.current || isManualNavRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const topOffset = getNavbarOffset();
      const stickyHeight = window.innerHeight - topOffset;
      const containerHeight = rect.height;
      const maxScroll = containerHeight - stickyHeight;

      if (maxScroll <= 0) return;

      // Distance the container top has traveled past the navbar pinning line
      const scrolled = topOffset - rect.top;

      if (scrolled <= 0) {
        setCurrentIndex(0);
        return;
      }

      if (scrolled >= maxScroll) {
        setCurrentIndex(items.length - 1);
        return;
      }

      const progress = scrolled / maxScroll; // strictly 0 to 1
      const targetIndex = Math.min(
        items.length - 1,
        Math.floor(progress * items.length)
      );

      setCurrentIndex(targetIndex);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [items.length, getNavbarOffset]);

  // Navigate directly to a specific card (via click or button) and sync scroll position
  const handleSelectIndex = React.useCallback(
    (targetIdx: number) => {
      if (!containerRef.current || targetIdx < 0 || targetIdx >= items.length) {
        return;
      }
      isManualNavRef.current = true;
      setCurrentIndex(targetIdx);

      const topOffset = getNavbarOffset();
      const rect = containerRef.current.getBoundingClientRect();
      const containerTopInDoc = window.scrollY + rect.top;
      const stickyHeight = window.innerHeight - topOffset;
      const maxScroll = containerRef.current.offsetHeight - stickyHeight;

      if (maxScroll > 0) {
        const targetProgress = (targetIdx + 0.5) / items.length;
        const targetScrollY =
          containerTopInDoc - topOffset + targetProgress * maxScroll;

        window.scrollTo({
          top: targetScrollY,
          behavior: 'smooth',
        });
      }

      window.setTimeout(() => {
        isManualNavRef.current = false;
      }, 650);
    },
    [getNavbarOffset, items.length]
  );

  const handleBack = React.useCallback(() => {
    if (currentIndex > 0) {
      handleSelectIndex(currentIndex - 1);
    } else if (prevSectionId) {
      const prevEl = document.getElementById(prevSectionId);
      if (prevEl) {
        prevEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [currentIndex, handleSelectIndex, prevSectionId]);

  const handleNext = React.useCallback(() => {
    if (currentIndex < items.length - 1) {
      handleSelectIndex(currentIndex + 1);
    } else if (nextSectionId) {
      const nextEl = document.getElementById(nextSectionId);
      if (nextEl) {
        nextEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [currentIndex, handleSelectIndex, items.length, nextSectionId]);

  // Height formula: 100vh base view + 75vh scroll distance per additional card
  // For 5 cards, total height is 100vh + 4 * 75vh = 400vh
  const scrollContainerHeight = `${100 + (items.length - 1) * 75}vh`;

  return (
    <div
      ref={containerRef}
      id={`${id}-container`}
      className="relative z-20 w-full"
      style={{ height: scrollContainerHeight }}
    >
      {/* Viewport-locked sticky stage: flush edge-to-edge layout with zero corner color gaps */}
      <section
        id={id}
        aria-label={`${sectionNumber} — ${sectionTitle}`}
        className="sticky top-[78px] sm:top-[84px] xl:top-[90px] w-full h-[calc(100vh-78px)] sm:h-[calc(100vh-84px)] xl:h-[calc(100vh-90px)] overflow-hidden bg-[#16171B] border-t border-white/15 border-b border-white/10 shadow-[0_-16px_36px_rgba(0,0,0,0.35)]"
      >
        <HeroCarousel
          items={items}
          index={currentIndex}
          onIndexChange={handleSelectIndex}
          brand={
            <div className="flex items-center gap-2 sm:gap-2.5 font-sans tracking-[0.14em] text-xs sm:text-sm text-[#F5F3F0]">
              <span className="text-[#B08D57] font-semibold">{sectionNumber}</span>
              <span className="text-[#F5F3F0]/40 font-light">—</span>
              <span className="font-semibold text-[#F5F3F0] uppercase tracking-wider">{sectionTitle}</span>
            </div>
          }
          onBack={prevSectionId || currentIndex > 0 ? handleBack : undefined}
          backLabel={currentIndex > 0 ? 'Prev Event' : prevLabel}
          onNext={nextSectionId || currentIndex < items.length - 1 ? handleNext : undefined}
          nextLabel={currentIndex < items.length - 1 ? 'Next Event' : nextLabel}
        />
      </section>
    </div>
  );
}
