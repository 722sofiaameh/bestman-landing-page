import { MissionVisionSection as Navbar } from "@/components/mission-vision-section/mission-vision-section";
import { FooterSection } from "@/components/footer-section/footer-section";
import { CallToActionSection } from "@/components/call-to-action/call-to-action-section";
import { HeroSection } from "@/components/hero-section/hero-section";
import { HeroContentSection } from "@/components/hero-content-section/hero-content-section";
import { KeyMetricsSection } from "@/components/key-metrics-section-about/key-metrics-section";
import { MissionVisionSection as MissionVisionContentSection } from "@/components/mission-vision-content-section/mission-vision-content-section";
import { ServiceDetailsSection } from "@/components/service-details-section/service-details-section";
import { ValuePropositionSection } from "@/components/value-proposition-section/value-proposition-section";
import { CustomerTestimonialsSection } from "@/components/customer-testimonials-section/customer-testimonials-section";
import { ServicesOverviewSection } from "@/components/services-overview-section/services-overview-section";
import { CoreValuesSection } from "@/components/core-values-section/core-values-section";


export default function AboutPage() {
  return (
    <div className=" md:overflow-hidden">
      <Navbar backgroundColor="bg-[#1180c5]" />
      <div className="w-full pb-0 relative z-10">
        <HeroSection />
      </div>
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[350px] lg:h-[600px] -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="flex flex-col items-start justify-center h-full w-full bg-[url(/Video-Section1.svg)] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-[#1180c5] opacity-20" />
        </div>
      </section>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <KeyMetricsSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <MissionVisionContentSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <ServicesOverviewSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1600ms]">
        <CoreValuesSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1800ms]">
        <CustomerTestimonialsSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1800ms]">
        <CallToActionSection />
      </div>

    
      
      <FooterSection />
    </div>
  );
}