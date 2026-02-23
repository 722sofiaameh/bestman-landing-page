import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JSX } from "react";

interface ServiceDetailHeroSectionProps {
  service: {
    title: string;
    description: string;
    image: string;
  };
}

export const ServiceDetailHeroSection = ({ service }: ServiceDetailHeroSectionProps): JSX.Element => {
  return (
    <section className="relative w-full bg-[#1180C5] overflow-hidden">
     

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-[120px]">
          <p className="text-white/80 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Service
          </p>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4 sm:mb-6 w-full lg:w-[530px]">
            {service.title}
          </h1>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            {service.description}
          </p>

          <Link href="/contact">
            <button className="flex items-center gap-2 bg-white border-2 border-[#1180C5] text-[#1180C5] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-none hover:opacity-90 transition-opacity w-fit sm:w-fit text-sm sm:text-base">
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-0 p-4 sm:p-6 md:p-8 lg:p-14">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
