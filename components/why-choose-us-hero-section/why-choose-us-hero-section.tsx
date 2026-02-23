"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export const WhyChooseUsHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>("[data-animate]");
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
      setTimeout(() => {
        item.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 150 * i + 100);
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[320px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center justify-center overflow-hidden bg-[#1180C5] px-4 sm:px-6 md:px-8 lg:px-[120px] pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-10 sm:pb-12 md:pb-16 lg:pb-20"
      style={{ marginBottom: 0 }}
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8 mb-0">
        {/* Left side - Text content */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 flex-1 min-w-0">
          <span
            data-animate
            className="text-[10px] sm:text-xs lg:text-sm font-semibold text-white"
          >
            Why choose us
          </span>

          <h1
            data-animate
            className="text-xl sm:text-2xl md:text-4xl lg:text-[56px] font-bold text-white leading-tight tracking-tight w-full lg:w-[966px] max-w-full"
          >
            <span className="lg:whitespace-nowrap">The Bestman Difference: Precision,</span> Safety, and Performance.
          </h1>

          <p
            data-animate
            className="text-xs sm:text-sm lg:text-base text-white leading-relaxed w-full lg:w-[530px] max-w-full"
          >
            With decades of industry experience, global OEM partnerships, and a safety-first culture, we deliver integrated valve and engineering solutions that meet the highest international standards.
          </p>
        </div>

        {/* Right side - Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:items-end shrink-0 w-full sm:w-auto">
          <Link href="/about" className="w-full sm:w-[180px]">
            <button
              data-animate
              className="flex cursor-pointer items-center justify-center gap-2 bg-white text-[#1180C5] font-semibold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-none hover:opacity-90 transition-opacity w-full h-[44px]"
            >
              <span className="whitespace-nowrap">About Bestman</span>
              <img src="/arrow-right 2.svg" alt="Arrow right" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </button>
          </Link>
          <Link href="/mission" className="w-full sm:w-[180px]">
            <button
              data-animate
              className="flex cursor-pointer items-center justify-center gap-2 border-2 border-white text-white bg-transparent font-semibold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-none hover:bg-white/10 transition-colors w-full h-[44px]"
            >
              <span className="whitespace-nowrap">Our mission</span>
              <img src="/arrow-right.svg" alt="Arrow right" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};