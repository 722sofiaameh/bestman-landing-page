import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";

const coreValues = [
  { text: "Precision" },
  { text: "Integrity" },
  { text: "Performance" },
];

export const PrecisionPerformanceSection = (): JSX.Element => {
  return (
    <section className="bg-[#1180c5] pt-0 pb-[50px] px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-4 lg:gap-[94.7px] items-start">
          <Card className="bg-[#0c6e8a] shadow-none rounded-none border-0 mt-[17px] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
            <CardContent className="pt-[62px] pb-10 px-5 flex flex-col gap-9">
              <div className="font-brentor-template-framer-website-semantic-heading-6 font-[number:var(--brentor-template-framer-website-semantic-heading-6-font-weight)] text-greyscale-0 text-[length:var(--brentor-template-framer-website-semantic-heading-6-font-size)] tracking-[var(--brentor-template-framer-website-semantic-heading-6-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-6-line-height)] [font-style:var(--brentor-template-framer-website-semantic-heading-6-font-style)]">
                About us
              </div>

              <div className="flex flex-col gap-2.5">
                {coreValues.map((value, index) => (
                  <h3
                    key={index}
                    className=" font-semibold text-greyscale-0 text-[46px] tracking-[-0.42px] leading-[59.8px]"
                  >
                    {value.text}
                  </h3>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-10 mt-[110px] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="flex flex-col gap-[19.19px]">
              <h2 className="max-w-[600px] text-[38px] tracking-[-1.14px] leading-[49.4px]  font-semibold text-greyscale-0">
                Delivering reliable engineering solutions built on safety,
                precision, and long-term partnerships.
              </h2>

              <p className="max-w-[550px] font-brentor-template-framer-website-plus-jakarta-sans-regular font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-greyscale-0 text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)]">
                We deliver high-quality valve and engineering solutions built on
                safety, innovation, and international standards. With decades of
                experience and global partnerships, Bestman International
                ensures operational reliability across every project lifecycle.
              </p>
            </div>

            <Button className="h-auto bg-greyscale-0 hover:bg-greyscale-0/90 text-[#1180c5] pt-3 pb-[15px] px-[30px] rounded-none border border-white w-fit transition-transform">
              <span className=" font-semibold text-base tracking-[-0.08px] leading-[25.6px]">
                About Bestman
              </span>
              <ArrowRightIcon className="w-6 h-6 ml-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
