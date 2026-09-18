import React from 'react';
import type { Metadata } from 'next';
import { ROUTE_RELEASE_CONFIG } from '@/config/page-release';
import { ComingSoonPage } from '@/components/shared/ComingSoonPage';

const config = ROUTE_RELEASE_CONFIG['accessibility'];

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function AccessibilityPage() {
  return (
    <ComingSoonPage
      pageTitle="Accessibility Statement"
      sectionSubtitle="Our commitment to physical and digital accessibility across all event venues and online resources."
      categoryName="LEGAL & POLICIES"
    />
  );
}
