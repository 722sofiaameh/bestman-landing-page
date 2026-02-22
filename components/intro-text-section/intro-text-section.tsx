import React from "react";
import Link from "next/link";

const navigationLinks = [
  { id: 1, label: "About Us" },
  { id: 2, label: "Services" },
  { id: 3, label: "Products" },
];

export const IntroTextSection = (): React.ReactElement => {
  return (
    <header className="flex flex-col w-full items-start fixed top-0 left-0">
      <nav className="flex items-center justify-center self-stretch w-full flex-[0_0_auto] bg-[#1180c5] flex-col relative">
        <div className="flex w-[1200px] min-h-20 items-center justify-between px-[15px] py-0 max-w-[1200px] relative flex-[0_0_auto]">
          <img className="relative flex-[0_0_auto]" alt="Frame" src="/Frame 3 (1).svg" />

          <ul className="inline-flex items-start relative self-stretch flex-[0_0_auto]">
            <li className="inline-flex items-center justify-center relative self-stretch flex-[0_0_auto]">
              {navigationLinks.map((link) => (
                <div
                  key={link.id}
                  className="inline-flex flex-col items-start justify-center relative self-stretch flex-[0_0_auto]"
                >
                  <div className="pt-[27.8px] pb-[28.79px] px-[15px] flex-1 grow inline-flex items-center justify-center relative">
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <a
                          href={`#${link.label.toLowerCase().replace(" ", "-")}`}
                          className="font-brentor-template-framer-website-semantic-link font-[number:var(--brentor-template-framer-website-semantic-link-font-weight)] text-white tracking-[var(--brentor-template-framer-website-semantic-link-letter-spacing)] relative flex items-center justify-center w-fit mt-[-1.00px] text-[length:var(--brentor-template-framer-website-semantic-link-font-size)] leading-[var(--brentor-template-framer-website-semantic-link-line-height)] whitespace-nowrap [font-style:var(--brentor-template-framer-website-semantic-link-font-style)]"
                        >
                          {link.label}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </li>
          </ul>

          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <Link href="/contact">
              <button
                className="gap-4 pt-3 pb-[15px] px-[30px] flex-[0_0_auto] bg-[#0c6e8a] inline-flex items-center justify-center relative cursor-pointer border-0"
                aria-label="Contact Us"
              >
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica] font-semibold text-white text-base tracking-[-0.48px] leading-[25.6px] whitespace-nowrap">
                      Contact Us
                    </span>
                  </div>
                </div>

                <img
                  src="/arrow-right.svg"
                  alt="Arrow right"
                  className="relative w-6 h-6"
                />
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
