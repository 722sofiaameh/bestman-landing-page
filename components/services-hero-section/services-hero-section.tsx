"use client";

import { useEffect, useRef } from "react";

export const ServicesHeroSection = () => {
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
      className="relative w-full min-h-[340px] flex items-center justify-center overflow-hidden bg-[#1180C5]"
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-2xl w-full">
        <span
          data-animate
          className="text-xs font-semibold tracking-[0.15em] uppercase text-white/80 mb-7"
        >
          Services
        </span>

        <h1
          data-animate
          className="text-5xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight tracking-tight mb-7"
        >
          Comprehensive Engineering Solutions
        </h1>

        <p
          data-animate
          className="text-sm text-white leading-relaxed max-w-md"
        >
          From valve procurement to maintenance, we deliver integrated engineering services that meet the highest international standards.
        </p>
      </div>
    </section>
  );
};
