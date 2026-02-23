import { JSX } from "react";

const coreValues = [
  { label: "Reliability" },
  { label: "Safety" },
  { label: "Performance" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className=" flex items-center justify-center pt-[89px] pb-12 px-4 md:px-[120px] bg-[#1180c5] overflow-visible">
      <div className="flex items-center justify-center px-[15px] py-0 max-w-[1200px] w-full relative">
        <div className="flex flex-col items-start gap-[18.9px] w-full max-w-[1170px]">
          <div className="flex flex-col items-start w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <p className=" font-semibold text-white text-sm tracking-[-0.42px] leading-[22.4px]">
              About Us
            </p>
          </div>

          <div className="flex flex-col items-start w-[685px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h1 className=" text-[56px] font-semibold leading-[1.3] tracking-[-1.38px] text-white">
              Engineering Solutions with Precision and Excellence.
            </h1>
          </div>

          <div className="flex flex-col items-start max-w-[590px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <p className=" font-normal text-white text-base tracking-[0] leading-[22.4px]">
              With decades of experience in valve procurement, testing,
              calibration, and maintenance, we deliver integrated engineering
              solutions to Nigeria&apos;s oil &amp; gas and industrial sectors.
            </p>
          </div>
        </div>

        <aside className="absolute top-0  right-[15px] w-[350px] bg-[#0c6e8a] pt-[29px] pb-[30px] px-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="flex flex-col gap-[118.2px]">
            <div className="opacity-0">
              <p className="font-semibold text-white tracking-[-0.42px] leading-[22.4px] whitespace-nowrap  text-sm">
                About us
              </p>
            </div>

            <div className="flex flex-col gap-2.5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              {coreValues.map((value, index) => (
                <div key={`value-${index}`} className="flex flex-col">
                  <h3 className=" font-semibold text-greyscale-0 text-[46px] tracking-[-0.42px] leading-[59.8px] whitespace-nowrap">
                    {value.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <img
            className="absolute top-0 right-0 w-[116px] h-[155px]"
            alt="Decorative graphic"
            src="/Vector (3).svg"
          />
        </aside>
      </div>
    </section>
  );
};
