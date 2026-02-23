import { MissionVisionSection as Navbar } from "@/components/mission-vision-section/mission-vision-section";
import { FooterSection } from "@/components/footer-section/footer-section";
import { CallToActionSection } from "@/components/call-to-action/call-to-action-section";
import { ProductsHeroSection } from "@/components/products-hero-section/products-hero-section";
import { ProductsGridSection } from "@/components/products-grid-section/products-grid-section";

export default function Products() {
  return (
    <div className="flex flex-col w-full items-start relative bg-white overflow-hidden">
      <Navbar backgroundColor="bg-[#1180C5]" />
      <div className="w-full mt-16 sm:mt-20 md:mt-24 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <ProductsHeroSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <ProductsGridSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1800ms]">
        <CallToActionSection />
      </div>
    
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <FooterSection />
      </div>
    </div>
  );
} 