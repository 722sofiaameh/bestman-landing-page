import { JSX } from "react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";


const missionVisionData = [
  {
    title: "Mission",
    description:
      "Our mission is to deliver integrated valve and engineering services that meet internationally acceptable standards, ensuring safety, efficiency, and long-term operational reliability.",
  },
  {
    title: "Vision",
    description:
      "Our vision is to be the service company of choice in valve and engineering solutions — recognized for innovation, professionalism, and uncompromising quality.",
  },
];

const servicesData = [
  {
    title: "Valve Procurement & Commissioning",
    description:
      "Global sourcing, installation, and commissioning of valves and related equipment.",
  },
  {
    title: "Valve Testing, Repair & Maintenance",
    description:
      "In-house and on-site overhaul, troubleshooting, calibration, and refurbishment services.",
  },
  {
    title: "Instrumentation & Calibration",
    description:
      "Precision calibration of control valves, safety valves, transmitters, gauges, and process control equipment.",
  },
];

export const MissionVisionSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#1180c5] px-4 md:px-8 lg:px-[120px]">
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="relative w-full py-20 md:py-[100px]">
          <div className="absolute inset-0 left-1/2 w-[150%] overflow-hidden">
            <div
              className="absolute inset-0  bg-no-repeat"
              style={{
                backgroundImage:
                  "url(/Image%20Wrapper%20%281%29.svg)",
              }}
            />
            {/* <div className="absolute inset-0 bg-[#1180c5] opacity-60" />
            <div className="absolute inset-0 bg-[linear-gradient(28deg,rgba(0,0,0,0.5)_0%,rgba(19,52,117,0.1)_100%)] opacity-60" /> */}
          </div>

          <div className="relative z-10 flex flex-col gap-16 lg:flex-row lg:gap-[150px]">
            <div className="flex gap-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="relative h-auto min-h-[176px] w-0.5">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#0C6E8A]" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#FFFFFF26]" />
              </div>

              <div className="flex max-w-[500px] flex-col gap-[60px]">
                {missionVisionData.map((item, index) => (
                  <Card
                    key={item.title}
                    className="border-transparent bg-transparent shadow-none translate-y-[-1rem] animate-fade-in opacity-0"
                    style={
                      {
                        "--animation-delay": `${400 + index * 200}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="flex flex-col gap-5 p-0">
                      <h2 className="font-brentor-template-framer-website-semantic-heading-2 text-[38px] font-semibold tracking-[-0.43px] leading-[59.8px] text-white">
                        {item.title}
                      </h2>
                      <p className="max-w-[450px] font-normal text-base leading-[22.4px] tracking-[0] text-white">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex max-w-[535px] flex-col gap-[39px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              {servicesData.map((service, index) => (
                <Card
                  key={service.title}
                  className="border-transparent bg-transparent shadow-none translate-y-[-1rem] animate-fade-in opacity-0"
                  style={
                    {
                      "--animation-delay": `${1000 + index * 200}ms`,
                    } as React.CSSProperties
                  }
                >
                  <CardContent className="flex flex-col gap-[9.2px] p-0">
                    <h3 className="font-brentor-template-framer-website-semantic-heading-4 text-2xl font-semibold tracking-[-0.43px] leading-[49.4px] text-white">
                      {service.title}
                    </h3>
                    <p className="max-w-[450px] font-normal text-sm leading-[22.4px] tracking-[0] text-white [font-family:'Plus_Jakarta_Sans',Helvetica]">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
