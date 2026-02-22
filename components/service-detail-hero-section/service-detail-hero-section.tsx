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
        <div className="flex flex-col justify-center py-16 px-4 md:px-8 lg:px-[120px]">
          <p className="text-white/80 text-sm font-semibold mb-4">
            Service
          </p>
          
          <h1 className="text-5xl font-bold text-white leading-tight tracking-tight mb-6 w-[530px]">
            {service.title}
          </h1>

          <p className="text-white/80 text-base leading-relaxed mb-8 ">
            {service.description}
          </p>

          <Link href="/contact">
            <button className="flex items-center gap-2 bg-white border-2 border-[#1180C5] text-[#1180C5] font-semibold px-6 py-3 rounded-sm hover:opacity-90 transition-opacity w-fit">
              <span>Get in touch</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="relative min-h-[380px] lg:min-h-0 p-4 md:p-8 lg:p-14">
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
