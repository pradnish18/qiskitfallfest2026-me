'use client';

import * as React from 'react';

interface LoadScreenProps {
  onComplete?: () => void;
}

/**
 * IMPORTANT:
 * Change these paths to match the final paths inside /public.
 */
const CRITICAL_ASSETS = [
  '/images/home/hero/HOME-01-HERO-BACKGROUND-DAR.png',
  '/images/home/hero/HOME-01-HERO-BACKGROUND-LIGHT.png',

  '/images/home/hero/HOME-01-HERO-QUANTUM-COMPUTER-DARK.png',
  '/images/home/hero/HOME-01-HERO-QUANTUM-COMPUTER-LIGHT.png',

  '/images/home/hero/HOME-01-HERO-GLOBE-LEFT-DARK.png',
  '/images/home/hero/HOME-01-HERO-GLOBE-LEFT-LIGHT.png',

  '/images/home/hero/HOME-01-HERO-GLOBE-RIGHT-DARK.png',
  '/images/home/hero/HOME-01-HERO-GLOBE-RIGHT-LIGHT.png',
];

export function LoadScreen({
  onComplete,
}: LoadScreenProps) {
  const [isVisible, setIsVisible] =
    React.useState(true);

  const [isLeaving, setIsLeaving] =
    React.useState(false);

  const [isReady, setIsReady] =
    React.useState(false);

  const [progress, setProgress] =
    React.useState(0);

  const onCompleteRef = React.useRef(onComplete);
  React.useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  React.useEffect(() => {
    if (!isVisible) return;

    /*
     * Prevent the user from scrolling the hero behind
     * the loader while the opening sequence is active.
     */
    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow =
        previousOverflow || '';
    };
  }, [isVisible]);

  React.useEffect(() => {
    const MINIMUM_VISIBLE_TIME = 2100;
    const HARD_TIMEOUT = 3400;
    const FINAL_HOLD = 320;
    const FADE_DURATION = 520;

    const startedAt = performance.now();

    let isCancelled = false;
    let loadedCount = 0;
    const activeTimers: number[] = [];

    const updateProgress = () => {
      loadedCount += 1;
    };

    const preloadPromises =
      CRITICAL_ASSETS.map(
        (src) =>
          new Promise<void>((resolve) => {
            const image = new Image();

            let finished = false;
            const finish = () => {
              if (finished) return;
              finished = true;
              updateProgress();
              resolve();
            };

            image.onload = finish;
            image.onerror = finish;
            image.src = src;

            if (image.complete) {
              finish();
            }
          })
      );

    const waitForMinimum =
      new Promise<void>((resolve) => {
        const elapsed =
          performance.now() - startedAt;

        const timer = window.setTimeout(
          resolve,
          Math.max(
            0,
            MINIMUM_VISIBLE_TIME -
              elapsed
          )
        );
        activeTimers.push(timer);
      });

    const normalCompletion =
      Promise.all([
        Promise.all(preloadPromises),
        waitForMinimum,
      ]);

    const hardTimeout =
      new Promise<void>((resolve) => {
        const timer = window.setTimeout(
          resolve,
          HARD_TIMEOUT
        );
        activeTimers.push(timer);
      });

    // Smooth continuous progress bar interpolation (0% -> 100%)
    let currentDisplay = 0;
    let animFrameId: number;

    const tickProgress = () => {
      const elapsed = performance.now() - startedAt;
      const timeRatio = Math.min(0.95, elapsed / MINIMUM_VISIBLE_TIME);
      const assetRatio = CRITICAL_ASSETS.length > 0
        ? loadedCount / CRITICAL_ASSETS.length
        : 1;

      // Blend elapsed animation time and asset preload ratio
      const target = Math.max(timeRatio * 0.7 + assetRatio * 0.3, timeRatio);
      currentDisplay += (target - currentDisplay) * 0.15;

      if (!isCancelled) {
        setProgress(Math.min(0.96, Math.max(0.04, currentDisplay)));
        animFrameId = requestAnimationFrame(tickProgress);
      }
    };
    animFrameId = requestAnimationFrame(tickProgress);

    Promise.race([
      normalCompletion,
      hardTimeout,
    ]).then(() => {
      if (isCancelled) return;

      cancelAnimationFrame(animFrameId);
      setProgress(1);
      setIsReady(true);

      const holdTimer = window.setTimeout(() => {
        if (isCancelled) return;

        setIsLeaving(true);

        const fadeTimer = window.setTimeout(() => {
          if (isCancelled) return;

          setIsVisible(false);
          document.body.style.overflow = '';
          onCompleteRef.current?.();
        }, FADE_DURATION);
        activeTimers.push(fadeTimer);
      }, FINAL_HOLD);
      activeTimers.push(holdTimer);
    });

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animFrameId);
      activeTimers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className={`
        fixed inset-0 z-[99999]
        flex items-center justify-center
        overflow-hidden
        bg-[#120506]

        transition-opacity
        duration-[520ms]
        ease-[cubic-bezier(.22,1,.36,1)]

        ${
          isLeaving
            ? 'pointer-events-none opacity-0'
            : 'pointer-events-auto opacity-100'
        }
      `}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loaderBloom {
          0%,
          100% {
            transform: scale(0.96);
            opacity: 0.2;
          }

          50% {
            transform: scale(1.08);
            opacity: 0.34;
          }
        }

        @keyframes loaderOpeningLine {
          0% {
            transform: scaleX(0);
            opacity: 0;
            filter: brightness(1.8);
          }

          18% {
            opacity: 1;
          }

          62% {
            transform: scaleX(0.92);
            opacity: 0.9;
          }

          100% {
            transform: scaleX(1.08);
            opacity: 0;
          }
        }

        @keyframes loaderReveal {
          0% {
            opacity: 0;
            transform: translateY(16px);
            filter: blur(5px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes loaderFinalSweep {
          0% {
            transform:
              translateX(-150%)
              skewX(-16deg);

            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 0.8;
          }

          100% {
            transform:
              translateX(150%)
              skewX(-16deg);

            opacity: 0;
          }
        }

        .loader-line-1 {
          opacity: 0;

          animation:
            loaderReveal
            760ms
            cubic-bezier(.22,1,.36,1)
            520ms
            forwards;
        }

        .loader-line-2 {
          opacity: 0;

          animation:
            loaderReveal
            760ms
            cubic-bezier(.22,1,.36,1)
            820ms
            forwards;
        }

        .loader-line-3 {
          opacity: 0;

          animation:
            loaderReveal
            700ms
            cubic-bezier(.22,1,.36,1)
            1080ms
            forwards;
        }

        .loader-line-4 {
          opacity: 0;

          animation:
            loaderReveal
            700ms
            cubic-bezier(.22,1,.36,1)
            1280ms
            forwards;
        }

        .loader-ready-sweep {
          animation:
            loaderFinalSweep
            900ms
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        @media (
          prefers-reduced-motion:
          reduce
        ) {
          .loader-line-1,
          .loader-line-2,
          .loader-line-3,
          .loader-line-4 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }

          .loader-ready-sweep {
            display: none;
          }
        }
      ` }} />

      {/* Base atmosphere */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,rgba(113,22,31,.42)_0%,rgba(55,9,14,.30)_35%,rgba(18,5,6,.97)_74%,#120506_100%)]
        "
      />

      {/* Secondary atmospheric bloom */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2 top-1/2

          h-[42vh]
          w-[72vw]
          max-h-[470px]
          max-w-[900px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-[50%]
          bg-[#721621]/25

          blur-[90px]
          sm:blur-[120px]
        "
        style={{
          animation:
            'loaderBloom 4.5s ease-in-out infinite',
        }}
      />

      {/* Opening energy line */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2 top-1/2

          z-10

          w-[min(76vw,980px)]

          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <div
          className="
            relative
            h-8
            origin-center
          "
          style={{
            animation:
              'loaderOpeningLine 850ms cubic-bezier(.22,1,.36,1) 180ms forwards',

            opacity: 0,
          }}
        >
          <div
            className="
              absolute
              left-0 top-1/2

              h-px w-full
              -translate-y-1/2

              bg-gradient-to-r
              from-transparent
              via-[#D1AD70]
              to-transparent
            "
          />

          <div
            className="
              absolute
              left-0 top-1/2

              h-[4px] w-full
              -translate-y-1/2

              bg-gradient-to-r
              from-transparent
              via-[#A72435]/70
              to-transparent

              blur-[3px]
            "
          />
        </div>
      </div>

      {/* Main typography lockup */}
      <div
        className="
          relative z-20

          flex w-full
          flex-col
          items-center

          px-5

          text-center
        "
      >
        {/* Main event title */}
        <div
          className="
            relative
            overflow-hidden
            px-2
          "
        >
          <h1
            className="
              loader-line-1
              font-serif
              whitespace-nowrap
              text-center
              text-[clamp(1.75rem,5.6vw,6.2rem)]
              font-bold
              leading-[0.92]
              tracking-[-0.04em]
              text-[#F4EFED]
            "
          >
            <span className="text-[#C64A59]">QISKIT</span> FALL FEST{' '}
            <span className="ml-[0.14em] text-[#D9CFCC]">2026</span>
          </h1>

          {/* Final highlight sweep only
              appears when assets are ready */}
          {isReady && (
            <div
              className="
                loader-ready-sweep
                pointer-events-none
                absolute
                inset-y-[-30%]
                w-[32%]
                bg-gradient-to-r
                from-transparent
                via-[#F1C891]/25
                to-transparent
                blur-[8px]
              "
            />
          )}
        </div>

        {/* Host */}
        <div
          className="
            loader-line-3
            mt-[20px] sm:mt-[24px] md:mt-[26px]
            text-[clamp(.67rem,.85vw,.88rem)]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#ECE5E2]
          "
        >
          SRM University-AP
          <span
            className="
              mx-2
              text-[#B8ABA7]/70
            "
          >
            ×
          </span>
          IBM Quantum
        </div>

        {/* Theme line */}
        <div
          className="
            loader-line-4
            mt-2.5 sm:mt-3
            text-[clamp(.62rem,.75vw,.8rem)]
            font-medium
            uppercase
            tracking-[0.22em]
            text-[#C6A163]
          "
        >
          A Decade of Quantum on Cloud
        </div>
      </div>

      {/* Actual preload progress */}
      <div
        className="
          absolute
          bottom-9
          sm:bottom-11

          left-1/2
          z-30

          h-px
          w-[min(58vw,310px)]

          -translate-x-1/2

          overflow-hidden

          bg-white/10
        "
      >
        <div
          className="
            h-full
            origin-left

            bg-gradient-to-r
            from-[#77151F]
            via-[#D25A68]
            to-[#C9A261]

            shadow-[0_0_8px_rgba(201,162,97,.5)]

            transition-transform
            duration-300
            ease-out
          "
          style={{
            transform: `scaleX(${progress})`,
          }}
        />
      </div>
    </div>
  );
}