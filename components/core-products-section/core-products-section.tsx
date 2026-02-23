import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";

const products = [
  {
    id: 1,
    title: "Mobile Workshop",
    description:
      "We manufactures customized Container Workshops. These are made for on-site repair of Safety and Isolation Valves. Our Mobile Workshops are made from either 20'",
    image: "/Image Wrapper.svg",
    linkColor: "text-[#1180c5]",
    underlineColor: "bg-[#1180c5]",
    isLarge: false,
  },
  {
    id: 2,
    title: "In Situ Valve Repair",
    description:
      "With over two decades of expertise in in-situ valve repair of our principal partner EFCO, we can..",
    image: "/Container (3).svg",
    linkColor: "text-[#1180c5]",
    underlineColor: "bg-[#1180c5]",
    isLarge: false,
  },
  {
    id: 3,
    title: "Valve Machining Technology",
    description:
      "We specialize in in situ machining of Turbine Control Valves using the NC controlled EFCO",
    image: "https://c.animaapp.com/mlvt2sbbsosEG0/img/building-2.png",
    linkColor: "text-white",
    underlineColor: "bg-greyscale-0",
    isLarge: true,
  },
];

export const CoreProductsSection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center py-12 md:py-16 lg:py-[120px] px-4 md:px-8 lg:px-[120px]">
      <div className="flex flex-col max-w-[1200px] w-full items-center gap-8 md:gap-12 lg:gap-[50px]">
        <header className="flex flex-col sm:flex-row items-start sm:items-end justify-between w-full gap-6 sm:gap-8 -translate-y-4 animate-fade-in opacity-0">
          <div className="flex flex-col items-start justify-center gap-4 md:gap-5 flex-1">
            <div className="flex flex-col items-start w-full">
              <p className="text-sm font-semibold text-[#0c6e8a] text-(length:--brentor-template-framer-website-semantic-heading-6-font-size) tracking-[var(--brentor-template-framer-website-semantic-heading-6-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-6-line-height)] font-brentor-template-framer-website-semantic-heading-6 [font-style:var(--brentor-template-framer-website-semantic-heading-6-font-style)]">
                Our products
              </p>
            </div>

            <div className="flex flex-col items-start max-w-full lg:max-w-[530px]">
              <h2 className="text-[#1180c5] font-semibold text-[28px] md:text-[34px] lg:text-[38px] tracking-[-1.14px] leading-[1.3] md:leading-[49.4px]">
                Our core products and services include.
              </h2>
            </div>
          </div>

          <Link href="/products">
            <Button className="cursor-pointer gap-3 md:gap-4 pt-3 pb-[15px] px-5 md:px-[20px] bg-[#0c6e8a] hover:bg-[#0c6e8a]/90 h-auto rounded-none border border-[#0c6e8a] transition-colors w-full sm:w-auto">
              <span className="font-semibold text-greyscale-0 text-sm md:text-base tracking-[-0.48px] leading-[25.6px] whitespace-nowrap">
                All products
              </span>
              <img
                src="/arrow-right.svg"
                alt="Arrow right"
                className="w-5 h-5 md:w-6 md:h-6 brightness-0 invert"
              />
            </Button>
          </Link>
        </header>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-[30px] w-full lg:flex-nowrap">
          {products.slice(0, 2).map((product, index) => (
            <Card
              key={product.id}
              className="flex flex-col flex-1 min-w-0 md:min-w-[280px] rounded-none border-0 shadow-none bg-white -translate-y-4 animate-fade-in opacity-0"
              style={
                {
                  "--animation-delay": `${200 + index * 200}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="flex flex-col gap-5 p-0">
                <div
                  className="w-full h-[200px] bg-cover bg-center bg-no-repeat rounded-none"
                  style={{ backgroundImage: `url(${product.image})` }}
                />

                <div className="flex flex-col gap-4 rounded-none w-full">
                  <div className="h-[86.02px] overflow-hidden">
                    <h3 className="text-[#1180c5] font-semibold text-[24px] tracking-[-0.72px] leading-[32px] mb-2">
                      {product.title}
                    </h3>

                    <p className=" font-normal text-brentor-templateframerwebsiteshuttle-gray text-sm tracking-[0] leading-[22.4px] line-clamp-2 max-w-[270px]">
                      {product.description}
                    </p>
                  </div>

                  <Link
                    href="/products"
                    className="cursor-pointer inline-flex flex-col items-start group"
                  >
                    <div className="flex items-center justify-center  relative pb-1">
                      <span
                        className={`font-brentor-template-framer-website-semantic-button font-[number:var(--brentor-template-framer-website-semantic-button-font-weight)] ${product.linkColor} text-[length:var(--brentor-template-framer-website-semantic-button-font-size)] tracking-[var(--brentor-template-framer-website-semantic-button-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-button-line-height)] [font-style:var(--brentor-template-framer-website-semantic-button-font-style)] whitespace-nowrap`}
                      >
                        About product
                      </span>
                          <img
                            src="/arrow-right 2.svg"
                            alt="Arrow right"
                            className={`w-6 h-6 ${product.linkColor}`}
                          />
                      <div
                        className={`absolute bottom-0 mt-4 left-0 right-0 h-[2px] ${product.underlineColor}`}
                      />
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card
            className="flex flex-col rounded-none flex-1 min-w-0 md:min-w-[280px] lg:min-w-[570px] border-0 shadow-none overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0"
            style={{ "--animation-delay": "600ms" } as React.CSSProperties}
          >
            <CardContent className="flex flex-col justify-end gap-5 p-[30px] h-full min-h-[400px] relative">
              <div
                className="absolute inset-0 rounded-none bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${products[2].image})` }}
              />
              <div className="absolute inset-0 bg-[#1180c5] opacity-60" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.5)_0%,rgba(19,52,117,0.1)_100%)] opacity-60" />

              <div className="relative h-[86.02px] overflow-hidden">
                <h3 className="font-brentor-template-framer-website-semantic-heading-4 text-[24px] tracking-[-0.72px] leading-[32px] font-semibold text-sm text-greyscale-0  [font-style:var(--brentor-template-framer-website-semantic-heading-4-font-style)] mb-2">
                  {products[2].title}
                </h3>

                <p className=" font-normal text-greyscale-0 text-sm tracking-[0] leading-[22.4px] max-w-[310px]">
                  {products[2].description}
                </p>
              </div>

              <Link
                href="/products"
                className="cursor-pointer inline-flex flex-col items-start relative group"
              >
                <div className="flex items-center justify-center gap-3 relative pb-1">
                  <span
                    className={`font-brentor-template-framer-website-semantic-button font-[number:var(--brentor-template-framer-website-semantic-button-font-weight)] ${products[2].linkColor} text-[length:var(--brentor-template-framer-website-semantic-button-font-size)] tracking-[var(--brentor-template-framer-website-semantic-button-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-button-line-height)] [font-style:var(--brentor-template-framer-website-semantic-button-font-style)] whitespace-nowrap`}
                  >
                    About product
                  </span>
                  <img
                    src="/arrow-right.svg"
                    alt="Arrow right"
                    className={`w-6 h-6 ${products[2].linkColor}`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-[2px] ${products[2].underlineColor}`}
                  />
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
