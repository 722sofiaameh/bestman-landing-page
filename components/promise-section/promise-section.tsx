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
    <section className="relative mb-20 w-full bg-[#1180C5] overflow-hidden">
     

      <div className="relative z-10  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
        {/* Left: Text content */}
        <div className="flex flex-col justify-center py-16 px-4 md:px-8 lg:px-[120px] lg:pr-16">
          {/* Eyebrow */}
          <p className="text-white/75 text-sm font-semibold  mb-6">
            Our promise to you
          </p>

          {/* Headline */}
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-10">
            We are committed to ensuring that every service we deliver meets the{" "}
            <span className="text-white/50">
              highest standards of quality, safety, and performance.
            </span>
          </h2>

          {/* Promise items */}
          <div className="flex flex-col gap-7">
            {promises.map(({ id, title, description }) => (
              <div key={id}>
                <h3 className="text-white text-xl font-bold mb-1.5">{title}</h3>
                <p className="text-white/75 text-base leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full min-h-[420px] p-20 lg:min-h-0">
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
