import { JSX } from "react";

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center py-[60px] sm:py-[80px] lg:py-[120px] px-4 md:px-8 lg:px-[120px] bg-neutral-50">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 w-full max-w-[1200px]">
        <div className="flex items-center justify-center w-full lg:w-auto -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="w-full lg:w-[545px] h-[220px] sm:h-[280px] md:h-[320px] lg:h-[420px] bg-[url(/Brigade.svg)] bg-cover bg-center rounded-lg" />
        </div>

        <div className="flex flex-col items-start gap-4 sm:gap-5 w-full lg:flex-1 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="flex flex-col items-start w-full">
            <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#0c6e8a] text-xs sm:text-sm tracking-[-0.42px] leading-[22.4px]">
              What we do
            </p>
          </div>

          <div className="flex flex-col items-start w-full">
            <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#1180c5] text-xl sm:text-2xl md:text-3xl lg:text-[38px] tracking-[-1.14px] leading-tight lg:leading-[49.4px]">
              We specialize in comprehensive valve and engineering services,
              supporting oil &amp; gas, refining, petrochemical, and industrial
              facilities across the entire asset lifecycle.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};