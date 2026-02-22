"use client";

import Link from "next/link";
import { FileText, Folder, ExternalLink, ArrowUpRight } from "lucide-react";
import { JSX } from "react";

const cards = [
  {
    id: 1,
    icon: FileText,
    title: "Services",
    description:
      "Comprehensive valve testing, maintenance, calibration, and engineering solutions.",
    linkLabel: "Explore all services",
    href: "/#services",
  },
  {
    id: 2,
    icon: Folder,
    title: "Products",
    description:
      "Industry-leading valve test benches, grinding machines, lapping systems, and mobile workshop units.",
    linkLabel: "View all products",
    href: "/products",
  },
  {
    id: 3,
    icon: ExternalLink,
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
        {/* Eyebrow */}
        <p className="text-white/80 text-sm font-medium tracking-wide mb-5">
          Navigate
        </p>

        {/* Headline */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mb-14">
          Discover how we can help bring your ideas
          to life with{" "}
          <span className="text-white/50">
            our expertise, commitment, and innovative approach!
          </span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map(({ id, icon: Icon, title, description, linkLabel, href }) => (
            <div
              key={id}
              className="bg-[#0e7aaf] rounded-sm p-8 flex flex-col"
            >
              {/* Icon box */}
              <div className="w-10 h-10 bg-[#0a5f8a] rounded-sm flex items-center justify-center mb-10">
                <Icon className="w-5 h-5 text-white" />
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
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
