import { MissionVisionSection as Navbar } from "@/components/mission-vision-section/mission-vision-section";
import { FooterSection } from "@/components/footer-section/footer-section";
import { CallToActionSection } from "@/components/call-to-action/call-to-action-section";
import { CustomerTestimonialsSection } from "@/components/customer-testimonials-section/customer-testimonials-section";
import { CoreProductsSection } from "@/components/core-products-section/core-products-section";
import { PromiseSection } from "@/components/promise-section/promise-section";
import { WhyWeSetApart } from "@/components/why-we-set-apart";
import { WhyChooseUsHeroSection } from "@/components/why-choose-us-hero-section/why-choose-us-hero-section";

export default function WhyChooseUsPage() {
  return (
    <div className="flex flex-col w-full items-start relative bg-white overflow-hidden">
      <div className="w-full -translate-y-4 animate-fade-in opacity-0">
        <Navbar backgroundColor="bg-[#1180C5]" />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <WhyChooseUsHeroSection />
      </div>
      <section className="relative w-full overflow-hidden" style={{ marginTop: '-40px', display: 'block' }}>
        <div className="relative w-full h-[600px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="flex flex-col items-start justify-center h-full w-full [background:url(https://c.animaapp.com/mlxaygwhYd0iJj/img/0vw3rubxs4pjrkqfeimk3r5p8-png.png)_50%_50%_/_cover]" />
          <div className="absolute inset-0 bg-[#1180c5] opacity-20" />
        </div>
      </section>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <WhyWeSetApart />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <CoreProductsSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <PromiseSection />
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
