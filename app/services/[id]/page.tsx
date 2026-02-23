import { MissionVisionSection as Navbar } from "@/components/mission-vision-section/mission-vision-section";
import { FooterSection } from "@/components/footer-section/footer-section";
import { CallToActionSection } from "@/components/call-to-action/call-to-action-section";
import { FAQSection } from "@/components/faq-section/faq-section";
import { ServiceDetailHeroSection } from "@/components/service-detail-hero-section/service-detail-hero-section";
import Link from "next/link";

interface ServiceDetailsPageProps {
  params: {
    id: string;
  };
}

// Service data - matching the services from EngineeringServicesSection
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

const contentSections = [
  {
    heading: "Comprehensive Service Delivery",
    paragraphs: [
      "Our team of experienced engineers and technicians ensures that every project is executed with precision and attention to detail. We understand the critical nature of valve systems in industrial operations and maintain the highest standards of quality and safety.",
      "With decades of industry experience, we have developed proven methodologies and best practices that ensure reliable performance and extended asset life. Our commitment to excellence is reflected in every project we undertake.",
    ],
  },
  {
    heading: "Industry-Leading Expertise",
    paragraphs: [
      "We work with leading manufacturers and suppliers worldwide to ensure access to the latest technology and equipment. Our partnerships with global OEMs enable us to provide comprehensive solutions tailored to your specific needs.",
      "Our technical team undergoes continuous training and certification to stay current with industry standards and emerging technologies. This ensures that we can address even the most complex engineering challenges.",
    ],
  },
  {
    heading: "Quality Assurance & Compliance",
    paragraphs: [
      "All our services are performed in accordance with international standards and regulations. We maintain comprehensive documentation and quality control processes to ensure traceability and compliance.",
      "Our facilities and mobile workshops are certified and regularly audited to maintain the highest levels of quality and safety. We are committed to environmental responsibility and sustainable practices in all our operations.",
    ],
  },
];

export default function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  const service = services.find((s) => s.id === params.id) || services[0];
  const otherServices = services.filter((s) => s.id !== params.id).slice(0, 3);

  return (
    <div className="flex flex-col w-full items-start relative bg-white overflow-hidden">
      <div className="w-full -translate-y-4 animate-fade-in opacity-0">
        <Navbar backgroundColor="bg-[#1180C5]" />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <ServiceDetailHeroSection service={service} />

        {/* Content Sections */}
        <div className="w-full py-16 px-4 md:px-8 lg:px-[180px]">
          <div className="max-w-[1200px] mx-auto space-y-12">
            {contentSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#1180C5] leading-tight">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-gray-700 text-base leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <FAQSection />
      </div>
      
      {/* Other Services Section */}
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1300ms]">
        <section className="w-full bg-white py-[120px] px-4 md:px-8 lg:px-[120px]">
          <div className="max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
              <div className="flex flex-col gap-4">
                <p className="text-[#0C6E8A] font-semibold text-sm leading-[22px] md:leading-[25.6px]">
                  Other services
                </p>
                <h2 className="text-[#1180c5] font-semibold text-[28px] md:text-[34px] lg:text-[38px] tracking-[-1.14px] leading-[1.3] md:leading-[49.4px]">
                  Explore more services.
                </h2>
              </div>
              <Link href="/services">
                <button className="flex items-center gap-2 bg-[#0c6e8a] hover:bg-[#0a5a70] text-white font-semibold px-6 py-3 rounded-sm transition-colors whitespace-nowrap">
                  <span>View all services</span>
                  <img src="/arrow-right.svg" alt="Arrow right" className="w-5 h-5 brightness-0 invert" />
                </button>
              </Link>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {otherServices.map((otherService) => (
                <div key={otherService.id} className="flex cursor-pointer flex-col h-full">
                  <div className="w-full h-[200px] overflow-hidden rounded-none shrink-0 mb-4">
                    <img
                      src={otherService.image}
                      alt={otherService.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex flex-col gap-[9.2px]">
                      <h3 className="text-[#1180c5] font-semibold text-[24px] leading-[32px]">
                        {otherService.title}
                      </h3>
                      <p className="text-[#5A6272] font-normal text-sm leading-[22.4px]">
                        {otherService.description}
                      </p>
                    </div>
                    <Link href={`/services/${otherService.id}`} className="mt-auto">
                      <div className="flex items-center gap-3 relative group w-fit">
                        <span className="text-[#1180c5] font-semibold text-base">
                          Learn More
                        </span>
                        <img src="/arrow-right%202.svg" alt="Arrow right" className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
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
      
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <CallToActionSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1600ms]">
        <FooterSection />
      </div>
    </div>
  );
}
