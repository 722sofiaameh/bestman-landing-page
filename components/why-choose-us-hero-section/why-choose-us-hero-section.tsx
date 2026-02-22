"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      className="relative w-full min-h-[500px] flex items-center justify-center overflow-visible bg-[#1180C5] px-4 md:px-8 lg:px-[120px] pt-20 pb-20"
      style={{ marginBottom: 0 }}
    >
      {/* Dot grid texture */}
     

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-0">
        {/* Left side - Text content */}
        <div className="flex flex-col items-start gap-6 flex-1">
          <span
            data-animate
            className="text-sm font-semibold text-white/80"
          >
            Why choose us
          </span>

          <h1
            data-animate
            className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight tracking-tight w-[766px]"
          >
            The Bestman Difference: Precision, Safety, and Performance.
          </h1>

          <p
            data-animate
            className="text-base text-white leading-relaxed w-[530px]"
          >
            With decades of industry experience, global OEM partnerships, and a safety-first culture, we deliver integrated valve and engineering solutions that meet the highest international standards.
          </p>
        </div>

        {/* Right side - Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 lg:items-end">
          <Link href="/about">
            <button
              data-animate
              className="flex items-center whitespace-nowrap gap-2 bg-white text-[#1180C5] font-semibold px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
            >
              <span>About Bestman</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/mission">
            <button
              data-animate
              className="flex items-center whitespace-nowrap gap-2 border-2 border-white text-white bg-transparent font-semibold px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              <span>Our mission</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
