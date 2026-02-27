import { MissionVisionSection as Navbar } from "@/components/mission-vision-section/mission-vision-section";
import { FooterSection } from "@/components/footer-section/footer-section";
import { CallToActionSection } from "@/components/call-to-action/call-to-action-section";
import { products } from "@/lib/products-data";

interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id) || products[0];
  const overview = product.overview && product.overview.length > 0 ? product.overview : [product.description];
  const keyFeatures = product.keyFeatures || [];
  const whyChoose = product.whyChoose || [];

  return (
    <div className="flex flex-col w-full items-start relative bg-white overflow-hidden">
      <Navbar backgroundColor="bg-greyscale-0" />

      <div className="w-full mt-24 sm:mt-20 md:mt-28 -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">

        {/* Header Section */}
        <div className="flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-[120px]">
          <div className="w-full max-w-[1200px]">
            <p className="text-xs sm:text-sm lg:text-base text-[#0C6E8A] font-semibold mb-2 sm:mb-3 lg:mb-4 text-center">
              Product Details
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1180C5] text-center leading-tight">
              {product.title}
            </h1>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="w-full px-4 md:px-8 lg:px-[120px]">
          <div className="max-w-[1200px] mx-auto">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Product Overview + Key Features + Why Choose Our Equipment */}
        <section className="w-full py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-[200px]">
          <div className="max-w-[1200px] mx-auto space-y-10 sm:space-y-12 lg:space-y-14">
            {/* Product Overview */}
            <div className="space-y-4 sm:space-y-5">
            <h2 className="text-start text-[#1180C5] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-4 md:mb-4">

                Product Overview
              </h2>
              {overview.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#5A6272] text-sm sm:text-base leading-relaxed text-start"

                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Features + Why Choose Our Equipment */}
            <div className="grid grid-cols-1 gap-8 sm:gap-8">
              {/* Key Features */}
              {keyFeatures.length > 0 && (
                <div className="space-y-4 sm:space-y-5">
                             <h3 className="text-[#1180C5] font-bold text-base sm:text-xl md:text-2xl mb-4 sm:mb-4">

                    Key Features
                  </h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-1 text-[#5A6272] text-sm sm:text-base leading-relaxed max-w-3xl">

                    {keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why Choose Our Equipment */}
              {whyChoose.length > 0 && (
                <div className="space-y-3 sm:space-y-3">
                            <h3 className="text-[#1180C5] font-bold text-base sm:text-xl md:text-2xl mb-4 sm:mb-4">

                    Why Choose Our Equipment
                  </h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-1 text-[#5A6272] text-sm sm:text-base leading-relaxed max-w-3xl">

                    {whyChoose.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
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