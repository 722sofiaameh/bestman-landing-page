import { JSX } from "react";

const coreValues = [
  { label: "Reliability" },
  { label: "Safety" },
  { label: "Performance" },
];

export const HeroSection = (): JSX.Element => {
  const coreValues = [
    { label: "Reliability" },
    { label: "Safety" },
    { label: "Performance" },
  ];

  return (
    <section className="flex items-center justify-center mt-12 sm:mt-16 md:mt-20 pt-16 sm:pt-20 md:pt-[100px] lg:pt-[129px] pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8 lg:px-[120px] bg-[#1180c5] overflow-visible">
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-[15px] py-0 max-w-[1200px] w-full relative gap-8 lg:gap-0">
        
        {/* Left content */}
        <div className="flex flex-col items-start gap-4 sm:gap-[18.9px] w-full max-w-full lg:max-w-[1170px]">
          
          <div className="flex flex-col items-start w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
            <p className="font-semibold text-white text-[10px] sm:text-xs md:text-sm tracking-[-0.42px] leading-[20px] sm:leading-[22.4px]">
              About Us
            </p>
          </div>

          <div className="flex flex-col items-start w-full lg:w-[685px] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] font-semibold leading-[1.25] sm:leading-[1.28] tracking-[-0.7px] sm:tracking-[-1.1px] lg:tracking-[-1.38px] text-white">
              Engineering Solutions with Precision and Excellence.
            </h1>
          </div>

          <div className="flex flex-col items-start max-w-full lg:max-w-[590px] w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
            <p className="font-normal text-white text-[12px] sm:text-sm md:text-base tracking-[0] leading-[20px] sm:leading-[22.4px]">
              With decades of experience in valve procurement, testing, calibration, and maintenance, we deliver integrated engineering solutions to Nigeria&apos;s oil &amp; gas and industrial sectors.
            </p>
          </div>

        </div>

        {/* Right panel - Core Values */}
        <aside className="relative lg:absolute top-0 lg:right-[15px] w-full sm:w-[90%] md:w-[400px] lg:w-[350px] bg-[#0c6e8a] pt-6 sm:pt-8 lg:pt-[29px] pb-6 sm:pb-8 lg:pb-[30px] px-6 sm:px-8 lg:px-[30px] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[80px]">
            <p className="font-semibold text-white text-[10px] sm:text-xs tracking-[-0.42px] leading-[22px] whitespace-nowrap">
              About us
            </p>

            <div className="flex flex-col gap-2 sm:gap-2.5 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
              {coreValues.map((value, index) => (
                <div key={`value-${index}`} className="flex flex-col">
                  <h3 className="font-semibold text-white text-[24px] sm:text-3xl md:text-[40px] lg:text-[46px] tracking-[-0.42px] leading-[1.3] sm:leading-[50px] lg:leading-[60px] whitespace-nowrap">
                    {value.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative graphic */}
          <img
            className="hidden lg:block absolute top-0 right-0 w-[116px] h-[155px]"
            alt="Decorative graphic"
            src="/Vector (3).svg"
          />
        </aside>
      </div>
    </section>
  );
};