import { MissionVisionSection as Navbar } from "@/components/mission-vision-section/mission-vision-section";
import { FooterSection } from "@/components/footer-section/footer-section";
import { CallToActionSection } from "@/components/call-to-action/call-to-action-section";
import { ServiceDetailHeroSection } from "@/components/service-detail-hero-section/service-detail-hero-section";
import { services } from "@/lib/services-data";
import Link from "next/link";

interface ServiceDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  const { id } = await params;
  const service = services.find((s) => s.id === id) || services[0];
  const otherServices = services.filter((s) => s.id !== id).slice(0, 3);

  return (
    <div className="flex flex-col w-full items-start relative bg-white overflow-hidden">
      <Navbar backgroundColor="bg-[#1180C5]" />
      <div className="w-full mt-16 sm:mt-20 md:mt-24 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <ServiceDetailHeroSection service={service} />

        {/* Service Overview Section */}
        <section className="w-full bg-white py-12 sm:py-12 md:py-12 lg:py-[80px] px-4 sm:px-6 md:px-8 lg:px-[180px]">
          <div className="max-w-[1200px] mx-auto">
            {/* SERVICE OVERVIEW Heading */}
            <h2 className="text-start text-[#1180C5] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-4 md:mb-4">
              SERVICE OVERVIEW
            </h2>

            {/* Introductory Text */}
            <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12 md:mb-10 text-start ">
              {service.overview?.intro?.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#5A6272] text-sm sm:text-base leading-relaxed text-start"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* WHAT WE OFFER Subsection */}
            <div className="mb-8 sm:mb-8 md:mb-10">
              <h3 className="text-[#1180C5] font-bold text-base sm:text-xl md:text-2xl mb-4 sm:mb-4">
                WHAT WE OFFER
              </h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-1 text-[#5A6272] text-sm sm:text-base leading-relaxed max-w-3xl">
                {service.overview?.whatWeOffer?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* OUR APPROACH Subsection */}
            <div>
            <h3 className="text-[#1180C5] font-bold text-base sm:text-xl md:text-2xl mb-4 sm:mb-4">

                OUR APPROACH
              </h3>
              <div className="grid  gap-4 sm:gap-6">
                {service.overview?.ourApproach?.map((item, index) => (
                  <div key={index} className="space-y-1 sm:space-y-1">
                    <h4 className="text-[#0C6E8A] font-bold text-sm sm:text-sm md:text-base">
                      {item.title}
                    </h4>
                    <p className="text-[#5A6272] text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Other Services Section */}
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <section className="w-full bg-white py-[120px] px-4 md:px-8 lg:px-[120px]">
          <div className="max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
              <div className="flex flex-col gap-3 sm:gap-4">
                <p className="text-[#0C6E8A] font-semibold text-xs sm:text-sm leading-[18px] sm:leading-[22px] md:leading-[25.6px]">
                  Other services
                </p>
                <h2 className="text-[#1180c5] font-semibold text-[18px] sm:text-[24px] md:text-[34px] lg:text-[38px] tracking-[-0.44px] sm:tracking-[-0.6px] md:tracking-[-0.9px] lg:tracking-[-1.14px] leading-[1.3] sm:leading-[32px] md:leading-[44px] lg:leading-[49.4px]">
                  Explore more services.
                </h2>
              </div>
              <Link href="/services">
                <button className="flex items-center gap-2 bg-[#0c6e8a] hover:bg-[#0a5a70] text-white font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-none transition-colors whitespace-nowrap">
                  <span>View all services</span>
                  <img src="/arrow-right.svg" alt="Arrow right" className="w-4 h-4 sm:w-5 sm:h-5 brightness-0 invert" />
                </button>
              </Link>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[24px] lg:gap-[30px]">
              {otherServices.map((otherService) => (
                <div key={otherService.id} className="flex cursor-pointer flex-col h-full">
                  <div className="w-full h-[180px] sm:h-[200px] overflow-hidden rounded-none shrink-0 mb-3 sm:mb-4">
                    <img
                      src={otherService.image}
                      alt={otherService.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                    <div className="flex flex-col gap-2 sm:gap-[9.2px]">
                      <h3 className="text-[#1180c5] font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px]">
                        {otherService.title}
                      </h3>
                      <p className="text-[#5A6272] font-normal text-xs sm:text-sm leading-[18px] sm:leading-[20px] md:leading-[22.4px]">
                        {otherService.description}
                      </p>
                    </div>
                    <Link href={`/services/${otherService.id}`} className="mt-auto">
                      <div className="flex items-center gap-2 sm:gap-3 relative group w-fit">
                        <span className="text-[#1180c5] font-semibold text-sm sm:text-base">
                          Learn More
                        </span>
                        <img src="/arrow-right%202.svg" alt="Arrow right" className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1180c5] transition-all duration-300 group-hover:w-[calc(100%+12px)]" />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1300ms]">
        <CallToActionSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <FooterSection />
      </div>
    </div>
  );
}
