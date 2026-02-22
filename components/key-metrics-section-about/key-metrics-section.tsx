import { JSX } from "react";
import { Card, CardContent } from "../ui/card";

const metricsData = [
  {
    value: "35+",
    label: "Years of Industry Experience",
  },
  {
    value: "100+",
    label: "Industrial Clients Served",
  },
  {
    value: "24/7",
    label: "Field Service Support",
  },
];

export const KeyMetricsSection = (): JSX.Element => {
  return (
    <section className="relative flex items-center justify-center py-[120px] px-4 md:px-8 lg:px-[120px]">
      <div className="w-full max-w-[1200px] px-[15px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-start justify-center gap-8 lg:gap-[200px]">
          <aside className="w-full lg:w-[200px] flex-shrink-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <h2 className="font-brentor-template-framer-website-semantic-heading-6 font-[number:var(--brentor-template-framer-website-semantic-heading-6-font-weight)] text-[#1180c5] text-[length:var(--brentor-template-framer-website-semantic-heading-6-font-size)] tracking-[var(--brentor-template-framer-website-semantic-heading-6-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-6-line-height)] [font-style:var(--brentor-template-framer-website-semantic-heading-6-font-style)]">
              Trusted Valve Solutions Across the Entire Lifecycle
            </h2>
          </aside>

          <div className="flex flex-col w-full lg:w-[770px] items-start justify-center gap-[80px]">
            <div className="flex flex-col items-start gap-[19px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="flex flex-col items-start w-full">
                <h3 className=" font-semibold text-[#1180c5] text-2xl md:text-[38px] tracking-[-0.43px] leading-tight md:leading-[49.4px]">
                  From procurement and commissioning to testing, maintenance,
                  and refurbishment, we support our{" "}
                  <span className="text-[#0c6e8a]">
                    clients with integrated engineering expertise and optimized
                    delivery models.
                  </span>
                </h3>
              </div>

              <div className="max-w-[570px] w-full">
                <p className=" font-normal text-[#1180c5] text-sm leading-[22.4px]">
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
                <Card
                  key={index}
                  className="border-none shadow-none bg-transparent"
                >
                  <CardContent className="flex flex-col items-center justify-center gap-1 p-0">
                    <div className="flex flex-col items-start w-full">
                      <span className=" font-semibold text-[#1180c5] text-[46px] tracking-[-0.42px] leading-[59.8px]">
                        {metric.value}
                      </span>
                    </div>
                    <div className="flex items-start justify-start w-full">
                      <p className="max-w-[200px] text-start  font-normal text-[#1180c5] text-base tracking-[-0.48px] leading-[25.6px]">
                        {metric.label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute w-[23.26%] h-[65.73%] top-[17.20%] left-0 pointer-events-none"
        alt="Decorative background"
        src="https://c.animaapp.com/mlxaygwhYd0iJj/img/group.png"
      />
    </section>
  );
};
