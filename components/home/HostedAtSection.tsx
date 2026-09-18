import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HOSTED_AT_ASSETS = {
  backgroundLight: '/HOME-07-HOSTED-AT-BACKGROUND-LIGHT.png',
  backgroundDark: '/HOME-07-HOSTED-AT-BACKGROUND-DARK.png',
};

export function HostedAtSection() {
  return (
    <section
      id="section-07-hosted-at"
      aria-labelledby="hosted-at-heading"
      className="
        relative isolate w-full overflow-hidden
        bg-[#F5F0EA] dark:bg-[#0D0909]
        transition-colors duration-300
      "
    >
      {/* =========================================================
          BACKGROUND ARTWORK LAYER (Embedded Campus Visuals)
      ========================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <Image
          src={HOSTED_AT_ASSETS.backgroundLight}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="
            object-cover
            object-[32%_center] sm:object-[42%_center] lg:object-center
            dark:hidden
          "
        />
        <Image
          src={HOSTED_AT_ASSETS.backgroundDark}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="
            hidden object-cover
            object-[32%_center] sm:object-[42%_center] lg:object-center
            dark:block
          "
        />

        {/* Subtle mobile overlay to protect right-side/bottom copy readability */}
        <div
          className="
            absolute inset-0 sm:hidden
            bg-gradient-to-t from-[#F5F0EA]/95 via-[#F5F0EA]/60 to-transparent
            dark:from-[#0D0909]/95 dark:via-[#0D0909]/60 dark:to-transparent
          "
        />
      </div>

      {/* =========================================================
          CONTENT CONTAINER (58% Campus Artwork / 42% Editorial Grid)
      ========================================================== */}
      <div
        className="
          relative z-10 w-full max-w-[1920px] mx-auto
          px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[70px] 2xl:px-[82px] min-[1920px]:px-[96px]
          py-10 sm:py-12 md:py-14
          lg:py-0 lg:h-[320px] xl:h-[340px] 2xl:h-[360px] min-[1920px]:h-[370px]
          flex flex-col justify-end
          lg:grid lg:grid-cols-[58%_42%] lg:items-center
        "
      >
        {/* Left Column Spacer for desktop (allows background campus visual to breathe) */}
        <div aria-hidden="true" className="hidden lg:block h-full w-full pointer-events-none" />

        {/* Right Editorial Block */}
        <div
          className="
            relative z-10 w-full max-w-[430px]
            lg:justify-self-start
            lg:pl-[clamp(28px,4vw,72px)]
          "
        >
          {/* Vertical Structural Marker (Desktop) */}
          <div
            aria-hidden="true"
            className="
              hidden lg:flex flex-col items-center
              absolute -left-3.5 xl:-left-4 2xl:-left-5 top-1 bottom-3 w-[1px]
              bg-[rgba(143,23,35,0.72)] dark:bg-[rgba(239,116,129,0.72)]
              pointer-events-none select-none
            "
          >
            <span className="w-[4px] h-[4px] rounded-full bg-[#8F1723] dark:bg-[#EF7481] -translate-y-1/2" />
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-[10px] mb-2 sm:mb-2.5">
            <span
              aria-hidden="true"
              className="w-[5px] h-[5px] rotate-45 shrink-0 bg-[#8F1723] dark:bg-[#EF7481]"
            />
            <span className="font-sans font-bold text-[11px] sm:text-[11.5px] tracking-[0.20em] uppercase text-[#8F1723] dark:text-[#EF7481]">
              HOSTED AT
            </span>
          </div>

          {/* Heading */}
          <h2
            id="hosted-at-heading"
            className="
              font-serif font-bold uppercase
              tracking-[-0.025em] leading-[0.98]
              text-[34px] sm:text-[38px] lg:text-[37px] xl:text-[41px] 2xl:text-[44px] min-[1600px]:text-[47px] min-[1920px]:text-[50px]
              text-[#67121B] dark:text-[#FFF1EE]
            "
          >
            <span className="block">SRM UNIVERSITY-AP</span>
            <span className="block mt-0.5">AMARAVATI</span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-[14px] sm:mt-[16px] lg:mt-[17px]
              max-w-[390px]
              font-sans font-normal
              text-[13px] sm:text-[13.5px] lg:text-[13px] xl:text-[14px] 2xl:text-[14.5px]
              leading-[1.48]
              text-[#453D3A] dark:text-[#DDD3D0]
            "
          >
            A world-class campus, a global stage. Experience innovation, collaboration, and community at the heart of Amaravati.
          </p>

          {/* CTA Button */}
          <div className="mt-[18px] sm:mt-[20px] lg:mt-[21px]">
            <Link
              href="/venues"
              data-cursor="cta"
              aria-label="Explore Venues"
              className="
                group inline-flex items-center justify-center gap-2.5
                h-[46px] sm:h-[48px] min-w-[160px] sm:min-w-[164px]
                px-[20px] sm:px-[22px]
                rounded-[4px]
                bg-[#8F1723] text-[#FFF7F4]
                border border-[#8F1723] dark:border-[rgba(240,116,129,0.58)]
                font-sans font-semibold text-[12.5px] tracking-[0.03em]
                transition-all duration-190 ease-out
                hover:bg-[#A51D2B] hover:-translate-y-[1px]
                hover:shadow-[0_8px_22px_rgba(91,12,22,0.16)]
                dark:hover:shadow-[0_8px_22px_rgba(239,116,129,0.22)]
              "
            >
              <span>Explore Venues</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-190 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
