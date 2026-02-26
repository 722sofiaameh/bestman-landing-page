import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JSX } from "react";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[400px] sm:min-h-[450px] lg:min-h-[480px]">

        {/* Left Panel - Teal */}
        <div className="flex-1 bg-[#0c7a8f] flex items-center px-6 md:px-8 py-10 md:py-12 lg:px-28 lg:py-16">
          <div className="flex flex-col gap-6 md:gap-8 max-w-full lg:max-w-[460px] w-full">
            
            <div className="flex flex-col gap-4 md:gap-5">
              <h2 className="font-semibold text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[42px] xl:text-[48px] tracking-[-0.4px] sm:tracking-[-0.45px] md:tracking-[-0.5px] leading-[1.3] sm:leading-[1.28] w-full lg:w-[534px]">
                Let&apos;s Deliver Engineering Excellence Together.
              </h2>

              <p className="text-white/90 text-[12px] sm:text-sm md:text-[15px] leading-[1.6] sm:leading-[1.65] max-w-full lg:max-w-[400px]">
                We combine engineering excellence and modern equipment to ensure reliable, safe, and high-performance valve systems.
              </p>
            </div>

            <Link href="/contact">
              <Button
                variant="outline"
                className="cursor-pointer w-full sm:w-fit h-auto bg-white hover:bg-white/90 text-[#0C6E8A] border border-white px-5 sm:px-6 md:px-6 py-2 sm:py-3 gap-3 rounded-none transition-all duration-200"
              >
                <span className="font-medium text-[12px] sm:text-sm md:text-[15px] tracking-wide">
                  Request a quote
                </span>
                <img
                  src="/arrow-right 2.svg"
                  alt="Arrow right"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="flex-1 relative min-h-[320px] lg:min-h-0">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(/Skyscraper-1.svg)",
            }}
          />

          {/* Overlay for text legibility */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Content overlay */}
          <div className="relative h-full flex flex-col gap-2 sm:gap-3 md:gap-4 justify-end p-4 sm:p-6 md:p-8 lg:p-10 min-h-[280px] sm:min-h-[320px] lg:min-h-0">
            {/* Top label */}
            <p className="text-white font-normal text-[10px] sm:text-[12px] md:text-[15px] leading-relaxed drop-shadow-sm">
              Years of trusted expertise.
            </p>

            {/* Bottom stat */}
            <div className="font-semibold text-white text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] xl:text-[120px] leading-none tracking-[-1.5px] sm:tracking-[-2px] drop-shadow-lg">
              35+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};