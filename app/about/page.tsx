import React from 'react';
import type { Metadata } from 'next';
import { ROUTE_RELEASE_CONFIG, isRouteLive } from '@/config/page-release';
import { ComingSoonPage } from '@/components/shared/ComingSoonPage';
import AboutPageContent from '@/components/pages/AboutPageContent';

const config = ROUTE_RELEASE_CONFIG['about'];

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function AboutPage() {
  if (isRouteLive('about')) {
    return <AboutPageContent />;
  }

  return (
    <ComingSoonPage
      pageTitle="About Page Coming Soon"
      sectionSubtitle="We're preparing the full Qiskit Fall Fest 2026 story, host details, event vision, and community information."
      categoryName="ABOUT"
    />
  );
}
