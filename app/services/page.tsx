import { MissionVisionSection as Navbar } from "@/components/mission-vision-section/mission-vision-section";
import { FooterSection } from "@/components/footer-section/footer-section";
import { CallToActionSection } from "@/components/call-to-action/call-to-action-section";
import { ServicesHeroSection } from "@/components/services-hero-section/services-hero-section";
import { EngineeringServicesSection } from "@/components/engineering-services-section/engineering-services-section";
import { CustomerTestimonialsSection } from "@/components/customer-testimonials-section/customer-testimonials-section";
import { PrinciplesSection } from "@/components/principles-section/principles-section";

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full items-start relative bg-white overflow-hidden">
      <Navbar backgroundColor="bg-greyscale-0" />
      
      <div className="w-full -translate-y-4 mt-24 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <EngineeringServicesSection isServicesPage={true} />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:800ms]">
        <PrinciplesSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <CustomerTestimonialsSection />
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
