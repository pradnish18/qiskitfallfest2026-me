'use client';

import * as React from 'react';
import { ExperienceSection } from '@/components/pages/experience/ExperienceSection';
import { CONNECT_ITEMS } from '@/data/experience-events';

export function ConnectSection() {
  return (
    <ExperienceSection
      id="section-03-connect"
      sectionNumber="03"
      sectionTitle="CONNECT"
      sectionSubtitle="Community, interaction, networking, research mentorship & gala"
      items={CONNECT_ITEMS}
      prevSectionId="section-02-build"
      nextSectionId="experience-future-content"
      prevLabel="02 Build"
      nextLabel="Footer"
    />
  );
}
