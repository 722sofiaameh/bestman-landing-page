import { MissionVisionSection as Navbar } from "@/components/mission-vision-section/mission-vision-section";
import { FooterSection } from "@/components/footer-section/footer-section";
import { CallToActionSection } from "@/components/call-to-action/call-to-action-section";
import { ContactHeroSection } from "@/components/contact-hero-section/contact-hero-section";
import { ContactSection } from "@/components/contact-section/contact-section";
import { NavigateSection } from "@/components/navigate-section/navigate-section";
import { FAQSection } from "@/components/faq-section/faq-section";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full items-start relative bg-white overflow-hidden">
      <Navbar backgroundColor="bg-[#1180C5]" />
      <div className="w-full mt-24 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <ContactHeroSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <ContactSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
        <NavigateSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:800ms]">
        <FAQSection />
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
