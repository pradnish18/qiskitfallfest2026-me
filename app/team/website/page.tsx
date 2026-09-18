import React from 'react';
import type { Metadata } from 'next';
import { ROUTE_RELEASE_CONFIG, isRouteLive } from '@/config/page-release';
import { ComingSoonPage } from '@/components/shared/ComingSoonPage';
import WebsiteTeamContent from '@/components/pages/WebsiteTeamContent';

const config = ROUTE_RELEASE_CONFIG['team/website'];

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function WebsiteTeamPage() {
  if (isRouteLive('team/website')) {
    return <WebsiteTeamContent />;
  }

  return (
    <ComingSoonPage
      pageTitle="Website Team"
      sectionSubtitle="The design and engineering contributors behind the Qiskit Fall Fest 2026 digital experience."
      categoryName="DIGITAL PLATFORM"
    />
  );
}
