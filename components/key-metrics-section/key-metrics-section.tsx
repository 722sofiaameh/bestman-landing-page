import { JSX } from "react";

const metricsData = [
  {
    value: "35+",
    description: "Years of Industry Experience",
  },
  {
    value: "100+",
    description: "Industrial Clients Served",
  },
  {
    value: "24/7",
    description: "Field Service Support",
  },
];

export const KeyMetricsSection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center py-12 sm:py-14 md:py-16 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-[120px] bg-[#1180c5] relative">
      <div className="flex flex-col items-center w-full max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-[200px] w-full">

          {/* LEFT SMALL TITLE */}
          <div className="flex flex-col items-start max-w-full lg:max-w-[240px] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
            <h2 className="font-semibold text-[13px] sm:text-sm md:text-base text-greyscale-0 leading-[18px] sm:leading-[20px] md:leading-[22px]">
              Trusted Valve Solutions Across the Entire Lifecycle
            </h2>
          </div>

          <div className="flex flex-col items-start justify-center gap-12 md:gap-16 lg:gap-20 flex-1 w-full">

            {/* MAIN HEADING BLOCK */}
            <div className="flex flex-col items-start justify-center gap-4 md:gap-5 w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">

              <div className="flex flex-col items-start w-full">
                <h3 className="
                  font-semibold
                  text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px]
                  leading-[30px] sm:leading-[34px] md:leading-[44px] lg:leading-[49.4px]
                  tracking-[-0.6px] sm:tracking-[-0.9px] lg:tracking-[-1.14px]
                ">
                  <span className="text-white tracking-[-0.43px]">
                    From procurement and commissioning to testing, maintenance,
                    and refurbishment, we support our{" "}
                  </span>
                  <span className="text-[#eeeeeeb2] tracking-[-0.43px]">
                    clients with integrated engineering expertise and optimized
                    delivery models.
                  </span>
                </h3>
              </div>

              <div className="flex flex-col items-start max-w-full lg:max-w-[570px]">
                <p className="
                  text-greyscale-0
                  text-[14px] sm:text-[15px] md:text-base
                  leading-[20px] sm:leading-[22px] md:leading-[25.6px]
                  tracking-[-0.2px] md:tracking-[-0.48px]
                ">
                  Powering critical operations with reliable valve technology
                  and engineering expertise.
                  <br />
                  We partner with industry leaders to deliver safe, efficient,
                  and standards-driven solutions that keep operations running
                  without compromise.
                </p>
              </div>
            </div>

            {/* METRICS GRID */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 md:gap-4 w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
              {metricsData.map((metric, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 md:gap-1"
                >
                  <div className="flex flex-col items-center">
                    <div className="
                      font-semibold
                      text-greyscale-0
                      text-[28px] sm:text-[32px] md:text-[40px] lg:text-[46px]
                      leading-[34px] sm:leading-[38px] md:leading-[52px] lg:leading-[59.8px]
                      tracking-[-0.42px]
                    ">
                      {metric.value}
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center max-w-full md:max-w-[200px]">
                    <p className="
                      font-normal
                      text-greyscale-0
                      text-[12px] sm:text-[14px] md:text-base
                      leading-[18px] sm:leading-[20px] md:leading-[25.6px]
                      tracking-[-0.2px] md:tracking-[-0.48px]
                      text-center
                    ">
                      {metric.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <img
        className="absolute w-[23.26%] h-[65.73%] top-[17.20%] left-0 pointer-events-none"
        alt="Decorative background"
        src="/Group.svg"
      />
    </section>
  );
};