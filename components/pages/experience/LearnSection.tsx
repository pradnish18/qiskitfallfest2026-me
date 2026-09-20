'use client';

import * as React from 'react';
import { ExperienceSection } from '@/components/pages/experience/ExperienceSection';
import { LEARN_ITEMS } from '@/data/experience-events';

export function LearnSection() {
  return (
    <ExperienceSection
      id="section-01-learn"
      sectionNumber="01"
      sectionTitle="LEARN"
      sectionSubtitle="Educational and knowledge-oriented quantum event experiences"
      items={LEARN_ITEMS}
      prevSectionId="experience-ecosystem-strip"
      nextSectionId="section-02-build"
      prevLabel="Ecosystem"
      nextLabel="02 Build"
    />
  );
}
