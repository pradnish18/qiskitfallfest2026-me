'use client';

import * as React from 'react';
import { ExperienceSection } from '@/components/pages/experience/ExperienceSection';
import { BUILD_ITEMS } from '@/data/experience-events';

export function BuildSection() {
  return (
    <ExperienceSection
      id="section-02-build"
      sectionNumber="02"
      sectionTitle="BUILD"
      sectionSubtitle="Hands-on creation, hackathons, open-source extensions & hardware steering"
      items={BUILD_ITEMS}
      prevSectionId="section-01-learn"
      nextSectionId="section-03-connect"
      prevLabel="01 Learn"
      nextLabel="03 Connect"
    />
  );
}
