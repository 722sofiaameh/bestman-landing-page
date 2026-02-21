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
    <section className="flex items-center justify-center py-[120px] px-4 md:px-[120px] bg-[#1180c5]">
      <div className="flex flex-col items-center w-full max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-start gap-12 lg:gap-[200px] w-full">
          <div className="flex flex-col items-start max-w-[240px] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
            <h2 className="font-brentor-template-framer-website-semantic-heading-6 font-semibold text-sm  text-greyscale-0 text-(length:--brentor-template-framer-website-semantic-heading-6-font-size) tracking-(--brentor-template-framer-website-semantic-heading-6-letter-spacing) leading-[var(--brentor-template-framer-website-semantic-heading-6-line-height)] [font-style:var(--brentor-template-framer-website-semantic-heading-6-font-style)]">
              Trusted Valve Solutions Across the Entire Lifecycle
            </h2>
          </div>

          <div className="flex flex-col items-start justify-center gap-20 flex-1 w-full">
            <div className="flex flex-col items-start justify-center gap-5 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="flex flex-col items-start w-full">
                <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[38px] tracking-[-1.14px] leading-[49.4px]">
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

              <div className="flex flex-col items-start max-w-[570px]">
                <p className="font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-greyscale-0 tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] font-brentor-template-framer-website-plus-jakarta-sans-regular text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)]">
                  Powering critical operations with reliable valve technology
                  and engineering expertise.
                  <br />
                  We partner with industry leaders to deliver safe, efficient,
                  and standards-driven solutions that keep operations running
                  without compromise.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              {metricsData.map((metric, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-center gap-1"
                >
                  <div className="flex flex-col items-center">
                    <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-greyscale-0 text-[46px] tracking-[-0.42px] leading-[59.8px]">
                      {metric.value}
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center max-w-[200px]">
                    <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-greyscale-0 text-base tracking-[-0.48px] leading-[25.6px] text-center">
                      {metric.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
