"use client";

import Link from "next/link";
import { JSX } from "react";

const cards = [
  {
    id: 1,
    icon: "/List.svg",
    title: "Services",
    description:
      "Comprehensive valve testing, maintenance, calibration, and engineering solutions.",
    linkLabel: "Explore all services",
    href: "/services",
  },
  {
    id: 2,
    icon: "/Component 1.svg",

    title: "Products",
    description:
      "Industry-leading valve test benches, grinding machines, lapping systems, and mobile workshop units.",
    linkLabel: "View all products",
    href: "/products",
  },
  {
    id: 3,
    icon: "/Component 1 (1).svg",

    title: "About Us",
    description:
      "Learn about our mission, global partnerships, certifications, and engineering expertise.",
    linkLabel: "Learn more",
    href: "/about",
  },
];

export const NavigateSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#1180C5] py-[120px] px-4 md:px-8 lg:px-[120px] overflow-hidden">
     

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Eyebrow */}
        <p className="text-white text-sm font-semibold  mb-5">
          Navigate
        </p>

        {/* Headline */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-5xl mb-14">
          Discover how we can help bring your ideas
          to life with{" "}
          <span className="text-white/50">
            our expertise, commitment, and innovative approach!
          </span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map(({ id, icon, title, description, linkLabel, href }) => (
            <div
              key={id}
              className="bg-[#0C6E8A] rounded-sm p-6 flex flex-col"
            >
              {/* Icon box */}
              <div className="w-10 h-10 bg-[#005872] rounded-sm flex items-center justify-center mb-10">
                <img src={icon} alt={title} className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold mb-3">{title}</h3>

              {/* Description */}
              <p className="text-white/75 text-sm leading-relaxed mb-8 flex-1">
                {description}
              </p>

              {/* Link */}
              <Link
                href={href}
                className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-white/60 pb-0.5 w-fit hover:border-white transition-colors duration-200 group"
              >
                {linkLabel}
                <img src="/send.svg" alt="Arrow right" className="w-5 h-5 brightness-0 invert group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
