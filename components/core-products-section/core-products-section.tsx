import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";
import { products as allProducts } from "@/lib/products-data";

const coreProducts = allProducts.slice(0, 3);

export const CoreProductsSection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center py-12 md:py-16 lg:py-[120px] px-4 md:px-8 lg:px-[120px]">
      <div className="flex flex-col max-w-[1200px] w-full items-center gap-8 md:gap-12 lg:gap-[50px]">

        {/* HEADER */}
        <header className="flex flex-col sm:flex-row items-start sm:items-end justify-between w-full gap-6 sm:gap-8 -translate-y-4 animate-fade-in opacity-0">
          <div className="flex flex-col items-start justify-center gap-4 md:gap-5 flex-1">
            <div className="flex flex-col items-start w-full">
              <p className="text-sm sm:text-[14px] md:text-[15px] lg:text-sm font-semibold text-[#0c6e8a] leading-[18px] sm:leading-[20px] md:leading-[22px]">
              Our products
              </p>
            </div>

            <div className="flex flex-col items-start max-w-full lg:max-w-[530px]">
              <h2 className="text-[#1180c5] font-semibold text-[22px] lg:whitespace-nowrap sm:text-[26px] md:text-[32px] lg:text-[38px] tracking-[-0.6px] sm:tracking-[-0.8px] lg:tracking-[-1.14px] leading-[28px] sm:leading-[34px] md:leading-[44px] lg:leading-[49.4px]">
              Our core products and services include.
              </h2>
            </div>
          </div>

          <Link href="/services">
            <Button className="cursor-pointer gap-3 md:gap-4 pt-3 pb-[15px] px-5 md:px-[20px] bg-[#0c6e8a] hover:bg-[#0c6e8a]/90 h-auto rounded-none border border-[#0c6e8a] transition-colors w-full sm:w-auto">
              <span className="font-semibold text-white text-[12px] sm:text-sm md:text-base tracking-[-0.48px] leading-[20px] md:leading-[25.6px] whitespace-nowrap">
                All services
              </span>
              <img
                src="/arrow-right.svg"
                alt="Arrow right"
                className="w-5 h-5 md:w-6 md:h-6 brightness-0 invert"
              />
            </Button>
          </Link>
        </header>

        {/* PRODUCTS GRID - using services-style cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[30px]">
          {coreProducts.map((product, index) => (
            <Card
              key={product.id}
              className="flex cursor-pointer flex-col h-full border-0 shadow-none bg-transparent -translate-y-4 animate-fade-in opacity-0"
              style={
                {
                  "--animation-delay": `${(index + 1) * 200}ms`,
                } as React.CSSProperties
              }
            >
              <div className="w-full h-[180px] sm:h-[200px] overflow-hidden rounded-none shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <CardContent className="flex bg-[#FAFAFA] pt-4 flex-col gap-3 sm:gap-4  flex-1 justify-between">
                <div className="flex flex-col gap-1.5 sm:gap-2 lg:gap-[9.2px]">
                  <h3
                    className="
                      text-[#1180c5]
                      font-semibold
                      text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]
                      leading-[22px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px]
                    "
                  >
                    {product.title}
                  </h3>
                  <p className="text-[#5A6272] font-normal text-xs sm:text-[14px] md:text-[15px] lg:text-sm leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[22.4px]">
                    {product.description}
                  </p>
                </div>

                <Link href={`/products/${product.slug}`}>
                  <Button
                    variant="link"
                    className="cursor-pointer h-auto p-0 flex flex-col items-start gap-1 group mt-auto"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 relative">
                      <span className="text-[#1180c5] font-semibold text-xs sm:text-sm lg:text-base">
                        Learn More
                      </span>
                      <img
                        src="/arrow-right 2.svg"
                        alt="Arrow right"
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#1180c5] transition-transform duration-300 group-hover:translate-x-1"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1180c5] transition-all duration-300 group-hover:w-[calc(100%+12px)]" />
                    </div>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};