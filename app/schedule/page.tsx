import React from 'react';
import type { Metadata } from 'next';
import { ROUTE_RELEASE_CONFIG, isRouteLive } from '@/config/page-release';
import { ComingSoonPage } from '@/components/shared/ComingSoonPage';
import SchedulePageContent from '@/components/pages/SchedulePageContent';

const config = ROUTE_RELEASE_CONFIG['schedule'];

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function SchedulePage() {
  if (isRouteLive('schedule')) {
    return <SchedulePageContent />;
  }

  return (
    <ComingSoonPage
      pageTitle="Schedule"
      sectionSubtitle="The multi-day itinerary, keynote schedule, technical workshop tracks, and hackathon milestones will be published once officially finalized."
      categoryName="EVENT TIMELINE"
    />
  );
}
