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
    <section className="relative w-full overflow-hidden bg-[#1180c5] px-4 md:px-8 lg:px-[120px]">
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="relative w-full py-20 md:py-[100px]">
          
          {/* Background */}
          <div className="absolute inset-0 left-1/2 w-[60%] max-lg:-translate-x-1/2 overflow-hidden">
            <div
              className="absolute inset-0 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(/Image-Wrapper1.svg)",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col gap-16 max-lg:gap-12 lg:flex-row lg:gap-[150px]">
            
            {/* Mission & Vision */}
            <div className="flex gap-[30px] max-md:gap-5 max-sm:gap-4 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
              
              {/* Vertical Line - hide only on very small screens */}
              <div className="relative h-auto min-h-[176px] w-0.5 max-sm:hidden">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#0C6E8A]" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#FFFFFF26]" />
              </div>

              <div className="flex max-w-[500px] max-sm:max-w-full flex-col gap-[60px] max-lg:gap-10">
                {missionVisionData.map((item, index) => (
                  <Card
                    key={item.title}
                    className="border-transparent bg-transparent shadow-none -translate-y-4 animate-fade-in opacity-0"
                    style={
                      {
                        "--animation-delay": `${400 + index * 200}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="flex flex-col gap-5 p-0">
                      
                      {/* Title — desktop untouched */}
                      <h2 className="
                        font-brentor-template-framer-website-semantic-heading-2
                        text-[38px]
                        max-md:text-[30px]
                        max-sm:text-[24px]
                        font-semibold
                        tracking-[-0.43px]
                        leading-[59.8px]
                        max-md:leading-[44px]
                        max-sm:leading-[34px]
                        text-white
                      ">
                        {item.title}
                      </h2>

                      {/* Description — desktop untouched */}
                      <p className="
                        max-w-[450px]
                        max-sm:max-w-full
                        font-normal
                        text-base
                        max-sm:text-sm
                        leading-[22.4px]
                        text-white
                      ">
                        {item.description}
                      </p>

                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="flex max-w-[535px] max-sm:max-w-full flex-col gap-[39px] max-lg:gap-8 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:800ms]">
              {servicesData.map((service, index) => (
                <Card
                  key={service.title}
                  className="border-transparent bg-transparent shadow-none -translate-y-4 animate-fade-in opacity-0"
                  style={
                    {
                      "--animation-delay": `${1000 + index * 200}ms`,
                    } as React.CSSProperties
                  }
                >
                  <CardContent className="flex flex-col gap-[9.2px] p-0">
                    
                    {/* Title — desktop untouched */}
                    <h3 className="
                      font-brentor-template-framer-website-semantic-heading-4
                      text-2xl
                      max-md:text-xl
                      max-sm:text-lg
                      font-semibold
                      tracking-[-0.43px]
                      leading-[49.4px]
                      max-md:leading-[38px]
                      max-sm:leading-[30px]
                      text-white
                    ">
                      {service.title}
                    </h3>

                    {/* Description — desktop untouched */}
                    <p className="
                      max-w-[450px]
                      max-sm:max-w-full
                      font-normal
                      text-sm
                      max-sm:text-xs
                      leading-[22.4px]
                      max-sm:leading-[18px]
                      text-white
                      [font-family:'Plus_Jakarta_Sans',Helvetica]
                    ">
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