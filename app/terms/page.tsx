import React from 'react';
import type { Metadata } from 'next';
import { ROUTE_RELEASE_CONFIG } from '@/config/page-release';
import { ComingSoonPage } from '@/components/shared/ComingSoonPage';

const config = ROUTE_RELEASE_CONFIG['terms'];

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function TermsPage() {
  return (
    <ComingSoonPage
      pageTitle="Terms of Service"
      sectionSubtitle="Event participation terms, code of conduct, and attendee guidelines are being prepared for Qiskit Fall Fest 2026."
      categoryName="LEGAL & POLICIES"
    />
  );
}
