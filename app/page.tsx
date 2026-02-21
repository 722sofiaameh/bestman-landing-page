import { CallToActionSection } from "@/components/call-to-action/call-to-action-section";
import { CoreProductsSection } from "@/components/core-products-section/core-products-section";
import { EngineeringServicesSection } from "@/components/engineering-services-section/engineering-services-section";
import { FooterSection } from "@/components/footer-section/footer-section";
import { HeroBannerSection } from "@/components/hero-banner-section/hero-banner-section";
import { KeyMetricsSection } from "@/components/key-metrics-section/key-metrics-section";
import { MissionStatementSection } from "@/components/mission-statement-section/mission-statement-section";
import { MissionVisionSection } from "@/components/mission-vision-section/mission-vision-section";
import { PrecisionPerformanceSection } from "@/components/precision-performance-section/precision-performance-section";

export default function Home() {
  return (
    <div
      className="flex flex-col w-full items-start relative bg-greyscale-0 overflow-hidden"
      data-model-id="9619:6225"
    >
      <div className="w-full -translate-y-4 animate-fade-in opacity-0">
        <MissionVisionSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        <HeroBannerSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
        <PrecisionPerformanceSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
        <MissionStatementSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:800ms]">
        <EngineeringServicesSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <KeyMetricsSection />
      </div>
      <div className="w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <CoreProductsSection />
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
