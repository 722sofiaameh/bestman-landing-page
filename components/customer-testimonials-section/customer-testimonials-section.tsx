import { JSX } from "react";
import { Card, CardContent } from "../ui/card";

interface CompanyLogoVector {
  src: string;
  alt: string;
  className: string;
}

interface CompanyLogo {
  src?: string;
  alt: string;
  vectors?: CompanyLogoVector[];
}

const testimonials = [
  {
    rating: 5,
    quote:
      "We are proud to have executed notable projects and partnered with leading organizations in Nigeria's oil & gas and industrial sectors.",
    companies: "EFCO, PROVALVE, Nuova Simat, PetroServices",
  },
  {
    rating: 5,
    quote:
      "We are proud to have executed notable projects and partnered with leading organizations in Nigeria's oil & gas and industrial sectors.",
    companies: "EFCO, PROVALVE, Nuova Simat, PetroServices",
  },
  {
    rating: 5,
    quote:
      "We are proud to have executed notable projects and partnered with leading organizations in Nigeria's oil & gas and industrial sectors.",
    companies: "EFCO, PROVALVE, Nuova Simat, PetroServices",
  },
];

const companyLogos: CompanyLogo[] = [
  {
    src: "/image14.svg",
    alt: "Company Logo 1",
  },
  {
    src: "/image15.svg",
    alt: "Company Logo 2",
  },
  {
    src: "/image16.svg",
    alt: "Company Logo 3",
  },
  {
    src: "/image17.svg",
    alt: "Company Logo 4",
  },
 
  // {
  //   src: "https://c.animaapp.com/mlxaygwhYd0iJj/img/clip-path-group-4.png",
  //   alt: "Company Logo 6",
  // },
];

export const CustomerTestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex justify-center py-0 pb-12 sm:pb-16 md:pb-20 lg:pb-[121px] px-4 sm:px-6 md:px-8 lg:px-[120px]">
      <div className="flex flex-col max-w-[1200px] w-full items-center px-4 sm:px-[15px]">
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-[50px] w-full -translate-y-4 animate-fade-in opacity-0">
          <header className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 w-full">
            <div className="flex flex-col items-center w-full">
              <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#0c6e8a] text-xs sm:text-sm md:text-base text-center tracking-[-0.42px] leading-[20px] sm:leading-[22.4px]">
                Testimonials
              </p>
            </div>

            <div className="flex flex-col items-center max-w-full sm:max-w-[530px] px-2 sm:px-4">
              <h2 className="font-brentor-template-framer-website-semantic-heading-2 text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-semibold tracking-[-0.43px] leading-tight sm:leading-[1.3] md:leading-[50px] lg:leading-[59.8px] text-[#1180c5] text-center">
                Hear from our people.
              </h2>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-[30px] w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex-1 border-0 shadow-none cursor-pointer">
                <CardContent className="flex flex-col gap-5 sm:gap-[30px] p-4 sm:p-5 bg-neutral-50">
                  <div className="flex flex-col gap-3 sm:gap-[19.39px]">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, starIndex) => (
                          <div
                            key={starIndex}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center overflow-hidden"
                          >
                            <img
                              className="w-[95.11%] h-[96.48%]"
                              alt="Star"
                              src="https://c.animaapp.com/mlxaygwhYd0iJj/img/vector-1.svg"
                            />
                          </div>
                        ),
                      )}
                    </div>

                    <p className="font-brentor-template-framer-website-plus-jakarta-sans-regular font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-[#1180c5] text-xs sm:text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] leading-[1.6] sm:leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)]">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>

                  <p className="font-brentor-template-framer-website-plus-jakarta-sans-regular font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-[#5a6272] text-xs sm:text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] leading-[1.6] sm:leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)]">
                    {testimonial.companies}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-5 sm:gap-[30px] py-8 sm:py-10 lg:py-[59px] w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="flex flex-col items-center w-full">
              <p className="font-brentor-template-framer-website-plus-jakarta-sans-regular font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-[#0c6e8a] text-xs sm:text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] text-center tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)]">
                Trusted by Industry Leaders
              </p>
            </div>

            <div className="w-full overflow-hidden">
              <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 w-max animate-logo-scroll">
                {[...companyLogos, ...companyLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="w-[120px] h-[24px] sm:w-[140px] sm:h-[26px] lg:w-[240px] lg:h-[80px] flex items-center justify-center"
                  >
                    {logo.vectors ? (
                      <div className="relative w-[80px] h-[24px] sm:w-[95px] sm:h-[27px] lg:w-[220px] lg:h-[80px]">
                        {logo.vectors.map((vector: CompanyLogoVector, vectorIndex: number) => (
                          <img
                            key={vectorIndex}
                            className={vector.className}
                            alt={vector.alt}
                            src={vector.src}
                          />
                        ))}
                      </div>
                    ) : (
                      <div
                        className="w-full h-full lg:h-[80px] bg-center bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${logo.src})` }}
                        role="img"
                        aria-label={logo.alt}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};