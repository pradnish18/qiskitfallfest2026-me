import React from 'react';
import type { Metadata } from 'next';
import { ROUTE_RELEASE_CONFIG, isRouteLive } from '@/config/page-release';
import { ComingSoonPage } from '@/components/shared/ComingSoonPage';
import VenuesPageContent from '@/components/pages/VenuesPageContent';

const config = ROUTE_RELEASE_CONFIG['venues'];

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function VenuesPage() {
  if (isRouteLive('venues')) {
    return <VenuesPageContent />;
  }

  return (
    <ComingSoonPage
      pageTitle="Venues & Campus Map"
      sectionSubtitle="Campus auditorium coordinates, quantum laboratory locations, and transit guidelines at SRM University-AP are being prepared for release."
      categoryName="CAMPUS GEOGRAPHY"
    />
  );
}
