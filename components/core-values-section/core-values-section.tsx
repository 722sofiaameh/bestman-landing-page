import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";

const coreValues = [
  {
    number: "01",
    title: "Industry Expertise",
    description:
      "Over three decades of engineering experience delivering high-performance valve solutions.",
  },
  {
    number: "02",
    title: "Client-Centered Solutions",
    description:
      "We collaborate closely with clients to provide tailored, cost-effective engineering services.",
  },
  {
    number: "03",
    title: "On-Time Delivery",
    description:
      "Efficient project execution with strict adherence to safety, cost, and schedule.",
  },
  {
    number: "04",
    title: "Safety-First Culture",
    description:
      "Committed to maintaining the highest health, safety, and environmental standards.",
  },
  {
    number: "05",
    title: "Integrated Services",
    description:
      "End-to-end valve lifecycle support from procurement to maintenance and refurbishment.",
  },
  {
    number: "06",
    title: "Global Partnerships",
    description:
      "Strong international OEM affiliations ensuring quality, compliance, and reliability.",
  },
];

export const CoreValuesSection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center py-[120px] px-4 md:px-8 lg:px-[120px]">
      <div className="flex flex-col items-center gap-[50px] w-full max-w-[1200px]">
        <header className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="flex flex-col gap-5 flex-1">
            <div className="flex flex-col items-start">
              <p className="font-semibold text-[#0c6e8a] text-sm tracking-[-0.42px] leading-[22.4px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                Why choose Bestman?
              </p>
            </div>

            <div className="flex flex-col items-start max-w-[637px]">
              <h2 className="font-brentor-template-framer-website-semantic-heading-2 font-[number:var(--brentor-template-framer-website-semantic-heading-2-font-weight)] text-[#1180c5] text-[length:var(--brentor-template-framer-website-semantic-heading-2-font-size)] tracking-[var(--brentor-template-framer-website-semantic-heading-2-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-2-line-height)] [font-style:var(--brentor-template-framer-website-semantic-heading-2-font-style)]">
                Precision. Performance. Partnership.
              </h2>
            </div>
          </div>

          <Button className="bg-[#0c6e8a] hover:bg-[#0a5a71] text-white gap-4 pt-3 pb-[15px] px-[30px] h-auto transition-colors">
            <span className="font-semibold tracking-[-0.08px] leading-[25.6px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
              Why choose us
            </span>
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
          {coreValues.map((value, index) => (
            <Card
              key={value.number}
              className="bg-neutral-50 border-0 shadow-none translate-y-[-1rem] animate-fade-in opacity-0"
              style={
                {
                  "--animation-delay": `${(index + 1) * 100}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="flex flex-col items-start justify-center gap-[30px] pt-[39px] pb-10 px-10">
                <div className="flex flex-col items-start w-full">
                  <h3 className="font-brentor-template-framer-website-semantic-heading-4 font-[number:var(--brentor-template-framer-website-semantic-heading-4-font-weight)] text-[#0c6e8a] text-[length:var(--brentor-template-framer-website-semantic-heading-4-font-size)] tracking-[var(--brentor-template-framer-website-semantic-heading-4-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-4-line-height)] [font-style:var(--brentor-template-framer-website-semantic-heading-4-font-style)]">
                    {value.number}
                  </h3>
                </div>

                <div className="w-full h-0.5 bg-[#eeeeeeb2]" />

                <div className="flex flex-col items-start gap-[9.11px] w-full">
                  <div className="flex flex-col items-start w-full">
                    <h4 className="font-brentor-template-framer-website-semantic-heading-5 font-[number:var(--brentor-template-framer-website-semantic-heading-5-font-weight)] text-[#1180c5] text-[length:var(--brentor-template-framer-website-semantic-heading-5-font-size)] tracking-[var(--brentor-template-framer-website-semantic-heading-5-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-5-line-height)] [font-style:var(--brentor-template-framer-website-semantic-heading-5-font-style)]">
                      {value.title}
                    </h4>
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#5a6272] text-sm tracking-[0] leading-[22.4px]">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
