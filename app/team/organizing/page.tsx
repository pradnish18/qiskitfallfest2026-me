import React from 'react';
import type { Metadata } from 'next';
import { ROUTE_RELEASE_CONFIG, isRouteLive } from '@/config/page-release';
import { ComingSoonPage } from '@/components/shared/ComingSoonPage';
import OrganizingTeamContent from '@/components/pages/OrganizingTeamContent';

const config = ROUTE_RELEASE_CONFIG['team/organizing'];

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function OrganizingTeamPage() {
  if (isRouteLive('team/organizing')) {
    return <OrganizingTeamContent />;
  }

  return (
    <ComingSoonPage
      pageTitle="Organizing Team"
      sectionSubtitle="Detailed profiles of the organizing cells, committee leads, and faculty advisors for Qiskit Fall Fest 2026 will be published upon official roster confirmation."
      categoryName="ORGANIZING COMMITTEE"
    />
  );
}
