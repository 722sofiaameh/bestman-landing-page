import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroBannerSection = (): React.ReactElement => {
  return (
    <section className="relative flex items-center justify-center min-h-[690px] px-4 md:px-[120px] py-20">
      <div className="absolute w-full h-full top-0 left-0 bg-[url(https://c.animaapp.com/mlvt2sbbsosEG0/img/image---banner.png)] bg-cover bg-center" />

      <div className="bg-[linear-gradient(77deg,rgba(0,0,0,0.9)_8%,rgba(0,0,0,0.35)_52%,rgba(0,0,0,0)_100%)] absolute w-full h-full top-0 left-0" />

      <div className="relative w-full max-w-[1200px] mx-auto px-[15px]">
        <div className="flex flex-col items-start gap-10 w-full">
          <div className="flex flex-col max-w-[625px] items-start gap-5">
            <h1 className="-translate-y-4 animate-fade-in opacity-0 w-[729px] text-[56px] font-semibold leading-[72.8px] tracking-[-1.38px] text-greyscale-0">
              Delivering Integrated Valve &amp; Engineering Solutions with
              Precision and Excellence.
            </h1>

            <p className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms] w-[647px] font-normal text-[16px] leading-[25.6px] tracking-[-0.48px] text-greyscale-0">
              Providing world-class valve procurement, testing, calibration,
              fabrication, and maintenance services to the oil &amp; gas,
              refining, petrochemical, and processing industries across Nigeria.
            </p>
          </div>

          <div className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms] flex flex-wrap items-center gap-[50px] w-full">
            <Button className="h-auto flex items-center gap-4 pt-3 pb-[15px] px-[30px] bg-greyscale-0 hover:bg-greyscale-0/90 text-[#1180c5] rounded-none border border-white transition-colors">
              <span className="font-semibold tracking-[-0.08px] leading-[25.6px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Request a quote
              </span>
              <ArrowRightIcon className="w-6 h-6" />
            </Button>

            <button className="flex flex-col items-start gap-1 group transition-opacity hover:opacity-80">
              <div className="flex items-center gap-2.5">
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-greyscale-0 text-base tracking-[-0.48px] leading-[25.6px] whitespace-nowrap">
                  Learn more about us
                </span>
                <ArrowRightIcon className="w-6 h-6 text-greyscale-0" />
              </div>
              <div className="h-0.5 w-full bg-greyscale-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
