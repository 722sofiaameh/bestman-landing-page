import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  { label: "About Us" },
  { label: "Services" },
  { label: "Products" },
];

export const MissionVisionSection = (): React.ReactElement => {
  return (
    <section className="flex flex-col  mt-12 w-full items-start">
      <header className="flex items-center justify-center  px-0 w-full bg-greyscale-0 -translate-y-4 animate-fade-in opacity-0">
        <div className="flex w-full max-w-[1200px] items-center justify-between px-[15px]">
          <img
            className="shrink-0"
            alt="Company Logo"
            src="https://c.animaapp.com/mlvt2sbbsosEG0/img/frame-3-1.svg"
          />

          <nav className="flex items-center justify-center gap-[30px]">
            {navigationLinks.map((link, index) => (
              <button
                key={index}
                className=" font-semibold text-[#5A6272] text-sm tracking-[0] leading-[22.4px] whitespace-nowrap hover:text-[#0c6e8a] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <Button className="h-auto gap-4 pt-3 pb-[15px] px-[30px] bg-[#0c6e8a] hover:bg-[#0a5a6f] rounded-none border-[#0c6e8a] transition-colors">
            <span className=" font-semibold text-greyscale-0 text-base tracking-[-0.08px] leading-[25.6px]">
              Contact us
            </span>
            <ArrowRightIcon className="w-6 h-6 text-greyscale-0" />
          </Button>
        </div>
      </header>
    </section>
  );
};
