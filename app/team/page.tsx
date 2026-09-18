import React from 'react';
import type { Metadata } from 'next';
import { ROUTE_RELEASE_CONFIG, isRouteLive } from '@/config/page-release';
import { ComingSoonPage } from '@/components/shared/ComingSoonPage';
import TeamPageContent from '@/components/pages/TeamPageContent';

const config = ROUTE_RELEASE_CONFIG['team'];

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function TeamPage() {
  if (isRouteLive('team')) {
    return <TeamPageContent />;
  }

  return (
    <ComingSoonPage
      pageTitle="Team"
      sectionSubtitle="The student committees, technical leadership, and organizational tracks driving Qiskit Fall Fest 2026 will be unveiled shortly."
      categoryName="EVENT LEADERSHIP"
    />
  );
}
