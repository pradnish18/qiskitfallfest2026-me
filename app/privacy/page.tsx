import React from 'react';
import type { Metadata } from 'next';
import { ROUTE_RELEASE_CONFIG, isRouteLive } from '@/config/page-release';
import { ComingSoonPage } from '@/components/shared/ComingSoonPage';

const config = ROUTE_RELEASE_CONFIG['privacy'];

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function PrivacyPage() {
  return (
    <ComingSoonPage
      pageTitle="Privacy Policy"
      sectionSubtitle="The official event privacy and participant data protection policies are being finalized for publication."
      categoryName="LEGAL & POLICIES"
    />
  );
}
