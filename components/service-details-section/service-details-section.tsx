import React from "react";

export const ServiceDetailsSection = (): React.ReactElement => {
  return (
    <section className="inline-flex items-center justify-center p-[120px] relative flex-[0_0_auto] bg-neutral-50">
      <div className="inline-flex items-center gap-20 px-[15px] py-0 max-w-[1200px] relative flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
          <img
            src="/brigade.png"
            alt="Industrial valve and engineering facility"
            className="relative w-[545px] h-[420px] object-cover object-center"
          />
        </div>

        <div className="inline-flex min-w-[545px] items-start gap-[19.99px] flex-[0_0_auto] flex-col justify-center relative">
          <div className="flex self-stretch w-full flex-[0_0_auto] flex-col items-start relative">
            <div className="items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica] font-semibold text-[#0c6e8a] text-sm tracking-[-0.42px] leading-[22.4px]">
                What we do
              </h2>
            </div>
          </div>

          <div className="flex max-w-[530px] w-[530px] relative flex-[0_0_auto] flex-col items-start">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica] font-semibold text-[#1180c5] text-[38px] tracking-[-1.14px] leading-[49.4px]">
                We specialize in comprehensive valve and engineering services,
                supporting oil &amp; gas, refining, petrochemical, and
                industrial facilities across the entire asset lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
