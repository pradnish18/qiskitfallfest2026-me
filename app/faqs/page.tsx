import React from 'react';
import type { Metadata } from 'next';
import { ROUTE_RELEASE_CONFIG, isRouteLive } from '@/config/page-release';
import { ComingSoonPage } from '@/components/shared/ComingSoonPage';
import FAQsPageContent from '@/components/pages/FAQsPageContent';

const config = ROUTE_RELEASE_CONFIG['faqs'];

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function FAQsPage() {
  if (isRouteLive('faqs')) {
    return <FAQsPageContent />;
  }

  return (
    <ComingSoonPage
      pageTitle="Frequently Asked Questions"
      sectionSubtitle="Detailed answers regarding eligibility, hackathon tracks, quantum hardware quotas, and campus accommodation will be made live shortly."
      categoryName="EVENT INQUIRIES"
    />
  );
}
