import { MissionVisionSection as Navbar } from "@/components/mission-vision-section/mission-vision-section";
import { FooterSection } from "@/components/footer-section/footer-section";
import { CallToActionSection } from "@/components/call-to-action/call-to-action-section";
import { CustomerTestimonialsSection } from "@/components/customer-testimonials-section/customer-testimonials-section";
import { MissionHeroSection } from "@/components/mission-hero-section";
import { MissionStatementSection } from "@/components/mission-statement-section/mission-statement-section";
import { MissionStatement } from "@/components/mission-statement";
import { PrinciplesSection } from "@/components/principles-section/principles-section";

export default function Mission() {
    return (
        <div className="flex flex-col w-full items-start relative bg-white overflow-hidden">
            <div className="w-full -translate-y-4 animate-fade-in opacity-0">
                <Navbar backgroundColor="bg-[#1180C5]" />
            </div>
            <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
                {/* Mission content goes here */}<MissionHeroSection />
            </div>

            <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
        <MissionStatement />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1000ms]"><PrinciplesSection /></div>
            <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1800ms]">
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