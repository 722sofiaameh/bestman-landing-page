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
    <section className="flex items-center justify-center py-12 md:py-16 lg:py-[120px] px-4 md:px-[120px] bg-[#1180c5]">
      <div className="flex flex-col items-center w-full max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-start gap-8 md:gap-12 lg:gap-[200px] w-full">
          <div className="flex flex-col items-start max-w-full lg:max-w-[240px] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
            <h2 className="font-brentor-template-framer-website-semantic-heading-6 font-semibold text-sm text-greyscale-0 text-(length:--brentor-template-framer-website-semantic-heading-6-font-size) tracking-(--brentor-template-framer-website-semantic-heading-6-letter-spacing) leading-[var(--brentor-template-framer-website-semantic-heading-6-line-height)] [font-style:var(--brentor-template-framer-website-semantic-heading-6-font-style)]">
              Trusted Valve Solutions Across the Entire Lifecycle
            </h2>
          </div>

          <div className="flex flex-col items-start justify-center gap-12 md:gap-16 lg:gap-20 flex-1 w-full">
            <div className="flex flex-col items-start justify-center gap-4 md:gap-5 w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="flex flex-col items-start w-full">
                <h3 className="font-semibold text-[28px] md:text-[34px] lg:text-[38px] tracking-[-1.14px] leading-[1.3] md:leading-[49.4px]">
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
                <p className="font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-greyscale-0 tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] font-brentor-template-framer-website-plus-jakarta-sans-regular text-sm md:text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)]">
                  Powering critical operations with reliable valve technology
                  and engineering expertise.
                  <br />
                  We partner with industry leaders to deliver safe, efficient,
                  and standards-driven solutions that keep operations running
                  without compromise.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-4 w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
              {metricsData.map((metric, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 md:gap-1"
                >
                  <div className="flex flex-col items-center">
                    <div className="font-semibold text-greyscale-0 text-[36px] md:text-[42px] lg:text-[46px] tracking-[-0.42px] leading-[1.3] md:leading-[59.8px]">
                      {metric.value}
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center max-w-full md:max-w-[200px]">
                    <p className="font-normal text-greyscale-0 text-sm md:text-base tracking-[-0.48px] leading-[22px] md:leading-[25.6px] text-center">
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
