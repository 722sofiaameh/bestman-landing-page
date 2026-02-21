import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JSX } from "react";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[480px]">
        {/* Left Panel - Teal */}
        <div className="flex-1 bg-[#0c7a8f] flex items-center px-8 py-12 lg:px-28 lg:py-16">
          <div className="flex flex-col gap-8 max-w-[460px]">
            <div className="flex flex-col gap-5">
              <h2 className="font-semibold text-white text-[42px] md:text-[48px] tracking-[-0.5px] leading-[1.28] w-[534px]">
                Let&apos;s Deliver
                Engineering Excellence
                Together.
              </h2>
              <p className="text-white/90 text-[15px] leading-[1.65] max-w-[400px]">
                We combine engineering excellence and modern equipment to ensure
                reliable, safe, and high-performance valve systems.
              </p>
            </div>

            <Button
              variant="outline"
              className="w-fit h-auto bg-transparent hover:bg-white/10 bg-white text-[#0C6E8A] border border-white px-6 py-3 gap-3 rounded-none transition-all duration-200"
            >
              <span className="font-medium text-[15px] tracking-wide">
                Request a quote
              </span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="flex-1 relative min-h-[320px] lg:min-h-0">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://c.animaapp.com/mlvt2sbbsosEG0/img/skyscraper.png)",
            }}
          />

          {/* Overlay for text legibility */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Content overlay */}
          <div className="relative h-full flex flex-col gap-4 justify-end p-8 md:p-10 min-h-[320px] lg:min-h-0">
            {/* Top label */}
            <p className="text-white font-normal text-[15px] leading-relaxed drop-shadow-sm">
              Years of trusted expertise.
            </p>

            {/* Bottom stat */}
            <div className="font-semibold text-white text-[80px] md:text-[96px] lg:text-[120px] leading-none tracking-[-2px] drop-shadow-lg">
              35+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};