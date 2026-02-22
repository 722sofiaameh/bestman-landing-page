import React from "react";

interface ValueProposition {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const ValuePropositionSection = (): React.ReactElement => {
  const valuePropositions: ValueProposition[] = [
    {
      id: "01",
      number: "01",
      title: "Industry Expertise",
      description:
        "Over three decades of engineering experience delivering high-performance valve solutions.",
    },
    {
      id: "02",
      number: "02",
      title: "Client-Centered Solutions",
      description:
        "We collaborate closely with clients to provide tailored, cost-effective engineering services.",
    },
    {
      id: "03",
      number: "03",
      title: "On-Time Delivery",
      description:
        "Efficient project execution with strict adherence to safety, cost, and schedule.",
    },
    {
      id: "04",
      number: "04",
      title: "Safety-First Culture",
      description:
        "Committed to maintaining the highest health, safety, and environmental standards.",
    },
    {
      id: "05",
      number: "05",
      title: "Integrated Services",
      description:
        "End-to-end valve lifecycle support from procurement to maintenance and refurbishment.",
    },
    {
      id: "06",
      number: "06",
      title: "Global Partnerships",
      description:
        "Strong international OEM affiliations ensuring quality, compliance, and reliability.",
    },
  ];

  return (
    <section className="inline-flex items-center justify-center p-[120px] relative flex-[0_0_auto]">
      <div className="inline-flex flex-col items-center gap-[50px] px-[15px] py-0 max-w-[1200px] relative flex-[0_0_auto]">
        <header className="flex h-[91.81px] items-end justify-center gap-[1.14e-13px] relative self-stretch w-full">
          <div className="flex items-start gap-[19.99px] flex-1 grow mt-[-1.18px] flex-col justify-center relative">
            <div className="flex self-stretch w-full flex-[0_0_auto] flex-col items-start relative">
              <div className="items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                <p className="self-stretch text-[#0c6e8a] text-sm tracking-[-0.42px] leading-[22.4px] relative flex items-center justify-center mt-[-1.00px] [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica] font-semibold">
                  Why choose Bestman?
                </p>
              </div>
            </div>

            <div className="flex max-w-[530px] w-[530px] relative flex-[0_0_auto] flex-col items-start">
              <div className="items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative flex items-center justify-center w-[637px] mt-[-1.00px] mr-[-107.00px] font-brentor-template-framer-website-semantic-heading-2 font-[number:var(--brentor-template-framer-website-semantic-heading-2-font-weight)] text-[#1180c5] text-[length:var(--brentor-template-framer-website-semantic-heading-2-font-size)] tracking-[var(--brentor-template-framer-website-semantic-heading-2-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-2-line-height)] [font-style:var(--brentor-template-framer-website-semantic-heading-2-font-style)]">
                  Precision. Performance. Partnership.
                </h2>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <button
              className="gap-4 pt-3 pb-[15px] px-[30px] flex-[0_0_auto] bg-[#0c6e8a] inline-flex items-center justify-center relative hover:bg-[#0a5c73] transition-colors cursor-pointer border-0"
              aria-label="Learn more about why choose us"
            >
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <span className="w-fit text-white text-base tracking-[-0.48px] leading-[25.6px] whitespace-nowrap relative flex items-center justify-center mt-[-1.00px] [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica] font-semibold">
                    Why choose us
                  </span>
                </div>
              </div>

              <img
                src="/arrow-right.svg"
                alt="Arrow right"
                className="relative w-6 h-6"
              />
            </button>
          </div>
        </header>

        <div className="self-stretch h-[627.66px] w-full relative">
          {valuePropositions.map((item, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            const topPosition = row * 329;
            const leftPosition = col * 400;

            return (
              <article
                key={item.id}
                className="w-[calc(100%_-_800px)] items-start justify-center gap-[30px] pt-[39px] pb-10 px-10 absolute bg-neutral-50 flex flex-col"
                style={{
                  top: `${topPosition}px`,
                  left: `${leftPosition}px`,
                }}
              >
                <div className="flex-col items-start w-full flex-[0_0_auto] flex relative self-stretch">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="items-center justify-center mt-[-1.00px] font-brentor-template-framer-website-semantic-heading-4 font-[number:var(--brentor-template-framer-website-semantic-heading-4-font-weight)] text-[#0c6e8a] text-[length:var(--brentor-template-framer-website-semantic-heading-4-font-size)] tracking-[var(--brentor-template-framer-website-semantic-heading-4-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-4-line-height)] flex relative self-stretch [font-style:var(--brentor-template-framer-website-semantic-heading-4-font-style)]">
                      {item.number}
                    </div>
                  </div>
                </div>

                <div
                  className="w-full h-0.5 bg-[#eeeeeeb2] relative self-stretch"
                  role="separator"
                />

                <div className="flex items-start gap-[9.11px] self-stretch w-full flex-[0_0_auto] flex-col justify-center relative">
                  <div className="flex relative self-stretch w-full flex-[0_0_auto] flex-col items-start">
                    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-brentor-template-framer-website-semantic-heading-5 font-[number:var(--brentor-template-framer-website-semantic-heading-5-font-weight)] text-[#1180c5] text-[length:var(--brentor-template-framer-website-semantic-heading-5-font-size)] tracking-[var(--brentor-template-framer-website-semantic-heading-5-letter-spacing)] leading-[var(--brentor-template-framer-website-semantic-heading-5-line-height)] [font-style:var(--brentor-template-framer-website-semantic-heading-5-font-style)]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="flex flex-col items-start pt-0 pb-[0.52px] px-0 relative self-stretch w-full flex-[0_0_auto]">
                      <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-[#5a6272] text-sm tracking-[0] leading-[22.4px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
