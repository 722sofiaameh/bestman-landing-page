import { JSX } from "react";
import { Card, CardContent } from "../ui/card";

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

const companyLogos = [
  {
    src: "https://c.animaapp.com/mlxaygwhYd0iJj/img/clip-path-group.png",
    alt: "Company Logo 1",
  },
  {
    src: "https://c.animaapp.com/mlxaygwhYd0iJj/img/clip-path-group-1.png",
    alt: "Company Logo 2",
  },
  {
    src: "https://c.animaapp.com/mlxaygwhYd0iJj/img/clip-path-group-2.png",
    alt: "Company Logo 3",
  },
  {
    src: "https://c.animaapp.com/mlxaygwhYd0iJj/img/clip-path-group-3.png",
    alt: "Company Logo 4",
  },
  {
    vectors: [
      {
        src: "https://c.animaapp.com/mlxaygwhYd0iJj/img/vector-6.svg",
        alt: "Vector 1",
        className: "absolute w-[67.09%] h-[61.97%] top-[24.75%] left-[31.58%]",
      },
      {
        src: "https://c.animaapp.com/mlxaygwhYd0iJj/img/vector-12.svg",
        alt: "Vector 2",
        className: "absolute w-[24.68%] h-[90.91%] top-[4.55%] left-0",
      },
    ],
    alt: "Company Logo 5",
  },
  {
    src: "https://c.animaapp.com/mlxaygwhYd0iJj/img/clip-path-group-4.png",
    alt: "Company Logo 6",
  },
];

export const CustomerTestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex justify-center py-0 pb-[121px] px-4 md:px-[120px]">
      <div className="flex flex-col max-w-[1200px] w-full items-center px-[15px]">
        <div className="flex flex-col items-center justify-center gap-[50px] w-full translate-y-[-1rem] animate-fade-in opacity-0">
          <header className="flex flex-col items-center gap-5 w-full">
            <div className="flex flex-col items-center w-full">
              <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#0c6e8a] text-sm text-center tracking-[-0.42px] leading-[22.4px]">
                Testimonials
              </p>
            </div>

            <div className="flex flex-col items-center max-w-[530px]">
              <h2 className="font-brentor-template-framer-website-semantic-heading-2 font-[number:var(--brentor-template-framer-website-semantic-heading-2-font-weight)] text-[#1180c5] text-[length:var(--brentor-template-framer-website-semantic-heading-2-font-size)] text-center tracking-[var(--brentor-template-framer-website-semantic-heading-2-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-2-line-height)] [font-style:var(--brentor-template-framer-website-semantic-heading-2-font-style)]">
                Hear from our people.
              </h2>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex-1 border-0 shadow-none">
                <CardContent className="flex flex-col gap-[30px] p-5 bg-neutral-50">
                  <div className="flex flex-col gap-[19.39px]">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, starIndex) => (
                          <div
                            key={starIndex}
                            className="w-4 h-4 flex items-center justify-center overflow-hidden"
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

                    <p className="font-brentor-template-framer-website-plus-jakarta-sans-regular font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-[#1180c5] text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)]">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>

                  <p className="font-brentor-template-framer-website-plus-jakarta-sans-regular font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-[#5a6272] text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)]">
                    {testimonial.companies}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-[30px] py-[59px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="flex flex-col items-center w-full">
              <p className="font-brentor-template-framer-website-plus-jakarta-sans-regular font-[number:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-weight)] text-[#0c6e8a] text-[length:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-size)] text-center tracking-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-letter-spacing)] leading-[var(--brentor-template-framer-website-plus-jakarta-sans-regular-line-height)] [font-style:var(--brentor-template-framer-website-plus-jakarta-sans-regular-font-style)]">
                Trusted by Industry Leaders
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-10 w-full">
              {companyLogos.map((logo, index) => (
                <div
                  key={index}
                  className="w-[161.66px] h-[30px] flex items-center justify-center"
                >
                  {logo.vectors ? (
                    <div className="relative w-[105px] h-[30px]">
                      {logo.vectors.map((vector, vectorIndex) => (
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
                      className="w-full h-full bg-center bg-no-repeat bg-contain"
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
    </section>
  );
};
