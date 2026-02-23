"use client";

import { JSX } from "react";

const principles = [
  {
    id: 1,
    title: "Precision & Technical Excellence",
    description:
      "We apply advanced equipment, skilled engineering expertise, and proven methodologies to deliver consistent, high-quality results.",
  },
  {
    id: 2,
    title: "Innovation & Continuous Improvement",
    description:
      "We embrace modern technologies and industry best practices to enhance efficiency and performance.",
  },
  {
    id: 3,
    title: "Safety–First Operations",
    description:
      "We maintain strict health, safety, and environmental compliance across all operations, ensuring zero-compromise execution.",
  },
  {
    id: 4,
    title: "Client Partnership",
    description:
      "We work closely with our clients to understand operational challenges and deliver tailored, cost-effective solutions.",
  },
];

export const PrinciplesSection = (): JSX.Element => {
  return (
    <section className="relative w-full mb-20 bg-[#1180C5] py-[120px] px-4 md:px-8 lg:px-[120px] overflow-hidden">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white/80 text-base font-semibold mb-4">
            How we work
          </p>
          <h2 className="text-white text-3xl lg:whitespace-nowrap md:text-4xl lg:text-5xl font-bold leading-tight  mx-auto">
            The principles that drive our engineering solutions.
          </h2>
        </div>

        {/* 3-column grid: card | image | card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-stretch">
          {/* Left column — 2 cards stacked */}
          <div className="flex flex-col gap-8">
            {/* Card 1 */}
            <div className="flex-1 bg-[#0C6E8A] border-b-2 border-[#005872] p-8">
              <h3 className="text-white text-2xl font-bold mb-4 leading-snug">
                {principles[0].title}
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                {principles[0].description}
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex-1 bg-[#0C6E8A] border-b-2 border-[#005872] p-8">
              <h3 className="text-white text-2xl font-bold mb-4 leading-snug">
                {principles[2].title}
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                {principles[2].description}
              </p>
            </div>
          </div>

          {/* Center image */}
          <div className="w-full lg:w-[360px] xl:w-[420px]  overflow-hidden">
            <img
              src="/Builder.svg"
              alt="Engineer at work"
              className="w-full h-full object-cover"
              style={{ minHeight: "420px" }}
            />
          </div>

          {/* Right column — 2 cards stacked */}
          <div className="flex flex-col gap-8">
            {/* Card 2 */}
            <div className="flex-1 border-b-2 border-[#005872] bg-[#0C6E8A] p-8">
              <h3 className="text-white text-xl font-bold mb-4 leading-snug">
                {principles[1].title}
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                {principles[1].description}
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex-1 bg-[#0C6E8A] border-b-2 border-[#005872] p-8">
              <h3 className="text-white text-2xl font-bold mb-4 leading-snug">
                {principles[3].title}
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                {principles[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
