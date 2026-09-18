import React from 'react';
import type { Metadata } from 'next';
import { ROUTE_RELEASE_CONFIG, isRouteLive } from '@/config/page-release';
import { ComingSoonPage } from '@/components/shared/ComingSoonPage';
import ExperiencePageContent from '@/components/pages/ExperiencePageContent';

const config = ROUTE_RELEASE_CONFIG['experience'];

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function ExperiencePage() {
  if (isRouteLive('experience')) {
    return <ExperiencePageContent />;
  }

  return (
    <ComingSoonPage
      pageTitle="Experience"
      sectionSubtitle="The interactive experience, quantum computing masterclasses, and hands-on tracks are being prepared for Qiskit Fall Fest 2026."
      categoryName="EVENT EXPERIENCE"
    />
  );
}
