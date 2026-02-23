"use client";

import { JSX } from "react";

const promises = [
  {
    id: 1,
    title: "Tailored Engineering Solutions",
    description:
      "Every project is approached with technical precision and customized execution to meet operational requirements.",
  },
  {
    id: 2,
    title: "Transparent Communication",
    description:
      "We maintain clear communication throughout every project phase, ensuring alignment and accountability.",
  },
  {
    id: 3,
    title: "End-to-End Lifecycle Support",
    description:
      "From procurement and commissioning to testing, maintenance, and refurbishment, we provide complete valve lifecycle solutions.",
  },
];

export const PromiseSection = (): JSX.Element => {
  return (
    <section className="relative mb-12 sm:mb-16 lg:mb-20 w-full bg-[#1180C5] overflow-hidden">
      <div className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
        {/* Left: Text content */}
        <div className="flex flex-col justify-center py-10 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[120px] lg:pr-16">
          {/* Eyebrow */}
          <p className="text-white/75 text-xs sm:text-sm font-semibold mb-4 sm:mb-5 lg:mb-6">
            Our promise to you
          </p>

          {/* Headline */}
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-7 sm:mb-8 lg:mb-10">
            We are committed to ensuring that every service we deliver meets the{" "}
            <span className="text-white/50">
              highest standards of quality, safety, and performance.
            </span>
          </h2>

          {/* Promise items */}
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7">
            {promises.map(({ id, title, description }) => (
              <div key={id}>
                <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-1.5">
                  {title}
                </h3>
                <p className="text-white/75 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full min-h-[260px] sm:min-h-[340px] lg:min-h-0 p-6 sm:p-10 lg:p-20">
          <img
            src="/Container (5).svg"
            alt="Engineers reviewing plans on site"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};