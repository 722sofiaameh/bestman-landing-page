import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroBannerSection = (): React.ReactElement => {
  return (
    <section className="relative flex items-center justify-center min-h-[500px] sm:min-h-[600px] lg:min-h-[690px] px-4 md:px-[120px] py-12 md:py-20">
      <div className="absolute w-full h-full top-0 left-0 bg-[url(/Banner.svg)] bg-cover bg-[70%_center] sm:bg-center" />
      <div className="bg-[linear-gradient(77deg,rgba(0,0,0,0.9)_8%,rgba(0,0,0,0.35)_52%,rgba(0,0,0,0)_100%)] absolute w-full h-full top-0 left-0" />

      <div className="relative w-full max-w-[1200px] mx-auto px-4 md:px-[15px]">
        <div className="flex flex-col items-start gap-6 md:gap-10 w-full">

          <div className="flex flex-col max-w-full lg:max-w-[625px] items-start gap-4 md:gap-5">

            {/* ✅ HERO HEADING */}
            <h1 className="
              -translate-y-4 animate-fade-in opacity-0
              w-full lg:w-[729px]
              text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px]
              font-semibold
              leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[72.8px]
              tracking-[-0.5px] sm:tracking-[-0.8px] lg:tracking-[-1.38px]
              text-greyscale-0
              pt-12 sm:pt-4 lg:pt-0
            ">
              Delivering Integrated Valve &amp; Engineering Solutions with
              Precision and Excellence.
            </h1>

            {/* ✅ HERO PARAGRAPH */}
            <p className="
              -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]
              w-full lg:w-[647px]
              font-normal
              text-[14px] sm:text-[15px] md:text-[16px]
              leading-[20px] sm:leading-[22px] md:leading-[25.6px]
              tracking-[-0.2px] md:tracking-[-0.48px]
              text-greyscale-0
            ">
              Providing world-class valve procurement, testing, calibration,
              fabrication, and maintenance services to the oil &amp; gas,
              refining, petrochemical, and processing industries across Nigeria.
            </p>

          </div>

          <div className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms] flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-[50px] w-full">

            {/* ✅ PRIMARY BUTTON */}
            <Link href="/contact">
              <Button className="cursor-pointer h-auto flex items-center justify-center gap-3 sm:gap-4 pt-3 pb-[15px] px-6 md:px-[30px] bg-greyscale-0 hover:bg-greyscale-0/90 text-[#1180c5] rounded-none border border-white transition-colors w-full sm:w-auto">
                <span className="font-semibold text-sm sm:text-base tracking-[-0.08px] leading-[22px] sm:leading-[25.6px]">
                  Request a quote
                </span>
                <img
                  src="/arrow-right 2.svg"
                  alt="Arrow right"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
              </Button>
            </Link>

            {/* ✅ SECONDARY LINK */}
            <Link href="/about">
              <button className="cursor-pointer flex flex-col items-start gap-1 group transition-opacity hover:opacity-80 w-full sm:w-auto">
                <div className="flex items-center gap-2 relative">
                  <span className="font-semibold text-greyscale-0 text-sm sm:text-base tracking-[-0.2px] md:tracking-[-0.48px] leading-[20px] sm:leading-[25.6px]">
                    Learn more about us
                  </span>
                  <img
                    src="/arrow-right (1).svg"
                    alt="Arrow right"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-greyscale-0" />
                </div>
              </button>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};