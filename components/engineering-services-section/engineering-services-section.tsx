import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { JSX } from "react";

const services = [
  {
    id: "1",
    image: "https://c.animaapp.com/mlvt2sbbsosEG0/img/drawings.png",
    title: "Valve Procurement, Installation & Commissioning",
    description:
      "Sourcing, procurement, expediting, and delivery of valves and related equipment with global supply partnerships.",
  },
  {
    id: "2",
    image: "https://c.animaapp.com/mlvt2sbbsosEG0/img/team.png",
    title: "Valve Testing, Repair & Maintenance",
    description:
      "In-house and on-site valve overhaul, troubleshooting, calibration, and refurbishment services.",
  },
  {
    id: "3",
    image: "https://c.animaapp.com/mlvt2sbbsosEG0/img/grinder-tool.png",
    title: "Instrumentation & Calibration",
    description:
      "Calibration of valves, transmitters, gauges, safety valves, pressure devices, flow meters, and process control equipment.",
  },
  {
    id: "4",
    image: "https://c.animaapp.com/mlvt2sbbsosEG0/img/drawings-1.png",
    title: "Fabrication & Machining",
    description:
      "CNC machining, flange works, mechanical parts fabrication, and metal structures manufacturing.",
  },
  {
    id: "5",
    image: "https://c.animaapp.com/mlvt2sbbsosEG0/img/team-1.png",
    title: "Valve Hydro Testing & NDT Services",
    description:
      "Hydrostatic testing, ultrasonic testing, magnetic particle inspection, dye penetrant testing, radiography, and more.",
  },
  {
    id: "6",
    image: "https://c.animaapp.com/mlvt2sbbsosEG0/img/grinder-tool-1.png",
    title: "Mobile Workshop Services",
    description:
      "DNV 2.7.1 certified mobile workshop for offshore and onshore valve inspection and maintenance.",
  },
];

interface EngineeringServicesSectionProps {
  isServicesPage?: boolean;
}

export const EngineeringServicesSection = ({
  isServicesPage = false,
}: EngineeringServicesSectionProps): JSX.Element => {
  return (
    <section
      className={`w-full ${
        isServicesPage ? "bg-white" : "bg-[#FAFAFA]"
      } py-10 sm:py-12 md:py-16 px-4 md:px-8 lg:px-[120px]`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-[50px]">
        {isServicesPage ? (
          <header className="w-full flex py-6  sm:py-6 lg:py-[40px] flex-col items-center text-center -translate-y-4 animate-fade-in opacity-0">

            {/* Small Label */}
            <p className="text-[#0C6E8A] font-semibold text-xs sm:text-sm lg:text-base leading-[18px] sm:leading-[20px] lg:leading-[25.6px] mb-3 sm:mb-4">
              Our services
            </p>

            {/* Main Heading */}
            <h2 className="
              text-[#1180c5]
              font-semibold
              text-[20px] sm:text-[24px] md:text-[32px] lg:text-[38px]
              leading-[28px] sm:leading-[32px] md:leading-[44px] lg:leading-[49.4px]
              tracking-[-0.4px] sm:tracking-[-0.6px] md:tracking-[-0.9px] lg:tracking-[-1.14px]
            ">
              Reliable construction<span className="hidden lg:inline"><br /></span> services offered.
            </h2>
          </header>
        ) : (
          <header className="w-full lg:pt-[20px] flex flex-col lg:flex-row items-start gap-5 sm:gap-6 md:gap-8 lg:gap-[120px] -translate-y-4 animate-fade-in opacity-0">

            <div className="shrink-0 max-w-full lg:max-w-[300px]">
              <p className="text-[#0C6E8A] font-semibold text-xs sm:text-[14px] md:text-[15px] lg:text-base leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[25.6px]">
                We offer a full spectrum of services designed to bring your
                project to life.
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-3 sm:gap-4 md:gap-[19.2px]">

              {/* Section Title */}
              <h2 className="
                text-[#1180c5]
                font-semibold
                text-[20px] sm:text-[24px] md:text-[32px] lg:text-[38px]
                leading-[28px] sm:leading-[32px] md:leading-[44px] lg:leading-[49.4px]
                tracking-[-0.4px] sm:tracking-[-0.6px] md:tracking-[-0.9px] lg:tracking-[-1.14px]
              ">
                Comprehensive Valve & Engineering Services
              </h2>

              {/* Section Paragraph */}
              <p className="text-[#5A6272] font-normal text-xs sm:text-[14px] md:text-[15px] lg:text-sm leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[25.6px]">
                Whether supporting upstream operations, refinery facilities, or
                industrial plants, we provide dependable valve and engineering
                services that safeguard performance and extend asset life.
              </p>
            </div>
          </header>
        )}

        {/* Services Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[30px]">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="flex cursor-pointer flex-col h-full gap-[19px] border-0 shadow-none bg-transparent -translate-y-4 animate-fade-in opacity-0"
              style={
                {
                  "--animation-delay": `${(index + 1) * 200}ms`,
                } as React.CSSProperties
              }
            >
              <div className="w-full h-[180px] sm:h-[200px] overflow-hidden rounded-none shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <CardContent className="flex flex-col gap-3 sm:gap-4 p-0 flex-1 justify-between">
                <div className="flex flex-col gap-1.5 sm:gap-2 lg:gap-[9.2px]">

                  {/* Card Title */}
                  <h3 className="
                    text-[#1180c5]
                    font-semibold
                    text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]
                    leading-[22px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px]
                  ">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[#5A6272] font-normal text-xs sm:text-[14px] md:text-[15px] lg:text-sm leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[22.4px]">
                    {service.description}
                  </p>
                </div>

                <Link href={`/services/${service.id}`}>
                  <Button
                    variant="link"
                    className="cursor-pointer h-auto p-0 flex flex-col items-start gap-1 group mt-auto"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 relative">
                      <span className="text-[#1180c5] font-semibold text-xs sm:text-sm lg:text-base">
                        Learn More
                      </span>
                      <img
                        src="/arrow-right 2.svg"
                        alt="Arrow right"
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#1180c5] transition-transform duration-300 group-hover:translate-x-1"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1180c5] transition-all duration-300 group-hover:w-[calc(100%+12px)]" />
                    </div>
                  </Button>
                </Link>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};