import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JSX } from "react";

const missionVisionData = [
  {
    title: "Our Mission",
    description:
      "To deliver integrated valve and engineering services that meet internationally acceptable standards using local resources, ensuring efficiency, safety, and reliability across all industries we serve.",
  },
  {
    title: "Our Vision",
    description:
      "To be the service company of choice, delivering quality services consistently, embracing innovation, and exceeding client expectations without equal.",
  },
];

export const MissionStatementSection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center py-12 md:py-16 lg:py-[100px] px-4 md:px-[120px] w-full">
      <div className="flex flex-col lg:flex-row items-start max-w-[1200px] w-full gap-8 lg:gap-16">
        
        <div className="flex flex-col min-w-0 lg:min-w-[536px] lg:max-w-[536px] gap-8 md:gap-[45.75px] w-full">

          <div className="flex flex-col gap-5 md:gap-[22px]">
            
            <div className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:0ms]">
              <p className="text-start text-[#0c6e8a]">
                Who we are
              </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-[18px]">

              {/* MAIN HEADING */}
              <div className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
                <h2 className="
                  text-start
                  font-semibold
                  text-[24px] sm:text-[26px] md:text-[32px] lg:text-[38px]
                  leading-[32px] sm:leading-[36px] md:leading-[42px] lg:leading-[49.4px]
                  tracking-[-0.6px] sm:tracking-[-0.8px] lg:tracking-[-1.14px]
                ">
                  <span className="text-[#1180c5] tracking-[-0.43px]">
                    Our mission is to deliver safe, efficient,{" "}
                  </span>
                  <span className="text-[#0c6e8a] tracking-[-0.43px]">
                    and standards-driven valve solutions that keep
                  </span>
                  <span className="text-[#1180c5] tracking-[-0.43px]">
                    {" "}
                    industries moving.
                  </span>
                </h2>
              </div>

              {/* INTRO PARAGRAPH */}
              <div className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
                <p className="
                  text-start
                  text-[14px] sm:text-[15px] md:text-base
                  leading-[20px] sm:leading-[22px] md:leading-[25.6px]
                  tracking-[-0.2px] md:tracking-[-0.48px]
                  text-brentor-templateframerwebsiteshuttle-gray
                ">
                  Bestman International Limited is an indigenous oil servicing
                  company incorporated on May 2nd, 1986. We provide valve and
                  engineering solutions to the oil &amp; gas, refining,
                  petroleum, pharmaceutical, chemical, fertilizer, and
                  processing industries.
                </p>
              </div>

            </div>
          </div>

          {/* MISSION & VISION BLOCKS */}
          <div className="flex flex-col gap-6 md:gap-[38.99px]">
            {missionVisionData.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col gap-[9.2px] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:${600 + index * 200}ms]`}
              >
                <h3 className="
                  text-start
                  font-semibold
                  text-[#1180c5]
                  text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]
                  leading-[26px] sm:leading-[28px] md:leading-[32px]
                ">
                  {item.title}
                </h3>

                <p className="
                  text-start
                  text-[14px] sm:text-[15px] md:text-base
                  leading-[20px] sm:leading-[22px] md:leading-[25.6px]
                  tracking-[-0.2px] md:tracking-[-0.48px]
                  text-brentor-templateframerwebsiteshuttle-gray
                ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="-translate-y-4 animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <Link href="/why-choose-us">
              <Button
                variant="outline"
                className="cursor-pointer h-auto flex items-center justify-center gap-3 sm:gap-4 bg-white rounded-none pt-3 pb-[15px] px-6 md:px-[30px] border-[#0c6e8a] text-[#0c6e8a] hover:bg-[#0c6e8a] hover:text-white transition-colors w-full sm:w-auto"
              >
                <span className="font-semibold text-sm sm:text-base leading-[22px] sm:leading-[25.6px]">
                  Why Bestman?
                </span>
                <img
                  src="/arrow-right%203.svg"
                  alt="Arrow right"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
              </Button>
            </Link>
          </div>

        </div>

        {/* RIGHT IMAGE - Desktop untouched */}
        <div className="hidden lg:flex flex-1 min-w-0 h-[830px] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <div className="w-full h-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(/photo-main.svg)",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};