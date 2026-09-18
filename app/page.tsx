import { HomeHero } from '@/components/home/HomeHero';
import { ImpactStrip } from '@/components/home/ImpactStrip';
import { NextDecadeSection } from '@/components/home/NextDecadeSection';
import { EventHighlights } from '@/components/home/EventHighlights';
import { CountdownSection } from '@/components/home/CountdownSection';
import { HostAndEcosystemSection } from '@/components/home/HostAndEcosystemSection';
import { HostedAtSection } from '@/components/home/HostedAtSection';
import { ReadyToTakePartSection } from '@/components/home/ReadyToTakePartSection';
import { Footer } from '@/components/shared/Footer';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 01 Hero — Production Static Layout */}
      <HomeHero />

      {/* 02 Learn / Build / Connect / Create Impact — Production Strip */}
      <ImpactStrip />

      {/* 03 The Next Decade Together — Production Editorial Section */}
      <NextDecadeSection />

      {/* 04 Event Highlights — Production Cards Section */}
      <EventHighlights />

      {/* 05 Countdown to Online Phase — Production Countdown Strip */}
      <CountdownSection />

      {/* 06 Host & Ecosystem — Production Section */}
      <HostAndEcosystemSection />

      {/* 07 Hosted At SRM-AP — Production Section */}
      <HostedAtSection />

      {/* 08 Ready to Take Part? — Production Closing CTA Section */}
      <ReadyToTakePartSection />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}


