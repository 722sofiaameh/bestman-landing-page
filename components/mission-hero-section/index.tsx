"use client";

import { useEffect, useRef } from "react";

export const MissionHeroSection = () => {
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
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-[1200px] w-full">
                <span
                    data-animate
                    className="text-sm font-semibold  text-white/80 mb-7"
                >
                    Our mission
                </span>

                <p
                    data-animate
                    className="text-5xl md:text-5xl lg:text-[56px] text-center font-bold text-white leading-tight tracking-tight mb-7"
                >
                    Committed to Engineering Excellence and Operational Reliability.
                </p>

                <p
                    data-animate
                    className="text-base text-white text-center  leading-relaxed "
                >
                    We are committed to delivering integrated valve and engineering solutions driven by safety, precision, and international standards. Every project is an opportunity to enhance performance and ensure long-term operational success.
                </p>
            </div>
        </section>
    );
};
